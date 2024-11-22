"use client";
import React, { useContext, useState, useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Cover } from "../components/ui/cover";
import { ThemeContext } from "../ThemeContext";
import waitlistApi from "../services/waitlist.api";
import { useAuth } from "../contexts/AuthContext";

export function Waitlist() {
  const { theme } = useContext(ThemeContext);
  const [joined, setJoined] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await waitlistApi.checkUser(token.token);
        if (response.data) {
          setJoined(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserStatus();
  }, [token]);

  const handleJoin = async () => {
    try {
      const response = await waitlistApi.joinWaitlist(token.token);
      console.log(response);
      setJoined(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[calc(100vh)] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        {joined ? (
          <>
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Thankyou for joining the waitlist
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              We will notify you as soon as we are ready to launch.
            </p>
          </>
        ) : (
          <>
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Be the part of the journey to the future of AI. Join the waitlist
              to get early access to Watermelon AI.
            </p>
            <div className="flex justify-center mt-4">
              <button onClick={handleJoin}>
                <Cover>Join the waitlist</Cover>
              </button>
            </div>
          </>
        )}
      </div>
      {theme === "dark" && <BackgroundBeams />}
    </div>
  );
}

export default Waitlist;
