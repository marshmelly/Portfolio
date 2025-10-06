import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "TailwindCss", "Svelte"];
    const backendSkills = ["Node.js", "Python", "MySQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-grey-300 mb-6">
                        A passionate developer with expertise in building scalable web applications
                         and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                📺Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) =>(
                                    <span
                                    key={key}
                                     className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-">
                                         {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                               ⚙️Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) =>(
                                    <span
                                    key={key}
                                     className="bg-blue-500/10 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                         {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">
                        🏫Education
                      </h3>
                      <ul className="list-disc list-inside text-gray space-y-2">
                        <li>
                            <strong>B.S in Web Development</strong> - Modcom Institute of Technology (Jan, 2025-May, 2025)
                        </li>
                        <li>
                           Relevant Coursework: Web Development, Data Science, App Development...
                        </li>
                      </ul>
                    </div>

                     <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">
                        💼Work Experience
                      </h3>
                      <div className="space-y-4 text-grey-300">
                        <h4 className="font-semibold">Web Developer at Sideview.dev (2025-present)</h4>
                        <p>Developed web applications and websites for clients in various fields</p>

                           <h4 className="font-semibold">Intern at Link Eye Media(2024)</h4>
                        <p>Worked at Link Eye as a photographer, then developed a website for their services.</p>
                      </div>

                       
                    </div>
                    
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}