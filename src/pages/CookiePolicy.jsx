import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { BackgroundBeams } from '../components/ui/background-beams';

function CookiePolicy() {
  const { theme } = useContext(ThemeContext);
  const pageClass =
    theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black';
  
  return (
    <div className={`min-h-screen ${pageClass} p-8`}>
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device by your web browser. They help websites remember information about your visit.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Cookies</h2>
        <p>We use cookies for various purposes, including:</p>
        <ul className="list-disc list-inside">
          <li>Understanding how users navigate our platform</li>
          <li>Enhancing user experience</li>
          <li>Personalizing content and advertisements</li>
          <li>Analyzing platform performance</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside">
          <li><strong>Essential Cookies:</strong> Necessary for the basic functioning of our website.</li>
          <li><strong>Performance Cookies:</strong> Collect information on how users interact with our platform.</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver personalized advertisements.</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">4. Managing Cookies</h2>
        <p>You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
        <p>To learn more about how to manage cookies, visit <a href="https://www.allaboutcookies.org" className="underline">www.allaboutcookies.org</a>.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to This Cookie Policy</h2>
        <p>We may update our Cookie Policy from time to time. Any changes will be posted on this page.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>If you have any questions about our Cookie Policy, please contact us at <a href="mailto:support@codemelon.xyz" className="underline">support@codemelon.xyz</a>.</p>
      </section>
      {/* {theme === 'dark' ? <BackgroundBeams /> : null} */}
    </div>
  );
}

export default CookiePolicy;
