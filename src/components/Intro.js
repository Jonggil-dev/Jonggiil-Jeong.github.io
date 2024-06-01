import React from "react";

const Intro = () => {
  return (
    <section
      id="Home"
      className="pt-[100px] bg-[#cba36f] h-auto flex flex-col items-center justify-center space-y-6 py-10"
    >
      <div className="intro">
        <h1 className="text-4xl font-extrabold text-[#f5f5f5] drop-shadow-lg mb-3 introUpper">
          "벌써 5시라고?"
        </h1>
        <h1 className="text-3xl font-extrabold text-[#f5f5f5] drop-shadow-lg mb-10 introUpper">
          안녕하세요, 엉덩이가 무거운 백엔드 개발자 정종길입니다.
        </h1>
        <div className="flex flex-col items-start introLower">
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4">
              끈기를 바탕으로 도전을 두려워하지 않습니다.
            </h2>
            <p className="text-base mt-2">
              '스마트 스쿨존' 아이디어로 공모전에서 산업통상자원부 장관상을
              수상했습니다.
            </p>
            <p className="text-base">
              3번의 실패 끝에, 새로운 팀의 팀장을 맡으며 팀원들의 강점을 최대한
              활용했습니다.
            </p>
            <p className="text-base">
              4번의 도전 끝에 이루어낸 전국 1등 경험은 도전이 주는 즐거움을
              깨닫게 해주었습니다.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4">
              맡은 일은 책임지고 끝까지 해냅니다.
            </h2>
            <p className="text-base">
              3번의 프로젝트 모두 담당했던 기능을 기간 내에 구현했습니다.
            </p>
            <p className="text-base">
              각 프로젝트마다 Frontend, Infra, Backend 개발이라는 새로운 역할을
              맡았지만,
            </p>
            <p className="text-base">
              "하면 된다."는 신념을 바탕으로 기대 이상의 결과를 만들어냈습니다.
            </p>
            <p className="text-base">
              또한, 남는 시간에 UCC 제작, 프로젝트 산출물 작성 등을 자발적으로
              담당하여 팀원들이 개발에 집중할 수 있도록 도왔습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
