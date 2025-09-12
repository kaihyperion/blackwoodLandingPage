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
                            className="absolute inset-x-0 top-56 -z-20 lg:top-32"
                            width="3276"
                            height="4095"
                        />
                    </AnimatedGroup>
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,black_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                                    Transform Your Data
                                </h1>
                                <p className="mx-auto mt-8 max-w-3xl text-balance text-xl text-white/80 mb-12">
                                    Blackwood transforms your CSV and Excel data into powerful Tableau dashboards. We handle AWS infrastructure, automated data pipelines, and Streamlit visualizations so you can focus on insights, not IT.
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
                <section className="bg-black py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative">
                            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
                                02 / Top Services
                            </div>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Complete Data Analytics Stack
                                </h2>
                                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                    From raw CSV files to actionable insights - we provide the complete AWS-powered analytics infrastructure for SMBs.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { name: 'Data Transformation', desc: 'CSV & Excel to clean datasets' },
                                    { name: 'Tableau Dashboards', desc: 'Professional visualizations' },
                                    { name: 'AWS Infrastructure', desc: 'S3, Lambda, EventBridge' },
                                    { name: 'Streamlit Apps', desc: 'Interactive data tools' }
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
                <section className="bg-black py-24">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <div className="relative">
                            <div className="absolute top-0 left-0 text-white/30 text-sm font-mono">
                                03 / CTA
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Data?
                            </h2>
                            <p className="text-xl text-white/70 mb-8">
                                Stop struggling with spreadsheets. Let us build you a professional analytics platform that scales with your business.
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

                {/* Partners Section */}
                <section className="bg-black pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75 text-white">
                                <span>Meet Our Partners</span>
                                <ChevronRight className="ml-1 inline-block size-3 text-white" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            {Array.from({ length: 8 }, (_, i) => (
                                <div key={i} className="flex">
                                    <img
                                        className="mx-auto h-6 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                                        src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                                        alt={`Partner Logo ${i + 1}`}
                                        height="24"
                                        width="auto"
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


