import React from "react";

export default function Tijgerbrood({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 160"
      width="220"
      height="160"
      className={className}
      role="img"
      aria-label="Tijgerbrood"
    >
      <defs>
        {/* Bread body gradient */}
        <radialGradient id="tijger-body" cx="0.5" cy="0.35" r="0.55">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="50%" stopColor="#D4A84B" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>

        {/* Crust gradient */}
        <radialGradient id="tijger-crust" cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#C8A45C" />
          <stop offset="60%" stopColor="#A68B3C" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>

        {/* Tiger crack color */}
        <linearGradient id="tijger-crack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4F12" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Top highlight */}
        <radialGradient id="tijger-highlight" cx="0.45" cy="0.3" r="0.35">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </radialGradient>

        <filter id="tijger-shadow" x="-10%" y="-10%" width="130%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="110" cy="142" rx="78" ry="10" fill="rgba(27,42,74,0.13)" />

      <g filter="url(#tijger-shadow)">
        {/* Main bread body — oval loaf shape */}
        <ellipse cx="110" cy="82" rx="88" ry="50" fill="url(#tijger-body)" />

        {/* Bottom darker edge */}
        <path
          d="M30 95 Q60 130 110 132 Q160 130 190 95 Q185 120 160 128 Q130 135 110 135 Q90 135 60 128 Q35 120 30 95 Z"
          fill="#8B6914"
          opacity="0.25"
        />

        {/* Crust top */}
        <ellipse cx="110" cy="76" rx="82" ry="42" fill="url(#tijger-crust)" opacity="0.4" />

        {/* Tiger stripe crack pattern — the distinctive crackled topping */}
        <g fill="none" stroke="url(#tijger-crack)" strokeWidth="2.2" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
          {/* Large crack network */}
          <path d="M55 55 Q62 60 58 68 Q55 75 60 80 Q65 85 60 92" />
          <path d="M72 42 Q78 50 74 58 Q70 65 76 72 Q80 78 75 86" />
          <path d="M92 36 Q98 44 94 52 Q90 60 96 66 Q100 72 96 80 Q92 88 98 95" />
          <path d="M112 34 Q108 42 112 50 Q116 58 112 64 Q108 72 114 78 Q118 84 114 92" />
          <path d="M132 36 Q128 44 132 52 Q136 60 130 66 Q126 72 132 80 Q136 88 130 95" />
          <path d="M150 42 Q146 50 150 58 Q154 65 148 72 Q144 78 150 86" />
          <path d="M165 52 Q160 60 164 68 Q168 76 162 84 Q158 90 162 96" />

          {/* Horizontal connecting cracks */}
          <path d="M58 68 Q66 66 74 58" />
          <path d="M60 80 Q68 78 76 72" />
          <path d="M75 86 Q84 82 96 80" />
          <path d="M55 55 Q64 50 72 42" />
          <path d="M94 52 Q102 48 112 50" />
          <path d="M96 66 Q104 62 112 64" />
          <path d="M114 78 Q122 76 132 80" />
          <path d="M132 52 Q140 48 150 58" />
          <path d="M130 66 Q138 64 148 72" />
          <path d="M150 86 Q156 84 162 84" />
          <path d="M112 34 Q122 36 132 36" />
          <path d="M92 36 Q102 34 112 34" />
          <path d="M98 95 Q106 92 114 92" />
          <path d="M114 92 Q122 94 130 95" />
        </g>

        {/* Smaller detail cracks */}
        <g fill="none" stroke="#6B4F12" strokeWidth="1.2" opacity="0.35" strokeLinecap="round">
          <path d="M65 48 Q70 52 68 58" />
          <path d="M82 44 Q86 48 84 54" />
          <path d="M105 42 Q108 46 106 50" />
          <path d="M140 40 Q143 44 141 50" />
          <path d="M158 48 Q162 54 160 60" />
          <path d="M68 88 Q72 92 70 96" />
          <path d="M88 90 Q92 94 90 98" />
          <path d="M118 88 Q122 92 120 96" />
          <path d="M142 86 Q146 90 144 94" />
          <path d="M46 68 Q50 72 48 78" />
          <path d="M170 68 Q174 72 172 78" />
        </g>

        {/* Raised crack edges — lighter on one side for 3D effect */}
        <g fill="none" stroke="#E8D5A0" strokeWidth="0.8" opacity="0.25" strokeLinecap="round">
          <path d="M57 54 Q64 59 60 67" />
          <path d="M74 41 Q80 49 76 57" />
          <path d="M94 35 Q100 43 96 51" />
          <path d="M114 33 Q110 41 114 49" />
          <path d="M134 35 Q130 43 134 51" />
          <path d="M152 41 Q148 49 152 57" />
          <path d="M167 51 Q162 59 166 67" />
        </g>

        {/* Top highlight dome */}
        <ellipse cx="105" cy="60" rx="50" ry="22" fill="url(#tijger-highlight)" />

        {/* Warm crown glow */}
        <ellipse cx="105" cy="52" rx="30" ry="12" fill="#FBF7F0" opacity="0.1" />

        {/* Side contour highlights */}
        <path
          d="M35 70 Q28 80 28 90 Q28 95 32 100"
          stroke="#E8D5A0"
          strokeWidth="2"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M185 70 Q192 80 192 90 Q192 95 188 100"
          stroke="#E8D5A0"
          strokeWidth="2"
          fill="none"
          opacity="0.15"
        />

        {/* Bottom shadow contour */}
        <path
          d="M45 118 Q75 132 110 134 Q145 132 175 118"
          stroke="#6B4F12"
          strokeWidth="1.5"
          fill="none"
          opacity="0.12"
        />

        {/* Flour dust suggestion on top */}
        <g fill="#FBF7F0" opacity="0.12">
          <circle cx="80" cy="48" r="2" />
          <circle cx="100" cy="42" r="2.5" />
          <circle cx="125" cy="46" r="2" />
          <circle cx="90" cy="56" r="1.8" />
          <circle cx="130" cy="54" r="1.5" />
          <circle cx="110" cy="50" r="2" />
        </g>
      </g>
    </svg>
  );
}
