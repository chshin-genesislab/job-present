// slides-1-intro.jsx — Slides 1 (title), 2 (TOC), 3 (Section 01 cover)

function SlideTitle({ go }) {
  return (
    <section className="slide title-slide" data-screen-label="01 Title">
      <div className="title-head">
        <div className="title-head-l">
          <div className="label">DX SCHOOL · 직무 소개</div>
          <div className="what">AI 에이전트 개발자</div>
        </div>
        <div className="title-head-r">
          <div className="name">신찬희</div>
          <div className="team">Genesis Lab · AX팀</div>
        </div>
      </div>

      <div className="title-center">
        <h1 className="title-headline">
          <span className="row"><span className="blue">컨텍스트</span> 엔지니어</span>
          <span className="row" style={{ color: "var(--ink-mid)", fontWeight: 500, fontSize: ".4em", letterSpacing: "-.01em", marginTop: 20, display: "block", lineHeight: 1.35 }}>
            <em style={{ fontStyle: "normal", color: "var(--accent)", fontWeight: 600 }}>AI가 책임질 수 있는 결과</em>를 만들도록 설계하는 사람
          </span>
        </h1>
      </div>

      <div className="title-foot">
        <span></span>
        <span>01 / {TOTAL_SLIDES}</span>
      </div>
    </section>);

}

function SlideMentor() {
  const facts = [
    { k: "소속", v: "Genesis Lab · AX팀" },
    { k: "경력", v: "AI 에이전트 개발자 2년차" },
    { k: "이력", v: "DX School 1기 수료생" },
    { k: "전공", v: "자연계열 (비전공자)" },
  ];
  return (
    <section className="slide" data-screen-label="02 멘토 소개">
      <SlideHead left={<span>멘토 소개</span>} right={null} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
        <h2 className="display display-3">멘토 소개</h2>
      </div>
      <div className="mentor">
        {facts.map((f) =>
        <div key={f.k} className="mentor-row">
          <span className="k">{f.k}</span>
          <span className="v">{f.v}</span>
        </div>
        )}
      </div>
      <SlideFoot section="멘토 소개" idx={2} />
    </section>);

}

function SlideTOC({ go, jumpToSlide }) {
  const items = [
  { num: "01", name: "직무 소개", desc: "역할 · 업무 프로세스 · 프로젝트 사례", slide: 4 },
  { num: "02", name: "필요한 역량", desc: "하드 스킬 · 소프트 스킬 · 원하는 신입", slide: 16 },
  { num: "03", name: "취업 팁", desc: "과제에서 보는 것 · 면접에서 보는 것", slide: 20 },
  { num: "04", name: "Q&A", desc: "미리 받은 질문 + 자유 질의응답", slide: 23 }];

  return (
    <section className="slide" data-screen-label="03 목차">
      <SlideHead left={<span>목차</span>} right={null} />
      <h2 className="display display-3" style={{ marginBottom: 28 }}>
        목차
      </h2>
      <div className="toc-grid">
        {items.map((it) =>
        <button key={it.num} className="toc-item" onClick={() => jumpToSlide(it.slide)}>
            <span className="toc-num">{it.num}</span>
            <span className="toc-name">{it.name}</span>
            <span className="toc-desc">{it.desc}</span>
            <span className="toc-jump">JUMP →</span>
          </button>
        )}
      </div>
      <SlideFoot section="목차" idx={3} />
    </section>);

}

function SectionCover({ num, title, eyebrowEn, sub, idx, sectionLabel, screenLabel, accent }) {
  return (
    <section className="slide slide--soft" data-screen-label={screenLabel}>
      <div className="cover-head">
        <div className="cover-num">SECTION {num} / 04</div>
      </div>
      <div className="cover-center">
        <h1 className="cover-title">
          <em>{num}</em>　{title}
        </h1>
        {sub ? <p className="cover-sub">{sub}</p> : null}
        <div className="cover-rule" style={accent ? { background: "var(--accent)" } : null} />
      </div>
      <SlideFoot section={sectionLabel} idx={idx} />
    </section>);

}

function SlideCover1() {
  return (
    <SectionCover
      num="01"
      title="직무 소개"
      eyebrowEn="WHAT IS THE ROLE"
      sub="AI 에이전트 개발자 / 컨텍스트 엔지니어란"
      idx={4}
      sectionLabel="01 직무 소개"
      screenLabel="04 Section 1 Cover"
      accent />);


}

Object.assign(window, { SlideTitle, SlideMentor, SlideTOC, SlideCover1, SectionCover });
