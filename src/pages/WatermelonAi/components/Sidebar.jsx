import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import clsx from "clsx";
import WatermelonAPI from "../../../services/watermelon.api";

const Sidebar = ({ token, currentId, chats, setCurrentId, setChats }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleDeleteChat = async (chatId) => {
    try {
      setDeletingId(chatId);
      await WatermelonAPI.deleteChat(chatId, token.token);
      setCurrentId(chats[1].id);
      setChats((prevChats) => prevChats.filter(chat => chat.id !== chatId));
    } catch (err) {
      console.error("Error deleting chat:", err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleNewChat = async () => {
    try {
      const data = await WatermelonAPI.createChat(token.token);
      setCurrentId(data.chat_id);
      setChats((prevChats) => [{id: data.chat_id}, ...prevChats]);
    } catch (err) {
      console.error("Error creating chat:", err);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 sm:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className={clsx(
          "sm:hidden fixed top-4 left-4 z-50 p-2 rounded-lg",
          "bg-gray-800/90 backdrop-blur-sm text-white",
          "hover:bg-gray-700 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        )}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed sm:static inset-y-0 left-0 w-80 h-full bg-gray-900/95 backdrop-blur-sm",
          "p-4 flex flex-col transition-all duration-300 ease-out z-40",
          "border-r border-gray-800/50 shadow-xl shadow-black/20",
          "sm:translate-x-0 sm:backdrop-blur-none sm:bg-transparent",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-6 mt-12 sm:mt-0 transform transition-all duration-300">
          <div className={clsx(
            "bg-gray-800/70 rounded-xl p-2 flex items-center",
            "ring-1 ring-gray-700/50 shadow-lg",
            "focus-within:ring-2 focus-within:ring-gray-600 transition-all duration-200"
          )}>
            <input
              type="text"
              placeholder="Search chats..."
              className={clsx(
                "bg-transparent w-full text-gray-300 placeholder-gray-500",
                "focus:outline-none px-2"
              )}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium px-2">Chats</span>
          </div>

          <div className="space-y-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={clsx(
                  "group relative p-3 rounded-lg cursor-pointer",
                  "transform transition-all duration-200 ease-out",
                  "hover:bg-gray-800/70 hover:scale-[1.02]",
                  "active:scale-[0.99]",
                  currentId === chat.id && "bg-gray-800/90 shadow-md"
                )}
                onClick={() => setCurrentId(chat.id)}
              >
                <div className={clsx(
                  "flex justify-between items-center",
                  deletingId === chat.id && "opacity-50"
                )}>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-200 font-medium truncate">{chat.id}</div>
                    <div className="text-xs text-gray-500 truncate mt-0.5">
                      {chat.description || "New conversation"}
                    </div>
                  </div>

                  <button
                    className={clsx(
                      "text-gray-500 p-1.5 rounded-lg opacity-0 -translate-x-2",
                      "group-hover:opacity-100 group-hover:translate-x-0",
                      "hover:text-red-400 hover:bg-red-400/10",
                      "transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-red-500/40"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteChat(chat.id);
                    }}
                    disabled={deletingId === chat.id}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNewChat}
          className={clsx(
            "mt-4 p-3 rounded-lg w-full",
            "bg-[#7680af] text-white font-medium",
            "hover:bg-[#525c8c] active:bg-indigo-700",
            "transform transition-all duration-200",
            "hover:scale-[1.02] active:scale-[0.98]",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900",
            "flex items-center justify-center gap-2"
          )}
        >
          <Plus size={20} />
          <span>New chat</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
