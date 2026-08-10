// slides-2-role.jsx — Slides 4 (GPT vs ChatGPT), 5 (three roles), 6 (context engineering), 7 (work process), 8 (tools), 9 (cases overview)

function SlideGPTvs() {
  const [step, setStep] = useState(0);

  return (
    <section className="slide" data-screen-label="05 GPT vs ChatGPT">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, marginBottom: 44 }}>
        <h2 className="display display-3">뭐가 달라요<em>?</em></h2>
        <div className="vs-steps">
          {[1, 2].map((s) =>
          <span key={s} className={`vs-step ${step >= s ? "on" : ""}`}>{s}</span>
          )}
        </div>
      </div>

      <div
        className={`vs-stage ${step >= 1 ? "vs-stage--s1" : ""} ${step >= 2 ? "vs-stage--s2" : ""}`}
        onClick={() => setStep((s) => (s + 1) % 3)}>

        {/* Outer ChatGPT halo — background box appears on hover */}
        <div className="vs-halo" aria-hidden="true" />

        {/* Center: GPT card + ChatGPT card side by side */}
        <div className="vs-center">
          <div className="vs-inner">
            <span className="vs-inner-eyebrow"><em>MODEL</em> · 모델</span>
            <span className="vs-inner-name">GPT</span>
            <span className="vs-inner-meta">엔진 · API</span>
            <span className="vs-inner-body">OpenAI가 학습시킨 LLM 엔진.</span>
          </div>
          <div className="vs-mate-wrap">
            <span className="vs-mate-eyebrow"><em>PRODUCT</em> · 제품</span>
            <span className="vs-mate">ChatGPT</span>
            <span className="vs-mate-meta">대화 · 검색 · 도구 · UI</span>
            <span className="vs-mate-body">GPT 위에 대화·검색·도구·UI를 결합해 만든 완성된 서비스.</span>
          </div>
        </div>
      </div>

      <SlideFoot section="01 직무 소개" idx={5} />
    </section>);
}

