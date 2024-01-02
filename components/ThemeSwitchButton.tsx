'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoIosSunny } from 'react-icons/io';
import { LuMoonStar } from 'react-icons/lu';

const ThemeSwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="flex flex-row px-6 py-4 transition hover:-translate-y-1 hover:scale-110 rounded-lg hover:bg-stone-500"
    >
      {theme === 'light' ? <LuMoonStar size="25" /> : <IoIosSunny size="25" />}
      Toggle Theme
    </button>
  );
};

export default ThemeSwitchButton;
