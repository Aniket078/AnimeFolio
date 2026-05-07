import React, { useState } from 'react';

const ContactForm = () => {
  const [senderId, setSenderId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    const errors = {};

    // Sender ID Validation
    const trimmedSenderId = senderId.trim();
    if (!trimmedSenderId) {
      errors.senderId = 'Sender ID is required.';
    } else if (trimmedSenderId.length < 3 || trimmedSenderId.length > 50) {
      errors.senderId = 'Sender ID must be between 3 and 50 characters.';
    } else if (!/^[a-zA-Z0-9]+$/.test(trimmedSenderId)) {
      errors.senderId = 'Sender ID must be alphanumeric only.';
    }

    // Email Validation
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Invalid email format.';
    }

    // Message Validation
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      errors.message = 'Message is required.';
    } else if (trimmedMessage.length < 1 || trimmedMessage.length > 5000) {
      errors.message = 'Message must be between 1 and 5000 characters.';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      console.log('Validation Errors:', errors);
      return;
    }

    console.log('Form submitted:', { senderId, email, message });
    // Add submit logic here later
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="senderId" className="block text-sm font-medium text-slate-300 mb-1.5">
            Sender ID
          </label>
          <input
            type="text"
            id="senderId"
            value={senderId}
            onChange={(e) => setSenderId(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your Sender ID"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
            MANA Frequency (Email)
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
            Message Payload
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
