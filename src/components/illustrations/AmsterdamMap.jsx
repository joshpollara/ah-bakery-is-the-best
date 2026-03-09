export default function AmsterdamMap({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 400"
      className={className}
      role="img"
      aria-label="Stylized map of Amsterdam showing canal rings and bakery locations"
    >
      <defs>
        <linearGradient id="map-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="100%" stopColor="#2C3E6B" />
        </linearGradient>
        <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8A45C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C8A45C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="500" height="400" fill="url(#map-bg)" rx="4" />

      {/* IJ Waterfront */}
      <path
        d="M 30 75 Q 130 68, 250 72 Q 370 76, 470 70"
        fill="none"
        stroke="#E8D5A0"
        strokeWidth="2.5"
        strokeOpacity="0.5"
      />
      <path
        d="M 50 65 Q 150 58, 250 62 Q 350 66, 450 60"
        fill="none"
        stroke="#E8D5A0"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
      <text x="248" y="58" textAnchor="middle" fill="#E8D5A0" fillOpacity="0.4" fontSize="7" fontFamily="Georgia, serif" letterSpacing="3">
        HET IJ
      </text>

      {/* Centraal Station marker */}
      <rect x="230" y="73" width="40" height="6" rx="1" fill="#E8D5A0" fillOpacity="0.2" />
      <text x="250" y="92" textAnchor="middle" fill="#E8D5A0" fillOpacity="0.35" fontSize="5" fontFamily="Georgia, serif" letterSpacing="1">
        CS
      </text>

      {/* Canal rings — concentric arcs radiating from Centraal Station area */}
      {/* Singel */}
      <path
        d="M 160 95 Q 165 160, 190 210 Q 215 260, 250 280 Q 285 260, 310 210 Q 335 160, 340 95"
        fill="none"
        stroke="#C8A45C"
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      {/* Herengracht */}
      <path
        d="M 140 95 Q 145 175, 175 235 Q 205 290, 250 310 Q 295 290, 325 235 Q 355 175, 360 95"
        fill="none"
        stroke="#C8A45C"
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* Keizersgracht */}
      <path
        d="M 120 95 Q 125 190, 160 258 Q 195 320, 250 340 Q 305 320, 340 258 Q 375 190, 380 95"
        fill="none"
        stroke="#C8A45C"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
      {/* Prinsengracht */}
      <path
        d="M 100 95 Q 105 200, 145 278 Q 185 348, 250 368 Q 315 348, 355 278 Q 395 200, 400 95"
        fill="none"
        stroke="#C8A45C"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* Amstel River */}
      <path
        d="M 250 280 Q 252 310, 255 350 Q 256 370, 258 395"
        fill="none"
        stroke="#E8D5A0"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Cross streets / radial lines (subtle) */}
      <line x1="250" y1="95" x2="250" y2="140" stroke="#E8D5A0" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="200" y1="100" x2="185" y2="180" stroke="#E8D5A0" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="300" y1="100" x2="315" y2="180" stroke="#E8D5A0" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="175" y1="220" x2="325" y2="220" stroke="#E8D5A0" strokeWidth="0.5" strokeOpacity="0.12" />
      <line x1="190" y1="260" x2="310" y2="260" stroke="#E8D5A0" strokeWidth="0.5" strokeOpacity="0.12" />

      {/* Vondelpark suggestion */}
      <ellipse cx="145" cy="290" rx="40" ry="12" fill="#C8A45C" fillOpacity="0.06" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* Neighborhood labels */}
      <text x="250" y="170" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.45" fontSize="8" fontFamily="Georgia, serif" letterSpacing="2">
        CENTRUM
      </text>
      <text x="115" y="195" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        JORDAAN
      </text>
      <text x="260" y="345" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        DE PIJP
      </text>
      <text x="410" y="200" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        OOST
      </text>
      <text x="80" y="250" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        WEST
      </text>
      <text x="195" y="320" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        ZUID
      </text>
      <text x="300" y="55" textAnchor="middle" fill="#F0E8D8" fillOpacity="0.35" fontSize="7" fontFamily="Georgia, serif" letterSpacing="1.5">
        NOORD
      </text>

      {/* AH Location dots — distributed across the map */}
      {/* Centrum cluster */}
      <circle cx="240" cy="145" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="260" cy="160" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="235" cy="185" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="265" cy="195" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* Jordaan */}
      <circle cx="130" cy="170" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="120" cy="210" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="145" cy="230" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* West */}
      <circle cx="85" cy="230" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="75" cy="270" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* Zuid */}
      <circle cx="200" cy="300" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="175" cy="330" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="220" cy="340" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* De Pijp */}
      <circle cx="270" cy="320" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="290" cy="345" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* Oost */}
      <circle cx="380" cy="170" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="400" cy="210" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="420" cy="240" r="3" fill="#00A0E2" fillOpacity="0.85" />
      {/* Noord */}
      <circle cx="270" cy="45" r="3" fill="#00A0E2" fillOpacity="0.85" />
      <circle cx="320" cy="40" r="3" fill="#00A0E2" fillOpacity="0.85" />

      {/* Legend */}
      <g transform="translate(350, 370)">
        <circle cx="0" cy="-3" r="3" fill="#00A0E2" fillOpacity="0.85" />
        <text x="8" y="0" fill="#E8D5A0" fillOpacity="0.6" fontSize="7" fontFamily="Georgia, serif">
          AH Bakery Location
        </text>
      </g>

      {/* Subtle border frame */}
      <rect x="2" y="2" width="496" height="396" rx="4" fill="none" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.15" />
    </svg>
  );
}
