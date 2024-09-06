import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`w-full bg-deepDark section_container ${style.section_container}`}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">{"<"}</span>
            <span className="self-center text-white whitespace-nowrap">Harsh</span>
            <span className="text-primary">{" />"}</span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <ul className="flex flex-col gap-2 text-gray">
            <li className="text-white text-xl mb-2">Information</li>
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
              <span className="hover:text-primary">
                India
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-gray">
            <li className="text-white text-xl mb-2">Social Media</li>
            <li>
              <Link className="flex items-center gap-2 hover:text-primary" href="https://www.linkedin.com/in/imhkmr/" target="_blank">
                <Image src="/assets/icons/linkedin.svg" height={20} width={20} alt="Linkedin" />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 hover:text-primary" href="https://github.com/hkmr" target="_blank">
                <Image src="/assets/icons/github.svg" height={20} width={20} alt="Linkedin" />
                Github
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 hover:text-primary" href="https://www.instagram.com/imhkmr/" target="_blank">
                <Image src="/assets/icons/instagram.svg" height={20} width={20} alt="Linkedin" />
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-12 border-t-2 border-primary py-4 opacity-30 text-sm text-center">
        <p className="text-white">Design and develop by <span className="text-primary font-bold">Harsh</span></p>
        <p className="text-white">Copyright ©2024</p>
      </div>
    </footer>
  );
};

export default Footer;
