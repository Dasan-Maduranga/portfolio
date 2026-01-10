const heroImages = Object.values(
  import.meta.glob("../assets/SkillNetImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const objectives = [
  "Create a centralized skill-sharing and learning platform",
  "Enable users to host or join discussions and Q&A sessions",
  "Provide user profiles displaying skills, interests, and experience",
  "Support rating and feedback for quality assurance",
  "Build categorized forums for structured knowledge sharing",
];

const features = [
  "User registration and profile creation",
  "Posting and requesting skills or learning topics",
  "Discussion forums and Q&A boards",
  "Real-time chat and collaboration",
  "Group creation for knowledge discussions",
  "Admin management of users and content",
];

const technologies = [
  "HTML, CSS, JavaScript, React (Frontend)",
  "Firebase & Node.js (Backend)",
  "Firestore & Firebase Realtime Database",
  "Firebase Authentication",
  "Jitsi Meet API (Video Sessions)",
  "Tailwind CSS (Optional UI Styling)",
];

const outcomes = [
  "A user-friendly collaborative learning environment",
  "Structured and reliable knowledge exchange",
  "Community building around shared skills and interests",
];

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SkillnetProject() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const hasImages = heroImages.length > 0;
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const next = () => setIndex((i) => (i + 1) % heroImages.length);
  const prev = () => setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    if (!hasImages) return;
    setIsFading(true);
    const t = setTimeout(() => setIsFading(false), 30);
    return () => clearTimeout(t);
  }, [index, hasImages]);

  // Auto-play carousel for a modern, smooth feel
  useEffect(() => {
    if (!hasImages || heroImages.length < 2) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [hasImages]);

  return (
    <main className="min-h-screen bg-[#020b1a] text-white pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-400 hover:text-black transition shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
          >
            ← Back to Projects
          </button>
        </div>
        {/* Header */}
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Case Study</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            SkillNet
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Collaborative Skill-Sharing & Knowledge Discussion Platform
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            SkillNet is a web-based collaborative platform designed to enable students, educators, and hobbyists to share skills, exchange knowledge, and participate in structured discussions. The system provides a centralized environment where users can both teach what they know and learn from others through real-time interaction.
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            The platform addresses the lack of organized, trustworthy peer-learning environments by combining discussion forums, real-time chat, video-based sessions, and user profiles in a single, user-friendly system.
          </p>
        </header>

        {/* Hero media carousel */}
        {hasImages ? (
          <div className="relative w-full rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] aspect-video">
            <img
              key={index}
              src={heroImages[index]}
              alt={`SkillNet hero ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-800 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isFading ? "opacity-0 scale-105 blur-[2px]" : "opacity-100 scale-100 blur-0"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

            {heroImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 border border-cyan-400/60 text-white hover:bg-black/70 transition"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 border border-cyan-400/60 text-white hover:bg-black/70 transition"
                  aria-label="Next image"
                >
                  →
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === index ? "bg-cyan-400" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="relative w-full rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] aspect-video">
            <div className="flex items-center justify-center text-center text-gray-300 px-6">
              <div className="space-y-2">
                <p className="text-cyan-300 font-semibold">No SkillNet images found</p>
                <p className="text-sm text-gray-400">Add images to src/assets/SkillNetImages to display them here.</p>
              </div>
            </div>
          </div>
        )}

        {/* Objectives & Features */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-300">Project Objectives</h2>
            <ul className="space-y-2 text-gray-300">
              {objectives.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-300">Core Features</h2>
            <ul className="space-y-2 text-gray-300">
              {features.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech & Methodology */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-300">Technologies Used</h2>
            <ul className="space-y-2 text-gray-300">
              {technologies.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-cyan-300">Development Methodology</h2>
            <p className="text-gray-300 leading-relaxed">
              Due to limited time and resources, the system was developed using the Agile development methodology, allowing incremental delivery, continuous feedback, and flexibility in feature development.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">Expected Outcome</h2>
          <ul className="space-y-2 text-gray-300">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}