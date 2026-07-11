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
  ],
};

module.exports = sidebars;
