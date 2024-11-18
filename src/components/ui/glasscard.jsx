import React from 'react';

export function GlassmorphicCard({ children, className = '', backgroundColor = 'bg-gradient-to-br from-[#4682eb] via-[#2196f3] to-[#01beff]' }) {
  return (
    <div className={`relative w-[400px] h-[300px] m-8 transition-transform duration-250 [perspective:500px] group ${className}`}>
      <div className={`absolute inset-0 z-[-1] w-full h-full rounded-[32px] transition-transform duration-250 [transform-style:preserve-3d] origin-bottom-right rotate-[10deg] shadow-[16px_0_40px_rgba(228,228,228,0.25)] ${backgroundColor} group-hover:[transform:translateZ(20px)_rotateZ(15deg)_rotateX(-20deg)_rotateY(-20deg)]`} />
      <div className="absolute inset-0 z-[1] w-full h-full rounded-[32px] bg-white/20 backdrop-blur-xl transition-transform duration-250 [transform-style:preserve-3d] origin-top-left overflow-hidden group-hover:[transform:translateZ(80px)_translateY(-5px)_rotateX(15deg)_rotateY(15deg)]">
        {children}
      </div>
    </div>
  );
}
