import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* name */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Rizwan Baloch</h1>
          <p className="mt-2 text-white/90">Building experiences that connect users & technology.</p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="block px-2 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block px-2 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-2 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/hireme"
                className="block px-2 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Socials*/}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect with me</h2>
          <div className="flex gap-4">
            <IconLink
              href="https://linkedin.com/in/therizwanbaloch"
              label="LinkedIn"
              icon={<LinkedInIcon />}
            />
            <IconLink
              href="https://github.com/therizwanbaloch"
              label="GitHub"
              icon={<GitHubIcon />}
            />
            <IconLink
              href="https://wa.me/923127130457?text=Hi%2C%20I%20found%20your%20contact%20on%20your%20portfolio.%20I'm%20interested%20in%20working%20with%20you%20on%20a%20project."
              label="WhatsApp"
              icon={<WhatsAppIcon />}
            />
          </div>
        </div>
      </div>

      {/* all right section */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-white/80 text-sm">
        © {new Date().getFullYear()} Rizwan Baloch. All rights reserved.
      </div>
    </footer>
  );
};

const IconLink = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-white/20 hover:bg-white transition duration-200 text-white hover:text-black"
  >
    {icon}
  </a>
);


const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M4.98 3.5C4.98 5 3.89 6 2.5 6S0 5 0 3.5 1.11 1 2.5 1s2.48 1 2.48 2.5zM.2 8h4.56V24H.2zM7.96 8h4.38v2.2h.06c.61-1.14 2.1-2.35 4.34-2.35 4.63 0 5.48 3.05 5.48 7.01V24h-4.57v-6.8c0-1.63-.03-3.74-2.28-3.74-2.29 0-2.64 1.79-2.64 3.63V24H7.96z" />
  </svg>
);

const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.67 1.66.26 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.7.8.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
    <path d="M380.9 97.1C339-12.9 266.9-32.3 211.6 6.1 130.4 53.5 114.2 132.3 90.4 149.7 76 161.5 48 173.4 48 173.4s-32.5 24.6-24.7 48.4c9.6 34.4 50.7 82 115.2 122.8 19.2 13.5 37.9 22 56.1 27.7 16 4.7 34.7 2.1 49.8-2.1 27.3-7.3 42.4-18.4 53.2-34.5 7-10.5 11.4-23.4 11.9-34.8.3-7.7-.1-13.7-.1-13.7S441 143.1 380.9 97.1z" />
  </svg>
);

export default Footer;
