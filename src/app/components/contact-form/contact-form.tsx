"use client"
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Send from "@/Kings & Queens/Group 192.svg"
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-[200] mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] focus:border-[#C6AE64] focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-[200] mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] focus:border-[#C6AE64] focus:outline-none transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-[200] mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] focus:border-[#C6AE64] focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-[200] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] focus:border-[#C6AE64] focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="relative mb-6">
                <label htmlFor="message" className="block text-white text-sm font-light mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full py-3 pl-4 pr-16 bg-[#141414] text-gray-300 placeholder-gray-500 rounded-xl border border-[#484848] focus:border-[#C6AE64] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your dry cleaning needs..."
                />
                
                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute bottom-3 right-3 p-2 bg-[#C6AE64] hover:bg-[#B8A055] disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Image src={Send} alt="Send" width={20} height={20} />
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 text-sm">
                    &#10004; Message sent successfully! We&#39;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">
                    &#10060; {errorMessage}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm text-gray-300">Interactive Map View</p>
                  <p className="text-xs text-gray-400 mt-1">Entertainment District</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light mb-4">Get in Touch</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Have questions about our dry cleaning services? Need a quote for your garments? 
                    We&#39;re here to help! Send us a message and we&#39;ll respond as quickly as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#C6AE64] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Visit Our Store</h3>
                      <p className="text-gray-400 text-sm">
                        123 Main Street<br />
                        Your City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-[#C6AE64] mt-1 flex-shrink-0">&#128222;</div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-gray-400 text-sm">
                        <a href="tel:+1234567890" className="hover:text-[#C6AE64] transition-colors">
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-[#C6AE64] mt-1 flex-shrink-0">&#10069;</div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-gray-400 text-sm">
                        <a href="mailto:kingsandqueens.dcl@gmail.com" className="hover:text-[#C6AE64] transition-colors">
                          kingsandqueens.dcl@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-[#C6AE64] mt-1 flex-shrink-0">&#128336;</div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <div className="text-gray-400 text-sm space-y-1">
                        <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}