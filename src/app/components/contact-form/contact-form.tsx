"use client"
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Send from "@/Kings & Queens/Group 192.svg"
import Image from 'next/image';
export default function ContactForm() {
  const [formData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });




  return (
    <div className="min-h-screen bg-[#141414]   text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className=" p-8 rounded-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1  gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-[200] mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    // onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] "
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
                    // onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] "
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
                  // onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] "
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
                  // onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#141414] rounded-lg border border-[#484848] "
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="relative mb-6"> {/* Added relative for absolute positioning of the icon, and mb-6 for spacing */}
                <label htmlFor="message" className="block text-white text-sm font-light mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // Make sure formData.message is defined and handleInputChange updates it
                  // onChange={handleInputChange} // Make sure handleInputChange is defined
                  required
                  rows={4} // Reduced rows to match the image's height more closely
                  className="
          w-full py-3 pl-4 pr-16  
          bg-[#141414] text-gray-300 placeholder-gray-500
          rounded-xl border border-[#484848]
          focus:outline-none focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700]
          resize-none  
          custom-textarea-corner  "
                  placeholder="Message" // Changed placeholder text to "Message" as per image"
                  style={{
                    // For the custom cut corner, you'd typically use clip-path or a pseudo-element.
                    // Tailwind doesn't have a direct class for this shape.
                    // Let's create a custom class for it.
                    // border-bottom-right-radius: 0; is not enough
                    // We need a more complex shape or a pseudo-element
                  }}
                ></textarea>

                {/* Send Icon Button */}
                <button
                  type="button" // Use type="button" to prevent form submission if this is part of a larger form
                  className="
          absolute bottom-3 right-3  
          border border-[#141414]
          w-12 h-12 // Fixed size for the button
          rounded-full // Circular button
          flex items-center justify-center // Center the icon
          hover:opacity-90 transition-opacity duration-200
           transform rotate-45 // Rotate the icon for the airplane effect
        "
                  // onClick={handleSendMessage} // Add your send message handler here
                  aria-label="Send Message"
                >

                  <Image alt=';l' src={Send} className="-mt-1 -mr-1 w-12 h-12 transform -rotate-45" // Adjust icon position and initial rotation
                  />
                </button>
              </div>

            </div>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white-800 rounded-lg overflow-hidden   relative">
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

          </div>
        </div>
      </div>
    </div>
  );
}