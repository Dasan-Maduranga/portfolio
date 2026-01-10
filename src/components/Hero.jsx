import profile from "../data/Profile";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
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

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {["GitHub", "LinkedIn", "Twitter"].map((icon, i) => (
              <div
                key={icon}
                className="w-10 h-10 flex items-center justify-center
                           rounded-full border border-cyan-400
                           text-cyan-400 hover:bg-cyan-400 hover:text-black
                           transition cursor-pointer opacity-0"
                style={{
                  animation: `fadeUp 0.8s ease-out forwards`,
                  animationDelay: `${1.8 + i * 0.2}s`,
                }}
              >
                {icon[0]}
              </div>
            ))}
          </div>

          <button
            onClick={scrollToAbout}
            className="mt-8 px-6 py-3 bg-cyan-400 text-black rounded-full
                       font-medium shadow-lg shadow-cyan-400/40
                       hover:scale-105 transition opacity-0 cursor-pointer"
            style={{ animation: "fadeUp 2.4s ease-out forwards" }}
          >
            More About Me
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div
            className="relative w-72 h-72 rounded-full border-4 border-cyan-400"
            style={{ animation: "glowPulse 4s infinite" }}
          >
            <img
              src={profileImg}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
