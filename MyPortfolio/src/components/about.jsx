

import React from "react";

const linkedinUrl = "https://www.linkedin.com/in/chitransh-khare-068533321/";
const linkedinIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";

const About = () => (
	<section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
		<div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center animate-fade-in">
					<div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 md:w-1/3">
						<h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mt-2 animate-fade-in">Chitransh Khare</h2>
						<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 font-medium hover:underline animate-icon-pop">
							<img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
							LinkedIn
						</a>
					</div>
			<div className="md:w-2/3">
				<p className="text-lg text-gray-700 mb-4 animate-fade-in delay-100">
					<span className="font-semibold text-blue-700">Hey! I am Chitransh...</span> Passionate and results-driven developer with hands-on experience in Python programming, data structures and algorithms (DSA), and modern web development. I specialize in crafting efficient backend logic using Python and Node.js and building responsive, user-friendly web interfaces with HTML, CSS, JavaScript, and React.js.
				</p>
				<p className="text-lg text-gray-700 mb-4 animate-fade-in delay-200">
					With a strong foundation in problem-solving and clean code principles, I enjoy turning complex challenges into scalable, maintainable solutions. Whether it’s optimizing algorithms or developing dynamic front-end applications, I focus on delivering high-quality work that meets user needs and business goals.
				</p>
				<p className="text-lg text-gray-700 mb-4 animate-fade-in delay-300">
					Currently expanding my expertise in AI and machine learning, while sharpening my skills in front-end and back-end development. Open to collaborative projects, internships, and opportunities that challenge me to grow as a developer.
				</p>
				<div className="mb-2 animate-fade-in delay-400">
					<span className="text-xl font-semibold text-blue-700">🔹 Core Skills:</span>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
						<div className="flex items-center gap-2">
							<span className="bg-yellow-300 rounded-full px-2 py-1 text-xs font-bold text-gray-800">JavaScript (ES6+)</span>
							<span className="bg-orange-400 rounded-full px-2 py-1 text-xs font-bold text-white">HTML5</span>
							<span className="bg-blue-400 rounded-full px-2 py-1 text-xs font-bold text-white">CSS3</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="bg-cyan-400 rounded-full px-2 py-1 text-xs font-bold text-white">React.js</span>
							<span className="bg-purple-400 rounded-full px-2 py-1 text-xs font-bold text-white">Redux Toolkit</span>
							<span className="bg-teal-400 rounded-full px-2 py-1 text-xs font-bold text-white">Tailwind CSS</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="bg-purple-200 rounded-full px-2 py-1 text-xs font-bold text-gray-800">State Management</span>
							<span className="bg-green-200 rounded-full px-2 py-1 text-xs font-bold text-gray-800">API Integration</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="bg-red-400 rounded-full px-2 py-1 text-xs font-bold text-white">Git</span>
							<span className="bg-gray-800 rounded-full px-2 py-1 text-xs font-bold text-white">GitHub</span>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float" />
			<div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-30 animate-float2" />
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
			.delay-400 { animation-delay: 0.4s; }
			@keyframes iconPop {
				0% { transform: scale(0.7); opacity: 0; }
				80% { transform: scale(1.1); opacity: 1; }
				100% { transform: scale(1); opacity: 1; }
			}
			.animate-icon-pop {
				animation: iconPop 0.8s cubic-bezier(.68,-0.55,.27,1.55) forwards;
			}
			@keyframes float {
				0%, 100% { transform: translateY(0); }
				50% { transform: translateY(-20px); }
			}
			.animate-float {
				animation: float 6s ease-in-out infinite;
			}
			@keyframes float2 {
				0%, 100% { transform: translateY(0); }
				50% { transform: translateY(15px); }
			}
			.animate-float2 {
				animation: float2 7s ease-in-out infinite;
			}
		`}</style>
	</section>
);

export default About;
