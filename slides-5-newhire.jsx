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

function GateTable({ cols, items }) {
  const [open, setOpen] = React.useState([]);
  const all = open.length === items.length;
  const toggle = (i) => setOpen(o => o.includes(i) ? o.filter(x=>x!==i) : [...o, i]);
  return (
    <div className="gate">
      <div className="gate-head">
        <span className="n"></span>
        <span className="gate-t"></span>
        <span className="lab">{cols[0]}</span>
        <span className="lab lab--edge">{cols[1]}
          <button className="gate-all" onClick={(e)=>{e.stopPropagation();setOpen(all?[]:items.map((_,i)=>i))}}>{all?"접기":"모두 보기"}</button>
        </span>
      </div>
      {items.map((it,i) => (
        <div key={i} className={"gate-row" + (open.includes(i) ? " is-open" : "")} onClick={()=>toggle(i)}>
          <span className="n">{String(i+1).padStart(2,'0')}</span>
          <span className="gate-t">{it.t}</span>
          <span className="base">{it.base}</span>
          <span className="edge">{it.edge}</span>
        </div>
      ))}
    </div>
  );
}

function SlideAssignment() {
  return (
    <section className="slide assign-slide" data-screen-label="21 과제에서 보는 것">
      <SlideHead left={<span>03 취업 팁</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:18}}>
        <Eyebrow>ASSIGNMENT · 과제 · 포트폴리오</Eyebrow>
        <h2 className="display display-3">과제·포트폴리오에서 <em>보는 것</em></h2>
      </div>
      <GateTable
        cols={["대부분 여기까지 옵니다", "여기서 갈립니다"]}
        items={[
          { t:"과제의 의도", base:"과제 구현이 우선이다.", edge:"적혀 있지 않은 의도까지 읽는다. 이 과제로 무엇을 확인하려는지 파악한다." },
          { t:"직무에 대한 이해", base:"프롬프팅에 집중한다.", edge:"시스템(백엔드 · 프론트엔드)과 LLM 활용을 균형 있게 구현한다." },
          { t:"사용자 관점의 품질", base:"명시된 요구까지 정확히 만든다.", edge:"명시되지 않았지만 쓰는 사람이 불편할 지점을 손본다." },
          { t:"과제 설명", base:"잘된 점을 부각한다.", edge:"어려운 점이 있었다면 무엇인지, 한계와 개선점에 대해 남긴다." },
          { t:"결과의 검증", base:"동작하는 것을 확인한다.", edge:"무엇을 기준으로 잘 되었다고 했는지, 어디서 실패했는지 적는다." },
        ]}
      />
      <SlideFoot section="03 취업 팁" idx={21} />
    </section>
  );
}

function SlideInterview() {
  return (
    <section className="slide assign-slide" data-screen-label="22 면접에서 보는 것">
      <SlideHead left={<span>03 취업 팁</span>} right={null} />
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:18}}>
        <Eyebrow>INTERVIEW · 면접</Eyebrow>
        <h2 className="display display-3">과제 면접에서 <em>보는 것</em></h2>
      </div>
      <GateTable
        cols={["대부분 여기까지 옵니다", "여기서 갈립니다"]}
        items={[
          { t:"코드에 대한 설명", base:'"이 부분은 어떤 기능입니다"라고 설명한다.', edge:'"왜 이렇게 짰는지", 다른 방법은 왜 택하지 않았는지까지 설명한다.' },
          { t:"진행 과정에 대한 설명", base:"무엇을 만들었는지 순서대로 말한다.", edge:"어디에 집중했고, 어디서 막혔고, 그것을 넘기 위해 무엇을 시도했는지 말한다." },
          { t:"모르는 것에 대한 태도", base:"모르지만 아는 것처럼 최선을 다해 답한다.", edge:"아는 것과 모르는 것을 분명히 구분해서 말한다." },
        ]}
      />
      <SlideFoot section="03 취업 팁" idx={22} />
    </section>
  );
}

Object.assign(window, { SlideMindsets, SlideCover3, SlideAssignment, SlideInterview, GateTable });
