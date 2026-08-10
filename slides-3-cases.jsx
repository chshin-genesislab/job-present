// slides-3-cases.jsx — Slides 10–13 (case details), 14 (section summary)

const CASE_SYMBOLS = {
  chat: (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14h56a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H28l-12 10V46h-6a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z" />
      <path d="M54 34h56a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H74l-10 8v-8h-10a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6Z" />
      <circle cx="86" cy="49" r="2" />
      <circle cx="96" cy="49" r="2" />
      <circle cx="106" cy="49" r="2" />
    </svg>
  ),
  radar: (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="26" r="9" />
      <path d="M10 62c0-8.5 6.3-14.5 14-14.5S38 53.5 38 62" />
      <path d="M56 66V44M72 66V30M88 66V50M104 66V22" strokeWidth="2" />
      <path d="M50 66h60" opacity=".5" />
      <path d="M56 36 72 20l16 12 16-14" opacity=".45" />
      <circle cx="56" cy="36" r="2.2" opacity=".65" />
      <circle cx="72" cy="20" r="2.2" opacity=".65" />
      <circle cx="88" cy="32" r="2.2" opacity=".65" />
      <circle cx="104" cy="18" r="2.2" opacity=".65" />
    </svg>
  ),
};

function CaseDetail({ n, total, title, sub, sectionLabel, idx, screenLabel, core, feats, image, imageCaption, symbol, symbolCaption }) {
  return (
    <section className="slide" data-screen-label={screenLabel}>
      <SlideHead left={<span>{sectionLabel}</span>} right={null} />
      <div className={`case-detail ${image || symbol ? "case-detail--img" : ""} ${symbol ? "case-detail--flip" : ""}`}>
        <div className="case-detail-l">
          <div className="case-detail-eyebrow">CASE {n} / {total}</div>
          <h2 className="case-detail-title">
            {title}
            {sub ? <small>{sub}</small> : null}
          </h2>
        </div>
        <div className="case-detail-body">
          <div className="case-detail-core">
            <strong style={{ display: "block", font: "500 11px/1 var(--sans-en)", letterSpacing: ".18em", color: "var(--accent)", marginBottom: 8 }}>핵심</strong>
            {core}
          </div>
          {feats.map((f) =>
          <div key={f.n} className="case-feat">
              <span className="case-feat-n">{f.n}</span>
              <div className="case-feat-body">
                <b>{f.t}</b>
                <p>{f.d}</p>
              </div>
            </div>
          )}
        </div>
        {image ?
        <figure className="case-shot">
          <img src={image} alt="" />
          {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
        </figure> : null}
        {symbol ?
        <figure className="case-shot case-shot--symbol">
          <div className="case-symbol">{CASE_SYMBOLS[symbol]}</div>
          {symbolCaption ? <figcaption>{symbolCaption}</figcaption> : null}
        </figure> : null}
      </div>
      <SlideFoot section={sectionLabel} idx={idx} />
    </section>);

}

function SlideCase1() {
  return (
    <CaseDetail
      n="01" total="04"
      title="면접 총평 생성"
      sectionLabel="01 직무 소개"
      idx={11}
      screenLabel="11 사례 1 면접 총평"
      image="assets/case-01-report.png"
      imageCaption="실제 생성된 총평 리포트"
      core={<>수치 결과를 <strong style={{ color: "var(--accent)", fontWeight: 600 }}>사람이 읽을 수 있는 리포트</strong>로 가공.</>}
      feats={[
      { n: "01", t: "데이터 가공", d: "주어진 데이터를 종합해 자연스러운 글로 가공합니다." },
      { n: "02", t: "형식 일관성", d: "정해진 섹션·길이·톤에 맞춰 일관된 결과 생성." },
      { n: "03", t: "표시 가능한 출력", d: "웹 페이지에 바로 표시되는 형태로 출력합니다." }]
      } />);


}

function SlideCase2() {
  return (
    <CaseDetail
      n="02" total="04"
      title="학생 정서 상담 챗봇"
      sectionLabel="01 직무 소개"
      idx={12}
      screenLabel="12 사례 2 정서 상담"
      symbol="chat"
      core={<>단순 질의응답이 아니라, <strong style={{ color: "var(--accent)", fontWeight: 600 }}>지속적인 관계를 가지면서 안전까지 챙기는 시스템</strong>.</>}
      feats={[
      { n: "01", t: "메모리 활용", d: "이전 대화를 기억하고 자연스럽게 이어갑니다." },
      { n: "02", t: "응답 속도 개선", d: "실시간 대화에 맞는 빠른 응답." },
      { n: "03", t: "안전 감지", d: "위기 신호를 감지해 교사에게 알림." }]
      } />);


}

function SlideCase3() {
  return (
    <CaseDetail
      n="03" total="04"
      title="도서 자동 분류"
      sub="LC Cataloging"
      sectionLabel="01 직무 소개"
      idx={13}
      screenLabel="13 사례 3 도서 분류"
      image="assets/case-03-lcc.png"
      imageCaption="LCC 온라인 검색 페이지 — 이 계층을 따라가며 분류합니다"
      core={<>전문 사서 <strong style={{ color: "var(--accent)", fontWeight: 600 }}>업무 대체</strong>.</>}
      feats={[
      { n: "01", t: "웹 크롤링", d: "최신 분류 체계를 실시간으로 수집해 LLM에 주입." },
      { n: "02", t: "다단계 프롬프팅", d: "큰 분류부터 세부 분류까지 단계적 추론." },
      { n: "03", t: "방대한 테스트", d: "전문가 피드백을 받아 반복적으로 정확도 개선." }]
      } />);


}

function SlideCase4() {
  return (
    <CaseDetail
      n="04" total="04"
      title="역량 진단 에이전트"
      sectionLabel="01 직무 소개"
      idx={14}
      screenLabel="14 사례 4 역량 진단"
      symbol="radar"
      core={<><strong style={{ color: "var(--accent)", fontWeight: 600 }}>누구에게나 공정한 기준</strong>으로 판정.</>}
      feats={[
      { n: "01", t: "택소노미 해석", d: "인사팀이 정의한 스킬 체계를 시스템이 쓸 수 있는 형태로." },
      { n: "02", t: "비결정성 제어", d: "한 진단 안에서 같은 활동을 한 사람에게는 같은 스킬이 부여되도록. 진단의 공정성이 걸린 부분." },
      { n: "03", t: "로컬 LLM · 폐쇄망", d: "외부 API를 쓸 수 없는 환경이라, 프론티어 모델이 아닌 로컬 LLM으로 구현." }]
      } />);


}

function SlideSummary() {
  const cells = [
  { n: "01", t: "면접 총평", d: "LLM이 데이터를 사람이 읽을 글로 가공하게" },
  { n: "02", t: "학생 정서 상담", d: "LLM이 신뢰할 수 있는 대화 파트너가 되도록" },
  { n: "03", t: "LC Cataloging", d: "LLM이 도메인의 전문가가 되도록" },
  { n: "04", t: "역량 진단", d: "LLM이 공정한 판단을 하도록" }];

  return (
    <section className="slide" data-screen-label="15 정리">
      <SlideHead left={<span>01 직무 소개</span>} right={null} />
      <div className="summary">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="summary-tag">정리하자면,</div>
          <div className="summary-lede">컨텍스트 엔지니어가 하는 일은</div>
          <h2 className="summary-headline">
            <em>LLM이 책임질 수 있는 결과</em>를 만들도록 설계하고,<br />
            <em>사용자를 위한 서비스</em>로 구현하는 것.
          </h2>
        </div>
        <div className="summary-grid">
          {cells.map((c) =>
          <div key={c.n} className="summary-cell">
              <span className="n">CASE {c.n}</span>
              <span className="t">{c.t}</span>
              <span className="d">{c.d}</span>
            </div>
          )}
        </div>
      </div>
      <SlideFoot section="01 직무 소개" idx={15} />
    </section>);

}

Object.assign(window, { SlideCase1, SlideCase2, SlideCase3, SlideCase4, SlideSummary });
