'use client';
import { navLinks } from '@/app/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`navbar bg-base-200 border-b-2 ${
        scrollY > 0 ? 'fixed' : ''
      }  w-full z-10`}
    >
      <nav className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href={'/homePage'}>
          Inovation Solution
        </Link>
      </nav>

      <nav className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 right-4 z-[1] p-2 shadow space-y-3 menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
          >
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
