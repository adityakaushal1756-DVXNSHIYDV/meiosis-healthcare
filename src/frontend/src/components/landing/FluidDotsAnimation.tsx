import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface RingDot {
  baseAngle: number;
  displace: number; // angular displacement (jelly)
  displaceV: number;
  radialDisplace: number; // radial outward displacement (jelly)
  radialDisplaceV: number;
  depth: number;
  phase: number;
}

// ─── Ring definitions ─────────────────────────────────────────────────────────
// 11 rings: tilts 0, ±15, ±30, ±45, ±60, ±75 degrees
// Ordered: outermost (0°) first, innermost (±75°) last
// ryBase values reduced to ~60% of original for a smaller animation
// rotSpeed halved from original values for slower individual rotation
// eccentricity: each ring has a very flat ellipse so it passes near center

const RING_DEFS: {
  tiltDeg: number;
  ryBase: number;
  rotSpeed: number;
  eccentricity: number;
}[] = [
  { tiltDeg: 0, ryBase: 252, rotSpeed: 0.00225, eccentricity: 0.18 },
  { tiltDeg: 15, ryBase: 231, rotSpeed: -0.0026, eccentricity: 0.2 },
  { tiltDeg: -15, ryBase: 231, rotSpeed: 0.0029, eccentricity: 0.19 },
  { tiltDeg: 30, ryBase: 207, rotSpeed: -0.00315, eccentricity: 0.22 },
  { tiltDeg: -30, ryBase: 207, rotSpeed: 0.0034, eccentricity: 0.21 },
  { tiltDeg: 45, ryBase: 183, rotSpeed: -0.00375, eccentricity: 0.24 },
  { tiltDeg: -45, ryBase: 183, rotSpeed: 0.0041, eccentricity: 0.23 },
  { tiltDeg: 60, ryBase: 159, rotSpeed: -0.0045, eccentricity: 0.26 },
  { tiltDeg: -60, ryBase: 159, rotSpeed: 0.00485, eccentricity: 0.25 },
  { tiltDeg: 75, ryBase: 137, rotSpeed: -0.0054, eccentricity: 0.28 },
  { tiltDeg: -75, ryBase: 137, rotSpeed: 0.00575, eccentricity: 0.27 },
];

// ─── Horizontal stretch factor ─────────────────────────────────────────────────
const H_STRETCH = 1.72;

// ─── Dot spacing along arc ─────────────────────────────────────────────────────
const DOT_SPACING = 10; // px between dots along arc
const MAX_DOTS = 300;

function dotCountForRing(ryBase: number, eccentricity: number): number {
  // Semi-major axis a = ryBase * H_STRETCH, semi-minor b = a * eccentricity
  const a = ryBase * H_STRETCH;
  const b = a * eccentricity;
  // Ramanujan approximation for ellipse circumference
  const h = (a - b) ** 2 / (a + b) ** 2;
  const circ = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));
  return Math.min(MAX_DOTS, Math.max(20, Math.round(circ / DOT_SPACING)));
}

// ─── Color palettes ────────────────────────────────────────────────────────────
// Index maps to ring index 0–10

const COLORS_DARK = [
  { r: 99, g: 102, b: 241, alpha: 0.85 }, // indigo-500      — 0°
  { r: 129, g: 140, b: 248, alpha: 0.82 }, // indigo-400      — +15°
  { r: 129, g: 140, b: 248, alpha: 0.8 }, // indigo-400      — −15°
  { r: 167, g: 139, b: 250, alpha: 0.78 }, // violet-400      — +30°
  { r: 167, g: 139, b: 250, alpha: 0.76 }, // violet-400      — −30°
  { r: 196, g: 181, b: 253, alpha: 0.74 }, // violet-300      — +45°
  { r: 196, g: 181, b: 253, alpha: 0.72 }, // violet-300      — −45°
  { r: 103, g: 232, b: 249, alpha: 0.72 }, // cyan-300        — +60°
  { r: 103, g: 232, b: 249, alpha: 0.7 }, // cyan-300        — −60°
  { r: 251, g: 191, b: 36, alpha: 0.7 }, // amber-400       — +75°
  { r: 251, g: 191, b: 36, alpha: 0.68 }, // amber-400       — −75°
];

