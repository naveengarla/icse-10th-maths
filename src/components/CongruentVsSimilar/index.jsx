import React from 'react';

export default function CongruentVsSimilar() {
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>

        {/* ── LEFT PANEL: CONGRUENT ── */}
        <rect x="10" y="10" width="300" height="260" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <text x="160" y="35" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">CONGRUENT  ≅</text>
        <text x="160" y="52" textAnchor="middle" fontSize="10" fill="#475569">Same shape · Same size</text>

        {/* Triangle 1 (left) */}
        <polygon points="40,180 130,180 75,100" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2.5" />
        {/* Single tick marks on all sides (equal lengths) */}
        <line x1="82" y1="139" x2="90" y2="145" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="86" y1="134" x2="94" y2="140" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="58" y1="180" x2="62" y2="172" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="110" y1="180" x2="106" y2="172" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="100" y1="143" x2="109" y2="137" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="108" y1="148" x2="117" y2="142" stroke="#1d4ed8" strokeWidth="2"/>
        {/* Labels */}
        <text x="85" y="195" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ ABC</text>
        <text x="40" y="178" fontSize="10" fill="#1d4ed8">A</text>
        <text x="132" y="178" fontSize="10" fill="#1d4ed8">B</text>
        <text x="72" y="97" fontSize="10" fill="#1d4ed8">C</text>

        {/* Triangle 2 (right — identical) */}
        <polygon points="165,180 255,180 200,100" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2.5" />
        <line x1="207" y1="139" x2="215" y2="145" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="211" y1="134" x2="219" y2="140" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="183" y1="180" x2="187" y2="172" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="235" y1="180" x2="231" y2="172" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="225" y1="143" x2="234" y2="137" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="233" y1="148" x2="242" y2="142" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="210" y="195" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ PQR</text>
        <text x="160" y="178" fontSize="10" fill="#1d4ed8">P</text>
        <text x="257" y="178" fontSize="10" fill="#1d4ed8">Q</text>
        <text x="197" y="97" fontSize="10" fill="#1d4ed8">R</text>

        {/* Congruent insight */}
        <rect x="20" y="205" width="280" height="55" rx="7" fill="white" stroke="#bfdbfe" strokeWidth="1"/>
        <text x="160" y="222" textAnchor="middle" fontSize="10" fill="#1e40af">✓ All angles equal</text>
        <text x="160" y="237" textAnchor="middle" fontSize="10" fill="#1e40af">✓ All sides equal in length</text>
        <text x="160" y="252" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="700">Pick up △ABC → fits exactly on △PQR</text>

        {/* ── RIGHT PANEL: SIMILAR ── */}
        <rect x="350" y="10" width="300" height="260" rx="10" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
        <text x="500" y="35" textAnchor="middle" fontSize="13" fontWeight="800" fill="#15803d">SIMILAR  ~</text>
        <text x="500" y="52" textAnchor="middle" fontSize="10" fill="#475569">Same shape · DIFFERENT size</text>

        {/* Small triangle */}
        <polygon points="360,190 420,190 383,130" fill="#bbf7d0" stroke="#15803d" strokeWidth="2.5" />
        <text x="390" y="205" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="700">△ ABC (small)</text>

        {/* Large triangle (1.6× scale) */}
        <polygon points="440,210 556,210 497,100" fill="#bbf7d0" stroke="#15803d" strokeWidth="2.5" strokeDasharray="6,3" />
        <text x="498" y="225" textAnchor="middle" fontSize="9" fill="#15803d" fontWeight="700">△ PQR (large)</text>

        {/* Angle marks — same angles highlighted */}
        <path d="M 370,190 A 12,12 0 0,1 366,179" fill="none" stroke="#dc2626" strokeWidth="2"/>
        <path d="M 450,210 A 19,19 0 0,1 446,192" fill="none" stroke="#dc2626" strokeWidth="2"/>
        <text x="363" y="195" fontSize="8" fill="#dc2626" fontWeight="700">α</text>
        <text x="442" y="207" fontSize="8" fill="#dc2626" fontWeight="700">α</text>

        <path d="M 412,190 A 12,12 0 0,0 416,179" fill="none" stroke="#7e22ce" strokeWidth="2"/>
        <path d="M 548,210 A 19,19 0 0,0 552,192" fill="none" stroke="#7e22ce" strokeWidth="2"/>
        <text x="413" y="187" fontSize="8" fill="#7e22ce" fontWeight="700">β</text>
        <text x="549" y="206" fontSize="8" fill="#7e22ce" fontWeight="700">β</text>

        {/* Similar insight */}
        <rect x="360" y="235" width="280" height="25" rx="7" fill="white" stroke="#bbf7d0" strokeWidth="1"/>
        <text x="500" y="251" textAnchor="middle" fontSize="9.5" fill="#15803d" fontWeight="700">
          ✓ Angles equal  ✓ Sides PROPORTIONAL (not equal)
        </text>

        {/* KEY DIFFERENCE box at bottom */}
        <rect x="10" y="272" width="640" height="2" fill="#e2e8f0"/>
        <text x="330" y="265" textAnchor="middle" fontSize="10" fill="#64748b">
          Key difference: Congruent → sides equal | Similar → sides in same RATIO
        </text>
      </svg>
    </div>
  );
}
