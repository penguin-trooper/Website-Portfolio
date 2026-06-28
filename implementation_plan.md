# Pixel Environmental Props System — Implementation Plan

## Context

The portfolio is a **React + TypeScript + Tailwind v4** project. Each page section already has
left/right background image panels (15vw wide) via a `decorations` prop on `<Section>`.

The existing decorator layer is `absolute inset-0 z-0`. Content sits at `z-10`. All props must
be `pointer-events-none` and `hidden md:block` so they only appear on wide screens.

**Color variables available as Tailwind class names (from `@theme` in index.css):**
- `bg-accent-primary` / `text-accent-primary` → `#4FD1C5` (cyan)
- `bg-neon-cyan` / `text-neon-cyan` → `#6DCAFD`
- `bg-neon-pink` / `text-neon-pink` → `#FF00FF`
- `bg-accent-secondary` → `#7C5CFF`
- `bg-highlight` → `#F9D65C`
- `bg-card-bg` → `#1A2238`
- `bg-primary-bg` → `#0B1020`
- `bg-border-color` → `#2A3555`

**Existing animation utilities (already in `index.css`):**
`animate-blink`, `animate-twinkle`, `animate-float`, `animate-pixel-flicker`, `animate-neon-pulse`,
`animate-fly-car`, `animate-walk`, `animate-train-pass`, `animate-shooting-star`, `animate-rain`

---

## Files to Create / Modify

| Action | File |
|--------|------|
| **CREATE** | `src/components/PixelProps.tsx` |
| **MODIFY** | `src/index.css` |
| **MODIFY** | `src/App.tsx` |
| **MODIFY** | `src/components/Hero.tsx` |
| **MODIFY** | `src/components/About.tsx` |
| **MODIFY** | `src/components/Skills.tsx` |
| **MODIFY** | `src/components/Projects.tsx` |
| **MODIFY** | `src/components/Experience.tsx` |
| **MODIFY** | `src/components/Contact.tsx` |
| **MODIFY** | `src/components/Footer.tsx` |

---

## Step 1 — Add 2 CSS animations to `src/index.css`

### 1a. Add utilities inside the `@layer utilities { }` block (after the existing entries, before the closing `}`)

```css
  .animate-steam-rise {
    animation: steam-rise 2.2s ease-out infinite;
  }
  .animate-sway {
    animation: sway 3s ease-in-out infinite;
  }
```

### 1b. Add keyframes after the last existing `@keyframes` block (after the `blink` keyframe)

```css
@keyframes steam-rise {
  0%   { transform: translateY(0) scale(0.8);  opacity: 0.5; }
  100% { transform: translateY(-16px) scale(1.5); opacity: 0; }
}

@keyframes sway {
  0%, 100% { transform: rotate(-4deg); }
  50%       { transform: rotate(4deg);  }
}
```

---

## Step 2 — Create `src/components/PixelProps.tsx`

This is a **new file**. Copy the entire code block below exactly.

```tsx
import type { CSSProperties } from 'react';

interface PropProps {
  className?: string;
  style?: CSSProperties;
}

// ─── ANTENNA ──────────────────────────────────────────────────────────────────
// Blinking red tip + two crossbars + pole + base (stacked flex-col)
export function Antenna({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-1 h-1 rounded-full bg-red-400 animate-blink shadow-[0_0_4px_rgba(248,113,113,0.8)]" />
      <div className="w-6 h-px bg-gray-500" />
      <div className="w-px h-3 bg-gray-500" />
      <div className="w-4 h-px bg-gray-600" />
      <div className="w-px h-5 bg-gray-500" />
      <div className="w-3 h-1 bg-gray-700 rounded-sm" />
    </div>
  );
}

// ─── SATELLITE DISH ───────────────────────────────────────────────────────────
// Curved bowl + cyan receiver dot + pole + mount
export function SatelliteDish({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="relative w-8 h-4">
        <div className="absolute inset-0 border-b-2 border-l-2 border-r-2 border-gray-500 rounded-b-full bg-gray-800/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-cyan shadow-[0_0_4px_rgba(109,202,253,0.8)]" />
      </div>
      <div className="w-px h-5 bg-gray-600" />
      <div className="w-4 h-1 bg-gray-700" />
    </div>
  );
}

// ─── WATER TANK ───────────────────────────────────────────────────────────────
// Box with horizontal bands + three support legs
export function WaterTank({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-10 h-1 bg-gray-600" />
      <div className="w-9 h-8 bg-gray-700 border border-gray-600 relative">
        <div className="absolute top-2 left-0 w-full h-px bg-gray-600 opacity-60" />
        <div className="absolute top-4 left-0 w-full h-px bg-gray-600 opacity-60" />
        <div className="absolute top-6 left-0 w-full h-px bg-gray-600 opacity-60" />
      </div>
      <div className="flex gap-3">
        <div className="w-px h-3 bg-gray-600" />
        <div className="w-px h-3 bg-gray-600" />
        <div className="w-px h-3 bg-gray-600" />
      </div>
    </div>
  );
}

// ─── STREET LAMP ──────────────────────────────────────────────────────────────
// Glow head + horizontal arm stub + tall pole + base
export function StreetLamp({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-5 h-2 bg-yellow-200/60 rounded-full shadow-[0_0_10px_6px_rgba(250,204,21,0.15)]" />
      <div className="w-6 h-px bg-gray-500" />
      <div className="w-px h-16 bg-gray-600" />
      <div className="w-4 h-1.5 bg-gray-700 rounded-sm" />
    </div>
  );
}

// ─── NEON SIGN ────────────────────────────────────────────────────────────────
// Coloured bordered text box with glow + flicker animation
// color: 'cyan' | 'pink' | 'purple' | 'yellow'
interface NeonSignProps extends PropProps {
  text: string;
  color?: 'cyan' | 'pink' | 'purple' | 'yellow';
}
export function NeonSign({ text, color = 'pink', className = '', style }: NeonSignProps) {
  const colorClasses: Record<string, string> = {
    cyan:   'border-[#6dcafd] text-[#6dcafd] shadow-[0_0_8px_rgba(109,202,253,0.5)]',
    pink:   'border-[#ff00ff] text-[#ff00ff] shadow-[0_0_8px_rgba(255,0,255,0.5)]',
    purple: 'border-[#7c5cff] text-[#7c5cff] shadow-[0_0_8px_rgba(124,92,255,0.5)]',
    yellow: 'border-[#f9d65c] text-[#f9d65c] shadow-[0_0_8px_rgba(249,214,92,0.5)]',
  };
  return (
    <div
      className={`text-[5px] font-pixel px-1.5 py-0.5 border bg-[#0b1020]/70 animate-pixel-flicker pointer-events-none select-none ${colorClasses[color]} ${className}`}
      style={style}
    >
      {text}
    </div>
  );
}

