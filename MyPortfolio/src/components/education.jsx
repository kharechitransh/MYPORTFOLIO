
import React from "react";

const educationData = [
	{
		title: "Class 10",
		school: "Maharishi Vidya Mandir",
		location: "Chhatarpur, MP 471001",
		year: "2021-22",
	},
	{
		title: "Class 12",
		school: "Care English School",
		location: "Chhatarpur, MP 471001",
		year: "2023-24",
	},
	{
		title: "B.Tech in CSE (AI/ML)",
		school: "Oriental Institute of Science and Technology",
		location: "Bhopal, MP 462002",
		year: "2024-28",
	},
];

const Education = () => (
	<section id="education" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
		<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 animate-fade-in">Education</h2>
		<div className="flex flex-col gap-8 w-full max-w-3xl animate-fade-in delay-100">
			{educationData.map((edu, idx) => (
				<div key={edu.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 hover:scale-105 transition-transform duration-300 animate-edu-pop" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
					<div className="flex flex-col items-center md:items-start flex-1">
						<h3 className="text-xl font-bold text-blue-700 mb-1">{edu.title}</h3>
						<span className="text-gray-700 font-medium mb-1">{edu.school}</span>
						<span className="text-gray-500 mb-1">{edu.location}</span>
						<span className="text-blue-600 font-semibold">{edu.year}</span>
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
			@keyframes eduPop {
				0% { transform: scale(0.9); opacity: 0; }
				80% { transform: scale(1.05); opacity: 1; }
				100% { transform: scale(1); opacity: 1; }
			}
			.animate-edu-pop {
				animation: eduPop 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
			}
		`}</style>
	</section>
);

export default Education;
