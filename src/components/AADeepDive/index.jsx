import React from 'react';

/** Shows: if 2 angles are 50° and 70°, third MUST be 60°. No choice. */
export function ThirdAngleForced() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="310" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          Why 2 Equal Angles Are Enough — The Third Is Automatic
        </text>

        {/* Triangle 1 with 50°, 70° → forced 60° */}
        <polygon points="60,175 220,175 120,60" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
        <text x="42"  y="190" fontSize="12" fill="#dc2626" fontWeight="800">50°</text>
        <text x="222" y="190" fontSize="12" fill="#7e22ce" fontWeight="800">70°</text>
        <text x="108" y="52" fontSize="12" fill="#10b981" fontWeight="800">?°</text>
        <circle cx="60"  cy="175" r="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="15 100"/>
        <circle cx="220" cy="175" r="18" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="16 100"/>
        <text x="140" y="200" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ ABC</text>

        {/* Arrow and calculation */}
        <text x="250" y="100" fontSize="28" fill="#64748b">→</text>
        <rect x="278" y="60" width="160" height="80" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5"/>
        <text x="358" y="82"  textAnchor="middle" fontSize="10" fill="#15803d">Angles in △ = 180°</text>
        <text x="358" y="100" textAnchor="middle" fontSize="10" fill="#15803d">50° + 70° + ? = 180°</text>
        <text x="358" y="118" textAnchor="middle" fontSize="10" fill="#15803d">? = 180° − 120°</text>
        <text x="358" y="136" textAnchor="middle" fontSize="12" fill="#15803d" fontWeight="800">? = 60° ← forced!</text>

        {/* Triangle 2 — different size, same angles */}
        <polygon points="455,175 580,175 510,80" fill="#f0fdf4" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="7,4"/>
        <text x="438" y="190" fontSize="12" fill="#dc2626" fontWeight="800">50°</text>
        <text x="582" y="190" fontSize="12" fill="#7e22ce" fontWeight="800">70°</text>
        <text x="498" y="73"  fontSize="12" fill="#10b981" fontWeight="800">60°</text>
        <circle cx="455" cy="175" r="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="15 100"/>
        <circle cx="580" cy="175" r="18" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="16 100"/>
        <circle cx="510" cy="80"  r="16" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="15 100"/>
        <text x="517" y="200" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">△ PQR (different size)</text>

        <text x="310" y="193" textAnchor="middle" fontSize="10.5" fill="#0f766e" fontWeight="700">
          Both triangles have 50°, 70°, 60° → they MUST be similar! Only 2 angles needed to confirm.
        </text>
      </svg>
    </div>
  );
}

/** Shows the 3 sources of equal angles in geometry figures */
export function AngleSources() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 660 220" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="330" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">
          3 Ways Equal Angles Appear in Geometry Figures
        </text>

        {/* ── SOURCE 1: Common (shared) angle ── */}
        <rect x="8" y="28" width="200" height="185" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5"/>
        <text x="108" y="46" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1d4ed8">Source 1: Shared Angle</text>
        {/* Big triangle */}
        <polygon points="28,190 188,190 108,80" fill="#bfdbfe" fillOpacity=".4" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round"/>
        {/* Small triangle sharing top vertex */}
        <polygon points="78,145 138,145 108,80" fill="#3b82f6" fillOpacity=".3" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round" strokeDasharray="5,3"/>
        {/* Common angle arc at top */}
        <circle cx="108" cy="80" r="18" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="16 100"/>
        <text x="108" y="72" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="800">A</text>
        <text x="18"  y="205" fontSize="9"  fill="#1d4ed8">B</text>
        <text x="190" y="205" fontSize="9"  fill="#1d4ed8">C</text>
        <text x="68"  y="160" fontSize="9"  fill="#1d4ed8">D</text>
        <text x="140" y="160" fontSize="9"  fill="#1d4ed8">E</text>
        <text x="108" y="210" textAnchor="middle" fontSize="9.5" fill="#1d4ed8" fontWeight="700">∠A is COMMON to both △s</text>

        {/* ── SOURCE 2: Parallel lines ── */}
        <rect x="230" y="28" width="200" height="185" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5"/>
        <text x="330" y="46" textAnchor="middle" fontSize="10" fontWeight="800" fill="#15803d">Source 2: Parallel Lines</text>
        {/* Big triangle */}
        <polygon points="250,190 410,190 330,80" fill="#bbf7d0" fillOpacity=".4" stroke="#10b981" strokeWidth="2" strokeLinejoin="round"/>
        {/* Parallel line DE */}
        <line x1="290" y1="145" x2="370" y2="145" stroke="#dc2626" strokeWidth="2.5"/>
        {/* Parallel markers */}
        <text x="318" y="138" fontSize="9" fill="#dc2626">DE ∥ BC</text>
        {/* Angle marks showing corresponding angles */}
        <circle cx="250" cy="190" r="18" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="15 100"/>
        <circle cx="290" cy="145" r="16" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="13 100"/>
        <text x="234" y="207" fontSize="10" fill="#7e22ce" fontWeight="800">β</text>
        <text x="273" y="162" fontSize="10" fill="#7e22ce" fontWeight="800">β</text>
        <text x="330" y="210" textAnchor="middle" fontSize="9.5" fill="#15803d" fontWeight="700">∠B = ∠D (corresponding angles)</text>

        {/* ── SOURCE 3: Vertically opposite ── */}
        <rect x="452" y="28" width="200" height="185" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5"/>
        <text x="552" y="46" textAnchor="middle" fontSize="10" fontWeight="800" fill="#c2410c">Source 3: Vertically Opposite</text>
        {/* Two crossing triangles */}
        <line x1="472" y1="80"  x2="640" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="640" y1="80"  x2="472" y2="190" stroke="#94a3b8" strokeWidth="1.5"/>
        {/* Triangles */}
        <polygon points="472,80 540,135 604,80"  fill="#fed7aa" fillOpacity=".4" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round"/>
        <polygon points="640,190 572,135 508,190" fill="#fed7aa" fillOpacity=".4" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" strokeDasharray="5,3"/>
        {/* Vert opp angle marks */}
        <circle cx="556" cy="135" r="14" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="12 100"/>
        <circle cx="572" cy="135" r="14" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="12 100"/>
        <text x="544" y="130" fontSize="9.5" fill="#dc2626" fontWeight="800">θ</text>
        <text x="572" y="130" fontSize="9.5" fill="#dc2626" fontWeight="800">θ</text>
        <text x="552" y="210" textAnchor="middle" fontSize="9.5" fill="#c2410c" fontWeight="700">∠AOB = ∠COD (vert. opp.)</text>
      </svg>
    </div>
  );
}

