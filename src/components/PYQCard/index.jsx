import React, { useState } from 'react';

/**
 * PYQ Question card with tap-to-reveal solution.
 * Props:
 *   year     — e.g. "2024"
 *   marks    — e.g. 4
 *   qnum     — e.g. "3(b)"
 *   children — question text (plain text or JSX)
 *   solution — solution JSX/text passed as a prop
 */
export default function PYQCard({ year, marks, qnum, children, solution }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '1rem',
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
      }}>
        <span style={{ fontWeight: 700 }}>
          {qnum ? `Q${qnum}` : 'Q'} &nbsp;·&nbsp; ICSE {year}
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

      {/* Question */}
      <div style={{ padding: '0.9rem 1rem', fontSize: '0.92rem', lineHeight: 1.65 }}>
        {children}
      </div>

      {/* Solution toggle */}
      {solution && (
        <>
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              width: '100%',
              padding: '0.6rem 1rem',
              background: open ? '#f0fdf4' : '#eff6ff',
              border: 'none',
              borderTop: '1px solid #e2e8f0',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: open ? '#15803d' : '#1d4ed8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>{open ? '▾' : '▸'}</span>
            {open ? 'Hide Solution' : 'Show Solution'}
          </button>

          {open && (
            <div style={{
              padding: '0.9rem 1rem',
              borderTop: '1px solid #bbf7d0',
              background: '#f0fdf4',
              fontSize: '0.88rem',
              lineHeight: 1.7,
            }}>
              {solution}
            </div>
          )}
        </>
      )}
    </div>
  );
}
