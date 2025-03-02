"use client";

import { motion } from "framer-motion";
import { CheckCircle, BoltIcon, CalendarCheck, Settings2 } from "lucide-react";

const features = [
  
  { icon: <CalendarCheck size={28} />, title: "Smart Reminders", description: "Never miss a deadline with automated reminders and notifications." },
  { icon: <CheckCircle size={28} />, title: "Minimal & Fast UI", description: "Experience a lightweight and ultra-responsive interface." },
  { icon: <BoltIcon size={28} />, title: "AI-Powered Task Suggestions (Will be available soon)", description: "Get intelligent task suggestions based on your habits and workload." },

];

const steps = [
  { step: "1", title: "Sign Up", description: "Create your account in seconds using Clerk authentication." },
  { step: "2", title: "Add Your Tasks", description: "Start organizing your day by adding your tasks with a simple UI." },
  { step: "3", title: "Stay Productive", description: "Track progress, set reminders, and complete tasks efficiently." }
];

export default function FeaturesHowItWorks() {
  return (
    <section className="text-white py-16 px-6 md:px-16 ">
      {/* Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-400">Why TaskExpo?</h2>
        <p className="text-gray-400 mt-2">Boost your productivity with cutting-edge features.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#11172d] p-6 rounded-2xl shadow-lg border border-blue-500/50 backdrop-blur-md flex flex-col items-center text-center"
          >
            <div className="text-blue-300 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-300">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="text-center mt-24 mb-16">
        <h2 className="text-4xl font-bold text-blue-400">How It Works</h2>
        <p className="text-gray-400 mt-2">Get started in just 3 simple steps.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-[#11172d] p-6 rounded-2xl shadow-lg border border-blue-500/50 backdrop-blur-md flex flex-col items-center text-center w-[250px]"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#0a0f1e]">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold text-blue-300 mt-6">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
