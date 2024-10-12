import {contacts, personal, portfolio, urls} from "@/lib/cv-info";
import {Badge} from "@/components/ui/badge";
import {BiLogoGithub} from "react-icons/bi";
import {https} from "@/lib/utils";


export default function HomePage() {
    return (
        <main>
            <section className="py-12 md:py-24 lg:py-32 w-full flex flex-col items-center bg-accent">
                <div className="flex flex-col justify-around items-center gap-8 lg:flex-row">
                    <div className="space-y-5 flex flex-col items-center lg:items-start">
                        <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">{personal.name}</h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">{personal.desc}</p>
                        <div className="gap-2 flex flex-col sm:flex-row">
                            <a
                                href="#skills"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground/30 hover:bg-indigo-950"
                            >
                                View Skills
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-950 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground/15"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <img
                        src={personal.photo}
                        alt={`${personal.name} photo`}
                        width={600}
                        height={600}
                        className="rounded-full object-cover w-[600px] h-[600px]"
                    />
                </div>
            </section>

            <section id="skills" className="bg-muted py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center space-y-2.5">
                    <h2 className="text-center text-3xl font-bold sm:text-5xl">My Skills</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                        I have a diverse set of skills across the full stack, from front-end development to back-end
                        engineering and DevOps.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    {Object.values(portfolio).map(skillSet => (
                        <div className="flex flex-col justify-center space-y-4" key={skillSet.heading}>
                            <h3 className="text-2xl font-bold text-center md:text-left">{skillSet.heading}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillSet.skills.map(skill => (
                                    <Badge variant="outline" key={skill.label} className="space-x-1.5">
                                        <skill.icon className="h-6 w-6" color="white"/>
                                        <span>{skill.label}</span>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <a
                        href={https(urls.github)}
                        className="inline-flex gap-2 h-10 items-center justify-center rounded-md bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground/15 hover:border-primary-foreground/30"
                    >
                        <BiLogoGithub size={24}/>
                        <span>Portfolio</span>
                    </a>
                </div>
            </section>


            <section id="contact" className="py-12 md:py-24 lg:py-32 space-y-5 bg-accent">
                <div className="flex flex-col items-center space-y-2.5">
                    <h2 className="text-center text-3xl font-bold sm:text-5xl">Get in Touch</h2>
                    <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                        I&apos;m always excited to connect with new people and discuss potential collaborations or
                        projects.
                        Feel free to reach out using the contact information below.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        { contacts.map(contact => (
                            <div key={contact.label} className="flex flex-col items-center justify-center space-y-2">
                                <contact.icon className="h-[48px] w-[48px]" />
                                <a href={contact.protocol(contact.url)} className="text-lg font-medium">{contact.label}</a>
                            </div>
                        ))}
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/COA_of_Kyiv_Kurovskyi.svg/449px-COA_of_Kyiv_Kurovskyi.svg.png"
                                alt="Kyiv COA"
                                width={48}
                                height={24}
                            />
                            <p className="text-lg font-medium">Kyiv, Ukraine</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
