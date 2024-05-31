import React from "react";
import icecream from "../assets/images/icecream.png";
import simcheongeMain from "../assets/images/simcheongeMain.jpg";
import blink from "../assets/images/blink.jpg";

const Projects = () => {
  return (
    <section id="project" className="min-h-screen p-12">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>
        <div className="flex flex-col items-stretch gap-8">
          <ProjectItem
            title="Icecream"
            period="2024.04.08(월) ~ 2024.05.20(월)"
            position="백엔드 개발"
            description="자녀들의 안전 보행을 통한 스쿨존 내 교통 사고 예방 어플리케이션"
            roles={[
              {
                title: "Spring Security + JJWT를 활용한 인증/인가 관리 - 2 ",
                description: [
                  `Security 라이브러리의 UsernamePasswordAuthenticationFilter, UserDetailService, AuthenticationSuccessHandler 등 Authentication 관련 인터페이스 구현체를 커스텀 하였습니다. 이를 통해 인증/인가 과정은 Security의 FilterChain을 통해 처리하면서도 클라이언트에서 요구하는 응답/예외를 반환했습니다.
                  `,
                  `유저 정보에 따른 로그인 방식을 다르게 처리하기 위해(Login Id 또는 Device Id) 3번의 분기를 나누어 인증 절차를 구현했습니다.`,
                  `보안을 강화하기 위해 Access Token과 Refresh Token의 Secret Key를 분리하고 유저 권한 정보에 따른 API 접근을 제한하였습니다.`,
                ],
              },
              {
                title: "유저 정보 관련 18개 API 엔드포인트 구현",
                description: [],
              },
              {
                title:
                  "RabbitMQ, PostGIS를 활용한 실시간 사용자 위치 파악 (공간 인덱싱)",
                description: [
                  `RabbitMQ로 수집한 사용자의 GPS 데이터와 PostGIS의 공간 인덱싱 기술을 통해 실시간으로 사용자가 특정 횡단보도에 위치하는지 파악했습니다.`,
                  `사용자가 특정 횡단보도에 위치할 경우, Redis에 알림 발송 대상자로 기록하여 과속 차량 발생 시 위험 알림을 제공 받을 수 있도록 구현했습니다.`,
                ],
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
            image={icecream}
          />
          <ProjectItem
            title="심청이"
            period="2024.02.19(월) ~ 2024.04.05(금)"
            position="인프라, 백엔드 개발"
            description="청년 정책 정보를 쉽고 간편하게 제공하는 모바일 어플리케이션"
            roles={[
              {
                title: "CI/CD Pipeline 구축을 통한 자동화 배포",
                description: [
                  `Jenkins CI/CD 파이프라인을 통해 GitLab의 Push 이벤트 발생 시 소스 코드를 빌드하고 EC2 서버에 배포했습니다.`,
                  `Nginx를 리버스 프록시 서버로 설정하여 HTTPS 프로토콜을 통한 보안 통신을 구축했습니다.`,
                  `민감 데이터의 경우 env 파일로 Jenkins의 Credential 저장소에서 관리하고 빌드 직전에 프로젝트로 주입하여 보안을 강화했습니다.`,
                  `Docker 컨테이너를 사용해 애플리케이션의 실행 환경을 일관되게 유지하면서 빠르고 안정적인 배포를 실현했습니다.`,
                  `Docker 이미지는 멀티 스테이지 빌드를 사용해 불필요한 의존성과 파일을 제거하였고 배포 효율성을 극대화했습니다.
                Flutter의 APK 파일의 경우, Nginx를 통해 사용자가 특정 URL로 요청 시 최신 버전을 서빙되도록 설정했습니다.
                또한, 개발자가 APK의 버전 관리를 할 수 있도록 별도로 볼륨 마운트 폴더를 생성했습니다.`,
                ],
              },
              {
                title: "Spring Security + JJWT를 활용한 인증/인가 관리 - 1",
                description: [
                  `Spring Security와 JJWT를 사용하여 인증 및 인가 시스템을 구축했습니다. 
                  Security의 CustomUserDetail을 통해 User의 LoginID를 기준으로 UserDetail 객체를 만들어 로그인을 진행하였습니다.
                  또한, Security의 filterchain 내 JwtAuthenticationFilter를 생성하고 UsernamePasswordAuthenticationFilter전에 위치시켜 JWT토큰을 통한 인증 시스템을 구축했습니다.`,
                ],
              },
              {
                title: "크롤링과 Chatgpt API를 통한 뉴스 기사 요약",
                description: [
                  `사용자에게 헤드라인 뉴스 기사의 요약본과 원문을 제공했습니다.
                  JSOAP를 사용해 네이버의 최신 해드라인 기사 뉴스의 링크를 먼저 크롤링하고, 해당 링크의 기사 내용을 다시 크롤링했습니다.
                  이렇게 추출된 뉴스 기사를 Chatgpt API를 사용해 기사를 요약해 사용자에게 제공했습니다.`,
                ],
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
            description="WebRTC기술을 활용한 온라인 눈(eye) 싸움 게임 어플리케이션 (Progressive Web Apps)"
            roles={[
              {
                title: "UI/UX 설계",
                description: [
                  `디자인 설계 프로세스는 Figma를 사용하여 진행했습니다.
                UI 및 UX 측면에서 사용자 경험을 최적화하기 위해 여러 디자인을 적용해 보았고,
                추후 사용자들로부터 피드백을 수집해 회원가입, 게임 화면 등 인터페이스를 개선해 나갔습니다.
                `,
                ],
              },
              {
                title: "PWA 적용 및 반응형 디자인 구현",
                description: [
                  `Progressive Web App(PWA) 기술을 적용하여 모바일 및 웹 플랫폼 모두 플레이할 수 있도록 프로젝트를 개발했습니다.
                특히, CSS의 경우 뷰포트 단위를 사용하여 디스플레이 크기에 따라 요소별 전체 크기는 변하지만 각 요소의 가로세로 비율은 동일하게 했습니다.
                768px 이상의 크기에서는 모바일 디자인을 동일하게 적용해 웹 환경에서도 일관된 경험을 누릴 수 있게 했습니다.
                `,
                ],
              },
              {
                title:
                  "Axios Interceptor를 활용한 인증/인가 요청(Jwt 토큰 관리)",
                description: [
                  `Axios Interceptor를 통해 API 요청과 응답을 처리하는 중간에 JWT 토큰을 관리하는 로직을 추가했습니다.
                이를 통해 모든 HTTP 요청 Header에 자동으로 AccessToken을 주입하고, 토큰이 만료되더라도 자동으로 토큰을 갱신받아 원본 요청을 재처리했습니다.
                JWT 토큰 만료로 인한 예외 응답의 경우 클라이언트에게 응답이 도달하기 전 AccessToken을 갱신받도록 구현했습니다.
                또한, 원본 요청의 config에 갱신받은 AccessToken을 추가하여 원본 요청을 재처리했습니다.
                결과적으로, 토큰이 만료되더라도 사용자의 시스템이 끊기지 않도록 부드러운 경험을 제공했습니다.`,
                ],
              },

              {
                title: "React Context API를 통한 유저 정보 관리",
                description: [
                  `Context API를 활용해 닉네임, 랭킹포인트, AccessToken 등 애플리케이션 전반에 걸쳐 유저 정보를 관리했습니다.
                중앙 집중식 접근 방식을 통해 컴포넌트에서 사용자 정보를 효과적으로 공유하고 불필요한 코드의 중복을 감소시켜 유지보수가 용이하게 했습니다. 
                `,
                ],
              },
              {
                title: "WebSocket을 통한 실시간 통신 구현",
                description: [
                  `Stomp.JS 라이브러리를 활용해 서버와 클라이언트 간의 실시간 통신을 연결했습니다.
                React의 상태관리 훅을 사용해 사용자 로그인 시 자동으로 백엔드 서버와의 WebSocket 연결을 초기화했습니다.
                이를 통해 사용자 간의 친구 추가, 게임 초대와 같은 실시간 상호작용 기능을 제공했습니다, `,
                ],
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
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                {role.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
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
