'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Zap, Shield, Award, TrendingUp, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const valueProps = [
  {
    icon: Zap,
    title: "No IT Department Required",
    description: "We handle all AWS infrastructure, data pipelines, and technical setup. You focus on insights, not infrastructure management.",
    highlight: "Zero IT overhead"
  },
  {
    icon: Shield,
    title: "AWS Enterprise Security",
    description: "Built on AWS with enterprise-grade security, automated backups, and CloudWatch monitoring. Your data is always protected.",
    highlight: "AWS certified"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Our clients see 75% faster reporting, 90% fewer errors, and 60% better decision-making within the first month.",
    highlight: "75% faster reporting"
  },
  {
    icon: Users,
    title: "SMB-Focused Expertise",
    description: "We specialize in small to medium businesses. No enterprise complexity, just practical solutions that work for your size.",
    highlight: "SMB specialists"
  }
]

const differentiators = [
  {
    title: "CSV to Dashboard in Days",
    description: "We take your messy CSV and Excel files and transform them into professional Tableau dashboards in days, not months. No complex data modeling required.",
    stats: "2-4 weeks from CSV to insights"
  },
  {
    title: "Automated AWS Infrastructure",
    description: "Complete AWS setup with S3 storage, Lambda functions, EventBridge scheduling, and CloudWatch monitoring. Everything runs automatically without your IT team.",
    stats: "Zero infrastructure management"
  },
  {
    title: "Streamlit for Advanced Analytics",
    description: "Beyond dashboards, we build custom Streamlit applications for data exploration, interactive analysis, and specialized business tools.",
    stats: "Interactive data applications"
  }
]

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Data Analytics Lead",
    expertise: "5+ years Tableau & AWS expertise",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mike Rodriguez",
    role: "AWS Solutions Architect",
    expertise: "Certified AWS Solutions Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jennifer Park",
    role: "Streamlit Developer",
    expertise: "Python & data visualization specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]

const achievements = [
  { number: "50+", label: "SMB Clients" },
  { number: "99.9%", label: "AWS Uptime" },
  { number: "2-4 weeks", label: "Average Delivery" },
  { number: "24/7", label: "Support Available" }
]

export function WhyUs() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-36 bg-black">
        <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
          01 / Why Us
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <AnimatedGroup variants={transitionVariants}>
              <div className="flex justify-center mb-6">
                <div className="border border-white/30 py-1 px-4 rounded-lg text-white/70 text-sm font-mono">
                  Why Choose Blackwood
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Built for
                <br />
                <span className="text-white/60">SMBs</span>
              </h1>
              
              <p className="mx-auto mt-8 max-w-3xl text-balance text-xl text-white/80 mb-12">
                We specialize in transforming messy CSV and Excel data into professional analytics solutions for small and medium businesses. 
                No enterprise complexity, just practical results.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-4 text-lg bg-white text-black hover:bg-white/90">
                <Link href="#contact">
                  <span className="text-nowrap">Start Your Journey</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                <Link href="#team">
                  <span className="text-nowrap">Meet Our Team</span>
                </Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              02 / Value Propositions
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why SMBs Choose Us
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Four reasons why small and medium businesses trust us with their data transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <prop.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold text-xl">{prop.title}</h3>
                        <span className="text-xs bg-white/20 text-white/80 px-2 py-1 rounded-full font-mono">
                          {prop.highlight}
                        </span>
                      </div>
                      <p className="text-white/60 leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              03 / Differentiators
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Technical Approach
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                How we transform your data from CSV files to professional analytics solutions
              </p>
            </div>
            
            <div className="space-y-16">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-4">{diff.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed mb-6">{diff.description}</p>
                      <div className="flex items-center gap-2 text-white/50 text-sm font-mono">
                        <CheckCircle className="w-4 h-4" />
                        <span>{diff.stats}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                      <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                        <div className="text-white/30 text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Award className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-mono">Interactive Demo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              04 / Our Team
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Analytics Experts
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Meet the team that transforms your CSV files into actionable insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-white/60 text-sm mb-2">{member.role}</p>
                  <p className="text-white/50 text-xs font-mono">{member.expertise}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              05 / Achievements
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by SMBs
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Results that speak to our commitment to small and medium businesses
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white/60 text-sm font-mono">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              06 / Get Started
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your CSV Data?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join dozens of SMBs already using Blackwood to turn their spreadsheets into professional analytics dashboards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-4 text-lg bg-white text-black hover:bg-white/90">
                  <Link href="#link">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                  <Link href="#link">
                    <span>See Our Work</span>
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>2-4 week delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>AWS enterprise security</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
