import { PlaceholdersAndVanishInput } from "../ui/SearchInput";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function PlaceholdersAndVanishInputDemo() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);
    
  const placeholders = [
    "Create a beautiful landing page",
    "How to make a user-friendly website?",
    "Where to find the best ui resources",
    "Generate the best card for my website",
    "How to use tailwind",
  ];

 const handleChange = (e) => {
      console.log("changed");
    // navigate('/ai/watermelon');
  };
  const onSubmit = (e) => {
      e.preventDefault();
      setTimeout(() => {
        navigate('/ai/watermelon');    
      }, 1000)
  };
  return (
    (<div className="h-[40rem] flex flex-col justify-center  items-center px-4 ">
      <h2
        className={`mb-10 z-10 sm:mb-20 text-xl text-center sm:text-5xl ${theme === "light" ? "bg-white text-black" : "bg-neutral-950 text-white"}`}>
        Create Any Component with Watermelon
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} theme={theme}/>
    </div>)
  );
}