/** Shows a complex figure with step-by-step angle identification */
export function AAStepByStep() {
  return (
    <div style={{ background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:'1.25rem', overflow:'auto', margin:'1rem 0' }}>
      <svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', fontFamily:'system-ui' }}>
        <text x="320" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a5f">
          Step-by-Step: Proving △ADE ~ △ABC (DE ∥ BC)
        </text>

        {/* Main triangle */}
        <polygon points="100,210 340,210 220,50" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
        {/* DE line */}
        <line x1="160" y1="145" x2="280" y2="145" stroke="#dc2626" strokeWidth="3"/>
        {/* Small triangle ADE highlighted */}
        <polygon points="160,145 280,145 220,50" fill="#bfdbfe" fillOpacity=".5" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round"/>

        {/* Step 1: Common angle at A */}
        <circle cx="220" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="17 100"/>
        <text x="220" y="40" textAnchor="middle" fontSize="13" fill="#10b981" fontWeight="800">A</text>

        {/* Step 2: Corresponding angles */}
        <circle cx="100" cy="210" r="20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="17 100"/>
        <circle cx="160" cy="145" r="18" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="15 100"/>
        <text x="83"  y="228" fontSize="12" fill="#f59e0b" fontWeight="800">B</text>
        <text x="340" y="228" fontSize="12" fill="#3b82f6" fontWeight="700">C</text>
        <text x="150" y="162" fontSize="12" fill="#f59e0b" fontWeight="800">D</text>
        <text x="284" y="157" fontSize="12" fill="#3b82f6" fontWeight="700">E</text>
        <text x="210" y="140" textAnchor="middle" fontSize="9" fill="#dc2626">DE ∥ BC</text>

        {/* Steps panel */}
        <rect x="365" y="28" width="265" height="210" rx="8" fill="#1e3a5f"/>
        <text x="497" y="48" textAnchor="middle" fontSize="10.5" fill="white" fontWeight="700">How to prove △ADE ~ △ABC</text>

        <rect x="375" y="55" width="245" height="34" rx="5" fill="rgba(255,255,255,.08)"/>
        <text x="382" y="68" fontSize="9.5" fill="#86efac" fontWeight="700">Step 1: Find common angle</text>
        <text x="382" y="82" fontSize="9" fill="rgba(255,255,255,.8)">∠DAE = ∠BAC  (same angle at A)</text>

        <rect x="375" y="95" width="245" height="34" rx="5" fill="rgba(255,255,255,.08)"/>
        <text x="382" y="108" fontSize="9.5" fill="#fde68a" fontWeight="700">Step 2: Use parallel lines</text>
        <text x="382" y="122" fontSize="9" fill="rgba(255,255,255,.8)">∠ADE = ∠ABC  (DE∥BC → corr. angles)</text>

        <rect x="375" y="135" width="245" height="34" rx="5" fill="rgba(255,255,255,.08)"/>
        <text x="382" y="148" fontSize="9.5" fill="#a5f3fc" fontWeight="700">Step 3: State similarity (AA)</text>
        <text x="382" y="162" fontSize="9" fill="rgba(255,255,255,.8)">∴ △ADE ~ △ABC  (AA)</text>

        <rect x="375" y="175" width="245" height="34" rx="5" fill="rgba(255,255,255,.08)"/>
        <text x="382" y="188" fontSize="9.5" fill="#f9a8d4" fontWeight="700">Step 4: Write the ratio</text>
        <text x="382" y="202" fontSize="9" fill="rgba(255,255,255,.8)">AD/AB = DE/BC = AE/AC</text>

        <text x="497" y="228" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,.5)">⚠ Order: A↔A, D↔B, E↔C</text>

        <text x="230" y="242" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="700">
          ICSE exam tip: always state the reason for each angle equality
        </text>
      </svg>
    </div>
  );
}
