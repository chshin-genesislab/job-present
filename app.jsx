// app.jsx — App shell, sidebar, navigation, tweaks

const SLIDES = [
  { idx:1,  section:"intro", title:"제목" },
  { idx:2,  section:"intro", title:"멘토 소개" },
  { idx:3,  section:"intro", title:"목차" },
  { idx:4,  section:"s1",    title:"표지" },
  { idx:5,  section:"s1",    title:"AI 모델과 에이전트의 차이점" },
  { idx:6,  section:"s1",    title:"AI 에이전트 개발자의 역할" },
  { idx:7,  section:"s1",    title:"컨텍스트 엔지니어링" },
  { idx:8,  section:"s1",    title:"업무 프로세스" },
  { idx:9,  section:"s1",    title:"업무 활용 툴" },
  { idx:10, section:"s1",    title:"실서비스 사례 개요" },
  { idx:11, section:"s1",    title:"사례 1 · 면접 총평" },
  { idx:12, section:"s1",    title:"사례 2 · 정서 상담" },
  { idx:13, section:"s1",    title:"사례 3 · LC 분류" },
  { idx:14, section:"s1",    title:"사례 4 · 역량 진단" },
  { idx:15, section:"s1",    title:"섹션 정리" },
  { idx:16, section:"s2",    title:"표지" },
  { idx:17, section:"s2",    title:"하드 스킬" },
  { idx:18, section:"s2",    title:"소프트 스킬" },
  { idx:19, section:"s2",    title:"신입에게 바라는 점" },
  { idx:20, section:"s4",    title:"표지" },
  { idx:21, section:"s4",    title:"과제·포트폴리오 팁" },
  { idx:22, section:"s4",    title:"과제 면접 팁" },
  { idx:23, section:"s5",    title:"표지" },
  { idx:24, section:"s5",    title:"사전 질문" },
];

const SECTIONS = [
  { key:"intro", num:"00", name:"인트로",                 slides:[1,2,3] },
  { key:"s1",    num:"01", name:"직무 소개",              slides:[4,5,6,7,8,9,10,11,12,13,14,15] },
  { key:"s2",    num:"02", name:"필요한 역량",            slides:[16,17,18,19] },
  { key:"s4",    num:"03", name:"취업 팁",           slides:[20,21,22] },
  { key:"s5",    num:"04", name:"Q&A",                    slides:[23,24] },
];

