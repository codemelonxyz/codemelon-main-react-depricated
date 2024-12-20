export const themes = {
  light: {
    background: 'bg-neutral-50',
    card: 'bg-white',
    text: 'text-gray-800',
    subtext: 'text-gray-500',
    accent: 'text-cyan-600',
    button: {
      primary: 'bg-cyan-600 text-white hover:bg-[#525c8c]',
      secondary: 'text-gray-600 hover:bg-gray-100',
      disabled: 'text-gray-400',
    },
    option: {
      selected: 'bg-cyan-600 text-white',
      default: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    },
    progress: {
      bg: 'bg-gray-200',
      fill: 'bg-cyan-600',
    },
    input: {
      base: 'border border-gray-200 focus:border-cyan-500 focus:ring-1 hover:bg-[#525c8c] outline-none',
      text: 'bg-gray-50',
      select: 'bg-gray-50',
    },
  },
  dark: {
    background: 'bg-neutral-950',
    card: 'bg-gray-800',
    text: 'text-gray-100',
    subtext: 'text-gray-400',
    accent: 'text-[#7680af]',
    button: {
      primary: 'bg-[#7680af] text-white hover:bg-[#525c8c]',
      secondary: 'text-gray-300 hover:bg-gray-700',
      disabled: 'text-gray-600',
    },
    option: {
      selected: 'bg-cyan-500 text-white',
      default: 'bg-gray-700 hover:bg-gray-600 text-gray-200',
    },
    progress: {
      bg: 'bg-gray-700',
      fill: 'bg-[#7680af]',
    },
    input: {
      base: 'border border-gray-600 focus:border-[#7680af] focus:ring-1 focus:ring-[#7680af] outline-none',
      text: 'bg-gray-700 text-gray-100',
      select: 'bg-gray-700 text-gray-100',
    },
  },
};
