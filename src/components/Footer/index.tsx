'use client';

import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { changeTheme } from '@/utility/theme';

const Footer = () => {
  return (
    <footer className={`w-full bg-deepDark section_container ${style.section_container}`}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">{'<'}</span>
            <span className="self-center text-primary whitespace-nowrap">Harsh</span>
            <span className="text-primary">{' />'}</span>
          </Link>
          <div className="flex gap-2 h-min mt-4">
            <Image
              height={30}
              width={30}
              src={'/assets/images/themes/dark-theme-1.png'}
              alt="theme"
              className="rounded-full"
              onClick={() => changeTheme('dark1')}
            />
            <Image
              height={30}
              width={30}
              src={'/assets/images/themes/dark-theme-2.png'}
              alt="theme"
              className="rounded-full"
              onClick={() => changeTheme('dark2')}
            />
            <Image
              height={30}
              width={30}
              src={'/assets/images/themes/light-theme-1.png'}
              alt="theme"
              className="rounded-full"
              onClick={() => changeTheme('light1')}
            />
          </div>
        </div>
        <div className="flex flex-row md:flex-row gap-12">
          <ul className="flex flex-col gap-2 text-gray">
            <li className="text-light text-xl mb-2">Information</li>
            <li>
              <Link className="hover:text-primary" href="tel:+91-8210143861">
                +91-8210143861
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" href="mailto:harshkmr991234@gmail.com">
                harshkmr991234@gmail.com
              </Link>
            </li>
            <li>
              <span className="hover:text-primary">India</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-gray">
            <li className="text-light text-xl mb-2">Social Media</li>
            <li>
              <Link
                className="flex items-center gap-2 text-gray hover:text-primary"
                href="https://www.linkedin.com/in/imhkmr/"
                target="_blank"
              >
                <Image src="/assets/icons/linkedin.svg" height={20} width={20} alt="Linkedin" />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 text-gray hover:text-primary"
                href="https://github.com/hkmr"
                target="_blank"
              >
                <Image src="/assets/icons/github.svg" height={20} width={20} alt="Linkedin" />
                Github
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2 text-gray hover:text-primary"
                href="https://www.instagram.com/imhkmr/"
                target="_blank"
              >
                <Image src="/assets/icons/instagram.svg" height={20} width={20} alt="Linkedin" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-12 border-t-2 border-primary py-4 opacity-30 text-sm text-center">
        <p className="text-gray">
          Design and develop by <span className="text-primary font-bold">Harsh</span>
        </p>
        <p className="text-gray">Copyright ©2025</p>
      </div>
    </footer>
  );
};

export default Footer;
