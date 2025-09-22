import { ComprehensivePricing } from '@/components/blocks/comprehensive-pricing'
import { Navigation } from '@/components/Navigation'

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background image similar to main page */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
            width="3276"
            height="4095"
          />
        </div>
        {/* Dark overlay */}
        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,black_75%)]" />
        
        {/* Section indicator */}
        <div className="absolute top-20 left-8 text-white/30 text-sm font-mono z-10">
          02 / Pricing
        </div>
        
        {/* Content */}
        <div className="relative z-10 pt-20 flex items-center justify-center min-h-screen">
          <ComprehensivePricing />
        </div>
      </main>
    </>
  )
}
