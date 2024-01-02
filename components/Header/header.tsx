'use client';

import ThemeSwitchButton from '@/components/ThemeSwitchButton';

import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavLink from '../NavLink';
import { IoIosHome } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { TbWriting } from 'react-icons/tb';
import { MdMail } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const drawerStyles = {
    backgroundColor: theme === 'dark' ? '#0c0d0c' : '#faeee7',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem', // You can adjust the gap value as needed
    justifyContent: 'start',
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="header border-b-2 bg-background sticky top-0 z-10 p-4 flex justify-between">
        <div onClick={toggleDrawer}>
          <GiHamburgerMenu size="20" />
        </div>
        <div>Rahul Gupta</div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={drawerStyles}
      >
        <div className="absolute top-2 right-0" onClick={toggleDrawer}>
          <RxCross2 size="30" />
        </div>
        <NavLink icon={<IoIosHome size="25" />} NavText="Home" href="/" />
        <NavLink icon={<IoPerson size="25" />} NavText="About" href="/about" />
        <NavLink icon={<TbWriting size="25" />} NavText="Blog" href="/blog" />
        <NavLink
          icon={<FaCode size="25" />}
          NavText="Projects"
          href="/projects"
        />
        <NavLink
          icon={<MdMail size="25" />}
          NavText="Contact"
          href="/contact"
        />
        <ThemeSwitchButton />
      </Drawer>
    </>
  );
};

export default Header;
