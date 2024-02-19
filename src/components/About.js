import React from "react";
import selfImage from "../assets/selfImage.jpg";

const About = () => {
  return (
    <section id="about" className="pt-16 mx-4">
      <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
      <div className="w-full flex justify-center items-center">
        <div className="flex border-4 divide-x divide-gray-400 w-fit">
          <div className="flex-1 flex flex-col justify-center items-center p-10">
            <img
              className="w-48 h-48 mb-5 rounded-full"
              src={selfImage}
              alt="self_image"
            />
            <ul
              className="flex flex-col list-disc gap-1"
              style={{ marginLeft: "15%" }}
            >
              <li className="font-bold">이름 : 정종길</li>
              <li className="font-bold">생년월일 : 1996. 10. 02</li>
              <li className="font-bold">주소 : 부산광역시 강서구</li>
              <li className="font-bold">이메일 : jonggil.jeong24@gmail.com</li>
              <li className="font-bold">학력 : 부산대학교 (기계공학부)</li>
            </ul>
          </div>
          <div
            className="flex-1 flex flex-col justify-evenly p-10"
            style={{ width: "45%" }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">1. 경력 사항</h3>
              <ul
                className="flex flex-col list-disc gap-2"
                style={{ marginLeft: "5%" }}
              >
                <li className="font-bold">
                  한국가스공사(인턴) - 설비운영부
                  <br />
                  (2021.09 ~ 2021.12)
                </li>
                <li className="font-bold">
                  한화솔루션(사원) - 설비안전진단팀
                  <br />
                  (2022.01 ~ 2023.05)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">2. 교육</h3>
              <ul
                className="flex flex-col list-disc gap-1"
                style={{ marginLeft: "5%" }}
              >
                <li className="font-bold">
                  삼성 청년 SW 아카데미 10기 (SSAFY) (2023.07 ~ 진행중)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
