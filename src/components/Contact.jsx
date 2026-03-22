import React from "react";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-8 relative overflow-hidden pt-10">
      {/* 1. ขยาย max-w จาก 3xl เป็น 5xl เพื่อให้กล่องกว้างขึ้น */}
      <div className="max-w-5xl mx-auto">
    
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p className="text-gray-400 text-xl pt-1">✨ I'm currently available for freelance work or full-time positions. ✨</p>
        </div>

        {/* 2. ปรับ Padding (p-12) และความโค้งให้ดูพรีเมียมขึ้น */}
        <div className="bg-white/5 p-8 md:p-14 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white">Contact Information</h3>
            </div>

            {/* 3. ปรับ grid ให้แสดง 3 คอลัมน์ในหน้าจอใหญ่ (md:grid-cols-3) เพื่อให้กล่องขยายเต็มพื้นที่แนวนอน */}
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

              {/* Facebook Card */}
              <a 
                href="https://www.facebook.com/paerwa.pantawong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-4 bg-pink-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                  <UserGroupIcon className="w-8 h-8 text-pink-400" />
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Facebook</p>
                  <p className="text-white font-medium text-base">Paerwa Pantawong</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;