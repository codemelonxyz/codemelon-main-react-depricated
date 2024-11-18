import React, { useContext, useState } from "react";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ThemeContext } from "../../ThemeContext";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { GlassmorphicCard } from "../../components/ui/glasscard";
import { Sparkles, Brain } from "lucide-react";

function WatermelonAi() {
  const { theme } = useContext(ThemeContext);
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler
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

  const Logo = () => <div>Logo</div>; // Placeholder for Logo component
  const LogoIcon = () => <div>LogoIcon</div>; // Placeholder for LogoIcon component

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

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-950 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <Brain className="w-12 h-12 text-red-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
              Watermelon AI
            </h1>
          </div>
        </div>
        <div className="h-[100vh] flex items-center justify-center">
          <GlassmorphicCard backgroundColor="bg-gradient-to-br from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f]">
            <div className="h-full w-full p-8 flex flex-col items-center justify-center text-white">
              <Sparkles className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Want to prompt my self
              </h2>
              <p className="text-center text-white/80">
                You have to prompt yourself to create a components!!!
              </p>
            </div>
          </GlassmorphicCard>
          <GlassmorphicCard backgroundColor="bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[#43cea2]">
            <div className="h-full w-full p-8 flex flex-col items-center justify-center text-white">
              <Sparkles className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Create a component more customized
              </h2>
              <p className="text-center text-white/80">
                You can create a component more customized by providing some
                simple answers!
              </p>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </div>
  );
};

export default WatermelonAi;
