'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  Clock,
  TrendingUp,
  Settings,
  Target,
  Award,
  Play,
  Star,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Navigation } from '@/components/Navigation'

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

const services = [
  {
    icon: BarChart3,
    title: "Tableau Dashboard Development",
    description: "Transform your CSV and Excel data into professional Tableau dashboards with interactive visualizations, KPIs, and drill-down capabilities.",
    features: ["Custom Dashboard Design", "Data Source Connections", "Interactive Visualizations", "Automated Refresh"],
    price: "Starting at $2,500/month",
    timeline: "2-4 weeks",
    highlight: "Most Popular"
  },
  {
    icon: Database,
    title: "Data Transformation & ETL",
    description: "Clean, transform, and structure your raw CSV/Excel files into analysis-ready datasets with automated data pipelines.",
    features: ["CSV/Excel Processing", "Data Cleaning", "ETL Pipelines", "Data Quality Checks"],
    price: "Starting at $1,800/month",
    timeline: "1-3 weeks",
    highlight: null
  },
  {
    icon: Zap,
    title: "AWS Infrastructure Setup",
    description: "Complete AWS cloud infrastructure with S3 storage, Lambda functions, EventBridge scheduling, and CloudWatch monitoring.",
    features: ["S3 Data Storage", "Lambda Functions", "EventBridge Scheduling", "CloudWatch Monitoring"],
    price: "Starting at $2,200/month",
    timeline: "2-3 weeks",
    highlight: "Enterprise"
  },
  {
    icon: Shield,
    title: "Streamlit Applications",
    description: "Build interactive data applications and visualization tools using Streamlit for internal dashboards and data exploration.",
    features: ["Interactive Apps", "Data Exploration Tools", "Custom Visualizations", "User Authentication"],
    price: "Starting at $1,500/month",
    timeline: "2-4 weeks",
    highlight: null
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training for your team on Tableau, data analysis best practices, and ongoing technical support.",
    features: ["Tableau Training", "Data Analysis Best Practices", "24/7 Support", "Documentation"],
    price: "Starting at $1,200/month",
    timeline: "1-2 weeks",
    highlight: null
  },
  {
    icon: Settings,
    title: "Custom Analytics Solutions",
    description: "Bespoke analytics solutions combining Tableau, AWS services, and Streamlit for unique business requirements.",
    features: ["Custom Integrations", "Advanced Analytics", "API Development", "Scalable Architecture"],
    price: "Starting at $4,000/month",
    timeline: "4-8 weeks",
    highlight: "Premium"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Data Assessment",
    description: "We analyze your CSV/Excel files, understand your business requirements, and design the optimal analytics architecture for your needs.",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    step: "02", 
    title: "AWS Infrastructure Setup",
    description: "Configure S3 storage, Lambda functions, EventBridge scheduling, and CloudWatch monitoring for automated data processing.",
    icon: Settings,
    duration: "1-2 weeks"
  },
  {
    step: "03",
    title: "Data Transformation",
    description: "Build ETL pipelines to clean and transform your raw data into analysis-ready datasets with automated quality checks.",
    icon: Zap,
    duration: "2-3 weeks"
  },
  {
    step: "04",
    title: "Tableau Dashboard Development",
    description: "Create professional dashboards with interactive visualizations, KPIs, and drill-down capabilities tailored to your business.",
    icon: CheckCircle,
    duration: "2-4 weeks"
  },
  {
    step: "05",
    title: "Streamlit Applications",
    description: "Build interactive data exploration tools and custom applications for advanced analytics and data manipulation.",
    icon: Award,
    duration: "1-2 weeks"
  },
  {
    step: "06",
    title: "Training & Support",
    description: "Comprehensive training on your new analytics platform plus ongoing support and maintenance to ensure continued success.",
    icon: TrendingUp,
    duration: "Ongoing"
  }
]

