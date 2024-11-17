import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const footerClass =
    theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black';

  return (
    <footer className={`w-full py-8 ${footerClass} relative`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <button onClick={() => navigate('/about')} className="hover:underline">
                  Our Story
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/team')} className="hover:underline">
                  Team
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/careers')} className="hover:underline">
                  Careers
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <button onClick={() => navigate('/services/api')} className="hover:underline">
                  API Integration
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/services/consulting')} className="hover:underline">
                  Consulting
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/services/support')} className="hover:underline">
                  Support
                </button>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <button onClick={() => navigate('/blog')} className="hover:underline">
                  Blog
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/help-center')} className="hover:underline">
                  Help Center
                </button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/faq')} className="hover:underline">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <button onClick={() => navigate('/privacy')} className="hover:underline">Privacy Policy</button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/terms')} className="hover:underline">Terms of Service</button>
              </li>
              <li className="mb-2">
                <button onClick={() => navigate('/cookies')} className="hover:underline">Cookie Policy</button>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} CodeMelon. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <button onClick={() => navigate('/sitemap')} className="hover:underline">Sitemap</button>
            <button onClick={() => navigate('/contact')} className="hover:underline">Contact</button>
            <button onClick={() => navigate('/feedback')} className="hover:underline">Feedback</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
