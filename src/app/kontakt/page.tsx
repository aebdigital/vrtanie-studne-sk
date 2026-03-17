"use client";

import { useState, type FormEvent } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mapActive, setMapActive] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to an API
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/external-new/vrtanie-studni01.jpg"
            alt="Vŕtanie studní kontakt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(68,186,197,0.34),transparent_42%),linear-gradient(118deg,rgba(3,17,29,0.94)_0%,rgba(6,31,48,0.86)_45%,rgba(9,50,71,0.68)_100%)]" />
        </div>
        <div className="relative z-10 max-w-[90%] mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zavolajte nám</h3>
              <a href="tel:+421907872591" className="block text-teal hover:text-teal-dark transition-colors">0907 872 591</a>
              <a href="tel:+421902681203" className="block text-teal hover:text-teal-dark transition-colors">0902 681 203</a>
            </div>

            {/* Email */}
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@vrtanie-studne.sk" className="text-teal hover:text-teal-dark transition-colors">info@vrtanie-studne.sk</a>
            </div>

            {/* Address */}
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal/10 text-teal mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresa</h3>
              <p className="text-gray-600">MQM stavebno obchodná spoločnosť s.r.o.</p>
              <p className="text-gray-600">Vimperská 938/5</p>
              <p className="text-gray-600">Detva 962 12</p>
              <p className="text-gray-500 text-sm mt-1">IČO: 51 629 771</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Napíšte nám
              </h2>

              {submitted ? (
                <div className="bg-teal/10 border border-teal/20 rounded-xl p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-teal mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Správa bola odoslaná
                  </h3>
                  <p className="text-gray-600">
                    Ďakujeme za vašu správu. Budeme vás kontaktovať čo najskôr.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-teal hover:text-teal-dark font-medium transition-colors"
                  >
                    Odoslať ďalšiu správu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Meno *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                      placeholder="Vaše meno"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                      placeholder="vas@email.sk"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefón
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                      placeholder="+421 9XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Správa *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors resize-vertical"
                      placeholder="Vaša správa..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                  >
                    Odoslať správu
                  </button>
                </form>
              )}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[400px] md:h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21234.7!2d19.42!3d48.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153a6252c4e82b%3A0x400f7d1c6969c80!2sDetva!5e0!3m2!1ssk!2ssk!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, pointerEvents: mapActive ? "auto" : "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa - MQM stavebno obchodná spoločnosť s.r.o., Detva"
          className="absolute inset-0"
        />
        {!mapActive && (
          <div
            className="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer transition-opacity"
            onClick={() => setMapActive(true)}
          >
            <span className="bg-white/95 text-gray-700 font-medium px-6 py-3 rounded-lg shadow-lg">
              Kliknite pre interakciu s mapou
            </span>
          </div>
        )}
      </section>
    </>
  );
}
