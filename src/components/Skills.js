import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="pt-16 mx-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col border-4 justify-center items-center p-10 gap-10 w-fit">
          <div style={{ width: "48rem" }}>
            <h3 className="text-xl font-semibold mb-5">1. Languages</h3>
            <div className="flex flex-col gap-2">
              <SkillItem
                imageUrl="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                width="80%"
                skillName="JavaScript"
              />

              <SkillItem
                imageUrl="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                width="70%"
                skillName="HTML5"
              />
              <SkillItem
                imageUrl="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                width="60%"
                skillName="Python"
              />
            </div>
          </div>

          <div style={{ width: "48rem" }}>
            <h3 className="text-xl font-semibold mb-5">2. Frameworks</h3>
            <div className="flex flex-col gap-2 max-w-3xl">
              <SkillItem
                imageUrl="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
                width="80%"
                skillName="React"
              />
              <SkillItem
                imageUrl="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"
                width="70%"
                skillName="Vue.js"
              />
              <SkillItem
                imageUrl="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"
                width="60%"
                skillName="Django"
              />
            </div>
          </div>

          <div style={{ width: "48rem" }}>
            <h3 className="text-xl font-semibold mb-5">
              3. Collaboration Tools
            </h3>
            <div className="flex flex-col gap-2 max-w-3xl">
              <SkillItem
                imageUrl="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"
                width="60%"
                skillName="GitHub"
              />
              <SkillItem
                imageUrl="https://img.shields.io/badge/jirasoftware-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white"
                width="50%"
                skillName="Jira Software"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function SkillItem({ imageUrl, width, skillName }) {
  return (
    <div className="skill-item flex items-center pl-10">
      <img
        className="w-1/5 mr-10 h-10"
        src={imageUrl}
        alt={`${skillName} Logo`}
      />
      <div className="w-3/4 bg-gray-200 rounded-full h-5 dark:bg-gray-700 relative">
        <div className="bg-blue-600 h-5 rounded-full" style={{ width }}>
          <span className="absolute w-full text-white text-sm flex justify-center items-center">
            {width}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
