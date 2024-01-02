import ThemeSwitchButton from '../ThemeSwitchButton';
import NavLink from '../NavLink';
import { IoIosHome } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { TbWriting } from 'react-icons/tb';
import { MdMail } from 'react-icons/md';

const Sidebar = () => {

  return (
    <aside className="sidebar border-r-2 p-4 flex flex-col items-center justify-start gap-4">
      <NavLink icon={<IoIosHome size="25" />} NavText="Home" href="/" />
      <NavLink icon={<IoPerson size="25" />} NavText="About" href="/about" />
      <NavLink icon={<TbWriting size="25" />} NavText="Blog" href="/blog" />
      <NavLink
        icon={<FaCode size="25" />}
        NavText="Projects"
        href="/projects"
      />
      <NavLink icon={<MdMail size="25" />} NavText="Contact" href="/contact" />
      <ThemeSwitchButton />
    </aside>
  );
};

export default Sidebar;
