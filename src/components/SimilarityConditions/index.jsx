import React from 'react';

/* ── shared triangle drawing helper ── */
function Triangle({ pts, color, fillOpacity = 0.15, angles = [], ticks = {}, labels = {}, dashed = false }) {
  const [A, B, C] = pts;
  const pts_str = pts.map(p => `${p.x},${p.y}`).join(' ');
  return (
    <g>
      <polygon points={pts_str} fill={color} fillOpacity={fillOpacity}
        stroke={color} strokeWidth="2.2" strokeLinejoin="round"
        strokeDasharray={dashed ? '7,4' : 'none'} />
      {/* angle arcs */}
      {angles.map((a, i) => (
        <circle key={i} cx={pts[a.vtx].x} cy={pts[a.vtx].y} r={a.r || 12}
          fill="none" stroke={color} strokeWidth="1.5"
          strokeDasharray={`${a.arc || 14} 100`} />
      ))}
      {/* tick marks on sides */}
      {Object.entries(ticks).map(([side, n]) => {
        const [p1, p2] = side === 'AB' ? [A, B] : side === 'BC' ? [B, C] : [A, C];
        const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
        const dx = p2.x - p1.x, dy = p2.y - p1.y;
        const len = Math.hypot(dx, dy);
        const px = -dy / len * 6, py = dx / len * 6;
        return Array.from({ length: n }).map((_, j) => {
          const off = (j - (n - 1) / 2) * 4;
          const ox = px * 0 + dx / len * off, oy = py * 0 + dy / len * off;
          return <line key={`${side}-${j}`}
            x1={mx + ox - px} y1={my + oy - py}
            x2={mx + ox + px} y2={my + oy + py}
            stroke={color} strokeWidth="1.8" />;
        });
      })}
      {/* vertex labels */}
      {Object.entries(labels).map(([vtx, txt]) => {
        const p = vtx === 'A' ? A : vtx === 'B' ? B : C;
        return <text key={vtx} x={p.x + (labels[vtx + '_dx'] || 0)}
          y={p.y + (labels[vtx + '_dy'] || 0)} fontSize="11" fontWeight="700"
          fill={color} textAnchor="middle">{txt}</text>;
      })}
    </g>
  );
}

/* ── AA Condition ── */
export function AACondition() {
  const t1 = [{ x: 60, y: 170 }, { x: 160, y: 170 }, { x: 90, y: 90 }];
  const t2 = [{ x: 210, y: 185 }, { x: 360, y: 185 }, { x: 255, y: 60 }];
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: 'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">AA Condition — Two Equal Angles → Similar</text>

        {/* Triangle 1 */}
        <polygon points="60,170 160,170 90,90" fill="#3b82f6" fillOpacity=".15" stroke="#3b82f6" strokeWidth="2.2" strokeLinejoin="round"/>
        {/* Angle marks at A and C (single arc) */}
        <circle cx="60" cy="170" r="14" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="13 100"/>
        <circle cx="90" cy="90" r="14" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="14 100"/>
        <text x="45" y="185" fontSize="11" fill="#dc2626" fontWeight="800">α</text>
        <text x="85" y="82" fontSize="11" fill="#7e22ce" fontWeight="800">β</text>
        <text x="55" y="185" fontSize="10" fill="#1d4ed8" fontWeight="700">A</text>
        <text x="162" y="178" fontSize="10" fill="#1d4ed8" fontWeight="700">B</text>
        <text x="88" y="83" fontSize="10" fill="#1d4ed8"/>

        {/* Triangle 2 (larger, same angles) */}
        <polygon points="210,185 360,185 255,60" fill="#10b981" fillOpacity=".12" stroke="#10b981" strokeWidth="2.2" strokeLinejoin="round" strokeDasharray="7,4"/>
        {/* Same angle marks */}
        <circle cx="210" cy="185" r="20" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="18 100"/>
        <circle cx="255" cy="60" r="20" fill="none" stroke="#7e22ce" strokeWidth="2" strokeDasharray="20 100"/>
        <text x="193" y="202" fontSize="11" fill="#dc2626" fontWeight="800">α</text>
        <text x="249" y="52" fontSize="11" fill="#7e22ce" fontWeight="800">β</text>
        <text x="202" y="200" fontSize="10" fill="#15803d" fontWeight="700">P</text>
        <text x="362" y="193" fontSize="10" fill="#15803d" fontWeight="700">Q</text>
        <text x="254" y="52" fontSize="10" fill="#15803d" fontWeight="700"/>

        {/* Labels */}
        <text x="110" y="195" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="700">△ ABC (small)</text>
        <text x="285" y="208" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">△ PQR (large)</text>

        {/* Insight */}
        <rect x="395" y="55" width="175" height="110" rx="8" fill="#1e3a5f"/>
        <text x="482" y="76" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">AA Condition</text>
        <text x="482" y="94" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">∠A = ∠P = α</text>
        <text x="482" y="109" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">∠C = ∠R = β</text>
        <text x="482" y="125" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">∴ ∠B = ∠Q (auto!)</text>
        <text x="482" y="145" textAnchor="middle" fontSize="10" fill="#86efac" fontWeight="700">△ABC ~ △PQR</text>

        <text x="290" y="215" textAnchor="middle" fontSize="10" fill="#0f766e" fontWeight="700">
          If 2 angles match → 3rd angle MUST match too (angles sum to 180°)
        </text>
      </svg>
    </div>
  );
}

