import React from 'react';
import Link from 'next/link';

type NavLinkProps =  {
  icon: any;
  NavText: string;
  href: string;
}

const NavLink = ({ icon, NavText, href }: NavLinkProps) => {
  return (
    <Link
      href={`${href}`}
      className="rounded-xl py-4 px-6 gap-2 transition  flex flex-row hover:bg-stone-500 hover:-translate-y-1 hover:scale-110"
    >
      {icon} {NavText}
    </Link>
  );
};

export default NavLink;