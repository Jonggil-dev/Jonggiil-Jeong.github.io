import React from "react";

const Intro = () => {
  return (
    <section
      id="Home"
      className="pt-[100px] bg-[#cba36f] h-auto flex flex-col items-center justify-center space-y-6 py-10"
    >
      <h1 className="text-5xl font-extrabold text-[#f5f5f5] drop-shadow-lg mb-6">
        안녕하세요, 백엔드 개발자 정종길입니다.
      </h1>
      <div className="flex flex-col items-start ms-[150px]">
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-4">
            끈기를 바탕으로 도전하는 것에 익숙합니다.
          </h2>
          <p className="text-xl mt-2">
            '스마트 스쿨존' 아이디어로 공모전에서 산업통상자원부 장관상을
            수상했습니다.
          </p>
          <p className="text-xl mt-2">
            4번의 도전 끝에 이루어낸 전국 1등 경험에서 도전이 주는 즐거움을
            깨닫게 되었습니다.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-4">
            정답을 넘어 깊은 이해를 추구합니다.
          </h2>
          <p className="text-xl mt-2">
            CI/CD Pipeline을 구축하여 자동화 배포 서비스를 제공했습니다.
          </p>
          <p className="text-xl mt-2">
            단순히 자동화 배포를 구현한 것이 아닌, 프로젝트의 아키텍처 내에서 각
            서버가 상호 작용하는 과정을 이해하였습니다.
          </p>
          <p className="text-xl mt-2">
            EC2 인스턴스와 Docker 컨테이너, 리버스 프록시 서버간의 상호작용을
            이해하고 리소스 낭비를 최소화 하였습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
