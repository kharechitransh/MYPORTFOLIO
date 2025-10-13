
import React from "react";

const skills = [
	{ name: "HTML5", color: "bg-orange-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
	{ name: "CSS3", color: "bg-blue-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
	{ name: "JavaScript", color: "bg-yellow-300", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	{ name: "React.js", color: "bg-cyan-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	{ name: "TailwindCSS", color: "bg-teal-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
	{ name: "Python", color: "bg-green-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
	{ name: "Netlify", color: "bg-indigo-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
	{ name: "Git", color: "bg-red-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
	{ name: "Node.js", color: "bg-lime-400", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const Skill = () => {
	return (
		<section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
			<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 animate-fade-in">My Professional Skills</h2>
			<p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-100">Empowering ideas with modern technologies and clean code.</p>
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
