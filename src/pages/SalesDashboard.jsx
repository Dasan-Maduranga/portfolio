const heroImages = Object.values(
  import.meta.glob("../assets/SalesDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const objectives = [
  "Create a real-time sales tracking and monitoring system",
  "Visualize sales performance across different time periods",
  "Analyze sales team productivity and individual performance",
  "Track revenue trends and identify growth opportunities",
  "Enable quick access to critical sales metrics and KPIs",
];

const features = [
  "Real-time sales performance dashboards",
  "Revenue tracking and forecasting",
  "Sales team performance analytics",
  "Geographic sales distribution maps",
  "Product category performance tracking",
  "Interactive charts and graphs",
];

const technologies = [
  "Power BI (Dashboard Development)",
  "Data Visualization Techniques",
  "DAX (Data Analysis Expressions)",
  "Data Modeling & Transformation",
  "Business Intelligence Best Practices",
  "Excel Integration",
];

const outcomes = [
  "Enhanced visibility into sales operations and performance",
  "Improved sales forecasting accuracy",
  "Better resource allocation and territory planning",
];

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SalesDashboard() {
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Sales Dashboard
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Real-Time Sales Analytics & Performance Tracking
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            A powerful sales analytics dashboard built to provide real-time insights into sales performance, revenue trends, and team productivity. This project leverages advanced data visualization techniques to transform complex sales data into clear, actionable insights.
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            The dashboard empowers sales managers and executives to monitor KPIs, identify top performers, track regional performance, and make informed decisions to drive revenue growth and optimize sales strategies.
          </p>
        </header>

        {/* Hero Image Gallery Carousel */}
        {hasImages && (
          <section className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div
              className={`relative h-96 md:h-[500px] transition-opacity duration-300 ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
            >
              <img
                src={heroImages[index]}
                alt={`Sales Dashboard Screenshot ${index + 1}`}
                className="w-full h-full object-contain bg-[#0a1628]"
              />
            </div>
            {heroImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
                  aria-label="Next image"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === index
                          ? "bg-cyan-400 w-8"
                          : "bg-white/50 w-2 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        )}

        {/* Project Objectives */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Project Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Expected Outcomes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Expected Outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {outcomes.map((out, i) => (
              <li key={i}>{out}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
