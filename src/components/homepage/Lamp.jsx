"use client";
import React, { useContext, useState, useEffect } from "react"; // Added useState and useEffect
import { AnimatePresence, motion } from "framer-motion"; // Added AnimatePresence
import { cn } from "../../lib/utils";
import { ThemeContext } from "../../ThemeContext";

const words = [
  { text: "Code", gradient: "from-blue-500 to-cyan-500" },
  { text: "Projects", gradient: "from-purple-500 to-pink-500" },
  { text: "Dreams", gradient: "from-green-500 to-emerald-500" },
  { text: "Future", gradient: "from-orange-500 to-yellow-500" }
];

export function Lamp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LampContainer theme={theme}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
       <h1 className={`mt-8 text-center text-4xl font-bold tracking-tight md:text-7xl ${theme === "dark" ? "text-slate-600" : "text-black"}`}>
          Build{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.3, ease: "easeIn" }
              }}
              className={`inline-block bg-gradient-to-r ${words[currentIndex].gradient} bg-clip-text text-transparent`}
            >
              {words[currentIndex].text}
            </motion.span>
          </AnimatePresence>
          <br />
          <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className={`${theme === "dark" ? "bg-gradient-to-r from-slate-200/60 to-slate-500/60 bg-clip-text text-transparent" : "bg-gradient-to-r from-black to-slate-600 bg-clip-text text-transparent"} `}
          >
            the extraordinary way
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 text-center text-slate-400"
        >
          Transform your ideas into reality
        </motion.p>
      </motion.div>
    </LampContainer>
  );
}


export const LampContainer = ({
  children,
  className,
  theme
}) => {
    return (
    <div
      className={cn(
        `relative flex min-h-screen flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} w-full z-0`,
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div
            className={`absolute w-[100%] left-0 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
          <div
            className={`absolute w-40 h-[100%] left-0 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div
            className={`absolute w-40 h-[100%] right-0 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`} />
          <div
            className={`absolute w-[100%] right-0 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`} />
        </motion.div>
        <div
          className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} blur-2xl`}></div>
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

        <div
          className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] ${theme === 'dark' ? 'bg-neutral-950' : 'bg-white'} `}></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
