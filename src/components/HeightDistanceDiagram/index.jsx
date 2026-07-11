import React from 'react';

/**
 * SVG diagrams for Heights & Distances.
 * type: 'elevation' | 'depression' | 'both'
 */
export default function HeightDistanceDiagram({ type = 'both' }) {
  return (
    <div className="svg-wrap">
      <svg viewBox="0 0 660 310" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}>

        {/* ── ANGLE OF ELEVATION (left panel) ── */}
        <text x="165" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
          Angle of Elevation
        </text>

        {/* Ground line */}
        <line x1="20" y1="240" x2="310" y2="240" stroke="#475569" strokeWidth="2"/>

        {/* Tower */}
        <rect x="240" y="80" width="30" height="160" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
        <text x="255" y="72" textAnchor="middle" fontSize="9" fill="#475569">Tower</text>

        {/* Observer */}
        <circle cx="55" cy="232" r="8" fill="#3b82f6"/>
        <text x="55" y="262" textAnchor="middle" fontSize="9" fill="#3b82f6">Observer</text>

        {/* Line of sight */}
        <line x1="55" y1="232" x2="248" y2="84" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3"/>
        <text x="130" y="138" fontSize="10" fill="#f59e0b" fontWeight="600"
          transform="rotate(-37,130,138)">Line of sight</text>

        {/* Horizontal reference */}
        <line x1="55" y1="232" x2="200" y2="232" stroke="#64748b" strokeWidth="1" strokeDasharray="4,3"/>

        {/* Angle arc */}
        <path d="M 110,232 A 55,55 0 0,1 84,200" fill="none" stroke="#dc2626" strokeWidth="2"/>
        <text x="125" y="225" fontSize="13" fill="#dc2626" fontWeight="800">θ</text>
        <text x="55"  y="215" fontSize="8"  fill="#64748b">Horizontal</text>

        {/* Height label */}
        <line x1="278" y1="84" x2="278" y2="240" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="295" y="165" fontSize="10" fill="#10b981" fontWeight="700" transform="rotate(-90,295,165)">h (height)</text>

        {/* Distance label */}
        <text x="150" y="258" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">d (distance)</text>

        {/* Formula box */}
        <rect x="20" y="270" width="290" height="36" rx="6" fill="#1e3a5f"/>
        <text x="165" y="284" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">Key Formula:</text>
        <text x="165" y="299" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">tan θ = h / d</text>

        {/* ── ANGLE OF DEPRESSION (right panel) ── */}
        <text x="495" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
          Angle of Depression
        </text>

        {/* Cliff / building */}
        <rect x="340" y="55" width="30" height="185" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
        <text x="355" y="47" textAnchor="middle" fontSize="9" fill="#475569">Building</text>

        {/* Ground line */}
        <line x1="340" y1="240" x2="640" y2="240" stroke="#475569" strokeWidth="2"/>

        {/* Observer at top */}
        <circle cx="362" cy="63" r="8" fill="#7e22ce"/>
        <text x="340" y="40" textAnchor="middle" fontSize="9" fill="#7e22ce">Observer</text>

        {/* Horizontal reference from top */}
        <line x1="362" y1="63" x2="620" y2="63" stroke="#64748b" strokeWidth="1" strokeDasharray="4,3"/>
        <text x="550" y="58" fontSize="8" fill="#64748b">Horizontal</text>

        {/* Line of sight — down */}
        <line x1="362" y1="63" x2="590" y2="236" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3"/>
        <text x="505" y="135" fontSize="10" fill="#f59e0b" fontWeight="600"
          transform="rotate(37,505,135)">Line of sight</text>

        {/* Angle arc at top */}
        <path d="M 430,63 A 68,68 0 0,0 402,90" fill="none" stroke="#dc2626" strokeWidth="2"/>
        <text x="445" y="82" fontSize="13" fill="#dc2626" fontWeight="800">θ</text>

        {/* Object on ground */}
        <circle cx="590" cy="240" r="7" fill="#10b981"/>
        <text x="590" y="260" textAnchor="middle" fontSize="9" fill="#10b981">Object</text>

        {/* Height label */}
        <line x1="338" y1="63" x2="338" y2="240" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="325" y="155" fontSize="10" fill="#10b981" fontWeight="700" transform="rotate(-90,325,155)">h (height)</text>

        {/* Distance label */}
        <text x="480" y="258" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">d (distance)</text>

        {/* Formula box */}
        <rect x="350" y="270" width="290" height="36" rx="6" fill="#7e22ce"/>
        <text x="495" y="284" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.7)">Key Formula (alt. angle = θ):</text>
        <text x="495" y="299" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">tan θ = h / d</text>
      </svg>
    </div>
  );
}
