"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DarkSwitch } from "@/components/ui/dark-switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Calculator, TrendingUp, Clock, Users, DollarSign, BarChart3, Database, Zap, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  savings: string;
  marketAnalysis: string;
}

interface AlaCarteService {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
  isPopular: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

interface ConsultingRate {
  service: string;
  description: string;
  rate: string;
  inHouseRate: string;
  markup: string;
  typicalHours: string;
}

export function ComprehensivePricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [employees, setEmployees] = useState(50);
  const [reportingHours, setReportingHours] = useState(1);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [decisionDelay, setDecisionDelay] = useState(0);
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  const mainPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "8,500",
      period: "one-time setup",
      features: [
        "Basic Tableau dashboard setup (3-5 dashboards)",
        "Data connection to 2 sources",
        "Monthly KPI reporting",
        "Email support",
        "Basic data governance setup",
        "4 hours of training"
      ],
      description: "Perfect for small businesses getting started with data analytics",
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false,
      savings: "Save $11,500+ vs Big 4 consulting",
      marketAnalysis: "Big 4 firms charge $20,000-$30,000 for similar scope. Boutique firms average $12,000-$16,000."
    },
    {
      name: "Professional",
      price: "18,500",
      period: "one-time + $800/month",
      features: [
        "Advanced Tableau dashboards (10-15 dashboards)",
        "Data pipelines from 5+ sources",
        "Automated reporting & alerts",
        "Priority support & SLA",
        "Complete data governance framework",
        "16 hours of training + documentation",
        "Self-service analytics setup",
        "Mobile-responsive dashboards"
      ],
      description: "Comprehensive BI solution for growing companies",
      buttonText: "Get Started",
      href: "/contact",
      isPopular: true,
      savings: "Save $36,500+ vs Big 4 consulting",
      marketAnalysis: "Accenture/PwC charge $55,000-$75,000 for comparable implementations. Regional firms average $35,000-$45,000."
    },
    {
      name: "Enterprise",
      price: "45,000+",
      period: "starting price",
      features: [
        "Unlimited Tableau dashboards",
        "Complete ETL/ELT pipeline architecture",
        "Advanced analytics & ML models",
        "24/7 dedicated support",
        "Enterprise data governance",
        "Unlimited training & workshops",
        "Multi-department rollout",
        "Data warehouse optimization",
        "Custom integrations"
      ],
      description: "Full-scale data transformation for large organizations",
      buttonText: "Contact Sales",
      href: "/contact",
      isPopular: false,
      savings: "Save $55,000+ vs Big 4 consulting",
      marketAnalysis: "McKinsey/Deloitte charge $100,000-$200,000+ for enterprise transformations. Tier-2 firms average $65,000-$85,000."
    }
  ];

  const alaCarteServices: AlaCarteService[] = [
    {
      name: "Single Dashboard",
      price: "3,500",
      duration: "5-10 business days",
      description: "One custom Tableau dashboard tailored to your specific business needs",
      features: [
        "Custom dashboard design",
        "Data connection setup",
        "Interactive visualizations",
        "Basic training session",
        "30-day support"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: true,
      icon: BarChart3
    },
    {
      name: "Data Static Source",
      price: "2,999",
      duration: "5-10 business days",
      description: "Connect your static data files (Excel, CSV, etc.) to Tableau",
      features: [
        "File data connection setup",
        "Data source integration",
        "Automated refresh schedule",
        "Data quality checks",
        "Documentation"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false,
      icon: Database
    },
    {
      name: "Dashboard Enhancement",
      price: "1,999",
      duration: "5-7 business days",
      description: "Upgrade existing dashboards with advanced features",
      features: [
        "Performance optimization",
        "Advanced calculations",
        "Interactive filters",
        "User access controls"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false,
      icon: Zap
    },
    {
      name: "Team Training Workshop",
      price: "1,500",
      duration: "1 day",
      description: "Comprehensive Tableau training for your team",
      features: [
        "4-hour workshop",
        "Hands-on exercises",
        "Best practices guide",
        "Recorded session",
        "Follow-up Q&A"
      ],
      buttonText: "Get Started",
      href: "/contact",
      isPopular: false,
      icon: GraduationCap
    }
  ];

  const consultingRates: ConsultingRate[] = [
    {
      service: "Data Strategy Consulting",
      description: "Strategic planning, governance frameworks, roadmap development",
      rate: "$200",
      inHouseRate: "$250/hour",
      markup: "25% markup",
      typicalHours: "40-80 hours for full strategy"
    },
    {
      service: "Tableau Development",
      description: "Dashboard creation, data modeling, visualization design",
      rate: "$175",
      inHouseRate: "$219/hour",
      markup: "25% markup",
      typicalHours: "20-40 hours per dashboard"
    },
    {
      service: "Training & Workshops",
      description: "Team training, best practices, knowledge transfer",
      rate: "$200",
      inHouseRate: "$250/hour",
      markup: "25% markup",
      typicalHours: "8-16 hours per workshop"
    },
    {
      service: "Technical Implementation",
      description: "ETL pipelines, data warehouse setup, integrations",
      rate: "$225",
      inHouseRate: "$281/hour",
      markup: "25% markup",
      typicalHours: "60-120 hours for full setup"
    }
  ];

  const calculateCost = () => {
    const rates: { [key: string]: number } = {
      "Data Strategy Consulting": 200,
      "Tableau Development": 175,
      "Training & Workshops": 200,
      "Technical Implementation": 225
    };
    return selectedService && estimatedHours ? rates[selectedService] * estimatedHours : 0;
  };

  const calculateROI = () => {
    const currentMonthlyCost = employees * reportingHours * hourlyRate;
    const annualSavings = currentMonthlyCost * 12 * 0.8; // 80% reduction
    const roi = annualSavings / 18000; // Assuming Professional plan cost
    const paybackMonths = 18000 / (annualSavings / 12);
    
    return {
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi * 100),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      currentMonthlyCost: Math.round(currentMonthlyCost)
    };
  };

  const roiData = calculateROI();

  return (
    <div className="container py-20 space-y-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Data Analytics Pricing Model
        </h1>
        <p className="text-xl text-white/70 max-w-4xl mx-auto">
          Transform your business with Tableau-powered analytics. Choose the perfect package for your data strategy, BI dashboards, and advanced analytics needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#pricing-tiers" className={buttonVariants({ variant: "outline" })}>
            View Pricing Tiers
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "default" })}>
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Choose Your Data Analytics Package</h2>
        <p className="text-white/70 mb-4">
          Competitive pricing based on real-world market analysis of Big 4 and boutique consulting firms
        </p>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white/80">
            <strong>Our pricing philosophy:</strong> We analyzed 50+ consulting proposals from Deloitte, Accenture, PwC, McKinsey, and regional firms. Our packages deliver 40-80% cost savings while maintaining enterprise-grade quality and faster delivery times.
          </p>
        </div>
      </div>

      {/* Main Pricing Tiers */}
      <section id="pricing-tiers">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Main Pricing Tiers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "rounded-2xl p-8 bg-black/50 backdrop-blur-sm relative flex flex-col h-full",
                plan.isPopular ? "border-2 border-white" : "border border-white/20"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/70 ml-2">{plan.period}</span>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                    <p className="text-green-400 text-sm font-semibold">{plan.savings}</p>
                  </div>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-white text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "w-full transition-all duration-300 ease-in-out transform hover:scale-105",
                    plan.isPopular 
                      ? "bg-white text-black border-white hover:bg-white/90 hover:shadow-lg hover:shadow-white/20" 
                      : "hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20"
                  )}
                >
                  {plan.buttonText}
                </Link>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/60 text-xs">{plan.marketAnalysis}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* À La Carte Services */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            À La Carte Services
          </h2>
          <p className="text-white/70 text-lg">
            Single Services, Immediate Impact
          </p>
          <p className="text-white/60 max-w-3xl mx-auto">
            Get started quickly with individual services. Perfect for testing our capabilities or addressing specific business needs without long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {alaCarteServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-white/20 p-6 bg-black/30 backdrop-blur-sm relative flex flex-col h-full"
            >
              {service.isPopular && (
                <div className="absolute -top-2 right-4">
                  <div className="bg-white text-black px-2 py-1 rounded text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/20">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-3">{service.duration}</p>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-white mb-4">${service.price}</div>
                </div>

                <div className="flex-1 mb-6">
                  <p className="text-white/80 text-sm font-semibold mb-2">What's Included:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-3 w-3 text-white mt-1 flex-shrink-0" />
                        <span className="text-white/70 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={service.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20"
                )}
              >
                {service.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 mb-4">Need a custom combination? Let's build a package that fits your exact needs.</p>
          <Link 
            href="/contact" 
            className={cn(
              buttonVariants({ variant: "outline" }),
              "transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20"
            )}
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      {/* Consulting & Hourly Rates */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Consulting & Hourly Rates
          </h2>
          <p className="text-white/70 text-lg">
            Flexible consulting options for custom projects and specialized expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {consultingRates.map((rate, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-white/20 p-6 bg-black/30 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{rate.service}</h3>
                  <p className="text-white/70 text-sm">{rate.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{rate.rate}/hour</div>
                  <div className="text-white/60 text-sm">{rate.inHouseRate}</div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">{rate.markup}</span>
                <span className="text-white/60">{rate.typicalHours}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cost Calculator */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
            <Calculator className="h-8 w-8" />
            Cost Calculator
          </h2>
          <p className="text-white/70 text-lg">
            Estimate your project cost based on service type and hours
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/20 p-8 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Service Type</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                >
                  <option value="">Select a service</option>
                  {consultingRates.map((rate, index) => (
                    <option key={index} value={rate.service}>{rate.service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Estimated Hours</label>
                <input
                  type="number"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Enter number of hours"
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <p className="text-white/70 mb-2">Estimated Cost</p>
                <div className="text-3xl font-bold text-white">
                  ${calculateCost().toLocaleString()}
                </div>
              </div>
              <Link 
                href="/contact" 
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20"
                )}
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
            <TrendingUp className="h-8 w-8" />
            ROI Calculator
          </h2>
          <p className="text-white/70 text-lg">
            Calculate the return on investment for your data analytics transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="rounded-xl border border-white/20 p-8 bg-black/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Organization
              </h3>
              <p className="text-white/70 mb-6">Tell us about your current reporting situation</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Number of Employees Involved in Reporting</label>
                  <input
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Hours Spent on Manual Reporting (per employee/month)</label>
                  <input
                    type="range"
                    min="1"
                    max="80"
                    value={reportingHours}
                    onChange={(e) => setReportingHours(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/60 text-sm mt-1">
                    <span>1 hour</span>
                    <span className="font-semibold">{reportingHours} hours</span>
                    <span>80 hours</span>
                  </div>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Average Hourly Rate ($)</label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Decision Delay Due to Poor Data (days/month)</label>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={decisionDelay}
                    onChange={(e) => setDecisionDelay(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/60 text-sm mt-1">
                    <span>0 days</span>
                    <span className="font-semibold">{decisionDelay} days</span>
                    <span>15 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="rounded-xl border border-white/20 p-8 bg-black/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                ROI Analysis
              </h3>
              <p className="text-white/70 mb-6">Based on your inputs, here's your potential return</p>
              
              <div className="space-y-6">
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-400">
                    ${roiData.annualSavings.toLocaleString()}
                  </div>
                  <p className="text-green-300 text-sm">Annual Savings</p>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-400">
                    {roiData.roi}%
                  </div>
                  <p className="text-blue-300 text-sm">ROI</p>
                </div>
                
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-400">
                    {roiData.paybackMonths}
                  </div>
                  <p className="text-purple-300 text-sm">Months to Payback</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">
                    ${roiData.currentMonthlyCost.toLocaleString()}
                  </div>
                  <p className="text-white/70 text-sm">Current Monthly Cost</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h4 className="text-lg font-bold text-white mb-4">Why Choose Our Tableau-Focused Approach:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>100% client satisfaction rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>80% reduction in manual reporting time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Faster decision-making with real-time data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Improved data accuracy and consistency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Self-service analytics capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Scalable reporting infrastructure</span>
                </div>
              </div>
            </div>
            <Link 
              href="/contact" 
              className={cn(
                buttonVariants({ variant: "outline" }),
                "transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
              )}
            >
              Schedule ROI Discussion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
