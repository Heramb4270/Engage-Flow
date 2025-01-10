"use client";

import { Leaf, Wallet, Coins } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import {db} from "@/firebase/config";
// import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
// import { providers } from 'ethers';
import {
  BarChart3, Rocket, Zap, Target, TrendingUp, Users, ArrowRight, Share2,
  Award, Clock, Shield, Heart, MessageSquare, ChartBar, Settings, Database,
  Workflow, Brain, Bot, GitBranch, Linkedin, Github, Twitter
} from "lucide-react";
export default function Navbar() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [userCredits, setUserCredits] = useState(0);
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

//   


 




  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      {/* Left: Logo */}
      
      <header className=" w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Share2 className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">EngageFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link>
              <Link href="/analysis" className="text-gray-600 hover:text-indigo-600 transition-colors">Data Analysis</Link>
              <Link href="#team" className="text-gray-600 hover:text-indigo-600 transition-colors">AI assistance</Link>
            </div>
            <Link href="/signup" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
