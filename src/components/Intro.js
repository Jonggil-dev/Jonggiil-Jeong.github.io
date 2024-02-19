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
    <section id="Home" className="pt-16 mx-4">
      <h2 className="text-2xl font-bold mb-4">Intro</h2>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-center">
          <TypingText
            text="안 녕하세요, 개발자 정종길입니다."
            speed={100}
            delay={0}
          />
        </h1>
        <p className="text-center">
          <TypingText
            text="아 이디어를 구현하는 프로그래밍의 매력에 빠져"
            speed={50}
            delay={2000}
          />
        </p>
        <p className="text-center">
          <TypingText
            text="개 발자라는 새로운 도전을 시작하고 있습니다."
            speed={50}
            delay={3500}
          />
        </p>
      </div>
    </section>
  );
};

export default Intro;
