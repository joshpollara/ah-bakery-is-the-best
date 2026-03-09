import React from 'react';

export default function CroissantIllustration({ className }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 300 250"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Illustrated croissant, golden and flaky, presented with reverence"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* Museum-grade radial glow */}
          <radialGradient id="croissant-glow" cx="50%" cy="55%" r="45%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#E8D5A0" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#C8A45C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
          </radialGradient>

          {/* Body gradient — warm laminated dough */}
          <linearGradient id="croissant-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A0" />
            <stop offset="35%" stopColor="#D4B978" />
            <stop offset="60%" stopColor="#C8A45C" />
            <stop offset="100%" stopColor="#A68B3C" />
          </linearGradient>

          {/* Top crust highlight */}
          <linearGradient id="croissant-highlight" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#F0E4C4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E8D5A0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C8A45C" stopOpacity="0.1" />
          </linearGradient>

          {/* Deep fold shadow */}
          <linearGradient id="croissant-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B7330" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A68B3C" stopOpacity="0.2" />
          </linearGradient>

          {/* Under-belly shadow gradient */}
          <linearGradient id="croissant-underbelly" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#B8963E" />
            <stop offset="100%" stopColor="#8B7330" />
          </linearGradient>

          {/* Steam wisps gradient */}
          <linearGradient id="steam-fade" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C8A45C" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E8D5A0" stopOpacity="0" />
          </linearGradient>

          {/* Soft drop shadow for the croissant */}
          <filter id="croissant-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
            <feOffset dx="0" dy="3" result="offsetBlur" />
            <feFlood floodColor="#1B2A4A" floodOpacity="0.15" result="color" />
            <feComposite in2="offsetBlur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow filter for the halo */}
          <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>

          {/* Texture grain overlay */}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="mono"
            />
            <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
          </filter>
        </defs>

        {/* Reverent glow — as if displayed under gallery lighting */}
        <ellipse
          cx="150"
          cy="145"
          rx="130"
          ry="100"
          fill="url(#croissant-glow)"
          filter="url(#glow-blur)"
          opacity="0.8"
        />

        {/* Secondary inner glow ring */}
        <ellipse
          cx="150"
          cy="140"
          rx="80"
          ry="55"
          fill="#E8D5A0"
          opacity="0.08"
          filter="url(#glow-blur)"
        />

        {/* === THE CROISSANT === */}
        <g filter="url(#croissant-drop-shadow)">

          {/* Base body — the main crescent shape */}
          <path
            d="
              M 60 150
              Q 55 125, 75 110
              Q 95 95, 120 100
              Q 140 90, 155 88
              Q 170 86, 185 92
              Q 210 98, 230 112
              Q 250 128, 245 150
              Q 242 162, 230 168
              Q 210 178, 185 175
              Q 160 180, 150 178
              Q 130 180, 110 175
              Q 85 172, 70 165
              Q 58 158, 60 150
              Z
            "
            fill="url(#croissant-body)"
          />

          {/* Underbelly shadow crescent */}
          <path
            d="
              M 72 158
              Q 80 170, 110 174
              Q 135 178, 155 176
              Q 180 178, 210 172
              Q 235 165, 238 155
              Q 240 162, 228 170
              Q 205 182, 180 180
              Q 155 184, 150 182
              Q 125 184, 100 178
              Q 78 173, 68 162
              Z
            "
            fill="url(#croissant-underbelly)"
            opacity="0.5"
          />

          {/* === Lamination layers — the flaky folds === */}

          {/* Layer 1 — leftmost fold */}
          <path
            d="
              M 68 145
              Q 66 130, 80 118
              Q 92 108, 105 110
              Q 100 120, 90 132
              Q 78 146, 72 155
              Z
            "
            fill="url(#croissant-highlight)"
            opacity="0.7"
          />
          <path
            d="
              M 72 155
              Q 78 146, 90 132
              Q 95 138, 85 150
              Q 78 158, 72 160
              Z
            "
            fill="url(#croissant-shadow)"
            opacity="0.4"
          />

          {/* Layer 2 — left-center fold */}
          <path
            d="
              M 90 130
              Q 95 112, 115 104
              Q 125 100, 130 102
              Q 122 115, 112 130
              Q 102 145, 95 152
              Z
            "
            fill="url(#croissant-highlight)"
            opacity="0.65"
          />
          <path
            d="
              M 95 152
              Q 102 145, 112 130
              Q 118 138, 108 152
              Q 100 162, 94 158
              Z
            "
            fill="url(#croissant-shadow)"
            opacity="0.35"
          />

          {/* Layer 3 — center fold (the crown) */}
          <path
            d="
              M 118 120
              Q 128 100, 150 92
              Q 165 88, 175 95
              Q 165 108, 155 122
              Q 145 136, 135 146
              Z
            "
            fill="url(#croissant-highlight)"
            opacity="0.75"
          />
          <path
            d="
              M 135 146
              Q 145 136, 155 122
              Q 162 132, 152 148
              Q 145 158, 136 155
              Z
            "
            fill="url(#croissant-shadow)"
            opacity="0.4"
          />

          {/* Layer 4 — right-center fold */}
          <path
            d="
              M 160 118
              Q 172 102, 195 100
              Q 208 100, 215 108
              Q 205 118, 192 130
              Q 178 142, 168 150
              Z
            "
            fill="url(#croissant-highlight)"
            opacity="0.6"
          />
          <path
            d="
              M 168 150
              Q 178 142, 192 130
              Q 198 138, 188 150
              Q 180 160, 170 158
              Z
            "
            fill="url(#croissant-shadow)"
            opacity="0.35"
          />

          {/* Layer 5 — rightmost fold */}
          <path
            d="
              M 200 125
              Q 215 112, 232 116
              Q 242 120, 244 132
              Q 238 138, 228 145
              Q 218 152, 210 155
              Z
            "
            fill="url(#croissant-highlight)"
            opacity="0.55"
          />
          <path
            d="
              M 210 155
              Q 218 152, 228 145
              Q 232 150, 225 158
              Q 218 164, 212 160
              Z
            "
            fill="url(#croissant-shadow)"
            opacity="0.3"
          />

          {/* Top highlight ridge — the burnished crust */}
          <path
            d="
              M 80 118
              Q 100 100, 130 95
              Q 150 90, 175 94
              Q 210 102, 235 118
              Q 220 108, 195 100
              Q 170 92, 148 92
              Q 120 95, 95 108
              Z
            "
            fill="#F0E4C4"
            opacity="0.4"
          />

          {/* Specular highlight — the tiny bright spot where light hits */}
          <ellipse
            cx="148"
            cy="105"
            rx="18"
            ry="6"
            fill="#FBF7F0"
            opacity="0.35"
            transform="rotate(-8, 148, 105)"
          />

          {/* Subtle grain texture overlay on the body */}
          <path
            d="
              M 60 150
              Q 55 125, 75 110
              Q 95 95, 120 100
              Q 140 90, 155 88
              Q 170 86, 185 92
              Q 210 98, 230 112
              Q 250 128, 245 150
              Q 242 162, 230 168
              Q 210 178, 185 175
              Q 160 180, 150 178
              Q 130 180, 110 175
              Q 85 172, 70 165
              Q 58 158, 60 150
              Z
            "
            fill="none"
            stroke="#A68B3C"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Left tip curl */}
          <path
            d="
              M 60 150
              Q 52 148, 48 155
              Q 46 162, 52 165
              Q 56 166, 62 162
              Q 65 158, 62 153
            "
            fill="url(#croissant-body)"
            stroke="#A68B3C"
            strokeWidth="0.3"
            opacity="0.8"
          />

          {/* Right tip curl */}
          <path
            d="
              M 245 150
              Q 252 148, 256 155
              Q 258 162, 252 166
              Q 248 168, 242 163
              Q 239 158, 242 153
            "
            fill="url(#croissant-body)"
            stroke="#A68B3C"
            strokeWidth="0.3"
            opacity="0.8"
          />
        </g>

        {/* === Decorative steam wisps === */}
        <g opacity="0.6">
          {/* Wisp 1 — left */}
          <path
            d="
              M 120 88
              Q 118 72, 122 60
              Q 126 48, 120 36
            "
            fill="none"
            stroke="url(#steam-fade)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M 120 88 Q 118 72, 122 60 Q 126 48, 120 36;
                M 120 88 Q 116 70, 118 58 Q 120 44, 116 32;
                M 120 88 Q 122 74, 124 62 Q 128 48, 124 34;
                M 120 88 Q 118 72, 122 60 Q 126 48, 120 36
              "
            />
            <animate
              attributeName="opacity"
              dur="4s"
              repeatCount="indefinite"
              values="0.4;0.7;0.4"
            />
          </path>

          {/* Wisp 2 — center */}
          <path
            d="
              M 150 84
              Q 152 66, 148 52
              Q 144 38, 150 24
            "
            fill="none"
            stroke="url(#steam-fade)"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                M 150 84 Q 152 66, 148 52 Q 144 38, 150 24;
                M 150 84 Q 154 68, 152 54 Q 148 40, 154 26;
                M 150 84 Q 148 64, 146 50 Q 142 36, 146 22;
                M 150 84 Q 152 66, 148 52 Q 144 38, 150 24
              "
            />
            <animate
              attributeName="opacity"
              dur="5s"
              repeatCount="indefinite"
              values="0.5;0.8;0.5"
            />
          </path>

          {/* Wisp 3 — right */}
          <path
            d="
              M 180 88
              Q 182 74, 178 62
              Q 174 50, 180 38
            "
            fill="none"
            stroke="url(#steam-fade)"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="4.5s"
              repeatCount="indefinite"
              values="
                M 180 88 Q 182 74, 178 62 Q 174 50, 180 38;
                M 180 88 Q 184 72, 182 60 Q 178 46, 184 34;
                M 180 88 Q 180 76, 176 64 Q 172 52, 176 40;
                M 180 88 Q 182 74, 178 62 Q 174 50, 180 38
              "
            />
            <animate
              attributeName="opacity"
              dur="4.5s"
              repeatCount="indefinite"
              values="0.3;0.6;0.3"
            />
          </path>
        </g>

        {/* Subtle surface reflection / table shadow */}
        <ellipse
          cx="150"
          cy="185"
          rx="75"
          ry="8"
          fill="#1B2A4A"
          opacity="0.06"
        />

        {/* Delicate crumb detail — because a true croissant sheds */}
        <g opacity="0.35" fill="#C8A45C">
          <circle cx="98" cy="182" r="1" />
          <circle cx="112" cy="186" r="0.7" />
          <circle cx="195" cy="183" r="0.9" />
          <circle cx="175" cy="187" r="0.6" />
          <circle cx="140" cy="185" r="0.8" />
        </g>
      </svg>
    </div>
  );
}
