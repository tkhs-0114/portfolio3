import { Manager, Window } from "./components/window";
import { Skill } from "./components/skill";
import { useState, useEffect, useRef } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const thisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!thisRef.current) return;

      const rect = thisRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // THISのdivが画面内に表示されているかチェック
      const isInViewport = rect.top < viewportHeight && rect.bottom > 0;

      setIsActive(isInViewport);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl md:text-8xl text-white font-bold mt-[30vh]">
          Welcome to my Portfolio
        </h1>
        <p className="text-2xl text-white mt-[40vh] animate-bounce">
          ↓↓↓ Scroll ↓↓↓
        </p>
        <div className="h-[50vh]" />
        <div ref={thisRef} className="h-screen" />
        <div className="h-[100vh]" />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-10 ${isActive ? "" : "pointer-events-none"}`}
      >
        <Manager approveActivation={isActive}>
          <Window>
            <div className="flex items-center justify-center flex-col h-full w-full p-4 gap-4">
              <h1 className="text-4xl font-bold underline">Hello world!</h1>
              <div className="flex items-center gap-4">
                <img
                  src="/icon.jpg"
                  className="w-16 md:w-32 h-16 md:h-32 rounded-full"
                />
                <h1 className="text-5xl font-bold ">tkhs-0114</h1>
              </div>
              <div>
                <p className="text-lg md:text-2xl">
                  <p className="text-2xl md:text-4xl inline">私</p>
                  は情報系大学の3年生です。Webアプリから競技プログラミング、マイコンや自作CPUの設計など幅広い分野に興味があり、日々勉強しています。
                </p>
                <p className="text-lg md:text-2xl">
                  <p className="text-2xl md:text-4xl inline">ま</p>
                  た、ハッカソンやICPC,ICTSC等のコンテストにも積極的に参加しています。10月はJPHACK2025,12月にはICTSCの二次予選に参加予定です。
                </p>
              </div>
            </div>
          </Window>
          <Manager>
            <Manager>
              <Manager>
                <Window>
                  <div className="flex items-center justify-center h-full w-full">
                    <h1 className="text-xl md:text-2xl">Coming soon...</h1>
                  </div>
                </Window>
                <Manager>
                  <Manager>
                    <Window>Window 6</Window>
                  </Manager>
                  <Window>
                    <img
                      src="/cbonsai.gif"
                      className="w-full h-full object-cover"
                    />
                  </Window>
                </Manager>
              </Manager>
              <Window>
                <div className="flex items-center justify-center flex-col h-full w-full p-4 gap-4">
                  <h1 className="text-4xl font-bold underline">Portfolio</h1>
                  <div>
                    <p className="text-base md:text-2xl">
                      このポートフォリオは夏のインターンを終えて、その経験をまとめるために作成した。
                    </p>
                  </div>
                </div>
              </Window>
            </Manager>
            <Window>
              <div className="flex items-start justify-center flex-col h-full w-full p-4">
                <div className="flex flex-row justify-center md:flex-col w-full">
                  <h1 className="inline-block text-base md:text-4xl font-bold underline mb-4 w-15 md:w-auto">
                    Frontend
                  </h1>
                  <div className="inline-flex w-full ml-4 overflow-x-scroll">
                    <Skill skill="html5" percent={99} />
                    <Skill skill="css3" percent={70} />
                    <Skill skill="javascript" percent={90} />
                    <Skill skill="typescript" percent={80} />
                    <Skill skill="react" percent={50} />
                    <Skill skill="nextjs" percent={40} />
                    <Skill skill="wasm" percent={10} />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col w-full">
                  <h1 className="inline-block text-base md:text-4xl font-bold underline mb-4 w-15 md:w-auto">
                    Backend
                  </h1>
                  <div className="inline-flex w-full ml-4 overflow-x-scroll">
                    <Skill skill="python" percent={50} />
                    <Skill skill="nodejs" percent={70} />
                    <Skill skill="mysql" percent={80} />
                    <Skill skill="ruby" percent={50} />
                    <Skill skill="go" percent={30} />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col w-full">
                  <h1 className="inline-block text-base md:text-4xl font-bold underline mb-4 w-15 md:w-auto">
                    Others
                  </h1>
                  <div className="inline-flex w-full ml-4 overflow-x-scroll">
                    <Skill skill="windows11" percent={80} />
                    <Skill skill="linux" percent={70} />
                    <Skill skill="git" percent={70} />
                    <Skill skill="c" percent={80} />
                    <Skill skill="docker" percent={60} />
                    <Skill skill="rust" percent={10} />
                  </div>
                </div>
              </div>
            </Window>
          </Manager>
        </Manager>
      </div>
    </>
  );
}

export default App;
