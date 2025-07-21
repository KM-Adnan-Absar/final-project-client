import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! 🍽️');
  };

  return (
    
<div>
    <Helmet>
            <title>Bistro Boss | Contact</title>
           
          </Helmet>
     <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white mt-12">
          Contact Our Restaurant
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl mt-1 text-red-500" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+880123456789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl mt-1 text-green-600" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>123 Gulshan Ave, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-xl mt-1 text-blue-500" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@yourrestaurant.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Opening Hours</h4>
            <p>Mon - Fri: 10 AM – 10 PM</p>
            <p>Sat - Sun: 12 PM – 11 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
            <textarea
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Type your message or reservation request"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-300">
          <a href="https://facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-600" />
          </a>
          <a href="https://instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
</div>
   
  );
};

export default Contact;
