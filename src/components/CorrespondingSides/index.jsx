import React from 'react';

/**
 * The hardest skill: identifying which sides correspond
 * when triangles are in different orientations.
 * Shows a triangle and its rotated/flipped version with color-coded matching.
 */
export function OrientationProblem() {
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: 'system-ui' }}>
        <text x="310" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Same Triangles — Different Orientations (this is what confuses students!)
        </text>

        {/* Original triangle */}
        <polygon points="40,200 180,200 80,90" fill="#3b82f6" fillOpacity=".15" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Angle marks */}
        <circle cx="40" cy="200" r="15" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="13 100"/>
        <circle cx="80" cy="90"  r="15" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="13 100"/>
        <circle cx="180" cy="200" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="14 100"/>
        <text x="22" y="218" fontSize="12" fill="#dc2626" fontWeight="800">α</text>
        <text x="75" y="82" fontSize="12" fill="#10b981" fontWeight="800">β</text>
        <text x="183" y="218" fontSize="12" fill="#f59e0b" fontWeight="800">γ</text>
        <text x="30" y="215" fontSize="10" fill="#1d4ed8" fontWeight="700">A</text>
        <text x="183" y="215" fontSize="10" fill="#1d4ed8" fontWeight="700">B</text>
        <text x="78" y="82" fontSize="10" fill="#1d4ed8" fontWeight="700">C</text>
        <text x="110" y="225" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ ABC</text>

        {/* Arrow */}
        <text x="215" y="155" fontSize="22" fill="#64748b">→</text>
        <text x="200" y="175" fontSize="9" fill="#64748b">rotated &</text>
        <text x="200" y="187" fontSize="9" fill="#64748b">flipped</text>

        {/* Rotated/flipped triangle (same triangle, different orientation) */}
        {/* R at top-right, P at bottom-left, Q at bottom-right */}
        <polygon points="290,200 440,200 400,90" fill="#10b981" fillOpacity=".12" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="7,4"/>
        {/* Match the SAME angles to same colors */}
        <circle cx="290" cy="200" r="15" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="13 100"/>
        <circle cx="400" cy="90"  r="15" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="13 100"/>
        <circle cx="440" cy="200" r="15" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="14 100"/>
        <text x="273" y="218" fontSize="12" fill="#f59e0b" fontWeight="800">γ</text>
        <text x="397" y="82" fontSize="12" fill="#dc2626" fontWeight="800">α</text>
        <text x="443" y="218" fontSize="12" fill="#10b981" fontWeight="800">β</text>
        <text x="280" y="215" fontSize="10" fill="#15803d" fontWeight="700">Q</text>
        <text x="443" y="215" fontSize="10" fill="#15803d" fontWeight="700">R</text>
        <text x="398" y="82" fontSize="10" fill="#15803d" fontWeight="700">P</text>
        <text x="365" y="225" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">△ PQR (rotated)</text>

        {/* Matching table */}
        <rect x="470" y="35" width="140" height="185" rx="8" fill="#1e3a5f"/>
        <text x="540" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Matching by angle colour:</text>
        <rect x="480" y="62" width="120" height="22" rx="4" fill="#dc2626" fillOpacity=".3"/>
        <text x="540" y="77" textAnchor="middle" fontSize="10" fill="white">∠A = ∠P (red arc α)</text>
        <rect x="480" y="89" width="120" height="22" rx="4" fill="#10b981" fillOpacity=".3"/>
        <text x="540" y="104" textAnchor="middle" fontSize="10" fill="white">∠C = ∠R (green arc β)</text>
        <rect x="480" y="116" width="120" height="22" rx="4" fill="#f59e0b" fillOpacity=".3"/>
        <text x="540" y="131" textAnchor="middle" fontSize="10" fill="white">∠B = ∠Q (orange arc γ)</text>
        <line x1="480" y1="145" x2="600" y2="145" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
        <text x="540" y="162" textAnchor="middle" fontSize="9.5" fill="#fde68a" fontWeight="700">So: △ABC ~ △PRQ</text>
        <text x="540" y="178" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.65)">NOT △ABC ~ △PQR !</text>
        <text x="540" y="195" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.65)">Order of letters</text>
        <text x="540" y="209" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.65)">must match angles</text>

        <text x="310" y="252" textAnchor="middle" fontSize="10.5" fill="#dc2626" fontWeight="700">
          💡 Colour the angle arcs first → then match letters by colour
        </text>
      </svg>
    </div>
  );
}

