"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {useEffect, useState} from "react"

const companies = [
    {name: "Kerala Paints", logo: "/placeholder/ritu-white.webp"},
    {name: "TechCorp", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "FinanceFirst", logo: "/placeholder/ritu-white.webp"},
    {name: "HealthTech", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "EduLearn", logo: "/placeholder/ritu-white.webp"},
    {name: "GreenEnergy", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "RetailMax", logo: "/placeholder/ritu-white.webp"},
    {name: "DataSoft", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "DataSoft", logo: "/placeholder/ritu-white.webp"},
    {name: "DataSoft", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "DataSoft", logo: "/placeholder/ritu-white.webp"},
    {name: "DataSoft", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "DataSoft", logo: "/placeholder/ritu-white.webp"},
    {name: "DataSoft", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "DataSoft", logo: "/placeholder/ritu-white.webp"},
    {name: "DataSoft", logo: "/sponsors/kerala-paints-poison.webp"},
    {name: "DataSoft", logo: "/placeholder/ritu-white.webp"},
]

const applicationSteps = [
    {
        title: "1. Apply",
        description: "Register online for the Job Fair and secure your spot.",
    },
    {
        title: "2. Upload Your Resume",
        description: "Submit your updated resume to be shared with participating companies.",
    },
    {
        title: "3. Confirmation",
        description: "Receive an email with confirmation and further instructions.",
    },
    {
        title: "4. Attend Interviews",
        description: "Join scheduled interviews with recruiters during the Job Fair.",
    },
    {
        title: "5. Get Hired",
        description: "Receive offers and kickstart your career with top companies.",
    },

]

export default function JobFare() {

    return (
        <div className="min-h-screen">
            <main>
                {/* Hero Section */}
                <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                        <div className="text-center">
                            <h1 className="flex flex-col text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
                                <span
                                    className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-purple-700 bg-clip-text text-transparent pb-5">
                                    India's Largest
                                </span>
                                <span className="mt-1 text-white"> JobFare 2025</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
                                Meet top recruiters, explore exciting opportunities, and connect directly with hiring
                                teams — right here on RIT.
                            </p>

                            {/*<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">*/}
                            {/*    <div*/}
                            {/*        className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">*/}
                            {/*        <Calendar className="w-5 h-5 text-blue-400"/>*/}
                            {/*        <span className="text-sm text-gray-200">March 16-19, 2025</span>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">*/}
                            {/*        <MapPin className="w-5 h-5 text-purple-400"/>*/}
                            {/*        <span className="text-sm text-gray-200">RIT, Kottaym</span>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">*/}
                            {/*        <Users className="w-5 h-5 text-blue-400"/>*/}
                            {/*        <span className="text-sm text-gray-200">50+ Companies</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/*<Button*/}
                                {/*    size="lg"*/}
                                {/*    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 text-white font-medium border-0"*/}
                                {/*>*/}
                                {/*    Apply Now - Free Registration*/}
                                {/*</Button>*/}
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 text-lg px-8 py-6 border-gray-600 text-gray-200 hover:text-white mt-3"
                                >
                                    Apply for the Event
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Description */}
                <section id="about" className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                                Why Choose <span className="text-blue-400">JobFare 2025?</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
                                Experience India's most comprehensive virtual job fair with cutting-edge technology and
                                unparalleled
                                opportunities.
                            </p>
                        </div>

                        <div className="flex justify-center items-center flex-wrap gap-8">
                            <Card
                                className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 text-center">
                                <CardContent className="p-6">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                                    <div className="text-lg font-semibold mb-2 text-white">Companies</div>
                                    <div className="text-gray-400 text-sm">Top employers across all industries</div>
                                </CardContent>
                            </Card>

                            <Card
                                className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 text-center">
                                <CardContent className="p-6">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                                    <div className="text-lg font-semibold mb-2 text-white">Job Openings</div>
                                    <div className="text-gray-400 text-sm">Opportunities for all skill levels</div>
                                </CardContent>
                            </Card>

                            <Card
                                className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 text-center">
                                <CardContent className="p-6">
                                    <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                                    <div className="text-lg font-semibold mb-2 text-white">Days</div>
                                    <div className="text-gray-400 text-sm">Non-stop networking and interviews</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Application Process */}
                <section id="apply" className="py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                                How to <span className="text-blue-400">Apply</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
                                Join thousands of job seekers in just 5 simple steps. The process is fast and easy
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
                            {applicationSteps.map((step, index) => (
                                <div key={index} className="relative">
                                    <Card
                                        className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 h-full">
                                        <CardContent className="p-6 text-center">
                                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                            <p className="text-gray-400 text-pretty">{step.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Companies Section */}
                <section id="companies" className="mb-40 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                                Meet Your <span className="text-blue-400">Employers</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                            {companies.map((company, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 max-w-[180px] min-w-[180px] max-h-[180px] min-h-[180px] flex items-center justify-center"
                                >
                                    <div className='opacity-75'>
                                        <img src={company.logo} width={85} height={90}/>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