/* ── SAS Condition ── */
export function SASCondition() {
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 580 230" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: 'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">SAS Condition — One Equal Angle + Proportional Sides around it</text>

        {/* Triangle 1 */}
        <polygon points="50,190 180,190 80,100" fill="#f59e0b" fillOpacity=".15" stroke="#f59e0b" strokeWidth="2.2" strokeLinejoin="round"/>
        {/* The included angle at A */}
        <circle cx="50" cy="190" r="16" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="15 100"/>
        <text x="34" y="207" fontSize="12" fill="#dc2626" fontWeight="800">θ</text>
        {/* Side tick marks: AB (bottom) = 1 tick, AC (left) = 2 ticks */}
        <line x1="112" y1="190" x2="112" y2="182" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="62" y1="148" x2="70" y2="143" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="68" y1="155" x2="76" y2="150" stroke="#f59e0b" strokeWidth="2"/>
        {/* Labels */}
        <text x="115" y="205" fontSize="9.5" fill="#b45309" fontWeight="700">AB = 4</text>
        <text x="42" y="148" fontSize="9.5" fill="#b45309" fontWeight="700">AC = 6</text>
        <text x="44" y="205" fontSize="10" fill="#b45309" fontWeight="700">A</text>
        <text x="183" y="200" fontSize="10" fill="#b45309" fontWeight="700">B</text>
        <text x="78" y="93" fontSize="10" fill="#b45309" fontWeight="700">C</text>

        {/* Triangle 2 (SAS with k=1.5) */}
        <polygon points="240,200 435,200 300,80" fill="#10b981" fillOpacity=".12" stroke="#10b981" strokeWidth="2.2" strokeLinejoin="round" strokeDasharray="7,4"/>
        {/* Same angle at P */}
        <circle cx="240" cy="200" r="22" fill="none" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="20 100"/>
        <text x="220" y="220" fontSize="12" fill="#dc2626" fontWeight="800">θ</text>
        {/* Proportional side labels */}
        <text x="330" y="218" fontSize="9.5" fill="#15803d" fontWeight="700">PQ = 6 (= 1.5 × 4)</text>
        <text x="240" y="148" fontSize="9.5" fill="#15803d" fontWeight="700">PR = 9 (= 1.5 × 6)</text>
        <text x="233" y="215" fontSize="10" fill="#15803d" fontWeight="700">P</text>
        <text x="437" y="210" fontSize="10" fill="#15803d" fontWeight="700">Q</text>
        <text x="298" y="73" fontSize="10" fill="#15803d" fontWeight="700">R</text>

        {/* k label */}
        <rect x="395" y="60" width="175" height="120" rx="8" fill="#1e3a5f"/>
        <text x="482" y="82" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">SAS Condition</text>
        <text x="482" y="100" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">∠A = ∠P = θ</text>
        <text x="482" y="116" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">PQ/AB = 6/4 = 1.5</text>
        <text x="482" y="132" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">PR/AC = 9/6 = 1.5</text>
        <text x="482" y="149" textAnchor="middle" fontSize="9.5" fill="#fde68a">Same ratio → k = 1.5</text>
        <text x="482" y="168" textAnchor="middle" fontSize="10" fill="#86efac" fontWeight="700">△ABC ~ △PQR</text>

        <text x="290" y="222" textAnchor="middle" fontSize="9.5" fill="#dc2626" fontWeight="700">
          ⚠️ The equal angle must be BETWEEN the two proportional sides (included angle)
        </text>
      </svg>
    </div>
  );
}

