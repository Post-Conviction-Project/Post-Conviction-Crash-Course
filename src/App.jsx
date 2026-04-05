import { useState, useEffect } from "react";

const teal = "#046878";
const tealLight = "#0a8fa5";
const dark = "#141C26";
const darkCard = "#1e2a38";
const darkBorder = "#2a3a4a";
const textMain = "#e8eef4";
const textMuted = "#8a9bb0";
const accent = "#f0a500";
const green = "#2ecc71";
const red = "#e74c3c";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${dark};
    color: ${textMain};
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
  }

  .app {
    min-height: 100vh;
    background: ${dark};
  }

  .hero {
    background: linear-gradient(135deg, #0d1620 0%, #1a2d3d 50%, #0d2030 100%);
    padding: 60px 24px 48px;
    text-align: center;
    border-bottom: 1px solid ${darkBorder};
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(4,104,120,0.12) 0%, transparent 60%);
    pointer-events: none;
  }

  .hero-badge {
    display: inline-block;
    background: rgba(4,104,120,0.2);
    border: 1px solid rgba(4,104,120,0.5);
    color: ${tealLight};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .hero h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(28px, 5vw, 52px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 16px;
    color: #fff;
  }

  .hero h1 span {
    color: ${teal};
  }

  .hero p {
    font-size: 16px;
    color: ${textMuted};
    max-width: 560px;
    margin: 0 auto 32px;
  }

  .progress-bar-wrap {
    max-width: 500px;
    margin: 0 auto;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: ${textMuted};
    margin-bottom: 8px;
  }

  .progress-track {
    height: 6px;
    background: rgba(255,255,255,0.08);
    border-radius: 3px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, ${teal}, ${tealLight});
    border-radius: 3px;
    transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
  }

  .nav-tabs {
    display: flex;
    overflow-x: auto;
    gap: 4px;
    padding: 16px 24px;
    background: #0f1923;
    border-bottom: 1px solid ${darkBorder};
    scrollbar-width: none;
  }

  .nav-tabs::-webkit-scrollbar { display: none; }

  .nav-tab {
    flex-shrink: 0;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s;
    white-space: nowrap;
    background: transparent;
    color: ${textMuted};
  }

  .nav-tab:hover {
    background: rgba(4,104,120,0.1);
    color: ${textMain};
    border-color: rgba(4,104,120,0.3);
  }

  .nav-tab.active {
    background: rgba(4,104,120,0.2);
    color: ${tealLight};
    border-color: ${teal};
  }

  .nav-tab.completed {
    color: ${green};
  }

  .nav-tab.completed::before {
    content: '✓ ';
  }

  .content {
    max-width: 760px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  .module-header {
    margin-bottom: 36px;
  }

  .module-number {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${teal};
    font-weight: 500;
    margin-bottom: 8px;
  }

  .module-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(22px, 4vw, 36px);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 12px;
  }

  .module-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  .module-intro {
    font-size: 16px;
    color: ${textMuted};
    border-left: 3px solid ${teal};
    padding-left: 16px;
  }

  .time-estimate {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 500;
    color: ${textMuted};
    background: rgba(255,255,255,0.05);
    border: 1px solid ${darkBorder};
    border-radius: 20px;
    padding: 3px 10px;
  }

  .section {
    margin-bottom: 36px;
  }

  .section h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section h3 .icon {
    font-size: 20px;
  }

  .section p {
    font-size: 15px;
    color: ${textMain};
    margin-bottom: 12px;
    line-height: 1.7;
  }

  .card {
    background: ${darkCard};
    border: 1px solid ${darkBorder};
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 16px;
  }

  .card-teal {
    border-left: 4px solid ${teal};
  }

  .card-amber {
    border-left: 4px solid ${accent};
    background: rgba(240,165,0,0.06);
    border-color: rgba(240,165,0,0.4);
  }

  .card-red {
    border-left: 4px solid ${red};
    background: rgba(231,76,60,0.06);
    border-color: rgba(231,76,60,0.3);
  }

  .card-green {
    border-left: 4px solid ${green};
    background: rgba(46,204,113,0.06);
    border-color: rgba(46,204,113,0.3);
  }

  .card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #fff;
  }

  .card p {
    font-size: 14px;
    color: ${textMain};
    margin: 0;
    line-height: 1.6;
  }

  .callout {
    background: rgba(4,104,120,0.1);
    border: 1px solid rgba(4,104,120,0.3);
    border-radius: 12px;
    padding: 20px 24px;
    margin: 24px 0;
  }

  .callout-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${tealLight};
    margin-bottom: 8px;
  }

  .callout p {
    font-size: 14px;
    color: ${textMain};
    margin: 0;
    line-height: 1.6;
  }

  .reality-check {
    background: rgba(240,165,0,0.08);
    border: 1px solid rgba(240,165,0,0.3);
    border-radius: 12px;
    padding: 20px 24px;
    margin: 24px 0;
  }

  .reality-check .rc-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${accent};
    margin-bottom: 8px;
  }

  .reality-check p {
    font-size: 14px;
    color: ${textMain};
    margin: 0 0 8px;
    line-height: 1.6;
  }

  .reality-check p:last-child { margin-bottom: 0; }

  .warning-card {
    background: rgba(127,29,29,0.3);
    border: 1px solid rgba(255,80,80,0.25);
    border-radius: 12px;
    padding: 20px 24px;
    margin: 16px 0;
  }

  .warning-card .wc-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,200,200,0.8);
    margin-bottom: 8px;
  }

  .warning-card p {
    font-size: 14px;
    color: rgba(255,255,255,0.9);
    margin: 0;
    line-height: 1.6;
  }

  .strickland-grid {
    display: grid;
    gap: 12px;
    margin: 16px 0;
  }

  .strickland-row {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 12px;
    align-items: start;
  }

  .s-prong {
    background: rgba(4,104,120,0.2);
    border: 1px solid rgba(4,104,120,0.4);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${tealLight};
    white-space: nowrap;
    text-align: center;
  }

  .s-yes {
    background: rgba(46,204,113,0.1);
    border: 1px solid rgba(46,204,113,0.3);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: ${textMain};
  }

  .s-no {
    background: rgba(231,76,60,0.1);
    border: 1px solid rgba(231,76,60,0.3);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: ${textMain};
  }

  .s-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
    opacity: 0.7;
  }

  .quiz-section {
    background: ${darkCard};
    border: 1px solid ${darkBorder};
    border-radius: 16px;
    padding: 28px;
    margin: 32px 0;
  }

  .quiz-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${accent};
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .quiz-q {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 16px;
  }

  .quiz-option {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid ${darkBorder};
    background: rgba(255,255,255,0.03);
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    color: ${textMain};
    font-size: 14px;
    line-height: 1.5;
  }

  .quiz-option:hover:not(:disabled) {
    border-color: rgba(4,104,120,0.5);
    background: rgba(4,104,120,0.1);
  }

  .quiz-option.correct {
    border-color: ${green};
    background: rgba(46,204,113,0.12);
    color: #fff;
  }

  .quiz-option.wrong {
    border-color: ${red};
    background: rgba(231,76,60,0.1);
    color: ${textMuted};
  }

  .quiz-option.revealed-correct {
    border-color: ${green};
    background: rgba(46,204,113,0.06);
  }

  .option-letter {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    margin-top: 1px;
  }

  .quiz-option.correct .option-letter {
    background: ${green};
    color: #fff;
  }

  .quiz-option.wrong .option-letter {
    background: ${red};
    color: #fff;
  }

  .quiz-feedback {
    margin-top: 16px;
    padding: 16px;
    border-radius: 10px;
    font-size: 14px;
    line-height: 1.6;
    animation: fadeIn 0.3s ease;
  }

  .quiz-feedback.correct-fb {
    background: rgba(46,204,113,0.1);
    border: 1px solid rgba(46,204,113,0.3);
    color: #a8f5c8;
  }

  .quiz-feedback.wrong-fb {
    background: rgba(231,76,60,0.1);
    border: 1px solid rgba(231,76,60,0.3);
    color: #f5a8a0;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .list-items {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 12px 0;
  }

  .list-items li {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-size: 14px;
    color: ${textMain};
    line-height: 1.6;
    padding-left: 20px;
    position: relative;
  }

  .list-items li::before {
    content: '→';
    color: ${teal};
    position: absolute;
    left: 0;
    top: 2px;
    flex-shrink: 0;
  }

  .list-items li .li-label {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
  }

  .list-items li .li-desc {
    color: ${textMain};
    font-size: 13px;
    line-height: 1.6;
    opacity: 0.88;
  }

  .module-nav {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid ${darkBorder};
  }

  .btn {
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    font-family: 'Poppins', sans-serif;
  }

  .btn-primary {
    background: ${teal};
    color: #fff;
  }

  .btn-primary:hover {
    background: ${tealLight};
    transform: translateY(-1px);
  }

  .btn-secondary {
    background: transparent;
    color: ${textMuted};
    border: 1px solid ${darkBorder};
  }

  .btn-secondary:hover {
    color: ${textMain};
    border-color: rgba(4,104,120,0.4);
  }

  .tag {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-right: 6px;
    margin-bottom: 4px;
  }

  .tag-rule {
    background: rgba(4,104,120,0.2);
    color: ${tealLight};
    border: 1px solid rgba(4,104,120,0.4);
  }

  .tag-case {
    background: rgba(240,165,0,0.15);
    color: ${accent};
    border: 1px solid rgba(240,165,0,0.3);
  }

  .tag-warning {
    background: rgba(231,76,60,0.15);
    color: #f08080;
    border: 1px solid rgba(231,76,60,0.3);
  }

  .divider {
    height: 1px;
    background: ${darkBorder};
    margin: 32px 0;
  }

  .checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 10px;
    background: rgba(255,255,255,0.03);
    border: 1px solid ${darkBorder};
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .checklist-item:hover {
    border-color: rgba(4,104,120,0.4);
  }

  .checklist-item.checked {
    background: rgba(46,204,113,0.06);
    border-color: rgba(46,204,113,0.3);
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 2px solid ${darkBorder};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    margin-top: 1px;
  }

  .checklist-item.checked .checkbox {
    background: ${green};
    border-color: ${green};
    color: #fff;
    font-size: 12px;
  }

  .checklist-item p {
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
  }

  .checklist-item .ci-note {
    font-size: 12px;
    color: ${textMuted};
    margin-top: 2px;
  }

  .score-banner {
    text-align: center;
    padding: 32px;
    background: ${darkCard};
    border: 1px solid ${darkBorder};
    border-radius: 16px;
    margin: 32px 0;
  }

  .score-banner .score-num {
    font-family: 'Poppins', sans-serif;
    font-size: 56px;
    font-weight: 700;
    color: ${teal};
    line-height: 1;
  }

  .score-banner p {
    color: ${textMuted};
    margin-top: 8px;
  }

  .could-would-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 16px 0;
  }

  @media (max-width: 500px) {
    .could-would-grid { grid-template-columns: 1fr; }
    .strickland-row { grid-template-columns: 1fr; }
  }

  .reference-footer {
    background: #0f1923;
    border-top: 2px solid #2a3a4a;
    padding: 40px 24px 60px;
  }
  .reference-footer-inner { max-width: 760px; margin: 0 auto; }
  .reference-footer h2 { font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .reference-footer .ref-subtitle { font-size: 13px; color: #8a9bb0; margin-bottom: 24px; line-height: 1.6; }
  .ref-tabs { display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 1px solid #2a3a4a; }
  .ref-tab { padding: 8px 20px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; background: transparent; color: #8a9bb0; border-bottom: 2px solid transparent; margin-bottom: -1px; font-family: 'Poppins', sans-serif; transition: all 0.2s; }
  .ref-tab.active { color: #0a8fa5; border-bottom-color: #046878; }
  .ref-tab:hover:not(.active) { color: #e8eef4; }
  .ref-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  .ref-card { background: #1e2a38; border: 1px solid #2a3a4a; border-radius: 12px; padding: 16px 20px; }
  .ref-card-name { font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3; margin-bottom: 4px; }
  .ref-card-citation { font-size: 11px; color: #0a8fa5; font-style: italic; margin-bottom: 8px; }
  .ref-card-holding { font-size: 13px; color: #e8eef4; line-height: 1.6; opacity: 0.88; }
  .ref-card-module { display: inline-block; font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #8a9bb0; background: rgba(255,255,255,0.05); border: 1px solid #2a3a4a; border-radius: 20px; padding: 2px 10px; margin-top: 10px; }
  .ref-section-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #046878; margin: 24px 0 12px; }
  .district-card { background: #1e2a38; border: 1px solid #2a3a4a; border-radius: 12px; overflow: hidden; margin-bottom: 8px; }
  .district-card-header { padding: 12px 20px; font-size: 13px; font-weight: 700; color: #fff; border-bottom: 1px solid #2a3a4a; }
  .district-card-body { padding: 14px 20px; display: flex; flex-direction: column; gap: 8px; }
  .district-row { display: flex; flex-direction: column; gap: 2px; }
  .district-case { font-size: 12px; font-weight: 600; color: #0a8fa5; font-style: italic; }
  .district-standard { font-size: 12px; color: #8a9bb0; }
  .district-result { font-size: 13px; color: #e8eef4; line-height: 1.5; }
  .ref-download-row { margin-top: 28px; text-align: center; }
`;

// ─── QUIZ COMPONENT ───
function Quiz({ id, question, options, correctIndex, explanation, onAnswer, answered }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    onAnswer(id, i === correctIndex);
  };

  const isCorrect = selected === correctIndex;

  return (
    <div className="quiz-section">
      <div className="quiz-label">⚡ Quick Check</div>
      <div className="quiz-q">{question}</div>
      <div className="quiz-options">
        {options.map((opt, i) => {
          let cls = "quiz-option";
          if (selected !== null) {
            if (i === correctIndex) cls += " revealed-correct";
            if (i === selected && selected === correctIndex) cls = "quiz-option correct";
            if (i === selected && selected !== correctIndex) cls = "quiz-option wrong";
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
              <span className="option-letter">{["A","B","C","D"][i]}</span>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className={`quiz-feedback ${isCorrect ? "correct-fb" : "wrong-fb"}`}>
          {isCorrect ? "✓ Correct! " : "✗ Not quite. "}{explanation}
        </div>
      )}
    </div>
  );
}

// ─── CHECKLIST COMPONENT ───
function Checklist({ items }) {
  const [checked, setChecked] = useState({});
  const toggle = (i) => setChecked(p => ({ ...p, [i]: !p[i] }));
  const count = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: textMuted }}>{count} of {items.length} reviewed</div>
        <div style={{ fontSize: 13, color: tealLight }}>{Math.round((count/items.length)*100)}%</div>
      </div>
      {items.map((item, i) => (
        <div key={i} className={`checklist-item ${checked[i] ? "checked" : ""}`} onClick={() => toggle(i)}>
          <div className="checkbox">{checked[i] ? "✓" : ""}</div>
          <div>
            <p>{item.text}</p>
            {item.note && <p className="ci-note">{item.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MODULES ───

const modules = [
  // ─────────────────────────────────────────
  // MODULE 1: INTRO
  // ─────────────────────────────────────────
  {
    id: 0,
    label: "Intro",
    title: "Welcome to Post-Conviction Land",
    subtitle: "What this is, what it isn't, and why it matters",
    estimatedTime: "5 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <p>You've probably heard the phrase "all appeals have been exhausted." In real life, that phrase is doing a <em>lot</em> of heavy lifting — and it's often wrong.</p>
          <p>Post-conviction relief is what happens <strong>after</strong> the direct appeal. It's a separate legal track that allows defendants to challenge their conviction or sentence based on things that either weren't in the trial record, or weren't known at the time.</p>
          <p>In Florida, the two main tools for this are <span className="tag tag-rule">Rule 3.850</span> and <span className="tag tag-rule">Rule 3.800</span>. Think of them as two different doors into the same building. We'll walk through both.</p>
        </div>

        <div className="section">
          <h3><span className="icon">🧭</span> How to Use This Training</h3>
          <p>This crash course is designed for everyone who touches a case at PCP — volunteers, paralegals, law students, and new staff alike. The goal is to give you enough framework to read a file intelligently, spot what matters, and know when to escalate.</p>
          <p>Your specific role will determine what you do with what you find. But everyone needs to understand the legal landscape before they can be useful in it.</p>

          <div className="card card-amber">
            <h4>🚩 Always escalate immediately if you find:</h4>
            <p>A deadline approaching that was not previously flagged · A case involving a juvenile life sentence · Evidence of law enforcement misconduct not previously raised · Anything that looks like an actual innocence claim · Cases involving minor victims or witnesses that require additional handling considerations</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🗺️</span> The Big Picture Timeline</h3>
          <div className="card card-teal">
            <h4>From Trial to Federal Court — The Roadmap</h4>
            <p><strong>1. Trial</strong> → Conviction and sentence<br/>
            <strong>2. Direct Appeal</strong> → Did the trial court make a legal error? (Record-based only)<br/>
            <strong>3. Rule 3.850 / 3.800</strong> → Constitutional violations, new evidence, illegal sentences<br/>
            <strong>3a. Rule 3.853</strong> → DNA testing — no time bar, can be filed at any time alongside other remedies<br/>
            <strong>3b. Rule 9.141(d)</strong> → Ineffective assistance of appellate counsel — filed in the DCA that heard the direct appeal, separate 2/4-year clock<br/>
            <strong>4. Florida Appellate Courts</strong> → If the trial court denies the motion, you appeal to the next level up — which Florida appellate court depends on which county the case came from<br/>
            <strong>5. Federal Habeas (§2254)</strong> → Last stop, and only after state remedies are fully exhausted</p>
          </div>
          <div className="callout">
            <div className="callout-label">⏱️ Why this order matters</div>
            <p>The federal court won't touch a case until every state avenue has been tried. And while those state motions are pending, the federal clock is paused — but it doesn't reset. More on that in Module 4.</p>
          </div>
          <div className="callout">
            <div className="callout-label">📎 About case and rule references in this training</div>
            <p>Throughout each module, case names and rule citations appear as highlighted tags. Use the <strong>Case & Rule Reference</strong> appendix at the bottom of this page to look up the full text of any authority cited — it includes holdings, citations, and module references for every case and rule in the training.</p>
          </div>
        </div>

        {/* EASTER EGG — Module 1 */}
        <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
          <p style={{color: textMuted, fontStyle: 'italic'}}>"What we've got here is a failure to communicate." — <em>Cool Hand Luke</em> (1967). Keep this in mind every time you're writing up a case summary. Clarity saves cases.</p>
        </div>
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 2: RULE 3.850
  // ─────────────────────────────────────────
  {
    id: 1,
    label: "Rule 3.850",
    title: "Rule 3.850 — The Swiss Army Knife",
    subtitle: "Constitutional violations, IAC, plea claims, and newly discovered evidence",
    estimatedTime: "20 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <p>Rule 3.850 is the workhorse of post-conviction practice. It covers constitutional violations that either couldn't be raised on direct appeal or weren't known at the time of trial.</p>
          <p>The default time limit is <strong>two years</strong> from when the judgment and sentence became "final" — meaning the direct appeal is over, or the time to appeal has run out. But there are exceptions. Important ones.</p>
        </div>

        <div className="section">
          <h3><span className="icon">⏰</span> The Time Bar & Its Exceptions</h3>
          <div className="card card-teal">
            <h4>Two-Year Rule</h4>
            <p>You have two years from when the conviction is final. Miss it and the motion is procedurally barred — the court won't even look at the merits.</p>
          </div>

          <p style={{marginTop:16}}>But the following claims get their <strong>own two-year window</strong> starting from the date the facts or law could reasonably have been discovered:</p>

          <ul className="list-items">
            <li><span className="li-label">Newly discovered evidence</span><span className="li-desc">Couldn't have been found with due diligence before.</span></li>
            <li><span className="li-label">New law of constitutional dimension</span><span className="li-desc">A court decision that changed the rules and applies retroactively.</span></li>
            <li><span className="li-label">Manifest injustice</span><span className="li-desc">Rare, but the courts recognize it in extreme circumstances.</span></li>
          </ul>
        </div>

        <Quiz
          id="q1_1"
          question="Your client's conviction became final in 2018. A witness just came forward in 2024 with information that could exonerate him. Is a 3.850 motion possible?"
          options={[
            "No — the two-year window closed in 2020",
            "Only if the client can prove actual innocence",
            "Yes — newly discovered evidence gets its own two-year window from discovery",
            "Yes, but only if there's DNA involved"
          ]}
          correctIndex={2}
          explanation="Newly discovered evidence restarts the clock. The two years runs from when the evidence could have been discovered with due diligence — not from when the conviction was final."
          onAnswer={onAnswer}
          answered={quiz["q1_1"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🔍</span> What Counts as "Newly Discovered"?</h3>
          <p>Not just "new to you." The standard (from <span className="tag tag-case">Jones v. State</span>) requires:</p>
          <ul className="list-items">
            <li><span className="li-label">Unknown at trial</span><span className="li-desc">The evidence must have been unknown to the defendant or counsel at the time of trial.</span></li>
            <li><span className="li-label">Could not have been discovered</span><span className="li-desc">Not findable through due diligence before trial.</span></li>
            <li><span className="li-label">Not merely cumulative</span><span className="li-desc">Not just more of the same — it has to actually matter and not merely repeat what was already before the jury.</span></li>
            <li><span className="li-label">Would probably produce an acquittal</span><span className="li-desc">At a new trial, this evidence would likely change the outcome.</span></li>
          </ul>

          <div className="reality-check">
            <div className="rc-label">⚠️ Reality Check</div>
            <p>"I found a new witness who says the same thing three other witnesses already said" — that's cumulative. Probably not enough.</p>
            <p>"A witness now says the key eyewitness lied, and here's the proof" — that's worth looking at.</p>
          </div>

          <div className="card card-teal" style={{marginTop:16}}>
            <h4>Categories to look for:</h4>
            <p>
              <strong>Untested DNA</strong> — biological evidence that was collected but never tested, or tested with older technology<br/><br/>
              <strong>New witnesses</strong> — someone who saw something and wasn't found before<br/><br/>
              <strong>Recantations</strong> — a witness takes back their trial testimony (courts are skeptical, but it can work)<br/><br/>
              <strong>Corrupt/discredited officer</strong> — the lead detective was later found to have planted evidence in other cases<br/><br/>
              <strong>Debunked expert science</strong> — bite mark evidence, hair microscopy, arson investigation methods that science has since rejected
            </p>
          </div>
        </div>

        {/* STAIRCASE CASE EXAMPLE */}
        <div className="reality-check" style={{marginTop: '24px'}}>
          <div className="rc-label">⚖️ Hypothetical: The Expert Who Wasn't</div>
          <p>
            A defendant is convicted of first-degree murder in 2003 and sentenced to life without parole.
            The prosecution's case rested heavily on a state crime lab analyst who testified as a blood
            spatter expert — describing patterns on the walls and stairs that he said proved the victim
            was beaten to death. The defense challenged his conclusions at trial, but the jury convicted.
            Direct appeal was denied.
          </p>
          <p style={{marginTop: '10px'}}>
            Years later, investigative reporting and an unrelated wrongful conviction case triggered a
            statewide audit of the same crime lab. The audit revealed the analyst had misrepresented his
            qualifications in court — his degree was in zoology, he had completed only two training courses
            in bloodstain analysis, and he had testified as an "expert" in only four bloodstain cases total,
            not the hundreds he implied. The audit found he had falsified or misstated evidence in
            <strong> 34 separate cases</strong> over his career. A judge later ruled he had committed perjury
            at this defendant's trial.
          </p>
          <p style={{marginTop: '10px'}}>
            In 2011 — <strong>eight years after conviction</strong> — the trial judge vacated the conviction
            and granted a new trial. The defendant was released on bail. Five more years of litigation followed.
            In 2017, facing retrial with the state's key witness disqualified and other evidence now
            inadmissible, the prosecution offered a plea to voluntary manslaughter. The defendant entered
            an <strong>Alford plea</strong> — maintaining innocence while acknowledging the prosecution had
            enough evidence to risk conviction — and was released on time served after <strong>15 years</strong>.
          </p>
        </div>

        <Quiz
          id="q1_5"
          question="When reviewing a post-conviction case that lost at trial on forensic evidence, what should you be looking for beyond the four corners of the trial record?"
          options={[
            "Nothing — if the evidence was admitted at trial, it has been tested and validated",
            "Whether the defense hired a competing expert at trial",
            "Whether the state's expert witness has been discredited, disciplined, or found to have falsified evidence in other cases after the conviction",
            "Whether the forensic evidence was the only basis for conviction"
          ]}
          correctIndex={2}
          explanation={
            <span>
              Expert witnesses don't get disqualified at trial — they get exposed years later, often in
              unrelated cases. Your job during case review is to ask: <em>what happened to this witness
              after the trial?</em> Has the analyst been fired? Disciplined? Implicated in a lab audit?
              Had their methodology rejected in subsequent cases? That's newly discovered evidence — and
              it can be the entire basis for post-conviction relief even decades after conviction.
              <span style={{display:'block', marginTop:'10px', padding:'10px 12px',
                background:'rgba(4,104,120,0.15)', borderRadius:'6px', borderLeft:'3px solid #046878'}}>
                <strong>This was a real case.</strong> The scenario above is <em>State v. Peterson</em> (Durham,
                NC, 2003) — known publicly as "The Staircase." Blood spatter analyst Duane Deaver was the
                state's key expert. He was later fired after an audit found he falsified evidence in 34 cases
                and committed perjury in Peterson's trial. Peterson was released in 2017 after 15 years via
                Alford plea to voluntary manslaughter.
              </span>
            </span>
          }
          onAnswer={onAnswer}
          answered={quiz["q1_5"]}
        />

        {/* EASTER EGG — Module 2 */}
        <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
          <p style={{color: textMuted, fontStyle: 'italic'}}>"However, in 1964, the correct ignition timing would be four degrees before top-dead-center." — <em>My Cousin Vinny</em> (1992). Know your subject cold. Specificity wins.</p>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">⚖️</span> Strickland — The IAC Test</h3>
          <p>Ineffective Assistance of Counsel (IAC) is one of the most common 3.850 claims. The standard comes from <span className="tag tag-case">Strickland v. Washington</span> (1984), and it has three working parts. All three must be met — and courts make this deliberately hard.</p>

          <div className="strickland-grid">
            <div className="strickland-row">
              <div className="s-prong">Prong 1</div>
              <div className="s-yes">
                <div className="s-label">The Question</div>
                Did the attorney actually screw up?
              </div>
              <div className="s-no">
                <div className="s-label">The Standard</div>
                Not just a bad strategy call — <em>objectively unreasonable</em> performance below professional norms
              </div>
            </div>
            <div className="strickland-row">
              <div className="s-prong">Prong 2</div>
              <div className="s-yes">
                <div className="s-label">The Question</div>
                Would the outcome have been different?
              </div>
              <div className="s-no">
                <div className="s-label">The Standard</div>
                <em>Reasonable probability</em> the result would have differed — not certainty, not just "possible"
              </div>
            </div>
            <div className="strickland-row">
              <div className="s-prong">Prong 3</div>
              <div className="s-yes">
                <div className="s-label">The Question</div>
                Was the defendant actually harmed?
              </div>
              <div className="s-no">
                <div className="s-label">The Standard</div>
                The prejudice must be concrete and connect directly to the error
              </div>
            </div>
          </div>

          <div className="reality-check" style={{marginTop:20}}>
            <div className="rc-label">⚠️ The Brutal Truth</div>
            <p>You can prove Prong 1 and Prong 2 and <strong>still lose</strong> if Prong 3 doesn't land. A court might say: yes, the attorney was terrible, and yes, it probably affected things — but not in a way that changed the ultimate result. Motion denied.</p>
            <p>The system is set up to give defense attorneys a lot of deference. That's intentional. Courts call bad decisions "strategy" more often than they should.</p>
          </div>

          <div style={{marginTop:20}}>
            <div className="card card-green">
              <h4>✓ Example: Probably survives all three prongs</h4>
              <p>Attorney sleeps through key portions of trial testimony. Client is convicted. Prong 1: yes. Prong 2: yes. Prong 3: yes — the missed testimony was central to the verdict.</p>
            </div>
            <div className="card card-red" style={{marginTop:8}}>
              <h4>✗ Example: Fails on Prong 3</h4>
              <p>Attorney fails to object to one hearsay statement. But five other witnesses said the same thing. Prong 1: arguably yes. Prong 2: maybe. Prong 3: probably not — the evidence was cumulative. The outcome was the same either way.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">📋</span> Common IAC Examples — What to Flag</h3>
          <p>Not every attorney failure is a winning IAC claim, but these are the patterns that actually move the needle. When you're reading a file, these are the things to circle:</p>

          <ul className="list-items">
            <li>
              <span className="li-label">Failed to move for mistrial when the Golden Rule was violated</span>
              <span className="li-desc">The Golden Rule is when a prosecutor asks jurors to put themselves in the victim's shoes. That's improper. If it happened and counsel didn't object or move for mistrial, that's a flag.</span>
            </li>
            <li>
              <span className="li-label">Failed to proffer excluded testimony</span>
              <span className="li-desc">If the judge excluded a witness or evidence, counsel was required to proffer what that testimony would have been for the record. No proffer = the issue is waived on appeal. That's on the attorney.</span>
            </li>
            <li>
              <span className="li-label">Failed to file a motion to suppress or dismiss</span>
              <span className="li-desc">Was there an illegal search? A constitutional violation in the arrest? If so, did anyone file a motion? If not, why not? No strategic reason = IAC.</span>
            </li>
            <li>
              <span className="li-label">Failed to investigate or disclose an alibi</span>
              <span className="li-desc">If the client told their attorney "I was somewhere else and here's who can prove it," and counsel never followed up, that's textbook IAC on Prong 1. Whether it survives Prong 3 depends on how strong the alibi was.</span>
            </li>
            <li>
              <span className="li-label">Failed to communicate a plea offer <span className="tag tag-case">Missouri v. Frye</span> <span className="tag tag-case">Lafler v. Cooper</span></span>
              <span className="li-desc">The state extended a plea deal and the attorney never told the client, or told them too late. Defendants have a Sixth Amendment right to be informed of plea offers. This is a big one.</span>
            </li>
            <li>
              <span className="li-label">Failed to object to improper closing argument</span>
              <span className="li-desc">Vouching, burden-shifting, inflammatory statements. If the prosecutor said something that crossed the line and counsel sat on their hands, that's worth noting.</span>
            </li>
            <li>
              <span className="li-label">Failed to request a limiting instruction</span>
              <span className="li-desc">When prejudicial evidence comes in for a limited purpose, counsel should ask the judge to instruct the jury on how to use it. Silence can be IAC.</span>
            </li>
            <li>
              <span className="li-label">Conflict of interest</span>
              <span className="li-desc">Attorney was simultaneously representing a co-defendant, or had a financial relationship with a witness. If there was an actual conflict that affected the representation, that goes in a 3.850.</span>
            </li>
          </ul>
        </div>

        <Quiz
          id="q1_2"
          question="The lead detective in your client's 1998 murder conviction was fired in 2022 for fabricating evidence in three other cases. This was just discovered. Which of the following is NOT required for this to support a 3.850 motion?"
          options={[
            "The misconduct wasn't known and couldn't have been found before",
            "The detective's role was significant — not just a side witness",
            "The defendant must have been completely innocent",
            "The new evidence would probably change the outcome at a new trial"
          ]}
          correctIndex={2}
          explanation="You don't have to prove actual innocence to file a 3.850 — you have to show the new evidence would probably produce an acquittal. Those are different standards. Actual innocence is a much higher bar used in narrow federal contexts."
          onAnswer={onAnswer}
          answered={quiz["q1_2"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🤝</span> IAC in Plea Cases — Different Rules</h3>
          <p>Most of the IAC framework above assumes a trial. But a lot of convictions come from pleas — and IAC claims on plea cases have a different standard.</p>

          <div className="card card-teal">
            <h4>The Plea IAC Standard</h4>
            <p>To win an IAC claim on a case that ended in a plea, it's not enough to show the attorney was bad. You have to show that <strong>but for counsel's deficient performance, the defendant would have gone to trial</strong> — or rejected a plea and taken a better one.</p>
          </div>

          <div className="reality-check" style={{marginTop:16}}>
            <div className="rc-label">⚠️ Why This Is Harder Than It Sounds</div>
            <p>The client almost always says "I never would have pled guilty if I'd known X." Courts are skeptical of that claim made years later from a prison cell. You need more than just the client's word.</p>
            <p>What helps: evidence that the client was actively asking about trial options, that the attorney gave provably wrong legal advice (e.g., told the client a charge was a misdemeanor when it was a felony), or that the client pled immediately after the bad advice with no gap to reconsider.</p>
            <p>What makes it harder: the state's offer was objectively good, or the alternative (trial) was objectively risky — that cuts <em>against</em> the claim that they'd have gone to trial. Flag this when you see it.</p>
          </div>

          <ul className="list-items">
            <li>
              <span className="li-label">Wrong advice about immigration consequences <span className="tag tag-case">Padilla v. Kentucky</span></span>
              <span className="li-desc">That's IAC. Big one for non-citizen clients.</span>
            </li>
            <li>
              <span className="li-label">Failed to explain the elements of the charge</span>
              <span className="li-desc">Client didn't understand what they were admitting to.</span>
            </li>
            <li>
              <span className="li-label">Never conveyed the state's plea offer</span>
              <span className="li-desc">Client pled to worse terms not knowing a better deal was on the table.</span>
            </li>
            <li>
              <span className="li-label">Gave incorrect sentencing advice</span>
              <span className="li-desc">Told client they'd get probation, client got 10 years.</span>
            </li>
          </ul>
        </div>

        <Quiz
          id="q1_3"
          question="Defense counsel failed to investigate and call an alibi witness who would have placed the defendant 40 miles from the crime scene. Counsel's reason: 'I just didn't get around to it.' Which Strickland prongs are clearly met?"
          options={[
            "Prong 1 only — the attorney was deficient but we can't know about the others yet",
            "Prongs 1 and 2 — but Prong 3 needs more investigation",
            "All three — this is a slam dunk",
            "None — courts give wide deference to trial strategy"
          ]}
          correctIndex={1}
          explanation="Failing to investigate an alibi witness with no strategic reason is objectively unreasonable (Prong 1). A witness placing the defendant 40 miles away probably would have changed the outcome (Prong 2). But Prong 3 — actual prejudice — requires looking at the whole trial record. What else was there? How strong was the state's case otherwise? Don't count your chickens."
          onAnswer={onAnswer}
          answered={quiz["q1_3"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🚨</span> Brady/Giglio Violations</h3>
          <p><span className="tag tag-case">Brady v. Maryland</span> says the state must disclose evidence favorable to the defendant. <span className="tag tag-case">Giglio v. United States</span> extends that to deals made with witnesses — if a key witness got a deal for their testimony, you're entitled to know.</p>

          <ul className="list-items">
            <li>
              <span className="li-label">Brady <span className="tag tag-case">Brady v. Maryland</span></span>
              <span className="li-desc">State hid exculpatory evidence — DNA, inconsistent statements, alibi information.</span>
            </li>
            <li>
              <span className="li-label">Giglio <span className="tag tag-case">Giglio v. United States</span></span>
              <span className="li-desc">Witness lied about getting a deal, or the state didn't disclose the deal existed.</span>
            </li>
            <li>
              <span className="li-label">Materiality standard</span>
              <span className="li-desc">Material if there's a reasonable probability disclosure would have changed the outcome.</span>
            </li>
          </ul>

          <div className="callout">
            <div className="callout-label">🔎 What to look for in files</div>
            <p>Jailhouse informants with suspiciously light sentences afterward. Witnesses with pending charges that quietly disappeared. Lab reports that weren't in the defense file. Victim statements that contradict the police report.</p>
          </div>
        </div>

        <Quiz
          id="q1_4"
          question="Which of the following would NOT typically support a Brady or Giglio claim?"
          options={[
            "The state's key witness had pending drug charges that were dropped after trial — the defense didn't know",
            "A police report contradicting the eyewitness account was in the state's file but never given to defense",
            "The defendant's own attorney made a deal with prosecutors without telling the client",
            "A lab analyst's notes showed inconclusive results, but the report given to defense said 'positive match'"
          ]}
          correctIndex={2}
          explanation="Brady and Giglio are about prosecution misconduct — the state suppressing or misrepresenting evidence. An attorney making unauthorized deals is an IAC (Strickland) issue, not a Brady/Giglio violation. Different doctrine, different motion strategy."
          onAnswer={onAnswer}
          answered={quiz["q1_4"]}
        />
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 3: RULE 3.800
  // ─────────────────────────────────────────
  {
    id: 2,
    label: "Rule 3.800",
    title: "Rule 3.800 — When the Sentence Is Just Wrong",
    subtitle: "Illegal sentences, no time bar, and the errors that sneak through",
    estimatedTime: "15 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <p>Rule 3.800 is narrower than 3.850 but has one massive advantage: <strong>no time limit.</strong> If a sentence is illegal on its face, it can be challenged at any time.</p>
          <p>The catch is that "illegal sentence" has a specific meaning. Not every bad sentence qualifies — it has to be something the judge had <em>no legal authority</em> to impose, not just something that was wrong or unfair.</p>
        </div>

        <div className="section">
          <h3><span className="icon">📋</span> Common 3.800 Scenarios</h3>
          <ul className="list-items">
            <li><span className="li-label">Sentence exceeds the statutory maximum</span><span className="li-desc">Judge gave 30 years on a charge capped at 15.</span></li>
            <li><span className="li-label">Score sheet errors</span><span className="li-desc">The guidelines calculation was wrong, which affected the range.</span></li>
            <li><span className="li-label">Merger / double jeopardy</span><span className="li-desc">Defendant was sentenced on two counts that should have been one.</span></li>
            <li><span className="li-label">Upward departure without written findings</span><span className="li-desc">Judge went above guidelines with no departure order.</span></li>
            <li><span className="li-label">Retroactive statutory or case law changes</span><span className="li-desc"><em>Miller v. Alabama</em> — mandatory life without parole for juveniles is unconstitutional — is the big one.</span></li>
            <li><span className="li-label">PREA / gain time issues</span><span className="li-desc">Credits that weren't applied correctly.</span></li>
          </ul>

          <div className="callout">
            <div className="callout-label">📎 The Florida Departure Requirement</div>
            <p>In Florida, if a judge sentences above the guidelines, they must issue a written departure order with specific findings. No written order = illegal sentence, full stop — even if the judge had valid reasons in their head. The paperwork is the law.</p>
          </div>
        </div>

        <Quiz
          id="q2_1"
          question="A judge sentences your client to 25 years for a second-degree felony. The statutory maximum is 15 years. No departure order was filed. Which rule applies?"
          options={[
            "Rule 3.850 — this is a constitutional violation",
            "Rule 3.800 — the sentence exceeds the statutory maximum and no departure order exists",
            "Neither — the time to challenge this has passed",
            "Both — file under both rules simultaneously"
          ]}
          correctIndex={1}
          explanation="A sentence that exceeds the statutory maximum is illegal on its face — that's 3.800 territory. And 3.800 has no time bar, so it doesn't matter when this was sentenced. The missing departure order compounds it further."
          onAnswer={onAnswer}
          answered={quiz["q2_1"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🧮</span> Harmless Error — The Concept That Kills Claims</h3>
          <p>You'll hear "harmless error" constantly in post-conviction work. It's the doctrine courts use to say: <em>yes, there was an error, but it didn't matter.</em></p>

          <div className="card card-teal">
            <h4>The Basic Test</h4>
            <p>Would the result have been the same even without the error? If yes — harmless. If there's a reasonable probability the outcome would have differed — not harmless, and the error matters.</p>
          </div>

          <p style={{marginTop:16}}>For constitutional errors, the <strong>state bears the burden</strong> of proving the error was harmless beyond a reasonable doubt. That's a high bar — which is why the state fights hard to establish harmlessness.</p>

          <div className="card card-teal" style={{marginTop:8}}>
            <h4>Structural Error — The Exception</h4>
            <p>A narrow category of errors so fundamental that harmless error analysis doesn't apply at all. The most obvious example: defendant had no lawyer at all. There's no universe in which that's harmless. These are rare but worth flagging.</p>
          </div>
        </div>

        <div className="section">
          <h3><span className="icon">⚡</span> Could Have vs. Would Have — This Is the One</h3>
          <p>This distinction is subtle but it comes up all the time in sentencing challenges, and getting it wrong means losing a motion that could have won.</p>

          <div className="could-would-grid">
            <div className="card card-amber">
              <h4>☐ "Could Have"</h4>
              <p>The judge had the <em>legal authority</em> to impose the same sentence even without the error. The sentence was within the permissible range regardless.</p>
              <p style={{marginTop:8, fontSize:13, color:textMuted}}>Courts often use this to find harmlessness. "Even if the scoresheet was wrong, the sentence still falls within the corrected range." Game over.</p>
            </div>
            <div className="card card-green">
              <h4>☐ "Would Have"</h4>
              <p>But <em>would this judge, on this record</em>, actually have sentenced the same way without the error?</p>
              <p style={{marginTop:8, fontSize:13, color:textMuted}}>This is the harder, more honest question — and the one that supports a resentencing claim. If the error affected the guidelines range or the departure findings, the judge might have done something different.</p>
            </div>
          </div>

          <div className="reality-check" style={{marginTop:4}}>
            <div className="rc-label">⚠️ When Each Standard Applies</div>
            <p><strong>"Could have"</strong> tends to govern statutory sentencing errors — did the judge have the legal authority to impose this sentence even if the calculation was off?</p>
            <p><strong>"Would have"</strong> governs constitutional errors and upward departures — <em>Alleyne/Apprendi</em> issues, findings that should have gone to a jury, departure orders that require specific factual findings. Those require the court to ask what <em>this judge</em> would actually have done.</p>
            <p><strong>The practical argument:</strong> If the scoresheet error bumped the recommended range up by 5 years and the judge sentenced at the low end of the (wrong) range — you can argue the judge was anchored to the guidelines and <em>would not have</em> given the same sentence on the corrected sheet.</p>
          </div>
        </div>

        <Quiz
          id="q2_2"
          question="A scoresheet error inflated the recommended sentence by 36 months. The judge sentenced at the low end of the (incorrectly calculated) range, noted she was 'following the guidelines closely,' and made no departure findings. On a corrected scoresheet, the same sentence would be an upward departure requiring written findings. What's the strongest argument?"
          options={[
            "Harmless — the judge could have sentenced to the same term under the correct guidelines",
            "Not harmless — the judge anchored to the guidelines and would not have departed upward without findings",
            "Harmless — the judge has discretion to sentence anywhere in the range",
            "Not harmless — any scoresheet error automatically requires resentencing"
          ]}
          correctIndex={1}
          explanation="This is the 'would have' argument at its strongest. The judge's own words ('following the guidelines closely') plus the lack of departure findings suggests she was not exercising independent upward discretion. On the correct scoresheet, the same sentence requires a departure order she didn't write and probably didn't intend to write. Strong resentencing claim."
          onAnswer={onAnswer}
          answered={quiz["q2_2"]}
        />

        <div className="divider" />

        {/* DISTRICT SPLIT SECTION */}
        <div className="section">
          <h3><span className="icon">⚠️</span> When Counts Get Vacated — The District Split</h3>
          <p>One of the most dangerous traps in 3.800 practice involves cases where a conviction on one or more counts is vacated after sentencing. You might assume that vacating a count automatically triggers resentencing. In some Florida districts, you'd be right. In others, you'd lose. The framework depends entirely on which DCA your case is in and which procedural vehicle you're using.</p>

          <div className="ref-section-label">Background Rules — Florida Supreme Court</div>

          <div className="district-card">
            <div className="district-card-header" style={{borderLeft: `4px solid ${teal}`}}>Florida Supreme Court — Rule 3.850 Scoresheet Errors</div>
            <div className="district-card-body">
              <div className="district-row">
                <span className="district-case">State v. Anderson, 905 So. 2d 111 (Fla. 2005)</span>
                <span className="district-result">Timely Rule 3.850 scoresheet-error motions use the "would-have-been-imposed" standard — more favorable to defendants. The question is whether this judge would actually have sentenced differently on a corrected scoresheet.</span>
              </div>
            </div>
          </div>

          <div className="district-card">
            <div className="district-card-header" style={{borderLeft: `4px solid ${accent}`}}>Florida Supreme Court — Rule 3.800(a) Scoresheet Errors</div>
            <div className="district-card-body">
              <div className="district-row">
                <span className="district-case">Brooks v. State, 969 So. 2d 238 (Fla. 2007)</span>
                <span className="district-result">Rule 3.800(a) scoresheet-error motions use the stricter "could-have-been-imposed" standard. If the same sentence could legally have been imposed on a corrected scoresheet, relief is denied. This is the wall most 3.800 clients hit.</span>
              </div>
            </div>
          </div>

          <div className="ref-section-label" style={{marginTop: '24px'}}>District Court Split — Vacatur and Resentencing</div>

          <div className="district-card">
            <div className="district-card-header" style={{borderLeft: `4px solid #38bdf8`}}>Second District</div>
            <div className="district-card-body">
              <div className="district-row">
                <span className="district-case">Negron Gil de Rubio v. State, 272 So. 3d 811 (Fla. 2d DCA 2019)</span>
                <span className="district-standard">Untimely 3.850 / 3.800(a) motion → "could-have-been-imposed"</span>
                <span className="district-result">If the motion is styled under Rule 3.800(a) and the same sentence could legally still have been imposed on remaining convictions, relief is denied. The 2d DCA applies the stricter Brooks framework in this posture.</span>
              </div>
              <div className="district-row" style={{marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${darkBorder}`}}>
                <span className="district-case">Fernandez v. State, 199 So. 3d 500 (Fla. 2d DCA 2016)</span>
                <span className="district-standard">Vacatur changes scoresheet → resentencing generally required</span>
                <span className="district-result">Where vacating a conviction changes the scoresheet, the defendant is generally entitled to resentencing on a corrected scoresheet. The key distinction from Negron is procedural timing and which vehicle is used.</span>
              </div>
            </div>
          </div>

          <div className="district-card">
            <div className="district-card-header" style={{borderLeft: `4px solid ${green}`}}>Fourth District</div>
            <div className="district-card-body">
              <div className="district-row">
                <span className="district-case">Cox v. State, 192 So. 3d 581 (Fla. 4th DCA 2016)</span>
                <span className="district-standard">Vacatur → resentencing required, no harmless error analysis</span>
                <span className="district-result">Vacatur of a conviction requires resentencing with a corrected scoresheet. The 4th DCA does not apply the "could-have-been-imposed" framework to vacatur situations. The defendant gets resentenced because the sentence is built on a now-invalid conviction.</span>
              </div>
            </div>
          </div>

          <div className="district-card">
            <div className="district-card-header" style={{borderLeft: `4px solid ${accent}`}}>Fifth District</div>
            <div className="district-card-body">
              <div className="district-row">
                <span className="district-case">Pierce v. State, 281 So. 3d 569 (Fla. 5th DCA 2019)</span>
                <span className="district-standard">Vacatur → resentencing required (aligns with 4th DCA)</span>
                <span className="district-result">Resentencing is required after postconviction vacatur because the sentence must be based on remaining valid convictions. The 5th DCA aligns with the 4th DCA approach — not the stricter 2d DCA framework.</span>
              </div>
            </div>
          </div>

          <div className="reality-check" style={{marginTop: '16px'}}>
            <div className="rc-label">⚠️ The Practical Takeaway</div>
            <p>The same facts can produce opposite outcomes depending on which DCA has jurisdiction. A client in the 4th or 5th DCA whose conviction was vacated likely gets resentencing. The same client in the 2d DCA — using a 3.800(a) motion after the 3.850 clock has run — faces the "could-have-been-imposed" wall. Geography and procedural timing are everything.</p>
          </div>

          <div className="callout">
            <div className="callout-label">📋 Fact Pattern — Read Carefully</div>
            <p>
              A defendant is convicted of three separate counts and sentenced as a
              Habitual Felony Offender (HFO). Count 1: 50 years as an HFO (first degree
              felony). Count 2: 50 years as an HFO with a 15-year minimum mandatory.
              Count 3: 15 years. All sentences run concurrent.
            </p>
            <p style={{marginTop: '8px'}}>
              On direct appeal, all convictions and sentences are affirmed. Defendant
              then files a post-conviction IAC claim, which is denied at the trial court
              level. On appeal, the denial is reversed in part — the conviction on
              Count 3 is stricken. Subsequently, in response to a separate 3.850 motion,
              the trial court vacates the conviction and sentence on Count 2. An amended
              judgment and sentence is entered reflecting a single HFO conviction on
              Count 1 only. No new scoresheet is calculated. Defendant is not brought
              back for resentencing. Defendant does not appeal the amended judgment
              and sentence.
            </p>
            <p style={{marginTop: '8px'}}>
              Defendant is now serving 50 years on Count 1 alone — a first degree
              felony — with no new scoresheet and no resentencing hearing.
            </p>
          </div>
        </div>

        <Quiz
          id="q2_4"
          question="Two of the defendant's three convictions are gone. He's serving 50 years on Count 1 with no new scoresheet. His attorney files a Rule 3.800 motion arguing he's entitled to resentencing. Is he right?"
          options={[
            "Yes — when convictions are vacated the defendant is automatically entitled to resentencing",
            "No — 50 years is within the HFO range for a first degree felony so there's nothing to challenge",
            "It depends on which Florida district the case is in",
            "Only if the scoresheet error would have changed the guidelines range"
          ]}
          correctIndex={2}
          explanation="This is the district split. In the Second DCA, courts apply a harmless error analysis under the 'could-have-been-imposed' standard — if the sentence could still legally have been imposed on the remaining conviction, resentencing is denied. A 50-year HFO sentence on a first degree felony is within the permissible range, so the 2d DCA would likely affirm. In the Fourth DCA, vacatur of a conviction requires resentencing with a corrected scoresheet, full stop — no harmless error analysis. Cox v. State, 192 So. 3d 581 (Fla. 4th DCA 2016). Where your client's case sits geographically determines which framework applies. This is not academic — it is the difference between a resentencing hearing and a denial."
          onAnswer={onAnswer}
          answered={quiz["q2_4"]}
        />

        <Quiz
          id="q2_5"
          question="The defendant didn't appeal the amended judgment and sentence. His attorney now wants to pursue resentencing through a 3.850 motion. Is that still available?"
          options={[
            "No — by not appealing the amended judgment and sentence he waived all future relief",
            "Yes — 3.850 is always available after a conviction",
            "It depends on when the amended judgment and sentence became final and whether the two-year clock has run",
            "Only if he can show newly discovered evidence"
          ]}
          correctIndex={2}
          explanation="When an amended judgment and sentence is entered, it can reset the finality clock for 3.850 purposes — but only if the two-year window hasn't closed. This is not a minor procedural detail. In Negron Gil de Rubio v. State, 272 So. 3d 811 (Fla. 2d DCA 2019), the court's analysis turned in part on whether the judgment and sentence had been formally entered and whether the 3.850 timeframe had run. A co-defendant in that same underlying matter received a different outcome precisely because the procedural posture on his amended judgment and sentence differed — the paperwork timing determined who got relief and who didn't. When you're reviewing a case with vacated counts and an amended J&S, the first thing you do is find out exactly when that document was entered and whether it was appealed."
          onAnswer={onAnswer}
          answered={quiz["q2_5"]}
        />

        <Quiz
          id="q2_6"
          question="You're reviewing this case. You're in the Second DCA. The amended judgment and sentence was entered two and a half years ago and was never appealed. The 3.850 clock has run. The defendant is serving 50 years on a first degree felony with no new scoresheet. What's your honest assessment?"
          options={[
            "Strong case — untested scoresheet error is always grounds for relief",
            "File a 3.800 motion — the 2d DCA will order resentencing because the scoresheet was never recalculated",
            "Difficult posture — the 2d DCA's harmless error framework will likely defeat the 3.800 claim, the 3.850 clock has run, and without a vehicle to get this in front of the 4th DCA or the Florida Supreme Court your options are limited",
            "File in federal court under habeas — the district split creates a constitutional due process violation"
          ]}
          correctIndex={2}
          explanation="This is the hard truth volunteers need to understand about the district split. In the 2d DCA, the harmless error analysis under the could-have-been-imposed standard is a real wall. If 50 years is within the HFO range for a first degree felony — and it is — the court will likely affirm even without a new scoresheet. With the 3.850 clock expired and no appeal of the amended J&S, your procedural options are severely limited. The right answer isn't 'file everything and see what sticks' — it's an honest case assessment that tells the client where they actually stand. Identifying a case as a difficult or closed avenue is just as important as identifying a viable claim. Not every case has a path forward, and part of your job in case review is knowing the difference."
          onAnswer={onAnswer}
          answered={quiz["q2_6"]}
        />

        <Quiz
          id="q2_3"
          question="Which of the following is NOT a valid 3.800 claim?"
          options={[
            "Defendant was sentenced to life without parole for a crime committed at age 16",
            "The judge miscalculated the guidelines scoresheet, resulting in a higher recommended range",
            "Defense counsel failed to argue for a lower sentence at sentencing",
            "Two counts should have merged under double jeopardy but were sentenced separately"
          ]}
          correctIndex={2}
          explanation="Counsel's failure to advocate effectively at sentencing is an IAC claim — that goes in a 3.850. Rule 3.800 is about the legality of the sentence itself, not the process that led to it. The others are all face-value illegality: Miller violation (A), scoresheet error (B), merger/double jeopardy (D)."
          onAnswer={onAnswer}
          answered={quiz["q2_3"]}
        />

        {/* EASTER EGG — Module 3 */}
        <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
          <p style={{color: textMuted, fontStyle: 'italic'}}>"Get busy living, or get busy dying." — <em>The Shawshank Redemption</em> (1994). Find the path forward, or document honestly that there isn't one. Both matter.</p>
        </div>
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 4: THE CLOCK
  // ─────────────────────────────────────────
  {
    id: 3,
    label: "The Clock",
    title: "Time Rules — The Clock Is Not Your Friend",
    subtitle: "Filing windows, tolling, exhaustion, and the federal deadline",
    estimatedTime: "10 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <p>Post-conviction law is merciless about deadlines. Miss one and it doesn't matter how good your claim is — the door is closed. Understanding the timing is just as important as understanding the substantive law.</p>
        </div>

        <div className="section">
          <h3><span className="icon">📅</span> Florida State Deadlines</h3>
          <div className="card card-teal">
            <h4>Rule 3.850</h4>
            <p><strong>2 years</strong> from when judgment and sentence became "final"<br/>
            <em>Final</em> = direct appeal decided, or time to appeal expired without one filed<br/><br/>
            <strong>Exception windows (each gets its own 2 years from discovery):</strong><br/>
            → Newly discovered evidence: 2 years from when it could have been found with due diligence<br/>
            → New retroactive law: 2 years from when the decision became final</p>
          </div>
          <div className="card card-teal" style={{marginTop:12}}>
            <h4>Rule 3.800</h4>
            <p><strong>No time bar.</strong> Can be raised at any time — even decades later. Courts have entertained 3.800 motions on 30-year-old sentences.</p>
          </div>
        </div>

        <Quiz
          id="q3_1"
          question="Your client's conviction became final on January 1, 2020. He discovers in March 2023 that the state withheld a lab report that contradicted the state's expert. The last day to file a 3.850 based on this new evidence is approximately:"
          options={[
            "January 1, 2022 — two years from when the conviction was final",
            "March 2025 — two years from when the new evidence was discovered",
            "There is no deadline — Brady violations have no time bar",
            "The claim is already barred — he should have found this earlier"
          ]}
          correctIndex={1}
          explanation="Newly discovered evidence (including Brady material discovered post-conviction) triggers its own two-year window from the date of discovery. The general two-year bar from finality doesn't apply here. The clock started running in March 2023."
          onAnswer={onAnswer}
          answered={quiz["q3_1"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🇺🇸</span> Federal Habeas — The Last Stop</h3>
          <p>Once state remedies are exhausted, a defendant can file a federal habeas petition under <span className="tag tag-rule">28 U.S.C. § 2254</span>. This is the federal court saying: did the state court violate the U.S. Constitution?</p>

          <div className="card card-amber">
            <h4>The AEDPA Deadline</h4>
            <p>Under the Antiterrorism and Effective Death Penalty Act (AEDPA), there is a <strong>one-year deadline</strong> to file a federal habeas petition. The clock starts when the state conviction becomes final on direct review.</p>
          </div>

          <p style={{marginTop:16}}>But here's the critical part that confuses everyone:</p>

          <div className="card card-green" style={{marginTop:8}}>
            <h4>Tolling While State Motions Are Pending</h4>
            <p>The federal one-year clock is <strong>paused (tolled)</strong> while a properly filed state post-conviction motion is pending. But — and this is important — it <strong>does not reset</strong>. It picks up exactly where it left off when the state motion is resolved.</p>
          </div>

          <div className="reality-check" style={{marginTop:16}}>
            <div className="rc-label">⚠️ The Math Problem That Ends Federal Cases</div>
            <p><strong>Example:</strong> Conviction final January 1, 2020. AEDPA clock starts. Client waits 8 months, then files a 3.850 in September 2020. At that point, 8 months of the federal year have already run. Clock pauses.</p>
            <p>The 3.850 is denied. Client gets a final state ruling January 2023. Federal clock <strong>resumes</strong> — with only 4 months left. If client waits 5 months to file federal, the petition is time-barred. Forever.</p>
            <p><strong>Flag this immediately</strong> when you're calculating timelines on any case with state motions pending or recently resolved.</p>
          </div>
        </div>

        <Quiz
          id="q3_2"
          question="A client's conviction became final on July 1, 2021. He filed a 3.850 on January 1, 2022 (6 months later). The 3.850 was denied and became final on July 1, 2023. How long does he have to file a federal habeas petition from July 1, 2023?"
          options={[
            "One full year — July 1, 2024",
            "Six months — January 1, 2024",
            "The federal deadline already passed while the 3.850 was pending",
            "Two years — the federal clock resets when state proceedings end"
          ]}
          correctIndex={1}
          explanation="Six months of the federal year ran before he filed the 3.850 (July 2021 to January 2022). The clock paused during the 3.850 proceedings. When the state motion concluded July 2023, the clock resumed with 6 months remaining — making the federal deadline approximately January 1, 2024. The clock never resets."
          onAnswer={onAnswer}
          answered={quiz["q3_2"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🚪</span> Exhaustion — You Can't Skip to Federal</h3>
          <p>Federal courts will not consider a claim that hasn't been raised and fully litigated in state court first. This is called the <strong>exhaustion doctrine</strong>.</p>

          <ul className="list-items">
            <li><span className="li-label">Exhaust every state court first</span><span className="li-desc">Every claim must be presented to the highest available state court.</span></li>
            <li><span className="li-label">Procedural default</span><span className="li-desc">If you don't raise it in state court, it's procedurally defaulted in federal court.</span></li>
            <li><span className="li-label">Default is almost always fatal</span><span className="li-desc">The federal court won't hear it.</span></li>
            <li><span className="li-label">Narrow exceptions exist</span><span className="li-desc">Actual innocence and cause and prejudice — but don't count on them.</span></li>
          </ul>

          <div className="callout">
            <div className="callout-label">📌 Practical implication for volunteers</div>
            <p>When you're reviewing a case for potential federal habeas, you need to know what was raised below. A great claim that was never presented to the state courts is not a great federal claim — it's a procedurally defaulted one. Flag both the issue AND whether it was preserved.</p>
          </div>
        </div>

        <Quiz
          id="q3_3"
          question="Your client has a strong Brady claim you've identified. Research shows this issue was never raised in his direct appeal or any prior post-conviction motion. He is now in federal habeas. What's the problem?"
          options={[
            "Brady claims can only be raised in state court, never federal",
            "The claim is likely procedurally defaulted — it was never exhausted in state court",
            "No problem — federal courts can consider any constitutional violation",
            "He needs to file a new 3.850 first before the federal court will look at it"
          ]}
          correctIndex={1}
          explanation="This is the exhaustion/procedural default trap. A Brady claim is constitutional and cognizable in federal court — but only if it was first raised in state court. If it wasn't, it's defaulted, and the federal court will likely refuse to consider it absent a showing of actual innocence or cause and prejudice. Whether a new 3.850 is still available (and not time-barred) is now a critical question."
          onAnswer={onAnswer}
          answered={quiz["q3_3"]}
        />

        <div className="divider" />

        {/* RETROACTIVITY SECTION */}
        <div className="section">
          <h3><span className="icon">⏪</span> When New Law Helps — and When It Doesn't</h3>
          <p>One of the most common and most painful situations in post-conviction work is this: a major new court decision comes down, it looks like it directly applies to your client's sentence or conviction, and then you find out it doesn't help them because it doesn't apply retroactively.</p>
          <p>Understanding retroactivity is not optional. Before you tell a client that a new case helps them, you need to know whether that case can even be raised in a post-conviction proceeding.</p>

          <div className="callout">
            <div className="callout-label">🔑 The Core Distinction</div>
            <p>New legal rules fall into two categories for retroactivity purposes:</p>
            <div className="card card-teal" style={{marginTop: '10px'}}>
              <strong>Substantive rules</strong> — change what conduct can be punished or what punishment can be imposed. These generally apply retroactively because they go to whether the state had the right to punish at all. Example: <em>Miller v. Alabama</em> (mandatory life without parole for juveniles is unconstitutional) — made retroactive by <em>Montgomery v. Louisiana</em>, 577 U.S. 190 (2016).
            </div>
            <div className="card card-amber" style={{marginTop: '8px'}}>
              <strong>Procedural rules</strong> — change how facts are determined or how trials are conducted. These generally do <em>not</em> apply retroactively because the process that led to conviction is not invalidated just because the rules of that process later changed. Example: <em>Erlinger v. United States</em> (jury must find sentencing enhancement facts beyond a reasonable doubt) — not retroactive.
            </div>
          </div>
        </div>

        <div className="section">
          <h3><span className="icon">⚖️</span> The Federal Framework — Teague</h3>
          <p>The federal baseline comes from <em>Teague v. Lane</em>, 489 U.S. 288 (1989). Under <em>Teague</em>, new constitutional rules of criminal procedure do not apply retroactively on collateral review unless they fall into one of two narrow exceptions:</p>
          <ul className="list-items">
            <li><span className="li-label">Exception 1</span><span className="li-desc">The rule places certain conduct beyond the reach of criminal law entirely — the state cannot punish this at all.</span></li>
            <li><span className="li-label">Exception 2</span><span className="li-desc">The rule is a watershed rule of criminal procedure without which the likelihood of an accurate conviction is seriously diminished — extremely narrow and rarely applied.</span></li>
          </ul>
          <p>Most new rules don't meet either exception. That's the point — <em>Teague</em> was designed to limit the flood of post-conviction litigation that would follow every new Supreme Court decision.</p>
        </div>

        <div className="section">
          <h3><span className="icon">🌴</span> Florida's Framework — Witt</h3>
          <p>Florida applies its own retroactivity analysis under <em>Witt v. State</em>, 387 So. 2d 922 (Fla. 1980). Florida's test asks whether the new rule constitutes a development of fundamental significance — meaning it either places beyond the authority of the state to proscribe the conduct, or is a watershed change in constitutional protection — and was not available to the defendant at the time of trial or direct appeal.</p>
          <p>Florida's <em>Witt</em> framework is sometimes more favorable than federal <em>Teague</em> analysis — but not reliably so. The Florida Supreme Court applies it case by case and the outcomes are not always predictable.</p>
        </div>

        <div className="section">
          <h3><span className="icon">📋</span> Case Study: Erlinger and Wainwright</h3>
          <div className="reality-check">
            <div className="rc-label">📅 What Happened</div>
            <p>In June 2024, the U.S. Supreme Court decided <em>Erlinger v. United States</em>, 602 U.S. 821 (2024). The Court held that the Fifth and Sixth Amendments require a unanimous jury to determine beyond a reasonable doubt whether a defendant's prior offenses were committed on separate occasions for sentencing enhancement purposes.</p>
            <p style={{marginTop: '10px'}}>For Florida practitioners, this was immediately significant. Florida's sentencing enhancement statutes — HFO, PRR, HVO, VCC — all allow judges, not juries, to find facts beyond the mere existence of a prior conviction (release dates, offense dates, qualifying prior convictions). Under <em>Erlinger</em>, those judicial fact-findings looked unconstitutional. Prisoners throughout Florida began filing motions.</p>
            <p style={{marginTop: '10px'}}>In June 2025, the Florida Supreme Court answered: <strong>no.</strong> <em>Wainwright v. State</em>, 411 So. 3d 392 (Fla. 2025). The Court held that <em>Erlinger</em> announced a procedural rule — it governs <em>how</em> facts are found, not <em>whether</em> the state can punish the conduct at all. Procedural rules do not apply retroactively. Although <em>Wainwright</em> arose in the capital postconviction context, its retroactivity analysis is not limited to capital-rule practice and should be treated as highly relevant to any Rule 3.850 litigation raising the same <em>Erlinger</em>-based claim. Every client already sentenced as an HFO, PRR, HVO, or VCC was left where they were.</p>
          </div>

          <div className="warning-card" style={{marginTop: '16px'}}>
            <div className="wc-label">⚠️ The Lesson</div>
            <p>When a new case comes down that looks like it helps your clients, your first question before saying anything to anyone is: <strong>is this substantive or procedural?</strong> If it's procedural, it almost certainly does not help clients who are already sentenced. Getting a client's hopes up about a new case that turns out not to apply retroactively is one of the most damaging things you can do in this work.</p>
          </div>
        </div>

        <div className="section">
          <h3><span className="icon">🔍</span> How to Quickly Assess a New Case</h3>
          <ul className="list-items">
            <li><span className="li-label">Read the actual holding</span><span className="li-desc">Not the headlines. Legal news coverage of criminal decisions is frequently inaccurate or overstated.</span></li>
            <li><span className="li-label">Substantive or procedural?</span><span className="li-desc">Does it say the state cannot punish this conduct, or does it say the process by which the punishment was imposed was flawed?</span></li>
            <li><span className="li-label">Has retroactivity been addressed?</span><span className="li-desc">Search for the case name plus "retroactive" or "retroactivity." Courts often address this quickly after a major decision.</span></li>
            <li><span className="li-label">Has Florida addressed it specifically?</span><span className="li-desc">Federal retroactivity analysis under <em>Teague</em> and Florida retroactivity analysis under <em>Witt</em> can produce different results. Check both.</span></li>
            <li><span className="li-label">What's the vehicle?</span><span className="li-desc">Even if a rule is retroactive, you need a procedural mechanism to raise it — 3.850, 3.800, habeas. Make sure the clock hasn't run and the right rule applies.</span></li>
          </ul>
        </div>

        {/* EASTER EGG — Module 4 */}
        <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
          <p style={{color: textMuted, fontStyle: 'italic'}}>"You can't handle the truth." — <em>A Few Good Men</em> (1992). In post-conviction work, the truth about retroactivity is often the hardest conversation you will have with a client. Your job is to deliver it anyway, clearly and honestly, before hope becomes expectation.</p>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">📅</span> Always Look at the Law That Applied Then</h3>
          <p>
            This is one of the most common research mistakes in post-conviction work — looking up a statute or rule as it reads <em>today</em> when what matters is what it said at the time of the offense, the plea, or the sentencing.
          </p>
          <div className="warning-card">
            <div className="wc-label">⚠️ Critical Practice Note</div>
            <p>
              When researching any statute relevant to your client's case, always identify the version that was in effect at the time of the relevant event — typically the date of the offense for substantive criminal law, and the date of sentencing for sentencing provisions. If the law has changed since then and the change is not retroactive, the current version does not help your client and may not even be relevant to their case.
            </p>
          </div>
          <div className="callout">
            <div className="callout-label">💡 Why This Matters in Practice</div>
            <p>
              Florida statutes are amended regularly. Sentencing ranges, enhancement criteria, minimum mandatory provisions, and gain time calculations have all changed over the years. A statute that looks favorable today may have been more restrictive — or more punitive — at the time your client was sentenced. Conversely, a provision that might help your client may have been enacted after their offense, making retroactivity the threshold question before anything else.
            </p>
            <p style={{marginTop: '10px'}}>
              <strong>Always ask:</strong> What did this statute say on the date of the offense? On the date of sentencing? Has it changed since then? If so, is the change retroactive — and under what framework?
            </p>
          </div>
          <div className="card card-teal">
            <h4>Where to Find Historical Statute Versions</h4>
            <p>
              <strong>Florida Online Sunshine (leg.state.fl.us)</strong> — Florida statutes archive by year going back to the 1990s. Use the session law history at the bottom of each statute to trace amendments.<br/><br/>
              <strong>Westlaw / Lexis</strong> — both maintain historical versions of statutes with effective dates.<br/><br/>
              <strong>Fastcase / vLex</strong> — searchable Florida statutory history.<br/><br/>
              <strong>The session laws themselves</strong> — if you need to pin down exactly when an amendment took effect, the enrolled bill and chapter law are the primary sources.
            </p>
          </div>
        </div>

        <Quiz
          id="q3_4"
          question="The U.S. Supreme Court issues a landmark decision holding that a particular sentencing enhancement procedure is unconstitutional because it allows judges rather than juries to find key facts. Your client was sentenced under that exact procedure five years ago. Their direct appeal is long over. Can they raise this in a 3.850 motion?"
          options={[
            "Yes — any unconstitutional sentence can be challenged at any time",
            "Yes — Supreme Court decisions always apply retroactively",
            "Not necessarily — the critical question is whether the new rule is substantive or procedural, and procedural rules generally do not apply retroactively on collateral review",
            "No — 3.850 only covers ineffective assistance of counsel claims"
          ]}
          correctIndex={2}
          explanation="This is exactly the Erlinger situation. A rule governing how facts must be found at sentencing — by a jury rather than a judge — is procedural, not substantive. It changes the process, not whether the state can punish the conduct. Under both the federal Teague framework and Florida's Witt analysis, procedural rules do not apply retroactively on collateral review. The Florida Supreme Court confirmed this in Wainwright v. State, 411 So. 3d 392 (Fla. 2025), holding that Erlinger does not apply retroactively to defendants already sentenced under Florida's enhancement statutes. Although Wainwright arose in the capital postconviction context, its retroactivity analysis applies equally to Rule 3.850 litigation raising the same Erlinger-based claim. Before raising any new case in post-conviction proceedings, always determine whether it is substantive or procedural — that single classification determines whether it can help your client at all."
          onAnswer={onAnswer}
          answered={quiz["q3_4"]}
        />
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 5: IAAC
  // ─────────────────────────────────────────
  {
    id: 4,
    label: "IAAC",
    title: "Ineffective Assistance of Appellate Counsel",
    subtitle: "Rule 9.141(d) — A different animal from trial IAC",
    estimatedTime: "15 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <p>You already know the <em>Strickland</em> test for trial IAC. Appellate IAC is the same two-prong test — deficiency plus prejudice — but the context is completely different. Your appellate attorney's job isn't to win at trial. It's to identify and argue the best issues on appeal. That changes what "screwing up" looks like.</p>
          <p>In Florida, claims of ineffective assistance of appellate counsel (IAAC) are governed by <span className="tag tag-rule">Fla. R. App. P. 9.141(d)</span>. These are filed as petitions — not motions — and they go to the <strong>appellate court that heard the direct appeal</strong>, not the trial court.</p>
        </div>

        <div className="section">
          <h3><span className="icon">⚖️</span> The Strickland Test — Appellate Edition</h3>
          <p>Same two prongs. Different application.</p>

          <div className="card card-teal">
            <h4>Prong 1 — Deficiency</h4>
            <p>Did appellate counsel fail to raise an issue that was <em>obvious from the record</em> and clearly stronger than the issues that were raised? Courts give appellate attorneys wide deference — they're supposed to make strategic choices about which arguments to pursue. A bad strategic call isn't deficiency. Completely missing a glaring error usually is.</p>
          </div>

          <div className="card card-teal" style={{marginTop:12}}>
            <h4>Prong 2 — Prejudice</h4>
            <p>Would the outcome of the appeal have been different if counsel had raised the omitted issue? This means you need to show the issue had merit — that if it had been raised, there's a reasonable probability the appellate court would have ruled differently.</p>
          </div>

          <div className="reality-check" style={{marginTop:16}}>
            <div className="rc-label">⚠️ The Hard Truth</div>
            <p>IAAC claims are notoriously difficult. Appellate courts are reviewing the work of their own bar — attorneys who appeared before them. The deference is real. Only about 3% of IAAC petitions succeed. But when you have a clear, preserved issue that counsel simply never raised? That's where it lives.</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">📋</span> What IAAC Looks Like in Practice</h3>
          <p>The most common IAAC claims involve appellate counsel's failure to raise or properly argue issues that were <strong>preserved at trial</strong>. Remember — appellate courts only review what's in the record. If trial counsel objected to something and the issue was preserved, appellate counsel had the raw material to work with. If they didn't use it, that's the claim.</p>

          <ul className="list-items">
            <li><span className="li-label">Failed to raise a preserved constitutional issue</span><span className="li-desc">Trial counsel objected on constitutional grounds, it was denied, and appellate counsel never argued it on appeal.</span></li>
            <li><span className="li-label">Failed to argue improper jury instructions</span><span className="li-desc">Counsel objected at trial, instructions were given over objection, never raised on direct appeal.</span></li>
            <li><span className="li-label">Failed to challenge an illegal sentence on direct appeal</span><span className="li-desc">Scoresheet error or statutory maximum issue visible in the record, never briefed.</span></li>
            <li><span className="li-label">Failed to raise a Brady violation apparent from the record</span><span className="li-desc">The suppressed evidence issue surfaced during trial and was documented, but not argued.</span></li>
            <li><span className="li-label">Filed a no-merit brief (Anders brief) when there were arguable issues</span><span className="li-desc">Counsel essentially told the court there was nothing worth appealing, but there clearly was.</span></li>
            <li><span className="li-label">Failed to raise an IAC claim already in the record</span><span className="li-desc">Rare, but if trial IAC was documented during the proceedings and appellate counsel ignored it.</span></li>
          </ul>

          <div className="callout">
            <div className="callout-label">🔎 Key distinction for reviewers</div>
            <p>IAAC is about issues that were <strong>available in the record</strong> but not raised. If the issue wasn't preserved at trial, appellate counsel usually can't raise it anyway — so that's not IAAC, that's a separate problem. When you're reviewing a file, compare what trial counsel preserved to what appellate counsel actually argued. The gap is where IAAC lives.</p>
          </div>
        </div>

        <Quiz
          id="q5_1"
          question="Trial counsel objected to a jury instruction as an incorrect statement of the law. The objection was overruled. Appellate counsel's brief addressed three other issues but never mentioned the jury instruction. The conviction was affirmed. This is a potential:"
          options={[
            "3.850 IAC claim against trial counsel — the objection wasn't good enough",
            "Rule 9.141(d) IAAC claim against appellate counsel — preserved issue not raised on appeal",
            "Brady violation — the state withheld the correct jury instruction",
            "Not a viable claim — appellate attorneys get to choose which issues to raise"
          ]}
          correctIndex={1}
          explanation="The issue was preserved — trial counsel objected, it's in the record. Appellate counsel had the material and didn't use it. That's the textbook IAAC scenario under Rule 9.141(d). The deference point in option D is real, but doesn't protect counsel who ignores a clearly preserved, meritorious issue."
          onAnswer={onAnswer}
          answered={quiz["q5_1"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">⏰</span> The Deadline — Read This Carefully</h3>
          <p>IAAC petitions under Rule 9.141(d) have their own timing rules, separate from 3.850 and AEDPA. Get this wrong and the claim is gone.</p>

          <div className="card card-teal">
            <h4>Standard Window: 2 Years</h4>
            <p>A petition alleging IAAC <strong>must be filed within 2 years</strong> of the judgment and sentence becoming final on <em>direct review</em>. That means 2 years from when the direct appeal was decided — not from when the conviction was entered.</p>
          </div>

          <div className="card card-amber" style={{marginTop:12}}>
            <h4>Exception: Affirmative Misadvice by Counsel</h4>
            <p>If appellate counsel actively misled the client about the results of the appeal, the 2-year window can be extended — but the absolute outer limit is <strong>4 years</strong> from when the judgment became final on direct review. No exceptions beyond that.</p>
          </div>

          <div className="card card-red" style={{marginTop:12}}>
            <h4>Hard Cutoff: 4 Years</h4>
            <p>In no case can an IAAC petition be filed more than <strong>4 years</strong> after the judgment and sentence became final on direct review. This is a firm cap. No exceptions, no equitable tolling beyond this point.</p>
          </div>

          <div className="reality-check" style={{marginTop:16}}>
            <div className="rc-label">⚠️ Why This Matters for Your Review</div>
            <p>When you're calculating deadlines on a case, you need to run IAAC separately from the 3.850 clock. The 3.850 clock starts when the conviction is final. The IAAC clock starts when the <em>direct appeal</em> is final — which is later. They're measuring from different events. Don't confuse them.</p>
          </div>
        </div>

        <div className="section">
          <h3><span className="icon">📬</span> Where It Gets Filed — This Is Different</h3>
          <p>This is one of the most commonly missed procedural points. A 3.850 goes to the <strong>trial court</strong>. An IAAC petition goes to the <strong>appellate court that heard the direct appeal</strong>.</p>

          <ul className="list-items">
            <li><span className="li-desc">If the direct appeal went to the 2nd DCA, the IAAC petition goes to the 2nd DCA</span></li>
            <li><span className="li-desc">If it went to the 1st DCA, it goes to the 1st DCA — and so on</span></li>
            <li><span className="li-label">Original proceeding under Rule 9.100</span><span className="li-desc">It's not an appeal of anything — it's a new petition in the appellate court.</span></li>
            <li><span className="li-desc">Must be filed in proper petition form, sworn, and must include detailed factual allegations of the specific acts that constitute the deficient performance</span></li>
          </ul>

          <div className="callout">
            <div className="callout-label">📌 What the petition must include</div>
            <p>The date and nature of the lower court's order · The name of the lower court · The nature, disposition, and dates of all prior proceedings · Detailed factual allegations of what appellate counsel did or failed to do · Why the omitted issue had merit · Why there's a reasonable probability the appeal would have come out differently</p>
          </div>
        </div>

        <Quiz
          id="q5_2"
          question="A client's conviction was affirmed on direct appeal. The mandate issued on March 1, 2021. Appellate counsel failed to raise what appears to be a strong preserved sentencing error. When is the last possible date to file an IAAC petition, assuming no misadvice by counsel?"
          options={[
            "March 1, 2022 — one year from the mandate",
            "March 1, 2023 — two years from the mandate",
            "March 1, 2025 — four years from the mandate",
            "There is no deadline — IAAC petitions can be filed at any time"
          ]}
          correctIndex={1}
          explanation="The standard window under Rule 9.141(d) is 2 years from when the judgment became final on direct review — which is when the mandate issued. March 1, 2023 is the deadline without any misadvice exception. The 4-year hard cap only applies when there's affirmative misadvice by counsel that might justify extending past the 2-year window."
          onAnswer={onAnswer}
          answered={quiz["q5_2"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🗺️</span> How IAAC Fits Into the Bigger Picture</h3>
          <div className="card card-teal">
            <h4>Trial IAC (3.850) vs. Appellate IAC (9.141(d))</h4>
            <p><strong>Trial IAC:</strong> What happened in the trial court — attorney failures during the case itself. Filed in the trial court as a 3.850 motion.<br/><br/>
            <strong>Appellate IAC:</strong> What happened during the direct appeal — attorney failures in arguing the appeal. Filed in the appellate court as a 9.141(d) petition.<br/><br/>
            These are separate claims, separate vehicles, separate courts, separate deadlines. A case can have both.</p>
          </div>

          <div className="callout" style={{marginTop:16}}>
            <div className="callout-label">⚡ Quick Reference</div>
            <p>
              <strong>Vehicle:</strong> Fla. R. App. P. 9.141(d) petition<br/>
              <strong>Filed in:</strong> The appellate court that heard the direct appeal<br/>
              <strong>Standard:</strong> Strickland — deficiency + prejudice<br/>
              <strong>Deadline:</strong> 2 years from direct review final (4-year hard cap with misadvice)<br/>
              <strong>What to look for:</strong> Preserved trial issues that appellate counsel never raised
            </p>
          </div>
        </div>

        {/* EASTER EGG — Module 5 */}
        <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
          <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
          <p style={{color: textMuted, fontStyle: 'italic'}}>"I am the one who knocks." — <em>Breaking Bad</em>. When you find a preserved issue appellate counsel never raised, you are the one who found it. Now flag it.</p>
        </div>
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 6: RULE 3.853 — DNA TESTING
  // ─────────────────────────────────────────
  {
    id: 5,
    label: "Rule 3.853",
    title: "Rule 3.853 — Postconviction DNA Testing",
    subtitle: "When DNA can open the door — and when it can't",
    estimatedTime: "10 min",
    content: ({ quiz, onAnswer }) => (
      <>
        <div className="section">
          <h3><span className="icon">🧬</span> What Is Rule 3.853?</h3>
          <p>Florida Rule of Criminal Procedure 3.853 creates a post-conviction procedure for obtaining DNA testing of physical evidence. It exists because DNA science has advanced dramatically since many convictions — evidence that was never tested, or was tested with inconclusive results, may now yield definitive answers.</p>

          <div className="callout">
            <div className="callout-label">Rule 3.853 — Purpose</div>
            <p>This rule provides procedures for obtaining DNA testing under sections 925.11 and 925.12, Florida Statutes. Unlike Rule 3.850, there is <strong>no time limit</strong> — a 3.853 motion may be filed at any time after the judgment and sentence becomes final.</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">📋</span> What the Motion Must Include</h3>
          <p>The motion must be under oath and must include all of the following:</p>
          <ul className="list-items">
            <li><span className="li-label">Description of the evidence</span><span className="li-desc">The physical evidence containing DNA to be tested, its present or last known location, and how it was originally obtained.</span></li>
            <li><span className="li-label">Not previously tested — or inconclusive</span><span className="li-desc">A statement that the evidence was not previously tested, or that prior results were inconclusive and subsequent scientific developments would likely produce a definitive result establishing the movant is not the person who committed the crime.</span></li>
            <li><span className="li-label">Statement of innocence and how testing helps</span><span className="li-desc">A statement that the movant is innocent and how the DNA testing will exonerate the movant of the crime or mitigate the sentence.</span></li>
            <li><span className="li-label">Identification is genuinely disputed</span><span className="li-desc">A statement that identification of the movant is a genuinely disputed issue in the case — and why.</span></li>
          </ul>

          <div className="callout">
            <div className="callout-label">💡 Key Distinction</div>
            <p>The motion must explain the connection between the requested testing and the movant's guilt or innocence with reference to <em>specific facts about the crime</em>. Courts have consistently held that 3.853 is not a "fishing expedition." <em>Hitchcock v. State</em>, 866 So. 2d 23 (Fla. 2004). The burden is on the movant to show how testing matters to their specific case.</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">⚖️</span> What the Court Must Find</h3>
          <p>Before ordering testing, the court must make three findings:</p>
          <div className="card card-teal"><strong>(A)</strong> Physical evidence that may contain DNA still exists</div>
          <div className="card card-teal" style={{marginTop: '8px'}}><strong>(B)</strong> Results of DNA testing would likely be admissible at trial, and there exists reliable proof the evidence is authentic</div>
          <div className="card card-teal" style={{marginTop: '8px'}}><strong>(C)</strong> There is a <strong>reasonable probability</strong> that the movant would have been acquitted or would have received a lesser sentence if the DNA evidence had been admitted at trial</div>
          <p style={{marginTop: '16px'}}>Note the standard carefully: <strong>reasonable probability of acquittal or lesser sentence</strong>. That is the rule language. Not "would exonerate," not "proves innocence" — reasonable probability. It is a meaningful threshold but it is not certainty.</p>
        </div>

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🚪</span> The Identity Gate</h3>
          <p>The single most important threshold in 3.853 practice is whether <strong>identification is a genuinely disputed issue</strong>. Courts have repeatedly denied testing where identity was not genuinely disputed at trial — regardless of what the DNA might show.</p>
          <p>Think through these three scenarios carefully. They come up constantly in case review:</p>

          <div className="card card-teal" style={{marginTop: '12px'}}>
            <strong>✅ Scenario 1 — Identity genuinely disputed</strong>
            <p style={{marginTop: '8px', fontWeight: 'normal'}}>Client was convicted of murder as the shooter. Client denied being present at all. The gun was never tested for DNA. Testing that excludes the client's DNA from the gun goes directly to whether they were the person who pulled the trigger. Identity is genuinely disputed. Testing is appropriate.</p>
          </div>

          <div className="card card-amber" style={{marginTop: '8px'}}>
            <strong>⚠️ Scenario 2 — Identity not genuinely disputed</strong>
            <p style={{marginTop: '8px', fontWeight: 'normal'}}>Client was convicted under a felony murder theory as a co-defendant. The state's theory was that the client was present but did not fire the weapon. Testing the gun for the client's DNA would not exonerate them — they were never alleged to have held it. Identity was never in dispute as to their role. Testing is likely futile.</p>
          </div>

          <div className="card card-red" style={{marginTop: '8px'}}>
            <strong>🚫 Scenario 3 — Confession in evidence</strong>
            <p style={{marginTop: '8px', fontWeight: 'normal'}}>Client confessed at the time of arrest. The confession was admitted at trial. Client now recants and wants DNA testing. The recanted confession makes identity difficult to characterize as "genuinely disputed" — the client's own prior statement placed them at the scene and admitted participation. Courts are highly skeptical of 3.853 motions in this posture. Testing may still be pursued but expect significant resistance.</p>
          </div>
        </div>

        <Quiz
          id="q6_1"
          question="Your client was convicted of sexual battery. He denied being the perpetrator at trial and was convicted on circumstantial evidence. A rape kit was collected but never tested for DNA. He files a 3.853 motion. What is the most critical threshold issue the court will examine first?"
          options={[
            "Whether the client can afford the cost of DNA testing",
            "Whether the rape kit still exists and whether identification was genuinely disputed at trial",
            "Whether the client has already filed a 3.850 motion",
            "Whether the original defense attorney requested DNA testing at trial"
          ]}
          correctIndex={1}
          explanation="The court must first find that physical evidence still exists (the rape kit) and that identification is genuinely disputed. In a sexual battery case where the defendant denied being the perpetrator, identity is clearly at issue — making this a strong 3.853 candidate if the kit still exists. Evidence preservation is a real problem; rape kits are sometimes destroyed after a period of years, which is why locating the evidence is the first practical step in case review."
          onAnswer={onAnswer}
          answered={quiz["q6_1"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🔬</span> Previously Tested vs. Inconclusive Results</h3>
          <p>Many clients assume that because DNA was tested at trial, 3.853 is off the table. That's not correct. The rule allows a second bite if prior results were <strong>inconclusive</strong> and subsequent scientific developments in DNA testing techniques would likely produce a definitive result.</p>

          <div className="reality-check">
            <div className="rc-label">📅 Why This Matters Now</div>
            <p>DNA technology has advanced significantly since the 1990s and early 2000s. Touch DNA, low copy number testing, and improved mixture interpretation methods can now yield results from samples that were previously untestable. A case that had inconclusive DNA results in 2001 may be a strong 3.853 candidate today. Always check when the prior testing occurred and what methods were available at the time.</p>
          </div>
        </div>

        <Quiz
          id="q6_2"
          question="DNA testing was performed on evidence in your client's 1998 murder case. The results were inconclusive. Your client wants to file a 3.853 motion for retesting. Is this viable?"
          options={[
            "No — evidence was already tested so 3.853 does not apply",
            "Only if the client can show the original lab made an error",
            "Yes — if subsequent scientific developments in DNA testing would likely produce a definitive result that the prior testing could not",
            "Only if the prosecution agrees to retesting"
          ]}
          correctIndex={2}
          explanation="The rule explicitly contemplates this scenario. Prior inconclusive testing does not bar a 3.853 motion — the movant must show that advances in DNA science since the original testing would likely now produce a definitive result. A 1998 inconclusive result tested with the methods available then may be highly testable with modern technology. This is worth flagging in every old case where DNA evidence exists."
          onAnswer={onAnswer}
          answered={quiz["q6_2"]}
        />

        <div className="divider" />

        <div className="section">
          <h3><span className="icon">🔗</span> How 3.853 Connects to 3.850</h3>
          <p>Rule 3.853 is a standalone procedure — but it rarely ends the case on its own. A favorable DNA result is <strong>newly discovered evidence</strong> that opens the door to a full Rule 3.850 motion for postconviction relief.</p>
          <p>Think of 3.853 as the key and 3.850 as the door. Testing gets you the evidence. The 3.850 motion is how you use that evidence to vacate the conviction.</p>

          <div className="callout">
            <div className="callout-label">⚙️ Procedural Flow</div>
            <p>3.853 motion filed → court orders testing if criteria met → FDLE or accredited lab conducts testing → results provided to court, movant, and prosecution → if favorable, results become the basis for a 3.850 newly discovered evidence claim → 3.850 motion filed arguing reasonable probability of acquittal</p>
          </div>

          <div className="callout">
            <div className="callout-label">💰 Cost</div>
            <p>If the movant is indigent, the <strong>state bears the cost</strong> of court-ordered DNA testing. If not indigent, cost may be assessed against the movant. Testing is conducted by FDLE by default, or another lab accredited by ASCLD/LAB upon good cause shown.</p>
          </div>
        </div>

        {/* EASTER EGG — Module 6 */}
        <div className="reality-check" style={{marginTop: '24px'}}>
          <div className="rc-label">🎬 From the Files</div>
          <p>As the legal thriller <em>The Star Chamber</em> warned: <strong>"Innocence is no protection."</strong> Rule 3.853 exists precisely because the system recognized that truth. Actual innocence, without a procedural mechanism to prove it, is just a claim. DNA testing is one of the few tools that can turn a claim into evidence.</p>
        </div>

        <Quiz
          id="q6_3"
          question="You are reviewing a case where your client was convicted of armed robbery. The client admitted at trial to being present but claimed a co-defendant was the one who brandished the weapon. The weapon was never tested for DNA. Your client wants to file a 3.853 motion to test the weapon. You're thinking this looks like a strong 3.853 candidate. Are you right?"
          options={[
            "Yes — untested weapon, client claims innocence, textbook 3.853",
            "Yes — any untested DNA evidence supports a motion",
            "Not necessarily — depends on the evidence presented at trial",
            "No — armed robbery cases are categorically ineligible for DNA testing"
          ]}
          correctIndex={2}
          explanation="This is the trap. Everything on the surface screams 3.853 — untested evidence, innocence claim, biological material. But before you file anything, you need to look at the evidence presented at trial. If the evidence established the client was present and participating regardless of who held the weapon, excluding the client's DNA from the weapon doesn't negate their role in the crime. Identity as a participant may not be genuinely disputed no matter what the DNA shows. Option A is the trap most people fall into. Option D is the obvious wrong answer no one picks. The right answer requires you to actually look at the trial record before drawing conclusions."
          onAnswer={onAnswer}
          answered={quiz["q6_3"]}
        />
      </>
    )
  },

  // ─────────────────────────────────────────
  // MODULE 7: OTHER ISSUES
  // ─────────────────────────────────────────
  {
    id: 6,
    label: "Other Issues",
    title: "Other Issues to Screen For",
    subtitle: "Beyond the primary rules — broader case-level flags that often signal a viable claim",
    estimatedTime: "15 min",
    content: ({ quiz, onAnswer }) => {

      const issues = [
        {
          issue: "Involuntary or Unknowing Plea",
          summary: "The plea may be invalid if the client was misadvised about sentencing exposure, mandatory minimums, or key consequences, or if the plea was not knowing and voluntary.",
          whyMatters: "A plea-based conviction can be attacked if the plea colloquy or counsel's advice was defective.",
          whatToLookFor: "Plea transcript missing key advisements; client says counsel promised a specific sentence; written plea and oral colloquy conflict; misunderstanding about minimum mandatory exposure.",
          cases: "State v. Green, 944 So. 2d 208 (Fla. 2006); State v. Leroux, 689 So. 2d 235 (Fla. 1996); Peart v. State, 756 So. 2d 42 (Fla. 2000)"
        },
        {
          issue: "Competency / Mental Health Issues",
          summary: "The client may have been incompetent at trial, plea, or sentencing, or unable to assist counsel because of mental illness, intellectual disability, or medication effects.",
          whyMatters: "Competency is fundamental; a conviction or plea entered while incompetent may be invalid.",
          whatToLookFor: "Psychiatric history; psychotropic meds; suicide watch; bizarre behavior; repeated requests for evaluation; jail mental-health records.",
          cases: "Dougherty v. State, 149 So. 3d 672 (Fla. 2014); Nelson v. State, 43 So. 3d 20 (Fla. 2010); Porter v. State, 788 So. 2d 917 (Fla. 2001)"
        },
        {
          issue: "Brady / Giglio / Napue Problems",
          summary: "The State may have suppressed favorable evidence, failed to disclose impeachment material, or allowed false testimony to stand uncorrected.",
          whyMatters: "These claims can be case-dispositive and often turn on witness deals, undisclosed reports, or credibility impeachment.",
          whatToLookFor: "Undisclosed cooperation agreement; missing police or lab reports; witness later recants; testimony inconsistent with records.",
          cases: "Mordenti v. State, 894 So. 2d 161 (Fla. 2004); Rogers v. State, 782 So. 2d 373 (Fla. 2001)"
        },
        {
          issue: "Newly Discovered Evidence",
          summary: "Evidence unavailable at trial may later emerge, including recantations, third-party confessions, or new forensic results.",
          whyMatters: "Newly discovered evidence can support relief even when ordinary deadlines have passed, if diligence and materiality are shown.",
          whatToLookFor: "New witness; recanting affidavit; updated DNA or fingerprint results; newly obtained records or recordings.",
          cases: "Jones v. State, 591 So. 2d 911 (Fla. 1991); Swafford v. State, 679 So. 2d 736 (Fla. 1996)"
        },
        {
          issue: "Ineffective Assistance of Appellate Counsel",
          summary: "Appellate counsel may have omitted a stronger preserved issue or failed to challenge a reversible error.",
          whyMatters: "This is a separate avenue from trial counsel IAC and may be the only remaining route where the trial record is fixed.",
          whatToLookFor: "Strong issue preserved below but not raised on appeal; brief ignores obvious sentencing error.",
          cases: "Rutherford v. Moore, 774 So. 2d 637 (Fla. 2000); Morrison v. State, 818 So. 2d 432 (Fla. 2002)"
        },
        {
          issue: "Conflict of Interest / Breakdown in Representation",
          summary: "Counsel may have had divided loyalties or a conflict that affected strategy or performance.",
          whyMatters: "Conflicts can require relief without the same showing as ordinary Strickland claims, depending on the facts.",
          whatToLookFor: "Counsel represented codefendant, witness, or victim; client repeatedly complained of loyalty problems; attorney refused to pursue certain defenses.",
          cases: "Porter v. State, 788 So. 2d 917 (Fla. 2001)"
        },
        {
          issue: "Sentencing Enhancements and Eligibility Errors",
          summary: "The sentence may be affected by incorrect habitualization, minimum mandatory terms, PRR/VCC classification, or scoresheet mistakes.",
          whyMatters: "Even where the conviction stands, a sentencing error can produce resentencing or sentence correction.",
          whatToLookFor: "Scoresheet math wrong; enhancement applied without support; wrong offense level; oral pronouncement differs from written sentence.",
          cases: "Young v. State, 699 So. 2d 624 (Fla. 1997); State v. Iacovone, 660 So. 2d 1371 (Fla. 1995)"
        },
        {
          issue: "Jail Credit / Time Credit / Gain Time Problems",
          summary: "The defendant may not have received all credit due for time served, or DOC may be calculating dates incorrectly.",
          whyMatters: "These issues can shorten custody and often present a quicker remedy than broader collateral litigation.",
          whatToLookFor: "Missing jail credit; overlap in concurrent sentences; DOC records differ from sentencing sheet.",
          cases: "Daniels v. State, 491 So. 2d 543 (Fla. 1986); State v. Mancino, 714 So. 2d 429 (Fla. 1998)"
        },
        {
          issue: "Restitution, Fines, and Costs",
          summary: "Financial components of the sentence may be unsupported, improperly calculated, or imposed without adequate findings.",
          whyMatters: "These issues matter even if incarceration is unaffected.",
          whatToLookFor: "Restitution imposed without hearing; loss amount unsupported; fees imposed by rote.",
          cases: ""
        },
        {
          issue: "Discovery / Testing Deficiencies",
          summary: "Physical evidence may not have been tested, or testing may have been incomplete or outdated.",
          whyMatters: "Advances in forensic science can reveal exculpatory evidence and support postconviction testing.",
          whatToLookFor: "Untested DNA, prints, firearm evidence, or trace evidence; older serology instead of modern testing.",
          cases: ""
        },
        {
          issue: "Informant Reliability / Jailhouse Witness Issues",
          summary: "Jailhouse informants or cooperating witnesses may have received benefits or have serious credibility problems.",
          whyMatters: "These witnesses are often central in close cases and can be fertile impeachment sources.",
          whatToLookFor: "Unrecorded deal; sentence reduction after testimony; multiple inconsistent statements; pattern of cooperating in other cases.",
          cases: "Way v. State, 760 So. 2d 903 (Fla. 2000)"
        },
        {
          issue: "Jury Selection / Fair Cross-Section Problems",
          summary: "Jury composition or peremptory strike issues may undermine the fairness of the verdict.",
          whyMatters: "Some claims must be preserved, but they can identify reversible error or broader constitutional problems.",
          whatToLookFor: "Batson objections; jury pool composition complaints; strike notes reflecting race- or gender-based reasons.",
          cases: "Melbourne v. State, 679 So. 2d 759 (Fla. 1996); State v. Neil, 457 So. 2d 481 (Fla. 1984)"
        },
        {
          issue: "Double Jeopardy / Merger Issues",
          summary: "Multiple convictions or punishments may have been imposed for the same offense conduct.",
          whyMatters: "A double jeopardy problem can lead to vacatur of a count or resentencing.",
          whatToLookFor: "Same act charged in multiple counts; lesser-included offense overlap; multiple sentences for one criminal episode.",
          cases: "State v. Paul, 934 So. 2d 1167 (Fla. 2006); Grant v. State, 770 So. 2d 655 (Fla. 2000)"
        },
        {
          issue: "Speedy Trial / Pretrial Delay",
          summary: "Excessive delay may have prejudiced the defense or created a viable procedural issue.",
          whyMatters: "While often litigated pretrial, delay can reveal deeper breakdowns or support related due process claims.",
          whatToLookFor: "Repeated continuances; long arrest-to-trial gap; missing witness due to delay; stale evidence.",
          cases: "State v. Nelson, 26 So. 3d 570 (Fla. 2010); State v. Williams, 791 So. 2d 1088 (Fla. 2001)"
        },
        {
          issue: "Collateral Consequences",
          summary: "Counsel may have failed to advise about deportation, registration, civil commitment, firearm loss, or other serious consequences.",
          whyMatters: "These consequences can be decisive in plea decisions and may support relief where misinformation affected the plea.",
          whatToLookFor: "Noncitizen client; sex offender registration; firearm prohibition; civil commitment exposure.",
          cases: "Peart v. State, 756 So. 2d 42 (Fla. 2000); State v. Green, 944 So. 2d 208 (Fla. 2006)"
        },
        {
          issue: "Successive-Petition and Procedural-Bar Problems",
          summary: "A meritorious issue may be blocked if previously raised, could have been raised, or does not fit an exception.",
          whyMatters: "Early screening prevents wasted effort and helps determine whether to frame the issue as newly discovered or jurisdictional.",
          whatToLookFor: "Same claim in prior motion; record shows issue was known earlier; motion lacks explanation for lateness.",
          cases: "Swafford v. State, 679 So. 2d 736 (Fla. 1996); Harvey v. Dugger, 656 So. 2d 1253 (Fla. 1995)"
        },
      ];

      const downloadIssuesTable = () => {
        const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>PCP — Additional Post-Conviction Issues Reference</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Poppins', sans-serif; color: #1e293b; background: #fff; font-size: 9pt; }
  .page { max-width: 960px; margin: 0 auto; padding: 28px 36px; }
  .header { border-bottom: 3px solid #046878; padding-bottom: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
  .header-left h1 { font-size: 16pt; font-weight: 700; color: #046878; line-height: 1.1; }
  .header-left p { font-size: 8.5pt; color: #64748b; margin-top: 3px; }
  .header-right { font-size: 7.5pt; color: #94a3b8; text-align: right; line-height: 1.6; }
  .intro { font-size: 9pt; color: #334155; line-height: 1.6; margin-bottom: 18px; padding: 10px 14px; background: #f0f9ff; border-left: 3px solid #046878; border-radius: 4px; }
  table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
  thead tr { background: #046878; color: #fff; }
  thead th { padding: 8px 10px; text-align: left; font-weight: 600; letter-spacing: 0.3px; }
  tbody tr { border-bottom: 1px solid #e2e8f0; }
  tbody tr:nth-child(even) { background: #f8fafc; }
  tbody td { padding: 8px 10px; vertical-align: top; line-height: 1.45; color: #1e293b; }
  .issue-name { font-weight: 700; color: #046878; }
  .cases { font-style: italic; color: #64748b; font-size: 7.5pt; }
  .note { margin-top: 16px; font-size: 7.5pt; color: #94a3b8; font-style: italic; border-top: 1px solid #e2e8f0; padding-top: 10px; }
  .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; font-size: 7pt; color: #94a3b8; }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    thead tr { background: #046878 !important; -webkit-print-color-adjust: exact; }
    tr { break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="header-left">
      <h1>Additional Post-Conviction Issues</h1>
      <p>Post Conviction Project, Inc. · PCP Staff & Volunteer Reference</p>
    </div>
    <div class="header-right">postconvictionproject.org<br/>Florida Post-Conviction Crash Course<br/>For reference only — not legal advice</div>
  </div>

  <div class="intro">
    In addition to the rule-specific remedies covered in the core modules, reviewers should screen for broader case-level issues that often signal a viable postconviction claim or a different procedural path. Many of these issues are not obvious from the judgment alone and require comparing the client's account, transcripts, discovery, and prior filings. Case citations are starting points — controlling authority will depend on the posture of the case, the rule invoked, and the district.
  </div>

  <table>
    <thead>
      <tr>
        <th style="width:17%">Issue</th>
        <th style="width:22%">Summary</th>
        <th style="width:18%">Why It Matters</th>
        <th style="width:22%">What to Look For in the File</th>
        <th style="width:21%">Florida Cases</th>
      </tr>
    </thead>
    <tbody>
      ${issues.map(item => `
      <tr>
        <td><span class="issue-name">${item.issue}</span></td>
        <td>${item.summary}</td>
        <td>${item.whyMatters}</td>
        <td>${item.whatToLookFor}</td>
        <td class="cases">${item.cases}</td>
      </tr>`).join('')}
    </tbody>
  </table>

  <div class="note">
    Case citations above are provided as starting points. The precise controlling authority will depend on the posture of the case, the procedural rule invoked, and the district. Always verify citations in Westlaw, Lexis, Google Scholar, or Fastcase/vLex before relying on them.
  </div>

  <div class="footer">
    <span>Post Conviction Project, Inc. · Elisabeth G. Whitmire, Esq., CEO & Director of Legal Services</span>
    <span>For reference only — not legal advice.</span>
  </div>
</div>
</body>
</html>`;
        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const win = window.open(url, "_blank");
        if (win) { win.onload = () => { setTimeout(() => { win.print(); }, 800); }; }
      };

      return (
        <>
          <div className="section">
            <p>In addition to the rule-specific remedies discussed in the preceding modules, reviewers should also screen for broader case-level issues that often signal a viable postconviction claim or a different procedural path. These include plea validity, competency, discovery violations, newly discovered evidence, witness credibility problems, sentencing enhancement errors, jail credit issues, and collateral consequences that may have affected the client's decision-making.</p>
            <p>Many of these issues are not obvious from the judgment alone and require comparing the client's account, transcripts, discovery, and prior filings.</p>
            <div className="callout">
              <div className="callout-label">📌 How to use this module</div>
              <p>Each issue below includes a brief summary, why it matters in post-conviction practice, what to look for in the file, and Florida cases to research. These are starting points — the precise controlling authority will depend on the posture of the case, the rule invoked, and the district. Always verify before relying.</p>
            </div>
          </div>

          <div className="section">
            {issues.map((item, i) => (
              <div key={i} className="card card-teal" style={{marginBottom: '12px'}}>
                <h4 style={{color: tealLight, marginBottom: '8px'}}>{item.issue}</h4>
                <p style={{marginBottom: '6px'}}>{item.summary}</p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px'}}>
                  <div>
                    <div style={{fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: accent, marginBottom: '4px'}}>Why It Matters</div>
                    <p style={{fontSize: '13px', opacity: '0.85'}}>{item.whyMatters}</p>
                  </div>
                  <div>
                    <div style={{fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: accent, marginBottom: '4px'}}>What to Look For</div>
                    <p style={{fontSize: '13px', opacity: '0.85'}}>{item.whatToLookFor}</p>
                  </div>
                </div>
                <div style={{marginTop: '10px', paddingTop: '8px', borderTop: `1px solid ${darkBorder}`}}>
                  <div style={{fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: textMuted, marginBottom: '4px'}}>Florida Cases</div>
                  <p style={{fontSize: '12px', color: textMuted, fontStyle: 'italic'}}>{item.cases}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: '32px', textAlign: 'center'}}>
            <p style={{fontSize: 14, color: textMuted, marginBottom: 16}}>Download this issue reference table as a print-ready PDF.</p>
            <button className="btn btn-primary" style={{fontSize: 15, padding: '14px 32px'}} onClick={downloadIssuesTable}>
              ⬇ Download Issues Reference Table
            </button>
          </div>
        </>
      );
    }
  },

  // ─────────────────────────────────────────
  // MODULE 8: CASE CHECKLIST
  // ─────────────────────────────────────────
  {
    id: 7,
    label: "Case Checklist",
    title: "Case Review Checklist",
    subtitle: "A step-by-step cold case review — from the client's account to legal posture",
    estimatedTime: "10 min",
    content: ({ quiz, onAnswer }) => {
      const [checklistState, setChecklistState] = useState({});
      const toggleCheck = (section, i) => {
        setChecklistState(prev => ({
          ...prev,
          [`${section}-${i}`]: !prev[`${section}-${i}`]
        }));
      };

      const sections = [
        {
          title: "🗂️ Step 1: Read the Client's Own Account First",
          color: "#c084fc",
          items: [
            { text: "What does the client say went wrong?", note: "They know their case better than anyone. Start here. Their allegations shape what you're looking for." },
            { text: "Is the client claiming innocence, or a procedural/constitutional violation, or both?", note: "These require different investigative approaches." },
            { text: "Has the client identified specific witnesses, evidence, or events they believe were mishandled?" },
            { text: "Is the client's account internally consistent? Does it match the record you have so far?" },
            { text: "Are there any factual claims in the client's account that you can verify against the file — or that contradict the file?", note: "Contradictions aren't automatically bad — they're research leads." },
          ]
        },
        {
          title: "📁 Step 2: Compare State Records to What Was Disclosed at Trial",
          color: "#38bdf8",
          items: [
            { text: "Obtain the State Attorney's file if available — arrest reports, witness statements, lab reports, discovery logs." },
            { text: "Compare the prosecution's evidence list to the defense discovery file.", note: "Anything in the SA file that wasn't in the defense file is a potential Brady violation." },
            { text: "Compare the prosecution's witness list to the witnesses actually called at trial.", note: "Who was on the list but never called? Why? Was there a deal? Was the testimony inconsistent with something?" },
            { text: "Review law enforcement reports — all of them. Look for inconsistencies between the arrest report, the incident report, and the trial testimony." },
            { text: "Check whether any supplemental police reports were filed after the initial arrest and whether those were disclosed to defense." },
          ]
        },
        {
          title: "🔬 Step 3: Check for Untested or Undertested Physical Evidence",
          color: tealLight,
          items: [
            { text: "Was there biological evidence collected? (blood, hair, saliva, touch DNA, semen)", note: "Was it tested? With what technology? Could current methods do more?" },
            { text: "Were fingerprints collected? Were they run through AFIS? Were unidentified prints ever followed up on?" },
            { text: "Were drug samples tested? Was the full sample tested or just a portion?", note: "In some cases, the 'drug' was never conclusively identified." },
            { text: "Were weapons tested for DNA or prints beyond what was disclosed?" },
            { text: "Was any evidence logged but never submitted to the lab?", note: "Check the evidence log against the lab submissions — gaps are flags." },
            { text: "Has DNA testing technology advanced since the original testing that might yield new results?" },
          ]
        },
        {
          title: "🔍 Step 4: Look Up the Material Witnesses",
          color: red,
          items: [
            { text: "Run every significant law enforcement officer's name.", note: "Look for: terminations, suspensions, disciplinary records, civil suits, criminal charges, Brady list designation, misconduct findings in other cases." },
            { text: "Check whether the forensic or expert witnesses are still considered reliable in their field.", note: "Arson reconstruction, bite mark analysis, hair microscopy, blood spatter, shaken baby syndrome — all have been challenged. Has the science moved on?" },
            { text: "Run eyewitnesses and civilian witnesses for credibility issues.", note: "Did they receive any benefit after testifying? Dropped charges? Sentence reduction? Housing assistance?" },
            { text: "Is any eyewitness a 'professional witness' — someone who has appeared as an eyewitness in multiple unrelated criminal cases?", note: "This is a real phenomenon. More than two or three cases is a red flag worth flagging to attorneys." },
            { text: "Were jailhouse informants used? What happened to their case after they testified?" },
            { text: "Did any expert witness get sanctioned, decertified, or found to have testified falsely in other cases after your client's trial?" },
          ]
        },
        {
          title: "📜 Step 5: Review All Prior Post-Conviction and Appellate Filings",
          color: accent,
          items: [
            { text: "Pull all prior 3.850 motions — what issues were raised?" },
            { text: "Were those claims adjudicated on the merits, or dismissed on procedural grounds?", note: "Procedural dismissals may not bar re-raising the claim if new facts support it. Merits rulings are harder to overcome." },
            { text: "Is the client's current claim just a restatement of something they already lost on?", note: "Successive motions raising the same claim are barred. Flag this early — it changes the whole strategy." },
            { text: "Were any claims raised on direct appeal? Were they decided favorably or unfavorably?" },
            { text: "Is there anything that was clearly available to raise earlier but wasn't? Why not?", note: "If prior counsel missed something obvious, that might itself be an IAC claim against post-conviction counsel." },
            { text: "What issues have never been raised anywhere? Those are the ones to focus on." },
          ]
        },
        {
          title: "🕐 Step 6: Time & Procedural Posture",
          color: teal,
          items: [
            { text: "When did conviction become final on direct review?", note: "This is Day 1 of the 3.850 clock and the AEDPA clock." },
            { text: "Is the general 2-year 3.850 window still open?" },
            { text: "Are there any exception windows open? (new evidence, new law)", note: "If so, when did the clock on those start?" },
            { text: "Has a prior 3.850 been filed? Denied? Appealed?", note: "Prior motions may bar successive filings — check carefully." },
            { text: "How much of the federal AEDPA year has already run?", note: "Calculate time between finality and first state motion, plus time since last state ruling." },
            { text: "Are all state remedies exhausted — or is there still a state avenue available?" },
          ]
        },
        {
          title: "📋 Sentence Legality (3.800 Territory)",
          color: accent,
          items: [
            { text: "Does the sentence exceed the statutory maximum for the offense?" },
            { text: "Was there an upward departure? If so, is there a written departure order with specific findings?" },
            { text: "Does the scoresheet calculation appear correct? Check offense level, prior record, victim injury points." },
            { text: "Were multiple counts sentenced separately that may require merger under double jeopardy?" },
            { text: "Was the defendant a juvenile at the time of the offense? Any mandatory minimums that Miller may affect?" },
            { text: "Are there gain time credits or jail credit that appear miscalculated?" },
          ]
        },
        {
          title: "👨‍⚖️ Trial Counsel Performance (IAC / Strickland)",
          color: "#a78bfa",
          items: [
            { text: "Did counsel conduct an adequate pretrial investigation?", note: "Look for missing witnesses, unsubpoenaed records, uninvestigated alibis." },
            { text: "Were critical motions filed? (suppress, dismiss, change of venue)", note: "If not filed, was there a strategic reason — or just neglect?" },
            { text: "Did counsel object at trial? Check transcript for objections missed on key issues." },
            { text: "Was the defendant advised of plea offers and their consequences?", note: "Failure to communicate or explain a plea offer is IAC." },
            { text: "Did counsel's performance fall below objective professional standards?", note: "Prong 1 of Strickland — deficiency." },
            { text: "Is there a reasonable probability the outcome would have differed with competent counsel?", note: "Prong 2 — prejudice. Review the whole record." },
          ]
        },
        {
          title: "🔎 Evidence Issues",
          color: green,
          items: [
            { text: "Is there any biological evidence that was untested or tested with outdated technology?" },
            { text: "Were all witness statements in the prosecution file provided to defense?", note: "Inconsistent statements withheld = Brady." },
            { text: "Did any prosecution witness receive a deal, reduced sentence, or dropped charges afterward?", note: "If yes, was that disclosed? Giglio." },
            { text: "Were there jailhouse informants? What was their deal?" },
            { text: "Have any witnesses since recanted or given inconsistent statements?" },
            { text: "Are there new witnesses who have come forward since trial?" },
          ]
        },
        {
          title: "🚨 Witness & Expert Credibility",
          color: red,
          items: [
            { text: "Was a law enforcement officer central to the case? Check for disciplinary history, sustained misconduct findings, terminations in other cases." },
            { text: "Were expert witnesses used by the state? Has the underlying science been challenged or discredited?", note: "Arson science, bite marks, hair microscopy, blood spatter — all have been challenged." },
            { text: "Were any experts later sanctioned, decertified, or found to have given false testimony in other cases?" },
            { text: "Did any eyewitnesses have identification issues? (lighting, distance, cross-race identification, suggestive lineup)" },
          ]
        },
        {
          title: "⚖️ Harmless Error Assessment",
          color: tealLight,
          items: [
            { text: "For each error identified: could the same outcome have been reached without it?" },
            { text: "For sentencing errors: could the judge have imposed the same sentence on a corrected scoresheet?" },
            { text: "For sentencing errors: would THIS judge, on THIS record, actually have sentenced the same way?", note: "Look for departure findings, judge's on-record statements, sentencing memoranda." },
            { text: "Is there any error so fundamental it could be structural? (denial of counsel, biased judge, etc.)" },
          ]
        },
        {
          title: "🤝 Plea-Related Issues",
          color: "#818cf8",
          items: [
            { text: "Did the client enter a plea?" },
            { text: "If so, was the plea knowing, voluntary, and intelligent?", note: "Rule 3.850 expressly authorizes relief where the plea was involuntary." },
            { text: "Were the client's understanding of the range of punishment, minimum mandatory terms, habitual offender exposure, or restitution accurate?" },
            { text: "Were there undisclosed promises, threats, or misrepresentations made to induce the plea?" },
            { text: "Did counsel correctly advise on immigration consequences where applicable?", note: "Padilla v. Kentucky requires counsel to advise noncitizen clients about deportation risk. Failure to do so is IAC." },
          ]
        },
        {
          title: "🧠 Competency and Mental Health",
          color: "#c084fc",
          items: [
            { text: "Was there any history of mental illness, intellectual disability, head injury, psychotropic medication, or suicide watch?" },
            { text: "Did the client appear to understand the charges, the plea, the trial proceedings, and the sentencing?", note: "A defendant must be able to understand the proceedings and assist counsel — if there are signs they could not, that's a flag." },
            { text: "Was a competency evaluation requested or conducted? If so, what were the findings?" },
            { text: "Were there signs the client could not assist counsel effectively during any phase of the proceedings?" },
            { text: "Were psychotropic medications being administered during trial or at the time of plea?", note: "Involuntary medication or medication-induced impairment can affect the voluntariness of a plea and competency to stand trial." },
          ]
        },
        {
          title: "🚨 Brady, Giglio, and False Testimony",
          color: red,
          items: [
            { text: "Was any favorable police, lab, jail, or witness information withheld from the defense?" },
            { text: "Were any witnesses incentivized with undisclosed deals, leniency, sentence reductions, or other benefits?" },
            { text: "Did any key witness recant, admit perjury, or materially change their story after trial?" },
            { text: "Did the prosecutor know of the falsity or have reason to know?", note: "Knowledge of falsity is not required for Brady — suppression alone is sufficient. Giglio violations require knowledge or constructive knowledge." },
            { text: "Were jailhouse informant deals disclosed? What happened to their charges after they testified?" },
          ]
        },
        {
          title: "📌 Preservation and Procedural Posture",
          color: teal,
          items: [
            { text: "What claims were preserved by timely objection at trial?" },
            { text: "Which claims are procedurally barred because they were or should have been raised on direct appeal?", note: "Issues that could have been raised on direct appeal generally cannot be raised in a 3.850 motion." },
            { text: "Is there a factual basis for a newly discovered evidence exception to the 2-year rule?" },
            { text: "Is there a retroactive constitutional rule that resets timeliness under Rule 3.850?" },
            { text: "Is the motion cognizable under Rule 3.850 — or does it belong under Rule 3.800 for a sentence illegal on its face?", note: "Mixing vehicles can result in dismissal or denial on wrong-vehicle grounds." },
            { text: "Is the motion sworn and factually detailed enough to survive summary denial?", note: "Rule 3.850 requires sworn, specific allegations. Witness-dependent claims must identify the witness and what they would have said." },
          ]
        },
        {
          title: "👥 Counsel Performance — All Phases",
          color: "#a78bfa",
          items: [
            { text: "Plea counsel — did counsel accurately advise on the plea, its consequences, and available defenses?", note: "A separate IAC analysis applies to plea counsel distinct from trial counsel." },
            { text: "Trial counsel — deficient performance and prejudice under Strickland?" },
            { text: "Sentencing counsel — did counsel present available mitigation? Object to scoresheet errors or improper enhancements?" },
            { text: "Appellate counsel — were preserved issues raised? File Rule 9.141(d) petition in the DCA that heard the direct appeal.", note: "2-year deadline from mandate; 4-year hard cap with misadvice." },
            { text: "Postconviction counsel — if a prior 3.850 was filed, did prior counsel raise all available claims?", note: "Failure by postconviction counsel may itself support a successive motion if claims were omitted without strategic reason." },
          ]
        },
        {
          title: "📊 Sentencing Enhancement and Classification",
          color: accent,
          items: [
            { text: "Was a habitual offender (HFO), PRR, violent career criminal (VCC), or other enhancement applied?" },
            { text: "Were the predicate convictions valid, qualifying, and correctly identified?", note: "Check the actual prior judgment and sentences — not just what appears on the scoresheet." },
            { text: "Was the offense correctly ranked and classified on the scoresheet?" },
            { text: "Were minimum mandatory findings orally pronounced at sentencing and supported by the record?" },
            { text: "Were enhancement findings made by the judge rather than a jury?", note: "Post-Erlinger, this is a developing area — document the findings and the vehicle used." },
          ]
        },
        {
          title: "💰 Restitution and Financial Sanctions",
          color: green,
          items: [
            { text: "Was restitution imposed? If so, was it supported by an evidentiary hearing and competent evidence of loss?" },
            { text: "Are the fines, costs, and surcharges imposed lawful and specifically authorized by statute?" },
            { text: "Were any fees assessed that should not have been imposed given the offense, disposition, or indigency of the defendant?" },
            { text: "Does the written judgment match what was orally pronounced at sentencing?", note: "Discrepancies between oral pronouncement and written judgment are correctable — and oral pronouncement controls." },
          ]
        },
      ];

      return (
        <>
          <div className="section">
            <p>Many cases that come to PCP are out of time on the general 3.850 window. That doesn't mean they're hopeless — it means you have to dig. This checklist walks you through a cold case review from the ground up: start with the client's own account, work through the record, and build toward identifying what — if anything — still has a path forward.</p>
            <div className="callout">
              <div className="callout-label">📌 How to use this</div>
              <p>Work through the steps in order. Steps 1–5 are investigative — they tell you what happened and what might have gone wrong. Step 6 is the legal posture check — it tells you what vehicles are still available to do something about it. Check items off as you complete them, not just when you find an issue. A completed review with nothing actionable is still a completed review.</p>
            </div>
            <div className="reality-check">
              <div className="rc-label">⚠️ The Cold Case Reality</div>
              <p>The client has usually been living with this case for years. They have theories. Some of them are right. Some of them are wishful thinking. Your job isn't to validate or dismiss — it's to go find out. Start with their account, then go see if the record supports it.</p>
            </div>
          </div>

          {sections.map((section, si) => (
            <div key={si} className="section">
              <h3 style={{color: section.color}}>{section.title}</h3>
              {section.items.map((item, ii) => {
                const key = `${si}-${ii}`;
                const isChecked = !!checklistState[key];
                return (
                  <div key={ii} className={`checklist-item ${isChecked ? "checked" : ""}`} onClick={() => toggleCheck(si, ii)}>
                    <div className="checkbox">{isChecked ? "✓" : ""}</div>
                    <div>
                      <p>{item.text}</p>
                      {item.note && <p className="ci-note">{item.note}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* EASTER EGG — Module 7 */}
          <div className="callout" style={{marginTop: '24px', borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
            <div className="callout-label" style={{color: textMuted}}>📽️ From the Archives</div>
            <p style={{color: textMuted, fontStyle: 'italic'}}>"It's not who I am underneath, but what I do that defines me." — <em>Batman Begins</em> (2005). The review is done. Now do something with it.</p>
          </div>

          <div className="card card-amber" style={{marginTop:16}}>
            <h4>🚩 Flag to PCP Staff Immediately If:</h4>
            <p>
              You find a deadline approaching that wasn't flagged before the case came to you · The case involves a juvenile life sentence · You've identified what looks like an actual innocence claim · You find evidence of law enforcement misconduct not previously raised · The case involves minor victims or witnesses that require additional handling considerations
            </p>
          </div>

          <div style={{marginTop:32, textAlign:"center"}}>
            <p style={{fontSize:14, color:textMuted, marginBottom:16}}>Want a copy to keep at your desk? Download the checklist as a print-ready PDF.</p>
            <button className="btn btn-primary" style={{fontSize:15, padding:"14px 32px"}} onClick={() => downloadChecklist(sections)}>
              ⬇ Download Case Review Checklist
            </button>
          </div>
        </>
      );
    }
  }
];

// ─── CHECKLIST PDF GENERATOR ───
function downloadChecklist(sections) {
  const stripEmoji = (str) => str.replace(/[\u{1F000}-\u{1FFFF}|\u{2600}-\u{27FF}|\u{FE00}-\u{FEFF}|\u{1F900}-\u{1F9FF}|\u{231A}-\u{27FF}|\u00A9|\u00AE]/gu, "").trim();

  const sectionColors = {
    0: "#7c3aed", 1: "#0284c7", 2: "#046878", 3: "#dc2626",
    4: "#f0a500", 5: "#374151", 6: "#f0a500", 7: "#a78bfa",
    8: "#2ecc71", 9: "#e74c3c", 10: "#0a8fa5",
    11: "#818cf8", 12: "#c084fc", 13: "#dc2626", 14: "#046878",
    15: "#a78bfa", 16: "#f0a500", 17: "#2ecc71",
  };

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>PCP Case Review Checklist</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Poppins', sans-serif; color: #1e293b; background: #fff; font-size: 10pt; }
  .page { max-width: 750px; margin: 0 auto; padding: 32px 40px; }
  .header { border-bottom: 3px solid #046878; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }
  .header-left h1 { font-size: 20pt; font-weight: 700; color: #046878; line-height: 1.1; }
  .header-left p { font-size: 9pt; color: #64748b; margin-top: 4px; }
  .header-right { font-size: 8pt; color: #94a3b8; text-align: right; line-height: 1.6; }
  .section { margin-bottom: 20px; break-inside: avoid; }
  .section-title { font-size: 10pt; font-weight: 700; color: #fff; padding: 7px 12px; border-radius: 5px; margin-bottom: 8px; letter-spacing: 0.3px; }
  .item { display: flex; align-items: flex-start; gap: 10px; padding: 7px 8px; border: 1px solid #e2e8f0; border-radius: 5px; margin-bottom: 5px; background: #f8fafc; }
  .item:nth-child(even) { background: #fff; }
  .box { width: 14px; height: 14px; border: 1.5px solid #046878; border-radius: 3px; flex-shrink: 0; margin-top: 1px; }
  .item-text { flex: 1; }
  .item-main { font-size: 9.5pt; color: #1e293b; line-height: 1.4; }
  .item-note { font-size: 8.5pt; color: #64748b; font-style: italic; margin-top: 2px; line-height: 1.3; }
  .escalate { background: #fef9ec; border: 1.5px solid #f0a500; border-radius: 6px; padding: 12px 14px; margin-top: 20px; }
  .escalate h4 { font-size: 9.5pt; font-weight: 700; color: #92400e; margin-bottom: 6px; }
  .escalate p { font-size: 9pt; color: #78350f; line-height: 1.5; }
  .footer { margin-top: 28px; padding-top: 12px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; font-size: 7.5pt; color: #94a3b8; }
  .name-line { margin-top: 20px; display: flex; gap: 32px; }
  .name-field { flex: 1; }
  .name-field label { font-size: 8pt; color: #94a3b8; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
  .name-field .line { border-bottom: 1px solid #94a3b8; height: 22px; }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { padding: 20px 28px; }
    .section { break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="header-left">
      <h1>Case Review Checklist</h1>
      <p>Post Conviction Project, Inc. &nbsp;·&nbsp; PCP Staff & Volunteer Reference</p>
    </div>
    <div class="header-right">
      postconvictionproject.org<br/>
      Florida Post-Conviction Crash Course<br/>
      PCP Internal Reference
    </div>
  </div>
  <div class="name-line">
    <div class="name-field"><label>Volunteer Name</label><div class="line"></div></div>
    <div class="name-field"><label>Client / Case</label><div class="line"></div></div>
    <div class="name-field"><label>Date</label><div class="line"></div></div>
  </div>
  <div style="height:20px"></div>
  ${sections.map((section, si) => {
    const bgColor = sectionColors[si] || "#046878";
    const title = stripEmoji(section.title);
    return `
    <div class="section">
      <div class="section-title" style="background:${bgColor}">${title}</div>
      ${section.items.map(item => `
        <div class="item">
          <div class="box"></div>
          <div class="item-text">
            <div class="item-main">${item.text}</div>
            ${item.note ? `<div class="item-note">${item.note}</div>` : ""}
          </div>
        </div>
      `).join("")}
    </div>`;
  }).join("")}
  <div class="escalate">
    <h4>🚩 Flag to PCP Staff Immediately If:</h4>
    <p>You find a deadline approaching that wasn't flagged before the case came to you &nbsp;·&nbsp; The case involves a juvenile life sentence &nbsp;·&nbsp; You've identified what looks like an actual innocence claim &nbsp;·&nbsp; You find evidence of law enforcement misconduct not previously raised &nbsp;·&nbsp; The case involves minor victims or witnesses that require additional handling considerations</p>
  </div>
  <div class="footer">
    <span>Post Conviction Project, Inc. &nbsp;·&nbsp; Elisabeth G. Whitmire, Esq., CEO &amp; Director of Legal Services</span>
    <span>This checklist is for reference only and does not constitute legal advice.</span>
  </div>
</div>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (win) {
    win.onload = () => { setTimeout(() => { win.print(); }, 800); };
  }
}

// ─── REFERENCE FOOTER ───
function ReferenceFooter() {
  const [activeTab, setActiveTab] = useState("cases");

  const cases = [
    { name: "Strickland v. Washington", citation: "466 U.S. 668 (1984)", holding: "Established the two-prong test for ineffective assistance of counsel: (1) deficient performance — counsel's representation fell below an objective standard of reasonableness; and (2) prejudice — a reasonable probability that but for counsel's errors, the outcome would have been different. Both prongs must be satisfied.", module: "Module 2 — Rule 3.850" },
    { name: "Brady v. Maryland", citation: "373 U.S. 83 (1963)", holding: "The prosecution must disclose evidence favorable to the accused when that evidence is material to guilt or punishment. Suppression of material exculpatory evidence violates due process regardless of the prosecution's good or bad faith.", module: "Module 2 — Rule 3.850" },
    { name: "Giglio v. United States", citation: "405 U.S. 150 (1972)", holding: "Extends Brady to require disclosure of impeachment evidence, including promises, deals, or inducements made to prosecution witnesses. If a key witness received a benefit in exchange for testimony and that was not disclosed, it is a Giglio violation.", module: "Module 2 — Rule 3.850" },
    { name: "Missouri v. Frye", citation: "566 U.S. 134 (2012)", holding: "Defense counsel has a duty to communicate formal plea offers to the defendant before they lapse. Failure to inform a client of a plea offer constitutes deficient performance under Strickland. The Sixth Amendment right to counsel extends to the plea bargaining process.", module: "Module 2 — Rule 3.850" },
    { name: "Lafler v. Cooper", citation: "566 U.S. 156 (2012)", holding: "Where defense counsel's deficient advice caused a defendant to reject a plea offer and proceed to trial, resulting in a harsher sentence, the defendant may be entitled to post-conviction relief. Companion case to Missouri v. Frye.", module: "Module 2 — Rule 3.850" },
    { name: "Padilla v. Kentucky", citation: "559 U.S. 356 (2010)", holding: "Defense counsel must advise non-citizen clients about the deportation consequences of a guilty plea. Failure to provide accurate immigration advice constitutes deficient performance under Strickland. Critical for any case involving a non-citizen client.", module: "Module 2 — Rule 3.850" },
    { name: "Jones v. State", citation: "591 So. 2d 911 (Fla. 1991)", holding: "Established the Florida standard for newly discovered evidence claims. The evidence must have been unknown at trial and not discoverable through due diligence, must not be merely cumulative or impeaching, and must probably produce an acquittal at a new trial.", module: "Module 2 — Rule 3.850" },
    { name: "Miller v. Alabama", citation: "567 U.S. 460 (2012)", holding: "Mandatory sentences of life without parole for juvenile offenders violate the Eighth Amendment's prohibition on cruel and unusual punishment. Courts must consider the mitigating circumstances of youth before imposing life without parole on a juvenile.", module: "Module 3 — Rule 3.800" },
    { name: "Montgomery v. Louisiana", citation: "577 U.S. 190 (2016)", holding: "Miller v. Alabama announced a substantive rule of constitutional law that applies retroactively on collateral review. Defendants serving mandatory life without parole for offenses committed as juveniles may seek relief in post-conviction proceedings.", module: "Module 3 — Rule 3.800" },
    { name: "State v. Anderson", citation: "905 So. 2d 111 (Fla. 2005)", holding: "Timely Rule 3.850 motions raising scoresheet errors are governed by the 'would-have-been-imposed' standard — whether the sentencing judge would actually have imposed the same sentence on a corrected scoresheet. More favorable to defendants than the 3.800(a) standard.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Brooks v. State", citation: "969 So. 2d 238 (Fla. 2007)", holding: "Rule 3.800(a) scoresheet-error motions are governed by the stricter 'could-have-been-imposed' standard. If the same sentence could legally have been imposed on a corrected scoresheet, relief is denied regardless of what the judge might actually have done.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Negron Gil de Rubio v. State", citation: "272 So. 3d 811 (Fla. 2d DCA 2019)", holding: "Second DCA: When a 3.850 motion is untimely and the issue is raised under 3.800(a), the stricter 'could-have-been-imposed' standard applies. If the sentence could still legally have been imposed on remaining convictions, relief is denied.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Fernandez v. State", citation: "199 So. 3d 500 (Fla. 2d DCA 2016)", holding: "Second DCA: When vacating a conviction changes the scoresheet, the defendant is generally entitled to resentencing on a corrected scoresheet. Key distinction from Negron is procedural timing — whether timely 3.850 relief was available.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Cox v. State", citation: "192 So. 3d 581 (Fla. 4th DCA 2016)", holding: "Fourth DCA: Vacatur of a conviction requires resentencing with a corrected scoresheet. The court does not apply the 'could-have-been-imposed' harmless error framework to vacatur situations. The defendant gets resentenced because the sentence is built on a now-invalid conviction.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Pierce v. State", citation: "281 So. 3d 569 (Fla. 5th DCA 2019)", holding: "Fifth DCA: Aligns with the Fourth District. Resentencing is required after postconviction vacatur because the sentence must be based on remaining valid convictions. The 5th DCA does not apply the stricter 2d DCA framework in vacatur cases.", module: "Module 3 — Rule 3.800 (District Split)" },
    { name: "Teague v. Lane", citation: "489 U.S. 288 (1989)", holding: "New constitutional rules of criminal procedure generally do not apply retroactively on collateral review unless they fall into one of two narrow exceptions: rules placing conduct beyond criminal punishment, or watershed rules of criminal procedure essential to accuracy. Most new rules fail both exceptions.", module: "Module 4 — The Clock" },
    { name: "Witt v. State", citation: "387 So. 2d 922 (Fla. 1980)", holding: "Florida's retroactivity framework. A new legal rule applies retroactively if it constitutes a development of fundamental significance — either placing conduct beyond the state's authority to punish or representing a watershed change in constitutional protection. Sometimes more favorable than Teague.", module: "Module 4 — The Clock" },
    { name: "Erlinger v. United States", citation: "602 U.S. 821 (2024)", holding: "The Fifth and Sixth Amendments require a unanimous jury to determine beyond a reasonable doubt whether a defendant's prior offenses were committed on separate occasions for sentencing enhancement purposes. Directly implicates Florida's HFO, PRR, HVO, and VCC enhancement statutes.", module: "Module 4 — The Clock" },
    { name: "Wainwright v. State", citation: "411 So. 3d 392 (Fla. 2025)", holding: "Held that Erlinger v. United States announced a procedural rule that is not retroactive under Florida retroactivity principles. Although Wainwright arose in the capital postconviction context, its retroactivity analysis is not limited to capital-rule practice and should be treated as highly relevant to Rule 3.850 litigation raising the same Erlinger-based claim. Procedural rules — those governing how facts are found rather than whether the state can punish the conduct — do not apply retroactively on collateral review.", module: "Module 4 — The Clock" },
    { name: "Hitchcock v. State", citation: "866 So. 2d 23 (Fla. 2004)", holding: "Rule 3.853 is not intended as a 'fishing expedition.' The movant must demonstrate with specific facts how the requested DNA testing is relevant to their guilt or innocence. General or speculative requests for testing are insufficient.", module: "Module 6 — Rule 3.853" },
    // ── Module 7: Other Issues ──
    { name: "State v. Green", citation: "944 So. 2d 208 (Fla. 2006)", holding: "Addresses the validity of pleas and collateral consequences. A plea may be involuntary where counsel failed to advise the defendant of serious consequences closely connected to the criminal case. Also relevant to collateral consequences claims including civil commitment and registration obligations.", module: "Module 7 — Other Issues (Plea Validity / Collateral Consequences)" },
    { name: "State v. Leroux", citation: "689 So. 2d 235 (Fla. 1996)", holding: "Florida Supreme Court case addressing the knowing and voluntary nature of guilty pleas. A plea is not constitutionally valid unless the defendant understands the nature of the charges, the range of allowable punishment, and the direct consequences of the plea.", module: "Module 7 — Other Issues (Plea Validity)" },
    { name: "Peart v. State", citation: "756 So. 2d 42 (Fla. 2000)", holding: "Addresses the validity of pleas and the obligation to advise defendants of direct consequences. Also relevant to collateral consequences — counsel's failure to advise about serious consequences such as registration requirements or civil commitment may support post-conviction relief.", module: "Module 7 — Other Issues (Plea Validity / Collateral Consequences)" },
    { name: "Dougherty v. State", citation: "149 So. 3d 672 (Fla. 2014)", holding: "Addresses competency standards and procedures in Florida post-conviction proceedings. A conviction or plea entered while the defendant was incompetent to proceed may be constitutionally infirm.", module: "Module 7 — Other Issues (Competency)" },
    { name: "Nelson v. State", citation: "43 So. 3d 20 (Fla. 2010)", holding: "Florida Supreme Court case addressing competency to proceed in criminal proceedings. A defendant is incompetent if they lack the ability to understand the proceedings or to assist counsel in their own defense. Competency is a constitutional prerequisite — proceedings conducted while a defendant is incompetent are void.", module: "Module 7 — Other Issues (Competency)" },
    { name: "Porter v. State", citation: "788 So. 2d 917 (Fla. 2001)", holding: "Addresses both competency and conflict of interest in the post-conviction context. An attorney's conflict of interest that adversely affects performance may constitute IAC without the full Strickland prejudice showing.", module: "Module 7 — Other Issues (Competency / Conflict of Interest)" },
    { name: "Mordenti v. State", citation: "894 So. 2d 161 (Fla. 2004)", holding: "Florida Supreme Court case addressing Brady violation standards. The State's suppression of evidence favorable to the accused — including impeachment material — violates due process when the evidence is material to guilt or punishment.", module: "Module 7 — Other Issues (Brady/Giglio)" },
    { name: "Rogers v. State", citation: "782 So. 2d 373 (Fla. 2001)", holding: "Addresses Giglio and false testimony claims in Florida post-conviction proceedings. The State's knowing use of false testimony, or failure to correct it, violates due process and can warrant a new trial.", module: "Module 7 — Other Issues (Brady/Giglio)" },
    { name: "Swafford v. State", citation: "679 So. 2d 736 (Fla. 1996)", holding: "Addresses both newly discovered evidence standards and successive petition bars. A claim is barred if it could have been raised in a prior motion — the bar is strict, but newly discovered evidence that could not have been found earlier may overcome it.", module: "Module 7 — Other Issues (Newly Discovered Evidence / Successive Bar)" },
    { name: "Rutherford v. Moore", citation: "774 So. 2d 637 (Fla. 2000)", holding: "Addresses ineffective assistance of appellate counsel (IAAC) standards. Appellate counsel is deficient when they omit a clearly stronger issue in favor of weaker ones. Relief requires showing both deficient performance and that the omitted issue would probably have succeeded.", module: "Module 7 — Other Issues (IAAC)" },
    { name: "Morrison v. State", citation: "818 So. 2d 432 (Fla. 2002)", holding: "Florida IAAC case addressing the relationship between preserved trial issues and appellate counsel's obligation to raise them. Failure to raise a meritorious preserved issue may constitute deficient appellate performance.", module: "Module 7 — Other Issues (IAAC)" },
    { name: "Young v. State", citation: "699 So. 2d 624 (Fla. 1997)", holding: "Addresses offense classification and scoresheet calculation issues in Florida sentencing. Relevant to cases where the offense was incorrectly ranked, affecting the guidelines range and potentially producing an illegal sentence.", module: "Module 7 — Other Issues (Sentencing Enhancements)" },
    { name: "State v. Iacovone", citation: "660 So. 2d 1371 (Fla. 1995)", holding: "Florida Supreme Court case addressing minimum mandatory sentencing requirements and the oral pronouncement rule. The written sentence must conform to the oral pronouncement at sentencing — discrepancies are correctable errors.", module: "Module 7 — Other Issues (Sentencing Enhancements)" },
    { name: "Daniels v. State", citation: "491 So. 2d 543 (Fla. 1986)", holding: "Addresses jail credit requirements in Florida. A defendant is entitled to credit for all time served in custody before sentencing. Failure to award proper credit produces an illegal sentence correctable under Rule 3.800.", module: "Module 7 — Other Issues (Jail Credit)" },
    { name: "State v. Mancino", citation: "714 So. 2d 429 (Fla. 1998)", holding: "Florida Supreme Court case on jail credit and time-served calculations. Defendants are entitled to credit for all time spent in county jail before sentencing, including time served on related charges.", module: "Module 7 — Other Issues (Jail Credit)" },
    { name: "Way v. State", citation: "760 So. 2d 903 (Fla. 2000)", holding: "Addresses informant witness credibility and the State's obligation to disclose benefits provided to cooperating witnesses. A pattern of cooperation in multiple cases, if undisclosed, can support a Giglio claim.", module: "Module 7 — Other Issues (Informant Issues)" },
    { name: "Melbourne v. State", citation: "679 So. 2d 759 (Fla. 1996)", holding: "Established Florida's framework for evaluating racially discriminatory peremptory challenges under the Florida Constitution. Sets out a three-step process for trial courts to follow when a Batson/Neil objection is raised to a peremptory strike.", module: "Module 7 — Other Issues (Jury Selection)" },
    { name: "State v. Neil", citation: "457 So. 2d 481 (Fla. 1984)", holding: "Florida Supreme Court case establishing the right to challenge peremptory strikes on racial grounds — predating the U.S. Supreme Court's Batson decision. Florida's Neil/Melbourne framework provides independent state constitutional protection.", module: "Module 7 — Other Issues (Jury Selection)" },
    { name: "State v. Paul", citation: "934 So. 2d 1167 (Fla. 2006)", holding: "Addresses merger of offenses and double jeopardy in Florida. Where a defendant is convicted of multiple offenses arising from a single criminal act, courts must determine whether convictions on all counts are constitutionally permissible.", module: "Module 7 — Other Issues (Double Jeopardy)" },
    { name: "Grant v. State", citation: "770 So. 2d 655 (Fla. 2000)", holding: "Florida Supreme Court case addressing double jeopardy and merger of offenses. Where multiple convictions or sentences arise from a single criminal act or episode, courts must analyze whether separate punishment is constitutionally permissible under the Blockburger test and Florida's single-act analysis.", module: "Module 7 — Other Issues (Double Jeopardy)" },
    { name: "State v. Nelson", citation: "26 So. 3d 570 (Fla. 2010)", holding: "Florida Supreme Court speedy trial case. Addresses the right to speedy trial under Florida Rule of Criminal Procedure 3.191 and the constitutional speedy trial right, including the analysis for prejudice from pretrial delay.", module: "Module 7 — Other Issues (Speedy Trial)" },
    { name: "State v. Williams", citation: "791 So. 2d 1088 (Fla. 2001)", holding: "Florida Supreme Court case addressing speedy trial rights and the consequences of pretrial delay. Addresses both the Florida speedy trial rule and the constitutional speedy trial right, including the Barker v. Wingo balancing factors as applied in Florida proceedings.", module: "Module 7 — Other Issues (Speedy Trial)" },
    { name: "Harvey v. Dugger", citation: "656 So. 2d 1253 (Fla. 1995)", holding: "Florida case addressing the successive petition bar and exceptions. A second or successive Rule 3.850 motion raising claims that could have been raised in a prior motion is generally barred — the exception requires newly discovered facts or a retroactive change in law.", module: "Module 7 — Other Issues (Successive Bar)" },
  ];

  const rules = [
    { name: "Florida Rule of Criminal Procedure 3.850", citation: "Fla. R. Crim. P. 3.850", holding: "The primary vehicle for post-conviction relief in Florida. Covers constitutional violations, ineffective assistance of counsel, newly discovered evidence, and newly applicable retroactive law. General two-year filing deadline from when judgment becomes final on direct review, with exception windows for newly discovered facts and retroactive law.", module: "Module 2 — Rule 3.850" },
    { name: "Florida Rule of Criminal Procedure 3.800", citation: "Fla. R. Crim. P. 3.800", holding: "Provides relief for illegal sentences — sentences the court had no legal authority to impose. No time bar. Covers sentences exceeding the statutory maximum, scoresheet errors, upward departures without written findings, merger and double jeopardy violations, and retroactive case law changes affecting sentencing.", module: "Module 3 — Rule 3.800" },
    { name: "Florida Rule of Criminal Procedure 3.853", citation: "Fla. R. Crim. P. 3.853", holding: "Provides procedures for obtaining post-conviction DNA testing of physical evidence. No time bar — may be filed at any time after judgment becomes final. Requires showing that identification was genuinely disputed, that physical evidence still exists, and that there is a reasonable probability of acquittal or lesser sentence if DNA results had been admitted at trial.", module: "Module 6 — Rule 3.853" },
    { name: "Florida Rule of Appellate Procedure 9.141(d)", citation: "Fla. R. App. P. 9.141(d)", holding: "Governs petitions alleging ineffective assistance of appellate counsel (IAAC). Filed as a petition in the appellate court that heard the direct appeal — not a motion in the trial court. Two-year filing deadline from when judgment became final on direct review, with a four-year hard cap even where counsel gave affirmative misadvice.", module: "Module 5 — IAAC" },
    { name: "28 U.S.C. § 2254 / AEDPA", citation: "28 U.S.C. § 2254; Antiterrorism and Effective Death Penalty Act of 1996, Pub. L. No. 104-132", holding: "The federal habeas corpus statute for state prisoners. Requires full exhaustion of state remedies before federal review. One-year filing deadline from when the state conviction becomes final on direct review, tolled but not reset while properly filed state post-conviction motions are pending.", module: "Module 4 — The Clock" },
  ];

  const districtSplit = [
    { label: "Florida Supreme Court — Background Rules", color: teal, entries: [
      { case: "State v. Anderson, 905 So. 2d 111 (Fla. 2005)", standard: "Rule 3.850 scoresheet errors → 'would-have-been-imposed'", result: "Timely 3.850 motions use the more defendant-friendly standard. The question is whether this judge would actually have sentenced differently on a corrected scoresheet." },
      { case: "Brooks v. State, 969 So. 2d 238 (Fla. 2007)", standard: "Rule 3.800(a) scoresheet errors → 'could-have-been-imposed'", result: "Stricter standard applies to facial-record 3.800(a) claims. If the same sentence could legally have been imposed, relief is denied." },
    ]},
    { label: "Second District", color: "#38bdf8", entries: [
      { case: "Negron Gil de Rubio v. State, 272 So. 3d 811 (Fla. 2d DCA 2019)", standard: "Untimely 3.850 / 3.800(a) motion → could-have-been-imposed", result: "Relief denied if same sentence could legally still be imposed on remaining convictions. Applies stricter Brooks framework when 3.850 is untimely." },
      { case: "Fernandez v. State, 199 So. 3d 500 (Fla. 2d DCA 2016)", standard: "Vacatur changes scoresheet → resentencing generally required", result: "Vacatur can entitle defendant to resentencing where scoresheet changes. Procedural timing is the key distinction from Negron." },
    ]},
    { label: "Fourth District", color: green, entries: [
      { case: "Cox v. State, 192 So. 3d 581 (Fla. 4th DCA 2016)", standard: "Vacatur → resentencing required, no harmless error", result: "Resentencing required with corrected scoresheet after vacatur. No could-have-been-imposed analysis in vacatur situations." },
    ]},
    { label: "Fifth District", color: accent, entries: [
      { case: "Pierce v. State, 281 So. 3d 569 (Fla. 5th DCA 2019)", standard: "Vacatur → resentencing required (aligns with 4th DCA)", result: "Resentencing required after vacatur. 5th DCA aligns with 4th DCA, not the stricter 2d DCA framework." },
    ]},
  ];

  const downloadReference = () => {
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>PCP Case & Rule Reference</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Poppins', sans-serif; color: #1e293b; background: #fff; font-size: 10pt; }
  .page { max-width: 750px; margin: 0 auto; padding: 32px 40px; }
  .header { border-bottom: 3px solid #046878; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; }
  .header-left h1 { font-size: 18pt; font-weight: 700; color: #046878; }
  .header-left p { font-size: 9pt; color: #64748b; margin-top: 4px; }
  .header-right { font-size: 8pt; color: #94a3b8; text-align: right; line-height: 1.6; }
  .section-label { font-size: 9pt; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #046878; margin: 20px 0 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
  .entry { margin-bottom: 12px; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 6px; background: #f8fafc; break-inside: avoid; }
  .entry-name { font-size: 11pt; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
  .entry-citation { font-size: 9pt; color: #046878; font-style: italic; margin-bottom: 6px; }
  .entry-holding { font-size: 9.5pt; color: #334155; line-height: 1.5; }
  .entry-module { font-size: 8pt; color: #94a3b8; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
  .district-block { margin-bottom: 12px; border: 1px solid #bfdbfe; border-radius: 6px; overflow: hidden; break-inside: avoid; }
  .district-header { padding: 8px 14px; font-size: 9pt; font-weight: 700; color: #1e3a5f; background: #eff6ff; border-bottom: 1px solid #bfdbfe; }
  .district-entry { padding: 10px 14px; border-bottom: 1px solid #e0effe; }
  .district-entry:last-child { border-bottom: none; }
  .district-case { font-size: 9.5pt; font-weight: 600; color: #1d4ed8; font-style: italic; }
  .district-standard { font-size: 8.5pt; color: #64748b; margin: 2px 0; }
  .district-result { font-size: 9.5pt; color: #334155; line-height: 1.4; margin-top: 3px; }
  .footer { margin-top: 28px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 7.5pt; color: #94a3b8; display: flex; justify-content: space-between; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .entry, .district-block { break-inside: avoid; } }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div class="header-left"><h1>Case & Rule Reference</h1><p>Post Conviction Project, Inc. · PCP Staff & Volunteer Reference</p></div>
    <div class="header-right">postconvictionproject.org<br/>Florida Post-Conviction Crash Course<br/>PCP Internal Reference</div>
  </div>

  <div class="section-label">Cases</div>
  ${cases.filter(c => !c.module.includes('District Split')).map(c => `
  <div class="entry">
    <div class="entry-name">${c.name}</div>
    <div class="entry-citation">${c.citation}</div>
    <div class="entry-holding">${c.holding}</div>
    <div class="entry-module">${c.module}</div>
  </div>`).join('')}

  <div class="section-label">Florida District Split — Vacatur & Resentencing</div>
  ${districtSplit.map(d => `
  <div class="district-block">
    <div class="district-header">${d.label}</div>
    ${d.entries.map(e => `
    <div class="district-entry">
      <div class="district-case">${e.case}</div>
      <div class="district-standard">${e.standard}</div>
      <div class="district-result">${e.result}</div>
    </div>`).join('')}
  </div>`).join('')}

  <div class="section-label">Rules & Statutes</div>
  ${rules.map(r => `
  <div class="entry">
    <div class="entry-name">${r.name}</div>
    <div class="entry-citation">${r.citation}</div>
    <div class="entry-holding">${r.holding}</div>
    <div class="entry-module">${r.module}</div>
  </div>`).join('')}

  <div class="footer">
    <span>Post Conviction Project, Inc. · Elisabeth G. Whitmire, Esq., CEO & Director of Legal Services</span>
    <span>For reference only — not legal advice.</span>
  </div>
</div>
</body>
</html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) { win.onload = () => { setTimeout(() => { win.print(); }, 800); }; }
  };

  return (
    <div className="reference-footer">
      <div className="reference-footer-inner">
        <h2>📚 Case & Rule Reference</h2>
        <p className="ref-subtitle">Every authority cited in this training — core modules and additional issues reference. Tap any entry to read the full summary. Download the complete reference sheet as a print-ready PDF.</p>

        <div className="ref-tabs">
          <button className={`ref-tab ${activeTab === "cases" ? "active" : ""}`} onClick={() => setActiveTab("cases")}>Cases</button>
          <button className={`ref-tab ${activeTab === "rules" ? "active" : ""}`} onClick={() => setActiveTab("rules")}>Rules & Statutes</button>
          <button className={`ref-tab ${activeTab === "split" ? "active" : ""}`} onClick={() => setActiveTab("split")}>District Split</button>
        </div>

        {activeTab === "cases" && (
          <div className="ref-grid">
            {cases.filter(c => !c.module.includes("District Split")).map((c, i) => (
              <div key={i} className="ref-card">
                <div className="ref-card-name">{c.name}</div>
                <div className="ref-card-citation">{c.citation}</div>
                <div className="ref-card-holding">{c.holding}</div>
                <div className="ref-card-module">{c.module}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "rules" && (
          <div className="ref-grid">
            {rules.map((r, i) => (
              <div key={i} className="ref-card">
                <div className="ref-card-name">{r.name}</div>
                <div className="ref-card-citation">{r.citation}</div>
                <div className="ref-card-holding">{r.holding}</div>
                <div className="ref-card-module">{r.module}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "split" && (
          <div>
            <p style={{fontSize: '13px', color: textMuted, marginBottom: '20px', lineHeight: '1.6'}}>
              The same vacatur facts can produce opposite outcomes depending on which DCA has jurisdiction. Geography and procedural timing are everything.
            </p>
            {districtSplit.map((d, i) => (
              <div key={i} className="district-card" style={{marginBottom: '8px'}}>
                <div className="district-card-header" style={{borderLeft: `4px solid ${d.color}`}}>{d.label}</div>
                <div className="district-card-body">
                  {d.entries.map((e, j) => (
                    <div key={j} className="district-row" style={j > 0 ? {marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${darkBorder}`} : {}}>
                      <span className="district-case">{e.case}</span>
                      <span className="district-standard">{e.standard}</span>
                      <span className="district-result">{e.result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="ref-download-row">
          <button className="btn btn-primary" onClick={downloadReference}>⬇ Download Full Reference Sheet</button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function App() {
  const [activeModule, setActiveModule] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [completedModules, setCompletedModules] = useState(new Set());

  const quizCounts = {
    0: 0,  // Intro
    1: 5,  // Rule 3.850 (q1_1 through q1_5)
    2: 6,  // Rule 3.800 (q2_1 through q2_6)
    3: 4,  // The Clock (q3_1 through q3_4)
    4: 2,  // IAAC (q5_1, q5_2)
    5: 3,  // Rule 3.853 (q6_1 through q6_3)
    6: 0,  // Other Issues
    7: 0,  // Case Checklist
  };

  const handleAnswer = (id, isCorrect) => {
    setQuizAnswers(prev => ({ ...prev, [id]: { answered: true, correct: isCorrect } }));
  };

  const totalQuestions = Object.values(quizCounts).reduce((a,b) => a+b, 0);
  const answeredCount = Object.keys(quizAnswers).length;
  const correctCount = Object.values(quizAnswers).filter(a => a.correct).length;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const goNext = () => {
    setCompletedModules(prev => new Set([...prev, activeModule]));
    if (activeModule < modules.length - 1) setActiveModule(activeModule + 1);
    scrollToTop();
  };

  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const mod = modules[activeModule];
  const ModContent = mod.content;

  return (
    <div className="app">
      <style>{styles}</style>

      <div className="hero">
        <img src="/logo.png" alt="Post Conviction Project" style={{height: 80, display: "block", margin: "0 auto 16px", mixBlendMode: "screen"}} />
        <div className="hero-badge">Post Conviction Project · Volunteer Training</div>
        <h1>Florida Post-Conviction<br/><span>Crash Course</span></h1>
        <p>Rules 3.850, 3.800, 3.853, and more — what to look for, how the clock works, and when to escalate</p>
        <div className="progress-bar-wrap">
          <div className="progress-label">
            <span>Quiz Progress</span>
            <span>{correctCount}/{totalQuestions} correct</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{width: `${progress}%`}} />
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        {modules.map((m, i) => (
          <button
            key={i}
            className={`nav-tab ${activeModule === i ? "active" : ""} ${completedModules.has(i) ? "completed" : ""}`}
            onClick={() => { setActiveModule(i); scrollToTop(); }}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="content">
        <div className="module-header">
          <div className="module-number">Module {activeModule + 1} of {modules.length}</div>
          <div className="module-title">{mod.title}</div>
          <div className="module-meta">
            {mod.estimatedTime && (
              <span className="time-estimate">⏱ {mod.estimatedTime}</span>
            )}
          </div>
          <div className="module-intro">{mod.subtitle}</div>
        </div>

        <ModContent quiz={quizAnswers} onAnswer={handleAnswer} />

        <div className="module-nav">
          {activeModule > 0 ? (
            <button className="btn btn-secondary" onClick={() => { setActiveModule(activeModule - 1); scrollToTop(); }}>← Previous</button>
          ) : <div />}
          {activeModule < modules.length - 1 ? (
            <button className="btn btn-primary" onClick={goNext}>Next Module →</button>
          ) : (
            <div style={{textAlign:"center", flex:1}}>
              <div className="score-banner">
                <div className="score-num">{correctCount}/{totalQuestions}</div>
                <p>Quiz questions answered correctly</p>
                {correctCount === totalQuestions && <p style={{color: green, marginTop:8}}>🎉 Perfect score — you're ready to review cases.</p>}
                <p style={{marginTop: 16, fontSize: 13, color: textMuted}}>
                  📬 Email your completion code to <strong style={{color: tealLight}}>eg.whitmire@postconvictionproject.org</strong>
                </p>
                <p style={{fontSize: 12, color: textMuted, marginTop: 8}}>
                  As you worked through each module, you may have noticed a few quotes tucked into the content. Collect them all and include them in your email — they're your proof of completion.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <ReferenceFooter />
    </div>
  );
}
