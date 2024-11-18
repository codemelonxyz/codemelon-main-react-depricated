import ComingSoonBlack from "./ComingSoonBlack.jpeg";
import ComingSoonWhite from "./ComingSoonWhite.jpg";
import ComingSoonBlack2 from "./ComingSoonBlack2.jpg";
import { FocusCards } from "../ui/focusCards";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export function GridCards() {
  const { theme } = useContext(ThemeContext);
  const cards = [
    {
      title: "Project Creator",
      src: theme === "dark" ? ComingSoonBlack : ComingSoonBlack2,
    },
    {
      title: "Contest Calender",
      src:  theme === "dark" ? ComingSoonBlack2 : ComingSoonWhite,
    },
    {
      title: "WaterMelonAi",
      src: theme === "dark" ? ComingSoonBlack : ComingSoonBlack2,
    },
    {
      title: "Ui Library",
      src: theme === "dark" ? ComingSoonBlack2 : ComingSoonWhite,
    },
    {
      title: "Deployments Made Easy",
      src: theme === "dark" ? ComingSoonBlack : ComingSoonBlack2,
    },
    {
      title: "Coming Soon",
      src: theme === "dark" ? ComingSoonBlack2 : ComingSoonWhite,
    },
  ];

  return <FocusCards cards={cards} />;
}
