import COMPANIES from "@/data/companies";

export default function JobFair() {
    return (
        <div className="min-h-screen">
            <main>
                {/* Hero Section */}
                <section id="home" className="relative flex items-center justify-center overflow-hidden mt-20 max-sm:mt-40">
                    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 max-md:pt-0">
                        <div className="text-center">
                            <h1 className="flex flex-col text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
                                <span className="text-white">RITU 2025</span>
                                <span
                                    className="mt-4 font-secondary bg-gradient-to-r from-cyan-300 via-cyan-500 to-purple-700 bg-clip-text text-transparent pb-5 text-1xl">
                                    Job Fair
                                </span>
                            </h1>

                            <p className="text-xl max-md:text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 text-pretty">
                                Meet top recruiters, explore exciting opportunities, and connect directly with hiring
                                teams, right here on RIT.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://www.yepdesk.com/embed/open-register/68dcaef946e0fb00013d6003/ab9nsonibf"
                                    className="border rounded-lg  cursor-pointer bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 text-lg px-8 max-md:mx-10 py-4 border-gray-600 text-gray-200 hover:text-white mt-3"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*/!* Companies Section *!/*/}
                <section id="companies" className="mt-30 mb-40 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-white">
                                Meet Your <span className="text-blue-400 font-secondary">Employers</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                            {COMPANIES.map((company, index) => (
                                <div key={index} className="px-6 py-3 border rounded-full bg-white/10 flex gap-2">
                                    <h2>{company.company_name}</h2>
                                    {company.number_of_vacancies && <span className="bg-white rounded-full text-black px-2 text-xs flex items-center">{company.number_of_vacancies}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