const COLORS_LIGHT = [
  { r: 25, g: 35, b: 160, alpha: 0.9 }, // deep indigo     — 0°
  { r: 55, g: 25, b: 170, alpha: 0.87 }, // dark indigo-pur — +15°
  { r: 55, g: 25, b: 170, alpha: 0.85 }, // dark indigo-pur — −15°
  { r: 90, g: 20, b: 160, alpha: 0.83 }, // deep violet     — +30°
  { r: 90, g: 20, b: 160, alpha: 0.82 }, // deep violet     — −30°
  { r: 110, g: 30, b: 150, alpha: 0.8 }, // dark purple     — +45°
  { r: 110, g: 30, b: 150, alpha: 0.79 }, // dark purple     — −45°
  { r: 10, g: 100, b: 140, alpha: 0.8 }, // dark teal       — +60°
  { r: 10, g: 100, b: 140, alpha: 0.78 }, // dark teal       — −60°
  { r: 170, g: 90, b: 5, alpha: 0.82 }, // dark amber      — +75°
  { r: 170, g: 90, b: 5, alpha: 0.8 }, // dark amber      — −75°
];

// ─── Dot radius per ring (smaller toward center) ───────────────────────────────
const DOT_RADII = [2.2, 2.1, 2.1, 2.0, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.5];

// ─── Physics constants ─────────────────────────────────────────────────────────
const CURSOR_RADIUS = 220;
const MAX_RADIAL_DISP = 30;
const RADIAL_SPRING = 0.045;
const RADIAL_DAMPING = 0.82;
const ANG_FORCE = 0.008;
const ANG_DAMPING = 0.88;
const ANG_RETURN = 0.04;

const BREATHE_SPEED = 0.00038;
const BREATHE_AMP = 0.03;

// ─── Scroll → global rotation ─────────────────────────────────────────────────
// scrollY * SCROLL_ROT_FACTOR = radians of whole-animation rotation
const SCROLL_ROT_FACTOR = 0.004;
const INITIAL_CENTER_X_RATIO = 0.5;
const FINAL_CENTER_X_RATIO = 0.5;
const PEAK_SCALE = 2.3; // max scale at middle of page
const MIN_SCALE = 1.0; // min scale factor at start and end

