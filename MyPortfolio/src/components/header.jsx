import React from "react";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Education", href: "#education" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];


const Header = () => {
	return (
		<header className="bg-gradient-to-br from-blue-50 to-blue-200 shadow-md fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
				<div className="flex items-center">
					<span className="text-2xl font-bold text-blue-700 tracking-wide">Chitransh Khare</span>
				</div>
				<nav>
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
			</div>
		</header>
	);
};

export default Header;
