import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const Footer = () => {

    return(
        <footer className="w-full bg-gray-900 text-gray-300 py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-white">Fobbs Rolfenson</h2>
      <p className="mt-2 text-sm text-gray-400">
        Freelance Web Developer • Building modern, fast & responsive websites.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#about" className="hover:text-amber-400">About</a></li>
        <li><a href="#projects" className="hover:text-amber-400">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
      <div className="flex space-x-4">
        <a href="https://github.com/marshmelly" target="_blank" rel="noopener noreferrer" 
           className="hover:text-amber-400"><FaGithub/>
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/fobbs-rolfenson/" target="_blank" rel="noopener noreferrer" 
           className="hover:text-amber-400"><FaLinkedin/>
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="https://www.instagram.com/side_view.dev/" target="_blank" rel="noopener noreferrer" 
           className="hover:text-amber-400"><FaInstagram/>
          <i className="fab fa-twitter text-xl"></i>
        </a>
          <a href="https://x.com/Fobbs_Rolfenson" target="_blank" rel="noopener noreferrer" 
           className="hover:text-amber-400"><FaX/>
          <i className="fab fa-twitter text-xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom line */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Fobbs Rolfenson. All rights reserved.
  </div>
</footer>

    )
}