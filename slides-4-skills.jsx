// slides-4-skills.jsx — Slides 15 (Section 02 cover), 16 (hard skills), 17 (soft skills)

function SlideCover2() {
  return (
    <SectionCover
      num="02"
      title="필요한 역량"
      eyebrowEn="WHAT YOU'LL NEED"
      sub="하드 스킬 · 소프트 스킬 · 원하는 신입"
      idx={16}
      sectionLabel="02 필요한 역량"
      screenLabel="16 Section 2 Cover"
      accent
    />
  );
}

function SkillSection({ label, headline, lede, items, idx, screenLabel }) {
  const [pinned, setPinned] = useState(null);
  const [hover, setHover] = useState(null);
  const focus = hover !== null ? hover : pinned;
  return (
    <section className="slide" data-screen-label={screenLabel}>
      <SlideHead left={<span>02 필요한 역량</span>} right={null} />
      <div className="skills">
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <Eyebrow>{label}</Eyebrow>
          <h2 className="display display-2">{headline}</h2>
          {lede ? <p className="skills-lede">{lede}</p> : null}
        </div>
        <div className={`skill-list ${focus!==null?"has-focus":""}`}>
          {items.map((it,i) => (
            <div
              key={i}
              className={`skill-row ${focus===i?"focus":""} ${pinned===i?"pinned":""}`}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setPinned(pinned===i?null:i)}
            >
              <span className="n">{String(i+1).padStart(2,'0')}</span>
              <span className="name">{it.name}</span>
              <span className="desc">{it.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <SlideFoot section="02 필요한 역량" idx={idx} />
    </section>
  );
}

function SlideHard() {
  return (
    <SkillSection
      label="하드 스킬"
      headline={<>하드 스킬</>}
      lede="배워서 익히는, 눈에 보이는 기술. 코드와 시스템으로 증명되는 능력입니다."
      items={[
        { name:"프로그래밍 능력", desc:"문법, 비동기 처리, API 호출 같은 기본기. 언어는 무엇이든 상관없습니다. 다만 문법을 아는 것과 기본기가 탄탄한 것은 다릅니다." },
        { name:"컨텍스트 설계 능력", desc:"LLM이 원하는 결과를 내도록 지시와 맥락을 잘 짜는 능력. 이걸 잘하려면 LLM이 어떻게 동작하는지, 어떤 한계가 있는지를 이해해야 합니다." },
        { name:"서비스 환경에 대한 이해", desc:"서버, API 통신, 데이터 흐름 같은 시스템 동작 방식. LLM은 부품일 뿐, 전체 시스템이 잘 동작해야 서비스를 만들 수 있습니다." },
      ]}
      idx={17}
      screenLabel="17 하드 스킬"
    />
  );
}

function SlideSoft() {
  return (
    <SkillSection
      label="소프트 스킬"
      headline={<>소프트 스킬</>}
      lede="일하는 방식과 태도. 가르치기 어렵지만, 성장 속도를 가장 크게 가르는 부분입니다."
      items={[
        { name:"비판적 사고", desc:"의문이 들면 반드시 짚고 묻는 자세. AI가 낸 결과를 그대로 받지 않고 의심하고 검증하는 것. 요구되는 ‘AI 활용 역량’이 사실 이겁니다." },
        { name:"끈기", desc:"LLM 결과는 한 번에 완성되지 않습니다. 같은 입력에도 결과가 매번 다릅니다. 어제 되던 게 오늘 안 되기도 합니다." },
        { name:"소통 능력", desc:"고객사부터 기획자, 백엔드 개발자, 프론트 개발자까지 많은 사람과 함께 일해야 합니다." },
        { name:"얼리 어답터", desc:"AI 기술과 도구가 하루가 다르게 바뀝니다. 새로 등장한 것을 궁금해하고 먼저 써보려는 자세가 유리합니다." },
      ]}
      idx={18}
      screenLabel="18 소프트 스킬"
    />
  );
}

Object.assign(window, { SlideCover2, SlideHard, SlideSoft });
