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
            description="자녀들의 안전 보행을 통한 스쿨존 내 교통사고 예방 애플리케이션"
            roles={[
              {
                title: "Spring Security + JJWT를 활용한 인증/인가 관리 - 2 ",
                description: [
                  `Security 라이브러리의 UsernamePasswordAuthenticationFilter, UserDetailService, AuthenticationSuccessHandler 등 Authentication 관련 인터페이스 구현체를 커스텀 하였습니다. 이를 통해 인증/인가 과정은 Security의 FilterChain을 통해 처리하면서도 클라이언트에게 요구하는 응답/예외를 반환했습니다.`,
                  `JwtAuthenticationFilter를 생성하고 FilterChain에 등록하여 Jwt 토큰 기반 인증 시스템을 구축하고 보안을 강화했습니다.`,
                  `유저 정보에 따른 로그인 방식을 다르게 처리하기 위해(Login Id 또는 Device Id) 3번의 분기를 나누어 인증 절차를 구현했습니다.`,
                  `보안을 강화하기 위해 Access Token과 Refresh Token의 Secret Key를 분리하고 유저 권한 정보에 따른 API 접근을 제한했습니다.`,
                ],
              },
              {
                title: "유저 정보 관련 18개 API 엔드포인트 구현",
                description: [
                  "회원가입, 로그인, 회원 정보 수정 등 유저 정보를 관리하기 위한 18개의 API 엔드포인트를 구현했습니다.",
                  "프로젝트 내 API 개발 담당자로 3명의 프론트엔드 개발자의 에러를 혼자 응대하며 정확한 에러 핸들링의 중요성을 배웠습니다. 프로젝트 초기 에러 응답의 부정확성으로 원인을 추정하는 데 많은 시간을 낭비했습니다. 이후 에러 핸들링을 명확하게 처리함으로써 프론트엔드 개발자와의 소통을 개선하고, 디버깅 시간을 단축했습니다. 이에 따라 팀의 작업 효율성이 증가하였으며, 빠른 문제 해결이 가능해졌습니다.",
                ],
              },
              {
                title:
                  "RabbitMQ, PostGIS를 활용한 실시간 사용자 위치 파악 (공간 인덱싱)",
                description: [
                  `RabbitMQ로 수집한 사용자의 GPS 데이터와 PostGIS의 공간 인덱싱 기술을 통해 실시간으로 사용자가 특정 횡단보도에 위치하는지 파악했습니다.`,
                  `사용자가 특정 횡단보도에 위치할 경우, Redis에 알림 발송 대상자로 기록하여 과속 차량 발생 시 위험 알림을 제공받을 수 있도록 구현했습니다.`,
                ],
              },
            ]}
            techStack={[
              "Flutter",
              "Spring Boot",
              "RabbitMQ",
              "PostgreSQL",
              "Redis",
              "MongoDB",
              "FastAPI",
              "AWS EC2",
              "Docker",
              "Jenkins",
              "Nginx",
            ]}
            link="https://github.com/Jonggil-dev/Icecream"
            image={icecream}
          />
          <ProjectItem
            title="심청이"
            period="2024.02.19(월) ~ 2024.04.05(금)"
            position="인프라, 백엔드 개발"
            description="청년 정책 정보를 쉽고 간편하게 제공하는 모바일 애플리케이션"
            roles={[
              {
                title: "CI/CD Pipeline 구축을 통한 자동화 배포",
                description: [
                  `Jenkins CI/CD 파이프라인을 통해 GitLab의 Push 이벤트 발생 시 소스 코드를 빌드하고 EC2 서버에 배포했습니다.`,
                  `Nginx를 리버스 프록시 서버로 설정하여 HTTPS 프로토콜을 통한 보안 통신을 구축했습니다.`,
                  `Docker 컨테이너를 사용해 애플리케이션의 실행 환경을 일관되게 유지하면서 빠르고 안정적인 배포를 실현했습니다.`,
                  `Docker 이미지의 경우 멀티 스테이지 빌드를 사용해 불필요한 빌드 도구와 툴킷을 제거하여 리소스를 최적화했습니다.`,
                  `Flutter의 경우 애플리케이션 빌드부터 APK 파일의 EC2 서버 업로드까지를 파이프라인으로 구성했습니다. 또한, Nginx를 활용해 사용자가 특정 URL을 통해 최신 버전의 APK 파일을 직접 다운로드할 수 있도록 함으로써 사용자들이 수동으로 파일을 공유 받는 번거로움을 줄였습니다." `,
                  `프로젝트 내 민감 데이터의 경우 Jenkins의 Credential로 관리하고 빌드 직전에 소스 코드에 주입하여 개발 과정의 보안을 강화했습니다.`,
                ],
              },
              {
                title: "Spring Security + JJWT를 활용한 인증/인가 관리 - 1",
                description: [
                  `Spring Security 라이브러리의 UserDetailService 구현체를 커스텀하였습니다. 이를 통해, 연결된 DB 내 Login Id를 기준으로 UserDetail 객체를 만들고 인증을 진행할 수 있도록 했습니다.`,
                  `JwtAuthenticationFilter를 생성하고 FilterChain에 등록하여 Jwt 토큰 기반 인증 시스템을 구축하고 보안을 강화했습니다.`,
                ],
              },
              {
                title: "크롤링과 Chatgpt API를 통한 뉴스 기사 요약",
                description: [
                  `JSOAP를 사용해 네이버 해드라인 기사 뉴스의 링크를 먼저 크롤링하고, 해당 링크의 기사 내용을 다시 크롤링했습니다.`,
                  `크롤링을 통해 추출한 뉴스 기사를 ChatGPT API로 요약하여, 사용자들이 원문을 읽기 전에 주요 내용을 빠르게 파악할 수 있도록 서비스를 제공했습니다.`,
                ],
              },
            ]}
            techStack={[
              "Flutter",
              "Spring Boot",
              "MariaDB",
              "Redis",
              "FastAPI",
              "AWS EC2",
              "Docker",
              "Jenkins",
              "Nginx",
            ]}
            link="https://github.com/Jonggil-dev/Simcheonge"
            image={simcheongeMain}
          />
          <ProjectItem
            title="눈 깜빡할 새"
            period="2024.01.08(월) ~ 2024.02.16(금)"
            position="프론트엔드 개발"
            description="WebRTC기술을 활용한 온라인 눈(eye) 싸움 게임 애플리케이션 (Progressive Web Apps)"
            roles={[
              {
                title: "UI/UX 설계",
                description: [
                  "Figma를 활용해 프론트엔드 팀원들과 디자인 설계 프로세스를 진행했습니다.",
                  "다양한 디자인 옵션을 실험하고 최적화하여 사용자 인터페이스를 개선했습니다.",
                  "사용자 피드백을 수집하여 회원가입 및 게임 화면 등 주요 인터페이스를 지속적으로 개선했습니다.",
                ],
              },
              {
                title: "PWA 적용 및 반응형 디자인 구현",
                description: [
                  "Progressive Web App(PWA) 기술을 적용하여 웹과 모바일 환경에서 동일한 사용자 경험을 제공했습니다.",
                  "CSS의 경우 뷰포트 단위를 사용하여 디스플레이 크기에 맞게 요소의 크기가 조절되는 반응형 디자인을 구현했습니다.",
                  "768px 이상의 디스플레이에서도 모바일 디자인을 적용하여 일관된 사용자 경험을 유지했습니다.",
                ],
              },
              {
                title:
                  "Axios Interceptor를 활용한 인증/인가 요청(Jwt 토큰 관리)",
                description: [
                  "Axios Interceptor를 통해 HTTP 요청에 자동으로 엑세스 토큰을 주입하는 로직을 구현했습니다.",
                  "엑세스 토큰이 만료될 경우, 응답을 가로채어 토큰을 갱신했습니다. 또한, 그 즉시 원본 요청의 config에 토큰을 추가하여 클라이언트에게 응답이 도달하기 전에 원본 요청을 재처리했습니다. 이 과정을 통해 사용자가 토큰 만료로 인한 서비스 중단 없이 지속해서 부드러운 경험을 누릴 수 있도록 구성했습니다.",
                ],
              },
              {
                title: "React Context API를 통한 유저 정보 관리",
                description: [
                  "React의 Context API를 사용하여 닉네임, 랭킹포인트, 엑세스 토큰 등 애플리케이션 내 유저 정보를 중앙에서 관리했습니다.",
                  "중앙 집중식 접근 방식을 통해 컴포넌트에서 사용자 정보를 효과적으로 공유하고 불필요한 코드의 중복을 감소시켜 유지보수를 간편하게 했습니다.",
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
              "AWS EC2",
              "Docker",
              "Jenkins",
              "Nginx",
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
