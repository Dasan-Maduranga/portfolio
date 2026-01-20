import profile from "../data/Profile";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  const techStack = [
    { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
    { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
    { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { label: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { label: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { label: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { label: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { label: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  ];

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-[#020b1a] pt-28 px-10 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          className="opacity-0"
          style={{
            animation: "fadeRight 1s ease-out forwards",
          }}
        >
          <p className="text-gray-400 mb-2">{profile.intro}</p>

          <h1
            className="text-5xl font-bold mb-3"
            style={{ animation: "fadeUp 1.2s ease-out forwards" }}
          >
            {profile.name.split(" ")[0]} <span className="text-cyan-400">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <h2
            className="text-xl mb-4"
            style={{ animation: "fadeUp 1.4s ease-out forwards" }}
          >
            And I'm a{" "}
            <span className="text-cyan-400">{profile.role}</span>
          </h2>

          <p
            className="text-gray-400 max-w-md"
            style={{ animation: "fadeUp 1.6s ease-out forwards" }}
          >
            {profile.description}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {techStack.map((tech, i) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-2 opacity-0"
                style={{
                  animation: `fadeUp 0.8s ease-out forwards`,
                  animationDelay: `${1.8 + i * 0.08}s`,
                }}
              >
                <div className="relative w-14 h-14 rounded-full border border-cyan-400/70 bg-gradient-to-br from-[#0b1a2b] to-[#06101f] shadow-[0_0_20px_rgba(34,211,238,0.35)] flex items-center justify-center">
                  <div className="absolute inset-[-6px] rounded-full bg-cyan-400/10 blur-xl" />
                  <img src={tech.icon} alt={tech.label} className="w-8 h-8 relative" />
                </div>
                <span className="text-xs text-gray-300">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full flex items-center justify-center">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-full 
                            bg-cyan-400 blur-2xl opacity-30"></div>

            {/* Border ring */}
            <div className="relative w-72 h-72 rounded-full 
                            border-4 border-cyan-400 
                            shadow-[0_0_80px_#22d3ee]">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
