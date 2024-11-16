
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Company Section */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-white">Company</h3>
          <div className="mt-4 flex justify-center flex-wrap">
            <Link to="/about" className="mx-6 text-lg hover:text-blue-400">About Us</Link>
            <Link to="/blog" className="mx-6 text-lg hover:text-blue-400">Blog</Link>
            <Link to="/careers" className="mx-6 text-lg hover:text-blue-400">Careers</Link>
            <Link to="/contact" className="mx-6 text-lg hover:text-blue-400">Contact</Link>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Vishnu-raghav" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/vishnu-raghav-093017261/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://x.com/VishnuR77165713" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/just.vishu_/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-8 text-sm text-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
