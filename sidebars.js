/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ── Shown when you click "Chapters" in navbar ──
  chaptersSidebar: [
    { type: 'doc', id: 'index', label: '🏠 Home' },
    {
      type: 'category',
      label: '📦 Ch 1 — GST',
      collapsed: false,
      items: ['ch1-gst/overview', 'ch1-gst/normal', 'ch1-gst/exam'],
    },
    {
      type: 'category',
      label: '🏦 Ch 2 — Banking',
      collapsed: true,
      items: ['ch2-banking/normal', 'ch2-banking/exam'],
    },
    {
      type: 'category',
      label: '📈 Ch 3 — Shares & Dividends',
      collapsed: true,
      items: ['ch3-shares/normal', 'ch3-shares/exam'],
    },
    {
      type: 'category',
      label: '📐 Ch 4 — Trig Identities',
      collapsed: true,
      items: ['ch4-trig-identities/normal', 'ch4-trig-identities/exam'],
    },
    {
      type: 'category',
      label: '📏 Ch 5 — Heights & Distances',
      collapsed: true,
      items: ['ch5-heights-distances/normal', 'ch5-heights-distances/exam'],
    },
  ],

  // ── Shown when you click "PYQ" in navbar ──
  pyqSidebar: [
    { type: 'doc', id: 'pyq/pyq-index', label: '📋 PYQ Overview' },
    { type: 'doc', id: 'pyq/pyq-gst',              label: '📦 GST' },
    { type: 'doc', id: 'pyq/pyq-banking',           label: '🏦 Banking' },
    { type: 'doc', id: 'pyq/pyq-shares',            label: '📈 Shares & Dividends' },
    { type: 'doc', id: 'pyq/pyq-trig-identities',   label: '📐 Trig Identities' },
    { type: 'doc', id: 'pyq/pyq-heights-distances', label: '📏 Heights & Distances' },
  ],

};

module.exports = sidebars;
