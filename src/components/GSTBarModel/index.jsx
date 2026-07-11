import React from 'react';

/**
 * Singapore-style bar model showing MP → Discount → Taxable Value → Final Bill.
 * Props: mp, discount, gstRate (all numbers). Defaults to Arjun's GPU example.
 */
export default function GSTBarModel({
  mp = 40000,
  discountPct = 10,
  gstRate = 18,
  label = "Arjun's GPU",
}) {
  const discount = (mp * discountPct) / 100;
  const sp = mp - discount;
  const gst = (sp * gstRate) / 100;
  const cgst = gst / 2;
  const bill = sp + gst;

  // Scale: 560px = bill amount
  const W = 560;
  const scale = W / bill;
  const spW   = Math.round(sp * scale);
  const cgstW = Math.round(cgst * scale);
  const sgstW = W - spW - cgstW;          // absorb rounding
  const discW = Math.round(discount * scale);
  const mpW   = spW + discW;

  const BAR_X = 95;
  const H     = 38;
  const fmt   = (n) => '₹' + n.toLocaleString('en-IN');

  return (
    <div className="svg-wrap">
      <svg
        viewBox={`0 0 ${BAR_X + W + 10} 250`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}
        aria-label="GST Bar Model"
      >
        {/* Title */}
        <text x={(BAR_X + W) / 2 + 5} y="15" textAnchor="middle"
          fontSize="12" fontWeight="700" fill="#1e3a5f">
          GST Bar Model — {label} | {discountPct}% Discount | {gstRate}% GST
        </text>

        {/* ── ROW 1: MARKED PRICE ── */}
        <text x="4" y="44"  fontSize="9" fill="#475569" fontWeight="600">MARKED</text>
        <text x="4" y="56"  fontSize="9" fill="#475569" fontWeight="600">PRICE</text>
        <text x="4" y="68"  fontSize="8" fill="#94a3b8">{fmt(mp)}</text>

        <rect x={BAR_X} y="33" width={spW}   height={H} rx="3" fill="#3b82f6" />
        <text x={BAR_X + spW / 2} y="33" dominantBaseline="middle"
          dy={H / 2 + 1} textAnchor="middle" fontSize="11" fill="white" fontWeight="700">
          SP = {fmt(sp)}
        </text>
        <rect x={BAR_X + spW} y="33" width={discW} height={H} rx="3" fill="#f59e0b" />
        <text x={BAR_X + spW + discW / 2} y="44" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Disc.</text>
        <text x={BAR_X + spW + discW / 2} y="57" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">{fmt(discount)}</text>

        {/* MP dimension line */}
        <line x1={BAR_X} y1="77" x2={BAR_X + mpW} y2="77" stroke="#94a3b8" strokeWidth="0.75" />
        <line x1={BAR_X}       y1="74" x2={BAR_X}       y2="80" stroke="#94a3b8" strokeWidth="0.75" />
        <line x1={BAR_X + mpW} y1="74" x2={BAR_X + mpW} y2="80" stroke="#94a3b8" strokeWidth="0.75" />
        <text x={BAR_X + mpW / 2} y="88" textAnchor="middle" fontSize="9" fill="#64748b">
          Marked Price = {fmt(mp)}
        </text>

        {/* Insight */}
        <text x={BAR_X} y="107" fontSize="10" fill="#dc2626" fontWeight="800">↓</text>
        <text x={BAR_X + 14} y="107" fontSize="10" fill="#dc2626" fontWeight="700">
          Discount removed. GST on {fmt(sp)} only — NOT {fmt(mp)}
        </text>

        {/* ── ROW 2: TAXABLE VALUE ── */}
        <text x="4" y="130" fontSize="9" fill="#475569" fontWeight="600">TAXABLE</text>
        <text x="4" y="142" fontSize="9" fill="#475569" fontWeight="600">VALUE</text>
        <text x="4" y="154" fontSize="8" fill="#94a3b8">{fmt(sp)}</text>

        <rect x={BAR_X} y="119" width={spW} height={H} rx="3" fill="#1d4ed8" />
        <text x={BAR_X + spW / 2} y="119" dominantBaseline="middle"
          dy={H / 2 + 1} textAnchor="middle" fontSize="11" fill="white" fontWeight="700">
          Taxable Value = {fmt(sp)} ← Apply {gstRate}% GST here
        </text>

        {/* Arrow */}
        <text x={BAR_X}      y="170" fontSize="10" fill="#0f766e" fontWeight="800">↓</text>
        <text x={BAR_X + 14} y="170" fontSize="10" fill="#0f766e" fontWeight="700">
          Add {gstRate}% GST = {gstRate/2}% CGST + {gstRate/2}% SGST (intra-state)
        </text>

        {/* ── ROW 3: FINAL BILL ── */}
        <text x="4" y="193" fontSize="9" fill="#475569" fontWeight="600">FINAL</text>
        <text x="4" y="205" fontSize="9" fill="#475569" fontWeight="600">BILL</text>
        <text x="4" y="217" fontSize="8" fill="#94a3b8">{fmt(bill)}</text>

        <rect x={BAR_X}            y="181" width={spW}   height={H} rx="3" fill="#3b82f6" />
        <text x={BAR_X + spW / 2}  y="181" dominantBaseline="middle"
          dy={H / 2 + 1} textAnchor="middle" fontSize="11" fill="white" fontWeight="700">
          SP {fmt(sp)}
        </text>
        <rect x={BAR_X + spW}             y="181" width={cgstW} height={H} rx="3" fill="#06b6d4" />
        <text x={BAR_X + spW + cgstW / 2} y="192" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">CGST</text>
        <text x={BAR_X + spW + cgstW / 2} y="205" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">{fmt(cgst)}</text>
        <rect x={BAR_X + spW + cgstW}             y="181" width={sgstW} height={H} rx="3" fill="#10b981" />
        <text x={BAR_X + spW + cgstW + sgstW / 2} y="192" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">SGST</text>
        <text x={BAR_X + spW + cgstW + sgstW / 2} y="205" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">{fmt(cgst)}</text>

        {/* Final label */}
        <text x={BAR_X + W / 2} y="234" textAnchor="middle" fontSize="11" fill="#0f766e" fontWeight="800">
          Final Bill = {fmt(bill)}
        </text>

        {/* Legend */}
        {[
          { x: BAR_X,       color: '#3b82f6', label: 'SP / Taxable Value' },
          { x: BAR_X + 130, color: '#f59e0b', label: 'Discount (no GST)' },
          { x: BAR_X + 260, color: '#06b6d4', label: 'CGST → Centre' },
          { x: BAR_X + 370, color: '#10b981', label: 'SGST → State' },
        ].map(({ x, color, label: l }) => (
          <g key={l}>
            <rect x={x} y="242" width="9" height="5" rx="1" fill={color} />
            <text x={x + 12} y="248" fontSize="7.5" fill="#475569">{l}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
