import React from "react";
import { 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-8 relative overflow-hidden pt-10">
      <div className="max-w-5xl mx-auto">
    
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p className="text-gray-400 text-xl pt-1">✨ I'm currently available for freelance work or full-time positions. ✨</p>
        </div>

        <div className="bg-white/5 p-8 md:p-14 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white">Contact Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Email Card */}
              <a 
                href="mailto:paerwapantwong@gmail.com" 
                className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <EnvelopeIcon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Email</p>
                  <p className="text-white font-medium break-all text-sm leading-relaxed">
                    paerwapantwong@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <div 
                className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Phone</p>
                  <p className="text-white font-medium text-base">061-607-3426</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/paerwa-pantawong/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#0A66C2]/60 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-4 bg-[#0A66C2]/20 rounded-2xl group-hover:scale-110 transition-transform">
                  {/* LinkedIn Official SVG Icon */}
                  <svg 
                    className="w-8 h-8 fill-[#0A66C2]" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">LinkedIn</p>
                  <p className="text-white font-medium text-base">Paerwa Pantawong</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;