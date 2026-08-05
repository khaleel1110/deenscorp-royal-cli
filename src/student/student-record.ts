// ============================================
// FILE: lct-course-record.ts
// ============================================

export interface LCTCourse {
    id: string;
    slug: string;

    // Basic Information
    title: string;
    subtitle: string;
    shortDescription: string;
    description: string;

    // Category
    category: string;
    subCategory: string;
    tags: string[];

    // Course Type
    deliveryMode: "Online" | "Classroom" | "Hybrid";
    level: "Beginner" | "Intermediate" | "Advanced";
    language: string;

    // Duration
    duration: number;
    durationType: "Days" | "Weeks" | "Months";
    totalHours: number;

    // Pricing
    price: number;
    currency: string;
    discountPrice?: number;

    // Location
    location: {
        country: string;
        city: string;
        venue: string;
        address: string;
        timezone: string;
    };

    // Instructor
    instructor: {
        name: string;
        title: string;
        avatar: string;
        experience: number;
    };

    // Course Media
    thumbnail: string;
    coverImage: string;
    promoVideo?: string;

    // Requirements
    prerequisites: string[];
    targetAudience: string[];

    // Curriculum - Now with detailed topics
    modules: {
        title: string;
        lessons: number;
        duration: string;
        topics: string[]; // Detailed topics from the course page
    }[];

    // Learning Outcomes
    outcomes: string[];

    // Certification
    certificate: boolean;
    accreditation: string;

    // Features
    features: string[];

    // SEO
    metaTitle: string;
    metaDescription: string;

    // Schedule
    startDate: Date;
    endDate: Date;

    // Status
    featured: boolean;
    published: boolean;
    rating: number;
    studentsEnrolled: number;

    createdAt: Date;
    updatedAt: Date;
}


