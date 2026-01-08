
import React from "react";

const skills = [
	{ name: "MongoDB", color: "bg-emerald-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
	{ name: "Express.js", color: "bg-gray-700", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
	{ name: "React.js", color: "bg-cyan-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	{ name: "Node.js", color: "bg-lime-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
	{ name: "JavaScript (ES6+)", color: "bg-yellow-300", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	{ name: "Mongoose", color: "bg-green-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
	{ name: "REST APIs", color: "bg-indigo-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
	{ name: "Authentication (JWT)", color: "bg-yellow-700", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
	{ name: "HTML5", color: "bg-orange-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
	{ name: "CSS3", color: "bg-blue-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
	{ name: "TailwindCSS", color: "bg-teal-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
	{ name: "Git & GitHub", color: "bg-gray-800", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
	{ name: "Postman", color: "bg-orange-600", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const Skill = () => {
	return (
		<section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
			<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 animate-fade-in">MERN Stack Developer Skills</h2>
			<p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-100">Focused on MongoDB, Express.js, React.js, and Node.js — building full-stack applications.</p>
					<div className="flex flex-wrap justify-center gap-8 max-w-4xl animate-fade-in delay-200">
						{skills.map((skill, idx) => (
							<div
								key={skill.name}
								className={`flex flex-col items-center justify-center w-32 h-32 rounded-xl shadow-lg ${skill.color} text-white text-xl font-semibold transition-transform duration-500 hover:scale-110 animate-skill-bounce`}
								style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
							>
								<img src={skill.icon} alt={skill.name + ' icon'} className="w-12 h-12 mb-2 drop-shadow-lg animate-icon-pop" />
								<span className="animate-fade-in delay-300">{skill.name}</span>
							</div>
						))}
					</div>
					<style>{`
						@keyframes fadeIn {
							0% { opacity: 0; transform: translateY(20px); }
							100% { opacity: 1; transform: translateY(0); }
						}
						.animate-fade-in {
							animation: fadeIn 1s ease forwards;
						}
						.delay-100 { animation-delay: 0.1s; }
						.delay-200 { animation-delay: 0.2s; }
						.delay-300 { animation-delay: 0.3s; }
						@keyframes skillBounce {
							0% { transform: scale(0.9); }
							50% { transform: scale(1.08); }
							100% { transform: scale(1); }
						}
						.animate-skill-bounce {
							animation: skillBounce 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
						}
						@keyframes iconPop {
							0% { transform: scale(0.7); opacity: 0; }
							80% { transform: scale(1.1); opacity: 1; }
							100% { transform: scale(1); opacity: 1; }
						}
						.animate-icon-pop {
							animation: iconPop 0.8s cubic-bezier(.68,-0.55,.27,1.55) forwards;
						}
					`}</style>
			<style>{`
				@keyframes fadeIn {
					0% { opacity: 0; transform: translateY(20px); }
					100% { opacity: 1; transform: translateY(0); }
				}
				.animate-fade-in {
					animation: fadeIn 1s ease forwards;
				}
				.delay-100 { animation-delay: 0.1s; }
				.delay-200 { animation-delay: 0.2s; }
				@keyframes skillBounce {
					0% { transform: scale(0.9); }
					50% { transform: scale(1.05); }
					100% { transform: scale(1); }
				}
				.animate-skill-bounce {
					animation: skillBounce 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
				}
			`}</style>
		</section>
	);
};

export default Skill;
