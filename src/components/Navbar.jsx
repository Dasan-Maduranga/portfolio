const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Skills", id: "skills" },
  { name: "Project", id: "projects" },
  { name: "Contact", id: "contact" }
];

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020b1a]/80 backdrop-blur border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Portfolio<span className="text-cyan-400">.</span>
        </h1>

        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
