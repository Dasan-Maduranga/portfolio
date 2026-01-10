export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61566875555040",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "from-blue-600 to-blue-500",
      hoverColor: "hover:from-blue-700 hover:to-blue-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dasan-maduranga",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5h-2v10h2v-10Zm3 0h-2v10h2v-5.6c0-1.7 2-1.9 2-0.1V20h2v-6.3c0-3.3-3.4-3.2-4-1.6V10Z" />
        </svg>
      ),
      bgColor: "from-blue-700 to-blue-600",
      hoverColor: "hover:from-blue-800 hover:to-blue-700",
    },
    {
      name: "GitHub",
      href: "https://github.com/Dasan-Maduranga",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.65 3.02 8.59 7.22 9.98.53.1.73-.23.73-.5 0-.25-.01-1.09-.02-1.97-2.94.64-3.56-1.26-3.56-1.26-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.65.07-.65 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.68-1.41-2.35-.27-4.82-1.18-4.82-5.22 0-1.15.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.9 1.08a9.94 9.94 0 0 1 5.28 0c2.02-1.36 2.9-1.08 2.9-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.69 1.08 2.84 0 4.05-2.48 4.95-4.84 5.21.38.33.72.99.72 2 0 1.44-.01 2.6-.01 2.96 0 .28.19.61.74.5A10.52 10.52 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
        </svg>
      ),
      bgColor: "from-gray-800 to-gray-700",
      hoverColor: "hover:from-gray-900 hover:to-gray-800",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/94712575780",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.03 2C6.5 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.05 22l6.03-1.93C10.29 21.64 11.12 22 12.03 22c5.5 0 10-4.48 10-10 0-5.52-4.5-10-10-10zm0 18c-.83 0-1.65-.16-2.41-.46l-.17-.08-1.8.58.58-1.78-.08-.16c-.3-.75-.46-1.58-.46-2.41 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-5.78c-.24-.12-1.41-.7-1.63-.78-.22-.07-.38-.11-.54.11-.16.22-.62.78-.76.94-.14.16-.29.18-.53.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.18 2.32.21 2.48c.03.16 2.1 3.2 5.1 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.23-.18-.48-.3z" />
        </svg>
      ),
      bgColor: "from-green-600 to-green-500",
      hoverColor: "hover:from-green-700 hover:to-green-600",
    },
    {
      name: "Email",
      href: "mailto:madurangadasan@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
        </svg>
      ),
      bgColor: "from-red-600 to-red-500",
      hoverColor: "hover:from-red-700 hover:to-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#020b1a] via-[#0a1525] to-[#010508] border-t border-cyan-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 mb-12">
          
          {/* Left: Logo + Name + role */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
            {/* Footer Logo/Icon */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Dasan Maduranga
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-1">
                Full Stack Developer
              </p>
              <p className="text-gray-400 text-sm">
                Sri Lanka 🇱🇰
              </p>
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.bgColor} ${item.hoverColor}
                           flex items-center justify-center text-white
                           shadow-lg hover:shadow-2xl
                           transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                           border border-white/10 hover:border-white/20`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"></div>

        {/* Bottom copyright */}
        <div className="text-center space-y-2">
          <p className="text-gray-300 text-sm font-medium">
            © {new Date().getFullYear()} Dasan Maduranga. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs">
            ✨ Built with React, Tailwind CSS & 💙 passion
          </p>
        </div>
      </div>
    </footer>
  );
}