// ============================================
// LCT COURSES ARRAY
// ============================================
export const lctCourses: LCTCourse[] = [
    // ============================================
    // COURSE 1: Understanding and Using AI for Employees
    // ============================================
    {
        id: "lct-ai-employees-001",
        slug: "understanding-and-using-ai-for-employees",

        title: "Understanding and Using AI for Employees",
        subtitle: "Harness AI for Measurable Business Improvement",

        shortDescription:
            "Learn how to harness AI for operational automation, customer engagement, and data analytics.",

        description:
            "This course teaches delegates how to harness AI for measurable business improvement. It covers operational automation, customer engagement, and data analytics. Participants assess ROI and implementation strategies. The programme enables professionals to integrate AI effectively to achieve competitive, scalable business outcomes.[reference:3]",

        category: "Digital Technologies & Strategy",
        subCategory: "Artificial Intelligence",

        tags: [
            "AI",
            "Automation",
            "Data Analytics",
            "Productivity",
            "Digital Transformation"
        ],

        deliveryMode: "Classroom",
        level: "Beginner",
        language: "English",

        duration: 5,
        durationType: "Days",
        totalHours: 35,

        price: 4995,
        currency: "GBP",

        location: {
            country: "United Kingdom",
            city: "London",
            venue: "LCT Training Centre",
            address: "London, UK",
            timezone: "GMT"
        },

        instructor: {
            name: "LCT Faculty",
            title: "AI & Digital Transformation Specialist",
            avatar: "/assets/instructors/lct-faculty.jpg",
            experience: 10
        },

        thumbnail: "/assets/courses/lct-ai-employees-thumb.jpg",
        coverImage: "/assets/courses/lct-ai-employees-cover.jpg",

        prerequisites: [
            "No prior AI knowledge required"
        ],

        targetAudience: [
            "Business Analysts",
            "Administrative Officers",
            "Operations Coordinators",
            "Data Assistants",
            "Team Leaders"
        ], // [reference:4]

        modules: [
            {
                title: "Everyday AI Tools and Prompts",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Familiarise employees with everyday AI tools and assistants.",
                    "Develop prompt engineering skills for workplace productivity.",
                    "Encourage responsible and ethical use of AI in daily operations.",
                    "Enhance collaboration and efficiency through applied AI literacy."
                ] // [reference:5]
            },
            {
                title: "Safe and Effective AI Practices",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Identify risks and biases associated with everyday AI use.",
                    "Develop guidelines for secure AI-enabled interactions.",
                    "Promote awareness of data protection and compliance obligations.",
                    "Empower teams to use AI safely and effectively in their roles."
                ] // [reference:6]
            },
            {
                title: "AI Applications Across Business Functions",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Identify applications of AI across finance, HR, and operations.",
                    "Explore cross-functional efficiencies through AI systems.",
                    "Assess integration challenges in multi-departmental AI initiatives.",
                    "Develop strategies for scaling AI across enterprise functions."
                ] // [reference:7]
            },
            {
                title: "Data-Driven Decision-Making with AI",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Use AI-powered analytics for faster, informed decision-making.",
                    "Apply machine learning models for predictive and diagnostic purposes.",
                    "Enhance visualisation and performance tracking through AI dashboards.",
                    "Implement frameworks for continuous AI-driven improvement."
                ] // [reference:8]
            },
            {
                title: "Ethical AI and Responsible Innovation",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Understand the global standards for ethical AI innovation.",
                    "Apply fairness and inclusion principles in AI design.",
                    "Evaluate governance frameworks supporting responsible AI use.",
                    "Promote transparent and sustainable AI innovation practices."
                ] // [reference:9]
            }
        ],

        outcomes: [
            "Understand the fundamentals of AI and its applications in the workplace.",
            "Use AI tools to automate repetitive tasks and enhance productivity.",
            "Collaborate effectively with AI systems while maintaining human oversight.",
            "Apply ethical and responsible AI practices in daily operations.",
            "Adapt to changing job roles and competencies in AI-augmented environments."
        ], // [reference:10]

        certificate: true,
        accreditation: "LCT Professional Certificate",

        features: [
            "Live Classroom Training",
            "Downloadable Resources",
            "Certificate of Completion",
            "Practical Exercises",
            "Case Studies",
            "Expert Faculty"
        ],

        metaTitle: "Understanding and Using AI for Employees | LCT International",
        metaDescription: "Learn how to harness AI for measurable business improvement. Covers operational automation, customer engagement, and data analytics.",

        startDate: new Date("2026-08-18"),
        endDate: new Date("2026-08-22"),

        featured: true,
        published: true,
        rating: 4.8,
        studentsEnrolled: 420,

        createdAt: new Date(),
        updatedAt: new Date()
    },

    // ============================================
    // COURSE 2: Artificial Intelligence for Digital Transformation
    // ============================================
    {
        id: "lct-ai-digital-transformation-002",
        slug: "artificial-intelligence-for-digital-transformation",

        title: "Artificial Intelligence for Digital Transformation",
        subtitle: "Transform Strategic Decision-Making and Business Operations",

        shortDescription:
            "Explore how AI can transform strategic decision-making and business operations.",

        description:
            "This course explores how AI can transform strategic decision-making and business operations. Delegates examine AI applications in forecasting, automation, and customer engagement. Participants learn to identify opportunities and risks associated with AI adoption. The programme equips professionals to integrate AI tools into strategic planning for innovation and growth.[reference:11]",

        category: "Digital Technologies & Strategy",
        subCategory: "Artificial Intelligence",

        tags: [
            "AI",
            "Digital Transformation",
            "Automation",
            "Innovation",
            "Strategy"
        ],

        deliveryMode: "Classroom",
        level: "Advanced",
        language: "English",

        duration: 5,
        durationType: "Days",
        totalHours: 35,

        price: 5995,
        currency: "GBP",

        location: {
            country: "United Kingdom",
            city: "London",
            venue: "LCT Training Centre",
            address: "London, UK",
            timezone: "GMT"
        },

        instructor: {
            name: "LCT Faculty",
            title: "Digital Transformation & AI Strategist",
            avatar: "/assets/instructors/lct-faculty.jpg",
            experience: 15
        },

        thumbnail: "/assets/courses/lct-ai-digital-transformation-thumb.jpg",
        coverImage: "/assets/courses/lct-ai-digital-transformation-cover.jpg",

        prerequisites: [
            "Basic understanding of business strategy"
        ],

        targetAudience: [
            "Digital Transformation Leaders",
            "Chief Innovation Officers",
            "Technology Managers",
            "Programme Directors",
            "Change Specialists"
        ], // [reference:12]

        modules: [
            {
                title: "Introduction to Artificial Intelligence",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Understand AI principles and types across industries.",
                    "Identify opportunities and challenges in AI adoption.",
                    "Evaluate emerging AI technologies and their impact.",
                    "Discuss the ethical, legal, and social implications of AI."
                ] // [reference:13]
            },
            {
                title: "AI in Decision-Making",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Apply AI insights for operational and strategic decisions.",
                    "Integrate predictive analytics to improve decision outcomes.",
                    "Use AI for scenario modelling and data interpretation.",
                    "Manage biases and transparency issues in algorithmic decisions."
                ] // [reference:14]
            },
            {
                title: "Ethical AI and Governance",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Implement frameworks for responsible and transparent AI use.",
                    "Identify ethical risks associated with automated decision systems.",
                    "Design governance models ensuring fairness and accountability.",
                    "Promote stakeholder confidence in ethical AI implementation."
                ] // [reference:15]
            },
            {
                title: "AI-Powered Digital Innovation",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Explore how AI accelerates innovation and operational agility.",
                    "Design AI-based digital products and solutions for evolving business needs.",
                    "Leverage data-driven insights to drive creative digital transformation.",
                    "Develop KPIs and metrics to measure AI innovation success."
                ] // [reference:16]
            },
            {
                title: "AI in Process Automation",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Automate repetitive processes through AI-driven systems and RPA tools.",
                    "Map end-to-end process improvements achievable with AI technologies.",
                    "Implement governance models for large-scale process automation.",
                    "Ensure compliance, transparency, and ethics in AI-automated operations."
                ] // [reference:17]
            }
        ],

        outcomes: [
            "Align AI initiatives with enterprise-wide digital transformation goals.",
            "Leverage data analytics and automation to streamline operations and innovation.",
            "Identify opportunities for AI integration across customer and internal processes.",
            "Assess the organisational impact and change management requirements of AI deployment.",
            "Formulate governance models for responsible and scalable AI implementation."
        ], // [reference:18]

        certificate: true,
        accreditation: "LCT Professional Certificate",

        features: [
            "Live Classroom Training",
            "Downloadable Resources",
            "Certificate of Completion",
            "Strategic Framework",
            "Case Studies",
            "Expert Faculty"
        ],

        metaTitle: "Artificial Intelligence for Digital Transformation | LCT International",
        metaDescription: "Explore how AI can transform strategic decision-making and business operations. Covers forecasting, automation, and customer engagement.",

        startDate: new Date("2026-09-14"),
        endDate: new Date("2026-09-18"),

        featured: true,
        published: true,
        rating: 4.9,
        studentsEnrolled: 280,

        createdAt: new Date(),
        updatedAt: new Date()
    },

    // ============================================
    // COURSE 3: Strategic Information Technology - Level 1
    // ============================================
    {
        id: "lct-strategic-it-level1-003",
        slug: "strategic-information-technology-level-1",

        title: "Strategic Information Technology – Level 1",
        subtitle: "Foundational IT Strategy and Management Principles",

        shortDescription:
            "Kickstart your strategic IT knowledge with foundational IT strategy and management principles.",

        description:
            "Kickstart your strategic IT knowledge with this course, focusing on the foundational aspects of IT within a business context, including basic IT strategy and management principles.[reference:19]",

        category: "Digital Technologies & Strategy",
        subCategory: "Information Technology",

        tags: [
            "IT Strategy",
            "Project Management",
            "Agile",
            "Business Intelligence",
            "Digital Transformation"
        ],

        deliveryMode: "Classroom",
        level: "Beginner",
        language: "English",

        duration: 5,
        durationType: "Days",
        totalHours: 35,

        price: 4995,
        currency: "GBP",

        location: {
            country: "United Kingdom",
            city: "London",
            venue: "LCT Training Centre",
            address: "London, UK",
            timezone: "GMT"
        },

        instructor: {
            name: "LCT Faculty",
            title: "IT Strategy & Digital Transformation Expert",
            avatar: "/assets/instructors/lct-faculty.jpg",
            experience: 12
        },

        thumbnail: "/assets/courses/lct-strategic-it-thumb.jpg",
        coverImage: "/assets/courses/lct-strategic-it-cover.jpg",

        prerequisites: [
            "Basic understanding of business operations"
        ],

        targetAudience: [
            "Senior managers and executives",
            "Financial executives and managers",
            "Senior company executives in charge of change management",
            "Those responsible for delivering IT and IT projects"
        ], // [reference:20]

        modules: [
            {
                title: "IT Strategy",
                lessons: 5,
                duration: "7 Hours",
                topics: [
                    "Advances in IT and developments in corporate computing",
                    "IT applications security and architecture",
                    "Issues in formulating IT strategy to meet organisational needs",
                    "Current themes and trends – open standards and the new digital environment",
                    "The IT strategy framework – Where and how to start",
                    "Common mistakes and SWOT"
                ] // [reference:21]
            },
            {
                title: "Project Management",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "Large versus small projects",
                    "Agile versus other methodologies: SSADM and Prince II",
                    "Big project case studies and research findings",
                    "Procurement and contract management: life cycle procurement",
                    "IT benchmarking"
                ] // [reference:22]
            },
            {
                title: "Agile Project Management",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "History and successes",
                    "Agile practices",
                    "Agile disciplines and fulfilling control and reporting needs",
                    "Setting up the agile team"
                ] // [reference:23]
            },
            {
                title: "Advanced Business Intelligence",
                lessons: 5,
                duration: "7 Hours",
                topics: [
                    "Information and intelligence to run an organisation: data driven models and budgetary control",
                    "Decision support systems; risk modelling and data-mining",
                    "Further techniques to define information: Critical Success Factors KPIs Balanced scorecard and benchmarks",
                    "Specialist needs: combating money laundering; fraudulent trading etc",
                    "Communicating with the Boardroom: BI dashboards and BI usage",
                    "The future: using BI to deliver policies"
                ] // [reference:24]
            },
            {
                title: "Using the Web and Social Media for Competitive Gain",
                lessons: 4,
                duration: "7 Hours",
                topics: [
                    "BI and data-mining analysis of marketing and selling data",
                    "Pro-active use of social media Facebook viral campaigns community groups",
                    "Analysis of tweets and social media",
                    "Dealing with big data and data discovery"
                ] // [reference:25]
            }
        ],

        outcomes: [
            "Appreciate the advantages and risks of corporate and internet computing",
            "Explain the costs, economics and opportunities provided by corporate computing systems",
            "Create plans for the application and management of ERP, CRM and IT projects using agile project management"
        ], // [reference:26]

        certificate: true,
        accreditation: "LCT Professional Certificate",

        features: [
            "Live Classroom Training",
            "Downloadable Resources",
            "Certificate of Completion",
            "Practical Frameworks",
            "Case Studies",
            "Expert Faculty"
        ],

        metaTitle: "Strategic Information Technology – Level 1 | LCT International",
        metaDescription: "Kickstart your strategic IT knowledge with foundational IT strategy and management principles.",

        startDate: new Date("2026-10-12"),
        endDate: new Date("2026-10-16"),

        featured: false,
        published: true,
        rating: 4.7,
        studentsEnrolled: 180,

        createdAt: new Date(),
        updatedAt: new Date()
    }
];