// Smooth scroll velocity accumulation to prevent jitter
const SCROLL_VELOCITY_DAMPING = 0.92; // One frame decay
const MAX_SCROLL_VELOCITY = 0.15; // Radians per frame max

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// ─── Build ring dots ───────────────────────────────────────────────────────────
function buildRings(): RingDot[][] {
  return RING_DEFS.map((def) => {
    const count = dotCountForRing(def.ryBase, def.eccentricity);
    const dots: RingDot[] = [];
    for (let i = 0; i < count; i++) {
      const baseAngle = (i / count) * Math.PI * 2;
      dots.push({
        baseAngle,
        displace: 0,
        displaceV: 0,
        radialDisplace: 0,
        radialDisplaceV: 0,
        depth: (Math.sin(baseAngle) + 1) / 2,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return dots;
  });
}

// ─── Component ─────────────────────────────────────────────────────────────────
export function FluidDotsAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const ringsRef = useRef<RingDot[][]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const startRef = useRef<number>(0);
  const buildupStartRef = useRef<number>(0);
  const rotOffsets = useRef<number[]>(RING_DEFS.map(() => 0));
  const globalRotationRef = useRef<number>(0);
  const scrollVelocityRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0,
  );
  const lastFrameTimeRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef<string | undefined>(resolvedTheme);

  // Sync theme to ref every render — no animation restart needed
  themeRef.current = resolvedTheme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      const d = dpr();
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * d;
      canvas.height = h * d;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      ringsRef.current = buildRings();
    }

    function onScroll() {
      const newY = window.scrollY;
      const delta = newY - lastScrollYRef.current;

      if (Math.abs(delta) > 0.1) {
        // Accumulate velocity from scroll delta
        let targetVelocity = delta * SCROLL_ROT_FACTOR * 0.6; // Normalized velocity
        targetVelocity = Math.max(-MAX_SCROLL_VELOCITY, Math.min(MAX_SCROLL_VELOCITY, targetVelocity));
        // Exponential smoothing towards target velocity
        scrollVelocityRef.current += (targetVelocity - scrollVelocityRef.current) * 0.4;
      }

      lastScrollYRef.current = newY;
    }

    resize();
    startRef.current = performance.now();
    buildupStartRef.current = performance.now();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // ── RAF draw loop ─────────────────────────────────────────────────────────
    function draw(ts: number) {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // ── Delta time calculation for smooth animation ────────────────────────
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = ts;
      }
      const deltaMs = Math.min(ts - lastFrameTimeRef.current, 16.67); // Cap at 60fps equivalent
      const deltaS = (deltaMs / 1000) * 0.6; // Scale down delta for stability
      lastFrameTimeRef.current = ts;
      
      const elapsed = ts - startRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const isLight = themeRef.current === "light";
      const palette = isLight ? COLORS_LIGHT : COLORS_DARK;

      ctx.clearRect(0, 0, w, h);

      // ── Build-up animation: progressive reveal over 3 seconds ────────────────
      const buildupElapsed = ts - buildupStartRef.current;
      const BUILDUP_DURATION = 3000; // 3 seconds
      let buildupScale = Math.min(1, buildupElapsed / BUILDUP_DURATION);
      // Smooth easing: ease-out cubic
      buildupScale = 1 - Math.pow(1 - buildupScale, 3);

      const breathe =
        1 + BREATHE_AMP * Math.sin(elapsed * BREATHE_SPEED * Math.PI * 2);

      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;
      // Scale: expand to peak at 0.5 progress, then contract back
      const scaleFactor = scrollProgress < 0.5 
        ? 1 + (scrollProgress * 2) * (PEAK_SCALE - 1)
        : 1 + ((1 - scrollProgress) * 2) * (PEAK_SCALE - 1);
      const scrollScale = Math.max(MIN_SCALE, Math.min(PEAK_SCALE, scaleFactor));
      const cx = w / 2;
      const cy = h / 2;

      // ── Apply scroll velocity with damping ──────────────────────────────────
      globalRotationRef.current += scrollVelocityRef.current * deltaS;
      globalRotationRef.current %= Math.PI * 2;
      // Dampen scroll velocity over time (no jitter!)
      scrollVelocityRef.current *= 1 - (1 - SCROLL_VELOCITY_DAMPING) * deltaS * 15;

      // Advance per-ring rotation offsets
      for (let ri = 0; ri < RING_DEFS.length; ri++) {
        rotOffsets.current[ri] += RING_DEFS[ri].rotSpeed;
      }

      const rings = ringsRef.current;

      for (let ri = 0; ri < rings.length; ri++) {
        const def = RING_DEFS[ri];
        const ring = rings[ri];
        const rotOff = rotOffsets.current[ri];
        const col = palette[ri];
        const baseDotR = DOT_RADII[ri] * scrollScale;

        // Complex tilt combining per-ring tilt + alternating global rotation + scroll influence
        const tiltRad = (def.tiltDeg * Math.PI) / 180 + globalRotationRef.current * 0.5 * (ri % 2 === 0 ? 1 : -1) + scrollY * SCROLL_ROT_FACTOR * 0.0008;

        const ryBase = def.ryBase * breathe * scrollScale;
        // Atom-style flat ellipse: semi-major = ryBase * H_STRETCH,
        // semi-minor = semi-major * eccentricity (passes near center)
        const semiMajor = ryBase * H_STRETCH;
        const semiMinor = semiMajor * def.eccentricity;

        // Use semiMajor along the tilted x-axis, semiMinor along the tilted y-axis
        // (no additional foreshortening by cos — the tilt rotates the axes directly)
        const rx = semiMajor;
        const ry = semiMinor;

        const sinFrame = Math.sin(tiltRad);
        const cosFrame = Math.cos(tiltRad);

        const vRot = globalRotationRef.current * (ri % 2 === 0 ? 1.2 : -1.2) + scrollY * SCROLL_ROT_FACTOR * (ri % 2 === 0 ? 0.6 : -0.6);

        for (const dot of ring) {
          const angle = dot.baseAngle + rotOff + dot.displace;
          const lx = rx * Math.cos(angle);
          const ly_raw = ry * Math.sin(angle);

          // 3D rotation around horizontal axis
          const cosV = Math.cos(vRot);
          const sinV = Math.sin(vRot);
          const newY = ly_raw * cosV;
          const newZ = ly_raw * sinV;
          const ly = newY;
          const px0 = cx + lx * cosFrame - ly * sinFrame;
          const py0 = cy + lx * sinFrame + ly * cosFrame + newZ * 0.5 * scrollScale;

          // ── Jelly radial physics ────────────────────────────────────────────
          const dxM = px0 - mx;
          const dyM = py0 - my;
          const d2M = dxM * dxM + dyM * dyM;

          if (d2M < CURSOR_RADIUS * CURSOR_RADIUS && d2M > 1) {
            const dist = Math.sqrt(d2M);
            const t = 1 - dist / CURSOR_RADIUS;
            const force = t * t * MAX_RADIAL_DISP * 0.35;
            dot.radialDisplaceV += force * deltaS;
          }

          // Linear damping for stability (prevents jitter)
          dot.radialDisplaceV -= RADIAL_SPRING * dot.radialDisplace * deltaS;
          dot.radialDisplaceV *= (1 - RADIAL_DAMPING * deltaS);
          dot.radialDisplace += dot.radialDisplaceV * deltaS;

          if (dot.radialDisplace > MAX_RADIAL_DISP)
            dot.radialDisplace = MAX_RADIAL_DISP;
          if (dot.radialDisplace < -MAX_RADIAL_DISP)
            dot.radialDisplace = -MAX_RADIAL_DISP;

          // Clamp velocity to prevent explosions
          const maxVel = MAX_RADIAL_DISP * 2;
          if (Math.abs(dot.radialDisplaceV) > maxVel)
            dot.radialDisplaceV = Math.sign(dot.radialDisplaceV) * maxVel;

          // ── Angular displacement (subtle jelly) ─────────────────────────────
          if (d2M < CURSOR_RADIUS * CURSOR_RADIUS && d2M > 1) {
            const dist = Math.sqrt(d2M);
            const push = ANG_FORCE * (1 - dist / CURSOR_RADIUS) * deltaS;
            dot.displaceV += push * (Math.random() > 0.5 ? 1 : -1);
          }
          dot.displaceV *= (1 - ANG_DAMPING * deltaS);
          dot.displaceV -= dot.displace * ANG_RETURN * deltaS;
          dot.displace += dot.displaceV * deltaS;

          // Unit vector from ring center → dot (radial direction)
          const dxC = px0 - cx;
          const dyC = py0 - cy;
          const dLen = Math.sqrt(dxC * dxC + dyC * dyC) || 1;
          const uxC = dxC / dLen;
          const uyC = dyC / dLen;

          // Final position with jelly offset
          const px = px0 + uxC * dot.radialDisplace;
          const py = py0 + uyC * dot.radialDisplace;

          // Depth cue: back dots slightly dimmer and smaller based on 3D z
          dot.depth = (newZ / ry + 1) / 2; // normalize from -1 to 1 to 0 to 1
          const depthScale = 0.6 + dot.depth * 0.4;
          const dotR = baseDotR * depthScale;
          const alpha = col.alpha * (0.5 + dot.depth * 0.5) * buildupScale;

          // ── Draw small filled circle (dotted line dot) ──────────────────────
          ctx.beginPath();
          ctx.arc(px, py, dotR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.r},${col.g},${col.b},${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
        background: "transparent",
      }}
      tabIndex={-1}
      aria-label="Atom orbital dotted-ring animation background"
    />
  );
}
