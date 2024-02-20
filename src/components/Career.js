import React from "react";
import CareerIcon from "../assets/images/CareerIcon.png";
import EducationIcon from "../assets/images/EducationIcon.png";
import KogasLogo from "../assets/images/KogasLogo.jpg";
import HanwhaLogo from "../assets/images/HanwhaLogo.PNG";
import SSAFYLogo from "../assets/images/SSAFYLogo.jpg";
function Career() {
  return (
    <section id="career" className="p-12 bg-[#cba36f]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          CAREERS & EDUCATIONS
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src={CareerIcon} alt="Career" className="w-10 h-10" />
                <h3 className="text-2xl font-semibold ml-4">경력 사항</h3>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 ml-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src={KogasLogo}
                        alt="Kogas Logo"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h4 className="font-extrabold">한국가스공사</h4>
                        <p className="text-sm font-bold">(2021.09 ~ 2021.12)</p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <ul className="list-disc text-sm text-gray-500">
                        <li> 직무: 설비운영 (인턴)</li>
                        <li> </li>
                        <li>업무 내용 2</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src={HanwhaLogo}
                        alt="Hanwha Logo"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h4 className="font-extrabold">한화솔루션</h4>
                        <p className="text-sm font-bold">(2022.01 ~ 2023.05)</p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <ul className="list-disc text-sm text-gray-500">
                        <li> 직무: 생산지원 (기계/장치)</li>
                        <li> 공장 내 설비 건전성 평가</li>
                        <li>업무 내용 2</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={EducationIcon}
                  alt="Education"
                  className="w-10 h-10"
                />
                <h3 className="text-2xl font-semibold ml-4">교육</h3>
              </div>
              <div className="border-l-4 border-green-500 pl-4 ml-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src={SSAFYLogo}
                        alt="SSAFY Logo"
                        className="w-12 h-10 mr-4"
                      />

                      <div>
                        <h4 className="font-extrabold">
                          삼성 청년 SW 아카데미 10기
                        </h4>
                        <p className="text-sm font-bold"> (2023.07 ~ 진행중)</p>
                      </div>
                    </div>
                    <ul className="list-disc ml-20 text-sm text-gray-500">
                      <li>알고리즘(Python) 학습 및 코딩 테스트 준비</li>
                      <li>웹 개발 기술(Django, Vue) 심화 학습</li>
                      <li>팀 프로젝트를 통한 협업 및 문제 해결 경험</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
