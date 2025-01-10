"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import EcoTradeChat from './components/EcoTradeChat';
// import router from "next/router"; 
// import { db } from "@/app/";

import {
  ArrowRight,
  Leaf,
  Shield,
  Zap,
  BarChart,
  Globe,
  Users,
} from "lucide-react";
// import { Button } from "../components/ui/button"

import Script from "next/script";
import Navbar from "../components/Navbar";
import { use } from "react";

export default function Home() {
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header>
        <Navbar />
      </header>
      <br />
      <br />
      <br />
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full space-y-24 text-center">
          <motion.div {...fadeIn} className="space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              
                Weaving   
              </span>
              <br />
               Powerful Insights 
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            from Social Media Unlock Engagement with Data-Driven Analytics 
            </p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/signup"
                className="bg-green-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2" />
              </Link>
              <Link
                href="#learn-more"
                className="bg-gray-700 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              variants={fadeIn}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <Leaf className="w-16 h-16 text-green-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Carbon Credits</h3>
              <p className="text-gray-400">
                Trade verified emissions reductions and support global
                sustainability efforts with ease and confidence.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <Shield className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">
                Blockchain Security
              </h3>
              <p className="text-gray-400">
                Leverage cutting-edge blockchain technology for transparent,
                tamper-proof, and traceable transactions.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <Zap className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Efficient Trading</h3>
              <p className="text-gray-400">
                Experience lightning-fast, low-cost trading with our advanced
                and user-friendly platform.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-800 p-12 rounded-lg shadow-lg"
            id="learn-more"
          >
            <h2 className="text-4xl font-bold mb-8">How EcoTrade Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <BarChart className="w-8 h-8 text-green-400 mr-4" />
                  Project Submission & Verification
                </h3>
                <p className="text-gray-300 mb-6">
                  Companies submit carbon reduction projects for rigorous
                  verification by certified auditors, ensuring the integrity of
                  every credit.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Shield className="w-8 h-8 text-blue-400 mr-4" />
                  Tokenization on Blockchain
                </h3>
                <p className="text-gray-300 mb-6">
                  Verified carbon credits are issued as tokens on our secure
                  blockchain, providing unparalleled transparency and
                  traceability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Globe className="w-8 h-8 text-yellow-400 mr-4" />
                  Global Marketplace
                </h3>
                <p className="text-gray-300 mb-6">
                  Trade carbon credits seamlessly on our global marketplace,
                  connecting buyers and sellers from around the world.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Users className="w-8 h-8 text-purple-400 mr-4" />
                  Impact Tracking
                </h3>
                <p className="text-gray-300 mb-6">
                  Monitor your environmental impact in real-time, with detailed
                  analytics and reporting tools for all stakeholders.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-green-600 p-12 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Join the Green Revolution
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of the solution to climate change. Start trading carbon
              credits today and make a real impact on our planet's future.
            </p>
            <Link
              href="/signup"
              className="bg-white text-green-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Sign Up Now <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            {/* <div id=”carbon-prices”>
<script type=”text/javascript” src=”https://carboncredits.com/live-carbon-prices/index.js.php” async=””></script>
</div> */}

            <h2 className="text-3xl font-bold mb-6">Live Carbon Prices</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse border border-gray-700 text-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-700 px-4 py-2">Market</th>
                    <th className="border border-gray-700 px-4 py-2">Last</th>
                    <th className="border border-gray-700 px-4 py-2">Change</th>
                    <th className="border border-gray-700 px-4 py-2">YTD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      European Union
                    </td>
                    <td className="border border-gray-700 px-4 py-2">€63.30</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">UK</td>
                    <td className="border border-gray-700 px-4 py-2">$33.42</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      Australia (AUD)
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$36.25</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      New Zealand (NZD)
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$62.50</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      South Korea
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$6.22</td>
                    <td className="border border-gray-700 px-4 py-2">-1.40%</td>
                    <td className="border border-gray-700 px-4 py-2">-3.58%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">China</td>
                    <td className="border border-gray-700 px-4 py-2">$96.76</td>
                    <td className="border border-gray-700 px-4 py-2">-0.26%</td>
                    <td className="border border-gray-700 px-4 py-2">-0.75%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      Aviation Industry Offset
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$0.12</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">-7.69%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      Nature Based Offset
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$0.58</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 px-4 py-2">
                      Tech Based Offset
                    </td>
                    <td className="border border-gray-700 px-4 py-2">$0.35</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                    <td className="border border-gray-700 px-4 py-2">0.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Rest of the content remains the same */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.2,
                },
              },
            }}
          ></motion.div>
        </div>
      
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p className="mb-2">© 2025 EcoTrade. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
