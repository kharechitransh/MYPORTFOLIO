
import React, { useState } from "react";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		// You can add email sending logic here
	};

		return (
			<section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 animate-fade-in">Contact Me</h2>
				<p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-100">Let's connect! Fill out the form or use the info below.</p>
				<div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl animate-fade-in delay-200">
					<form onSubmit={handleSubmit} className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 animate-form-pop">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={form.name}
							onChange={handleChange}
							required
							className="border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={form.email}
							onChange={handleChange}
							required
							className="border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
						/>
						<textarea
							name="message"
							placeholder="Your Message"
							value={form.message}
							onChange={handleChange}
							required
							rows={4}
							className="border border-blue-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
						/>
						<button
							type="submit"
							className="bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 font-semibold"
						>
							Send Message
						</button>
						{submitted && (
							<span className="text-green-600 mt-2 animate-fade-in">Thank you! Your message has been sent.</span>
						)}
					</form>
					<div className="flex-1 flex flex-col justify-center gap-6 animate-fade-in delay-300">
						<div className="flex items-center gap-3">
							<span className="bg-blue-700 text-white rounded-full p-3 animate-icon-pop">
								<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
							</span>
							<a href="mailto:chitranshkhare012@gmail.com" className="text-blue-700 font-medium hover:underline">chitranshkhare012@gmail.com</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="bg-blue-700 text-white rounded-full p-3 animate-icon-pop">
								<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
							</span>
							<span className="text-blue-700 font-medium">+91 7440758956</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="bg-blue-700 text-white rounded-full p-3 animate-icon-pop">
								<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
							</span>
							<span className="text-blue-700 font-medium">Bhopal (M.P.) 462001, India</span>
						</div>
						<div className="flex items-center gap-3 animate-icon-pop">
							<span className="bg-blue-700 text-white rounded-full p-3">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
							</span>
							<a href="https://www.linkedin.com/in/chitransh-khare-068533321/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium hover:underline">LinkedIn Profile</a>
						</div>
					</div>
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
					@keyframes formPop {
						0% { transform: scale(0.8); opacity: 0; }
						80% { transform: scale(1.05); opacity: 1; }
						100% { transform: scale(1); opacity: 1; }
					}
					.animate-form-pop {
						animation: formPop 1s cubic-bezier(.68,-0.55,.27,1.55) forwards;
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
			</section>
		);
};

export default Contact;
