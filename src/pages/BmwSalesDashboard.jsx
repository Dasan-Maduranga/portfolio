const heroImages = Object.values(
  import.meta.glob("../assets/BmwSalesDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BmwSalesDashboard() {
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
            BMW Sales Data Dashboard
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              2010–2024
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            This interactive BMW Sales Data Dashboard provides a comprehensive analysis of BMW vehicle sales performance from 2010 to 2024. The dashboard is designed to support data-driven decision-making by offering clear insights into sales trends, model performance, transmission preferences, fuel types, and customer choices.
          </p>
        </header>

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
                alt={`BMW Dashboard Screenshot ${index + 1}`}
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
              <p className="text-cyan-300 font-semibold">No BMW Dashboard images found</p>
              <p className="text-sm text-gray-400 mt-2">Add images to src/assets/BmwSalesDashboardImages to display them here.</p>
            </div>
          </div>
        )}

        {/* Key Features & Insights */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400">Key Features & Insights</h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Overall Sales Performance</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Displays total sales volume across the selected year range, giving a high-level view of BMW's market performance over time.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Transmission-Based Analysis</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The dashboard allows users to switch between Overview, Manual Transmission, and Automatic Transmission views. This enables direct comparison of sales trends and performance differences based on transmission type.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Sales Volume by Model</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                An area chart highlights how different BMW models (such as 3 Series, 5 Series, X Series, and M Series) contribute to total sales volume, making it easy to identify top-performing and declining models.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Price, Engine Size, and Sales Relationship</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A scatter plot visualizes the relationship between price (USD), engine size (L), and sales volume, helping users understand how pricing and engine capacity influence sales across different models and fuel types.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Model Distribution by Color</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A pie chart shows the count of BMW models by color, providing insight into customer color preferences.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Fuel Type Distribution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Another pie chart presents the distribution of models by fuel type, highlighting market demand for different fuel options.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Interactive Year Range Filtering</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A dynamic year slicer allows users to analyze trends over specific periods, improving flexibility and deeper exploration of historical data.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Tools & Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li><span className="font-medium text-white">Power BI</span> – Data modeling, DAX measures, and interactive visualizations</li>
            <li><span className="font-medium text-white">Pandas & NumPy</span> – Data cleaning and preprocessing</li>
            <li><span className="font-medium text-white">Jupyter Notebook</span> – Data analysis and preparation</li>
            <li><span className="font-medium text-white">Data Visualization & Business Analytics</span> – Insight-driven dashboard design</li>
          </ul>
        </section>

        {/* Project Outcome */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Project Outcome</h2>
          <p className="text-gray-300 leading-relaxed">
            This dashboard transforms raw BMW sales data into clear, actionable insights, helping stakeholders understand market trends, customer preferences, and product performance. It demonstrates strong skills in data analysis, visual storytelling, and dashboard design, making it suitable for business intelligence, analytics, and decision-support use cases.
          </p>
        </section>
      </div>
    </main>
  );
}