// ─── HOLOGRAM BOARD ───────────────────────────────────────────────────────────
// Cyan-bordered screen with scan lines + data lines + two support posts
export function HologramBoard({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-16 h-10 border border-[#6dcafd]/60 bg-[#6dcafd]/5 relative overflow-hidden animate-neon-pulse shadow-[0_0_12px_rgba(109,202,253,0.2)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(109,202,253,0.04)_50%,transparent_50%)] bg-[length:100%_4px]" />
        <div className="p-1.5 flex flex-col gap-1">
          <div className="w-10 h-px bg-[#6dcafd]/50" />
          <div className="w-7 h-px bg-[#6dcafd]/30" />
          <div className="w-12 h-px bg-[#6dcafd]/40" />
          <div className="w-5 h-2 border border-[#6dcafd]/40 mt-0.5" />
        </div>
      </div>
      <div className="flex gap-9">
        <div className="w-px h-5 bg-gray-600" />
        <div className="w-px h-5 bg-gray-600" />
      </div>
    </div>
  );
}

// ─── UTILITY POLE ─────────────────────────────────────────────────────────────
// Two crossarms with insulator dots + main pole + base
export function UtilityPole({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-14 h-px bg-gray-500" />
      <div className="flex justify-between w-12 -mt-0.5">
        <div className="w-1 h-1 rounded-full bg-gray-600" />
        <div className="w-1 h-1 rounded-full bg-gray-600" />
        <div className="w-1 h-1 rounded-full bg-gray-600" />
      </div>
      <div className="w-1 h-8 bg-gray-600" />
      <div className="w-10 h-px bg-gray-600" />
      <div className="flex justify-between w-8 -mt-0.5">
        <div className="w-1 h-1 rounded-full bg-gray-600" />
        <div className="w-1 h-1 rounded-full bg-gray-600" />
      </div>
      <div className="w-1 h-10 bg-gray-600" />
      <div className="w-3 h-2 bg-gray-700 rounded-sm" />
    </div>
  );
}

// ─── TRAFFIC LIGHT ────────────────────────────────────────────────────────────
// Housing box with 3 circles (red blinks) + pole + base
export function TrafficLight({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-5 h-14 bg-gray-800 border border-gray-700 rounded-t-sm flex flex-col items-center justify-start pt-1 gap-1">
        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.5)] animate-blink" style={{ animationDuration: '3s' }} />
        <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
        <div className="w-3 h-3 rounded-full bg-green-500/20" />
      </div>
      <div className="w-1 h-12 bg-gray-600" />
      <div className="w-4 h-2 bg-gray-700 rounded-sm" />
    </div>
  );
}

