import { useState } from "react";

function Github() {
  const [username, setUsername] = useState("");

  return (
    <section className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-6">

        

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            GitHub <span className="text-blue-600">Profile Finder</span>
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Search any GitHub username and explore their profile.
          </p>

        </div>

       

        <div className="mt-12 flex justify-center">

          <div className="flex w-full max-w-2xl shadow-lg rounded-xl overflow-hidden bg-white">

            <input
              type="text"
              placeholder="Enter GitHub Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-5 py-4 outline-none text-lg"
            />

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition"
            >
              Search
            </button>

          </div>

        </div>

        

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="GitHub User"
              className="w-40 h-40 rounded-full border-4 border-blue-500"
            />

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                GitHub User
              </h2>

              <p className="text-gray-500 mt-2">
                Username: username
              </p>

              <p className="mt-4 text-gray-600">
                Profile details will appear here after searching.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">0</h3>
                  <p>Followers</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">0</h3>
                  <p>Following</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">0</h3>
                  <p>Repositories</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">0</h3>
                  <p>Gists</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Github;