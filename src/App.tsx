import { Manager, Window } from "./components/window";
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
        <h1 className="text-8xl text-white font-bold mt-[30vh]">
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
            <div>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </div>
          </Window>
          <Manager>
            <Manager>
              <Manager>
                <Window>Window 4</Window>
                <Manager>
                  <Manager>
                    <Window>Window 6</Window>
                  </Manager>
                  <Window>Window 5</Window>
                </Manager>
              </Manager>
              <Window>Window 3</Window>
            </Manager>
            <Window>Window 2</Window>
          </Manager>
        </Manager>
      </div>
    </>
  );
}

export default App;
