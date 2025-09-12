"use client";

import { Pricing } from "@/components/blocks/pricing";

const demoPlans = [
  {
    name: "STARTER",
    price: "2500",
    yearlyPrice: "2000",
    period: "per month",
    features: [
      "1 Tableau dashboard",
      "Basic data transformation",
      "S3 storage setup",
      "Email support",
      "Monthly data refresh",
    ],
    description: "Perfect for small businesses getting started with analytics",
    buttonText: "Get Started",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "4500",
    yearlyPrice: "3600",
    period: "per month",
    features: [
      "Up to 3 Tableau dashboards",
      "Advanced ETL pipelines",
      "AWS Lambda automation",
      "Streamlit application",
      "Priority support",
      "Weekly data refresh",
      "CloudWatch monitoring",
    ],
    description: "Ideal for growing businesses with complex data needs",
    buttonText: "Get Started",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "8000",
    yearlyPrice: "6400",
    period: "per month",
    features: [
      "Unlimited dashboards",
      "Custom AWS architecture",
      "EventBridge scheduling",
      "Multiple Streamlit apps",
      "Dedicated support",
      "Real-time data processing",
      "Custom integrations",
      "SLA agreement",
    ],
    description: "For organizations requiring enterprise-grade analytics",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className="rounded-lg">
      <Pricing 
        plans={demoPlans}
        title="Transparent Analytics Pricing"
        description="Choose the plan that fits your data needs\nAll plans include AWS infrastructure, data transformation, and ongoing support."
      />
    </div>
  );
}

export { PricingBasic };
