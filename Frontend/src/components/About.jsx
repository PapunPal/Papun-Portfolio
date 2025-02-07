
import React from "react";
import HeroImage from "../assets/papunphoto.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section: Image */}
          <div className="flex-shrink-0">
            <img
              src={HeroImage}
              alt="Papun Pal"
              className="w-80 h-96 rounded-2xl object-cover shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>

          {/* Right Section: Content */}
          <div className="flex-1 text-gray-300">
            <p className="text-lg leading-relaxed mb-6">
              Hello! My name is <span className="text-green-400 font-bold">Papun Pal</span>, and I’m from <span className="text-blue-400 font-bold">Garhbeta</span>, a small town in the <span className="font-bold text-blue-400">Paschim Medinipur</span> district of <span className="text-green-400"> West Bengal</span>.I was born on <span className="font-bold text-green-400">August 25, 2001</span>, in Bishnupur, Bankura. I am currently a <span className="font-bold text-blue-400">B.Tech 4th-year Computer Science and Engineering (CSE) student</span> at the Budge Budge Institute of Technology.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From a young age, I’ve been fascinated by computers, which inspired me to pursue a career in technology. I started my educational journey at <span className="text-blue-400">Bankati Primary School</span> and completed my high school at <span className="text-green-400">Shyamnagar Sri Ram Krishna Vidyamandir</span>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Currently, I am sharpening my skills in programming and web development, aiming to become a skilled <span className="text-blue-400 font-bold">Software Engineer</span> and <span className="text-green-400 font-bold">Web Developer</span>. Here's an overview of my skillset:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-400 mb-4">Technical Skills:</h3>
              <p className="mb-2">Java, SQL, JavaScript, HTML5, CSS, React.js, Node.js, Express.js, Bootstrap, Tailwind CSS.</p>
              <h3 className="text-xl font-bold text-green-400 mb-4">Developer Tools:</h3>
              <p className="mb-2">VS Code, IntelliJ IDEA Ultimate.</p>
              <h3 className="text-xl font-bold text-green-400 mb-4">Coursework:</h3>
              <p>OOP Concepts, DBMS, Data Structures, Web Development.</p>
            </div>
            <p className="text-lg leading-relaxed mt-6">
              Beyond coding, I enjoy solving challenges on <span className="text-blue-400 font-bold">GeeksforGeeks</span> and <span className="text-green-400 font-bold">LeetCode</span>, and exploring my creative side through <span className="text-blue-400 font-bold">cooking</span>.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              4+
            </h3>
            <p className="text-gray-400 mt-2">Years of Learning</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              20+
            </h3>
            <p className="text-gray-400 mt-2">Certificates Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
