import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function BookCollection() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-rich-black min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">Book a Collection</h1>
          <p className="text-gray-400">Schedule your pickup in less than a minute.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative max-w-lg mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                step >= s ? "bg-gold-500 text-rich-black" : "bg-charcoal text-gray-500 border border-white/10"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        <motion.div 
          className="bg-charcoal border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif text-white mb-6 flex items-center">
                <MapPin className="text-gold-500 mr-3" /> Collection Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Postcode</label>
                  <input type="text" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors" placeholder="e.g. SW3 4PL" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Street Address</label>
                  <input type="text" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors" placeholder="House number and street" />
                </div>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-gold-500 text-rich-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors mt-4"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif text-white mb-6 flex items-center">
                <Calendar className="text-gold-500 mr-3" /> Date & Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Collection Date</label>
                  <input type="date" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Preferred Time Slot</label>
                  <select className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors">
                    <option>Morning (8am - 12pm)</option>
                    <option>Afternoon (12pm - 4pm)</option>
                    <option>Evening (4pm - 8pm)</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => setStep(1)}
                  className="w-1/3 border border-white/20 text-white font-bold uppercase tracking-wider py-4 hover:bg-white/5 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="w-2/3 bg-gold-500 text-rich-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-serif text-white mb-6 flex items-center">
                <Clock className="text-gold-500 mr-3" /> Contact Info
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-rich-black border border-white/10 text-white p-4 focus:border-gold-500 outline-none transition-colors" placeholder="07123 456789" />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                 <button 
                  onClick={() => setStep(2)}
                  className="w-1/3 border border-white/20 text-white font-bold uppercase tracking-wider py-4 hover:bg-white/5 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={() => alert("Booking functionality would connect to backend here!")}
                  className="w-2/3 bg-gold-500 text-rich-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