/* ── SSS Condition ── */
export function SSSCondition() {
  return (
    <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 12, padding: '1.25rem', overflow: 'auto', margin: '1rem 0' }}>
      <svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fontFamily: 'system-ui' }}>
        <text x="290" y="16" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#1e3a5f">SSS Condition — All Three Pairs of Sides Proportional</text>

        {/* Triangle 1 — sides 3,4,5 */}
        <polygon points="55,185 175,185 55,105" fill="#8b5cf6" fillOpacity=".15" stroke="#8b5cf6" strokeWidth="2.2" strokeLinejoin="round"/>
        <text x="112" y="200" textAnchor="middle" fontSize="10" fill="#7e22ce" fontWeight="700">AB = 4</text>
        <text x="38" y="148" textAnchor="middle" fontSize="10" fill="#7e22ce" fontWeight="700">AC = 3</text>
        <text x="128" y="142" textAnchor="middle" fontSize="10" fill="#7e22ce" fontWeight="700">BC = 5</text>
        <text x="48" y="200" fontSize="10" fill="#7e22ce" fontWeight="700">A</text>
        <text x="177" y="195" fontSize="10" fill="#7e22ce" fontWeight="700">B</text>
        <text x="48" y="100" fontSize="10" fill="#7e22ce" fontWeight="700">C</text>

        {/* Triangle 2 — sides 6,8,10 (k=2) */}
        <polygon points="215,195 455,195 215,75" fill="#10b981" fillOpacity=".12" stroke="#10b981" strokeWidth="2.2" strokeLinejoin="round" strokeDasharray="7,4"/>
        <text x="332" y="212" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">PQ = 8</text>
        <text x="190" y="138" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">PR = 6</text>
        <text x="360" y="130" textAnchor="middle" fontSize="10" fill="#15803d" fontWeight="700">QR = 10</text>
        <text x="207" y="210" fontSize="10" fill="#15803d" fontWeight="700">P</text>
        <text x="458" y="205" fontSize="10" fill="#15803d" fontWeight="700">Q</text>
        <text x="207" y="70" fontSize="10" fill="#15803d" fontWeight="700">R</text>

        {/* Ratio panel */}
        <rect x="395" y="40" width="175" height="140" rx="8" fill="#1e3a5f"/>
        <text x="482" y="60" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">SSS Condition</text>
        <text x="482" y="78" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.75)">Check all three ratios:</text>
        <text x="482" y="96" textAnchor="middle" fontSize="10" fill="#fde68a">PQ/AB = 8/4 = 2</text>
        <text x="482" y="114" textAnchor="middle" fontSize="10" fill="#fde68a">PR/AC = 6/3 = 2</text>
        <text x="482" y="132" textAnchor="middle" fontSize="10" fill="#fde68a">QR/BC = 10/5 = 2</text>
        <text x="482" y="153" textAnchor="middle" fontSize="9" fill="#86efac">All equal → k = 2</text>
        <text x="482" y="170" textAnchor="middle" fontSize="10" fill="#86efac" fontWeight="700">△ABC ~ △PQR</text>

        <text x="290" y="215" textAnchor="middle" fontSize="9.5" fill="#0f766e" fontWeight="700">
          All three ratios must be equal. If even one differs — triangles are NOT similar.
        </text>
      </svg>
    </div>
  );
}
