import React from "react";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <Nav />
      {/* Hero Section */}
      <section
        className="h-screen text-center pt-40 text-white relative"
        style={{
          backgroundImage: "url('/heroImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="hero"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/50 to-purple-600/50"></div>

        <div className="max-w-2xl mx-auto px-4 mt-32 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Touch & Care by Uju
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Professional Therapeutic Massage
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-3 bg-white text-pink-600 rounded-lg hover:bg-gray-100 transition duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Book Your Session
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-20" id="about">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Uju</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I'm Uju, a certified massage therapist dedicated to helping you find
            relief and relaxation. With specialized training in multiple
            modalities, I create personalized treatments to address your unique
            needs and promote overall wellness.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Swedish Massage
              </h3>
              <p className="text-gray-600 mb-4">
                60 minutes of relaxing full-body treatment
              </p>
              <p className="text-2xl font-bold text-gray-900">₦10,000</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Deep Tissue
              </h3>
              <p className="text-gray-600 mb-4">
                90 minutes of targeted muscle relief
              </p>
              <p className="text-2xl font-bold text-gray-900">₦15,000</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Aromatherapy
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance your experience with essential oils
              </p>
              <p className="text-2xl font-bold text-gray-900">+₦2,500</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-pink-600">
                Home Service
              </h3>
              <p className="text-gray-600 mb-4">
                I'll come to you with all equipment
              </p>
              <p className="text-2xl font-bold text-gray-900">✔️ Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Book Your Session
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Touch & Care by Uju</h3>
              <p className="text-gray-400">Professional Therapeutic Massage</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:uju@example.com"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">Email</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M24 4.5v15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-15c0-1.7 1.3-3 3-3h18c1.7 0 3 1.3 3 3zm-2.3 1.1L12 11.5 2.3 5.6c-.4-.3-1.1-.2-1.4.3-.2.4-.1 1 .3 1.3l10 6.4c.2.1.4.2.6.2s.4-.1.6-.2l10-6.4c.4-.3.5-.9.3-1.3-.4-.5-1.1-.6-1.5-.3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Touch & Care by Uju. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
