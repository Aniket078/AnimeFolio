import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    senderId: '',
    manaFrequency: '',
    messagePayload: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // 1. Sender ID Validation
    const senderId = formData.senderId.trim();
    if (!senderId) {
      newErrors.senderId = 'Sender ID is required.';
    } else if (senderId.length < 3 || senderId.length > 50) {
      newErrors.senderId = 'Sender ID must be between 3 and 50 characters.';
    } else if (!/^[a-zA-Z0-9_-]+$/.test(senderId)) {
      newErrors.senderId = 'Alphanumeric, underscores, and hyphens only.';
    }

    // 2. MANA Frequency (Email) Validation
    const email = formData.manaFrequency.toLowerCase().trim();
    // RFC 5322 compliant regex approximation
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    
    const disposableDomains = ['tempmail.com', '10minutemail.com', 'throwawaymail.com', 'mailinator.com', 'guerrillamail.com', 'yopmail.com'];
    
    if (!email) {
      newErrors.manaFrequency = 'Mana Frequency is required.';
    } else if (email.length > 254) {
      newErrors.manaFrequency = 'Email exceeds maximum length (254 chars).';
    } else if (!emailRegex.test(email)) {
      newErrors.manaFrequency = 'Invalid email format.';
    } else {
      const domain = email.split('@')[1];
      if (disposableDomains.includes(domain)) {
        newErrors.manaFrequency = 'Disposable email addresses are not permitted.';
      }
    }

    // 3. Message Payload Validation
    const message = formData.messagePayload;
    
    const sqlInjectionRegex = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|EXEC|EXECUTE)\b)|(--|\/\*|\*\/)/i;
    const htmlTagRegex = /<\/?[\w\s="/.':;#-\/]+>/gi;

    if (!message || message.trim().length === 0) {
      newErrors.messagePayload = 'Message payload is required.';
    } else if (message.length > 5000) {
      newErrors.messagePayload = 'Message exceeds maximum length (5000 chars).';
    } else if (sqlInjectionRegex.test(message)) {
      newErrors.messagePayload = 'Invalid content detected (SQL pattern).';
    } else if (htmlTagRegex.test(message)) {
      newErrors.messagePayload = 'HTML tags are not allowed in the message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sanitized data that would be sent to the server
      const sanitizedData = {
        senderId: formData.senderId.trim(),
        manaFrequency: formData.manaFrequency.toLowerCase().trim(),
        messagePayload: formData.messagePayload.replace(/<\/?[\w\s="/.':;#-\/]+>/gi, '')
      };
      
      console.log('Transmitting data:', sanitizedData);
      
      setSubmitStatus('success');
      setFormData({ senderId: '', manaFrequency: '', messagePayload: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative w-full py-24 px-6 min-h-[80vh] flex items-center justify-center">
      
      {/* Portal Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dungeon opacity-30 rounded-full pointer-events-none blur-[50px] z-0"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="dungeon-card p-10 md:p-14 relative overflow-hidden text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-shadow-neon/40 transition-all duration-700"
        >
          {/* Portal rings */}
          <div className="absolute top-0 left-0 w-full h-full border border-shadow-violet/10 rounded-2xl animate-[spin_60s_linear_infinite] pointer-events-none"></div>
          <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-shadow-blue/5 rounded-2xl animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>

          <div className="mb-8">
            <span className="sys-label text-shadow-neon block mb-4">Gate Detected</span>
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase text-white glow-text mb-6">
              Open Communication Portal
            </h2>
            <p className="text-slate-400 font-light max-w-md mx-auto">
              Ready to clear the next dungeon together? Send a message to initiate the raid.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto relative z-20">
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Sender ID</label>
              <input 
                type="text" 
                name="senderId"
                value={formData.senderId}
                onChange={handleChange}
                className={`w-full bg-shadow-black/50 border ${errors.senderId ? 'border-red-500/50 focus:border-red-500' : 'border-shadow-violet/30 focus:border-shadow-neon'} rounded px-4 py-3 text-white font-inter focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all`}
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
              {errors.senderId && <p className="text-red-400 text-sm mt-1 font-inter">{errors.senderId}</p>}
            </div>
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Mana Frequency (Email)</label>
              <input 
                type="email" 
                name="manaFrequency"
                value={formData.manaFrequency}
                onChange={handleChange}
                className={`w-full bg-shadow-black/50 border ${errors.manaFrequency ? 'border-red-500/50 focus:border-red-500' : 'border-shadow-violet/30 focus:border-shadow-neon'} rounded px-4 py-3 text-white font-inter focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all`}
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
              {errors.manaFrequency && <p className="text-red-400 text-sm mt-1 font-inter">{errors.manaFrequency}</p>}
            </div>
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Message Payload</label>
              <textarea 
                rows="4"
                name="messagePayload"
                value={formData.messagePayload}
                onChange={handleChange}
                className={`w-full bg-shadow-black/50 border ${errors.messagePayload ? 'border-red-500/50 focus:border-red-500' : 'border-shadow-violet/30 focus:border-shadow-neon'} rounded px-4 py-3 text-white font-inter focus:outline-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all resize-none`}
                placeholder="Detail the mission..."
                disabled={isSubmitting}
              ></textarea>
              {errors.messagePayload && <p className="text-red-400 text-sm mt-1 font-inter">{errors.messagePayload}</p>}
            </div>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded text-center font-inter text-sm">
                Message successfully transmitted. Standby for response.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded text-center font-inter text-sm">
                Transmission failed. Please check your connection and try again.
              </div>
            )}

            <div className="text-center pt-4">
              <button 
                type="submit" 
                className={`btn-solid w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
              </button>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
