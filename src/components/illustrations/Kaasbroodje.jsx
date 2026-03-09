import React from "react";

export default function Kaasbroodje({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 140"
      width="220"
      height="140"
      className={className}
      role="img"
      aria-label="Kaasbroodje"
    >
      <defs>
        {/* Main pastry body gradient */}
        <linearGradient id="kaas-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="40%" stopColor="#D4A84B" />
          <stop offset="100%" stopColor="#C8A45C" />
        </linearGradient>

        {/* Baked top gradient */}
        <linearGradient id="kaas-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="50%" stopColor="#A68B3C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Cheese gradient */}
        <linearGradient id="kaas-cheese" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5E6C8" />
          <stop offset="50%" stopColor="#E8D5A0" />
          <stop offset="100%" stopColor="#D4A84B" />
        </linearGradient>

        {/* Highlight sheen */}
        <linearGradient id="kaas-sheen" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FBF7F0" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="kaas-shadow" x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>

        {/* Subtle inner texture */}
        <filter id="kaas-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="soft-light" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="110" cy="122" rx="80" ry="10" fill="rgba(27,42,74,0.12)" />

      <g filter="url(#kaas-shadow)">
        {/* Cheese melting out left side */}
        <path
          d="M38 72 Q30 74 28 80 Q26 88 32 92 Q35 94 42 92 L44 78 Z"
          fill="url(#kaas-cheese)"
          opacity="0.9"
        />
        <path
          d="M36 80 Q32 82 31 86 Q33 89 36 88"
          fill="#E8D5A0"
          opacity="0.6"
        />

        {/* Cheese melting out right side */}
        <path
          d="M182 70 Q190 73 192 80 Q194 88 188 92 Q185 94 178 92 L176 76 Z"
          fill="url(#kaas-cheese)"
          opacity="0.9"
        />
        <path
          d="M184 78 Q188 80 189 85 Q187 88 184 87"
          fill="#E8D5A0"
          opacity="0.6"
        />

        {/* Main pastry body — rounded rectangle */}
        <rect
          x="38"
          y="58"
          width="144"
          height="52"
          rx="18"
          ry="18"
          fill="url(#kaas-body)"
        />

        {/* Bottom edge darkening */}
        <path
          d="M56 100 Q110 116 164 100 Q172 98 174 92 L174 104 Q172 110 164 110 L56 110 Q48 110 46 104 L46 92 Q48 98 56 100 Z"
          fill="#8B6914"
          opacity="0.2"
        />

        {/* Baked golden top dome */}
        <path
          d="M44 76 Q44 48 72 40 Q100 32 110 32 Q120 32 148 40 Q176 48 176 76 Q176 80 174 82 L46 82 Q44 80 44 76 Z"
          fill="url(#kaas-top)"
        />

        {/* Top highlight sheen */}
        <path
          d="M54 70 Q54 52 80 44 Q105 38 110 38 Q115 38 140 44 Q166 52 166 70 Q166 72 164 74 L56 74 Q54 72 54 70 Z"
          fill="url(#kaas-sheen)"
        />

        {/* Crosshatch scoring marks */}
        <g stroke="#6B4F12" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round">
          {/* Diagonal lines one direction */}
          <path d="M70 44 Q85 68 92 76" />
          <path d="M90 38 Q105 62 110 72" />
          <path d="M110 36 Q125 60 130 70" />
          <path d="M130 38 Q145 62 150 72" />
          <path d="M150 44 Q160 62 165 70" />
          {/* Diagonal lines other direction */}
          <path d="M150 44 Q135 62 128 72" />
          <path d="M130 38 Q115 58 110 68" />
          <path d="M110 36 Q95 56 88 68" />
          <path d="M90 38 Q78 56 72 66" />
          <path d="M70 44 Q62 58 58 66" />
        </g>

        {/* Scoring marks — deeper cuts */}
        <g stroke="#6B4F12" strokeWidth="1.5" opacity="0.2" fill="none" strokeLinecap="round">
          <path d="M80 42 L100 70" />
          <path d="M120 36 L140 66" />
          <path d="M140 42 L120 70" />
          <path d="M100 38 L80 66" />
        </g>

        {/* Warm highlight on the crown */}
        <ellipse
          cx="105"
          cy="48"
          rx="30"
          ry="8"
          fill="#FBF7F0"
          opacity="0.18"
        />

        {/* Subtle side cheese highlights */}
        <path
          d="M40 78 Q38 82 38 86 Q38 90 40 92"
          stroke="#E8D5A0"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M180 76 Q182 80 182 84 Q182 88 180 90"
          stroke="#E8D5A0"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
