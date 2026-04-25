import React from 'react'

// Original floral/paisley corner — drawn from geometric primitives
export function FloralCorner({ color = '#b8860b', size = 130, rotate = 0, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, transformOrigin: 'center' }}
    >
      <g fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round">
        {/* outer flowing curve */}
        <path d="M10 130 Q10 60 60 25 Q90 8 130 10" />
        <path d="M14 130 Q14 64 64 30 Q92 15 130 16" />
        {/* leaf 1 */}
        <path d="M30 90 Q42 78 52 88 Q44 102 30 90 Z" fill={color} fillOpacity="0.18" />
        <path d="M30 90 Q40 84 52 88" />
        {/* leaf 2 */}
        <path d="M55 60 Q70 50 82 60 Q72 75 55 60 Z" fill={color} fillOpacity="0.18" />
        <path d="M55 60 Q68 54 82 60" />
        {/* central paisley */}
        <path d="M70 35 Q86 38 90 55 Q88 68 76 70 Q66 70 64 60 Q62 48 70 35 Z" fill={color} fillOpacity="0.15" />
        <path d="M72 42 Q82 45 84 56" />
        {/* small dot flower */}
        <g fill={color}>
          <circle cx="100" cy="32" r="2.2" />
          <circle cx="106" cy="38" r="1.6" />
          <circle cx="94" cy="38" r="1.6" />
          <circle cx="100" cy="44" r="1.6" />
          <circle cx="100" cy="26" r="1.6" />
          <circle cx="100" cy="35" r="1.1" fill="#fff" />
        </g>
        {/* curls */}
        <path d="M40 122 Q22 118 22 108" />
        <path d="M122 36 Q126 22 116 18" />
        {/* inner accent dots */}
        <g fill={color}>
          <circle cx="20" cy="118" r="1.3" />
          <circle cx="118" cy="20" r="1.3" />
          <circle cx="46" cy="100" r="1" />
          <circle cx="68" cy="74" r="1" />
        </g>
      </g>
    </svg>
  )
}

// Smaller geometric corner — simpler templates
export function CornerOrnament({ color = '#b8860b', size = 80, rotate = 0, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} style={{ transform: `rotate(${rotate}deg)` }}>
      <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
        <path d="M5 5 L40 5" />
        <path d="M5 5 L5 40" />
        <path d="M5 5 Q22 22 40 40" />
        <path d="M22 5 Q26 14 22 22" />
        <path d="M5 22 Q14 26 22 22" />
      </g>
      <g fill={color}>
        <circle cx="14" cy="14" r="2" />
        <circle cx="22" cy="22" r="1.2" />
        <circle cx="30" cy="30" r="1.5" />
      </g>
    </svg>
  )
}

// Continuous decorative border — top/bottom strip
export function BorderStrip({ color = '#b8860b', height = 18 }) {
  return (
    <svg width="100%" height={height} viewBox="0 0 600 18" preserveAspectRatio="none">
      <g fill="none" stroke={color} strokeWidth="0.8">
        <path d="M0 9 L600 9" />
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 25 + i * 50
            return (
              <g key={i}>
                <path d={`M${x - 8} 9 Q${x} 0 ${x + 8} 9 Q${x} 18 ${x - 8} 9 Z`} fill={color} fillOpacity="0.18" />
                <circle cx={x} cy="9" r="1.6" fill={color} />
              </g>
            )
          })}
        </g>
      </g>
    </svg>
  )
}

// Decorative vine — vertical sides
export function VineStrip({ color = '#b8860b', width = 18, height = 800 }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 18 800`} preserveAspectRatio="none">
      <g fill="none" stroke={color} strokeWidth="0.9">
        <path d="M9 0 L9 800" />
        <g>
          {Array.from({ length: 16 }).map((_, i) => {
            const y = 25 + i * 50
            return (
              <g key={i}>
                <path d={`M9 ${y - 8} Q0 ${y} 9 ${y + 8} Q18 ${y} 9 ${y - 8} Z`} fill={color} fillOpacity="0.18" />
                <circle cx="9" cy={y} r="1.6" fill={color} />
              </g>
            )
          })}
        </g>
      </g>
    </svg>
  )
}

export function DividerOrnament({ color = '#b8860b', width = 320 }) {
  return (
    <svg width={width} height="22" viewBox="0 0 320 22" className="mx-auto">
      <line x1="0" y1="11" x2="130" y2="11" stroke={color} strokeWidth="0.8" />
      <line x1="190" y1="11" x2="320" y2="11" stroke={color} strokeWidth="0.8" />
      <g fill="none" stroke={color} strokeWidth="1.2">
        <path d="M140 11 Q150 4 160 11 Q170 18 180 11" />
        <circle cx="160" cy="11" r="3.5" fill={color} />
        <circle cx="160" cy="11" r="1.5" fill="white" />
      </g>
      <circle cx="125" cy="11" r="1.5" fill={color} />
      <circle cx="195" cy="11" r="1.5" fill={color} />
    </svg>
  )
}

export function SectionHeader({ title, color = '#7a1226', accent = '#b8860b' }) {
  return (
    <div className="mt-5 mb-3">
      <div className="flex items-center gap-4">
        <div className="h-[1.5px] flex-1" style={{ background: accent }} />
        <h2 className="font-serif text-[16px] font-bold uppercase tracking-[0.28em]" style={{ color }}>
          {title}
        </h2>
        <div className="h-[1.5px] flex-1" style={{ background: accent }} />
      </div>
    </div>
  )
}

// Full ornate frame — used as overlay
export function OrnateFrame({ color = '#b8860b' }) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <BorderStrip color={color} />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <BorderStrip color={color} />
      </div>
      <div className="absolute top-0 bottom-0 left-0">
        <VineStrip color={color} />
      </div>
      <div className="absolute top-0 bottom-0 right-0">
        <VineStrip color={color} />
      </div>
      <div className="absolute top-1 left-1"><FloralCorner color={color} size={120} /></div>
      <div className="absolute top-1 right-1"><FloralCorner color={color} size={120} rotate={90} /></div>
      <div className="absolute bottom-1 right-1"><FloralCorner color={color} size={120} rotate={180} /></div>
      <div className="absolute bottom-1 left-1"><FloralCorner color={color} size={120} rotate={270} /></div>
    </>
  )
}
