import React from 'react';

const COLORS = {
  manufacturer: { header: '#15803d', bg: '#f0fdf4', border: '#bbf7d0', text: '#166534' },
  wholesaler:   { header: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af' },
  retailer:     { header: '#c2410c', bg: '#fff7ed', border: '#fed7aa', text: '#9a3412' },
  consumer:     { header: '#7e22ce', bg: '#faf5ff', border: '#e9d5ff', text: '#581c87' },
};

function fmt(n) { return '₹' + n.toLocaleString('en-IN'); }

/**
 * SVG supply chain showing ITC flow.
 * Defaults: GPU chain at 18% GST.
 */
export default function SupplyChain({
  gstRate = 18,
  stages = [
    { role: 'MANUFACTURER', name: 'Chips Ltd.',    buysAt: 0,      sellsAt: 20000 },
    { role: 'WHOLESALER',   name: 'Tech Distrib.', buysAt: 20000,  sellsAt: 30000 },
    { role: 'RETAILER',     name: 'GameZone',      buysAt: 30000,  sellsAt: 36000 },
    { role: 'CONSUMER',     name: 'Arjun',         buysAt: 36000,  sellsAt: null  },
  ],
}) {
  const r = gstRate / 100;

  const nodes = stages.map((s, i) => {
    const inputTax  = s.buysAt  * r;
    const outputTax = s.sellsAt ? s.sellsAt * r : null;
    const netTax    = outputTax !== null ? outputTax - inputTax : null;
    const invoice   = s.sellsAt ? s.sellsAt + outputTax : null;
    const colorKey  = ['manufacturer','wholesaler','retailer','consumer'][i];
    return { ...s, inputTax, outputTax, netTax, invoice, colorKey };
  });

  const BOX_W = 145;
  const BOX_H = 148;
  const ARR_W = 40;
  const TOTAL_W = nodes.length * BOX_W + (nodes.length - 1) * ARR_W;
  const SVG_W   = TOTAL_W + 20;
  const SVG_H   = BOX_H + 50;

  return (
    <div className="svg-wrap">
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }}
        aria-label="GST Supply Chain"
      >
        {/* Title */}
        <text x={SVG_W / 2} y="15" textAnchor="middle"
          fontSize="11.5" fontWeight="700" fill="#1e3a5f">
          GST Supply Chain — {gstRate}% GST | Each dealer pays only on value added
        </text>

        <defs>
          <marker id="sc-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
          </marker>
        </defs>

        {nodes.map((node, i) => {
          const c   = COLORS[node.colorKey];
          const bx  = 10 + i * (BOX_W + ARR_W);
          const by  = 22;
          const cx  = bx + BOX_W / 2;
          const isConsumer = node.sellsAt === null;

          return (
            <g key={i}>
              {/* Box background */}
              <rect x={bx} y={by} width={BOX_W} height={BOX_H} rx="7"
                fill={c.bg} stroke={c.border} strokeWidth="1.5" />
              {/* Header */}
              <rect x={bx} y={by} width={BOX_W} height={26} rx="7" fill={c.header} />
              <rect x={bx} y={by + 18} width={BOX_W} height={8} fill={c.header} />
              <text x={cx} y={by + 15} textAnchor="middle"
                fontSize="9.5" fill="white" fontWeight="700">{node.role}</text>

              {/* Sells at */}
              <text x={cx} y={by + 44} textAnchor="middle"
                fontSize="9" fill={c.text}>
                {isConsumer ? `Pays ${fmt(node.buysAt + node.buysAt * r)}` : `Sells at ${fmt(node.sellsAt)}`}
              </text>

              <line x1={bx + 15} y1={by + 52} x2={bx + BOX_W - 15} y2={by + 52}
                stroke={c.border} strokeWidth="0.75" />

              {/* Tax details */}
              {!isConsumer ? (
                <>
                  <text x={cx} y={by + 65}  textAnchor="middle" fontSize="8.5" fill="#475569">Output Tax:</text>
                  <text x={cx} y={by + 77}  textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="700">{fmt(node.outputTax)}</text>
                  <text x={cx} y={by + 90}  textAnchor="middle" fontSize="8.5" fill="#475569">Input Tax Credit:</text>
                  <text x={cx} y={by + 102} textAnchor="middle" fontSize="9" fill="#64748b">{node.inputTax ? fmt(node.inputTax) : '₹0'}</text>
                  <line x1={bx + 15} y1={by + 110} x2={bx + BOX_W - 15} y2={by + 110}
                    stroke={c.border} strokeWidth="0.75" />
                  <text x={cx} y={by + 122} textAnchor="middle" fontSize="8.5" fill="#475569">PAYS GOVT:</text>
                  <text x={cx} y={by + 137} textAnchor="middle" fontSize="11" fill={c.header} fontWeight="800">{fmt(node.netTax)}</text>
                </>
              ) : (
                <>
                  <text x={cx} y={by + 68}  textAnchor="middle" fontSize="8.5" fill="#475569">GST paid:</text>
                  <text x={cx} y={by + 80}  textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="700">{fmt(node.buysAt * r)}</text>
                  <text x={cx} y={by + 95}  textAnchor="middle" fontSize="8" fill={c.text}>({gstRate}% of {fmt(node.buysAt)})</text>
                  <line x1={bx + 15} y1={by + 105} x2={bx + BOX_W - 15} y2={by + 105}
                    stroke={c.border} strokeWidth="0.75" />
                  <text x={cx} y={by + 118} textAnchor="middle" fontSize="8" fill={c.text}>No ITC. Bears</text>
                  <text x={cx} y={by + 130} textAnchor="middle" fontSize="8" fill={c.text}>full tax.</text>
                </>
              )}

              {/* Arrow to next node */}
              {i < nodes.length - 1 && (
                <>
                  <text x={bx + BOX_W + ARR_W / 2} y={by + 42} textAnchor="middle"
                    fontSize="8.5" fill="#64748b">{fmt(node.invoice)}</text>
                  <line
                    x1={bx + BOX_W + 3} y1={by + 35}
                    x2={bx + BOX_W + ARR_W - 3} y2={by + 35}
                    stroke="#64748b" strokeWidth="1.5"
                    markerEnd="url(#sc-arr)"
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Total check row */}
        {(() => {
          const totalGovt = nodes.reduce((s, n) => s + (n.netTax ?? 0), 0);
          const finalSP   = stages[stages.length - 1].buysAt;
          return (
            <text x={SVG_W / 2} y={BOX_H + 42} textAnchor="middle"
              fontSize="10" fill="#0f766e" fontWeight="700">
              Total paid to Govt: {fmt(totalGovt)} = {gstRate}% of {fmt(finalSP)} ✓
            </text>
          );
        })()}
      </svg>
    </div>
  );
}
