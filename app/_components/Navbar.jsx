"use client";

import { useState } from "react";
import { Menu, X, Home, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { UserButton, useUser, SignInButton } from "@clerk/nextjs";

function NavItem({ href, icon, label, onClick }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={onClick}
      className="flex items-center space-x-2 text-blue-300 hover:text-blue-500 transition duration-300"
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0a0f1e] bg-opacity-80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg flex justify-between items-center w-[70%] max-w-[80%] border border-blue-500/50 z-50">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg font-semibold tracking-wider"
      >
        TaskExpo
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <NavItem href="#" icon={<Home size={20} />} label="Home" />
        <NavItem href="#about" icon={<User size={20} />} label="About" />
        <NavItem href="#projects" icon={<Briefcase size={20} />} label="Projects" />
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full text-sm shadow-md transition">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-opacity-30 backdrop-blur-lg shadow-lg border bg-black border-blue-500/50 rounded-lg px-6 py-4 flex flex-col space-y-4 text-center w-[80%] max-w-xs"
        >
          <NavItem href="#" icon={<Home size={20} />} label="Home" onClick={() => setIsOpen(false)} />
          <NavItem href="#about" icon={<User size={20} />} label="About" onClick={() => setIsOpen(false)} />
          <NavItem href="#projects" icon={<Briefcase size={20} />} label="Projects" onClick={() => setIsOpen(false)} />
          
          {/* Mobile Auth Buttons */}
          <div className="mt-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full text-sm shadow-md transition">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
