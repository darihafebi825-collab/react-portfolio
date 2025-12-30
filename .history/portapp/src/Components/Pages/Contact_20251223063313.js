// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
//   const handleSubmit = () => {
//     if (formData.name && formData.email && formData.message) {
//       setIsSubmitted(true);
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({ name: '', email: '', message: '' });
//       }, 3000);
//     }
//   };
  
//   const contactInfo = [
//     { icon: Mail, label: 'Email', value: 'john.doe@example.com', link: 'mailto:john.doe@example.com' },
//     { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
//     { icon: MapPin, label: 'Location', value: 'San Francisco, CA', link: '#' }
//   ];
  
//   const socialLinks = [
//     { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:bg-blue-600' },
//     { icon: Github, label: 'GitHub', url: '#', color: 'hover:bg-gray-800' },
//     { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:bg-blue-400' },
//     { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:bg-pink-600' }
//   ];
  
//   return (
//     <section id="contact" className="py-24 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
//             <MessageSquare size={40} /> Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Have a project in mind or just want to chat? I'd love to hear from you!
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((info, idx) => (
//                 <motion.a key={idx} href={info.link} whileHover={{ x: 10 }}
//                   className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
//                   <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
//                     <info.icon size={24} />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">{info.label}</div>
//                     <div className="text-gray-900 font-semibold">{info.value}</div>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h4>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, idx) => (
//                   <motion.a key={idx} href={social.url} whileHover={{ scale: 1.1, y: -5 }}
//                     className={`w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center ${social.color} transition-colors`}
//                     aria-label={social.label}>
//                     <social.icon size={20} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
//             <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                   <input type="text" value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all"
//                     placeholder="Your Name" />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input type="email" value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all"
//                     placeholder="your.email@example.com" />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                   <textarea value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     rows={5}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all resize-none"
//                     placeholder="Your message..." />
//                 </div>
                
//                 <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSubmit}
//                   className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
//                   {isSubmitted ? (
//                     <>✓ Message Sent!</>
//                   ) : (
//                     <><Send size={18} /> Send Message</>
//                   )}
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
