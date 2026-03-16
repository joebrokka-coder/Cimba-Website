"use client";

/**
 * Animated net/mesh background – light blue vertical + horizontal grid.
 * Two overlapping patterns create a gentle moving grid with subtle drift.
 */
export default function NetBackground() {
  const spacing = 48;
  const stroke = "rgba(7, 112, 227, 0.14)";
  const strokeWidth = 0.7;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <svg
        className="absolute w-full h-full animate-net-drift"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Vertical lines */}
          <pattern
            id="net-vert"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1={spacing / 2}
              y1={0}
              x2={spacing / 2}
              y2={spacing}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </pattern>
          {/* Horizontal lines */}
          <pattern
            id="net-horiz"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <line
              x1={0}
              y1={spacing / 2}
              x2={spacing}
              y2={spacing / 2}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#net-vert)" />
        <rect width="100%" height="100%" fill="url(#net-horiz)" />
      </svg>
    </div>
  );
}