/**
 * Shows how to extract similar triangles from a combined figure
 * (the classic "triangle inside a triangle" problem type)
 */
export function TriangleInsideTriangle() {
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: 'system-ui' }}>
        <text x="310" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Classic ICSE Figure: Line Parallel to Base Creates Similar Triangle
        </text>

        {/* Big triangle ABC */}
        <polygon points="80,210 320,210 200,60" fill="#3b82f6" fillOpacity=".08" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
        <text x="68" y="225" fontSize="11" fill="#1d4ed8" fontWeight="700">A</text>
        <text x="322" y="225" fontSize="11" fill="#1d4ed8" fontWeight="700">B</text>
        <text x="197" y="52" fontSize="11" fill="#1d4ed8" fontWeight="700">C</text>

        {/* Line DE parallel to AB */}
        <line x1="142" y1="148" x2="261" y2="148" stroke="#dc2626" strokeWidth="2.5"/>
        <text x="135" y="145" fontSize="11" fill="#dc2626" fontWeight="700">D</text>
        <text x="264" y="145" fontSize="11" fill="#dc2626" fontWeight="700">E</text>
        {/* Parallel indicator */}
        <text x="198" y="170" textAnchor="middle" fontSize="9.5" fill="#dc2626">DE ∥ AB</text>

        {/* Small triangle CDE highlighted */}
        <polygon points="142,148 261,148 200,60" fill="#dc2626" fillOpacity=".15" stroke="#dc2626" strokeWidth="2" strokeLinejoin="round"/>

        {/* Angle marks */}
        <circle cx="80" cy="210" r="16" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="14 100"/>
        <circle cx="142" cy="148" r="16" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="14 100"/>
        <text x="62" y="228" fontSize="11" fill="#7e22ce" fontWeight="800">α</text>
        <text x="122" y="166" fontSize="11" fill="#7e22ce" fontWeight="800">α</text>

        <circle cx="320" cy="210" r="16" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="14 100"/>
        <circle cx="261" cy="148" r="16" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="14 100"/>
        <text x="322" y="228" fontSize="11" fill="#10b981" fontWeight="800">β</text>
        <text x="264" y="166" fontSize="11" fill="#10b981" fontWeight="800">β</text>

        {/* Explanation on right */}
        <rect x="340" y="35" width="270" height="180" rx="8" fill="#1e3a5f"/>
        <text x="475" y="56" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">Why are they similar?</text>

        <text x="350" y="74" fontSize="9.5" fill="rgba(255,255,255,.75)">DE ∥ AB (given)</text>
        <text x="350" y="90" fontSize="9.5" fill="#fde68a">→ ∠CDE = ∠CAB (corresponding angles)</text>
        <text x="350" y="106" fontSize="9.5" fill="#fde68a">→ ∠CED = ∠CBA (corresponding angles)</text>
        <text x="350" y="122" fontSize="9.5" fill="rgba(255,255,255,.75)">→ ∠DCE = ∠ACB (common angle)</text>

        <rect x="350" y="130" width="248" height="25" rx="4" fill="rgba(255,255,255,.1)"/>
        <text x="474" y="146" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">∴ △CDE ~ △CAB by AA</text>

        <text x="350" y="168" fontSize="9.5" fill="rgba(255,255,255,.65)">Corresponding sides:</text>
        <text x="350" y="183" fontSize="9.5" fill="#86efac">CD/CA = DE/AB = CE/CB</text>
        <text x="350" y="198" fontSize="9" fill="rgba(255,255,255,.5)">(NOT CD/AC — order matters!)</text>

        <text x="310" y="232" textAnchor="middle" fontSize="10.5" fill="#0f766e" fontWeight="700">
          Parallel lines → corresponding angles equal → AA similarity
        </text>
      </svg>
    </div>
  );
}
