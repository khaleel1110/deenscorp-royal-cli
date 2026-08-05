export interface Job {
    id: string;
    slug: string;

    title: string;
    department: string;
    location: string;

    employmentType:
        | "Full-Time"
        | "Part-Time"
        | "Contract"
        | "Remote"
        | "Internship";

    shortDescription: string;

    featured: boolean;
    remote: boolean;
    active: boolean;

    applyUrl: string;

    createdAt: Date;
    updatedAt: Date;
}

export interface CareerDetail extends Job {

    overview: string[];

    responsibilities: string[];

    requirements: string[];

    qualifications: string[];

    benefits: string[];

    technologies: string[];

    hiringProcess: string[];

    niceToHave: string[];

    closingRemark: string;

    applicationForm: {
        resume: boolean;

        personalInfo: {
            fullName: boolean;
            email: boolean;
            phone: boolean;
            currentCompany: boolean;
        };

        links: {
            linkedIn: boolean;
            twitter: boolean;
            github: boolean;
            portfolio: boolean;
            website: boolean;
        };

        questions: {
            desiredSalary: boolean;
            availableStartDate: boolean;
            coverLetter: boolean;
        };
    };
}

export const careerDetails: CareerDetail[] = [

    {
        id: "frontend-engineer",
        slug: "frontend-engineer",

        title: "Frontend Engineer",

        department: "Software Development",

        location: "Remote",

        employmentType: "Full-Time",

        shortDescription:
            "Build modern, responsive web applications using Angular and TypeScript.",

        featured: true,

        remote: true,

        active: true,

        applyUrl: "/careers/frontend-engineer",

        createdAt: new Date(),

        updatedAt: new Date(),

        overview: [
            "Join our frontend engineering team to build world-class web applications.",
            "Work closely with designers, backend engineers, and product managers.",
            "Help deliver exceptional user experiences across our digital platforms."
        ],

        responsibilities: [
            "Develop Angular applications.",
            "Build reusable UI components.",
            "Consume REST and GraphQL APIs.",
            "Optimize application performance.",
            "Implement responsive designs.",
            "Write unit tests.",
            "Improve accessibility.",
            "Review pull requests.",
            "Collaborate with UX designers.",
            "Participate in sprint planning."
        ],

        requirements: [
            "3+ years Angular",
            "TypeScript",
            "RxJS",
            "SCSS",
            "Git",
            "REST APIs"
        ],

        qualifications: [
            "Bachelor's degree in Computer Science or related field.",
            "Excellent communication skills.",
            "Strong UI development experience."
        ],

        benefits: [
            "Remote work",
            "Medical insurance",
            "Flexible schedule",
            "Learning budget",
            "Performance bonus"
        ],

        technologies: [
            "Angular",
            "TypeScript",
            "RxJS",
            "NgRx",
            "Firebase",
            "SCSS",
            "Bootstrap",
            "Angular Material"
        ],

        hiringProcess: [
            "Application Review",
            "HR Interview",
            "Technical Interview",
            "Coding Exercise",
            "Final Interview",
            "Offer"
        ],

        niceToHave: [
            "Figma",
            "PWA",
            "SSR",
            "Jest",
            "Cypress"
        ],

        closingRemark:
            "We're looking for passionate frontend engineers who enjoy building beautiful user experiences.",

        applicationForm: {
            resume: true,
            personalInfo: {
                fullName: true,
                email: true,
                phone: true,
                currentCompany: true
            },
            links: {
                linkedIn: true,
                twitter: true,
                github: true,
                portfolio: true,
                website: true
            },
            questions: {
                desiredSalary: true,
                availableStartDate: true,
                coverLetter: true
            }
        }
    },

    {
        id: "full-stack-engineer",
        slug: "full-stack-engineer",

        title: "Full Stack Engineer",

        department: "Software Development",

        location: "London",

        employmentType: "Full-Time",

        shortDescription:
            "Develop scalable frontend and backend systems for enterprise platforms.",

        featured: true,

        remote: false,

        active: true,

        applyUrl: "/careers/full-stack-engineer",

        createdAt: new Date(),

        updatedAt: new Date(),

        overview: [
            "Build complete web solutions using modern frontend and backend technologies.",
            "Collaborate with cross-functional engineering teams.",
            "Help shape the architecture of our products."
        ],

        responsibilities: [
            "Develop frontend features.",
            "Develop backend APIs.",
            "Maintain databases.",
            "Write automated tests.",
            "Deploy cloud applications.",
            "Review code.",
            "Fix production issues.",
            "Optimize performance."
        ],

        requirements: [
            "Angular",
            "Node.js",
            "TypeScript",
            "SQL",
            "Git",
            "Docker"
        ],

        qualifications: [
            "Computer Science degree.",
            "4+ years experience.",
            "Strong problem-solving skills."
        ],

        benefits: [
            "Competitive salary",
            "Annual bonus",
            "Private healthcare",
            "Learning budget",
            "Paid leave"
        ],

        technologies: [
            "Angular",
            "Node.js",
            "NestJS",
            "Firebase",
            "PostgreSQL",
            "Docker",
            "Redis",
            "GitHub Actions"
        ],

        hiringProcess: [
            "Resume Review",
            "Technical Assessment",
            "Engineering Interview",
            "Final Interview",
            "Offer"
        ],

        niceToHave: [
            "Microservices",
            "Kubernetes",
            "AWS",
            "CI/CD"
        ],

        closingRemark:
            "Bring your creativity and engineering excellence to help build amazing products.",

        applicationForm: {
            resume: true,
            personalInfo: {
                fullName: true,
                email: true,
                phone: true,
                currentCompany: true
            },
            links: {
                linkedIn: true,
                twitter: true,
                github: true,
                portfolio: true,
                website: true
            },
            questions: {
                desiredSalary: true,
                availableStartDate: true,
                coverLetter: true
            }
        }
    },

    {
        id: "product-designer",
        slug: "product-designer",

        title: "Product Designer",

        department: "Design",

        location: "San Francisco",

        employmentType: "Full-Time",

        shortDescription:
            "Create intuitive user experiences for digital products.",

        featured: false,

        remote: true,

        active: true,

        applyUrl: "/careers/product-designer",

        createdAt: new Date(),

        updatedAt: new Date(),

        overview: [
            "Design experiences that delight customers.",
            "Work closely with engineers and product managers.",
            "Help shape the future of our products."
        ],

        responsibilities: [
            "Create wireframes.",
            "Design prototypes.",
            "Conduct user research.",
            "Maintain design systems.",
            "Work with developers.",
            "Improve usability."
        ],

        requirements: [
            "Figma",
            "UX Design",
            "UI Design",
            "Prototyping"
        ],

        qualifications: [
            "Portfolio required.",
            "Creative mindset.",
            "Excellent communication."
        ],

        benefits: [
            "Remote work",
            "Flexible hours",
            "Design conferences",
            "Health insurance"
        ],

        technologies: [
            "Figma",
            "Adobe XD",
            "Illustrator",
            "Photoshop",
            "Miro"
        ],

        hiringProcess: [
            "Portfolio Review",
            "HR Interview",
            "Design Challenge",
            "Final Interview",
            "Offer"
        ],

        niceToHave: [
            "Motion Design",
            "HTML",
            "CSS",
            "Design Systems"
        ],

        closingRemark:
            "Show us products you're proud of and explain your design thinking.",

        applicationForm: {
            resume: true,
            personalInfo: {
                fullName: true,
                email: true,
                phone: true,
                currentCompany: true
            },
            links: {
                linkedIn: true,
                twitter: true,
                github: false,
                portfolio: true,
                website: true
            },
            questions: {
                desiredSalary: true,
                availableStartDate: true,
                coverLetter: true
            }
        }
    },

    {
        id: "business-strategy-manager",
        slug: "business-strategy-manager",

        title: "Business Strategy Manager",

        department: "Business Strategy",

        location: "New York",

        employmentType: "Full-Time",

        shortDescription:
            "Lead strategic initiatives that drive company growth and innovation.",

        featured: false,

        remote: false,

        active: true,

        applyUrl: "/careers/business-strategy-manager",

        createdAt: new Date(),

        updatedAt: new Date(),

        overview: [
            "Partner with executive leadership to shape business strategy.",
            "Analyze market opportunities and business performance.",
            "Drive cross-functional initiatives."
        ],

        responsibilities: [
            "Develop strategic plans.",
            "Perform market research.",
            "Analyze KPIs.",
            "Present recommendations.",
            "Coordinate cross-functional teams.",
            "Improve operational efficiency."
        ],

        requirements: [
            "Business Strategy",
            "Financial Analysis",
            "Leadership",
            "Excel",
            "PowerPoint"
        ],

        qualifications: [
            "MBA preferred.",
            "5+ years experience.",
            "Excellent analytical skills."
        ],

        benefits: [
            "Executive bonus",
            "Health insurance",
            "Flexible work schedule",
            "Retirement plan"
        ],

        technologies: [
            "Excel",
            "Power BI",
            "Tableau",
            "Google Workspace",
            "Notion"
        ],

        hiringProcess: [
            "Application Review",
            "HR Interview",
            "Case Study",
            "Executive Interview",
            "Offer"
        ],

        niceToHave: [
            "Consulting background",
            "MBA",
            "Data Analytics"
        ],

        closingRemark:
            "Help shape the future direction of Deenscorp Royal through strategic leadership.",

        applicationForm: {
            resume: true,
            personalInfo: {
                fullName: true,
                email: true,
                phone: true,
                currentCompany: true
            },
            links: {
                linkedIn: true,
                twitter: false,
                github: false,
                portfolio: false,
                website: false
            },
            questions: {
                desiredSalary: true,
                availableStartDate: true,
                coverLetter: true
            }
        }
    }

];