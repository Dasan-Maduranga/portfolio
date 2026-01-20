import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const quizImages = Object.values(
  import.meta.glob("../assets/QuickQuizImages/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

export default function QuickQuiz() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const hasImages = quizImages.length > 0;

  const next = () => setIndex((i) => (i + 1) % quizImages.length);
  const prev = () => setIndex((i) => (i - 1 + quizImages.length) % quizImages.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!hasImages || quizImages.length < 2) return;
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
            QuickQuiz — JavaFX Quiz Application
            <span className="block text-cyan-400 text-lg sm:text-xl md:text-2xl mt-1">Java 17 | JavaFX 17 | Maven</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
            QuickQuiz is a modern, feature-rich quiz application developed using Java 17 and JavaFX 17. The system provides secure authentication, quiz creation, and an interactive quiz-taking experience for both students and teachers.
          </p>
        </header>

        {hasImages ? (
          <section className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[480px] bg-[#0a1628]">
              <img
                src={quizImages[index]}
                alt={`QuickQuiz screenshot ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {quizImages.length > 1 && (
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
                  {quizImages.map((_, i) => (
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
              <p className="text-cyan-300 font-semibold text-sm sm:text-base">No QuickQuiz images found</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Add images to src/assets/QuickQuizImages to display them here.</p>
            </div>
          </div>
        )}

        <section className="grid sm:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-xl border border-cyan-400/20 bg-[#0c1830] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed">
              <li>User authentication with role-based access (Student / Teacher)</li>
              <li>Quiz creation with multiple question types</li>
              <li>Interactive quiz interface with timer</li>
              <li>Progress tracking with navigation controls</li>
              <li>Detailed quiz results and performance feedback</li>
            </ul>
          </div>

          <div className="rounded-xl border border-cyan-400/20 bg-[#0c1830] p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed">
              <li>Java 17</li>
              <li>JavaFX 17</li>
              <li>FXML</li>
              <li>CSS</li>
              <li>Maven</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
