"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Blackwood's dashboards cut our weekly reporting from two days to 30 minutes and we finally trust the numbers.",
    name: "Operations Manager",
    role: "regional home services company",
  },
  {
    text: "The automated pipeline they built saves us 10+ hours a week and our month-end close is smoother than ever.",
    name: "Controller",
    role: "mid-sized distributor",
  },
  {
    text: "We went from scattered spreadsheets to a single source of truth that our whole team actually uses.",
    name: "VP of Operations",
    role: "lawn & landscape firm",
  },
  {
    text: "Their Performance Review dashboard made technician productivity crystal clear and helped us coach to results.",
    name: "Service Director",
    role: "field services company",
  },
  {
    text: "They integrated our CRM and accounting data seamlessly, and the finance dashboard paid for itself in the first month.",
    name: "CFO",
    role: "e-commerce brand",
  },
  {
    text: "Fast turnaround, clean design, and clear documentation—exactly what we needed to scale.",
    name: "Head of Analytics",
    role: "healthcare supplier",
  },
  {
    text: "The alerting and refresh schedule mean I'm making decisions on today's data, not last week's.",
    name: "General Manager",
    role: "logistics company",
  },
  {
    text: "Blackwood translated our messy data into actionable KPIs the leadership team reviews every Monday.",
    name: "CEO",
    role: "specialty contractor",
  },
  {
    text: "They were responsive, transparent, and proactive—rare traits that made this project painless.",
    name: "COO",
    role: "professional services firm",
  },
  {
    text: "Our sales and churn trends are finally visible on one page, and our team actually looks forward to the monthly review.",
    name: "Revenue Operations Lead",
    role: "SaaS company",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-black py-24 relative">
      <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">05 / Testimonials</div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
          <div className="flex justify-center">
            <div className="border border-white/30 py-1 px-4 rounded-lg text-white/70 text-sm font-mono">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 text-white/70">
            See what our customers have to say about us.
          </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] max-h-[400px] md:max-h-[600px] lg:max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
