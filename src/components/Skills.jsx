const technicalSkills = [
  {
    name: "HTML",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Communication", level: 65 },
  { name: "Problem Solving", level: 75 },
  { name: "Teamwork", level: 85 },
];

export default function Skills() {
  return (
    <section className="min-h-screen px-6 md:px-10 py-16 flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div
            className="group rounded-2xl border border-cyan-500/15 bg-[#0b1526]/40 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-cyan-400/30 hover:shadow-[0_16px_50px_rgba(34,211,238,0.18)]"
          >
            <h3 className="text-xl font-semibold text-white mb-4 underline decoration-cyan-400 decoration-2 underline-offset-4">
              Technical Skills
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f1b2d] border border-cyan-500/50 shadow-[0_0_12px_rgba(34,211,238,0.35)] overflow-hidden"
                      aria-hidden
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    <span className="text-white">{skill.name}</span>
                    <span className="ml-auto text-white text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[#0f1b2d] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div
            className="group rounded-2xl border border-cyan-500/15 bg-[#0b1526]/40 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-cyan-400/30 hover:shadow-[0_16px_50px_rgba(34,211,238,0.18)]"
          >
            <h3 className="text-xl font-semibold text-white mb-6 underline decoration-cyan-400 decoration-2 underline-offset-4">
              Professional Skills
            </h3>

            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-3">
                  <div
                    className="relative h-24 w-24 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(#22d3ee ${skill.level}%, #0f1b2d ${skill.level}%)`,
                    }}
                  >
                    <div className="h-16 w-16 rounded-full bg-[#020b1a] flex items-center justify-center shadow-inner">
                      <span className="text-white font-semibold">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-white text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
