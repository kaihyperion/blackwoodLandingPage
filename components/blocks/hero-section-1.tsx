'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Navigation } from '@/components/Navigation'
import { cn } from '@/lib/utils'

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

export function HeroSection() {
    return (
        <>
            <Navigation />
            <main className="overflow-hidden">
                {/* Section 01 - Hero */}
                <section className="relative pt-24 md:pt-36">
                    <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
                        01 / Home
                    </div>
                    
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        delayChildren: 1,
                                    },
                                },
                            },
                            item: {
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 2,
                                    },
                                },
                            },
                        }}
                        className="absolute inset-0 -z-20">
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
                            alt="background"
                            className="absolute inset-x-0 top-0 -z-20"
                            width="3276"
                            height="4095"
                        />
                    </AnimatedGroup>
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,black_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                                    Decisions Not Spreadsheets
                                </h1>
                                <p className='mx-auto mt-8 max-w-3xl text-balance text-xl text-white/80 mb-8'>
                                    Lead with data | Govern with confidence | Scale with purpose
                                </p>
                                <p className="mx-auto mt-8 max-w-3xl text-balance text-xl text-white/80 mb-8 leading-relaxed">
                                    We belive powerful analytics shouldn't be complicated. <br />
                                    Blackwood transforms disorganized data into professional-grade analytics. <br />
                                    Stop wasting time wrestling with CSVs and Excel files. Blackwood converts your raw data into actionable insights through modern Tableau solutions - empowering your business to thrive in a data-driven world.
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
                                    <Link href="#link">
                                        <span className="text-nowrap">Contact Us</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                                    <Link href="#link">
                                        <span className="text-nowrap">See our products</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

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
                        }}>
                        <div className="relative mt-16 overflow-hidden px-2 sm:mt-20 md:mt-24">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-black absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="bg-black/50 backdrop-blur-sm relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/20 p-6 shadow-lg shadow-black/50">
                                <img
                                    className="aspect-15/8 relative rounded-2xl w-full"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80"
                                    alt="analytics dashboard"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                    </AnimatedGroup>
                </section>

                {/* Section 02 - Top Products/Services */}
                <section className="bg-black py-24 relative">
                    <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
                        02 / Top Services
                    </div>
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Complete Data Analytics Stack
                                </h2>
                                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                    From raw CSV files to actionable insights - we provide the complete AWS-powered analytics infrastructure for SMBs.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { name: 'Data Transformation', desc: 'CSV & Excel to clean datasets' },
                                    { name: 'Tableau Dashboards', desc: 'Professional visualizations' },
                                    { name: 'AWS Infrastructure', desc: 'S3, Lambda, EventBridge' }
                                    
                                ].map((service, index) => (
                                    <div key={index} className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{index + 1}</span>
                                        </div>
                                        <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
                                        <p className="text-white/60 text-sm">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 03 - CTA */}
                <section className="bg-black py-24 relative">
                    <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
                        03 / CTA
                    </div>
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <div className="relative">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready for Clarity?
                            </h2>
                            <p className="text-xl text-white/70 mb-8">
                                Stop struggling, let us build you a professional analytics platform that scale with your business.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full px-8 py-4 text-lg bg-white text-black hover:bg-white/90">
                                    <Link href="#link">
                                        Get Started
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                                    <Link href="#link">
                                        See Our Work
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 04 - Demo */}
                <section className="bg-black pb-16 pt-16 md:pb-32 relative">
                    <div className="absolute top-8 left-8 text-white/30 text-sm font-mono">
                        04 / Demo
                    </div>
                    <div className="group relative mx-auto max-w-7xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/why-us"
                                className="block text-sm duration-150 hover:opacity-75 text-white">
                                <span>See Our Demo</span>
                                <ChevronRight className="ml-1 inline-block size-3 text-white" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 transition-all duration-500 group-hover:opacity-50">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="flex">
                                    <img
                                        className="mx-auto h-32 w-48 invert opacity-60 hover:opacity-100 transition-opacity object-contain"
                                        src={`/images/demo/demo-${i + 1}.png`}
                                        alt={`Demo Screenshot ${i + 1}`}
                                        height="128"
                                        width="192"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


