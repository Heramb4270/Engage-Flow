"use client"
import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BarChart3, Rocket, Zap, Target, TrendingUp, Users, ArrowRight, Share2,
  Award, Clock, Shield, Heart, MessageSquare, ChartBar, Settings, Database,
  Workflow, Brain, Bot, GitBranch, Linkedin, Github, Twitter
} from "lucide-react";
import Footer from '@/components/Footer';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-600" />,
      title: "Advanced Analytics",
      description: "Gain deep insights into your social media performance with Langflow-powered analytics and real-time metrics tracking."
    },
    {
      icon: <Target className="w-12 h-12 text-pink-600" />,
      title: "Smart Targeting",
      description: "Reach your ideal audience with precision using our advanced demographic and behavioral targeting tools."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Instant Insights",
      description: "Get real-time performance metrics and actionable insights to optimize your social media strategy on the fly."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Data Security",
      description: "Protect your data with industry-grade encryption and compliance with GDPR, CCPA, and other standards."
    },
    {
      icon: <Rocket className="w-12 h-12 text-red-600" />,
      title: "Customizable Dashboards",
      description: "Personalize your analytics dashboard to focus on the KPIs and metrics most relevant to your goals."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: "Campaign Optimization",
      description: "Automatically fine-tune your ad campaigns with AI-driven recommendations to maximize ROI."
    }
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      value: "98%",
      label: "Analysis Accuracy"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "10K+",
      label: "Active Users"
    },
    {
      icon: <ChartBar className="w-8 h-8 text-green-600" />,
      value: "5M+",
      label: "Posts Analyzed"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      value: "200%",
      label: "Avg. Engagement Boost"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Share2 className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">EngageFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {/* <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</Link> */}
              <Link href="/analysis" className="text-gray-600 hover:text-indigo-600 transition-colors">Data Analysis</Link>
              <Link href="/chatbot" className="text-gray-600 hover:text-indigo-600 transition-colors">AI assistance</Link>
            </div>
            <Link href="/chatbot" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                AI-Powered Social Analytics
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-800">with Langflow Integration</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Harness the power of Langflow's advanced AI to transform your social media analytics
              and engagement optimization.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/analysis"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                  text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Get Analysis<ArrowRight className="inline ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-2xl hover:bg-gray-50/80 
                    transition-all duration-300 transform hover:scale-105 shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>



     

        {/* Footer */}
      <Footer/>
      </main>
    </div>
  );
}
        