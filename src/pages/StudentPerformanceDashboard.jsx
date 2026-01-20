const heroImages = Object.values(
  import.meta.glob("../assets/StudentPerformanceDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentPerformanceDashboard() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const hasImages = heroImages.length > 0;
  const navigate = useNavigate();

  const handleBackToDashboards = () => {
    navigate("/dashboards");
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

  // Auto-play carousel
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
            onClick={handleBackToDashboards}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-400 hover:text-black transition shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
          >
            ← Back to Dashboards
          </button>
        </div>

        {/* Header */}
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Case Study</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Student Performance Analytics Dashboard
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Educational Performance Analysis & Insights
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            The Student Performance Analytics Dashboard provides an in-depth analysis of student academic performance by examining key factors such as gender, parental education level, lunch type, test preparation, and performance level. The dashboard is designed to help educators and analysts identify patterns that influence student outcomes and support data-driven educational decisions.
          </p>
        </header>

        {/* Data Processing Section */}
        <section className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h2 className="text-xl font-semibold text-cyan-300 mb-3">Data Processing & Tools Used</h2>
          <p className="text-gray-300 leading-relaxed">
            The dataset was cleaned, transformed, and analyzed using <span className="font-medium text-white">Pandas</span> and <span className="font-medium text-white">NumPy</span> to handle missing values, calculate averages, and perform numerical aggregations. The processed data was then visualized using <span className="font-medium text-white">Power BI</span>, where interactive dashboards, KPIs, and filters were implemented for effective analysis.
          </p>
        </section>

        {/* Hero Image Gallery Carousel */}
        {hasImages ? (
          <section className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div
              className={`relative h-96 md:h-[500px] transition-opacity duration-300 ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
            >
              <img
                src={heroImages[index]}
                alt={`Student Performance Dashboard Screenshot ${index + 1}`}
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
        ) : (
          <div className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-[#0f1b2d] to-[#0b1220] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] aspect-video flex items-center justify-center">
            <div className="text-center text-gray-300 px-6">
              <p className="text-cyan-300 font-semibold">No Student Performance Dashboard images found</p>
              <p className="text-sm text-gray-400 mt-2">Add images to src/assets/StudentPerformanceDashboardImages to display them here.</p>
            </div>
          </div>
        )}

        {/* Key Metrics & KPIs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400">Key Metrics & KPIs</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Total Students (1000)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Represents the total number of students included in the analysis.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Average Math Score (66.09)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Overall average performance in mathematics across all students.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Average Reading Score (69.17)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Indicates student reading proficiency level.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Average Writing Score (68.05)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Shows writing performance across all students.
              </p>
            </div>
          </div>
        </section>

        {/* Analytical Insights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Analytical Insights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li>
              <span className="font-medium text-white">Education Level Impact</span> – Demonstrates how performance levels (High, Medium, Low) affect average student scores
            </li>
            <li>
              <span className="font-medium text-white">Average Score by Gender</span> – Compares academic performance between male and female students
            </li>
            <li>
              <span className="font-medium text-white">Test Preparation Course Impact</span> – Highlights the performance difference between students who completed test preparation courses and those who did not
            </li>
            <li>
              <span className="font-medium text-white">Lunch Type vs Average Score</span> – Analyzes the relationship between lunch type (standard vs free/reduced) and student performance
            </li>
            <li>
              <span className="font-medium text-white">Parental Education Level Distribution</span> – Shows how parental education levels correlate with students' average scores
            </li>
          </ul>
        </section>

        {/* Interactive Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Interactive Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li>Dynamic filters for gender, lunch type, test preparation course, and performance level</li>
            <li>Reset Filter Button to restore the default dashboard view</li>
            <li>Fully interactive visuals for deeper exploration of student performance trends</li>
          </ul>
        </section>

        {/* Project Outcome */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Project Outcome</h2>
          <p className="text-gray-300 leading-relaxed">
            This project demonstrates the ability to combine Python-based data analysis (NumPy & Pandas) with Power BI visualization to convert raw educational data into meaningful insights. The dashboard supports academic analysis, performance evaluation, and strategic planning in the education domain.
          </p>
        </section>
      </div>
    </main>
  );
}
