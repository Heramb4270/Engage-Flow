"use client";

import { Leaf, Wallet, Coins } from 'lucide-react'
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
// import {db} from "@/firebase/config";
// import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
// import { providers } from 'ethers';

export default function Navbar() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [userCredits, setUserCredits] = useState(0);
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

//   


 




  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
      {/* Left: Logo */}
      
      <div className="flex items-center space-x-4">
        <Image
          src="/trade.png" // Replace with your logo path
          alt="Engage Flow"
          width={100} // Adjusted size for mobile
          height={100}
          
          className="h-12 w-20 lg:h-20 lg:w-22" // Adjust size on larger screens
        />
        <span className="font-bold text-lg lg:text-xl text-green-400">
          Engage Flow
        </span>
        
        
        {/* Adjusted font size for larger screens */}
      </div>

      {/* Right: Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* <FaBars className="text-xl text-white" /> */}
        </button>
      </div>

      {/* Center: Menu (hidden on mobile, visible on larger screens) */}
      <div className={`hidden lg:flex flex-1 justify-center`}>
        <div className="flex space-x-8">
          <Link href="/" className="text-white hover:text-green-400">
            Home
          </Link>
          <div className="relative">
            <button
              className="text-white"
              onClick={() => setActive(active === "services" ? null : "services")}
            >
              Tools
            </button>
            {active === "services" && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white p-4 rounded-md space-y-4 w-64">
                <Link href="/tools/credit-calculator" className="block">
                  Credit Calculator
                </Link>
               
              </div>
            )}
          </div>
          <Link href="/about" className="text-white hover:text-green-400">
            About
          </Link>
          <Link href="/signup" className="block text-white hover:text-green-400">
            Register  Company
          </Link>
          {account && (
             <Link href="/carbon-credit-form" className="block text-white hover:text-green-400">
             Apply for Credits
                       </Link>
          )
            }
         
        </div>
      </div>

      {/* Right: Login Button (visible on larger screens) */}
      <div className="flex items-center gap-4">
          {account && (
            <div className="flex items-center bg-[#1E2126] px-4 py-2 rounded-lg">
              <Coins className="h-4 w-4 text-[#40C057] mr-2" />
              <span>{userCredits} Credits</span>
            </div>
          )}
          
            <Button 
              className="bg-green-500 text-white"
              
            >
              Login
            </Button>
          
        </div>
      {/* <div className="hidden lg:flex">
        <Link href="/login">
          <div className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Connect Wallet
          </div>
        </Link>
      </div> */}

      {/* Mobile Menu (visible on mobile when clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 p-4 space-y-4 shadow-lg">
          <Link href="/" className="block text-white hover:text-green-400">
            Home
          </Link>
          <div className="relative">
            <button
              className="text-white"
              onClick={() => setActive(active === "services" ? null : "services")}
            >
              Services
            </button>
            {active === "services" && (
              <div className="absolute left-0 mt-2 bg-gray-800 text-white p-4 rounded-md space-y-4 w-64">
                <Link href="/student" className="block">
                  Study Guide Chatbot
                </Link>
                <Link href="/student" className="block">
                  Mentor Connect
                </Link>
                <Link href="/student" className="block">
                  Resources
                </Link>
                <Link href="/student" className="block">
                  Roadmap Generator
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" className="block text-white hover:text-green-400">
            About
          </Link>
         
          <Link href="/login">
            <div className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              Login
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
