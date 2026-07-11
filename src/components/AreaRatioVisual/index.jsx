import React from 'react';

/**
 * Visually shows WHY area ratio = k² when linear ratio = k.
 * Uses a 1×1 square vs 2×2 square: ratio of sides = 2, ratio of areas = 4.
 */
export function AreaRatioSquares() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Why does Area Scale as k²? — Visual Proof
        </text>

        {/* Small square (1 unit × 1 unit) */}
        <rect x="40" y="80" width="70" height="70" fill="#3b82f6" fillOpacity=".2" stroke="#3b82f6" strokeWidth="2.5" />
        <text x="75" y="120" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700">1 × 1</text>
        <text x="75" y="136" textAnchor="middle" fontSize="10" fill="#1d4ed8">Area = 1</text>
        <text x="75" y="170" textAnchor="middle" fontSize="10" fill="#64748b">side = s</text>

        {/* Arrow */}
        <text x="135" y="122" fontSize="11" fill="#64748b">k=2</text>
        <line x1="120" y1="115" x2="155" y2="115" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr6)"/>
        <defs>
          <marker id="arr6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
          </marker>
        </defs>

        {/* Large square (2×2) made of 4 unit squares to show area = 4 */}
        {[[0,0],[1,0],[0,1],[1,1]].map(([i,j], idx) => (
          <rect key={idx} x={165 + i*70} y={45 + j*70} width="68" height="68"
            fill="#3b82f6" fillOpacity={0.1 + idx*0.05} stroke="#3b82f6" strokeWidth="1.5" />
        ))}
        <rect x="165" y="45" width="140" height="140" fill="none" stroke="#1d4ed8" strokeWidth="3" />
        <text x="235" y="118" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700">2 × 2</text>
        <text x="235" y="136" textAnchor="middle" fontSize="10" fill="#1d4ed8">Area = 4</text>
        <text x="235" y="200" textAnchor="middle" fontSize="10" fill="#64748b">side = 2s</text>

        {/* The 4 unit squares labeled */}
        <text x="200" y="82" textAnchor="middle" fontSize="9" fill="#1d4ed8">1</text>
        <text x="270" y="82" textAnchor="middle" fontSize="9" fill="#1d4ed8">1</text>
        <text x="200" y="152" textAnchor="middle" fontSize="9" fill="#1d4ed8">1</text>
        <text x="270" y="152" textAnchor="middle" fontSize="9" fill="#1d4ed8">1</text>

        {/* Annotation */}
        <rect x="330" y="40" width="240" height="160" rx="10" fill="#1e3a5f"/>
        <text x="450" y="62" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">The k² Rule Explained</text>
        <text x="450" y="82" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.75)">Side ratio k = 2s/s = 2</text>
        <text x="450" y="100" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.75)">The new square fits 4 copies</text>
        <text x="450" y="115" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.75)">of the original inside it.</text>
        <text x="450" y="133" textAnchor="middle" fontSize="10" fill="#fde68a">Area ratio = 4 = 2² = k²</text>
        <line x1="340" y1="148" x2="560" y2="148" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
        <text x="450" y="163" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.75)">k=3 → area ratio = 9 = 3²</text>
        <text x="450" y="180" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.75)">k=½ → area ratio = ¼ = (½)²</text>
        <text x="450" y="196" textAnchor="middle" fontSize="11" fill="#86efac" fontWeight="700">Always: area ratio = k²</text>

        <text x="290" y="228" textAnchor="middle" fontSize="10.5" fill="#0f766e" fontWeight="700">
          Doubling each side → 4× the area (not 2×!) because area is 2-dimensional
        </text>
      </svg>
    </div>
  );
}

/**
 * Shows two similar triangles with their areas compared.
 */
export function AreaRatioTriangles() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Area Ratio of Similar Triangles
        </text>

        {/* Small triangle: base=80, height=60, sides 3,4,5 scaled */}
        <polygon points="50,190 130,190 80,110" fill="#3b82f6" fillOpacity=".25" stroke="#3b82f6" strokeWidth="2.5"/>
        <text x="90" y="205" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">base = 6</text>
        <text x="48" y="155" textAnchor="middle" fontSize="10" fill="#1d4ed8">side = 4</text>
        <text x="90" y="108" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ ABC</text>
        {/* Height line */}
        <line x1="80" y1="110" x2="80" y2="190" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,3"/>
        <text x="65" y="155" textAnchor="middle" fontSize="9" fill="#3b82f6">h=5</text>
        {/* Area calc */}
        <text x="90" y="175" textAnchor="middle" fontSize="9" fill="#1d4ed8">Area=½×6×5=15</text>

        {/* k=2 arrow */}
        <text x="220" y="130" textAnchor="middle" fontSize="11" fill="#64748b">k = 2</text>
        <line x1="200" y1="160" x2="250" y2="160" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arr7)"/>
        <defs>
          <marker id="arr7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
          </marker>
        </defs>

        {/* Large triangle: k=2 → all sides doubled */}
        <polygon points="270,200 430,200 345,40" fill="#10b981" fillOpacity=".15" stroke="#10b981" strokeWidth="2.5" strokeDasharray="7,4"/>
        <text x="350" y="218" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">base = 12</text>
        <text x="288" y="128" textAnchor="middle" fontSize="10" fill="#15803d">side = 8</text>
        <text x="350" y="35" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">△ PQR</text>
        {/* Height line */}
        <line x1="345" y1="40" x2="345" y2="200" stroke="#10b981" strokeWidth="1" strokeDasharray="4,3"/>
        <text x="330" y="125" textAnchor="middle" fontSize="9" fill="#10b981">h=10</text>
        {/* Area calc */}
        <text x="350" y="180" textAnchor="middle" fontSize="9" fill="#15803d">Area=½×12×10=60</text>

        {/* Result */}
        <rect x="460" y="60" width="110" height="110" rx="8" fill="#1e3a5f"/>
        <text x="515" y="82" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">Result:</text>
        <text x="515" y="100" textAnchor="middle" fontSize="10" fill="#fde68a">k = 2</text>
        <text x="515" y="118" textAnchor="middle" fontSize="10" fill="#fde68a">k² = 4</text>
        <line x1="470" y1="128" x2="560" y2="128" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
        <text x="515" y="143" textAnchor="middle" fontSize="9.5" fill="#86efac">60 / 15 = 4</text>
        <text x="515" y="160" textAnchor="middle" fontSize="10" fill="#86efac" fontWeight="700">= k² ✓</text>
      </svg>
    </div>
  );
}
