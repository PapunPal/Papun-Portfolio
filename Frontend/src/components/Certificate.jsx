import React from "react";
import CertificateImage from "../assets/java-fullStack.jpg";
import Web from "../assets/Web.jpg";
import cyber from "../assets/cyber.png";
import web from "../assets/web.png";
import personal from "../assets/personal.png";
import meta from "../assets/meta.png";
import language from "../assets/language.png";
import novel from "../assets/novel.png";


const certificates = [
  {
    title: "Java Full Stack",
    provider: "Wipro",
    description: "Completed an intensive Full Stack Web Development course covering HTML, CSS, JavaScript, Node.js, and React.js.",
    image: CertificateImage,
    link: "https://cert.diceid.com/cid/9kW9SYvR3f?verify=true",
  },
  {
    title: "Full Stack Web Development",
    provider: "Pinnacle labs",
    description: "Mastered Java programming concepts including OOP, data structures, and algorithms.",
    image: Web,
    link: "https://pinnaclelabs.tech/certificate-verification/?rid=UEwvMjAyNC9PQ1RQMS8wODdQYXB1biBQYWw=",
  },
  {
    title: "Cybersecurity and Its Ten Domains",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image: cyber,
    link: "https://www.coursera.org/account/accomplishments/verify/EMW5EXKAEVWW",
  },
  {
    title: "Write Your First Novel",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image:novel,
    link: "https://www.coursera.org/account/accomplishments/verify/JJF5YQ7WE9VJ",
  },
  {
    title: "Web Design for Everybody Capstone",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image: web,
    link: "https://www.coursera.org/account/accomplishments/verify/JKL5WUCXWM8L",
  },
  {
    title: "Introduction to Personal Branding",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image:personal,
    link: "https://www.coursera.org/account/accomplishments/verify/KU9K47J5G6MV",
  },
  {
    title: "Introduction to Front-End Development",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image: meta,
    link: "https://www.coursera.org/account/accomplishments/verify/Q3WKBEQYWAH7",
  },
  {
    title: "The Language of Design: Form and Meaning",
    provider: "Coursera",
    description: "Achieved mastery in React.js and Redux for scalable web applications.",
    image:language,
    link: "https://www.coursera.org/account/accomplishments/verify/VLU8FMFE8FWK",
  },
];

const Certificates = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20" id="certificates">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{certificate.title}</h3>
              <p className="text-gray-400 mb-2">{certificate.provider}</p>
              <p className="text-gray-400 mb-4">{certificate.description}</p>
              <div className="flex justify-center">
                <a
                  href={certificate.link}
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
