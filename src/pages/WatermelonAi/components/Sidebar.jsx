import { useEffect, useState } from 'react';
import { FiPlus, FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import WatermelonAPI from '../../../services/watermelon.api';
import { useAuth } from '../../../contexts/AuthContext'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState([{ title: 'No chats till now', description: '' }]);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-lg text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={clsx(
        "fixed sm:static inset-0 w-80 h-full p-4 flex flex-col transition-transform duration-300 ease-in-out z-40 border-r-2 border-gray-800 rounded-lg",
        "sm:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="mb-6 mt-12 sm:mt-0">
          <div className="bg-gray-800 rounded-lg p-2 flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full text-gray-300 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Chats</span>
          </div>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="p-2 rounded-lg hover:bg-gray-800 text-gray-300 cursor-pointer mb-1"
              onClick={openChat(chat.id)}
            >
              <div className="text-sm">{chat.id}</div>
              <div className="text-xs text-gray-500 truncate">{chat.description}</div>
            </div>
          ))}
        </div>

        <button className="mt-4 m-1 bg-[#7680af] text-white rounded-lg p-2 flex items-center justify-center hover:bg-[#525c8c]" onClick={handleNewChat}>
          <FiPlus className="mr-2" />
          New chat
        </button>
      </div>
    </>
  );
};

export default Sidebar;
