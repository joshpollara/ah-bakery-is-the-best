import React from "react";

export default function Saucijzenbroodje({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 120"
      width="240"
      height="120"
      className={className}
      role="img"
      aria-label="Saucijzenbroodje"
    >
      <defs>
        {/* Pastry body gradient */}
        <linearGradient id="saucij-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="35%" stopColor="#C8A45C" />
          <stop offset="70%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Top golden crust */}
        <linearGradient id="saucij-crust" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A45C" />
          <stop offset="40%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#A68B3C" />
        </linearGradient>

        {/* Meat filling */}
        <linearGradient id="saucij-meat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B08060" />
          <stop offset="50%" stopColor="#9A6B4A" />
          <stop offset="100%" stopColor="#7A5535" />
        </linearGradient>

        {/* Highlight */}
        <linearGradient id="saucij-sheen" x1="0.3" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#FBF7F0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </linearGradient>

        {/* Edge darkening */}
        <radialGradient id="saucij-edge" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#D4A84B" stopOpacity="0" />
          <stop offset="80%" stopColor="#6B4F12" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6B4F12" stopOpacity="0.4" />
        </radialGradient>

        <filter id="saucij-shadow" x="-10%" y="-10%" width="130%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="120" cy="102" rx="88" ry="9" fill="rgba(27,42,74,0.12)" />

      <g filter="url(#saucij-shadow)">
        {/* Meat visible at left end */}
        <ellipse cx="30" cy="62" rx="8" ry="18" fill="url(#saucij-meat)" />
        <ellipse cx="30" cy="58" rx="6" ry="12" fill="#B08060" opacity="0.5" />

        {/* Meat visible at right end */}
        <ellipse cx="210" cy="62" rx="8" ry="18" fill="url(#saucij-meat)" />
        <ellipse cx="210" cy="58" rx="6" ry="12" fill="#B08060" opacity="0.5" />

        {/* Main pastry body — elongated oval */}
        <path
          d="M32 38 Q32 28 60 24 Q90 20 120 20 Q150 20 180 24 Q208 28 208 38 L208 82 Q208 96 180 98 Q150 100 120 100 Q90 100 60 98 Q32 96 32 82 Z"
          fill="url(#saucij-body)"
        />

        {/* Pastry spiral wrap lines — characteristic pattern */}
        <g stroke="#8B6914" strokeWidth="1.2" opacity="0.3" fill="none" strokeLinecap="round">
          <path d="M48 28 Q48 60 48 92" />
          <path d="M68 22 Q66 58 68 96" />
          <path d="M88 20 Q86 58 88 98" />
          <path d="M108 20 Q106 58 108 98" />
          <path d="M128 20 Q126 58 128 98" />
          <path d="M148 20 Q146 58 148 98" />
          <path d="M168 22 Q166 58 168 96" />
          <path d="M188 26 Q186 58 188 94" />
        </g>

        {/* Top crust overlay — lighter baked top */}
        <path
          d="M34 52 Q34 26 64 22 Q94 18 120 18 Q146 18 176 22 Q206 26 206 52 Q206 58 200 60 L40 60 Q34 58 34 52 Z"
          fill="url(#saucij-crust)"
          opacity="0.7"
        />

        {/* Flaky crack lines on top */}
        <g stroke="#6B4F12" strokeWidth="0.8" opacity="0.35" fill="none" strokeLinecap="round">
          {/* Horizontal cracks */}
          <path d="M55 35 Q70 33 85 36" />
          <path d="M95 30 Q115 28 135 31" />
          <path d="M145 34 Q165 32 180 36" />
          <path d="M65 48 Q90 45 115 48" />
          <path d="M125 46 Q150 44 175 47" />
          {/* Small detail cracks */}
          <path d="M75 40 L82 38" />
          <path d="M130 38 L140 36" />
          <path d="M155 42 L162 40" />
          <path d="M100 42 L108 44" />
        </g>

        {/* Spiral wrap diagonal suggestions */}
        <g stroke="#6B4F12" strokeWidth="0.7" opacity="0.2" fill="none" strokeLinecap="round">
          <path d="M50 30 Q58 50 55 70 Q52 85 54 92" />
          <path d="M70 24 Q78 44 75 64 Q72 80 74 96" />
          <path d="M90 22 Q98 42 95 62 Q92 78 94 98" />
          <path d="M110 20 Q118 40 115 60 Q112 76 114 98" />
          <path d="M130 20 Q138 40 135 60 Q132 76 134 98" />
          <path d="M150 22 Q158 42 155 62 Q152 78 154 96" />
          <path d="M170 24 Q178 44 175 64 Q172 80 174 94" />
          <path d="M190 30 Q196 48 193 66 Q190 80 192 90" />
        </g>

        {/* Edge darkening overlay */}
        <path
          d="M32 38 Q32 28 60 24 Q90 20 120 20 Q150 20 180 24 Q208 28 208 38 L208 82 Q208 96 180 98 Q150 100 120 100 Q90 100 60 98 Q32 96 32 82 Z"
          fill="url(#saucij-edge)"
        />

        {/* Top highlight sheen */}
        <path
          d="M44 48 Q44 30 72 26 Q100 22 120 22 Q140 22 168 26 Q196 30 196 48 Q196 52 192 54 L48 54 Q44 52 44 48 Z"
          fill="url(#saucij-sheen)"
        />

        {/* Warm crown highlight */}
        <ellipse cx="120" cy="32" rx="45" ry="7" fill="#FBF7F0" opacity="0.14" />

        {/* Bottom edge shadow */}
        <path
          d="M50 90 Q90 102 120 102 Q150 102 190 90"
          stroke="#6B4F12"
          strokeWidth="1.5"
          fill="none"
          opacity="0.15"
        />

        {/* Subtle golden flake highlights */}
        <g fill="#E8D5A0" opacity="0.3">
          <ellipse cx="75" cy="55" rx="8" ry="2" />
          <ellipse cx="120" cy="50" rx="10" ry="2" />
          <ellipse cx="160" cy="53" rx="7" ry="2" />
        </g>
      </g>
    </svg>
  );
}
