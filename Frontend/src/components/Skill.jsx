
import React from "react";

const Skills = [
  {
    id: 1,
    title: "Java",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 2,
    title: "JavaScript",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 3,
    title: "SQL",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Crafting compelling and engaging written content.",
  },
  {
    id: 4,
    title: "HTML5",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 5,
    title: "CSS",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 6,
    title: "React.js",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Building dynamic and efficient web applications with React.",
  },
  {
    id: 7,
    title: "Express.js",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 8,
    title: "Node.js",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 9,
    title: "Bootstrap",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 10,
    title: "Tailwind-Css",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Proficient in Java programming for backend development.",
  },
  {
    id: 11,
    title: "Web Design",
    link: "https://drive.google.com/file/d/19cPvQMt5S8QPVRZ_JAahjgAqH1S2KJn1/view?usp=drive_link",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 12,
    title: "Frontend Development",
    link: "https://drive.google.com/file/d/19cPvQMt5S8QPVRZ_JAahjgAqH1S2KJn1/view?usp=drive_link",
    description: "Expertise in building interactive user interfaces.",
  },
  {
    id: 13,
    title: "Backend Development",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Skilled in server-side development and database management.",
  },
  {
    id: 14,
    title: "Full-Stack Development",
    link: "https://drive.google.com/file/d/1HO52L17q8HgK37npu1cSJvUHMgXlQUI-/view",
    description: "Combining frontend and backend skills to create complete applications.",
  },

  
];

const Skill = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20" id="Skill">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-sm font-semibold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                Skill #{skill.id}
              </div>
              <h3
                className="mt-4 text-xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {skill.title}
              </h3>
              <p className="mt-4 text-gray-300 text-sm">
                {skill.description || "Description coming soon..."}
              </p>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-green-400 hover:text-blue-500 text-sm transition-colors "
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
