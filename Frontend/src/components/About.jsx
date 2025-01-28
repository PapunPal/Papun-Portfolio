// import React from "react";
// import AboutImage from "../assets/aboutme-image.png";
// import HeroImage from '../assets/papunphoto.jpg'

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={HeroImage}
//             alt=""
//             className="w-72 h-96 rounded object-cover mb-8 md:mb-0"
//           />
//           <div className="flex-1">
//             <p className="text-lg mb-8">
//               Hello! My name is Papun Pal, and I’m from Garhbeta, a small town in the Paschim Medinipur district of West Bengal. I was born on August 25, 2001, in Bishnupur, Bankura. I am currently a B.Tech 3rd-year Computer Science and Engineering (CSE) student at the Budge Budge Institute of Technology.

//               From a young age, I’ve been fascinated by computers, which inspired me to pursue a career in technology. My educational journey began at Bankati Primary School, where I completed my early schooling from Grade 1 to Grade 4. I then moved to Shyamnagar Sri Ram Krishna Vidyamandir, where I studied from Grade 5 to Grade 12.

//               I successfully passed my Madhyamik Examination (10th grade) under the West Bengal Board of Secondary Education in 2018 with 73.71% marks. Later, in 2020, I completed my Higher Secondary Examination under the West Bengal Council of Higher Secondary Education, securing 73.6% marks.

//               Currently, I am working hard to sharpen my technical skills and expand my knowledge in programming and web development. Here’s a quick overview of my skillset:

//               Technical Skills: Java, SQL, JavaScript, HTML5, CSS, React, Node.js, Express.js, Bootstrap, Tailwind CSS.
//               Developer Tools: VS Code, IntelliJ IDEA Ultimate.
//               Coursework: OOP Concepts, DBMS, Data Structures, Web Development.
//               My ultimate career goal is to become a successful Software Engineer and Web Developer, constantly improving and contributing to innovative projects.

//               In addition to my passion for technology, I enjoy solving coding challenges on platforms like GeeksforGeeks and LeetCode, as well as exploring my creative side through cooking.

//               This is just the beginning of my journey, and I’m excited to see where my passion for technology and determination will take me.


//             </p>

//             <div className="mt-12 flex justify-between text-center">
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                   Student
//                 </h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                   10+
//                 </h3>
//                 <p>Projects Completed</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                   20+
//                 </h3>
//                 <p>Certificates</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


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