// ─── SMALL BUILDING ───────────────────────────────────────────────────────────
// 3-floor building with lit/unlit windows + rooftop antenna + neon bar sign
export function SmallBuilding({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-px h-4 bg-gray-500" />
      <div className="w-1 h-1 rounded-full bg-red-400/60 animate-blink -mt-1" style={{ animationDuration: '4s' }} />
      <div className="w-14 h-20 bg-[#111827] border border-[#2a3555] relative mt-px">
        {/* Row 1 windows */}
        <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-300/40 animate-blink" style={{ animationDelay: '0.5s', animationDuration: '5s' }} />
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#6dcafd]/30" />
        {/* Row 2 windows */}
        <div className="absolute top-8 left-2 w-3 h-3 bg-[#111827]" />
        <div className="absolute top-8 right-2 w-3 h-3 bg-yellow-300/50 animate-blink" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        {/* Row 3 windows */}
        <div className="absolute top-14 left-2 w-3 h-3 bg-yellow-300/30 animate-blink" style={{ animationDelay: '1s', animationDuration: '4.5s' }} />
        <div className="absolute top-14 right-2 w-3 h-3 bg-[#111827]" />
        {/* Neon bar sign */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[4px] font-pixel text-[#ff00ff]/80 border border-[#ff00ff]/40 px-0.5 whitespace-nowrap shadow-[0_0_4px_rgba(255,0,255,0.3)] animate-pixel-flicker">
          BAR
        </div>
      </div>
    </div>
  );
}

// ─── VENDING MACHINE ──────────────────────────────────────────────────────────
// Box with price display + coloured product rows + coin slot
export function VendingMachine({ className = '', style }: PropProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="w-8 h-14 bg-gray-700 border border-gray-600 rounded-t-sm relative">
        <div className="w-6 h-4 bg-gray-900 border border-[#4fd1c5]/40 mx-auto mt-1 flex items-center justify-center shadow-[0_0_4px_rgba(79,209,197,0.2)]">
          <div className="text-[4px] font-pixel text-[#4fd1c5]/80">¥120</div>
        </div>
        <div className="flex justify-center gap-px mt-1">
          <div className="w-1.5 h-3 bg-red-500/70" />
          <div className="w-1.5 h-3 bg-[#6dcafd]/60" />
          <div className="w-1.5 h-3 bg-yellow-400/70" />
          <div className="w-1.5 h-3 bg-green-500/50" />
        </div>
        <div className="w-6 h-px bg-gray-600 mx-auto mt-1" />
        <div className="flex justify-center gap-px mt-px">
          <div className="w-1.5 h-3 bg-orange-500/60" />
          <div className="w-1.5 h-3 bg-purple-500/60" />
          <div className="w-1.5 h-3 bg-red-400/50" />
          <div className="w-1.5 h-3 bg-[#4fd1c5]/50" />
        </div>
        <div className="w-3 h-px bg-gray-900 mx-auto mt-2" />
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#6dcafd]/60 animate-pulse" />
      </div>
    </div>
  );
}

// ─── PIXEL TREE ───────────────────────────────────────────────────────────────
// Three stacked green blocks (narrows upward) + brown trunk
export function PixelTree({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-6 h-4 bg-green-700/80 border-t border-green-600/50" />
      <div className="w-9 h-4 bg-green-800/80 border-t border-green-700/50 -mt-px" />
      <div className="w-12 h-5 bg-green-900/80 border-t border-green-800/50 -mt-px" />
      <div className="w-2 h-5 bg-amber-900/80" />
    </div>
  );
}

// ─── FLOWER POT ───────────────────────────────────────────────────────────────
// Three coloured flower heads + stems + soil strip + pot box + base
export function FlowerPot({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="flex gap-0.5 items-end">
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-pink-400/80" />
          <div className="w-px h-3 bg-green-600" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <div className="w-px h-4 bg-green-700" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-pink-300/80" />
          <div className="w-px h-2 bg-green-600" />
        </div>
      </div>
      <div className="w-8 h-1 bg-amber-900/80" />
      <div className="w-8 h-5 bg-orange-700/80 border border-orange-800/80" />
      <div className="w-6 h-1 bg-orange-900/80" />
    </div>
  );
}

// ─── BENCH ────────────────────────────────────────────────────────────────────
// Two seat planks + two vertical legs + ground bar
export function Bench({ className = '', style }: PropProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="w-14 h-1.5 bg-amber-800/80" />
      <div className="w-14 h-1.5 bg-amber-700/80 mt-0.5" />
      <div className="flex justify-between w-11 mx-auto mt-0.5">
        <div className="w-1 h-4 bg-gray-600/80" />
        <div className="w-1 h-4 bg-gray-600/80" />
      </div>
      <div className="w-12 h-px bg-gray-700/60 mx-auto" />
    </div>
  );
}

// ─── CYBERPUNK DRONE ──────────────────────────────────────────────────────────
// Body + arms + spinning rotor lines + cyan status light. Self-animates via animate-float.
export function CyberpunkDrone({ className = '', style }: PropProps) {
  return (
    <div className={`flex items-center pointer-events-none select-none animate-float ${className}`} style={style}>
      <div className="w-5 h-px bg-gray-500" />
      <div className="w-3 h-px bg-gray-400 animate-spin" style={{ animationDuration: '0.4s' }} />
      <div className="relative w-6 h-3 bg-gray-700 border border-gray-600 rounded-sm mx-1">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-900 border border-gray-500" />
        <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#6dcafd] animate-pulse shadow-[0_0_4px_rgba(109,202,253,0.9)]" />
      </div>
      <div className="w-3 h-px bg-gray-400 animate-spin" style={{ animationDuration: '0.4s', animationDirection: 'reverse' }} />
      <div className="w-5 h-px bg-gray-500" />
    </div>
  );
}