function SlideRoles() {
  const [focus, setFocus] = useState(null);
  const roles = [
  {
    key: "make", num: "01", action: "MODEL", actionSub: "BUILDER", subEn: "AI 연구자 · ML 엔지니어",
    title: "모델을 만드는 사람",
    desc: "GPT, Claude 같은 모델 자체를 학습시키고 발전시킵니다.",
    pill: null,
    foot: { k: "GPT (모델)", v: "OpenAI 연구자들이 만든 LLM" }
  },
  {
    key: "use", num: "02", action: "PRODUCT", actionSub: "BUILDER", subEn: "AI 에이전트 개발자",
    title: "활용해서 제품을 만드는 사람",
    desc: "이미 만들어진 LLM을 활용하여 사용자를 위한 제품을 구현합니다.",
    pill: "TODAY",
    foot: { k: "ChatGPT (제품)", v: "GPT를 활용해 만든 채팅 서비스" }
  },
  {
    key: "consume", num: "03", action: "USER", actionSub: null, subEn: "일반 사용자",
    title: "제품을 사용하는 사람",
    desc: "ChatGPT 같은 완성된 서비스를 일상에서 사용합니다.",
    pill: null,
    foot: { k: "ChatGPT 사용", v: "질문을 던지고 답을 받는 사용자" }
  }];


  return (
    <section className="slide" data-screen-label="06 세 역할">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
        <Eyebrow>AI를 다루는 세 가지 역할 중</Eyebrow>
        <h2 className="display display-3">AI 에이전트 개발자의 <em>역할</em></h2>
      </div>

      <div className={`roles ${focus ? "has-focus" : ""}`}>
        {roles.map((r) =>
        <div
          key={r.key}
          className={`role ${focus === r.key ? "focus" : ""} ${r.pill ? "role--bridge" : ""}`}
          onClick={() => setFocus(focus === r.key ? null : r.key)}
          onMouseEnter={() => setFocus(r.key)}
          onMouseLeave={() => setFocus(null)}>

            <div className="role-num">{r.num}</div>
            <div className="role-action">
              {r.action}
              <span className="role-action-sub" style={r.actionSub ? null : { visibility: "hidden" }}>
                {r.actionSub || "—"}
              </span>
            </div>
            <div className="role-sub">{r.subEn}</div>
            <div className="role-title">{r.title}</div>
            <div className="role-desc">{r.desc}</div>
            {r.pill ? <div className="role-pill">TODAY'S TOPIC</div> : <div className="role-empty" />}
          </div>
        )}
      </div>

      <div className="roles-foot">
        {roles.map((r) =>
        <div key={r.key} className="roles-foot-cell">
            <span className="roles-foot-k">{r.foot.k}</span>
            <span className="roles-foot-v">{r.foot.v}</span>
          </div>
        )}
      </div>

      <SlideFoot section="01 직무 소개" idx={6} />
    </section>);
}

// NEW: positions context engineering within the broader AI agent developer role
function SlideContext() {
  const chips = ["모델 선택", "시스템 설계", "백엔드 구현", "운영"];
  const [activeKey, setActiveKey] = useState(null);

  const keys = [
  { k: "info", label: "정보", term: "RAG", examples: ["도메인 지식", "사용자 데이터", "참고 자료"] },
  { k: "tool", label: "도구", term: "도구 호출 · Tool Use", examples: ["웹 검색", "DB 조회", "API 호출"] },
  { k: "context", label: "맥락", term: "메모리", examples: ["이전 대화", "현재 상태", "사용자 선호"] }];


  return (
    <section className="slide" data-screen-label="07 컨텍스트 엔지니어링">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
        <Eyebrow>AI 에이전트 개발자가 하는 업무 중에서…</Eyebrow>
        <div className="ctx-cluster">
          {chips.map((c) =>
          <span key={c} className="ctx-chip">{c}</span>
          )}
          <span className="ctx-chip ctx-chip--more">…</span>
        </div>
      </div>

      <h2 className="display display-2 ctx-headline" style={{ fontSize: "45px" }}>
        <em>컨텍스트 엔지니어링</em>
      </h2>

      <div className="ctx-body">
        <div className="ctx-def">
          <div className="ctx-def-body">
            <p>
              LLM이 작업을 잘 해내도록 필요한{" "}
              {keys.map((it, i) =>
              <React.Fragment key={it.k}>
                  <span
                  className={`ctx-key ${activeKey === it.k ? "on" : ""}`}
                  onMouseEnter={() => setActiveKey(it.k)}
                  onMouseLeave={() => setActiveKey(null)}
                  onClick={() => setActiveKey(activeKey === it.k ? null : it.k)}>
                  {it.label}</span>
                  {i < keys.length - 1 ? " · " : ""}
                </React.Fragment>
              )}
              을 모아 전달하는 시스템을 설계하고 구현하는 일.
            </p>
            <p>
              좋은 프롬프트 하나가 아니라, <em>LLM이 보게 될 전체 환경</em>을 만드는 일.
            </p>
          </div>
        </div>

        <div
          className={`ctx-vis ${activeKey ? "has-active" : ""}`}
          onMouseLeave={() => setActiveKey(null)}>

          <div className="ctx-vis-inputs">
            {keys.map((it) =>
            <div
              key={it.k}
              className={`ctx-vis-card ${activeKey === it.k ? "on" : ""}`}
              onMouseEnter={() => setActiveKey(it.k)}
              onClick={() => setActiveKey(activeKey === it.k ? null : it.k)}>
                <div className="ctx-vis-card-label">{it.label}<em>{it.term}</em></div>
                <ul>
                  {it.examples.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </div>
            )}
          </div>
          <svg className="ctx-vis-lines" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            {[
            { x: 100, k: "info" },
            { x: 300, k: "tool" },
            { x: 500, k: "context" }].
            map((l) =>
            <line
              key={l.k}
              className={`ctx-vis-line ${activeKey === l.k ? "on" : ""}`}
              x1={l.x} y1="0" x2="300" y2="60"
              vectorEffect="non-scaling-stroke" />
            )}
          </svg>
          <div className="ctx-vis-llm">LLM</div>
        </div>
      </div>

      <SlideFoot section="01 직무 소개" idx={7} />
    </section>);

}

function SlideProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const steps = [
  { n: "01", t: "문제 파악", details: ["요구의 본질이 무엇인지 파악합니다", "AI로 되는 것과 안 되는 것을 가려냅니다"] },
  { n: "02", t: "요구사항 구체화", details: ["도메인을 학습하여 숨겨진 요구사항을 발굴합니다", "모호한 요구를 판정 가능한 기준으로 다시 씁니다", "어떤 데이터가 필요한지 정의합니다"] },
  { n: "03", t: "설계", details: ["작업을 나누고 모델·도구 구성을 정합니다", "프롬프트와 파이프라인 구조를 잡습니다"] },
  { n: "04", t: "구현", details: ["흩어진 문서와 데이터를 쓸 수 있는 형태로 정리합니다", "코드를 작성하고 외부 시스템과 연결합니다"] },
  { n: "05", t: "검증과 개선", details: ["무엇을 기준으로 확인할지부터 정합니다", "실패 케이스를 모아 유형별로 잡아나갑니다"] }];

  const cur = steps[active];
  const N = steps.length, RING = 130, HALF = 180, NODE = 46;
  const toRad = (a) => a * Math.PI / 180;
  const nodePos = (i) => {
    const a = toRad(i * (360 / N) - 90);
    return { left: HALF + RING * Math.cos(a) - NODE, top: HALF + RING * Math.sin(a) - NODE };
  };

  // Auto-rotate when not paused
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, 2000);
    return () => clearInterval(id);
  }, [paused, steps.length]);

  const handleClick = (i) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <section className="slide" data-screen-label="08 업무 프로세스">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
        <h2 className="display display-3">업무 프로세스</h2>
      </div>

      <div className="proc-cycle">
        <div className="proc-cycle-diagram">
          <svg viewBox="0 0 360 360" className="proc-cycle-ring" aria-hidden="true">
            <defs>
              <marker id="cycle-arrow" viewBox="0 0 10 10" refX="6" refY="5"
              markerWidth="7" markerHeight="7" orient="auto">
                <path d="M 0 0 L 9 5 L 0 10" />
              </marker>
            </defs>
            <circle className="guide" cx="180" cy="180" r="130" />
            {steps.map((_, i) => {
              const r = 130;
              const step = 360 / N;
              const startAngle = i * step - 90 + 22;
              const endAngle = (i + 1) * step - 90 - 22;
              const x1 = 180 + r * Math.cos(toRad(startAngle));
              const y1 = 180 + r * Math.sin(toRad(startAngle));
              const x2 = 180 + r * Math.cos(toRad(endAngle));
              const y2 = 180 + r * Math.sin(toRad(endAngle));
              return (
                <path
                  key={i}
                  className="arc"
                  d={`M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`}
                  markerEnd="url(#cycle-arrow)" />);


            })}
          </svg>

          {steps.map((s, i) =>
          <button
            key={s.n}
            className={`proc-cycle-node ${active === i ? "active" : ""}`}
            style={nodePos(i)}
            onClick={() => handleClick(i)}>
              <span className="n">{s.n}</span>
              <span className="t">{s.t}</span>
            </button>
          )}

          <div className="proc-cycle-center">
            <div className="glyph">↻</div>
            <div className="label">{paused ? "고정됨" : "반복"}</div>
          </div>
        </div>

        <div className="proc-cycle-detail" key={active}>
          <span className="proc-detail-eyebrow">STEP {cur.n}</span>
          <h3 className="proc-detail-title">{cur.t}</h3>
          <ul>
            {cur.details.map((d) => <li key={d}>{d}</li>)}
          </ul>
          {paused &&
          <button
            className="proc-cycle-resume"
            onClick={() => setPaused(false)}>
              자동 재생 ↻
            </button>
          }
        </div>
      </div>

      <SlideFoot section="01 직무 소개" idx={8} />
    </section>);
}

