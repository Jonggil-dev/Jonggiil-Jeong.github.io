import React, { useState, useEffect } from "react";

const TypingText = ({ text, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return <>{displayedText}</>;
};

const Intro = () => {
  return (
    <section
      id="Home"
      className="pt-[50px] bg-[#cba36f] h-[400px] flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <p className="text-4xl font-extrabold text-white mb-2">- 정종길 -</p>
        <p className="text-5xl font-extrabold text-white">
          웹 개발자 포트폴리오
        </p>
      </div>

      <div className="text-center font-semibold mt-8">
        <h1 className="text-xl">
          <TypingText
            text="안 녕하세요, 도전 정신과 포기하지 않는 끈기로"
            speed={70}
            delay={0}
          />
        </h1>
        <p className="text-xl mt-2">
          <TypingText
            text="어 제보다 더 발전한 오늘을 보여주는 웹 개발자입니다"
            speed={70}
            delay={2000}
          />
        </p>
        <p className="text-xl mt-2">
          <TypingText
            text="나 아가, 어제보다 더 나은 서비스를 끊임없이 탐구하는 개발자가 되겠습니다."
            speed={70}
            delay={4000}
          />
        </p>
      </div>
    </section>
  );
};

export default Intro;
