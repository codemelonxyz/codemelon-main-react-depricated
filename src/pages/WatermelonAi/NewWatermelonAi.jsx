import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import { BackgroundBeams } from "../../components/ui/background-beams.jsx";
import { ThemeContext } from "../../ThemeContext.js";
import { useAuth } from "../../contexts/AuthContext.jsx";
import WatermelonAPI from "../../services/watermelon.api.js";

const WatermelonAi = () => {
  const { token } = useAuth();
  const { theme } = useContext(ThemeContext);
  const [currentId, setCurrentId] = useState("");
  const [currentChat, setCurrentChat] = useState({});
  const [chats, setChats] = useState([]);
  const [hasFetchedChats, setHasFetchedChats] = useState(false);

  useEffect(() => {
    if (!token || hasFetchedChats) return;
    setHasFetchedChats(true);
    fetchChats();
  }, [token, hasFetchedChats]);

  const fetchChats = async () => {
    try {
      const data = await WatermelonAPI.getChats(token.token);
      if (data.chats.length === 0) {
        await createNewChat();
      } else {
        setCurrentId(data.chats[0].id);
        setChats(data.chats);
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const createNewChat = async () => {
    try {
      const data = await WatermelonAPI.createChat(token.token);
      setCurrentId(data.id);
      setChats([data]);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="bg-neutral-950 h-full overflow-hidden shadow-2xl flex flex-col sm:flex-row">
        <Sidebar
          setChats={setChats}
          token={token}
          currentId={currentId}
          chats={chats}
          setCurrentChat={setCurrentChat}
          setCurrentId={setCurrentId}
        />
        <MainContent currentId={currentId} currentChat={currentChat} />
      </div>
      {theme === "dark" && <BackgroundBeams />}
    </div>
  );
};

export default WatermelonAi;
