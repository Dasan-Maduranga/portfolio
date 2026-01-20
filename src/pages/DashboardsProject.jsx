import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const bmwImages = Object.values(
  import.meta.glob("../assets/BmwSalesDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const ecommerceImages = Object.values(
  import.meta.glob("../assets/EcommerceDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const salesOverviewImages = Object.values(
  import.meta.glob("../assets/SalesOverviewDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const studentPerformanceImages = Object.values(
  import.meta.glob("../assets/StudentPerformanceDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const dashboardProjects = [
  {
    title: "Comprehensive E-commerce Analytics Platform",
    desc: "An interactive Power BI dashboard that transforms raw e-commerce data into actionable insights through clear and dynamic visualizations",
    tech: "Power BI, DAX, Excel",
    image: ecommerceImages.length > 0 ? ecommerceImages[0] : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    route: "/ecommerce-dashboard",
  },
  {
    title: "Sales Overview Dashboard",
    desc: "Comprehensive product-level sales performance analysis with revenue tracking, top products identification, and salesperson contribution insights.",
    tech: "Power BI, NumPy, Analytics",
    image: salesOverviewImages.length > 0 ? salesOverviewImages[0] : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    route: "/sales-overview-dashboard",
  },
  {
    title: "Student Performance Analytics Dashboard",
    desc: "In-depth analysis of student academic performance examining gender, parental education, lunch type, test preparation, and performance levels.",
    tech: "Power BI, Pandas, NumPy",
    image: studentPerformanceImages.length > 0 ? studentPerformanceImages[0] : "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    route: "/student-performance-dashboard",
  },
  {
    title: "Marketing Analytics Dashboard",
    desc: "Campaign performance, ROI tracking, customer acquisition metrics, and conversion funnel analysis.",
    tech: "Power BI, Google Analytics, Marketing Cloud",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    route: "/ecommerce-dashboard",
  },
  {
    title: "BMW Sales Data Dashboard (2010–2024)",
    desc: "Comprehensive analysis of BMW vehicle sales performance with insights into sales trends, model performance, and customer preferences.",
    tech: "Power BI, Pandas, NumPy",
    image: bmwImages.length > 0 ? bmwImages[0] : "https://images.unsplash.com/photo-1617654112368-cb4065fca904?w=800&q=80",
    route: "/bmw-sales-dashboard",
  },
];

export default function DashboardsProject() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Dashboard Collection</p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Analytics & Visualization
            <span className="block text-cyan-400 text-xl sm:text-2xl mt-1">
              Interactive Business Intelligence Dashboards
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            A comprehensive collection of data visualization and analytics dashboards built with Power BI. Each dashboard is designed to provide actionable insights, track key performance indicators, and enable data-driven decision-making across various business functions.
          </p>
        </header>

        {/* Dashboard Grid */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {dashboardProjects.map((dashboard, idx) => (
            <div
              key={dashboard.title}
              className="group relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => navigate(dashboard.route)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(dashboard.route);
                }
              }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
                    {dashboard.desc}
                  </p>
                </div>

                {/* Bottom Info */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">{dashboard.tech.split(",")[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Features Section */}
        <section className="mt-16 pt-12 border-t border-cyan-400/30 space-y-6">
          <h2 className="text-2xl font-semibold text-cyan-300">Key Features Across All Dashboards</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Interactive visualizations and drill-down capabilities</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Real-time data refresh and automated updates</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Custom KPI tracking and alerts</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Mobile-responsive design for on-the-go access</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Data modeling and ETL optimization</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span>Export capabilities and scheduled reporting</span>
            </li>
          </ul>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {["Power BI", "DAX", "Power Query", "Excel", "SQL Server", "Azure", "Google Analytics", "Data Modeling", "numpy", "pandas"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
