'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/80 mb-8"
          variants={itemVariants}
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Introducing the Future of Design</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Create
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Something
          </span>
          <span className="block">Amazing</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Build stunning landing pages with modern shaders, smooth animations, and 
          cutting-edge design that captivates your audience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="flex items-center gap-2">
              Get Started
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              10K+
            </motion.div>
            <div className="text-white/60">Happy Customers</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            >
              99.9%
            </motion.div>
            <div className="text-white/60">Uptime</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              24/7
            </motion.div>
            <div className="text-white/60">Support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-yellow-400"
        variants={floatingVariants}
        animate="animate"
      >
        <Star className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-20 text-blue-400"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        <Zap className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-20 text-purple-400"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
