




function About() {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About <span className="text-blue-600">GitFinder</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            GitFinder is a modern web application that allows users to search
            GitHub profiles instantly and explore useful information using the
            official GitHub API.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
               Our Mission
            </h2>

            <p className="text-gray-600 leading-7">
              Make GitHub profile searching simple, fast, and accessible for
              developers, recruiters, and students.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
               Features
            </h2>

            <ul className="space-y-2 text-gray-600">
              <li> Search GitHub Users</li>
              <li> View Followers & Following</li>
              <li> Public Repositories</li>
              <li> Company & Location</li>
              <li> Direct GitHub Profile Link</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
               Tech Stack
            </h2>

            <ul className="space-y-2 text-gray-600">
              <li> React.js</li>
              <li> Tailwind CSS</li>
              <li> Vite</li>
              <li> GitHub REST API</li>
              <li> React Router</li>
            </ul>
          </div>

        </div>

        
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose GitFinder?
          </h2>

          <p className="mt-6 text-gray-600 text-center leading-8 max-w-4xl mx-auto">
            Whether you're a recruiter looking for talented developers,
            a student exploring open-source projects, or a programmer checking
            your GitHub statistics, GitFinder provides a clean, fast, and
            user-friendly interface to explore GitHub profiles in seconds.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;