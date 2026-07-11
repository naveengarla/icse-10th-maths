import React from 'react';

export function MapScaleSVG() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="310" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Scale Factor in Maps and Models
        </text>

        {/* Map panel */}
        <rect x="10" y="28" width="270" height="195" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5"/>
        <text x="145" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">MAP (small)</text>

        {/* Map grid */}
        {[60,90,120,150,180,210].map(y => (
          <line key={y} x1="20" y1={y} x2="270" y2={y} stroke="#bbf7d0" strokeWidth="0.5"/>
        ))}
        {[50,90,130,170,210,250].map(x => (
          <line key={x} x1={x} y1="55" x2={x} y2="215" stroke="#bbf7d0" strokeWidth="0.5"/>
        ))}

        {/* City dots on map */}
        <circle cx="70" cy="100" r="6" fill="#15803d"/>
        <text x="70" y="93" textAnchor="middle" fontSize="8.5" fill="#15803d" fontWeight="700">City A</text>
        <circle cx="210" cy="160" r="6" fill="#15803d"/>
        <text x="210" y="153" textAnchor="middle" fontSize="8.5" fill="#15803d" fontWeight="700">City B</text>

        {/* Distance on map */}
        <line x1="70" y1="100" x2="210" y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3"/>
        <text x="145" y="122" textAnchor="middle" fontSize="9.5" fill="#dc2626" fontWeight="700">3 cm on map</text>

        {/* Scale box */}
        <rect x="20" y="190" width="250" height="25" rx="5" fill="#15803d"/>
        <text x="145" y="206" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Scale: 1 cm = 50 km</text>

        {/* Arrow */}
        <text x="307" y="128" textAnchor="middle" fontSize="10" fill="#64748b">Scale factor</text>
        <text x="307" y="143" textAnchor="middle" fontSize="10" fill="#64748b">k=50 km/cm</text>
        <line x1="292" y1="155" x2="330" y2="155" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#armap)"/>
        <defs>
          <marker id="armap" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
          </marker>
        </defs>

        {/* Reality panel */}
        <rect x="335" y="28" width="275" height="195" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5"/>
        <text x="472" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">REALITY (large)</text>

        <circle cx="365" cy="110" r="8" fill="#1d4ed8"/>
        <text x="365" y="100" textAnchor="middle" fontSize="8.5" fill="#1d4ed8" fontWeight="700">City A</text>
        <circle cx="580" cy="170" r="8" fill="#1d4ed8"/>
        <text x="580" y="160" textAnchor="middle" fontSize="8.5" fill="#1d4ed8" fontWeight="700">City B</text>

        <line x1="365" y1="110" x2="580" y2="170" stroke="#dc2626" strokeWidth="2" strokeDasharray="8,4"/>
        <text x="480" y="128" textAnchor="middle" fontSize="9.5" fill="#dc2626" fontWeight="700">3 × 50 = 150 km</text>

        {/* Formula box */}
        <rect x="345" y="190" width="255" height="25" rx="5" fill="#1d4ed8"/>
        <text x="472" y="206" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Actual distance = map distance × k</text>

        {/* Summary at bottom */}
        <text x="310" y="235" textAnchor="middle" fontSize="10.5" fill="#0f766e" fontWeight="700">
          Map and reality are SIMILAR figures — related by scale factor k
        </text>
      </svg>
    </div>
  );
}

export function ScaleTable() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          What Scales by k, k², and k³
        </text>

        {/* Headers */}
        <rect x="10" y="28" width="560" height="30" rx="5" fill="#1e3a5f"/>
        {['Measurement','Formula','k = 2 example','k = 3 example'].map((h,i) => (
          <text key={i} x={[85,235,375,500][i]} y="48" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">{h}</text>
        ))}

        {/* Rows */}
        {[
          { name:'Length / side / perimeter', mul:'× k', k2:'× 2', k3:'× 3', fill:'#eff6ff', tc:'#1d4ed8' },
          { name:'Area (any 2D region)',       mul:'× k²', k2:'× 4', k3:'× 9', fill:'#f0fdf4', tc:'#15803d' },
          { name:'Volume (any 3D solid)',      mul:'× k³', k2:'× 8', k3:'× 27', fill:'#faf5ff', tc:'#7e22ce' },
          { name:'Angle',                      mul:'× 1 (unchanged)', k2:'same', k3:'same', fill:'#fff7ed', tc:'#c2410c' },
        ].map(({name,mul,k2,k3,fill,tc},i) => (
          <g key={i}>
            <rect x="10" y={60+i*34} width="560" height="33" rx="0" fill={fill}/>
            <text x="85"  y={81+i*34} textAnchor="middle" fontSize="9.5" fill={tc} fontWeight="600">{name}</text>
            <text x="235" y={81+i*34} textAnchor="middle" fontSize="11"  fill={tc} fontWeight="800">{mul}</text>
            <text x="375" y={81+i*34} textAnchor="middle" fontSize="10"  fill={tc}>{k2}</text>
            <text x="500" y={81+i*34} textAnchor="middle" fontSize="10"  fill={tc}>{k3}</text>
            <line x1="10" y1={93+i*34} x2="570" y2={93+i*34} stroke="#e2e8f0" strokeWidth="1"/>
          </g>
        ))}

        <text x="290" y="188" textAnchor="middle" fontSize="10.5" fill="#dc2626" fontWeight="700">
          ⚠️ Most common exam mistake: using k instead of k² for area, or k² instead of k³ for volume
        </text>
      </svg>
    </div>
  );
}
