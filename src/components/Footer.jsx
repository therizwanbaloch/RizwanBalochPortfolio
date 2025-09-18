import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left: Name & tagline */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-xl font-bold tracking-wide">Rizwan Baloch</h1>
          <p className="mt-1 text-white/90 text-sm">
            Building experiences that connect users & technology.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="md:w-1/3 text-center">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-wrap justify-center gap-3 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/hireme" className="hover:underline">
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social icons */}
        <div className="md:w-1/3 text-center md:text-right">
          <h2 className="text-lg font-semibold mb-2">Connect with me</h2>
          <div className="flex justify-center md:justify-end gap-3">
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

      {/* Bottom small strip */}
      <div className="border-t border-white/30 mt-4 pt-3 text-center text-white/80 text-xs">
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
    className="p-2 rounded-full bg-white/20 hover:bg-white transition duration-200 text-white hover:text-black"
  >
    {icon}
  </a>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M4.98 3.5C4.98 5 3.89 6 2.5 6S0 5 0 3.5 1.11 1 2.5 1s2.48 1 2.48 2.5zM.2 8h4.56V24H.2zM7.96 8h4.38v2.2h.06c.61-1.14 2.1-2.35 4.34-2.35 4.63 0 5.48 3.05 5.48 7.01V24h-4.57v-6.8c0-1.63-.03-3.74-2.28-3.74-2.29 0-2.64 1.79-2.64 3.63V24H7.96z" />
  </svg>
);

const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.67 1.66.26 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.7.8.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 .5C7.6.5.5 7.6.5 16c0 2.8.7 5.4 2 7.7L.5 31.5l8-2.1c2.2 1.2 4.8 1.9 7.5 1.9 8.4 0 15.5-7.1 15.5-15.5S24.4.5 16 .5zm0 28.3c-2.4 0-4.8-.6-6.8-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.2-2.1-1.8-4.5-1.8-6.8C3.1 9.2 8.9 3.4 16 3.4s12.9 5.8 12.9 12.9-5.8 12.5-12.9 12.5zm6.9-9.2c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.4.3-.8.1-2.3-1.1-3.8-2-5.3-4.5-.4-.6.4-.6 1.1-2 .1-.2 0-.4 0-.5-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.4-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.8.7.3 1.2.5 1.6.6.6.2 1.1.2 1.5.1.5-.1 2.4-.9 2.7-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.2-.7-.4z" />
  </svg>
);

export default Footer;
