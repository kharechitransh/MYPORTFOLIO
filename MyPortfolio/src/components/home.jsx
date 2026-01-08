import React from "react";

const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const Home = () => {
	return (
		<section id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
				<div className="animate-pulse opacity-10 w-full h-full bg-blue-400 rounded-full blur-3xl"></div>
			</div>
			<div className="z-10 flex flex-col items-center text-center">
				<img
					src={reactLogo}
					alt="React Logo"
					className="w-24 h-24 mb-6 animate-spin-slow"
					style={{ animation: 'spin 8s linear infinite' }}
				/>
				<h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-2 animate-fade-in">
					Chitransh Khare
				</h1>
				<h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 animate-fade-in delay-100">
					MERN Stack Developer | Full Stack Developer
				</h2>
				<p className="text-lg md:text-xl text-gray-600 mb-2 animate-fade-in delay-200">
					Talk is cheap, show me the code.
				</p>
				<p className="text-lg md:text-xl text-gray-600 mb-6 animate-fade-in delay-300">
					I design and code beautifully simple things. I love what I do.
				</p>
				<a
					href="mailto:chitranshkhare012@gmail.com"
					className="text-blue-600 font-medium mb-6 animate-fade-in delay-400 hover:underline"
				>
					chitranshkhare012@gmail.com
				</a>
						<a
							href="file:///F:/resume/chitransh%20resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-2 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 animate-fade-in delay-500"
						>
							Download Resume
						</a>
			</div>
			<style>{`
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
				.animate-spin-slow {
					animation: spin 8s linear infinite;
				}
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
				.delay-500 { animation-delay: 0.5s; }
			`}</style>
		</section>
	);
};

export default Home;
