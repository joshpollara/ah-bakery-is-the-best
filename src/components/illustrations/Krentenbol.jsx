import React from "react";

export default function Krentenbol({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 160"
      width="180"
      height="160"
      className={className}
      role="img"
      aria-label="Krentenbol"
    >
      <defs>
        {/* Main bun gradient — warm golden dome */}
        <radialGradient id="krenten-body" cx="0.45" cy="0.35" r="0.55">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="40%" stopColor="#D4A84B" />
          <stop offset="75%" stopColor="#C8A45C" />
          <stop offset="100%" stopColor="#A68B3C" />
        </radialGradient>

        {/* Top gloss */}
        <radialGradient id="krenten-gloss" cx="0.4" cy="0.28" r="0.35">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#FBF7F0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </radialGradient>

        {/* Bottom shadow gradient */}
        <linearGradient id="krenten-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A68B3C" stopOpacity="0" />
          <stop offset="60%" stopColor="#8B6914" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6B4F12" stopOpacity="0.5" />
        </linearGradient>

        {/* Currant/raisin gradient */}
        <radialGradient id="krenten-raisin" cx="0.35" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#4A3525" />
          <stop offset="100%" stopColor="#2E1E14" />
        </radialGradient>

        <filter id="krenten-shadow" x="-15%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>

        {/* Soft inner shadow for roundness */}
        <radialGradient id="krenten-depth" cx="0.5" cy="0.5" r="0.5">
          <stop offset="70%" stopColor="#C8A45C" stopOpacity="0" />
          <stop offset="100%" stopColor="#6B4F12" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="90" cy="142" rx="60" ry="10" fill="rgba(27,42,74,0.13)" />

      <g filter="url(#krenten-shadow)">
        {/* Main bun body — round domed shape */}
        <ellipse cx="90" cy="84" rx="68" ry="52" fill="url(#krenten-body)" />

        {/* Depth/roundness overlay */}
        <ellipse cx="90" cy="84" rx="68" ry="52" fill="url(#krenten-depth)" />

        {/* Bottom darkening */}
        <path
          d="M28 95 Q50 130 90 134 Q130 130 152 95 Q148 118 130 126 Q110 134 90 134 Q70 134 50 126 Q32 118 28 95 Z"
          fill="url(#krenten-bottom)"
        />

        {/* Subtle surface contour lines — roundness suggestion */}
        <g stroke="#A68B3C" strokeWidth="0.6" opacity="0.12" fill="none">
          <ellipse cx="90" cy="68" rx="55" ry="18" />
          <ellipse cx="90" cy="58" rx="42" ry="12" />
        </g>

        {/* Currants/raisins on the surface */}
        {/* Top area raisins */}
        <ellipse cx="72" cy="56" rx="3.5" ry="3" transform="rotate(-10 72 56)" fill="url(#krenten-raisin)" />
        <ellipse cx="72" cy="56" rx="2" ry="1.5" transform="rotate(-10 72 56)" fill="#4A3525" opacity="0.5" />

        <ellipse cx="105" cy="52" rx="3" ry="3.5" transform="rotate(15 105 52)" fill="url(#krenten-raisin)" />
        <ellipse cx="105" cy="52" rx="1.8" ry="2" transform="rotate(15 105 52)" fill="#4A3525" opacity="0.4" />

        <ellipse cx="88" cy="48" rx="2.8" ry="2.5" transform="rotate(5 88 48)" fill="url(#krenten-raisin)" />

        {/* Middle area raisins */}
        <ellipse cx="58" cy="72" rx="3.2" ry="2.8" transform="rotate(-20 58 72)" fill="url(#krenten-raisin)" />
        <ellipse cx="58" cy="72" rx="1.8" ry="1.5" transform="rotate(-20 58 72)" fill="#4A3525" opacity="0.4" />

        <ellipse cx="118" cy="68" rx="3" ry="3.2" transform="rotate(12 118 68)" fill="url(#krenten-raisin)" />
        <ellipse cx="118" cy="68" rx="1.8" ry="1.8" transform="rotate(12 118 68)" fill="#4A3525" opacity="0.45" />

        <ellipse cx="82" cy="74" rx="3.5" ry="3" transform="rotate(-5 82 74)" fill="url(#krenten-raisin)" />

        <ellipse cx="100" cy="78" rx="2.8" ry="3" transform="rotate(8 100 78)" fill="url(#krenten-raisin)" />
        <ellipse cx="100" cy="78" rx="1.6" ry="1.8" transform="rotate(8 100 78)" fill="#4A3525" opacity="0.4" />

        {/* Lower/side raisins */}
        <ellipse cx="45" cy="88" rx="2.8" ry="2.5" transform="rotate(-25 45 88)" fill="url(#krenten-raisin)" />

        <ellipse cx="135" cy="84" rx="3" ry="2.6" transform="rotate(18 135 84)" fill="url(#krenten-raisin)" />

        <ellipse cx="70" cy="96" rx="3" ry="2.5" transform="rotate(-8 70 96)" fill="url(#krenten-raisin)" />

        <ellipse cx="112" cy="94" rx="2.8" ry="2.8" transform="rotate(10 112 94)" fill="url(#krenten-raisin)" />
        <ellipse cx="112" cy="94" rx="1.5" ry="1.5" transform="rotate(10 112 94)" fill="#4A3525" opacity="0.4" />

        <ellipse cx="92" cy="100" rx="2.5" ry="2.8" transform="rotate(3 92 100)" fill="url(#krenten-raisin)" />

        {/* Partially hidden raisins near edges */}
        <ellipse cx="38" cy="78" rx="2.5" ry="2" transform="rotate(-30 38 78)" fill="url(#krenten-raisin)" opacity="0.7" />
        <ellipse cx="145" cy="76" rx="2.5" ry="2" transform="rotate(22 145 76)" fill="url(#krenten-raisin)" opacity="0.7" />

        {/* Small raisin indent shadows */}
        <g fill="#6B4F12" opacity="0.15">
          <ellipse cx="73" cy="57" rx="4.5" ry="4" transform="rotate(-10 73 57)" />
          <ellipse cx="106" cy="53" rx="4" ry="4.5" transform="rotate(15 106 53)" />
          <ellipse cx="59" cy="73" rx="4.2" ry="3.8" transform="rotate(-20 59 73)" />
          <ellipse cx="119" cy="69" rx="4" ry="4.2" transform="rotate(12 119 69)" />
          <ellipse cx="83" cy="75" rx="4.5" ry="4" transform="rotate(-5 83 75)" />
        </g>

        {/* Glossy top sheen — egg wash shine */}
        <ellipse cx="85" cy="60" rx="40" ry="22" fill="url(#krenten-gloss)" />

        {/* Crown highlight */}
        <ellipse cx="82" cy="50" rx="22" ry="10" fill="#FBF7F0" opacity="0.12" />

        {/* Warm side highlights */}
        <path
          d="M32 72 Q26 82 26 92 Q26 98 30 102"
          stroke="#E8D5A0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.18"
        />

        {/* Bottom contour */}
        <path
          d="M42 120 Q65 134 90 136 Q115 134 138 120"
          stroke="#6B4F12"
          strokeWidth="1.5"
          fill="none"
          opacity="0.1"
        />

        {/* Subtle warm baked patches */}
        <g fill="#B8860B" opacity="0.08">
          <ellipse cx="65" cy="62" rx="15" ry="10" transform="rotate(-10 65 62)" />
          <ellipse cx="115" cy="58" rx="14" ry="9" transform="rotate(8 115 58)" />
          <ellipse cx="90" cy="90" rx="18" ry="10" />
        </g>
      </g>
    </svg>
  );
}
