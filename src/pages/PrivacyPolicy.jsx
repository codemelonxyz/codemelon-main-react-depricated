import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function PrivacyPolicy() {
  const { theme } = useContext(ThemeContext);
  const pageClass =
    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
  
  return (
    <div className={`min-h-screen ${pageClass} p-8`}>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>Welcome to CodeMelon. We are committed to protecting your privacy and ensuring you have a positive experience on our platform.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">2. Data We Collect</h2>
        <p>We collect the following information to provide better services to our users:</p>
        <ul className="list-disc list-inside">
          <li>Email Address</li>
          <li>Device Location</li>
          <li>Device Information</li>
          <li>System Information</li>
          <li>Usage Data</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <p>Collected data is used for the following purposes:</p>
        <ul className="list-disc list-inside">
          <li>Enhancing user experience</li>
          <li>Personalizing content and recommendations</li>
          <li>Training our AI models to better assist you</li>
          <li>Improving our platform's functionality and performance</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">5. Sharing Your Information</h2>
        <p>We do not share your personal information with third parties except in the following cases:</p>
        <ul className="list-disc list-inside">
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and property</li>
        </ul>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>You have the right to access, update, or delete the information we have on you. You can request these changes by contacting us directly.</p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@codemelon.xyz" className="underline">support@codemelon.xyz</a>.</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;