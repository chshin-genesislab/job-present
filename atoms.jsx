// atoms.jsx — shared slide chrome
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const TOTAL_SLIDES = 24;

function SlideHead() { return null; }

function SlideFoot({ section, idx }) {
  return (
    <div className="slide-foot">
      <em>{section}</em>
      <span>{String(idx).padStart(2,'0')} / {TOTAL_SLIDES}</span>
    </div>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

Object.assign(window, { SlideHead, SlideFoot, Eyebrow, TOTAL_SLIDES });
