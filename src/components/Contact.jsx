import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple front-end validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill in required fields." });
      return;
    }
    // Demo submit: you can integrate EmailJS, a server, or Formspree later
    console.log("Contact form submitted", form);
    setStatus({ type: "success", msg: "Message sent! I will get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
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

          <div className="mt-6 space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              {/* mail icon */}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </span>
              <a href="mailto:madurangadasan@gmail.com" className="hover:text-cyan-400">madurangadasan@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              {/* phone icon */}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.61 22 2 13.39 2 3.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
                </svg>
              </span>
              <span>+94 712575780</span>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/dasan-maduranga",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5h-2v10h2v-10Zm3 0h-2v10h2v-5.6c0-1.7 2-1.9 2-0.1V20h2v-6.3c0-3.3-3.4-3.2-4-1.6V10Z" />
                  </svg>
                ),
                bgColor: "bg-blue-600 hover:bg-blue-700",
                borderColor: "border-blue-500/60",
              },
              {
                name: "GitHub",
                href: "https://github.com/Dasan-Maduranga",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.65 3.02 8.59 7.22 9.98.53.1.73-.23.73-.5 0-.25-.01-1.09-.02-1.97-2.94.64-3.56-1.26-3.56-1.26-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.65.07-.65 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.68-1.41-2.35-.27-4.82-1.18-4.82-5.22 0-1.15.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.9 1.08a9.94 9.94 0 0 1 5.28 0c2.02-1.36 2.9-1.08 2.9-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.69 1.08 2.84 0 4.05-2.48 4.95-4.84 5.21.38.33.72.99.72 2 0 1.44-.01 2.6-.01 2.96 0 .28.19.61.74.5A10.52 10.52 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
                  </svg>
                ),
                bgColor: "bg-gray-800 hover:bg-gray-900",
                borderColor: "border-gray-600/60",
              },
              {
                name: "WhatsApp",
                href: "https://wa.me/94712575780",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12.03 2C6.5 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.05 22l6.03-1.93C10.29 21.64 11.12 22 12.03 22c5.5 0 10-4.48 10-10 0-5.52-4.5-10-10-10zm0 18c-.83 0-1.65-.16-2.41-.46l-.17-.08-1.8.58.58-1.78-.08-.16c-.3-.75-.46-1.58-.46-2.41 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-5.78c-.24-.12-1.41-.7-1.63-.78-.22-.07-.38-.11-.54.11-.16.22-.62.78-.76.94-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.18 2.32.21 2.48c.03.16 2.1 3.2 5.1 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.23-.18-.48-.3z" />
                  </svg>
                ),
                bgColor: "bg-green-500 hover:bg-green-600",
                borderColor: "border-green-400/60",
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/profile.php?id=61566875555040",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
                bgColor: "bg-blue-700 hover:bg-blue-800",
                borderColor: "border-blue-600/60",
              },
            ].map((s) => (
              <a
                key={s.name}
                aria-label={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`h-12 w-12 rounded-full border ${s.borderColor} text-white flex items-center justify-center ${s.bgColor} transition shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transform hover:scale-110`}
              >
                {s.icon}
              </a>
            ))}
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
