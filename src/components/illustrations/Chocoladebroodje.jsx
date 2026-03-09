import React from "react";

export default function Chocoladebroodje({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 140"
      width="210"
      height="140"
      className={className}
      role="img"
      aria-label="Chocoladebroodje"
    >
      <defs>
        {/* Main pastry gradient */}
        <linearGradient id="choco-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="40%" stopColor="#C8A45C" />
          <stop offset="80%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#A68B3C" />
        </linearGradient>

        {/* Top surface gradient */}
        <linearGradient id="choco-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A45C" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Chocolate filling */}
        <linearGradient id="choco-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A3020" />
          <stop offset="50%" stopColor="#3B2215" />
          <stop offset="100%" stopColor="#2D1810" />
        </linearGradient>

        {/* Chocolate highlight */}
        <linearGradient id="choco-fill-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4830" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B2215" stopOpacity="0" />
        </linearGradient>

        {/* Glossy top sheen */}
        <linearGradient id="choco-sheen" x1="0.3" y1="0" x2="0.7" y2="0.6">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#FBF7F0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </linearGradient>

        <filter id="choco-shadow" x="-10%" y="-10%" width="130%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="105" cy="122" rx="75" ry="9" fill="rgba(27,42,74,0.12)" />

      <g filter="url(#choco-shadow)">
        {/* Chocolate visible at left end */}
        <rect x="28" y="62" width="8" height="24" rx="2" fill="url(#choco-fill)" />
        <rect x="28" y="62" width="8" height="8" rx="2" fill="url(#choco-fill-shine)" />
        {/* Second chocolate bar at left */}
        <rect x="28" y="72" width="6" height="18" rx="2" fill="#3B2215" opacity="0.7" />

        {/* Chocolate visible at right end */}
        <rect x="174" y="62" width="8" height="24" rx="2" fill="url(#choco-fill)" />
        <rect x="174" y="62" width="8" height="8" rx="2" fill="url(#choco-fill-shine)" />
        {/* Second chocolate bar at right */}
        <rect x="176" y="72" width="6" height="18" rx="2" fill="#3B2215" opacity="0.7" />

        {/* Main pastry body — rounded rectangle, pain au chocolat shape */}
        <path
          d="M34 48 Q34 34 50 30 Q70 26 105 26 Q140 26 160 30 Q176 34 176 48 L176 96 Q176 108 160 110 Q140 112 105 112 Q70 112 50 110 Q34 108 34 96 Z"
          fill="url(#choco-body)"
        />

        {/* Visible flaky layers — horizontal lines suggesting lamination */}
        <g stroke="#8B6914" strokeWidth="0.9" opacity="0.3" fill="none">
          <path d="M38 44 Q70 40 105 40 Q140 40 172 44" />
          <path d="M36 56 Q70 52 105 52 Q140 52 174 56" />
          <path d="M35 68 Q70 64 105 64 Q140 64 175 68" />
          <path d="M35 80 Q70 76 105 76 Q140 76 175 80" />
          <path d="M36 92 Q70 88 105 88 Q140 88 174 92" />
          <path d="M38 102 Q70 100 105 100 Q140 100 172 102" />
        </g>

        {/* Deeper layer lines for dimension */}
        <g stroke="#6B4F12" strokeWidth="1.2" opacity="0.15" fill="none">
          <path d="M40 50 Q105 46 170 50" />
          <path d="M38 74 Q105 70 172 74" />
          <path d="M40 98 Q105 94 170 98" />
        </g>

        {/* Top surface — the golden baked crust */}
        <path
          d="M36 52 Q36 32 54 28 Q74 24 105 24 Q136 24 156 28 Q174 32 174 52 Q174 56 170 58 L40 58 Q36 56 36 52 Z"
          fill="url(#choco-top)"
          opacity="0.5"
        />

        {/* Flaky cracks on top surface */}
        <g stroke="#6B4F12" strokeWidth="0.7" opacity="0.3" fill="none" strokeLinecap="round">
          <path d="M56 34 Q68 32 80 35" />
          <path d="M90 30 Q105 28 120 31" />
          <path d="M130 33 Q145 31 158 34" />
          <path d="M65 42 Q80 40 95 43" />
          <path d="M110 40 Q125 38 140 41" />
          <path d="M50 48 Q62 46 74 48" />
          <path d="M135 46 Q148 44 160 47" />
        </g>

        {/* Chocolate peeking through a crack on top */}
        <path
          d="M95 50 Q100 48 108 50 Q110 52 105 54 Q98 52 95 50 Z"
          fill="#3B2215"
          opacity="0.5"
        />

        {/* Glossy top sheen */}
        <path
          d="M44 46 Q44 34 60 30 Q80 26 105 26 Q130 26 150 30 Q166 34 166 46 Q140 36 105 36 Q70 36 44 46 Z"
          fill="url(#choco-sheen)"
        />

        {/* Crown highlight */}
        <ellipse cx="100" cy="34" rx="30" ry="6" fill="#FBF7F0" opacity="0.14" />

        {/* Side highlights suggesting curved surface */}
        <path
          d="M38 55 Q36 70 36 85 Q36 95 38 100"
          stroke="#E8D5A0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M172 55 Q174 70 174 85 Q174 95 172 100"
          stroke="#E8D5A0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />

        {/* Bottom edge darkening */}
        <path
          d="M50 106 Q70 112 105 112 Q140 112 160 106"
          stroke="#6B4F12"
          strokeWidth="2"
          fill="none"
          opacity="0.15"
        />

        {/* Subtle warm tonal patches — baked coloring */}
        <g fill="#8B6914" opacity="0.08">
          <ellipse cx="70" cy="70" rx="20" ry="10" />
          <ellipse cx="140" cy="80" rx="18" ry="12" />
          <ellipse cx="105" cy="60" rx="22" ry="8" />
        </g>

        {/* Butter shine spots */}
        <g fill="#F5E6C8" opacity="0.2">
          <ellipse cx="85" cy="44" rx="8" ry="3" />
          <ellipse cx="125" cy="42" rx="10" ry="3" />
        </g>
      </g>
    </svg>
  );
}
