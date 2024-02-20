import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="p-12 bg-[#cba36f]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-semibold p-3 border-b-4 border-gray-400 mb-4">
              Languages
            </h3>
            <img
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
              alt="JavaScript"
              className="h-10"
            />
            <img
              src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
              className="h-10"
            />
            <img
              src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="Python"
              className="h-10"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-semibold p-3 border-b-4 border-gray-400 mb-4">
              Frameworks
            </h3>
            <img
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
              alt="React"
              className="h-10"
            />
            <img
              src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"
              alt="Vue.js"
              className="h-10"
            />
            <img
              src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"
              alt="Django"
              className="h-10"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-semibold p-3 border-b-4 border-gray-400 mb-4">
              Collaboration Tools
            </h3>
            <img
              src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="h-10"
            />
            <img
              src="https://img.shields.io/badge/jirasoftware-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white"
              alt="Jira Software"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
