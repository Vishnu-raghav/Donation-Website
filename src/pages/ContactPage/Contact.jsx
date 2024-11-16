
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {

    console.log(data);
    setSuccessMessage('Your message has been sent successfully!');
    reset();
    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white from-green-400 via-blue-500 to-purple-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Have any questions? We'd love to hear from you. Drop us a message, and we'll get back to you shortly.
        </p>

        {/* Success message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
            <p className="text-center">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: { 
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 
                  message: 'Invalid email address' 
                }
              })}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              {...register('message', { required: 'Message is required' })}
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your message here"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;





