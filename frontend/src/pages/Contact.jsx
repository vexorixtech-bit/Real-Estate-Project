import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Simulate API call for demo
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 500);
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#C9A227]/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#0A1F44]/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12 animate-fadeInDown">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-4 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#C9A227] rounded-full"></span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">Get in touch with our expert team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md animate-fadeInLeft opacity-0 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Send us a Message</h2>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                Failed to submit enquiry. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] mb-4"
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] mb-6"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#0A1F44] text-white py-4 rounded-md hover:bg-[#C9A227] transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-[#0A1F44] text-white p-8 rounded-lg animate-fadeInRight opacity-0 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:pl-2 transition-all duration-300">
                <div className="text-[#C9A227] text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-gray-300">2/544 Anna Nagar<br />Chennai - 600002</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:pl-2 transition-all duration-300">
                <div className="text-[#C9A227] text-2xl group-hover:animate-bounce">📞</div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+91 9655058949</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:pl-2 transition-all duration-300">
                <div className="text-[#C9A227] text-2xl group-hover:animate-bounce">✉️</div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">vexorix.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:pl-2 transition-all duration-300">
                <div className="text-[#C9A227] text-2xl group-hover:animate-bounce">🕐</div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
