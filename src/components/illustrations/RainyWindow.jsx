export default function RainyWindow({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 350"
      className={className}
      role="img"
      aria-label="View through a rainy window on an Amsterdam day"
    >
      <defs>
        {/* Warm interior glow gradient */}
        <radialGradient id="warm-glow" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#C8A45C" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#A68B3C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0" />
        </radialGradient>

        {/* Glass tint */}
        <linearGradient id="glass-tint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2C3E6B" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#1B2A4A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2C3E6B" stopOpacity="0.12" />
        </linearGradient>

        {/* Outside moody sky */}
        <linearGradient id="moody-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B6560" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A09890" stopOpacity="0.15" />
        </linearGradient>

        {/* Clip path for window interior */}
        <clipPath id="window-clip">
          <rect x="40" y="35" width="220" height="280" rx="2" />
        </clipPath>

        {/* Rain drop shape */}
        <filter id="rain-blur">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>
      </defs>

      {/* Wall / surround */}
      <rect width="300" height="350" fill="#F0E8D8" />

      {/* Window opening — the view outside */}
      <rect x="40" y="35" width="220" height="280" rx="2" fill="#A09890" fillOpacity="0.25" />

      {/* Scene through the window */}
      <g clipPath="url(#window-clip)">
        {/* Moody sky */}
        <rect x="40" y="35" width="220" height="280" fill="url(#moody-sky)" />

        {/* Distant canal houses across the street — very subtle silhouettes */}
        <path
          d="
            M 40 185
            L 40 175 L 55 175 L 55 155 L 58 150 L 62 146 L 66 150 L 69 155 L 69 175
            L 72 175 L 72 160 L 75 152 L 78 148 L 81 144 L 84 148 L 87 152 L 90 160 L 90 175
            L 93 175 L 93 150 L 96 145 L 99 140 L 102 136 L 105 140 L 108 145 L 111 150 L 111 175
            L 114 175 L 114 162 L 116 158 L 119 154 L 122 158 L 124 162 L 124 175
            L 127 175 L 127 145 L 130 138 L 133 132 L 136 128 L 139 132 L 142 138 L 145 145 L 145 175
            L 148 175 L 148 158 L 151 152 L 154 148 L 157 152 L 160 158 L 160 175
            L 163 175 L 163 142 L 165 137 L 168 132 L 170 128 L 172 132 L 175 137 L 177 142 L 177 175
            L 180 175 L 180 155 L 183 150 L 186 146 L 189 142 L 192 146 L 195 150 L 198 155 L 198 175
            L 201 175 L 201 148 L 204 142 L 207 137 L 210 142 L 213 148 L 213 175
            L 216 175 L 216 160 L 219 155 L 222 150 L 225 155 L 228 160 L 228 175
            L 231 175 L 231 165 L 234 160 L 237 156 L 240 160 L 243 165 L 243 175
            L 260 175 L 260 185
            Z
          "
          fill="#6B6560"
          fillOpacity="0.3"
        />

        {/* Faint windows on distant houses */}
        <g fill="#C8A45C" fillOpacity="0.12">
          <rect x="59" y="160" width="3" height="4" rx="0.3" />
          <rect x="99" y="148" width="3" height="4" rx="0.3" />
          <rect x="133" y="150" width="3" height="4" rx="0.3" />
          <rect x="169" y="140" width="2.5" height="3.5" rx="0.3" />
          <rect x="206" y="150" width="3" height="4" rx="0.3" />
        </g>

        {/* Canal / street level */}
        <rect x="40" y="185" width="220" height="8" fill="#6B6560" fillOpacity="0.12" />

        {/* Canal water suggestion */}
        <rect x="40" y="193" width="220" height="122" fill="#2C3E6B" fillOpacity="0.08" />
        <line x1="50" y1="210" x2="80" y2="210" stroke="#A09890" strokeWidth="0.3" strokeOpacity="0.15" />
        <line x1="120" y1="220" x2="160" y2="220" stroke="#A09890" strokeWidth="0.3" strokeOpacity="0.15" />
        <line x1="180" y1="235" x2="230" y2="235" stroke="#A09890" strokeWidth="0.3" strokeOpacity="0.15" />

        {/* Warm interior glow overlay */}
        <rect x="40" y="35" width="220" height="280" fill="url(#warm-glow)" />

        {/* Glass tint */}
        <rect x="40" y="35" width="220" height="280" fill="url(#glass-tint)" />

        {/* Rain drops on glass — varied sizes and positions */}
        <g fill="#FBF7F0" fillOpacity="0.2">
          <ellipse cx="72" cy="62" rx="2" ry="2.5" />
          <ellipse cx="195" cy="78" rx="1.8" ry="2.2" />
          <ellipse cx="130" cy="95" rx="2.5" ry="3" />
          <ellipse cx="88" cy="140" rx="1.5" ry="2" />
          <ellipse cx="220" cy="155" rx="2" ry="2.5" />
          <ellipse cx="160" cy="180" rx="1.8" ry="2.2" />
          <ellipse cx="65" cy="210" rx="2.2" ry="2.8" />
          <ellipse cx="110" cy="245" rx="1.5" ry="2" />
          <ellipse cx="200" cy="230" rx="2" ry="2.5" />
          <ellipse cx="175" cy="270" rx="1.8" ry="2.2" />
          <ellipse cx="80" cy="285" rx="2.5" ry="3" />
          <ellipse cx="240" cy="100" rx="1.5" ry="2" />
          <ellipse cx="55" cy="170" rx="1.8" ry="2.2" />
          <ellipse cx="145" cy="130" rx="2" ry="2.5" />
          <ellipse cx="230" cy="260" rx="1.5" ry="2" />
        </g>

        {/* Rain drop trails / streaks running down */}
        <g stroke="#FBF7F0" strokeWidth="0.6" strokeOpacity="0.12" fill="none">
          <path d="M 72 65 Q 71 80, 70 100 Q 69 115, 68 130" />
          <path d="M 130 98 Q 129 115, 128 140 Q 127 158, 126 175" />
          <path d="M 195 80 Q 194 100, 193 125 Q 192 145, 191 165" />
          <path d="M 88 142 Q 87 160, 86 185 Q 85 205, 84 225" />
          <path d="M 220 157 Q 219 175, 218 200 Q 217 220, 216 240" />
          <path d="M 65 212 Q 64 230, 63 255 Q 62 275, 61 295" />
          <path d="M 200 232 Q 199 248, 198 270 Q 197 285, 196 300" />
          <path d="M 145 132 Q 144 150, 143 175 Q 142 195, 141 210" />
          <path d="M 240 102 Q 239 120, 238 145 Q 237 165, 236 185" />
        </g>

        {/* Diagonal rain streaks — suggesting falling rain outside */}
        <g stroke="#A09890" strokeWidth="0.4" strokeOpacity="0.08">
          <line x1="60" y1="40" x2="50" y2="70" />
          <line x1="100" y1="45" x2="90" y2="75" />
          <line x1="140" y1="38" x2="130" y2="68" />
          <line x1="180" y1="42" x2="170" y2="72" />
          <line x1="220" y1="36" x2="210" y2="66" />
          <line x1="75" y1="80" x2="65" y2="110" />
          <line x1="115" y1="85" x2="105" y2="115" />
          <line x1="155" y1="78" x2="145" y2="108" />
          <line x1="195" y1="82" x2="185" y2="112" />
          <line x1="235" y1="76" x2="225" y2="106" />
          <line x1="90" y1="120" x2="80" y2="150" />
          <line x1="170" y1="125" x2="160" y2="155" />
          <line x1="250" y1="115" x2="240" y2="145" />
        </g>
      </g>

      {/* Window frame */}
      <rect x="40" y="35" width="220" height="280" rx="2" fill="none" stroke="#6B6560" strokeWidth="4" />

      {/* Window muntins — dividing the glass into panes */}
      <line x1="150" y1="35" x2="150" y2="315" stroke="#6B6560" strokeWidth="3" />
      <line x1="40" y1="175" x2="260" y2="175" stroke="#6B6560" strokeWidth="3" />

      {/* Window sill */}
      <rect x="32" y="312" width="236" height="10" rx="1" fill="#6B6560" fillOpacity="0.6" />
      <rect x="36" y="310" width="228" height="6" rx="1" fill="#A09890" fillOpacity="0.3" />

      {/* Window sill shadow */}
      <rect x="40" y="318" width="220" height="3" rx="1" fill="#6B6560" fillOpacity="0.15" />

      {/* Subtle frame highlight */}
      <line x1="42" y1="37" x2="42" y2="313" stroke="#FBF7F0" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="42" y1="37" x2="258" y2="37" stroke="#FBF7F0" strokeWidth="0.5" strokeOpacity="0.1" />

      {/* Condensation at bottom of lower panes */}
      <g fill="#FBF7F0" fillOpacity="0.04">
        <ellipse cx="95" cy="305" rx="40" ry="8" />
        <ellipse cx="205" cy="308" rx="35" ry="6" />
      </g>
    </svg>
  );
}
