import React from "react";
import CareerIcon from "../assets/CareerIcon.png";
import EducationIcon from "../assets/EducationIcon.png";
import KogasLogo from "../assets/KogasLogo.jpg";
import HanwhaLogo from "../assets/HanwhaLogo.PNG";
import SSAFYLogo from "../assets/SSAFYLogo.jpg";

function Career() {
  return (
    <section id="career" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Career & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img src={CareerIcon} alt="Career" className="w-10 h-10" />
                <h3 className="text-2xl font-semibold ml-4">경력 사항</h3>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 ml-4">
                <div className="flex flex-col">
                  <div>
                    <div className="flex items-center">
                      <img
                        src={KogasLogo}
                        alt="Company Logo"
                        className="w-[70px] h-[50px]"
                      />
                      <div className="flex flex-col ">
                        <p className="font-bold text-sm">한국가스공사</p>
                        <p className="font-bold text-sm">(2021.09 ~ 2021.12)</p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <p className="text-sm text-gray-500 mt-1">
                        직무: 설비운영 (인턴)
                      </p>
                      <p className="text-sm text-gray-500 mt-1">업무 : </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div>
                    <div className="flex items-center">
                      <img
                        src={HanwhaLogo}
                        alt="Company Logo"
                        className="w-[50px] h-[50px] ms-2"
                      />
                      <div className="flex flex-col ms-3">
                        <p className="font-bold text-sm">한화솔루션</p>
                        <p className="font-bold text-sm">(2022.01 ~ 2023.05)</p>
                      </div>
                    </div>
                    <div className="ml-8">
                      <p className="text-sm text-gray-500 mt-1">
                        직무: 생산지원 (기계/장치)
                      </p>
                      <p className="text-sm text-gray-500 mt-1">업무 : </p>
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
                <div className="flex flex-col mt-4">
                  <div>
                    <div className="flex items-center">
                      <img
                        src={SSAFYLogo}
                        alt="Company Logo"
                        className="w-[40px] h-[30px] ms-2"
                      />
                      <div className="flex flex-col ms-3">
                        <p className="font-bold text-sm">
                          삼성 청년 SW 아카데미 10기 (SSAFY)
                        </p>
                        <p className="font-bold text-sm">(2023.07 ~ 진행중)</p>
                      </div>
                    </div>
                    <div className="ml-10">
                      <p className="text-sm text-gray-500 mt-1">
                        내용: 생산지원 (기계/장치)
                      </p>
                      <p className="text-sm text-gray-500 mt-1">업무 : </p>
                    </div>
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
