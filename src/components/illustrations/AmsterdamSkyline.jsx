export default function AmsterdamSkyline({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 200"
      className={className}
      role="img"
      aria-label="Amsterdam canal house skyline silhouette"
    >
      <defs>
        <linearGradient id="skyline-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="100%" stopColor="#2C3E6B" />
        </linearGradient>
      </defs>

      {/* Main skyline silhouette — canal houses with distinctive gable shapes */}
      <path
        d="
          M 0 200
          L 0 160
          L 15 160 L 15 120 L 18 115 L 22 110 L 26 105 L 30 100 L 34 105 L 38 110 L 42 115 L 45 120 L 45 160
          L 48 160
          L 48 130 L 52 130 L 52 95 L 55 90 L 58 85 L 60 80 L 62 85 L 65 90 L 68 95 L 68 130 L 72 130 L 72 160
          L 75 160
          L 75 105 L 78 105 L 80 100 L 82 95 L 86 90 L 90 95 L 92 100 L 94 105 L 97 105 L 97 160
          L 100 160
          L 100 125 L 103 125 L 103 108 L 106 98 L 109 92 L 112 88 L 115 84 L 118 88 L 121 92 L 124 98 L 127 108 L 127 125 L 130 125 L 130 160
          L 133 160
          L 133 140 L 136 140 L 136 100 L 139 95 L 142 100 L 145 95 L 148 90 L 151 95 L 154 100 L 157 95 L 160 100 L 160 140 L 163 140 L 163 160
          L 166 160
          L 166 110 L 169 110 L 170 100 L 172 92 L 175 85 L 178 92 L 180 100 L 181 110 L 184 110 L 184 160
          L 187 160
          L 187 135 L 190 135 L 190 98 L 193 93 L 196 88 L 198 93 L 200 98 L 200 135 L 203 135 L 203 160
          L 206 160
          L 206 115 L 209 115 L 209 85 L 212 78 L 215 72 L 218 78 L 221 85 L 221 115 L 224 115 L 224 160
          L 227 160
          L 227 125 L 229 125 L 229 105 L 232 98 L 234 92 L 237 86 L 239 80 L 241 86 L 243 92 L 246 98 L 248 105 L 248 125 L 250 125 L 250 160
          L 253 160
          L 253 130 L 256 130 L 256 90 L 258 85 L 260 82 L 262 85 L 264 90 L 264 130 L 267 130 L 267 160
          L 270 160
          L 270 110 L 273 110 L 273 78 L 275 73 L 278 68 L 281 63 L 284 58 L 287 53 L 290 48 L 293 43 L 296 38 L 298 35 L 299 30 L 299.5 20 L 300 12 L 300.5 20 L 301 30 L 302 35 L 304 38 L 307 43 L 310 48 L 313 53 L 316 58 L 319 63 L 322 68 L 325 73 L 327 78 L 327 110 L 330 110 L 330 160
          L 333 160
          L 333 120 L 336 120 L 336 92 L 339 86 L 342 80 L 345 86 L 348 92 L 348 120 L 351 120 L 351 160
          L 354 160
          L 354 100 L 357 100 L 357 72 L 360 66 L 363 60 L 366 55 L 369 60 L 372 66 L 375 72 L 375 100 L 378 100 L 378 160
          L 381 160
          L 381 130 L 383 130 L 383 105 L 386 98 L 389 92 L 392 88 L 395 92 L 398 98 L 401 105 L 401 130 L 403 130 L 403 160
          L 406 160
          L 406 115 L 409 115 L 409 88 L 411 83 L 414 78 L 416 83 L 419 88 L 419 115 L 422 115 L 422 160
          L 425 160
          L 425 95 L 428 95 L 428 68 L 431 62 L 434 57 L 437 52 L 440 57 L 443 62 L 446 68 L 446 95 L 449 95 L 449 160
          L 452 160
          L 452 125 L 454 125 L 454 100 L 456 95 L 459 90 L 462 95 L 464 100 L 464 125 L 466 125 L 466 160
          L 469 160
          L 469 108 L 472 108 L 472 80 L 474 74 L 477 68 L 479 62 L 481 68 L 483 74 L 486 80 L 486 108 L 489 108 L 489 160
          L 492 160
          L 492 135 L 495 135 L 495 105 L 498 98 L 500 92 L 503 98 L 505 105 L 505 135 L 508 135 L 508 160
          L 511 160
          L 511 118 L 514 118 L 514 88 L 517 82 L 520 76 L 523 82 L 526 88 L 526 118 L 529 118 L 529 160
          L 532 160
          L 532 140 L 535 140 L 535 105 L 538 100 L 540 96 L 543 100 L 545 105 L 545 140 L 548 140 L 548 160
          L 551 160
          L 551 125 L 554 125 L 554 95 L 557 88 L 560 82 L 563 88 L 566 95 L 566 125 L 569 125 L 569 160
          L 572 160
          L 572 145 L 575 145 L 575 110 L 578 105 L 580 100 L 583 105 L 585 110 L 585 145 L 588 145 L 588 160
          L 600 160
          L 600 200
          Z
        "
        fill="url(#skyline-fill)"
      />

      {/* Windows — small rectangles scattered on house facades */}
      <g fill="#FBF7F0" fillOpacity="0.12">
        {/* House 1 */}
        <rect x="24" y="125" width="4" height="5" rx="0.5" />
        <rect x="32" y="125" width="4" height="5" rx="0.5" />
        <rect x="24" y="140" width="4" height="7" rx="0.5" />
        <rect x="32" y="140" width="4" height="7" rx="0.5" />
        {/* House 3 */}
        <rect x="82" y="115" width="4" height="5" rx="0.5" />
        <rect x="82" y="130" width="4" height="7" rx="0.5" />
        <rect x="88" y="130" width="4" height="7" rx="0.5" />
        {/* House 4 — bell gable */}
        <rect x="109" y="115" width="4" height="5" rx="0.5" />
        <rect x="117" y="115" width="4" height="5" rx="0.5" />
        <rect x="109" y="132" width="4" height="7" rx="0.5" />
        <rect x="117" y="132" width="4" height="7" rx="0.5" />
        {/* House 6 */}
        <rect x="172" y="120" width="3.5" height="5" rx="0.5" />
        <rect x="172" y="135" width="3.5" height="7" rx="0.5" />
        {/* House 8 */}
        <rect x="212" y="95" width="4" height="5" rx="0.5" />
        <rect x="212" y="110" width="4" height="7" rx="0.5" />
        <rect x="212" y="130" width="4" height="7" rx="0.5" />
        {/* Church (Westerkerk) windows */}
        <rect x="295" y="85" width="3" height="8" rx="0.5" />
        <rect x="302" y="85" width="3" height="8" rx="0.5" />
        <rect x="290" y="120" width="3" height="6" rx="0.5" />
        <rect x="297" y="120" width="3" height="6" rx="0.5" />
        <rect x="304" y="120" width="3" height="6" rx="0.5" />
        {/* House after church */}
        <rect x="339" y="100" width="4" height="5" rx="0.5" />
        <rect x="339" y="115" width="4" height="7" rx="0.5" />
        {/* Large house */}
        <rect x="360" y="80" width="4" height="5" rx="0.5" />
        <rect x="368" y="80" width="4" height="5" rx="0.5" />
        <rect x="360" y="95" width="4" height="7" rx="0.5" />
        <rect x="368" y="95" width="4" height="7" rx="0.5" />
        {/* House 14 */}
        <rect x="434" y="65" width="4" height="5" rx="0.5" />
        <rect x="434" y="82" width="4" height="7" rx="0.5" />
        <rect x="440" y="82" width="4" height="7" rx="0.5" />
        {/* House 16 */}
        <rect x="476" y="88" width="3" height="5" rx="0.5" />
        <rect x="476" y="100" width="3" height="7" rx="0.5" />
        {/* House 19 */}
        <rect x="557" y="100" width="4" height="5" rx="0.5" />
        <rect x="557" y="115" width="4" height="7" rx="0.5" />
      </g>

      {/* Warm window glows — a few select windows lit up */}
      <g fill="#C8A45C" fillOpacity="0.25">
        <rect x="24" y="140" width="4" height="7" rx="0.5" />
        <rect x="117" y="132" width="4" height="7" rx="0.5" />
        <rect x="212" y="130" width="4" height="7" rx="0.5" />
        <rect x="368" y="95" width="4" height="7" rx="0.5" />
        <rect x="557" y="115" width="4" height="7" rx="0.5" />
      </g>

      {/* Bicycle silhouette */}
      <g transform="translate(140, 152)" fill="none" stroke="#1B2A4A" strokeWidth="1.2">
        {/* Rear wheel */}
        <circle cx="0" cy="6" r="5.5" />
        {/* Front wheel */}
        <circle cx="18" cy="6" r="5.5" />
        {/* Frame */}
        <line x1="0" y1="6" x2="7" y2="-2" />
        <line x1="7" y1="-2" x2="14" y2="-2" />
        <line x1="14" y1="-2" x2="18" y2="6" />
        <line x1="7" y1="-2" x2="5" y2="6" />
        <line x1="5" y1="6" x2="14" y2="-2" />
        {/* Handlebar */}
        <line x1="14" y1="-2" x2="16" y2="-5" />
        <line x1="14.5" y1="-5" x2="17.5" y2="-5" />
        {/* Seat */}
        <line x1="7" y1="-2" x2="6" y2="-5" />
        <line x1="4" y1="-5" x2="8" y2="-5" />
      </g>

      {/* Water line / canal reflection */}
      <line x1="0" y1="165" x2="600" y2="165" stroke="#C8A45C" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="0" y1="168" x2="600" y2="168" stroke="#C8A45C" strokeWidth="0.3" strokeOpacity="0.1" />

      {/* Subtle reflection dashes */}
      <g stroke="#1B2A4A" strokeWidth="0.8" strokeOpacity="0.08">
        <line x1="30" y1="172" x2="30" y2="180" />
        <line x1="115" y1="174" x2="115" y2="185" />
        <line x1="215" y1="172" x2="215" y2="182" />
        <line x1="300" y1="170" x2="300" y2="188" />
        <line x1="365" y1="172" x2="365" y2="183" />
        <line x1="440" y1="173" x2="440" y2="184" />
        <line x1="520" y1="174" x2="520" y2="182" />
      </g>
    </svg>
  );
}
