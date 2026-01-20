import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const gemoraImages = Object.values(
  import.meta.glob("../assets/GemoraImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function Gemora() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const hasImages = gemoraImages.length > 0;

  const next = () => setIndex((i) => (i + 1) % gemoraImages.length);
  const prev = () => setIndex((i) => (i - 1 + gemoraImages.length) % gemoraImages.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!hasImages || gemoraImages.length < 2) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [hasImages]);

  return (
    <main className="min-h-screen bg-[#020b1a] text-white pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
        <div className="flex justify-end">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400 px-3 sm:px-4 py-2 text-sm sm:text-base text-cyan-300 hover:bg-cyan-400 hover:text-black transition shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
          >
            ← Back to Projects
          </button>
        </div>

        <header className="space-y-3 md:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-300">Case Study</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            GEMORA — Online Gem & Equipment Marketplace
            <span className="block text-cyan-400 text-lg sm:text-xl md:text-2xl mt-1">
              Full-Stack MERN Application
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            GEMORA is a full-stack web application developed to digitalize the Sri Lankan gem and gemstone equipment marketplace. The platform allows users to browse, filter, and purchase gemstones and gem-cutting instruments through a modern and user-friendly online system.
          </p>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            The project aims to bridge the gap between gem sellers, equipment suppliers, and buyers by providing a centralized, reliable, and efficient digital marketplace.
          </p>
        </header>

        {hasImages ? (
          <section className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-[#0a1628]">
              <img
                src={gemoraImages[index]}
                alt={`GEMORA screenshot ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {gemoraImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition shadow-lg text-sm sm:text-base"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition shadow-lg text-sm sm:text-base"
                  aria-label="Next image"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {gemoraImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index ? "bg-cyan-400 w-8" : "bg-white/60 w-2 hover:bg-white"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        ) : (
          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] aspect-video flex items-center justify-center">
            <div className="text-center text-gray-300 px-4 sm:px-6">
              <p className="text-cyan-300 font-semibold text-sm sm:text-base">No GEMORA images found</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Add images to src/assets/GemoraImages to display them here.</p>
            </div>
          </div>
        )}

        <section className="space-y-3 md:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed">
            <li>Browse gemstones and gem-cutting instruments in categorized listings</li>
            <li>Filter products by type and price range</li>
            <li>Dedicated product details page with images, descriptions, and key features</li>
            <li>Dynamic "More From Store" section showing related products</li>
            <li>Order placement with Cash on Delivery (COD) support</li>
            <li>Responsive and clean user interface for both desktop and mobile devices</li>
          </ul>
        </section>

        <section className="space-y-4 md:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">Technologies Used</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl border border-cyan-400/20 bg-[#0c1830] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>React Router DOM</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-[#0c1830] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-[#0c1830] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Database</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs sm:text-sm">
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 md:mb-4">System Architecture</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed">
            <li>RESTful API-based architecture</li>
            <li>Separate frontend and backend repositories</li>
            <li>MVC (Model–View–Controller) pattern</li>
            <li>Secure environment configuration using .env files</li>
          </ul>
        </section>

        <section className="space-y-2 md:space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">Project Objective</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            The primary objective of the GEMORA project is to modernize the Sri Lankan gem industry by introducing a digital platform that simplifies product discovery, enhances accessibility, and improves the buying experience for customers while supporting local gem businesses.
          </p>
        </section>
      </div>
    </main>
  );
}
