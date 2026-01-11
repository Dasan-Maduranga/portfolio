const services = [
  {
    icon: "📊",
    title: "Dashboard Development",
    description: "Creating interactive and insightful dashboards using Power BI and data visualization tools to transform complex data into actionable business intelligence.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces with modern design principles, ensuring seamless user experiences across all platforms.",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Building robust and scalable server-side applications using Node.js, Express, and Firebase to power modern web applications.",
  },
  {
    icon: "🗄️",
    title: "Database Management",
    description: "Designing and optimizing database architectures with MongoDB, Firestore, and SQL to ensure efficient data storage and retrieval.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen px-6 md:px-10 py-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Offering comprehensive solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#0a1628] to-[#020b1a] rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
