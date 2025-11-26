import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    return(
        <section
         id="projects"
         className="min-h-screen flex items-center justify-center py-3"
         >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
                               bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/70
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            <strong>Link Eye Agency Photography</strong>
                        </h3>
                        <p className="text-gray-300 mb-4">
                            A comprehensive media management platform that allows users to view,
                            proffessionally edited photos, and book services directly throught the website.
                        </p>
                    

                    <div className="">
                        {["React", "Node.js", "Firebase", "Email.js"].map((tech, key) => (
                        <span
                             key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                       hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                         {tech}
                                    </span>
                    ))}
                    </div>

                    <div className="flex justify-end items-center mt-4">
                        <a href="#" className="text-blue-400 hover:text-cyan-300 transition-colors">
                            View Project &rarr;
                        </a>
                    </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/70
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            <strong>Glow Up Salon</strong>
                        </h3>
                        <p className="text-gray-300 mb-4">
                            A dynamic website lets you book and set up a date for your hair day.
                        </p>
                    

                    <div className="">
                        {["React", "Email.js", "Firebase"].map((tech, key) => (
                        <span
                             key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                       hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                         {tech}
                                    </span>
                    ))}
                    </div>

                    <div className="flex justify-end items-center mt-4">
                        <a href="https://glowupsalon.vercel.app/" className="text-blue-400 hover:text-cyan-300 transition-colors">
                            View Project &rarr;
                        </a>
                    </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/70 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            <strong>E-Commerce Web App</strong>
                        </h3>
                        <p className="text-gray-300 mb-4">
                         A full-stack e-commerce website with modern UI, secure payment intergration and customizable
                          product inventory.
                        </p>
                    

                    <div className="">
                        {["React", "Node.js", "Python", "Pythonanywhere"].map((tech, key) => (
                        <span
                             key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                         {tech}
                                    </span>
                    ))}
                    </div>

                    <div className="flex justify-end items-center mt-4">
                        <a href="https://huncho-delta.vercel.app/" className="text-blue-400 hover:text-cyan-300 transition-colors">
                            View Project &rarr;
                        </a>
                    </div>
                    </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/70 
                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            <strong>Mell's Travels</strong>
                        </h3>
                        <p className="text-gray-300 mb-4">
                        Mell’s Travels helps you discover beautiful destinations, book memorable adventures, and enjoy seamless, affordable travel experiences tailored to your journey.
                          product inventory.
                        </p>
                    

                    <div className="">
                        {["React", "Node.js", "Email.js", "Firebase"].map((tech, key) => (
                        <span
                             key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                         {tech}
                                    </span>
                    ))}
                    </div>

                    <div className="flex justify-end items-center mt-4">
                        <a href="https://melltravels.vercel.app/" className="text-blue-400 hover:text-cyan-300 transition-colors">
                            View Project &rarr;
                        </a>
                    </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
         </section>
    )
}