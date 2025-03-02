export default function Footer() {
    return (
      <footer className="relative mt-20 bg-[#0a0f1e] bg-opacity-80 backdrop-blur-lg border border-blue-500/50 text-gray-300 text-center py-6 rounded-t-2xl shadow-lg">
        <p className="text-sm">
          Coded by{" "}
          <span 
          
          className="text-cyan-400 font-semibold hover:text-cyan-300 transition">
            <a href="https://amitfr.tech">Amit</a>
          </span>
        </p>
        <a
          href="https://github.com/Amit00008/Taskexpo"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-300 hover:text-blue-500 transition-all text-sm"
        >
          ⭐ Open Source on GitHub
        </a>
      </footer>
    );
  }
  