

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
					I am a MERN Stack Developer and Computer Science student with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have a strong foundation in Data Structures &amp; Algorithms using Python, which helps me write optimized and scalable code. I enjoy working on real-world projects, learning new technologies, and improving my problem-solving skills through consistent practice.
				</p>
				<div className="text-lg text-gray-700 mb-4 animate-fade-in delay-200">
					<span className="font-semibold text-blue-700">💻 Skills &amp; Technologies:</span>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li><strong>Frontend:</strong> React.js, JavaScript (ES6), HTML, CSS, Tailwind CSS</li>
						<li><strong>Backend:</strong> Node.js, Express.js</li>
						<li><strong>Database:</strong> MongoDB, Mongoose</li>
						<li><strong>Programming:</strong> JavaScript, Python (DSA)</li>
						<li><strong>Tools:</strong> Git, GitHub, Postman, REST APIs</li>
						<li><strong>Concepts:</strong> CRUD Operations, Authentication (JWT), API Integration</li>
					</ul>
				</div>
				<div className="text-lg text-gray-700 mb-4 animate-fade-in delay-300">
					<span className="font-semibold text-blue-700">🚀 What I’m Looking For:</span>
					<ul className="list-disc list-inside mt-2 space-y-1">
						<li>MERN Stack / Full Stack Internship Opportunities</li>
						<li>Remote or On-site roles</li>
						<li>A learning-focused environment to grow as a developer</li>
					</ul>
				</div>
				<p className="text-lg text-gray-700 mb-4 animate-fade-in delay-400">
					I believe in learning by building, consistency, and continuous improvement. Open to opportunities and collaborations.
				</p>
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