function Sidebar({ activeIdx, jumpToSlide }) {
  const [open, setOpen] = useState(() => new Set(["intro","s1","s2","s4","s5"]));
  const toggle = (k) => setOpen(prev => {
    const n = new Set(prev);
    if (n.has(k)) n.delete(k); else n.add(k);
    return n;
  });
  const activeSection = SLIDES[activeIdx-1]?.section;

  return (
    <aside className="sb">
      <div className="sb-brand">
        <span className="sb-brand-eyebrow">DX SCHOOL · 직무 소개</span>
        <span className="sb-brand-title">AI 에이전트 개발자</span>
        <span className="sb-brand-sub">신찬희 · Genesis Lab · AX팀</span>
      </div>

      <div className="sb-toc">
        {SECTIONS.map(sec => {
          const isOpen = open.has(sec.key);
          const isActive = activeSection === sec.key;
          return (
            <div key={sec.key} className={`sb-sec ${isActive?"active":""}`}>
              <div className="sb-sec-hd" onClick={() => toggle(sec.key)}>
                <span className="sb-sec-num">{sec.num}</span>
                <span className="sb-sec-name">{sec.name}</span>
                <span style={{marginLeft:"auto",color:"var(--ink-mute)",fontSize:10}}>
                  {isOpen?"−":"+"}
                </span>
              </div>
              {isOpen && (
                <div className="sb-slides">
                  {sec.slides.map(s => (
                    <div
                      key={s}
                      className={`sb-slide ${activeIdx===s?"active":""}`}
                      onClick={() => jumpToSlide(s)}
                    >
                      <span className="sb-slide-n">{String(s).padStart(2,'0')}</span>
                      <span>{SLIDES[s-1].title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="sb-foot">
        <div className="sb-prog">
          <div className="sb-prog-bar" style={{width:`${(activeIdx/TOTAL_SLIDES)*100}%`}}/>
        </div>
        <div className="sb-prog-text">
          <span>PROGRESS</span>
          <span>{String(activeIdx).padStart(2,'0')} / {TOTAL_SLIDES}</span>
        </div>
      </div>
    </aside>
  );
}

// ─── Tweaks defaults ───
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#0110E4",
  "softBg": "#EEF1F9",
  "fontKo": "Pretendard",
  "showSidebar": true,
  "showKeyboardHint": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = ["#0110E4","#16161A","#E94E1B","#1F8A5B","#7A5AE0"];
const SOFT_PRESETS = ["#EEF1F9","#F6F4EF","#F2F2F4","#F1F5F9","#FFF8EF"];
const KO_FONTS = ["Pretendard","Pretendard Variable","IBM Plex Sans","Apple SD Gothic Neo"];

function applyTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent);
  root.style.setProperty('--bg-soft', t.softBg);
  root.style.setProperty('--accent-soft', t.accent + '22');
  const koStack = `"${t.fontKo}","Pretendard Variable","Pretendard","IBM Plex Sans",-apple-system,system-ui,sans-serif`;
  root.style.setProperty('--sans-ko', koStack);
  // Sidebar
  root.style.setProperty('--sidebar-w', t.showSidebar ? '260px' : '0px');
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [activeIdx, setActiveIdx] = useState(1);
  const [hintFade, setHintFade] = useState(false);
  const stageRef = useRef(null);
  const slideRefs = useRef([]);

  // Apply tweaks
  useEffect(() => { applyTweaks(t); }, [t.accent, t.softBg, t.fontKo, t.showSidebar]);

  // Track which slide is in view via IntersectionObserver
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const io = new IntersectionObserver((entries) => {
      // Find the entry most visible
      let best = null; let bestRatio = 0;
      for (const e of entries) {
        if (e.intersectionRatio > bestRatio) { bestRatio = e.intersectionRatio; best = e; }
      }
      if (best) {
        const i = Number(best.target.dataset.idx);
        if (i) setActiveIdx(i);
      }
    }, { root: stage, threshold: [0.4, 0.6, 0.8] });

    slideRefs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jumpToSlide = useCallback((i) => {
    const stage = stageRef.current;
    const wrap = slideRefs.current[i-1];
    if (!stage || !wrap) return;
    const wrapRect = wrap.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    stage.scrollTo({
      top: stage.scrollTop + (wrapRect.top - stageRect.top),
      behavior: "smooth"
    });
  }, []);

  const nextSlide = useCallback(() => {
    if (activeIdx < TOTAL_SLIDES) jumpToSlide(activeIdx + 1);
  }, [activeIdx, jumpToSlide]);
  const prevSlide = useCallback(() => {
    if (activeIdx > 1) jumpToSlide(activeIdx - 1);
  }, [activeIdx, jumpToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault(); nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault(); prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault(); jumpToSlide(1);
      } else if (e.key === "End") {
        e.preventDefault(); jumpToSlide(TOTAL_SLIDES);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide, jumpToSlide]);

  // Fade keyboard hint after interaction
  useEffect(() => {
    if (activeIdx > 1) {
      const t = setTimeout(() => setHintFade(true), 1500);
      return () => clearTimeout(t);
    }
  }, [activeIdx]);

  return (
    <div className="app" style={t.showSidebar ? null : {gridTemplateColumns:"1fr"}}>
      {t.showSidebar && <Sidebar activeIdx={activeIdx} jumpToSlide={jumpToSlide} />}

      <div className="stage" ref={stageRef}>
        {[
          <SlideTitle key={1} go={jumpToSlide} />,
          <SlideMentor key={2} />,
          <SlideTOC key={3} jumpToSlide={jumpToSlide} go={jumpToSlide} />,
          <SlideCover1 key={4} />,
          <SlideGPTvs key={5} />,
          <SlideRoles key={6} />,
          <SlideContext key={7} />,
          <SlideProcess key={8} />,
          <SlideTools key={9} />,
          <SlideCasesOver key={10} jumpToSlide={jumpToSlide} />,
          <SlideCase1 key={11} />,
          <SlideCase2 key={12} />,
          <SlideCase3 key={13} />,
          <SlideCase4 key={14} />,
          <SlideSummary key={15} />,
          <SlideCover2 key={16} />,
          <SlideHard key={17} />,
          <SlideSoft key={18} />,
          <SlideMindsets key={19} />,
          <SlideCover3 key={20} />,
          <SlideAssignment key={21} />,
          <SlideInterview key={22} />,
          <SlideCover4 key={23} />,
          <SlideQAPre key={24} />,
        ].map((slide, i) => (
          <div
            key={i+1}
            ref={el => slideRefs.current[i] = el}
            data-idx={i+1}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Floating controls */}
      <div className="counter"><em>{String(activeIdx).padStart(2,'0')}</em> / {TOTAL_SLIDES}</div>
      <button className="navbtn navbtn--up" onClick={prevSlide} disabled={activeIdx===1} aria-label="이전 슬라이드">↑</button>
      <button className="navbtn navbtn--down" onClick={nextSlide} disabled={activeIdx===TOTAL_SLIDES} aria-label="다음 슬라이드">↓</button>

      {t.showKeyboardHint && (
        <div className={`khint ${hintFade?"fade":""}`}>
          <span className="kb">↑</span><span className="kb">↓</span>
          <span>또는 스페이스로 이동</span>
        </div>
      )}

      <TweaksPanel>
        <TweakSection label="Theme · 테마" />
        <TweakColor
          label="포인트 컬러"
          value={t.accent}
          options={ACCENT_PRESETS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakColor
          label="섹션 배경"
          value={t.softBg}
          options={SOFT_PRESETS}
          onChange={(v) => setTweak('softBg', v)}
        />

        <TweakSection label="Typography · 폰트" />
        <TweakSelect
          label="한글 폰트"
          value={t.fontKo}
          options={KO_FONTS}
          onChange={(v) => setTweak('fontKo', v)}
        />

        <TweakSection label="Layout · 레이아웃" />
        <TweakToggle
          label="사이드바 목차"
          value={t.showSidebar}
          onChange={(v) => setTweak('showSidebar', v)}
        />
        <TweakToggle
          label="키보드 힌트"
          value={t.showKeyboardHint}
          onChange={(v) => setTweak('showKeyboardHint', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
