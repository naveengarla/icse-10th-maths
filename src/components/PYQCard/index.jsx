import React from 'react';

/**
 * Styled header card for a PYQ question.
 * The question text AND solution (via <details>) go in {children} as MDX —
 * so KaTeX processes all $...$ automatically.
 */
export default function PYQCard({ year, marks, qnum, children }) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '1.1rem',
    }}>
      {/* Header */}
      <div style={{
        background: '#1e3a5f',
        color: 'white',
        padding: '0.55rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.82rem',
        fontWeight: 700,
      }}>
        <span>
          {qnum ? `Q${qnum}` : 'Q'}&nbsp;·&nbsp;ICSE {year}
        </span>
        <span style={{
          background: 'rgba(255,255,255,0.15)',
          padding: '0.15rem 0.6rem',
          borderRadius: '12px',
          fontSize: '0.72rem',
        }}>
          [{marks} mark{marks !== 1 ? 's' : ''}]
        </span>
      </div>
      {/* Body — MDX children render here, KaTeX processes $...$ */}
      <div style={{ padding: '0.75rem 1.1rem', fontSize: '0.92rem', lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}
