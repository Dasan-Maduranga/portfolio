import { useNavigate } from "react-router-dom";
import projects from "../data/project";

const skillnetImages = Object.values(
  import.meta.glob("../assets/SkillNetImages/*.{png,jpg,jpeg,webp}", {
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

const salesImages = Object.values(
  import.meta.glob("../assets/SalesDashboardImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const quickQuizImages = Object.values(
  import.meta.glob("../assets/QuickQuizImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const gemoraImages = Object.values(
  import.meta.glob("../assets/GemoraImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function Projects() {
  const navigate = useNavigate();

  const cardImages = [
    skillnetImages.length > 0 ? skillnetImages[0] : "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    quickQuizImages.length > 0 ? quickQuizImages[0] : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    gemoraImages.length > 0 ? gemoraImages[0] : "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  ];

  return (
    <section className="min-h-screen px-6 md:px-10 py-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 5).map((p, idx) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-2"
              role="button"
              tabIndex={0}
              onClick={() => {
                if (p.title.toLowerCase().includes("skillnet")) navigate("/skillnet");
                if (p.title.toLowerCase().includes("quickquiz")) navigate("/quickquiz");
                if (p.title.toLowerCase().includes("gemora")) navigate("/gemora");
                if (p.title.toLowerCase().includes("e-commerce dashboard")) navigate("/ecommerce-dashboard");
                if (p.title.toLowerCase().includes("sales dashboard")) navigate("/sales-dashboard");
                if (p.title.toLowerCase().includes("dashboards")) navigate("/dashboards");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (p.title.toLowerCase().includes("skillnet")) navigate("/skillnet");
                  if (p.title.toLowerCase().includes("quickquiz")) navigate("/quickquiz");
                  if (p.title.toLowerCase().includes("gemora")) navigate("/gemora");
                  if (p.title.toLowerCase().includes("e-commerce dashboard")) navigate("/ecommerce-dashboard");
                  if (p.title.toLowerCase().includes("sales dashboard")) navigate("/sales-dashboard");
                  if (p.title.toLowerCase().includes("dashboards")) navigate("/dashboards");
                }
              }}
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cardImages[idx % cardImages.length]}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {p.title.split("–")[0].trim()}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Avatar/Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {p.title[0]}
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">{p.tech.split(",")[0]}</p>
                    </div>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
