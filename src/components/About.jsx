import profileImg from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#020b1a] flex items-center px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT – IMAGE WITH GLOW */}
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
                alt="About profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-2">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <h3 className="text-xl text-white mb-4">
            Full Stack Developer!
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am an Information and Communication Technology (ICT) undergraduate
            at Uva Wellassa University with a strong interest in Business
            Intelligence and Full-Stack Development.
            <br /><br />
            I have gained hands-on experience through academic and personal
            projects using technologies such as React, MERN stack, SQL, and data
            visualization tools. I enjoy collaborating in teams, solving complex
            problems, and building user-friendly, modern applications.
          </p>
        </div>

      </div>
    </section>
  );
}
