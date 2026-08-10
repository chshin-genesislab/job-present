// slides-5-newhire.jsx — Slides 18 (3 mindsets, under 02), 19 (Section 03 cover), 20–21 (assignment + interview)

function SlideMindsets() {
  const [focus, setFocus] = useState(null);
  const items = [
    {
      n:"01",
      t:"능동적인 사람",
      bullets:[
        "요구사항이 모호한 채로 시작되는 경우가 흔합니다.",
        "명확한 요구사항이 정리되어 오기를 기다리면 일이 안 됩니다.",
        "본인이 직접 짚고 묻고, 같이 정의해 나가는 자세가 필요합니다.",
      ],
    },
    {
      n:"02",
      t:"기획할 수 있는 사람",
      bullets:[
        "중소기업 환경에서는 기획자 없이 일하기도 합니다.",
        "시키는 걸 구현하는 게 아니라, 무엇을 만들지부터 같이 고민할 수 있는 사람이 필요합니다.",
      ],
    },
    {
      n:"03",
      t:"사용자의 입장에서 생각할 수 있는 사람",
      bullets:[
        "요구사항을 다 채웠는데도 쓰기 불편한 결과물이 자주 나옵니다.",
        "이걸 실제로 쓰는 사람이 어떤 상황에서 무엇을 기대할지 상상할 수 있어야 합니다.",
      ],
    },
    {
      n:"04",
      t:"책임감이 높은 사람",
      bullets:[
        "본인이 만드는 것에 대해 스스로 기준을 높게 갖고 지키려고 노력하는 자세입니다.",
        "누가 시키지 않아도 본인 결과물을 의심하고, '이게 정말 충분한가?' 자문할 수 있어야 합니다.",
      ],
    },
  ];
  return (
    <section className="slide" data-screen-label="19 원하는 신입">
      <SlideHead left={<span>02 필요한 역량</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:28}}>
        <Eyebrow>지극히 주관적인, 제네시스랩이 원하는</Eyebrow>
        <h2 className="display display-3">신입에게 <em>바라는 점</em></h2>
      </div>
      <div className={`mindsets ${focus!==null?"has-focus":""}`}>
        {items.map((it,i) => (
          <div
            key={it.n}
            className={`mindset ${focus===i?"focus":""}`}
            onClick={() => setFocus(focus===i?null:i)}
            onMouseEnter={() => setFocus(i)}
            onMouseLeave={() => setFocus(null)}
          >
            <span className="n">{it.n}</span>
            <div className="body">
              <div className="t">{it.t}</div>
              <ul>
                {it.bullets.map((b,j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <SlideFoot section="02 필요한 역량" idx={19} />
    </section>
  );
}

function SlideCover3() {
  return (
    <SectionCover
      num="03"
      title="취업 팁"
      eyebrowEn="ASSIGNMENT · INTERVIEW"
      sub="과제와 면접에서 실제로 보는 것."
      idx={20}
      sectionLabel="03 취업 팁"
      screenLabel="20 Section 3 Cover"
      accent
    />
  );
}

function AssignList({ items }) {
  return (
    <div className="assign-list">
      {items.map((it,i) => (
        <div key={i} className="assign-item">
          <span className="n">{String(i+1).padStart(2,'0')}</span>
          <div className="body">
            <span className="t">{it.t}</span>
            <span className="d">{it.d}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideAssignment() {
  return (
    <section className="slide assign-slide" data-screen-label="21 과제에서 보는 것">
      <SlideHead left={<span>03 취업 팁</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:20}}>
        <Eyebrow>ASSIGNMENT · 과제 · 포트폴리오</Eyebrow>
        <h2 className="display display-3">과제(포트폴리오)에서 <em>보는 것</em></h2>
      </div>
      <div className="assign assign--single assign--dense">
        <div className="assign-col">
          <AssignList items={[
            { t:"과제의 의도를 파악했는지", d:"요구사항 충족은 점수가 아니라 출발점입니다. 이 과제로 무엇을 보려는지 먼저 읽으려는 시도를 봅니다." },
            { t:"직무에 대한 이해가 드러나는지", d:"백엔드, 프롬프팅, LLM 활용 어느 한쪽에만 치우치지 않고 균형 있게." },
            { t:"사용자 관점에서 품질을 고민했는지", d:"명시되지 않은 부분이라도 사용자 관점에서 품질을 개선하려는 시도." },
            { t:"무엇을 선택하고 무엇을 포기했는지", d:"결과물보다 판단의 흔적. 이유가 보이면 규모가 작아도 평가가 올라갑니다." },
            { t:"결과를 어떻게 검증했는지", d:"무엇을 기준으로 잘 되었다고 판단했는지, 어떤 케이스에서 실패했는지가 적혀 있으면 눈에 띕니다." },
          ]} />
        </div>
      </div>
      <SlideFoot section="03 취업 팁" idx={21} />
    </section>
  );
}

function SlideInterview() {
  return (
    <section className="slide assign-slide" data-screen-label="22 면접에서 보는 것">
      <SlideHead left={<span>03 취업 팁</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:24}}>
        <Eyebrow>INTERVIEW · 면접</Eyebrow>
        <h2 className="display display-3">과제 면접에서 <em>보는 것</em></h2>
      </div>
      <div className="assign assign--single">
        <div className="assign-col">
          <AssignList items={[
            { t:"본인 코드를 본인이 설명할 수 있는지", d:'"이게 어떤 기능인가"가 아니라 "왜 이렇게 짰는가"까지.' },
            { t:"과제를 진행한 과정을 설명할 수 있는지", d:"어디에 집중했고, 어디서 막혔고, 그것을 극복하기 위해 어떤 시도를 했는지." },
            { t:"모르는 것을 모른다고 말할 수 있는지", d:"아는 것과 모르는 것을 확실하게 구분할 수 있는지. 모르는 것을 빠르게 습득할 준비가 되어 있는지." },
          ]} />
        </div>
      </div>
      <SlideFoot section="03 취업 팁" idx={22} />
    </section>
  );
}

Object.assign(window, { SlideMindsets, SlideCover3, SlideAssignment, SlideInterview });
