const heroImages = Object.values(
  import.meta.glob("../assets/EcommerceDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const fallbackHero =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1600&q=80&auto=format&fit=crop";

const objectives = [
  "Build a comprehensive analytics dashboard for e-commerce insights",
  "Track key performance indicators and sales metrics in real-time",
  "Visualize customer behavior patterns and purchasing trends",
  "Monitor inventory levels and product performance",
  "Generate actionable insights for business decision-making",
];

const features = [
  "Sales and revenue tracking dashboards",
  "Customer behavior analytics",
  "Product performance metrics",
  "Interactive data visualizations",
  "Real-time KPI monitoring",
  "Custom filtering and drill-down capabilities",
];

const technologies = [
  "Power BI (Dashboard Development)",
  "Excel (Data Preparation)",
  "DAX (Data Analysis Expressions)",
  "Data Modeling & ETL",
  "Business Intelligence Tools",
  "Data Visualization Best Practices",
];

const outcomes = [
  "Clear visibility into sales performance and trends",
  "Data-driven insights for strategic planning",
  "Improved inventory management and forecasting",
];

const kpis = [
  {
    title: "Sum of Delivery Time (Days)",
    detail:
      "Aggregates delivery duration across all orders to spot bottlenecks and logistics delays.",
  },
  {
    title: "Sum of Unit Price",
    detail:
      "Rolls up unit pricing to understand value distribution and contribution by product lines.",
  },
  {
    title: "Sum of Total Amount",
    detail:
      "Captures revenue for the selected period to benchmark overall business performance.",
  },
  {
    title: "Sum of Session Duration (Minutes)",
    detail:
      "Measures total time customers spend on the platform, reflecting engagement and UX quality.",
  },
];

const filters = [
  {
    title: "Time Period",
    detail: "Analyze seasonal patterns and compare performance across date ranges.",
  },
  {
    title: "Device Type (Desktop, Mobile, Tablet)",
    detail: "Compare behavior and conversion across devices to guide responsive optimizations.",
  },
  {
    title: "City",
    detail: "Surface regional demand patterns and tailor city-level marketing.",
  },
  {
    title: "Product Category",
    detail: "See which categories drive revenue, engagement, and repeat visits.",
  },
];

const visuals = [
  {
    title: "Pages Viewed & Customer Rating by City",
    detail:
      "Combined bar and point plot that contrasts engagement (pages viewed) with satisfaction (ratings) to find high-potential regions.",
  },
  {
    title: "Total Amount by Month",
    detail:
      "Line chart that tracks revenue trends, highlights peak months, and exposes seasonality or anomalies.",
  },
  {
    title: "Gender Distribution",
    detail:
      "Pie chart summarizing customer counts by gender to inform demographic targeting.",
  },
];

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EcommerceDashboard() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const galleryImages = heroImages.length > 0 ? heroImages : [fallbackHero];
  const hasMultiple = galleryImages.length > 1;
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/dashboards");
  };

  const next = () => setIndex((i) => (i + 1) % galleryImages.length);
  const prev = () => setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (galleryImages.length === 0) return;
    setIsFading(true);
    const t = setTimeout(() => setIsFading(false), 30);
    return () => clearTimeout(t);
  }, [index, galleryImages.length]);

  // Auto-play carousel for a modern, smooth feel
  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [hasMultiple]);

  return (
    <main className="min-h-screen bg-[#020b1a] text-white pt-24 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400 px-4 py-2 text-cyan-300 hover:bg-cyan-400 hover:text-black transition shadow-[0_10px_30px_rgba(34,211,238,0.25)]"
          >
            ← Back to Dashboard
          </button>
        </div>
        {/* Header */}
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Case Study</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            E-commerce Dashboard
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Comprehensive E-commerce Analytics Platform
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            An interactive Power BI dashboard designed to provide comprehensive insights into e-commerce operations. This project focuses on transforming raw business data into actionable insights through powerful visualizations and real-time analytics.
          </p>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            The dashboard enables stakeholders to monitor key performance indicators, track sales trends, analyze customer behavior, and make data-driven decisions to optimize business performance.
          </p>
        </header>

        {/* Hero Image Gallery Carousel */}
        {galleryImages.length > 0 && (
          <section className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div
              className={`relative h-96 md:h-[500px] transition-opacity duration-300 ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
            >
              <img
                src={galleryImages[index]}
                alt={`E-commerce Dashboard Screenshot ${index + 1}`}
                className="w-full h-full object-contain bg-[#0a1628]"
              />
            </div>
            {hasMultiple && (
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
                  {galleryImages.map((_, i) => (
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

        {/* Detailed Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Detailed Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This E-commerce Dashboard brings together KPIs, slicers, and visuals to translate raw transaction and behavioral data into clear, actionable insight. Stakeholders can monitor sales performance, engagement, and operational health across time, location, device type, and product categories.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The layout mirrors the attached dashboard: KPI cards up top, interactive filters on the left, and analytical visuals on the right to explore revenue, engagement, and demographics.
          </p>
        </section>

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

        {/* KPIs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Key Performance Indicators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.title}
                className="rounded-xl border border-gray-800 bg-[#0a1628] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <p className="text-white font-semibold">{kpi.title}</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{kpi.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Interactive Filters (Slicers)</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {filters.map((f) => (
              <li key={f.title}>
                <span className="text-white font-medium">{f.title}:</span> {f.detail}
              </li>
            ))}
          </ul>
        </section>

        {/* Visuals */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">Analytical Visualizations</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
            {visuals.map((viz) => (
              <li key={viz.title}>
                <span className="text-white font-medium">{viz.title}:</span> {viz.detail}
              </li>
            ))}
          </ul>
        </section>

        {/* Purpose */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">Purpose & Value</h2>
          <p className="text-gray-300 leading-relaxed">
            The dashboard empowers business teams to monitor revenue, understand customer engagement, evaluate operational efficiency, and make confident, data-driven decisions. KPIs and slicers keep context tight, while the visuals reveal trends, seasonality, and high-potential segments.
          </p>
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
