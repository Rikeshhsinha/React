import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const searchUser = () => {
  if (username.trim() === "") return;

  navigate(`/github/${username}`);
};

  return (
    <section className="min-h-screen bg-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Discover Any
            <span className="text-blue-600"> GitHub </span>
            Profile Instantly
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Search GitHub users and explore their profile, repositories,
            followers, following, company, location, and much more using the
            GitHub API.
          </p>

          <div className="mt-10 flex shadow-lg rounded-xl overflow-hidden bg-white">

            <input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-5 py-4 outline-none text-lg"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition"
              onClick={searchUser}
            >
              Search
            </button>

          </div>

          <div className="mt-6 flex gap-8 text-gray-600">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">100M+</h2>
              <p>Developers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">420M+</h2>
              <p>Repositories</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">Free</h2>
              <p>GitHub API</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">

          <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

            <div className="flex justify-center">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-40 h-40"
              />
            </div>

            <h2 className="text-3xl font-bold text-center mt-6">
              GitHub Profile Finder
            </h2>

            <p className="text-center text-gray-500 mt-4">
              Enter a GitHub username to view profile details, repositories,
              followers, and much more.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;