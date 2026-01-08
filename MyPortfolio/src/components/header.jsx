import React, { useState } from "react";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];


const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-gradient-to-br from-blue-50 to-blue-200 shadow-md fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				<div className="flex items-center">
					<span className="text-2xl font-bold text-blue-700 tracking-wide">Chitransh Khare</span>
				</div>

				<nav className="hidden md:block">
					<ul className="flex space-x-6">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="md:hidden">
					<button
						onClick={() => setOpen(!open)}
						aria-label="Toggle menu"
						className="p-2 rounded-md text-blue-700 border border-blue-200 bg-white"
					>
						{open ? (
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-700"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						) : (
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-700"><path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						)}
					</button>
				</div>
			</div>

			{open && (
				<div className="md:hidden bg-white border-t border-blue-100">
					<ul className="flex flex-col gap-2 px-4 py-3">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									onClick={() => setOpen(false)}
									className="block text-gray-700 hover:text-blue-700 font-medium py-2"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