const DEVICON = (name, variant) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const TOOL_GLYPHS = {
  mail: <path d="M1.5 4.2h13v7.6h-13zM1.5 4.2 8 9l6.5-4.8" />,
  sheet: <><rect x="1.7" y="2.7" width="12.6" height="10.6" rx="1" /><path d="M1.7 6.2h12.6M1.7 9.8h12.6M6.1 2.7v10.6M10.4 2.7v10.6" /></>,
  db: <><ellipse cx="8" cy="4" rx="5.6" ry="2.1" /><path d="M2.4 4v8c0 1.16 2.5 2.1 5.6 2.1s5.6-.94 5.6-2.1V4M2.4 8c0 1.16 2.5 2.1 5.6 2.1s5.6-.94 5.6-2.1" /></>,
  builder: <><rect x="2.4" y="2.4" width="11.2" height="11.2" rx="1.4" /><path d="M5.6 8h4.8M8 5.6v4.8" /></>,
};

function ToolIcon({ slug, src, icon }) {
  if (icon) return (
    <svg className="tool-chip-svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {TOOL_GLYPHS[icon]}
    </svg>
  );
  return (
    <img
      className="tool-chip-img"
      src={src || `https://cdn.simpleicons.org/${slug}`}
      alt=""
      loading="eager"
      onError={(ev) => { ev.currentTarget.style.display = "none"; }}
    />
  );
}

