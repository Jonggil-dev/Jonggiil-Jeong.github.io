import React from "react";

function Projects() {
  return (
    <section id="project" className="pt-16 mb-4 mx-4">
      <h2 className="text-2xl font-bold mb-4">Project</h2>
      <div className="flex flex-wrap border-4 p-4 justify-center items-stretch gap-4">
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
          link="123123"
        />
      </div>
    </section>
  );
}

function ProjectItem({ title, descriptionItems, techStack, link }) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-bold">ㆍ 개요</p>
            {descriptionItems.map((item, index) => (
              <p key={index} className="ml-2">
                - {item}
              </p>
            ))}
          </div>
          <div>
            <p className="font-bold">ㆍ 기술스택</p>
            <p className="ml-2">- {techStack}</p>
          </div>
          <div>
            <p className="font-bold">ㆍ 링크</p>
            <a
              className="ml-2 text-blue-500 hover:text-blue-700 underline"
              href={link}
            >
              - {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
