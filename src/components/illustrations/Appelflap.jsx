import React from "react";

export default function Appelflap({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 150"
      width="200"
      height="150"
      className={className}
      role="img"
      aria-label="Appelflap"
    >
      <defs>
        {/* Main pastry gradient */}
        <linearGradient id="appel-body" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#E8D5A0" />
          <stop offset="30%" stopColor="#D4A84B" />
          <stop offset="65%" stopColor="#C8A45C" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        {/* Top face gradient */}
        <linearGradient id="appel-top" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="50%" stopColor="#C8A45C" />
          <stop offset="100%" stopColor="#A68B3C" />
        </linearGradient>

        {/* Sugar glaze */}
        <linearGradient id="appel-glaze" x1="0.2" y1="0" x2="0.5" y2="0.8">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#FBF7F0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
        </linearGradient>

        {/* Apple filling */}
        <linearGradient id="appel-filling" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#A89040" />
          <stop offset="100%" stopColor="#8A7530" />
        </linearGradient>

        <filter id="appel-shadow" x="-10%" y="-10%" width="130%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1B2A4A" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="132" rx="70" ry="9" fill="rgba(27,42,74,0.10)" />

      <g filter="url(#appel-shadow)">
        {/* Apple filling peeking out at the seam */}
        <path
          d="M30 98 Q35 102 45 100 Q50 98 48 94"
          fill="url(#appel-filling)"
          opacity="0.8"
        />
        <path
          d="M155 92 Q160 96 168 94 Q172 92 170 88"
          fill="url(#appel-filling)"
          opacity="0.7"
        />

        {/* Main triangular/half-moon pastry shape */}
        <path
          d="M24 100 Q20 96 22 88 Q28 50 60 32 Q80 22 100 18 Q120 16 140 22 Q160 30 172 52 Q180 68 182 88 Q184 96 180 100 Q170 106 100 108 Q30 106 24 100 Z"
          fill="url(#appel-body)"
        />

        {/* Top face — slightly lighter, the visible domed surface */}
        <path
          d="M28 92 Q34 52 64 34 Q84 24 100 20 Q116 18 136 24 Q158 32 168 54 Q176 70 178 92 Q170 78 140 68 Q110 60 80 64 Q50 68 28 92 Z"
          fill="url(#appel-top)"
          opacity="0.6"
        />

        {/* Crimped edge along the bottom/seam */}
        <g fill="#A68B3C" opacity="0.5">
          <ellipse cx="32" cy="100" rx="6" ry="3.5" transform="rotate(-5 32 100)" />
          <ellipse cx="46" cy="104" rx="6" ry="3.5" transform="rotate(-2 46 104)" />
          <ellipse cx="60" cy="106" rx="6" ry="3.5" />
          <ellipse cx="74" cy="107" rx="6" ry="3.5" />
          <ellipse cx="88" cy="108" rx="6" ry="3.5" />
          <ellipse cx="102" cy="108" rx="6" ry="3.5" />
          <ellipse cx="116" cy="107" rx="6" ry="3.5" />
          <ellipse cx="130" cy="106" rx="6" ry="3.5" />
          <ellipse cx="144" cy="104" rx="6" ry="3.5" transform="rotate(2 144 104)" />
          <ellipse cx="158" cy="102" rx="6" ry="3.5" transform="rotate(3 158 102)" />
          <ellipse cx="172" cy="98" rx="6" ry="3.5" transform="rotate(5 172 98)" />
        </g>

        {/* Crimped edge shadow line */}
        <path
          d="M26 98 Q60 108 100 110 Q140 108 178 98"
          stroke="#8B6914"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Subtle surface texture — baked areas */}
        <g fill="#8B6914" opacity="0.12">
          <ellipse cx="70" cy="52" rx="18" ry="8" transform="rotate(-15 70 52)" />
          <ellipse cx="120" cy="48" rx="20" ry="7" transform="rotate(10 120 48)" />
          <ellipse cx="90" cy="72" rx="22" ry="9" transform="rotate(-5 90 72)" />
          <ellipse cx="140" cy="70" rx="16" ry="7" transform="rotate(8 140 70)" />
        </g>

        {/* Sugar glaze sheen */}
        <path
          d="M40 80 Q50 42 80 28 Q100 20 120 22 Q145 28 158 48 Q165 60 168 80 Q140 56 100 50 Q60 52 40 80 Z"
          fill="url(#appel-glaze)"
        />

        {/* Highlight on crown */}
        <ellipse cx="95" cy="38" rx="28" ry="10" fill="#FBF7F0" opacity="0.15" />

        {/* Small sugar crystal sparkles */}
        <g fill="#FBF7F0" opacity="0.35">
          <circle cx="72" cy="40" r="1.2" />
          <circle cx="108" cy="34" r="1" />
          <circle cx="90" cy="50" r="1.3" />
          <circle cx="130" cy="44" r="1" />
          <circle cx="60" cy="60" r="1.1" />
          <circle cx="145" cy="58" r="0.9" />
          <circle cx="100" cy="28" r="1" />
          <circle cx="80" cy="68" r="1.2" />
          <circle cx="115" cy="62" r="1" />
        </g>

        {/* Apple filling visible at left edge */}
        <path
          d="M28 94 Q24 90 26 86 Q30 92 36 96 Q32 96 28 94 Z"
          fill="#A89040"
          opacity="0.6"
        />

        {/* Warm edge highlight */}
        <path
          d="M34 88 Q42 56 70 38 Q88 28 100 24"
          stroke="#E8D5A0"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
