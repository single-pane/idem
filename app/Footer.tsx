"use client";
import React, { useState } from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Divider,
} from "@nextui-org/react";
import BankingDropdown from './components/BankingDropdown'
import InvestmentDropdown from './components/InvestmentDropDown'
import LoanDropdown from './components/LoanDropdown'
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SunIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

const MoonIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const segment = useSelectedLayoutSegment();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div >
    <Divider className="my-3" />
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-3">
				<div className="p-2">
					<ul>
						<p className="text-gray-800 font-light text-1xl pb-3">
							Equity<span className="text-blue-600">Analytics</span>
						</p>
						<div className="flex gap-4 pb-4">
							<FaInstagram className="text-1xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-1xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-1xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-1xl cursor-pointer hover:text-red-600" />
							<FaGithub className="text-1xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-2">
					<ul>
						<p className="text-gray-800 font-bold text-1xl pb-3">Company</p>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							How it works
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Blog
						</li>
					</ul>
				</div>
				<div className="p-2">
					<ul>
						<p className="text-gray-800 font-bold text-1xl pb-3">Support</p>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Knowledge Center
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Disclaimer
						</li>
						<li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-2 bg-gray-50">
				<h1 className=" text-gray-800 font-light text-sm" >
					© 2023 Kernel Domain Inc. All rights reserved.
				</h1>
			</div>
		</>
    </div>
  );
}
