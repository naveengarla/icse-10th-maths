import React from 'react';

export default function IntraInterDiagram({ type = 'intra' }) {
  if (type === 'intra') {
    return (
      <div className="svg-wrap">
        <svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }} aria-label="Intra-State GST">
          <defs>
            <marker id="ia" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
            </marker>
          </defs>
          {/* Seller box */}
          <rect x="10" y="10" width="180" height="110" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <rect x="10" y="10" width="180" height="26" rx="8" fill="#1d4ed8" />
          <rect x="10" y="28" width="180" height="8"  fill="#1d4ed8" />
          <text x="100" y="28" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">DELHI</text>
          <text x="100" y="50" textAnchor="middle" fontSize="9"  fill="#475569">🏪 Seller (GameZone)</text>
          <rect x="22" y="60" width="156" height="22" rx="4" fill="#3b82f6" />
          <text x="100" y="75" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">Sells GPU — ₹36,000</text>
          <text x="100" y="98"  textAnchor="middle" fontSize="9"  fill="#1e40af">CGST (9%) → Centre</text>
          <text x="100" y="112" textAnchor="middle" fontSize="9"  fill="#1e40af">SGST (9%) → Delhi Govt</text>
          {/* Arrow */}
          <text x="243" y="72" textAnchor="middle" fontSize="9" fill="#64748b">₹42,480</text>
          <line x1="192" y1="65" x2="248" y2="65" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#ia)" />
          {/* Buyer box */}
          <rect x="253" y="10" width="180" height="110" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <rect x="253" y="10" width="180" height="26" rx="8" fill="#1d4ed8" />
          <rect x="253" y="28" width="180" height="8"  fill="#1d4ed8" />
          <text x="343" y="28" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">DELHI</text>
          <text x="343" y="50" textAnchor="middle" fontSize="9"  fill="#475569">🎮 Buyer (Arjun)</text>
          <rect x="265" y="60" width="156" height="22" rx="4" fill="#06b6d4" />
          <text x="343" y="75" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">Pays ₹42,480</text>
          <text x="343" y="98"  textAnchor="middle" fontSize="9" fill="#1e40af">CGST ₹3,240 + SGST ₹3,240</text>
          <text x="343" y="112" textAnchor="middle" fontSize="8.5" fill="#64748b">= 18% of ₹36,000</text>
          {/* Formula box */}
          <rect x="453" y="10" width="140" height="110" rx="8" fill="#1e3a5f" />
          <text x="523" y="30" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">INTRA-STATE</text>
          <text x="523" y="47" textAnchor="middle" fontSize="9"   fill="rgba(255,255,255,0.75)">Total GST = 18%</text>
          <rect x="465" y="55" width="116" height="20" rx="4" fill="#06b6d4" />
          <text x="523" y="69" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">CGST = 9%</text>
          <rect x="465" y="79" width="116" height="20" rx="4" fill="#10b981" />
          <text x="523" y="93" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">SGST = 9%</text>
          <text x="523" y="113" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.65)">each = rate ÷ 2</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="svg-wrap">
      <svg viewBox="0 0 600 170" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', fontFamily: 'system-ui, sans-serif' }} aria-label="Inter-State GST">
        <defs>
          <marker id="ie" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#7e22ce" />
          </marker>
        </defs>
        {/* Seller box */}
        <rect x="10" y="10" width="170" height="120" rx="8" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="26" rx="8" fill="#7e22ce" />
        <rect x="10" y="28" width="170" height="8"  fill="#7e22ce" />
        <text x="95" y="28" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">MUMBAI</text>
        <text x="95" y="50" textAnchor="middle" fontSize="9"  fill="#475569">Maharashtra 🏭</text>
        <rect x="22" y="60" width="146" height="22" rx="4" fill="#7e22ce" />
        <text x="95" y="75" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">Sells at ₹50,000</text>
        <text x="95" y="97"  textAnchor="middle" fontSize="9" fill="#6b21a8">IGST 18% = ₹9,000</text>
        <text x="95" y="111" textAnchor="middle" fontSize="8.5" fill="#6b21a8">(no CGST/SGST split)</text>
        {/* State border */}
        <line x1="195" y1="0" x2="195" y2="170" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
        <text x="195" y="160" fontSize="7.5" fill="#94a3b8" textAnchor="middle" transform="rotate(-90,195,120)">STATE BORDER</text>
        {/* Arrow */}
        <text x="215" y="72" textAnchor="middle" fontSize="9" fill="#7e22ce">₹59,000</text>
        <line x1="183" y1="65" x2="228" y2="65" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#ie)" />
        {/* Buyer box */}
        <rect x="233" y="10" width="170" height="120" rx="8" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="1.5" />
        <rect x="233" y="10" width="170" height="26" rx="8" fill="#7e22ce" />
        <rect x="233" y="28" width="170" height="8"  fill="#7e22ce" />
        <text x="318" y="28" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">DELHI</text>
        <text x="318" y="50" textAnchor="middle" fontSize="9"  fill="#475569">Delhi UT 🏪</text>
        <rect x="245" y="60" width="146" height="22" rx="4" fill="#7e22ce" />
        <text x="318" y="75" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">Pays ₹59,000</text>
        <text x="318" y="97"  textAnchor="middle" fontSize="9" fill="#6b21a8">IGST ₹9,000 paid</text>
        <text x="318" y="111" textAnchor="middle" fontSize="8.5" fill="#6b21a8">(claims as ITC later)</text>
        {/* Formula box */}
        <rect x="420" y="10" width="170" height="120" rx="8" fill="#1e3a5f" />
        <text x="505" y="30" textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700">INTER-STATE</text>
        <text x="505" y="47" textAnchor="middle" fontSize="9"   fill="rgba(255,255,255,0.75)">Total GST = 18%</text>
        <rect x="432" y="55" width="146" height="22" rx="4" fill="#8b5cf6" />
        <text x="505" y="70" textAnchor="middle" fontSize="10"  fill="white" fontWeight="700">IGST = 18%</text>
        <text x="505" y="90"  textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.7)">No split. IGST = full rate.</text>
        <text x="505" y="104" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.7)">Centre collects &amp; shares</text>
        <text x="505" y="118" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.7)">with destination state.</text>
      </svg>
    </div>
  );
}
