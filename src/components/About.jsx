import { useState } from "react";

export default function About() {
  const [showCV, setShowCV] = useState(false);

  const handleViewCV = () => {
    setShowCV(true);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-[#020b1a] flex items-center px-3 sm:px-4 md:px-6 py-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3">
            Aspiring Business Intelligence!
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
           I am an ICT undergraduate with a strong interest in Business
            Intelligence and full-stack software
            development. I have practical experience in data analysis and visualization through
            projects, as well as hands-on development experience in building collaborative
            learning systems and e-commerce applications.

            I am skilled in Java, PHP, the MERN stack,
            React.js, SQL, and API integration, and I enjoy working on projects that
            combine analytical thinking with software engineering. Through team-based 
            development work, I have developed strong problem-solving, communication, and
            collaboration skills. I am motivated to continuously learn and contribute to real-world,
            data-driven software solutions.
          </p>

          {/* CV Button */}
          <button
            onClick={handleViewCV}
            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg 
                       hover:bg-cyan-500 transition-all duration-300 
                       shadow-[0_0_20px_rgba(34,211,238,0.5)]
                       hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          >
            View CV
          </button>
        </div>

      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a1628] rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white">My CV</h3>
              <div className="flex gap-3">
                <button
                  onClick={handleDownloadCV}
                  className="px-4 py-2 bg-cyan-400 text-black font-semibold rounded 
                           hover:bg-cyan-500 transition-all duration-300"
                >
                  Download
                </button>
                <button
                  onClick={() => setShowCV(false)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded 
                           hover:bg-red-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-4">
              <iframe
                src="/CV.pdf"
                className="w-full h-full min-h-[600px] rounded"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
