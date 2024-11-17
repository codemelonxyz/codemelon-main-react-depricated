// import React, { useState, useContext } from 'react';
// import { Home, Info, Settings, Mail, Menu } from 'lucide-react';
// import { ThemeContext } from '../../ThemeContext';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, setTheme } = useContext(ThemeContext);

//   const menuItems = [
//     { icon: <Home size={20} />, label: 'Home', href: '#' },
//     { icon: <Info size={20} />, label: 'About', href: '#' },
//     { icon: <Settings size={20} />, label: 'Services', href: '#' },
//     { icon: <Mail size={20} />, label: 'Contact', href: '#' },
//   ];

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <>
//       <header className="flex items-center justify-between p-4 bg-slate-900 text-white">
//         <h1 className="text-xl font-bold">Watermelon AI</h1>
//         <button
//           onClick={toggleTheme}
//           className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
//         >
//           Toggle Theme
//         </button>
//       </header>
//       <div
//         className={`fixed top-0 left-0 h-screen bg-slate-900 text-white transition-all duration-300 ease-in-out ${
//           isOpen ? 'w-64' : 'w-16'
//         } shadow-lg`}
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//       >
//         <div className="p-4 flex items-center justify-between">
//           <span className={`font-bold text-xl whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
//             isOpen ? 'opacity-100' : 'opacity-0'
//           }`}>
//             Dashboard
//           </span>
//           <Menu className="min-w-5" size={20} />
//         </div>

//         <nav className="mt-8">
//           <ul className="space-y-2">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors duration-200 group"
//                 >
//                   <span className="inline-block min-w-5">
//                     {item.icon}
//                   </span>
//                   <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300 ${
//                     isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
//                   }`}>
//                     {item.label}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//       <main className="ml-16 p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg hover:bg-slate-700 cursor-pointer transition-colors duration-200">
//             <h2 className="text-2xl font-bold mb-4">New Chat</h2>
//             <p>Start a new conversation with Watermelon AI.</p>
//           </div>
//           <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg hover:bg-slate-700 cursor-pointer transition-colors duration-200">
//             <h2 className="text-2xl font-bold mb-4">Previous Chat</h2>
//             <p>Continue your previous conversations with Watermelon AI.</p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Sidebar;

"use client";
import React, { useState, useContext } from 'react';
import { BackgroundBeams } from "../../components/ui/background-beams";
import { Cover } from "../../components/ui/cover";
import { ThemeContext } from '../../ThemeContext';

export function Watermelon() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="h-[calc(100vh)] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Be the part of the journey to the future of AI. 
          Join the waitlist to get early access to Watermelon AI.
        </p>
        <div className="flex justify-center mt-4">
          <button ><Cover>Join the waitlist</Cover></button>
        </div>
      </div>
      {theme === 'dark' ? <BackgroundBeams /> : null}
    </div>
  );
}

export default Watermelon;
