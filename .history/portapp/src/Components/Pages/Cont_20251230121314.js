import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "darihafebi825@gmail.com",
      link: "mailto:darihafebi825@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 989 6918",
      link: "tel:+919894406918",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanyakumari, Chemparuthivilai",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "www.linkedin.com/in/dariha-suresh-262a933a0",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/darihafebi825-collab",
      color: "hover:bg-gray-800",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/yourusername",
      color: "hover:bg-pink-600",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <MessageSquare size={40} /> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      {info.label}
                    </div>
                    <div className="text-gray-900 font-semibold">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg focus:border-gray-900"
                />

                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg focus:border-gray-900"
                />

                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border rounded-lg resize-none focus:border-gray-900"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitted ? "✓ Message Sent!" : <><Send size={18} /> Send Message</>}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
