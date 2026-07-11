/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Home',
    },
    {
      type: 'category',
      label: '📋 Previous Year Questions',
      collapsed: false,
      items: [
        'pyq/pyq-index',
        'pyq/pyq-gst',
        'pyq/pyq-banking',
        'pyq/pyq-shares',
        'pyq/pyq-trig-identities',
        'pyq/pyq-heights-distances',
      ],
    },
    {
      type: 'category',
      label: '📦 Chapter 1 — GST',
      collapsed: false,
      items: [
        'ch1-gst/overview',
        'ch1-gst/normal',
        'ch1-gst/exam',
      ],
    },
    {
      type: 'category',
      label: '🏦 Chapter 2 — Banking',
      collapsed: true,
      items: [
        'ch2-banking/normal',
        'ch2-banking/exam',
      ],
    },
    {
      type: 'category',
      label: '📈 Chapter 3 — Shares & Dividends',
      collapsed: true,
      items: [
        'ch3-shares/normal',
        'ch3-shares/exam',
      ],
    },
    {
      type: 'category',
      label: '📐 Chapter 4 — Trig Identities',
      collapsed: true,
      items: [
        'ch4-trig-identities/normal',
        'ch4-trig-identities/exam',
      ],
    },
    {
      type: 'category',
      label: '📏 Chapter 5 — Heights & Distances',
      collapsed: true,
      items: [
        'ch5-heights-distances/normal',
        'ch5-heights-distances/exam',
      ],
    },
  ],
};

module.exports = sidebars;
