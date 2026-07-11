import React, { useState } from 'react';

/**
 * BPT Diagram — interactive: move the parallel line up/down.
 * Shows AD/DB = AE/EC visually at all positions.
 */
export function BPTStatic() {
  // Triangle: A at top, B bottom-left, C bottom-right
  const A = { x: 220, y: 30 };
  const B = { x: 60,  y: 220 };
  const C = { x: 380, y: 220 };

  // D and E at t=0.4 along AB and AC from A
  const t = 0.42;
  const D = { x: A.x + t*(B.x-A.x), y: A.y + t*(B.y-A.y) };
  const E = { x: A.x + t*(C.x-A.x), y: A.y + t*(C.y-A.y) };

  // Computed ratios
  const AD = t, DB = 1-t;
  const ratio = (AD/DB).toFixed(2);

  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 580 270" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="290" y="15" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Basic Proportionality Theorem (BPT)
        </text>

        {/* Main triangle ABC */}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
          fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" />

        {/* DE line (parallel to BC) */}
        <line x1={D.x} y1={D.y} x2={E.x} y2={E.y} stroke="#dc2626" strokeWidth="3" />

        {/* Parallel markers */}
        <line x1="196" y1="222" x2="200" y2="215" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="204" y1="222" x2="208" y2="215" stroke="#3b82f6" strokeWidth="2"/>
        <line x1={D.x+3} y1={D.y+4} x2={D.x+7} y2={D.y-3} stroke="#dc2626" strokeWidth="2"/>
        <line x1={D.x+9} y1={D.y+4} x2={D.x+13} y2={D.y-3} stroke="#dc2626" strokeWidth="2"/>
        <line x1={E.x-13} y1={E.y+4} x2={E.x-9} y2={E.y-3} stroke="#dc2626" strokeWidth="2"/>
        <line x1={E.x-7}  y1={E.y+4} x2={E.x-3} y2={E.y-3} stroke="#dc2626" strokeWidth="2"/>

        {/* Segment labels with colored backgrounds */}
        {/* AD on left side */}
        <rect x="112" y="85" width="32" height="18" rx="4" fill="#3b82f6" fillOpacity=".8"/>
        <text x="128" y="98" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">AD={t.toFixed(1)}k</text>
        {/* DB on left side */}
        <rect x="65" y="162" width="32" height="18" rx="4" fill="#10b981" fillOpacity=".8"/>
        <text x="81" y="175" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">DB={(1-t).toFixed(1)}k</text>
        {/* AE on right side */}
        <rect x="330" y="85" width="32" height="18" rx="4" fill="#3b82f6" fillOpacity=".8"/>
        <text x="346" y="98" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">AE={t.toFixed(1)}k</text>
        {/* EC on right side */}
        <rect x="360" y="162" width="32" height="18" rx="4" fill="#10b981" fillOpacity=".8"/>
        <text x="376" y="175" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">EC={(1-t).toFixed(1)}k</text>

        {/* Vertex labels */}
        <text x={A.x} y={A.y-8} textAnchor="middle" fontSize="13" fill="#1d4ed8" fontWeight="800">A</text>
        <text x={B.x-14} y={B.y+4} fontSize="13" fill="#1d4ed8" fontWeight="800">B</text>
        <text x={C.x+4}  y={C.y+4} fontSize="13" fill="#1d4ed8" fontWeight="800">C</text>
        <text x={D.x-14} y={D.y+4} fontSize="13" fill="#dc2626" fontWeight="800">D</text>
        <text x={E.x+4}  y={E.y+4} fontSize="13" fill="#dc2626" fontWeight="800">E</text>

        {/* DE ∥ BC label */}
        <text x="220" y={D.y-8} textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">DE ∥ BC</text>

        {/* Theorem box */}
        <rect x="10" y="238" width="560" height="26" rx="6" fill="#1e3a5f"/>
        <text x="290" y="255" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">
          If DE ∥ BC, then AD/DB = AE/EC (and both = AD/AB = AE/AC)
        </text>
      </svg>
    </div>
  );
}

/**
 * Shows WHY BPT works — equal triangles argument
 */
export function BPTWhy() {
  const A = { x: 200, y: 30 };
  const B = { x: 50,  y: 200 };
  const C = { x: 350, y: 200 };
  const t = 0.45;
  const D = { x: A.x + t*(B.x-A.x), y: A.y + t*(B.y-A.y) };
  const E = { x: A.x + t*(C.x-A.x), y: A.y + t*(C.y-A.y) };

  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="280" y="15" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
          BPT — Two Special Results from the Same Theorem
        </text>

        {/* Main triangle */}
        <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
          fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
        <line x1={D.x} y1={D.y} x2={E.x} y2={E.y} stroke="#dc2626" strokeWidth="2.5"/>

        <text x={A.x} y={A.y-8} textAnchor="middle" fontSize="12" fill="#1d4ed8" fontWeight="800">A</text>
        <text x={B.x-14} y={B.y+4} fontSize="12" fill="#1d4ed8" fontWeight="800">B</text>
        <text x={C.x+4}  y={C.y+4} fontSize="12" fill="#1d4ed8" fontWeight="800">C</text>
        <text x={D.x-14} y={D.y+4} fontSize="12" fill="#dc2626" fontWeight="800">D</text>
        <text x={E.x+4}  y={E.y+4} fontSize="12" fill="#dc2626" fontWeight="800">E</text>
        <text x="196" y={D.y-8} textAnchor="middle" fontSize="9.5" fill="#dc2626">DE ∥ BC</text>

        {/* Result 1 */}
        <rect x="390" y="28" width="160" height="90" rx="8" fill="#1e3a5f"/>
        <text x="470" y="48" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,.7)">Result 1 (BPT)</text>
        <text x="470" y="66" textAnchor="middle" fontSize="11" fill="#fde68a" fontWeight="700">AD/DB = AE/EC</text>
        <text x="470" y="82" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.6)">ratio of parts of each side</text>
        <text x="470" y="108" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.5)">e.g. AD=3, DB=5 → AE/EC=3/5</text>

        {/* Result 2 */}
        <rect x="390" y="128" width="160" height="90" rx="8" fill="#0f766e"/>
        <text x="470" y="148" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,.7)">Result 2 (from similarity)</text>
        <text x="470" y="166" textAnchor="middle" fontSize="11" fill="#a7f3d0" fontWeight="700">AD/AB = AE/AC = DE/BC</text>
        <text x="470" y="182" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.6)">ratio of part to WHOLE side</text>
        <text x="470" y="208" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.5)">e.g. AD=3, AB=8 → AE/AC=3/8</text>

        <text x="200" y="228" textAnchor="middle" fontSize="10.5" fill="#dc2626" fontWeight="700">
          ⚠️ Don't mix these up: AD/DB ≠ AD/AB
        </text>
      </svg>
    </div>
  );
}