// ─── PIXEL CAT ────────────────────────────────────────────────────────────────
// Two ear tabs + head with cyan eyes + body + tail stub
export function PixelCat({ className = '', style }: PropProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="flex gap-2 ml-0.5">
        <div className="w-1.5 h-2 bg-gray-500" />
        <div className="w-1.5 h-2 bg-gray-500" />
      </div>
      <div className="w-5 h-4 bg-gray-500/80 -mt-1 relative">
        <div className="absolute top-1 left-0.5 w-1 h-1 rounded-full bg-[#6dcafd]/90" />
        <div className="absolute top-1 right-0.5 w-1 h-1 rounded-full bg-[#6dcafd]/90" />
      </div>
      <div className="w-5 h-5 bg-gray-600/80 rounded-b-sm relative">
        <div className="absolute bottom-0 -right-2 w-3 h-px bg-gray-500/80" style={{ transform: 'rotate(-12deg)' }} />
      </div>
    </div>
  );
}

// ─── PIXEL BIRD ───────────────────────────────────────────────────────────────
// Oval body + smaller head + beak + wing detail + tiny feet
export function PixelBird({ className = '', style }: PropProps) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`} style={style}>
      <div className="w-5 h-3 bg-gray-500/80 rounded-full" />
      <div className="absolute -top-1.5 right-0 w-3 h-3 bg-gray-400/80 rounded-full" />
      <div className="absolute -top-0.5 -right-1 w-1.5 h-0.5 bg-yellow-400/80" />
      <div className="absolute top-0.5 left-0.5 w-3 h-1.5 bg-gray-600/60 rounded-sm" />
      <div className="absolute -bottom-1 left-1 flex gap-1">
        <div className="w-px h-1 bg-gray-500/60" />
        <div className="w-px h-1 bg-gray-500/60" />
      </div>
    </div>
  );
}

// ─── AIR CONDITIONER ──────────────────────────────────────────────────────────
// Box with vent slats + brand stripe + status dot + drip pipe
export function AirConditioner({ className = '', style }: PropProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="w-12 h-6 bg-gray-700/80 border border-gray-600 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800/70" />
        <div className="flex flex-col gap-px pt-2 px-1">
          <div className="w-full h-px bg-gray-500/60" />
          <div className="w-full h-px bg-gray-500/60" />
          <div className="w-full h-px bg-gray-500/60" />
        </div>
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#4fd1c5]/80 animate-pulse" />
      </div>
      <div className="w-px h-2 bg-gray-600/60 ml-3" />
    </div>
  );
}

// ─── SURVEILLANCE CAMERA ──────────────────────────────────────────────────────
// Vertical mount arm + horizontal bracket + camera body + lens + blink dot
export function SurveillanceCamera({ className = '', style }: PropProps) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`} style={style}>
      <div className="w-px h-4 bg-gray-500 ml-1" />
      <div className="w-3 h-px bg-gray-500" />
      <div className="flex items-center mt-px">
        <div className="w-6 h-3 bg-gray-700 border border-gray-600 rounded-l-sm relative">
          <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-red-500 animate-blink" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
        </div>
        <div className="w-2 h-2 rounded-full bg-gray-900 border border-gray-600" />
      </div>
    </div>
  );
}

// ─── ELECTRICAL BOX ───────────────────────────────────────────────────────────
// Warning stripe header + panel dials/switches inside a box
export function ElectricalBox({ className = '', style }: PropProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="w-9 h-12 bg-gray-700/80 border border-gray-600 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400/30 border-b border-yellow-400/20" />
        <div className="flex flex-col items-center gap-1 mt-4">
          <div className="w-5 h-1.5 bg-gray-600 border border-gray-500" />
          <div className="w-4 h-1.5 bg-gray-600 border border-gray-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-5 h-px bg-gray-500/60" />
          <div className="w-3 h-1 bg-[#4fd1c5]/30 border border-[#4fd1c5]/40" />
        </div>
      </div>
    </div>
  );
}

// ─── TRASH BIN ────────────────────────────────────────────────────────────────
// Lid + handle + tapered body with horizontal stripe lines
export function TrashBin({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-8 h-1.5 bg-gray-600/80 rounded-t-sm" />
      <div className="w-4 h-1 bg-gray-700/80 rounded-t-sm mx-auto -mt-0.5" />
      <div className="w-7 h-10 bg-gray-700/80 border border-gray-600 relative mt-px">
        <div className="absolute top-2 left-0 w-full h-px bg-gray-600/50" />
        <div className="absolute top-5 left-0 w-full h-px bg-gray-600/50" />
        <div className="absolute top-8 left-0 w-full h-px bg-gray-600/50" />
      </div>
    </div>
  );
}