const caseStudies = [
  {
    company: "ManufacturingCo",
    industry: "Manufacturing",
    challenge: "Excel-based reporting causing delays and errors",
    solution: "Tableau dashboards with AWS automated data pipeline",
    results: "75% faster reporting, 90% fewer errors",
    testimonial: "Blackwood transformed our monthly reporting from a 2-week nightmare to a 2-hour automated process.",
    author: "Sarah Chen, Operations Director"
  },
  {
    company: "RetailChain",
    industry: "Retail", 
    challenge: "CSV sales data scattered across multiple systems",
    solution: "Centralized S3 storage with Streamlit analytics app",
    results: "60% improvement in inventory decisions",
    testimonial: "We can now see our sales patterns in real-time and make better inventory decisions instantly.",
    author: "Mike Rodriguez, Store Manager"
  },
  {
    company: "ServiceProvider",
    industry: "Professional Services",
    challenge: "Manual data entry from client spreadsheets",
    solution: "Automated ETL pipeline with Tableau dashboards",
    results: "85% reduction in data processing time",
    testimonial: "What used to take our team days now happens automatically. We can focus on serving clients.",
    author: "Jennifer Park, Operations Manager"
  }
]

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    description: "Perfect for small teams getting started with analytics",
    features: [
      "Up to 5 data sources",
      "Basic dashboards",
      "Email support",
      "Standard integrations",
      "Monthly reporting"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional", 
    price: "$4,500",
    period: "/month",
    description: "Ideal for growing businesses with complex data needs",
    features: [
      "Up to 20 data sources",
      "Advanced dashboards",
      "Priority support",
      "Custom integrations",
      "Real-time reporting",
      "Team training"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited data sources",
      "Custom development",
      "Dedicated support",
      "White-label options",
      "Advanced security",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export function Services() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-36 bg-black">
        <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
          01 / Services
        </div>
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <AnimatedGroup variants={transitionVariants}>
              <div className="flex justify-center mb-6">
                <div className="border border-white/30 py-1 px-4 rounded-lg text-white/70 text-sm font-mono">
                  Comprehensive Analytics Solutions
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                From CSV to
                <br />
                <span className="text-white/60">Insights</span>
              </h1>
              
              <p className="mx-auto mt-8 max-w-3xl text-balance text-xl text-white/80 mb-12">
                We transform your messy CSV and Excel files into professional Tableau dashboards and interactive Streamlit applications. 
                Complete AWS infrastructure included.
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
                  <span className="text-nowrap">Get Started Today</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                <Link href="#process">
                  <Play className="mr-2 w-5 h-5" />
                  <span className="text-nowrap">See Our Process</span>
                </Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              02 / Our Services
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Data Analytics Stack
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                From raw CSV files to professional dashboards - we provide the complete AWS-powered analytics infrastructure for SMBs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative"
                >
                  {service.highlight && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-mono font-semibold">
                        {service.highlight}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold">{service.price}</span>
                      <div className="flex items-center gap-1 text-white/50 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{service.timeline}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-white/30 text-white hover:bg-white/10">
                      <Link href="#contact">
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              03 / Our Process
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Work
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
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
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white/30 text-sm font-mono mb-1">{step.step}</div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-white/70 text-lg leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-center gap-2 text-white/50 text-sm font-mono">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                      <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                        <div className="text-white/30 text-center">
                          <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <step.icon className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-mono">Process Visualization</p>
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

      {/* Case Studies */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              04 / Case Studies
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Real clients, real challenges, real transformations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold text-lg">{study.company}</h3>
                      <span className="text-xs bg-white/20 text-white/80 px-2 py-1 rounded-full font-mono">
                        {study.industry}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-4">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Our Solution</h4>
                    <p className="text-white/70 text-sm mb-4">{study.solution}</p>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white font-semibold text-lg mb-1">{study.results}</div>
                      <div className="text-white/60 text-xs">Key Result</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white/60 fill-current" />
                        ))}
                      </div>
                      <div>
                        <p className="text-white/80 text-sm italic mb-2">"{study.testimonial}"</p>
                        <p className="text-white/50 text-xs font-mono">{study.author}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
              05 / Pricing
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include our core analytics platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group bg-white/5 rounded-2xl p-8 border transition-all duration-300 relative ${
                    tier.popular 
                      ? 'border-white/30 bg-white/10' 
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-mono font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-white font-semibold text-xl mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-white/60">{tier.period}</span>
                    </div>
                    <p className="text-white/60 text-sm">{tier.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full ${
                      tier.popular
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                    variant={tier.popular ? 'default' : 'outline'}>
                    <Link href="#contact">
                      {tier.cta}
                    </Link>
                  </Button>
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
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join hundreds of companies already using Blackwood to make smarter, faster decisions with their data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-4 text-lg bg-white text-black hover:bg-white/90">
                  <Link href="#link">
                    <span>Start Free Trial</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                  <Link href="#link">
                    <span>Schedule Demo</span>
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Dedicated support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
