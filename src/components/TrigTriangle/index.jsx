import React from 'react';

/**
 * SVG right-angled triangle showing trig ratios and identity proof.
 * mode: 'ratios' | 'identity'
 */
export default function TrigTriangle({ mode = 'ratios', angle = 'A' }) {
  if (mode === 'identity') {
    // Unit circle style: shows sin²+cos²=1 on unit hypotenuse
    return (
      <div className="svg-wrap">
        <svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>
          <text x="320" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
            Why sin²A + cos²A = 1 — Visual Proof
          </text>

          {/* Triangle: A(80,180), B(80,40), C(340,180) */}
          <polygon points="80,180 80,40 340,180" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>

          {/* Right angle box */}
          <rect x="80" y="162" width="16" height="16" fill="none" stroke="#64748b" strokeWidth="1.5"/>

          {/* Side labels */}
          {/* Hypotenuse AB */}
          <text x="195" y="100" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700"
            transform="rotate(-40,195,100)">Hypotenuse (h)</text>

          {/* Opposite BC — vertical */}
          <text x="58" y="115" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="700"
            transform="rotate(-90,58,115)">Opposite (p)</text>

          {/* Adjacent AC — horizontal */}
          <text x="210" y="198" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="700">Adjacent (b)</text>

          {/* Angle A label */}
          {/* Arc for angle at C */}
          <path d="M 305,180 A 35,35 0 0,0 283,152" fill="none" stroke="#f59e0b" strokeWidth="2"/>
          <text x="310" y="165" fontSize="12" fill="#f59e0b" fontWeight="800">A</text>

          {/* Vertex labels */}
          <text x="68"  y="38"  fontSize="11" fill="#475569" fontWeight="700">B</text>
          <text x="68"  y="195" fontSize="11" fill="#475569" fontWeight="700">C</text>
          <text x="345" y="195" fontSize="11" fill="#475569" fontWeight="700">A</text>

          {/* Ratio definitions box */}
          <rect x="390" y="28" width="240" height="168" rx="8" fill="#1e3a5f"/>
          <text x="510" y="50"  textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">Definitions</text>
          <text x="510" y="68"  textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">sin A = p / h</text>
          <text x="510" y="88"  textAnchor="middle" fontSize="11" fill="#34d399" fontWeight="700">cos A = b / h</text>
          <text x="510" y="108" textAnchor="middle" fontSize="11" fill="#fbbf24" fontWeight="700">tan A = p / b</text>
          <line x1="400" y1="118" x2="620" y2="118" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <text x="510" y="133" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">Pythagoras: p² + b² = h²</text>
          <text x="510" y="150" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">÷ h² on both sides:</text>
          <text x="510" y="168" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">sin²A + cos²A = 1</text>
          <text x="510" y="185" textAnchor="middle" fontSize="9"  fill="rgba(255,255,255,0.6)">(p/h)² + (b/h)² = h²/h²</text>
        </svg>
      </div>
    );
  }

  // mode === 'ratios' — full ratio table
  return (
    <div className="svg-wrap">
      <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>
        <text x="320" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
          Six Trigonometric Ratios — Right Triangle
        </text>

        {/* Triangle */}
        <polygon points="80,175 80,40 310,175" fill="#f0fdf4" stroke="#10b981" strokeWidth="2"/>
        <rect x="80" y="158" width="15" height="15" fill="none" stroke="#64748b" strokeWidth="1.5"/>

        {/* Labels */}
        <text x="185" y="97" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="700"
          transform="rotate(-38,185,97)">h (hypotenuse)</text>
        <text x="58"  y="112" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="700"
          transform="rotate(-90,58,112)">p (opposite)</text>
        <text x="193" y="192" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="700">b (adjacent)</text>

        <path d="M 278,175 A 32,32 0 0,0 260,150" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <text x="283" y="162" fontSize="13" fill="#f59e0b" fontWeight="800">A</text>

        <text x="68"  y="36"  fontSize="11" fill="#475569">B</text>
        <text x="68"  y="190" fontSize="11" fill="#475569">C</text>
        <text x="315" y="190" fontSize="11" fill="#475569">A</text>

        {/* Ratio table */}
        {[
          { name: 'sin A', val: 'p / h', inv: 'cosec A = h / p', y: 45,  c1:'#f87171', c2:'#fca5a5' },
          { name: 'cos A', val: 'b / h', inv: 'sec A = h / b',   y: 75,  c1:'#34d399', c2:'#6ee7b7' },
          { name: 'tan A', val: 'p / b', inv: 'cot A = b / p',   y: 105, c1:'#fbbf24', c2:'#fde68a' },
        ].map(({ name, val, inv, y, c1, c2 }) => (
          <g key={name}>
            <rect x="345" y={y}   width="90"  height="24" rx="4" fill={c1}/>
            <text x="390" y={y+16} textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{name} = {val}</text>
            <rect x="445" y={y}   width="185" height="24" rx="4" fill={c2} opacity="0.6"/>
            <text x="537" y={y+16} textAnchor="middle" fontSize="10" fontWeight="600" fill="#1e293b">{inv}</text>
          </g>
        ))}

        <text x="345" y="145" fontSize="10" fill="#64748b">Reciprocal pairs: sin↔cosec, cos↔sec, tan↔cot</text>
        <text x="345" y="162" fontSize="10" fill="#64748b">tan A = sin A / cos A</text>
        <text x="345" y="178" fontSize="10" fill="#64748b">cot A = cos A / sin A</text>
      </svg>
    </div>
  );
}
