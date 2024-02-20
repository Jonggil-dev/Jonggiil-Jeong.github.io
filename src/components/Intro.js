import React, { useState, useEffect } from "react";
import IntroBackground1 from "../assets/IntroBackground1.webp";
// import IntroBackground2 from "../assets/IntroBackground2.webp";

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
      className="pt-[80px] h-[500px]"
      style={{
        background: `url(${IntroBackground1}) no-repeat center center`,
        backgroundSize: "100% 700px",
      }}
    >
      <upper className="flex flex-col items-center">
        <p className="text-3xl font-extrabold text-[#0a0a0a]">- 정종길 -</p>
        <p className="text-4xl font-extrabold text-[#0a0a0a]">
          웹 개발자 포트폴리오
        </p>
      </upper>

      <lower className="flex flex-col font-semibold justify-center items-center mt-5">
        <h1>
          <TypingText text="안 녕하세요," speed={100} delay={0} />
        </h1>
        <p>
          <TypingText
            text="아 이디어를 구현하는 프로그래밍의 매력에 빠져"
            speed={50}
            delay={2000}
          />
        </p>
        <p>
          <TypingText
            text="개 발자라는 새로운 도전을 시작하고 있습니다."
            speed={50}
            delay={3500}
          />
        </p>
      </lower>
    </section>
  );
};

export default Intro;
