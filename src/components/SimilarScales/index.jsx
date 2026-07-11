import React from 'react';

/**
 * Shows the SAME triangle at three different sizes side by side.
 * Demonstrates: angles stay the same, sides scale proportionally.
 * Angles used: 50°, 70°, 60° — a clearly non-right, non-equilateral triangle.
 */
export default function SimilarScales() {
  // Base triangle vertices (size 1×)
  // A at bottom-left, B at bottom-right, C at top
  const base = { ax: 0, ay: 80, bx: 80, by: 80, cx: 25, cy: 10 };

  const scales = [
    { k: 1,   label: '1× (original)', ox: 30,  oy: 20, color: '#3b82f6', labelColor: '#1d4ed8' },
    { k: 1.6, label: '1.6× (larger)', ox: 185, oy: 20, color: '#10b981', labelColor: '#15803d' },
    { k: 0.6, label: '0.6× (smaller)', ox: 420, oy: 20, color: '#f59e0b', labelColor: '#b45309' },
  ];

  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>

        <text x="280" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Same Shape — Three Different Sizes
        </text>

        {scales.map(({ k, label, ox, oy, color, labelColor }) => {
          const ax = ox + base.ax * k, ay = oy + base.ay * k;
          const bx = ox + base.bx * k, by = oy + base.by * k;
          const cx = ox + base.cx * k, cy = oy + base.cy * k;
          const mid = { x: (ax + bx + cx) / 3, y: (ay + by + cy) / 3 };

          return (
            <g key={k}>
              {/* Triangle fill */}
              <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
                fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />

              {/* Angle marks — small arcs at each vertex */}
              <circle cx={ax} cy={ay} r={k * 8} fill="none" stroke={color} strokeWidth="1.2"
                strokeDasharray={`${k * 10} 100`} />
              <circle cx={bx} cy={by} r={k * 8} fill="none" stroke={color} strokeWidth="1.2"
                strokeDasharray={`${k * 10} 100`} />
              <circle cx={cx} cy={cy} r={k * 9} fill="none" stroke={color} strokeWidth="1.2"
                strokeDasharray={`${k * 11} 100`} />

              {/* Side length labels */}
              <text x={(ax + cx) / 2 - k * 10} y={(ay + cy) / 2} fontSize={Math.max(8, 9 * k)}
                fill={labelColor} fontWeight="600">{(70 * k).toFixed(0)}</text>
              <text x={(bx + cx) / 2 + 3} y={(by + cy) / 2} fontSize={Math.max(8, 9 * k)}
                fill={labelColor} fontWeight="600">{(60 * k).toFixed(0)}</text>
              <text x={(ax + bx) / 2} y={ay + k * 14} fontSize={Math.max(8, 9 * k)}
                textAnchor="middle" fill={labelColor} fontWeight="600">{(80 * k).toFixed(0)}</text>

              {/* Label box */}
              <rect x={ox} y={oy + k * 95} width={k * 80 + 10} height={22} rx="5"
                fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
              <text x={ox + (k * 80 + 10) / 2} y={oy + k * 95 + 14}
                textAnchor="middle" fontSize="9.5" fill={labelColor} fontWeight="700">{label}</text>
            </g>
          );
        })}

        {/* Arrows and annotation */}
        <text x="280" y="210" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="700">
          ✓ All three triangles have the SAME angles — only the side lengths change
        </text>
        <text x="280" y="226" textAnchor="middle" fontSize="10" fill="#64748b">
          This is what SIMILAR means: same shape, proportional sides
        </text>
      </svg>
    </div>
  );
}
