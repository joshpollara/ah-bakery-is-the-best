export default function BakeryCounter({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="Stylized bakery display counter with baked goods"
    >
      <defs>
        {/* Warm interior lighting */}
        <linearGradient id="counter-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A45C" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#E8D5A0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#A68B3C" stopOpacity="0.03" />
        </linearGradient>

        <linearGradient id="glass-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBF7F0" stopOpacity="0.08" />
          <stop offset="30%" stopColor="#FBF7F0" stopOpacity="0.02" />
          <stop offset="70%" stopColor="#FBF7F0" stopOpacity="0" />
          <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="counter-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="100%" stopColor="#2C3E6B" />
        </linearGradient>

        <linearGradient id="shelf-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5A0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C8A45C" stopOpacity="0.15" />
        </linearGradient>

        {/* Warm light from above */}
        <radialGradient id="top-light" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#C8A45C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C8A45C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#FBF7F0" />

      {/* Subtle wall behind counter */}
      <rect x="50" y="20" width="300" height="180" fill="#F0E8D8" fillOpacity="0.5" />

      {/* Back panel of the display case */}
      <path
        d="M 70 45 L 330 45 L 330 210 L 70 210 Z"
        fill="#1B2A4A"
        fillOpacity="0.06"
      />

      {/* Warm ambient light inside case */}
      <rect x="70" y="45" width="260" height="165" fill="url(#top-light)" />
      <rect x="70" y="45" width="260" height="165" fill="url(#counter-glow)" />

      {/* === Top shelf === */}
      {/* Shelf line */}
      <rect x="75" y="95" width="250" height="2" fill="#C8A45C" fillOpacity="0.25" rx="0.5" />

      {/* Baked goods on top shelf — croissants, bread loaves */}
      <g transform="translate(0, 0)">
        {/* Croissant 1 */}
        <path
          d="M 95 88 Q 100 72, 112 75 Q 118 77, 120 83 Q 115 86, 108 88 Q 100 90, 95 88"
          fill="#C8A45C"
          fillOpacity="0.5"
        />
        {/* Croissant 2 */}
        <path
          d="M 135 86 Q 140 71, 152 74 Q 158 76, 160 82 Q 155 85, 148 87 Q 140 89, 135 86"
          fill="#C8A45C"
          fillOpacity="0.45"
        />
        {/* Round bread */}
        <ellipse cx="190" cy="82" rx="13" ry="10" fill="#A68B3C" fillOpacity="0.35" />
        <path d="M 180 80 Q 190 75, 200 80" fill="none" stroke="#A68B3C" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Oval loaf */}
        <ellipse cx="230" cy="84" rx="16" ry="8" fill="#C8A45C" fillOpacity="0.4" />
        <line x1="218" y1="83" x2="242" y2="83" stroke="#A68B3C" strokeWidth="0.5" strokeOpacity="0.2" />
        {/* Small rolls cluster */}
        <circle cx="268" cy="86" r="6" fill="#C8A45C" fillOpacity="0.35" />
        <circle cx="280" cy="84" r="6.5" fill="#A68B3C" fillOpacity="0.3" />
        <circle cx="292" cy="87" r="5.5" fill="#C8A45C" fillOpacity="0.38" />
        {/* Baguette */}
        <rect x="305" y="78" width="4" height="14" rx="2" fill="#A68B3C" fillOpacity="0.3" transform="rotate(-8, 307, 85)" />
      </g>

      {/* === Middle shelf === */}
      <rect x="75" y="148" width="250" height="2" fill="#C8A45C" fillOpacity="0.25" rx="0.5" />

      {/* Baked goods on middle shelf — pastries, tarts */}
      <g transform="translate(0, 0)">
        {/* Square pastry / cake slice */}
        <rect x="88" y="130" width="14" height="12" rx="1" fill="#E8D5A0" fillOpacity="0.4" />
        <rect x="88" y="130" width="14" height="3" rx="1" fill="#C8A45C" fillOpacity="0.3" />
        {/* Round tart */}
        <circle cx="125" cy="138" r="8" fill="#E8D5A0" fillOpacity="0.35" />
        <circle cx="125" cy="138" r="5.5" fill="#C8A45C" fillOpacity="0.25" />
        {/* Danish */}
        <ellipse cx="155" cy="137" rx="9" ry="7" fill="#C8A45C" fillOpacity="0.4" />
        <circle cx="155" cy="136" r="3" fill="#A68B3C" fillOpacity="0.25" />
        {/* Rectangular slice */}
        <rect x="175" y="132" width="18" height="12" rx="1" fill="#E8D5A0" fillOpacity="0.35" />
        <rect x="175" y="132" width="18" height="4" rx="1" fill="#C8A45C" fillOpacity="0.2" />
        {/* Muffin shapes */}
        <path d="M 210 145 L 213 132 Q 218 126, 223 132 L 226 145" fill="#A68B3C" fillOpacity="0.3" />
        <path d="M 232 145 L 235 134 Q 240 128, 245 134 L 248 145" fill="#C8A45C" fillOpacity="0.35" />
        {/* Cookie row */}
        <circle cx="265" cy="140" r="5" fill="#C8A45C" fillOpacity="0.3" />
        <circle cx="278" cy="140" r="5" fill="#E8D5A0" fillOpacity="0.3" />
        <circle cx="291" cy="140" r="5" fill="#C8A45C" fillOpacity="0.28" />
        {/* Small bread */}
        <ellipse cx="312" cy="139" rx="8" ry="6" fill="#A68B3C" fillOpacity="0.32" />
      </g>

      {/* === Bottom shelf area (below second shelf) === */}
      {/* Larger bread loaves */}
      <g transform="translate(0, 0)">
        {/* Boule */}
        <ellipse cx="105" cy="180" rx="14" ry="11" fill="#A68B3C" fillOpacity="0.3" />
        <path d="M 94 178 Q 105 172, 116 178" fill="none" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.2" />
        {/* Sourdough */}
        <ellipse cx="150" cy="182" rx="16" ry="10" fill="#C8A45C" fillOpacity="0.35" />
        <path d="M 140 180 L 160 180" stroke="#A68B3C" strokeWidth="0.6" strokeOpacity="0.15" />
        {/* Rye bread rectangle */}
        <rect x="180" y="172" width="22" height="15" rx="2" fill="#6B6560" fillOpacity="0.18" />
        {/* Brioche-like */}
        <path d="M 218 192 Q 220 170, 228 168 Q 236 170, 238 192" fill="#E8D5A0" fillOpacity="0.35" />
        {/* Pretzel suggestion */}
        <circle cx="262" cy="182" r="8" fill="none" stroke="#C8A45C" strokeWidth="2" strokeOpacity="0.2" />
        <circle cx="258" cy="178" r="3" fill="#C8A45C" fillOpacity="0.15" />
        <circle cx="266" cy="178" r="3" fill="#C8A45C" fillOpacity="0.15" />
        {/* Long baguette */}
        <rect x="285" y="175" width="32" height="5" rx="2.5" fill="#C8A45C" fillOpacity="0.3" />
        <line x1="288" y1="177" x2="314" y2="177" stroke="#A68B3C" strokeWidth="0.4" strokeOpacity="0.15" />
      </g>

      {/* Glass front panel — with subtle sheen */}
      <path
        d="M 55 40 L 345 40 L 335 215 L 65 215 Z"
        fill="url(#glass-sheen)"
        stroke="#A09890"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />

      {/* Glass reflection lines */}
      <line x1="80" y1="50" x2="75" y2="205" stroke="#FBF7F0" strokeWidth="0.5" strokeOpacity="0.08" />
      <line x1="320" y1="48" x2="315" y2="208" stroke="#FBF7F0" strokeWidth="0.5" strokeOpacity="0.06" />

      {/* Counter top surface */}
      <path
        d="M 45 215 L 355 215 L 370 230 L 30 230 Z"
        fill="url(#counter-base)"
        fillOpacity="0.9"
      />

      {/* Counter top edge highlight */}
      <line x1="45" y1="215" x2="355" y2="215" stroke="#C8A45C" strokeWidth="0.8" strokeOpacity="0.3" />

      {/* Counter base / body */}
      <path
        d="M 30 230 L 370 230 L 370 280 L 30 280 Z"
        fill="#1B2A4A"
        fillOpacity="0.85"
      />

      {/* Counter panel detail */}
      <rect x="50" y="240" width="120" height="30" rx="1" fill="none" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.15" />
      <rect x="190" y="240" width="160" height="30" rx="1" fill="none" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* Counter base shadow */}
      <rect x="28" y="280" width="344" height="4" rx="1" fill="#6B6560" fillOpacity="0.1" />

      {/* Top frame of display case */}
      <path
        d="M 55 40 L 345 40"
        stroke="#6B6560"
        strokeWidth="2"
        strokeOpacity="0.4"
      />

      {/* Side frame lines */}
      <line x1="55" y1="40" x2="65" y2="215" stroke="#6B6560" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="345" y1="40" x2="335" y2="215" stroke="#6B6560" strokeWidth="1.5" strokeOpacity="0.3" />

      {/* Price tag suggestions */}
      <g fill="#FBF7F0" fillOpacity="0.5">
        <rect x="95" y="90" width="10" height="5" rx="0.5" />
        <rect x="185" y="90" width="10" height="5" rx="0.5" />
        <rect x="120" y="143" width="10" height="5" rx="0.5" />
        <rect x="260" y="143" width="10" height="5" rx="0.5" />
      </g>

      {/* Subtle warm light bloom at the top */}
      <ellipse cx="200" cy="45" rx="120" ry="15" fill="#C8A45C" fillOpacity="0.04" />
    </svg>
  );
}
