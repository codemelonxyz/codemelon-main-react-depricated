import { useState } from 'react';
import { FiPlus, FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';

// const folders = [
//   // { name: 'Work chats' },
//   // { name: 'Life chats' },
//   // { name: 'Projects chats' },
//   // { name: 'Clients chats' },
// ];

const chats = [
  { title: 'Plan a 3-day trip', description: 'A 3-day trip to see the northern lights in Norway...' },
  { title: 'Ideas for a customer loyalty program', description: 'Here are seven ideas for a customer loyalty...' },
  { title: 'Help me pick', description: 'Here are some gift ideas for your fishing-loving...' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Folders</span>
          </div>
          {folders.map((folder) => (
            <div
              key={folder.name}
              className="flex items-center p-2 rounded-lg hover:bg-gray-800 text-gray-300 cursor-pointer mb-1"
            >
              <FiFolder className="mr-2" />
              <span>{folder.name}</span>
            </div>
          ))}
        </div> */}

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Chats</span>
          </div>
          {chats.map((chat) => (
            <div
              key={chat.title}
              className="p-2 rounded-lg hover:bg-gray-800 text-gray-300 cursor-pointer mb-1"
            >
              <div className="text-sm">{chat.title}</div>
              <div className="text-xs text-gray-500 truncate">{chat.description}</div>
            </div>
          ))}
        </div>

        <button className="mt-4 m-1 bg-[#7680af] text-white rounded-lg p-2 flex items-center justify-center hover:bg-[#525c8c]">
          <FiPlus className="mr-2" />
          New chat
        </button>
      </div>
    </>
  );
};

export default Sidebar;
