import {TbBrandLaravel, TbBrandNodejs, TbBrandOauth, TbBrandPhp, TbBrandReactNative} from "react-icons/tb";
import {
    BiLogoCss3,
    BiLogoDocker,
    BiLogoFirebase,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoLinkedin,
    BiLogoMongodb,
    BiLogoRedux,
    BiLogoTailwindCss,
    BiLogoTelegram,
    BiLogoTypescript
} from "react-icons/bi";
import {
    SiCpanel,
    SiMongoose,
    SiNestjs,
    SiNetlify,
    SiNextdotjs,
    SiShadcnui,
    SiVite,
    SiWoocommerce
} from "react-icons/si";
import {FaDatabase} from "react-icons/fa";
import {AiFillApi, AiFillBug, AiOutlineComment, AiOutlineDeploymentUnit,} from "react-icons/ai";
import {PiBracketsCurlyDuotone, PiCoffeeFill, PiCompassToolFill} from "react-icons/pi";
import {GrWordpress} from "react-icons/gr";
import {GiRainbowStar} from "react-icons/gi";
import {MdAlternateEmail} from "react-icons/md";
import {IoLanguage, IoLogoSass} from "react-icons/io5";
import {RiSeoFill} from "react-icons/ri";
import {https, mailto} from "@/lib/utils";
import {Github, Mail, Phone} from "lucide-react";
import avatar from "@/assets/images/IMG_20240922_102340.webp";

export const personal = {
    name: 'Vladyslav Fokin',
    photo: avatar,
    desc: 'Fullstack Developer | Passionate about building scalable and user-friendly applications.'
};

export const urls = {
    telegram: 't.me/vladyslav_fokin',
    github: 'github.com/Wlad1slav',
    linkedin: 'www.linkedin.com/in/vladyslav-fokin-b35950298/',
};

export const email = 'vlad.fokin2004.vf@gmail.com';
export const mobile = '+380 96 043 97 48';
export const birthYear = 2004;
export const languages = ['uk', 'ru', 'en', 'cz'];

export const portfolio = {
    frontend: {
        heading: 'Front-end',
        skills: [
            {label: 'TypeScript', icon: BiLogoTypescript},
            {label: 'JavaScript', icon: BiLogoJavascript},
            {label: 'React.js', icon: TbBrandReactNative},
            {label: 'Next.js', icon: SiNextdotjs},
            {label: 'SEO', icon: RiSeoFill},
            {label: 'HTML', icon: BiLogoHtml5},
            {label: 'CSS', icon: BiLogoCss3},
            {label: 'SCSS', icon: IoLogoSass},
            {label: 'Tailwind', icon: BiLogoTailwindCss},
            {label: 'shadcn/ui', icon: SiShadcnui},
            {label: 'Redux', icon: BiLogoRedux},
            {label: 'Jest', icon: AiFillBug},
            {label: 'Vite', icon: SiVite},
        ]
    },

    backend: {
        heading: 'Back-end',
        skills: [
            {label: 'Node.js', icon: TbBrandNodejs},
            {label: 'NestJS', icon: SiNestjs},
            {label: 'Next.js', icon: SiNextdotjs},
            {label: 'Express.js', icon: PiBracketsCurlyDuotone},
            {label: 'PHP', icon: TbBrandPhp},
            {label: 'Laravel', icon: TbBrandLaravel},
            {label: 'Wordpress API', icon: GrWordpress},
            {label: 'Woocommerce', icon: SiWoocommerce},
            {label: 'MongoDB', icon: BiLogoMongodb},
            {label: 'Mongoose', icon: SiMongoose},
            {label: 'MySQL', icon: FaDatabase},
            {label: 'OAuth 2.0', icon: TbBrandOauth},
            {label: 'Firebase', icon: BiLogoFirebase},
        ]
    },

    tools: {
        heading: 'Tools',
        skills: [
            {label: 'Git', icon: BiLogoGit},
            {label: 'Github', icon: BiLogoGithub},
            {label: 'Gh Actions', icon: AiOutlineDeploymentUnit},
            {label: 'Docker', icon: BiLogoDocker},
            {label: 'Netlify', icon: SiNetlify},
            {label: 'cPanel', icon: SiCpanel},
            {label: 'Postman', icon: AiFillApi},
        ]
    },

    important: {
        heading: 'Soft skills',
        skills: [
            {label: 'Coffee enthusiast', icon: PiCoffeeFill},
            {label: 'Enjoy complex strategy games', icon: PiCompassToolFill},
            {label: 'Value inclusive environments', icon: GiRainbowStar},
            {label: 'Appreciate post-ironic humor', icon: AiOutlineComment},
            {label: 'Bilingual (Ukrainian, Russian) + English & Czech', icon: IoLanguage}
        ]
    }
};

export const softSkills = [
    "communication",
    "time_management",
    "problem_solving",
    "teamwork",
    "critical_thinking",
    "flexibility",
    "emotional_intelligence",
    "stress_management",
    "client_oriented",
    "self_organization"
];

export const contacts = [
    {
        label: '@vladyslav_fokin',
        url: urls.telegram,
        icon: BiLogoTelegram,
        protocol: https
        // color: '#249AD7'
    },
    {
        label: 'Wlad1slav',
        url: urls.github,
        icon: BiLogoGithub,
        protocol: https
        // color: 'white'
    },
    {
        label: 'Vladyslav Fokin',
        url: urls.linkedin,
        icon: BiLogoLinkedin,
        protocol: https
        // color: '#0077B5'
    },
    {
        label: 'vlad.fokin2004.vf@gmail.com',
        url: email,
        icon: MdAlternateEmail,
        protocol: mailto
        // color: '#FF4737'
    },
];

export const cvContacts = [
    {label: mobile, icon: Phone},
    {label: urls.github, icon: Github},
    {label: email, icon: Mail},
]
