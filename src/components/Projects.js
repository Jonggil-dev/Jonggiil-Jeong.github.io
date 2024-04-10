import React from "react";

const Projects = () => {
  return (
    <section id="project" className="p-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          <ProjectItem
            title="심청이"
            period="2024.02.19(월) ~ 2024.04.05(금)"
            position="백엔드 개발"
            description="청년 정책 정보를 쉽고 간편하게 제공하는 모바일 어플리케이션"
            roles={[
              "CI/CD Pipeline 구축을 통한 자동화 배포",
              "Spring Security + JJWT를 활용한 인증/인가 관리",
              "크롤링과 Chatgpt API를 통한 뉴스 기사 요약",
            ]}
            techStack={[
              "AWS EC2",
              "Docker",
              "Jenkins",
              "Nginx",
              "Spring Boot",
              "Flutter",
              "React",
              "FastAPI",
              "MariaDB",
              "Redis",
            ]}
            link="https://github.com/Jonggil-dev/Simcheonge"
          />

          <ProjectItem
            title="눈 깜빡할 새"
            period="2024.01.08(월) ~ 2024.02.16(금)"
            position="프론트엔드 개발"
            description="WebRTC기술을 활용한 온라인 눈(eye) 싸움 게임"
            roles={[
              "디자인 (피그마 UI/UX 설계)",
              "React Context API를 통한 유저 정보 관리",
              "Axios Interceptor를 활용한 인증/인가 요청(Jwt 토큰 관리)",
              "WebSocket을 통한 실시간 통신 구현",
            ]}
            techStack={[
              "Node.js",
              "React",
              "Spring Boot",
              "OpenVidu",
              "MySql",
              "Redis",
              "AWS",
              "Docker",
            ]}
            link="https://github.com/Jonggil-dev/Staring-Contest"
          />

          <ProjectItem
            title="수길이네 금융마을"
            period="2023.11.16(목) ~ 2023.11.23(목)"
            position="풀스택 개발"
            description="금융 퀴즈/ 카드 뉴스/ 금융 꿀팁을 통해 누구나 즐겁게 금융에 대해 배울수 있는 웹 페이지"
            roles={[
              "회원가입, 로그인 등 유저 정보 관리(Vuex-Store, django-rest-auth)",
              "커뮤니티 게시판 기능",
              "카카오 맵 은행 검색 기능",
              "금융 꿀팁 및 금융 퀴즈 기능",
            ]}
            techStack={["Vue.js", "Django", "SQLite3"]}
            link="https://github.com/Jonggil-dev/finalpjt_semester1"
          />
        </div>
      </div>
    </section>
  );
};

function ProjectItem({
  title,
  period,
  position,
  description,
  roles,
  techStack,
  link,
}) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xln">
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="text-gray-800">
          <p className="font-medium mb-2">1. 기간:</p>
          <p className="ml-4">· {period}</p>
          <p className="font-medium mt-4 mb-2">2. 개요:</p>
          <p className="ml-4">· {description}</p>

          <p className="font-medium mt-4 mb-2">3. 역할: {position}</p>
          {roles.map((role, index) => (
            <p key={index} className="ml-4 mb-1">
              · {role}
            </p>
          ))}

          <p className="font-medium mt-4 mb-2">4. 기술스택:</p>
          <div className="flex flex-wrap gap-2 mt-2 ml-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="font-medium mt-4 mb-2">5. 링크:</p>
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
