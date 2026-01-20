const heroImages = Object.values(
  import.meta.glob("../assets/SalesOverviewDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SalesOverviewDashboard() {
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
            Sales Overview Dashboard
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Product-Level Sales Performance Analysis
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            This Sales Overview Dashboard provides a comprehensive analysis of product-level sales performance, enabling clear visibility into total revenue, top-performing products, and overall sales distribution.
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            The dataset was preprocessed and analyzed using NumPy to handle numerical calculations, data aggregation, and revenue-based transformations. The cleaned and structured data was then visualized using Power BI, where interactive dashboards, KPIs, and charts were designed to support data-driven decision-making.
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
                alt={`Sales Overview Dashboard Screenshot ${index + 1}`}
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
              <p className="text-cyan-300 font-semibold">No Sales Overview Dashboard images found</p>
              <p className="text-sm text-gray-400 mt-2">Add images to src/assets/SalesOverviewDashboardImages to display them here.</p>
            </div>
          </div>
        )}

        {/* Key Metrics & KPIs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-400">Key Metrics & KPIs</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Total Revenue (105M)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Overall revenue generated across all products, giving a quick snapshot of business performance.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Average Revenue per Product (255.92K)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Mean revenue contribution per product, helping assess product-level efficiency.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Top Product Revenue (6M)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Highest revenue generated by a single product, making it easier to recognize key revenue drivers.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0a1628] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <h3 className="text-white font-semibold mb-2">Total Products (412)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Total number of unique products analyzed in the dataset.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Insights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Visual Insights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li>
              <span className="font-medium text-white">Total Revenue by Product ID</span> – Identifies top and low-performing products using a ranked bar chart
            </li>
            <li>
              <span className="font-medium text-white">Product Revenue Distribution</span> – Shows how revenue is spread across different products
            </li>
            <li>
              <span className="font-medium text-white">Revenue Distribution by Product Count</span> – Visualizes revenue concentration and product performance spread
            </li>
            <li>
              <span className="font-medium text-white">Salesperson Contribution Analysis</span> – Highlights revenue contribution by individual salespersons
            </li>
          </ul>
        </section>

        {/* Interactive Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Interactive Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li>
              <span className="font-medium text-white">Reset Filters</span> – Quickly restore the dashboard to its default view
            </li>
            <li>
              <span className="font-medium text-white">Export to PDF</span> – Allows sharing reports with stakeholders for presentations and reporting
            </li>
          </ul>
        </section>

        {/* Tools & Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Tools & Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            <li><span className="font-medium text-white">Power BI</span> – Data modeling, DAX calculations, and interactive dashboards</li>
            <li><span className="font-medium text-white">NumPy</span> – Data preprocessing, numerical analysis, and aggregation</li>
            <li><span className="font-medium text-white">Business Intelligence & Data Analytics</span> – Performance tracking and insight generation</li>
          </ul>
        </section>

        {/* Project Outcome */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Project Outcome</h2>
          <p className="text-gray-300 leading-relaxed">
            This project demonstrates the ability to combine Python (NumPy) for data processing with Power BI for visualization, transforming raw sales data into meaningful business insights suitable for executive reporting and analytics-driven decision-making. The dashboard helps businesses monitor revenue trends, evaluate product performance, and understand sales contributions effectively.
          </p>
        </section>
      </div>
    </main>
  );
}
