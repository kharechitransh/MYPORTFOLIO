import React from "react";

const projects = [
	{
		name: "Blogapp",
		description:
			"A modern blog application using Appwrite as a backend service. Built with HTML/CSS, React.js, JavaScript, and TailwindCSS. Features user authentication, post creation, and responsive design.",
		skills: ["HTML/CSS", "React.js", "JavaScript", "TailwindCSS", "Appwrite"],
	},
	{
		name: "InspectBuyDrive",
		description:
			"A second-hand car dealing and inspection platform for an Australian client. Built with HTML/CSS, React.js, JavaScript, and TailwindCSS. Enables users to buy, inspect, and manage car listings easily.",
		skills: ["HTML/CSS", "React.js", "JavaScript", "TailwindCSS"],
	},
	{
		name: "Rock Paper Scissor Game",
		description:
			"A classic Rock Paper Scissor game built using HTML/CSS and JavaScript. Features interactive gameplay and clean UI.",
		skills: ["HTML/CSS", "JavaScript"],
	},
	{
		name: "Deep Dive",
		description:
			"Deep Dive is an immersive, interactive web experience that visualizes real NASA Earth data. Users can explore ocean heat, coral bleaching, and atmospheric changes through a dynamic map, time slider, and narrative chapters. The project emphasizes accessibility, science communication, and engaging storytelling, making complex data approachable for all audiences. Potential extensions include real-time data, audio, and mixed-reality features for even greater impact.",
		skills: ["HTML/CSS", "JavaScript"],
	},
];

const Project = () => (
	<section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
		<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 animate-fade-in">My Projects</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl animate-fade-in delay-100">
			{projects.map((project, idx) => (
				<div key={project.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 animate-project-pop" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
					<h3 className="text-xl font-bold text-blue-700 mb-2">{project.name}</h3>
					<p className="text-gray-700 mb-2 text-base">{project.description}</p>
					<div className="flex flex-wrap gap-2">
						{project.skills.map((skill) => (
							<span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold shadow">
								{skill}
							</span>
						))}
					</div>
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
			@keyframes projectPop {
				0% { transform: scale(0.9); opacity: 0; }
				80% { transform: scale(1.05); opacity: 1; }
				100% { transform: scale(1); opacity: 1; }
			}
			.animate-project-pop {
				animation: projectPop 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
			}
		`}</style>
	</section>
);

export default Project;
