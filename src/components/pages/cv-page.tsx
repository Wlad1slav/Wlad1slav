
import local from "@/lib/local";
import {availableLanguages, TAvailableCvLanguages, TLanguages} from "@/lib/types";
import {cvContacts, languages, portfolio, softSkills} from "@/lib/cv-info";
import {Calendar, MapPin} from "lucide-react";
import {useNavigate, useParams} from "react-router-dom";
import cvPhoto from "@/assets/images/IMG_20241011_153914.webp";


const CvPage = () => {
    const { langParam } = useParams<{ langParam: string }>();
    const navigate = useNavigate();

    if (!langParam || !availableLanguages.includes(langParam as TAvailableCvLanguages)) {
        navigate('/cv/en')
    }

    const lang = langParam as TAvailableCvLanguages;

    const styles = {
        heading: "border-b-4 mb-4 font-bold uppercase",
        badge: "border border-gray-300 py-0.5 px-1 rounded text-gray-400"
    };

    return (
        <main className="w-full space-y-3 bg-white text-black">
            <section className="pb-4">
                <h1 className="text-3xl font-bold text-center">{local[lang].name}</h1>
            </section>
            <section className="flex justify-between gap-5">
                <img
                    src={cvPhoto}
                    alt='Моє фото'
                    className="rounded object-cover w-[200px] h-[200px]"
                />
                <div className="space-y-1.5">
                    <h2 className={styles.heading}>Summary</h2>
                    {local[lang].summary.map(paragraph => (
                        <p className="text-xl text-gray-400" key={paragraph}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>
            <section className="grid grid-cols-3 w-full pb-1">
                {cvContacts.map(contact => (
                    <div key={contact.label} className="flex items-center gap-2 mt-2">
                        <contact.icon/>
                        <p>{contact.label}</p>
                    </div>
                ))}
            </section>
            <section className="flex flex-col gap-6">
                <div>
                    <h2 className={styles.heading}>Experience</h2>
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-4">
                            <span className={`text-xl text-pink-500`}>Agile Alpaca Agency</span>
                            <span className="flex items-center gap-1">
                                <Calendar/>
                                2022 - 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin/>
                                Kyiv, Ukraine
                            </span>
                        </div>
                        {local[lang].experience.map(experience => (
                            <div className="border-dashed border-b border-gray-400 pb-3" key={experience.title}>
                                <h3 className="text-xl">{experience.title}</h3>
                                <p className="text-gray-400">{experience.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2 font-bold">
                    <h2 className={styles.heading}>Skills</h2>
                    <div className="flex justify-center gap-4 justify-between">
                        {Object.values(portfolio).map(skills => (
                            skills.heading !== 'Soft skills' &&
                            <div key={skills.heading}>
                                <h3 className="text-xl mb-0.5 font-medium text-pink-500">{skills.heading}</h3>
                                <span className="grid grid-cols-2 gap-2">
                                    {skills.skills.map(skill => (
                                        <p key={skill.label} className={styles.badge}>{skill.label}</p>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full space-y-4">
                        <div>
                            <h2 className={styles.heading}>Education</h2>
                            <div className="space-y-1">
                                <p className="text-xl">{local[lang].education.degree}</p>
                                <p className="text-xl text-pink-500">{local[lang].education.university}</p>
                                <span className="flex items-center gap-1">
                                    <Calendar/>
                                    2021 - 2025
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.heading}>Languages</h2>
                            <div className="flex items-center gap-2">
                                {languages.map(language => (
                                    <p key={language} className={styles.badge}>{local[lang][language as TLanguages]}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className={styles.heading}>Soft skills</h2>
                        <span className="grid grid-cols-2 gap-2">
                            {softSkills.map(skill => (
                                <p key={skill} className={styles.badge}>
                                    {(local[lang]['soft_skills'] as Record<string, string>)[skill]}
                                </p>
                            ))}
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CvPage;
