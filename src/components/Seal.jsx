export default function Seal({ size = 200 }) {
  const radius = size / 2
  const textRadius = radius * 0.78
  const circumference = 2 * Math.PI * textRadius

  const sealText = '#1 BAKERY IN AMSTERDAM \u2022 VERIFIED \u2022 CIVIC ASSESSMENT \u2022 '

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="block"
      >
        {/* Outer gold ring */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 2}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="3"
        />

        {/* Inner gold ring */}
        <circle
          cx={radius}
          cy={radius}
          r={radius * 0.88}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
        />

        {/* Navy background fill */}
        <circle
          cx={radius}
          cy={radius}
          r={radius * 0.86}
          fill="var(--color-navy)"
        />

        {/* Decorative inner ring */}
        <circle
          cx={radius}
          cy={radius}
          r={radius * 0.58}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />

        {/* Rotating perimeter text */}
        <defs>
          <path
            id="seal-text-path"
            d={`M ${radius}, ${radius} m -${textRadius}, 0 a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0 a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`}
          />
        </defs>

        <g className="animate-slow-spin" style={{ transformOrigin: 'center' }}>
          <text
            fill="var(--color-gold)"
            fontSize={size * 0.055}
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.15em"
          >
            <textPath href="#seal-text-path" startOffset="0%">
              {sealText}
            </textPath>
          </text>
        </g>

        {/* Center text: #1 */}
        <text
          x={radius}
          y={radius - size * 0.04}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--color-gold)"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
          fontSize={size * 0.22}
        >
          #1
        </text>

        {/* Center text: BAKERY */}
        <text
          x={radius}
          y={radius + size * 0.14}
          textAnchor="middle"
          dominantBaseline="central"
          fill="var(--color-gold-light)"
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="500"
          fontSize={size * 0.07}
          letterSpacing="0.2em"
        >
          BAKERY
        </text>
      </svg>
    </div>
  )
}
