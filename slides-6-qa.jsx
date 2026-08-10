// slides-6-qa.jsx — Slides 22 (Section 04 cover), 23 (pre-submitted questions, interactive)

function SlideCover4() {
  return (
    <section className="slide slide--soft" data-screen-label="23 Section 4 Cover">
      <div className="cover-head">
        <div className="cover-num">SECTION 04 / 04</div>
      </div>
      <div className="cover-center">
        <h1 className="cover-title">
          <em>04</em>　Q&amp;A
        </h1>
        <div className="cover-rule" style={{background:"var(--accent)"}}/>
      </div>
      <SlideFoot section="04 Q&A" idx={23} />
    </section>
  );
}

const PREQ_GROUPS = [
  {
    n:"01", t:"이 직무를 알게 된 계기",
    qs:[
      "‘컨텍스트 엔지니어링 / AI 에이전트 개발’이라는 직무를 처음 어떻게 접하고 알게 되셨나요?",
      "새롭게 생겨나는 직무였던 만큼 참고할만한 정보가 부족했을 것 같은데, 어떤 방식으로 정보를 알아보고 취준을 하셨나요?",
    ],
  },
  {
    n:"02", t:"포트폴리오",
    qs:[
      "AI 에이전트 개발자 취업을 준비할 때 포트폴리오에는 어떤 프로젝트를 포함하는 것이 가장 효과적일까요?",
      "최근 바이브 코딩으로 서비스를 빠르게 만드는 사례가 많은데, 실제 현업에서도 이런 방식이 프로덕션 개발에 활용되고 있는지, 그리고 신입 포트폴리오에 바이브 코딩으로 진행한 프로젝트가 포함되어 있다면 이를 어떻게 평가하시는지 궁금합니다.",
    ],
  },
  {
    n:"03", t:"필요한 역량",
    qs:[
      "AI 에이전트 개발자뿐만 아니라 개발자 전반에게 AI 활용 역량이 요구되는 추세인데, 신입 지원자 입장에서 어떤 역량을 준비하면 좋을까요?",
      "DX 스쿨에서 배운 역량들을 취업 준비 과정에서 어떻게 활용하면 좋을까요?",
      "최근 AI의 발전으로 신입 개발자 채용이 줄었다는 이야기가 많은데, 이런 채용 시장 변화 속에서 신입이 개발 직군으로 취업하기 위해서는 어떤 전략이 필요할까요?",
    ],
  },
  {
    n:"04", t:"일의 실제와 성장",
    qs:[
      "이 직무를 공부하고 실제 업무를 수행하시면서 가장 까다롭거나 어렵다고 느끼신 부분은 무엇이었나요?",
      "2년차로서 입사 초기 대비 지금 달라진 역할이나 책임이 있다면, 신입 ~ 주니어 단계에서 어떤 성장 로드맵을 그리면 좋을지 조언 부탁드립니다.",
    ],
  },
];

function SlideQAPre() {
  const [active, setActive] = useState(0);
  const cur = PREQ_GROUPS[active];
  return (
    <section className="slide" data-screen-label="24 사전 질문">
      <SlideHead left={<span>04 Q&amp;A</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:26}}>
        <Eyebrow>질의응답</Eyebrow>
        <h2 className="display display-3">사전 질문</h2>
      </div>
      <div className="preqx">
        <div className="preqx-tabs">
          {PREQ_GROUPS.map((g,i) => (
            <button
              key={g.n}
              className={`preqx-tab ${active===i?"on":""}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="n">{g.n}</span>
              <span className="t">{g.t}</span>
            </button>
          ))}
        </div>
        <div className="preqx-panel" key={active}>
          <span className="preqx-panel-label">{cur.n}　{cur.t}</span>
          <div className="preqx-list">
            {cur.qs.map((x,i) => (
              <div key={i} className="preqx-q">
                <span className="mark">Q</span>
                <span className="text">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SlideFoot section="04 Q&A" idx={24} />
    </section>
  );
}

Object.assign(window, { SlideCover4, SlideQAPre });
