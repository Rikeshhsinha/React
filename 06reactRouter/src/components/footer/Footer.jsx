import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">


        <div>
          <Link to="/" className="text-3xl font-bold">
            Git<span className="text-blue-500">Finder</span>
          </Link>

          <p className="mt-4 text-gray-400 leading-7">
            Search any GitHub profile instantly. View repositories,
            followers, following, bio, location, and more using the
            GitHub API.
          </p>
        </div>

    
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/github" className="hover:text-blue-400 transition">
                Github Search
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-4">Connect</h2>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © {new Date().getFullYear()} GitFinder. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;