function SlideTools() {
  const [pinned, setPinned] = useState(null);
  const [hover, setHover] = useState(null);
  const focus = hover !== null ? hover : pinned;
  const rows = [
  { name: "소통", note: "내부는 Slack, 고객사는 이메일", chips: [
    { src: DEVICON("slack", "original"), label: "Slack" },
    { icon: "mail", label: "이메일" }] },
  { name: "문서·기획", note: "문서부터 플로우차트까지", chips: [
    { slug: "notion", label: "Notion" },
    { slug: "figma", label: "Figma" },
    { slug: "figma", label: "FigJam" }] },
  { name: "데이터 분석", note: "받아서 정제하고 분석합니다", chips: [
    { icon: "sheet", label: "Excel" },
    { slug: "googlesheets", label: "Google Sheets" },
    { slug: "python", label: "Python" }] },
  { name: "개발", note: "구현부터 배포까지", chips: [
    { slug: "python", label: "Python" },
    { src: DEVICON("vscode", "original"), label: "VS Code" },
    { slug: "claude", label: "Claude Code" },
    { slug: "github", label: "GitHub" },
    { src: "assets/agentria-icon.png", label: "Agentria" },
    { icon: "db", label: "DBMS" }] },
  { name: "QA·이슈 관리", note: "이슈를 남기고 추적합니다", chips: [
    { slug: "jira", label: "Jira" },
    { slug: "notion", label: "Notion" },
    { src: DEVICON("slack", "original"), label: "Slack" }] }];

  return (
    <section className="slide" data-screen-label="09 업무에 쓰는 도구">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />
      <div className="skills">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2 className="display display-3">업무에 쓰는 툴</h2>
        </div>
        <div className={`skill-list tool-list ${focus !== null ? "has-focus" : ""}`}>
          {rows.map((it, i) =>
          <div
            key={i}
            className={`skill-row ${focus === i ? "focus" : ""} ${pinned === i ? "pinned" : ""}`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setPinned(pinned === i ? null : i)}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="name">{it.name}</span>
              <span className="desc">
                <span className="tool-chips">
                  {it.chips.map((c, j) =>
                  <span key={j} className="tool-chip">
                    <ToolIcon slug={c.slug} src={c.src} icon={c.icon} />
                    {c.label}
                  </span>
                  )}
                </span>
                <span className="tool-note">{it.note}</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <SlideFoot section="01 직무 소개" idx={9} />
    </section>);
}

function SlideCasesOver({ jumpToSlide }) {
  const cards = [
  { n: "01", t: "면접 총평 생성", slide: 11 },
  { n: "02", t: "학생 정서 상담 챗봇", slide: 12 },
  { n: "03", t: "도서 자동 분류 · LC Cataloging", slide: 13 },
  { n: "04", t: "역량 진단 에이전트", slide: 14 }];


  return (
    <section className="slide" data-screen-label="10 사례 개요">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />
      <div className="cases-over">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h2 className="display display-2">실서비스 프로젝트 사례</h2>
        </div>
        <div className="cases-grid">
          {cards.map((c) =>
          <div key={c.n} className="case-card" onClick={() => jumpToSlide(c.slide)}>
              <div className="n">CASE {c.n} / 04</div>
              <div className="t">{c.t}</div>
              <div className="more">자세히 보기 →</div>
            </div>
          )}
        </div>
      </div>
      <SlideFoot section="01 직무 소개" idx={10} />
    </section>);
}

Object.assign(window, { SlideGPTvs, SlideRoles, SlideContext, SlideProcess, SlideTools, SlideCasesOver });