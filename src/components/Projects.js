import React from "react";

const Projects = () => {
  return (
    <section id="project" className="pt-20 pb-8 mx-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        <ProjectItem
          title="수길이네 금융마을"
          descriptionItems={[
            "금융 퀴즈/ 카드 뉴스/ 금융 꿀팁을 통해 누구나 즐겁게 금융에 대해 배울수 있는 웹 페이지",
            "회원가입, 로그인 등 유저 정보 관리",
            "커뮤니티 게시판 기능",
            "카카오 맵 은행 검색 기능",
            "금융 꿀팁 및 금융 퀴즈 기능",
          ]}
          techStack="Vue.js(Frontend), Django(Backend), SQLite3(DB)"
          link="https://github.com/Jonggil-dev/finalpjt_semester1"
        />
        <ProjectItem
          title="눈 깜빡할 새"
          descriptionItems={[
            "WebRTC기술을 활용한 온라인 눈(eye) 싸움 게임",
            "디자인 (피그마 UI/UX 설계)",
            "회원가입, 로그인 등 유저 정보 관리",
            "Jwt Token 등 유저 권한 관리",
            "WebSocket을 통한 실시간 통신",
          ]}
          techStack="Node.js(Frontend), React(Frontend), Spring Boot(Backend), OpenVidu(WebRTC), MySql(DB), Redis(DB), AWS(Server), Docker(Server)"
          link="https://github.com/Jonggil-dev/Staring-Contest"
        />
      </div>
    </section>
  );
};

function ProjectItem({ title, descriptionItems, techStack, link }) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="text-gray-800">
          <p className="font-medium mb-2">개요:</p>
          {descriptionItems.map((item, index) => (
            <p key={index} className="ml-4 mb-1">
              · {item}
            </p>
          ))}

          <p className="font-medium mt-4 mb-2">기술스택:</p>
          <p className="ml-4">· {techStack}</p>

          <p className="font-medium mt-4 mb-2">링크:</p>
          <a
            href={link}
            className="ml-4 text-blue-500 hover:text-blue-600 underline"
          >
            프로젝트 보러가기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
