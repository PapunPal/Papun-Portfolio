import React from "react";
import ColorPickre from "../assets/color-picker.png";
import aadhar from "../assets/aadhar.webp";
import currency from "../assets/currency-converter.webp";
import health from "../assets/health.avif";
import food from "../assets/food.png";
import Calculator from "../assets/calculator.png";
import RockPaperScissors from "../assets/RockPaperScissors.png";
import TicTacToe from "../assets/TicTacToe.png";
import Valentine from "../assets/Valentine.png";
import Proposed from "../assets/Proposed.png";

const projects = [
  {
    id: 1,
    name: "Color Picker Chrome Extension",
    technologies: "HTML5, CSS, JavaScript",
    image: ColorPickre,
    github: "https://chromewebstore.google.com/detail/color-picker-tool/dgcogajmelmpejllojibmkfgiimadekg?hl=en",
    try: "https://chromewebstore.google.com/detail/color-picker-tool/dgcogajmelmpejllojibmkfgiimadekg?hl=en"
  },
  {
    id: 2,
    name: "Aadhaar Card Detection System",
    technologies: "EJS, Node.js, Express.js, JavaScript",
    image: aadhar,
    github: "https://github.com/Papun-pal/Adhar_scan",
    try: "https://example.com/try/aadhar"
  },
  {
    id: 3,
    name: "Currency Converter",
    technologies: "HTML, CSS, JavaScript",
    image: currency,
    github: "https://github.com/Papun-pal/CURRENCY-CONVATER",
    try: "https://papun-pal.github.io/CURRENCY-CONVATER/"
  },
  {
    id: 4,
    name: "Health News Website",
    technologies: "React.js",
    image: health,
    github: "https://github.com/Papun-pal/health-news-app",
    try: "https://example.com/try/health-news"
  },
  {
    id: 5,
    name: "Food Delivery Website",
    technologies: "HTML, CSS, JavaScript",
    image: food ,
    github: "https://github.com/Papun-pal/Food_Delivery_Website",
    try: "https://papun-pal.github.io/food-delivery-app/"
  },
  {
    id: 6,
    name: "Calculator",
    technologies: "HTML, CSS, JavaScript",
    image: Calculator ,
    github: "https://github.com/Papun-pal/Calculator",
    try: "https://calculatorpapun.netlify.app/"
  },
  {
    id: 7,
    name: "Rock Paper Scissors Game",
    technologies: "HTML, CSS, JavaScript",
    image: RockPaperScissors ,
    github: "https://github.com/Papun-pal/ROCK-PAPER-SCISSORS",
    try: "https://papun-pal.github.io/ROCK-PAPER-SCISSORS/"
  },
  {
    id: 8,
    name: "Tic Tac Toe Game",
    technologies: "HTML, CSS, JavaScript",
    image: TicTacToe ,
    github: "https://github.com/Papun-pal/tic-toc-toe",
    try: "https://papun-pal.github.io/tic-toc-toe/"
  },
  {
    id: 9,
    name: "Valentine's Day",
    technologies: "HTML, CSS, JavaScript",
    image: Valentine ,
    github: "https://github.com/Papun-pal/valentine_day",
    try: "https://its-for-you-koyel.netlify.app/"
  },
  {
    id: 10,
    name: "Propose World",
    technologies: "HTML, CSS, JavaScript",
    image: Proposed ,
    github: "https://github.com/Papun-pal/ProposeWorld",
    try: "https://starlit-douhua-e0a2b1.netlify.app/"
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
                <a href={project.github} className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
                rel="noopener noreferrer">GitHub</a>
                <a href={project.try} className="inline-block bg-gradient-to-r 
                from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full 
                transform transition-transform duration-300 hover:scale-105">Try Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
