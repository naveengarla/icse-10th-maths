/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Home',
    },
    // ── CHAPTERS ── (learn first)
    {
      type: 'category',
      label: '📦 Ch 1 — GST',
      collapsed: true,
      items: [
        'ch1-gst/overview',
        'ch1-gst/normal',
        'ch1-gst/exam',
      ],
    },
    {
      type: 'category',
      label: '🏦 Ch 2 — Banking',
      collapsed: true,
      items: [
        'ch2-banking/normal',
        'ch2-banking/exam',
      ],
    },
    {
      type: 'category',
      label: '📈 Ch 3 — Shares & Dividends',
      collapsed: true,
      items: [
        'ch3-shares/normal',
        'ch3-shares/exam',
      ],
    },
    {
      type: 'category',
      label: '📐 Ch 4 — Trig Identities',
      collapsed: true,
      items: [
        'ch4-trig-identities/normal',
        'ch4-trig-identities/exam',
      ],
    },
    {
      type: 'category',
      label: '📏 Ch 5 — Heights & Distances',
      collapsed: true,
      items: [
        'ch5-heights-distances/normal',
        'ch5-heights-distances/exam',
      ],
    },
    // ── PYQ ── (practice after learning)
    {
      type: 'category',
      label: '📋 PYQ — GST',
      collapsed: true,
      items: ['pyq/pyq-gst'],
    },
    {
      type: 'category',
      label: '📋 PYQ — Banking',
      collapsed: true,
      items: ['pyq/pyq-banking'],
    },
    {
      type: 'category',
      label: '📋 PYQ — Shares',
      collapsed: true,
      items: ['pyq/pyq-shares'],
    },
    {
      type: 'category',
      label: '📋 PYQ — Trig Identities',
      collapsed: true,
      items: ['pyq/pyq-trig-identities'],
    },
    {
      type: 'category',
      label: '📋 PYQ — Heights & Dist.',
      collapsed: true,
      items: ['pyq/pyq-heights-distances'],
    },
  ],
};

module.exports = sidebars;