// ─── HANGING LIGHTS ───────────────────────────────────────────────────────────
// Horizontal string wire with coloured light bulbs hanging down.
// Root element uses w-full — control width via className or parent container.
interface HangingLightsProps extends PropProps {
  count?: number;
}
export function HangingLights({ count = 6, className = '', style }: HangingLightsProps) {
  const colors = [
    'bg-yellow-300/80 shadow-[0_0_4px_rgba(250,204,21,0.6)]',
    'bg-[#ff00ff]/70 shadow-[0_0_4px_rgba(255,0,255,0.5)]',
    'bg-[#6dcafd]/80 shadow-[0_0_4px_rgba(109,202,253,0.6)]',
    'bg-[#7c5cff]/70 shadow-[0_0_4px_rgba(124,92,255,0.5)]',
    'bg-green-400/70 shadow-[0_0_4px_rgba(74,222,128,0.5)]',
    'bg-orange-400/70 shadow-[0_0_4px_rgba(251,146,60,0.5)]',
  ];
  return (
    <div className={`relative w-full pointer-events-none select-none ${className}`} style={style}>
      <div className="w-full h-px bg-gray-500/70" />
      <div className="flex justify-around">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-2 bg-gray-500/60" />
            <div
              className={`w-1.5 h-2 rounded-b-sm animate-blink ${colors[i % colors.length]}`}
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${2 + (i % 3) * 0.7}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── STEAM VENT ───────────────────────────────────────────────────────────────
// Short pipe with three overlapping steam puffs (uses animate-steam-rise)
export function SteamVent({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="relative w-6 h-6">
        <div className="absolute top-0 left-1 w-3 h-3 rounded-full bg-gray-400/15 blur-sm animate-steam-rise" style={{ animationDelay: '0s' }} />
        <div className="absolute top-2 left-0 w-2 h-2 rounded-full bg-gray-400/10 blur-sm animate-steam-rise" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1 right-0 w-2 h-2 rounded-full bg-gray-300/10 blur-sm animate-steam-rise" style={{ animationDelay: '1.4s' }} />
      </div>
      <div className="w-2.5 h-5 bg-gray-600/80 border border-gray-700 -mt-2" />
      <div className="w-4 h-1 bg-gray-700/80" />
    </div>
  );
}

// ─── MAILBOX ──────────────────────────────────────────────────────────────────
// Rounded-top blue box with slot + red flag + post + base
export function Mailbox({ className = '', style }: PropProps) {
  return (
    <div className={`flex flex-col items-center pointer-events-none select-none ${className}`} style={style}>
      <div className="w-9 h-6 bg-blue-900/70 border border-blue-700/50 rounded-t-lg relative">
        <div className="absolute top-3 left-1 right-1 h-px bg-blue-600/60" />
        <div className="absolute -right-0.5 top-0 flex flex-col">
          <div className="w-px h-3 bg-gray-500" />
          <div className="w-2 h-1.5 bg-red-500/80 -ml-0.5" />
        </div>
      </div>
      <div className="w-1 h-6 bg-gray-600/80" />
      <div className="w-4 h-1 bg-gray-700/80" />
    </div>
  );
}
```

---

## Step 3 — Modify `src/App.tsx`

**Add a constellation cluster** inside the existing `{/* Global Ambient Environment */}` fixed layer.

Find the `{/* Hovering Drones */}` section at lines 50–57 and add the following block **after** the closing `</div>` of the Hovering Drones section (i.e., after line 56 `</div>`):

```tsx
        {/* Constellation cluster — top right quadrant */}
        <div className="absolute top-[8%] right-[22%] pointer-events-none hidden md:block">
          <div className="relative w-16 h-10">
            <div className="absolute top-0 left-4 w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle" />
            <div className="absolute top-3 left-0 w-1 h-1 bg-white rounded-full opacity-40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1 left-8 w-1.5 h-1.5 bg-[#4fd1c5] rounded-full opacity-50 animate-twinkle" style={{ animationDelay: '1s' }} />
            <div className="absolute top-5 left-5 w-1 h-1 bg-white rounded-full opacity-30 animate-twinkle" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-0 left-12 w-1 h-1 bg-white rounded-full opacity-40 animate-twinkle" style={{ animationDelay: '0.8s' }} />
            <svg className="absolute inset-0 opacity-10" width="64" height="40">
              <line x1="8" y1="2" x2="2" y2="14" stroke="white" strokeWidth="0.5" />
              <line x1="8" y1="2" x2="18" y2="4" stroke="white" strokeWidth="0.5" />
              <line x1="18" y1="4" x2="22" y2="22" stroke="white" strokeWidth="0.5" />
              <line x1="2" y1="14" x2="22" y2="22" stroke="white" strokeWidth="0.5" />
              <line x1="18" y1="4" x2="52" y2="2" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Extra drones */}
        <div className="absolute top-[55%] left-[8%] w-3 h-1.5 bg-gray-700 rounded-sm animate-float opacity-50 hidden md:block" style={{ animationDelay: '1s', animationDuration: '5s' }}>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#6dcafd] animate-pulse" />
        </div>
        <div className="absolute top-[75%] right-[8%] w-2 h-1 bg-gray-700 rounded-sm animate-float opacity-40 hidden md:block" style={{ animationDelay: '3s', animationDuration: '7s' }}>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-[#ff00ff] animate-pulse" />
        </div>
```

---

## Step 4 — Modify `src/components/Hero.tsx`

### 4a. Add imports at the top of the file

Add this line after the existing imports (after line 6 `import arcadeStorefront from ...`):

```tsx
import { StreetLamp, SmallBuilding, Antenna, NeonSign, SurveillanceCamera, CyberpunkDrone, PixelBird, HologramBoard } from "./PixelProps";
```

### 4b. Add props inside the existing `decorations` prop

Find the existing decorations content. The decorations currently contain `heroImage`, gradient overlays, and a bottom glow. **Add the following block** right before the closing `</div>` of the decorations wrapper (before `</div>` at the end of decorations):

```tsx
          {/* ── PERIPHERAL PIXEL PROPS (desktop only) ── */}
          {/* Left: street lamp at bottom-left */}
          <div className="absolute bottom-0 left-[3vw] hidden md:flex flex-col items-center opacity-80">
            <StreetLamp />
          </div>
          {/* Left: small building corner peeking from far-left edge */}
          <div className="absolute bottom-0 left-0 hidden md:flex flex-col items-center opacity-50">
            <SmallBuilding />
          </div>
          {/* Right: antenna at top-right */}
          <div className="absolute top-8 right-[3vw] hidden md:flex flex-col items-center opacity-70">
            <Antenna />
          </div>
          {/* Right: neon sign mid-right */}
          <div className="absolute top-[38%] right-[1.5vw] hidden md:block opacity-80">
            <NeonSign text="CYBER CAFE" color="pink" />
          </div>
          {/* Right: hologram board */}
          <div className="absolute top-[20%] right-[5vw] hidden md:flex flex-col items-center opacity-60">
            <HologramBoard />
          </div>
          {/* Right: surveillance camera top-right corner */}
          <div className="absolute top-4 right-[9vw] hidden md:block opacity-70">
            <SurveillanceCamera />
          </div>
          {/* Sky: drone floating upper-center-left */}
          <div className="absolute top-[16%] left-[20%] hidden md:flex opacity-55">
            <CyberpunkDrone />
          </div>
          {/* Sky: pixel bird */}
          <div className="absolute top-[25%] right-[24%] hidden md:block opacity-45">
            <PixelBird />
          </div>
```

---

## Step 5 — Modify `src/components/About.tsx`

### 5a. Add imports

Add after the existing imports (after line 5 `import apartmentRightImage from ...`):

```tsx
import { WaterTank, Antenna, SatelliteDish, FlowerPot, PixelBird, AirConditioner, SteamVent, HangingLights, PixelCat } from "./PixelProps";
```

### 5b. Add props inside the existing decorations fragment

Find the decorations content (currently it has `rooftopImage` left panel, `apartmentRightImage` right panel, and 3 star divs). **Add the following block after the existing star divs** (at the end of the `<>` fragment, before `</>`):

```tsx
          {/* ── LEFT PERIPHERAL PROPS (rooftop theme) ── */}
          <div className="absolute top-8 left-[2vw] hidden md:flex flex-col items-center opacity-75">
            <WaterTank />
          </div>
          <div className="absolute top-4 left-[8vw] hidden md:flex flex-col items-center opacity-70">
            <Antenna />
          </div>
          <div className="absolute top-[35%] left-[1.5vw] hidden md:flex flex-col items-center opacity-65">
            <SatelliteDish />
          </div>
          <div className="absolute bottom-8 left-[2.5vw] hidden md:flex flex-col items-center opacity-70">
            <FlowerPot />
          </div>
          <div className="absolute bottom-[28%] left-[9vw] hidden md:block opacity-55">
            <PixelBird />
          </div>

          {/* ── RIGHT PERIPHERAL PROPS (apartment rooftop) ── */}
          <div className="absolute top-[22%] right-[2vw] hidden md:block opacity-70">
            <AirConditioner />
          </div>
          <div className="absolute top-8 right-[6vw] hidden md:flex flex-col items-center opacity-60">
            <SteamVent />
          </div>
          {/* Hanging string lights spanning the right panel */}
          <div className="absolute top-[48%] right-0 hidden md:block opacity-75" style={{ width: '14vw' }}>
            <HangingLights count={6} />
          </div>
          <div className="absolute bottom-6 right-[2.5vw] hidden md:block opacity-65">
            <PixelCat />
          </div>
```

---

## Step 6 — Modify `src/components/Skills.tsx`

### 6a. Add imports

Add after the existing imports (after line 5 `import workspaceRightImage from ...`):

```tsx
import { UtilityPole, NeonSign, ElectricalBox, HologramBoard, SurveillanceCamera, CyberpunkDrone } from "./PixelProps";
```

### 6b. Add props inside the existing decorations fragment

Find the decorations `<>` fragment. **Add the following block after the existing content** (the `animate-twinkle` dot and grid floor divs), before the closing `</>`:

```tsx
          {/* ── LEFT PERIPHERAL PROPS (tech / industrial) ── */}
          <div className="absolute bottom-0 left-[1.5vw] hidden md:flex flex-col items-center opacity-70">
            <UtilityPole />
          </div>
          <div className="absolute top-[28%] left-[2vw] hidden md:block opacity-75">
            <NeonSign text="SYS.LOG" color="cyan" />
          </div>
          <div className="absolute bottom-6 left-[7vw] hidden md:block opacity-65">
            <ElectricalBox />
          </div>

          {/* ── RIGHT PERIPHERAL PROPS (workspace / server rack) ── */}
          <div className="absolute top-[18%] right-[1.5vw] hidden md:flex flex-col items-center opacity-65">
            <HologramBoard />
          </div>
          <div className="absolute top-6 right-[4vw] hidden md:block opacity-70">
            <SurveillanceCamera />
          </div>
          <div className="absolute top-[55%] right-[1.5vw] hidden md:block opacity-75">
            <NeonSign text="HACK.EXE" color="purple" />
          </div>

          {/* ── SKY: drone floating near top-center ── */}
          <div className="absolute top-[8%] left-[28%] hidden md:flex opacity-50">
            <CyberpunkDrone style={{ animationDelay: '1s' }} />
          </div>
```

---

## Step 7 — Modify `src/components/Projects.tsx`

### 7a. Fix invalid opacity class

On **line 21** and **line 30**, change `opacity-38` → `opacity-40`.

Before:
```tsx
className="absolute bottom-0 h-[85%] w-full object-cover object-left opacity-38 pixelated"
```
After:
```tsx
className="absolute bottom-0 h-[85%] w-full object-cover object-left opacity-40 pixelated"
```

(Apply this fix to BOTH image tags in this file.)

### 7b. Add imports

Add after the existing imports (after line 6 `import techLeftImage from ...`):

```tsx
import { TrafficLight, PixelTree, Bench, NeonSign, HologramBoard, VendingMachine, PixelCat } from "./PixelProps";
```

### 7c. Add props inside the existing decorations fragment

Find the decorations `<>` fragment. **Add the following block after the existing content** (the two twinkle dots and grid overlay), before the closing `</>`:

```tsx
          {/* ── LEFT PERIPHERAL PROPS (tech district street) ── */}
          <div className="absolute bottom-0 left-[1.5vw] hidden md:flex flex-col items-center opacity-75">
            <TrafficLight />
          </div>
          <div className="absolute bottom-0 left-[6vw] hidden md:flex flex-col items-center opacity-65">
            <PixelTree />
          </div>
          <div className="absolute bottom-0 left-[10vw] hidden md:block opacity-60">
            <Bench />
          </div>

          {/* ── RIGHT PERIPHERAL PROPS (tech bridge / high-tech) ── */}
          <div className="absolute top-[22%] right-[1.5vw] hidden md:block opacity-75">
            <NeonSign text="PROJECTS.EXE" color="cyan" />
          </div>
          <div className="absolute top-8 right-[2vw] hidden md:flex flex-col items-center opacity-65">
            <HologramBoard />
          </div>
          <div className="absolute bottom-0 right-[2.5vw] hidden md:block opacity-70">
            <VendingMachine />
          </div>

          {/* ── CHARACTER: cat sitting near vending machine ── */}
          <div className="absolute bottom-4 right-[8vw] hidden md:block opacity-60">
            <PixelCat />
          </div>
```

---

## Step 8 — Modify `src/components/Experience.tsx`

### 8a. Fix invalid opacity class

On **line 20** and **line 29**, change `opacity-38` → `opacity-40`.

### 8b. Add imports

Add after the existing imports (after line 5 `import metroRightImage from ...`):

```tsx
import { StreetLamp, Bench, TrashBin, ElectricalBox, Mailbox, SurveillanceCamera, NeonSign, PixelBird } from "./PixelProps";
```

### 8c. Add props inside the existing decorations fragment

Find the decorations `<>` fragment. **Add the following block after the existing content** (the two train light beam divs), before the closing `</>`:

```tsx
          {/* ── LEFT PERIPHERAL PROPS (metro station / street) ── */}
          <div className="absolute bottom-0 left-[1.5vw] hidden md:flex flex-col items-center opacity-75">
            <StreetLamp />
          </div>
          <div className="absolute bottom-0 left-[5.5vw] hidden md:block opacity-65">
            <Bench />
          </div>
          <div className="absolute bottom-0 left-[11vw] hidden md:block opacity-60">
            <TrashBin />
          </div>
          <div className="absolute top-[42%] left-[2vw] hidden md:block opacity-65">
            <ElectricalBox />
          </div>

          {/* ── RIGHT PERIPHERAL PROPS (metro exit / street) ── */}
          <div className="absolute bottom-0 right-[2vw] hidden md:block opacity-65">
            <Mailbox />
          </div>
          <div className="absolute top-6 right-[3vw] hidden md:block opacity-70">
            <SurveillanceCamera />
          </div>
          <div className="absolute top-[38%] right-[1.5vw] hidden md:block opacity-75">
            <NeonSign text="METRO.SYS" color="yellow" />
          </div>

          {/* ── CHARACTER: bird perched near top ── */}
          <div className="absolute top-[12%] right-[22%] hidden md:block opacity-50">
            <PixelBird />
          </div>
```

---

## Step 9 — Modify `src/components/Contact.tsx`

### 9a. Add imports

Add after the existing imports (after line 6 `import cafeLeftImage from ...`):

```tsx
import { StreetLamp, FlowerPot, HangingLights, NeonSign, TrashBin, Mailbox, PixelCat } from "./PixelProps";
```

### 9b. Add props inside the existing decorations fragment

Find the decorations `<>` fragment. **Add the following block after the existing content** (after the rain drop divs and the three glowing dots), before the closing `</>`:

```tsx
          {/* ── LEFT PERIPHERAL PROPS (night café entrance) ── */}
          <div className="absolute bottom-0 left-[1.5vw] hidden md:flex flex-col items-center opacity-75">
            <StreetLamp />
          </div>
          <div className="absolute bottom-0 left-[6.5vw] hidden md:flex flex-col items-center opacity-65">
            <FlowerPot />
          </div>
          {/* Hanging lights spanning the left panel top */}
          <div className="absolute top-[18%] left-0 hidden md:block opacity-70" style={{ width: '14vw' }}>
            <HangingLights count={7} />
          </div>
          <div className="absolute top-[28%] left-[2vw] hidden md:block opacity-80">
            <NeonSign text="NIGHT CAFE" color="pink" />
          </div>

          {/* ── RIGHT PERIPHERAL PROPS (rainy vending area) ── */}
          <div className="absolute bottom-0 right-[2vw] hidden md:block opacity-65">
            <TrashBin />
          </div>
          <div className="absolute bottom-0 right-[7vw] hidden md:block opacity-65">
            <Mailbox />
          </div>
          <div className="absolute top-[32%] right-[1.5vw] hidden md:block opacity-75">
            <NeonSign text="OPEN 24H" color="yellow" />
          </div>

          {/* ── CHARACTER: cat near café ── */}
          <div className="absolute bottom-4 right-[11vw] hidden md:block opacity-60">
            <PixelCat />
          </div>
```

---

## Step 10 — Modify `src/components/Footer.tsx`

### 10a. Add imports

Add after the existing imports (after line 3 `import flyingCar from ...`):

```tsx
import { Antenna, SatelliteDish, CyberpunkDrone } from "./PixelProps";
```

### 10b. Add props to the footer

Find the `{/* Tiny walking character */}` block (around line 37). **Add the following block immediately before it**:

```tsx
      {/* ── PIXEL PROPS: rooftop details on skyline ── */}
      {/* Antenna silhouette on a building */}
      <div className="absolute top-[20%] left-[12%] hidden md:flex flex-col items-center opacity-50">
        <Antenna />
      </div>
      {/* Satellite dish */}
      <div className="absolute top-[30%] left-[5%] hidden md:flex flex-col items-center opacity-45">
        <SatelliteDish />
      </div>
      {/* Drone drifting across footer sky */}
      <div className="absolute top-[10%] right-[28%] hidden md:flex opacity-40" style={{ animationDelay: '2s', animationDuration: '8s' }}>
        <CyberpunkDrone />
      </div>
```

---

## Execution Order for Gemini Flash

Execute **in exactly this order** to avoid import errors:

1. **`src/index.css`** — Add steam-rise and sway animations (Step 1)
2. **`src/components/PixelProps.tsx`** — Create the entire new file (Step 2)
3. **`src/App.tsx`** — Add constellation + extra drones (Step 3)
4. **`src/components/Hero.tsx`** — Add import + props (Step 4)
5. **`src/components/About.tsx`** — Add import + props (Step 5)
6. **`src/components/Skills.tsx`** — Add import + props (Step 6)
7. **`src/components/Projects.tsx`** — Fix opacity-38 + add import + props (Step 7)
8. **`src/components/Experience.tsx`** — Fix opacity-38 + add import + props (Step 8)
9. **`src/components/Contact.tsx`** — Add import + props (Step 9)
10. **`src/components/Footer.tsx`** — Add import + props (Step 10)

---

## Critical Rules (Do Not Break)

> [!IMPORTANT]
> - **Never remove** existing content (background images, existing decorations, content JSX, data mapping, motion animations)
> - **Only ADD** new import statements and new JSX blocks inside existing `decorations` fragments
> - **All props must have** `pointer-events-none` and `select-none` — this is already built into every PixelProps component
> - **All section-level prop containers must have** `hidden md:flex` or `hidden md:block` — this is shown in every placement div above
> - **Do not place** any props on center content — only `left-[0..13vw]` and `right-[0..13vw]` zones
> - **The `opacity-38` bug** in Projects.tsx and Experience.tsx must be fixed as part of Steps 7a and 8a
> - Tailwind v4 color variables work directly as class names: `bg-accent-primary`, `text-neon-cyan`, etc.
> - Use `bg-[#hexcode]` or `text-[#hexcode]` for colors not in the theme (e.g., `bg-[#111827]`)

---

## Verification

After all steps, open the dev server (`npm run dev`) and check:

- [ ] All sections show CSS-drawn pixel props in the left/right margins on a wide viewport (≥ 1280px)
- [ ] Props are invisible on mobile (< 768px) — no layout shift
- [ ] Animations run: blink (windows, traffic light), float (drones), steam-rise (steam vents), pixel-flicker (neon signs), neon-pulse (hologram boards)
- [ ] Center content (text, cards, buttons) is fully unobstructed
- [ ] No TypeScript errors from the new PixelProps.tsx file
- [ ] No console errors
