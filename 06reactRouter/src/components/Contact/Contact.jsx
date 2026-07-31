


function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-10">

        
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-900">📧 Email</h3>
                <p>support@gitfinder.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900"> Address</h3>
                <p>India</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900"> Phone</h3>
                <p>+91 9876543210</p>
              </div>

            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;