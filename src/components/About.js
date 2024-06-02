import React from "react";
import SelfImage from "../assets/images/SelfImage.jpg";

function About() {
  return (
    <section
      id="about"
      className="p-12 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-4">ABOUT</h2>
      <div className="flex border-4 divide-gray-400 justify-center items-center p-10 w-[700px]">
        <img
          className="w-48 h-60 rounded-full"
          src={SelfImage}
          alt="self_image"
        />
        <ul
          className="flex flex-col list-disc gap-3"
          style={{ marginLeft: "15%" }}
        >
          <li className="font-bold">이름 : 정종길</li>
          <li className="font-bold">생년월일 : 1996. 10. 02</li>
          <li className="font-bold">주소 : 부산광역시 강서구</li>
          <li className="font-bold">이메일 : jonggil.jeong24@gmail.com</li>
          <li className="font-bold">학력 : 부산대학교 </li>
          <li className="font-bold">전공 : 기계공학부</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
