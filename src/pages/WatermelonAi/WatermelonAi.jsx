import React, { useContext, useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ThemeContext } from "../../ThemeContext";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import {
  IconArrowLeft,
  IconPlus,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import Dashboard from "../../components/Dashboard"; // Add this import

function WatermelonAi() {
  const { theme } = useContext(ThemeContext);
  const links = [
    {
      label: "New Chat",
      href: "#",
      icon: (
        <IconPlus
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } dark:text-neutral-200 h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } dark:text-neutral-200 h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } dark:text-neutral-200 h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } dark:text-neutral-200 h-5 w-5 flex-shrink-0`}
        />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  const Logo = () => <div>Watermelon AI</div>; // Placeholder for Logo component
  const LogoIcon = () => <img
  src={"/assets/nobackgroundlogo.png"}
  alt="Logo"
  className="animate-rotate"
/>; // Placeholder for LogoIcon component

  return (
    <div
      className={cn(
        `flex flex-col md:flex-row ${
          theme === "dark" ? "bg-neutral-950" : "bg-white"
        } flex-1 w-screen mx-auto dark:border-neutral-700 overflow-hidden h-screen`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody
          className={`justify-between gap-10 ${
            theme === "dark" ? "bg-neutral-950" : "bg-white"
          }`}
        >
          <div
            className={`flex flex-col flex-1 overflow-y-auto overflow-x-hidden ${
              theme === "dark" ? "bg-neutral-950 text-white" : "text-black"
            }`}
          >
            {open ? <Logo /> : <LogoIcon />}
            <div className={`mt-8 flex flex-col gap-2`}>
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${
                    theme === "dark"
                      ? "bg-neutral-950 text-white"
                      : "text-black"
                  }`}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
      {theme === "dark" && <BackgroundBeams />}
    </div>
  );
}

export default WatermelonAi;
