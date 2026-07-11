import React from 'react';

/** Clearly shows what "included angle" means */
export function IncludedAngleDiagram() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="320" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          "Included Angle" — What It Means (This is the key to SAS)
        </text>

        {/* LEFT: correct — angle IS included */}
        <rect x="8" y="28" width="290" height="185" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5"/>
        <text x="153" y="46" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#15803d">✅ CORRECT — Angle IS Included</text>

        <polygon points="40,190 220,190 90,90" fill="#bbf7d0" fillOpacity=".5" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Highlight the two sides at vertex A */}
        <line x1="40" y1="190" x2="90" y2="90"  stroke="#3b82f6" strokeWidth="4" opacity=".8"/>
        <line x1="40" y1="190" x2="220" y2="190" stroke="#f59e0b" strokeWidth="4" opacity=".8"/>
        {/* Angle at A */}
        <circle cx="40" cy="190" r="22" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="18 100"/>
        <text x="22" y="208" fontSize="13" fill="#dc2626" fontWeight="800">θ</text>

        <text x="40"  y="208" fontSize="10" fill="#3b82f6" fontWeight="700">A</text>
        <text x="222" y="200" fontSize="10" fill="#10b981" fontWeight="700">B</text>
        <text x="88"  y="82"  fontSize="10" fill="#10b981" fontWeight="700">C</text>

        {/* Labels */}
        <rect x="48" y="125" width="58" height="18" rx="4" fill="#3b82f6"/>
        <text x="77" y="138" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Side AC</text>
        <rect x="118" y="195" width="58" height="18" rx="4" fill="#f59e0b"/>
        <text x="147" y="208" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Side AB</text>

        <text x="153" y="165" textAnchor="middle" fontSize="9.5" fill="#15803d">Angle θ at vertex A is</text>
        <text x="153" y="180" textAnchor="middle" fontSize="9.5" fill="#15803d" fontWeight="700">BETWEEN sides AC and AB</text>

        {/* RIGHT: wrong — angle is NOT included */}
        <rect x="342" y="28" width="290" height="185" rx="8" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5"/>
        <text x="487" y="46" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#dc2626">❌ WRONG — Angle NOT Included</text>

        <polygon points="374,190 554,190 424,90" fill="#fecdd3" fillOpacity=".4" stroke="#dc2626" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* Sides AC and BC — the angle at C is NOT between these sides for SAS test at B */}
        <line x1="424" y1="90"  x2="374" y2="190" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3"/>
        <line x1="424" y1="90"  x2="554" y2="190" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3"/>
        {/* Angle at B being incorrectly used */}
        <circle cx="374" cy="190" r="22" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="18 100"/>
        <text x="356" y="208" fontSize="13" fill="#dc2626" fontWeight="800">θ</text>

        <text x="374" y="208" fontSize="10" fill="#dc2626" fontWeight="700">B</text>
        <text x="556" y="200" fontSize="10" fill="#94a3b8" fontWeight="700">C</text>
        <text x="422" y="82"  fontSize="10" fill="#94a3b8" fontWeight="700">A</text>

        {/* Labels showing the problem */}
        <rect x="380" y="125" width="60" height="18" rx="4" fill="#94a3b8"/>
        <text x="410" y="138" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Side BA</text>
        <rect x="458" y="125" width="60" height="18" rx="4" fill="#94a3b8"/>
        <text x="488" y="138" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">Side BC</text>

        <text x="487" y="162" textAnchor="middle" fontSize="9" fill="#dc2626">Angle at B is between BA and BC.</text>
        <text x="487" y="177" textAnchor="middle" fontSize="9" fill="#dc2626">If you're testing sides AB and AC,</text>
        <text x="487" y="192" textAnchor="middle" fontSize="9.5" fill="#dc2626" fontWeight="700">angle B is NOT included ← WRONG</text>

        <text x="320" y="218" textAnchor="middle" fontSize="10.5" fill="#dc2626" fontWeight="700">
          Rule: The equal angle must sit AT THE VERTEX between the two proportional sides.
        </text>
      </svg>
    </div>
  );
}

/** Decision tree SVG: given what info → which condition? */
export function DecisionTree() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="320" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Which Condition to Use? — Decision Tree
        </text>

        {/* Start */}
        <rect x="220" y="28" width="200" height="32" rx="8" fill="#1e3a5f"/>
        <text x="320" y="48" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">What info do I have?</text>

        {/* Arrow down */}
        <line x1="320" y1="60" x2="320" y2="80" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <defs>
          <marker id="dtarr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/>
          </marker>
        </defs>

        {/* Question 1 */}
        <rect x="180" y="80" width="280" height="32" rx="6" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1.5"/>
        <text x="320" y="100" textAnchor="middle" fontSize="10.5" fill="#92400e" fontWeight="700">Do I know some angles are equal?</text>

        {/* YES branch left */}
        <line x1="230" y1="112" x2="130" y2="140" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <text x="163" y="133" fontSize="9.5" fill="#10b981" fontWeight="700">YES</text>

        {/* YES box */}
        <rect x="30" y="140" width="200" height="44" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5"/>
        <text x="130" y="158" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">Are 2 pairs of angles equal?</text>
        <text x="130" y="174" textAnchor="middle" fontSize="9.5" fill="#15803d">(or can I prove 2 pairs?)</text>

        {/* YES → AA */}
        <line x1="130" y1="184" x2="130" y2="210" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <rect x="60" y="210" width="140" height="32" rx="6" fill="#10b981"/>
        <text x="130" y="230" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">Use AA ✓</text>

        {/* NO branch right — check sides */}
        <line x1="410" y1="112" x2="510" y2="140" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <text x="468" y="133" fontSize="9.5" fill="#dc2626" fontWeight="700">NO</text>

        <rect x="410" y="140" width="220" height="44" rx="6" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1.5"/>
        <text x="520" y="158" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">Do I know all 3 pairs of sides?</text>
        <text x="520" y="174" textAnchor="middle" fontSize="9.5" fill="#dc2626">(enough to compute ratios)</text>

        {/* YES → SSS */}
        <line x1="520" y1="184" x2="520" y2="210" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <rect x="450" y="210" width="140" height="32" rx="6" fill="#7e22ce"/>
        <text x="520" y="230" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">Use SSS ✓</text>

        {/* Middle branch — 1 angle + some sides */}
        <line x1="320" y1="112" x2="320" y2="140" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <text x="335" y="133" fontSize="9.5" fill="#f59e0b" fontWeight="700">PARTIAL</text>

        <rect x="210" y="140" width="220" height="44" rx="6" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5"/>
        <text x="320" y="158" textAnchor="middle" fontSize="10" fill="#c2410c" fontWeight="700">1 angle equal + 2 sides known?</text>
        <text x="320" y="174" textAnchor="middle" fontSize="9.5" fill="#c2410c">Are the sides AROUND that angle?</text>

        {/* YES → SAS */}
        <line x1="320" y1="184" x2="320" y2="210" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#dtarr)"/>
        <rect x="250" y="210" width="140" height="32" rx="6" fill="#f59e0b"/>
        <text x="320" y="230" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">Use SAS ✓</text>

        {/* Bottom note */}
        <text x="320" y="265" textAnchor="middle" fontSize="10" fill="#64748b">
          In ICSE: 80% of questions use AA. Always look for 2 equal angles first.
        </text>
        <text x="320" y="282" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="700">
          If no condition is fully met → the triangles are NOT similar.
        </text>
      </svg>
    </div>
  );
}
