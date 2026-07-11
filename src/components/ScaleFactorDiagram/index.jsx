import React from 'react';

/**
 * Shows centre of enlargement O with original triangle ABC
 * and enlarged triangle A'B'C' at scale factor k.
 * Also shows the ratio formula visually.
 */
export default function ScaleFactorDiagram({ k = 2 }) {
  // Centre of enlargement
  const O = { x: 80, y: 200 };

  // Original triangle
  const A = { x: 160, y: 160 };
  const B = { x: 200, y: 200 };
  const C = { x: 170, y: 120 };

  // Enlarged triangle — each point moved from O by factor k
  const enlarge = (P) => ({
    x: O.x + k * (P.x - O.x),
    y: O.y + k * (P.y - O.y),
  });
  const A2 = enlarge(A);
  const B2 = enlarge(B);
  const C2 = enlarge(C);

  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>

        <text x="200" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Centre of Enlargement — Scale Factor k = {k}
        </text>

        {/* Rays from O through each vertex */}
        {[{P:A,P2:A2,col:'#3b82f6'},{P:B,P2:B2,col:'#10b981'},{P:C,P2:C2,col:'#f59e0b'}].map(({P,P2,col},i) => (
          <line key={i} x1={O.x} y1={O.y} x2={P2.x + 10*(P2.x-O.x)/Math.hypot(P2.x-O.x,P2.y-O.y)}
            y2={P2.y + 10*(P2.y-O.y)/Math.hypot(P2.x-O.x,P2.y-O.y)}
            stroke={col} strokeWidth="1.2" strokeDasharray="5,4" opacity="0.7" />
        ))}

        {/* Original triangle ABC */}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
          fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2.5" />
        <text x={A.x - 15} y={A.y + 4}  fontSize="11" fill="#1d4ed8" fontWeight="700">A</text>
        <text x={B.x + 4}  y={B.y + 4}  fontSize="11" fill="#1d4ed8" fontWeight="700">B</text>
        <text x={C.x - 5}  y={C.y - 6}  fontSize="11" fill="#1d4ed8" fontWeight="700">C</text>

        {/* Enlarged triangle A'B'C' */}
        <polygon points={`${A2.x},${A2.y} ${B2.x},${B2.y} ${C2.x},${C2.y}`}
          fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="2.5" strokeDasharray="8,3" />
        <text x={A2.x - 18} y={A2.y + 4}  fontSize="11" fill="#15803d" fontWeight="700">A'</text>
        <text x={B2.x + 4}  y={B2.y + 4}  fontSize="11" fill="#15803d" fontWeight="700">B'</text>
        <text x={C2.x - 5}  y={C2.y - 8}  fontSize="11" fill="#15803d" fontWeight="700">C'</text>

        {/* Centre O */}
        <circle cx={O.x} cy={O.y} r="6" fill="#dc2626" />
        <text x={O.x - 16} y={O.y + 5} fontSize="12" fill="#dc2626" fontWeight="800">O</text>
        <text x={O.x - 46} y={O.y + 18} fontSize="9" fill="#dc2626">(centre)</text>

        {/* OA and OA' distance labels */}
        <text x={(O.x+A.x)/2 + 5} y={(O.y+A.y)/2 - 5} fontSize="9" fill="#3b82f6" fontWeight="600">OA</text>
        <text x={(O.x+A2.x)/2 + 5} y={(O.y+A2.y)/2 - 5} fontSize="9" fill="#15803d" fontWeight="600">OA' = k·OA</text>

        {/* Formula panel */}
        <rect x="390" y="30" width="220" height="185" rx="10" fill="#1e3a5f" />
        <text x="500" y="55" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.75)">Scale Factor k = {k}</text>

        <rect x="402" y="64" width="196" height="28" rx="5" fill="rgba(255,255,255,0.1)"/>
        <text x="500" y="82" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">
          OA'/OA = OB'/OB = OC'/OC = {k}
        </text>

        <text x="500" y="110" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.75)">This means every side scales by k:</text>
        <rect x="402" y="116" width="196" height="28" rx="5" fill="rgba(255,255,255,0.1)"/>
        <text x="500" y="134" textAnchor="middle" fontSize="11" fill="#86efac" fontWeight="700">
          A'B'/AB = B'C'/BC = A'C'/AC = {k}
        </text>

        <text x="500" y="158" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">So the scale factor k is:</text>
        <rect x="402" y="163" width="196" height="28" rx="5" fill="#0f766e"/>
        <text x="500" y="181" textAnchor="middle" fontSize="11" fill="white" fontWeight="800">
          k = new side / original side
        </text>

        <text x="500" y="205" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.65)">k {'>'} 1 → enlargement</text>
        <text x="500" y="218" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.65)">k {'<'} 1 → reduction</text>
        <text x="500" y="231" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.65)">k = 1 → congruent!</text>

        {/* Bottom note */}
        <text x="200" y="248" textAnchor="middle" fontSize="10.5" fill="#0f766e" fontWeight="700">
          Key rule: ALL corresponding sides must have the SAME scale factor k
        </text>
      </svg>
    </div>
  );
}
