import React from "react";
import simcheongeMain from "../assets/images/simcheongMain.jpg";
import blink from "../assets/images/blink.jpg";

const Projects = () => {
  return (
    <section id="project" className="min-h-screen p-12">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>
        <div className="flex flex-col items-stretch gap-8">
          <ProjectItem
            title="심청이"
            period="2024.02.19(월) ~ 2024.04.05(금)"
            position="인프라, 백엔드 개발"
            description="청년 정책 정보를 쉽고 간편하게 제공하는 모바일 어플리케이션"
            roles={[
              {
                title: "CI/CD Pipeline 구축을 통한 자동화 배포",
                description: `Jenkins CI/CD 파이프라인을 통해 코드 커밋이 발생할 때마다 성공적으로 이루어진 빌드만을 프로덕션 서버에 배포했습니다.
                EC2 인스턴스 내에서 Nginx를 리버스 프록시로 사용하고 Docker Container를 활용해 EC2내 각 서버들을 연결했습니다.
                민감 데이터의 경우 env 파일로 Jenkins의 Credential 저장소에서 관리하고 빌드 직전에 프로젝트로 주입하여 보안을 강화했습니다.
                Docker 이미지는 멀티 스테이지 빌드를 사용해 불필요한 의존성과 파일을 제거하였고 배포 효율성을 극대화했습니다.
                Flutter의 APK 파일의 경우, Nginx를 통해 사용자가 특정 URL로 요청 시 최신 버전을 서빙되도록 설정했습니다.
                또한, 개발자가 APK의 버전 관리를 할 수 있도록 별도로 볼륨 마운트 폴더를 생성했습니다`,
              },
              {
                title: "Spring Security + JJWT를 활용한 인증/인가 관리",
                description: `Spring Security와 JJWT를 사용하여 인증 및 인가 시스템을 구축했습니다. 
                  Security의 CustomUserDetail을 통해 User의 LoginID를 기준으로 UserDetail 객체를 만들어 로그인을 진행하였습니다.
                  또한, Security의 filterchain내 JwtAuthenticationFilter를 생성하고 UsernamePasswordAuthenticationFilter전에 위치시켜 JWT토큰을 통한 인증 시스템을 구축했습니다.`,
              },
              {
                title: "크롤링과 Chatgpt API를 통한 뉴스 기사 요약",
                description: `사용자에게 헤드라인 뉴스 기사의 요약본과 원문을 제공했습니다.
                  JSOAP를 사용해 네이버의 최신 해드라인 기사 뉴스의 링크를 먼저 크롤링하고, 해당 링크의 기사 내용을 다시 크롤링했습니다.
                  이렇게 추출된 뉴스 기사를 Chatgpt Api를 사용해 기사를 요약해 사용자에게 제공했습니다.`,
              },
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
            image={simcheongeMain}
          />
          <ProjectItem
            title="눈 깜빡할 새"
            period="2024.01.08(월) ~ 2024.02.16(금)"
            position="프론트엔드 개발"
            description="WebRTC기술을 활용한 온라인 눈(eye) 싸움 게임"
            roles={[
              {
                title: "디자인 (피그마 UI/UX 설계)",
                description: "",
              },
              {
                title: "React Context API를 통한 유저 정보 관리",
                description: "",
              },
              {
                title:
                  "Axios Interceptor를 활용한 인증/인가 요청(Jwt 토큰 관리)",
                description: "",
              },
              {
                title: "WebSocket을 통한 실시간 통신 구현",
                description: "",
              },
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
            image={blink}
          />

          {/* <ProjectItem
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
            image=""
          /> */}
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
  image,
}) {
  return (
    <div className="w-full flex bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="w-1/3">
        <img
          src={image}
          alt={`${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="font-medium mb-2">1. 기간: {period}</p>
          <p className="font-medium mt-4 mb-2">2. 개요: {description}</p>
          <p className="font-medium mt-4 mb-2">3. 역할: {position}</p>
          {roles.map((role, index) => (
            <div key={index} className="mb-2 ms-4">
              <p className="font-semibold mb-1">· {role.title}</p>
              <p className="text-gray-600 text-sm ms-3"> {role.description}</p>
            </div>
          ))}
        </div>
        <p className="font-medium mt-4 mb-2">4. 기술스택:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <a
            href={link}
            className="text-blue-500 hover:text-blue-600 underline"
          >
            ▶ 프로젝트 보러가기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
