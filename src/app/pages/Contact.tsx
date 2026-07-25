import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import clsx from "clsx";

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Ready to schedule a collection or have a question about our services? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
             <div className="bg-neutral-900 p-8 border border-neutral-800">
               <h3 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-8">Get In Touch</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 shrink-0 text-amber-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Phone</h4>
                      <p className="text-neutral-400 mb-1">020 1234 5678</p>
                      <p className="text-neutral-500 text-sm">Mon-Fri 8am-7pm</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 shrink-0 text-amber-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Email</h4>
                      <p className="text-neutral-400 mb-1">concierge@knqdcl.co.uk</p>
                      <p className="text-neutral-500 text-sm">We reply within 2 hours</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 shrink-0 text-amber-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide mb-1">Location</h4>
                      <p className="text-neutral-400 mb-1">123 High Street, Kensington</p>
                      <p className="text-neutral-400">London, W8 5SA</p>
                    </div>
                 </div>
               </div>
             </div>

             {/* Map Placeholder */}
             <div className="w-full h-64 bg-neutral-800 relative group overflow-hidden border border-neutral-800">
                {/* Normally you would embed a Google Map here */}
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                  <p className="text-neutral-500 uppercase tracking-widest text-xs">Map Loading...</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white text-black text-xs px-2 py-1 font-bold">
                   Google Maps
                </div>
             </div>
          </div>

          {/* Contact/Booking Form */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Book a Collection / Enquiry</h3>
            
            {isSubmitted ? (
              <div className="bg-green-900/30 border border-green-500/50 p-6 text-center">
                 <h4 className="text-green-400 font-bold text-xl mb-2">Message Sent!</h4>
                 <p className="text-neutral-300">Thank you for contacting Kings & Queens. We will be in touch shortly to confirm your details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">First Name</label>
                    <input 
                      {...register("firstName", { required: true })}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Last Name</label>
                    <input 
                      {...register("lastName", { required: true })}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                     {errors.lastName && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Phone</label>
                    <input 
                      {...register("phone", { required: true })}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="07123 456789"
                    />
                     {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-neutral-400">Email</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                     {errors.email && <span className="text-red-500 text-xs">Valid email required</span>}
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-neutral-400">Service Required</label>
                   <select 
                      {...register("service")}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                   >
                     <option value="collection">Book a Collection</option>
                     <option value="drycleaning">Dry Cleaning Enquiry</option>
                     <option value="alterations">Alterations Enquiry</option>
                     <option value="other">Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest text-neutral-400">Message / Address</label>
                   <textarea 
                      {...register("message", { required: true })}
                      rows={4}
                      className="w-full bg-neutral-950 border border-neutral-700 text-white p-3 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Please include your pickup address if booking a collection..."
                   ></textarea>
                    {errors.message && <span className="text-red-500 text-xs">Required</span>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 text-neutral-950 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}