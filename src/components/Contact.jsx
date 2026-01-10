import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    setStatus({ type: "error", msg: "Please fill in required fields." });
    return;
  }

  try {
    await emailjs.send(
      "service_m0v4evh",
      "template_a68ua6g",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Portfolio Contact",
        message: form.message,
      },
      "NyGm_UZifUEFFKArZ"
    );

    setStatus({
      type: "success",
      msg: "Message sent successfully! ✅",
    });

    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error(error);
    setStatus({
      type: "error",
      msg: "Failed to send message. ❌",
    });
  }
};


  return (
    <section className="min-h-screen px-6 md:px-10 py-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Heading + info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 max-w-xl">
            Let’s work together. I enjoy collaborating on meaningful projects.
            If you have an idea or just want to say hi, drop a message!
          </p>

          <div className="mt-8 space-y-4">
            {/* Email Box */}
            <div className="flex items-center gap-4 p-5 border border-cyan-500/30 rounded-lg bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href="mailto:madurangadasan@gmail.com" className="text-white hover:text-cyan-400 font-medium transition-colors">madurangadasan@gmail.com</a>
              </div>
            </div>

            {/* Phone Box */}
            <div className="flex items-center gap-4 p-5 border border-cyan-500/30 rounded-lg bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.61 22 2 13.39 2 3.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <span className="text-white font-medium">+94 712575780</span>
              </div>
            </div>
          </div>

          
          
        </div>

        {/* Right: Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full bg-white/5 text-white placeholder-gray-400 border border-cyan-500/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full bg-white/5 text-white placeholder-gray-400 border border-cyan-500/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter Your Subject"
              className="w-full bg-white/5 text-white placeholder-gray-400 border border-cyan-500/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              rows={6}
              className="w-full bg-white/5 text-white placeholder-gray-400 border border-cyan-500/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {status && (
              <div
                className={
                  status.type === "success"
                    ? "text-cyan-400"
                    : "text-red-400"
                }
              >
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:shadow-[0_0_35px_rgba(34,211,238,0.9)] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
