import * as admin from "firebase-admin";

export interface CourseCategory {
    id: string;

    name: string;

    slug: string;

    description: string;

    image: string;

    icon: string;

    color?: string;

    featured: boolean;

    displayOrder: number;

    seo: {
        title: string;
        description: string;
        keywords: string[];
    };

    isActive: boolean;

    createdAt: FirebaseFirestore.Timestamp;

    updatedAt: FirebaseFirestore.Timestamp;
}
export interface Course {

    id: string;

    categoryId: string;

    code: string;

    name: string;

    slug: string;

    shortDescription: string;

    overview: string;

    objectives: string[];

    outcomes: string[];

    whoShouldAttend: string[];

    prerequisites: string[];

    duration: string;

    language: string;

    level: "Beginner" | "Intermediate" | "Advanced";

    deliveryModes: (
        "Classroom" |
        "Online" |
        "Virtual" |
        "Onsite"
        )[];

    certificate: boolean;

    accreditation: string;

    brochureUrl: string;

    thumbnail: string;

    banner: string;

    gallery: string[];

    tags: string[];

    industries: string[];

    featured: boolean;

    rating: number;

    reviewCount: number;

    isActive: boolean;

    seo: {

        title: string;

        description: string;

        keywords: string[];

    };

    createdAt: FirebaseFirestore.Timestamp;

    updatedAt: FirebaseFirestore.Timestamp;

}

export interface CourseTopic {

    id: string;

    courseId: string;

    title: string;

    description: string;

    learningOutcomes: string[];

    duration: string;

    order: number;

}

export interface TrainingVenue {

    id: string;

    name: string;

    city: string;

    state: string;

    country: string;

    address: string;

    postcode: string;

    latitude: number;

    longitude: number;

    timezone: string;

    contactEmail: string;

    contactPhone: string;

    website: string;

    image: string;

    facilities: string[];

    isActive: boolean;

    createdAt: FirebaseFirestore.Timestamp;

    updatedAt: FirebaseFirestore.Timestamp;

}
export interface CourseSession {

    id: string;

    courseId: string;

    venueId: string;

    startDate: FirebaseFirestore.Timestamp;

    endDate: FirebaseFirestore.Timestamp;

    registrationDeadline: FirebaseFirestore.Timestamp;

    duration: string;

    price: number;

    currency: string;

    availableSeats: number;

    totalSeats: number;

    instructor: string;

    deliveryMode:
        "Classroom" |
        "Virtual" |
        "Online" |
        "Onsite";

    status:
        | "Upcoming"
        | "Open"
        | "Few Seats"
        | "Full"
        | "Completed"
        | "Cancelled";

    notes: string;

    isFeatured: boolean;

    createdAt: FirebaseFirestore.Timestamp;

    updatedAt: FirebaseFirestore.Timestamp;

}

// payment-record.ts

export interface PaymentInfo {
    id: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    sortCodeOrSwift: string;
    additionalInstructions: string;
}

const now = admin.firestore.Timestamp.now();


export const paymentInfo: PaymentInfo[] = [
    {
        id: "paymentInfo",
        bankName: "Example Bank",
        accountName: "Deenscorp Royale Ltd",
        accountNumber: "12345678",
        sortCodeOrSwift: "12-34-56",
        additionalInstructions:
            "Please allow 1-2 business days for us to confirm receipt.",
    },
];
export const courseCategories: CourseCategory[] = [

    {
        id: "digital",

        name: "Digital Technologies",

        slug: "digital-technologies",

        description: "Digital transformation, AI, cybersecurity, cloud computing and data technologies.",

        image: "",

        icon: "computer",

        color: "#2196F3",

        featured: true,

        displayOrder: 1,

        seo: {
            title: "Digital Technologies Courses",
            description: "Professional Digital Technologies training courses.",
            keywords: [
                "Digital",
                "AI",
                "Cloud",
                "Cyber Security"
            ]
        },

        isActive: true,

        createdAt: now,

        updatedAt: now
    },

    {
        id: "business-management",

        name: "Business Management",

        slug: "business-management",

        description: "Business Management and Administration courses.",

        image: "",

        icon: "business",

        color: "#4CAF50",

        featured: true,

        displayOrder: 2,

        seo: {
            title: "Business Management Courses",
            description: "",
            keywords: []
        },

        isActive: true,

        createdAt: now,

        updatedAt: now
    },

    {
        id: "leadership",

        name: "Leadership & Management",

        slug: "leadership-management",

        description: "Leadership and executive management courses.",

        image: "",

        icon: "groups",

        color: "#673AB7",

        featured: true,

        displayOrder: 3,

        seo: {
            title: "",
            description: "",
            keywords: []
        },

        isActive: true,

        createdAt: now,

        updatedAt: now
    },

    {
        id: "banking-finance",

        name: "Banking & Finance",

        slug: "banking-finance",

        description: "Finance and banking professional training.",

        image: "",

        icon: "payments",

        color: "#FF9800",

        featured: true,

        displayOrder: 4,

        seo: {
            title: "",
            description: "",
            keywords: []
        },

        isActive: true,

        createdAt: now,

        updatedAt: now
    },

    {
        id: "operations",

        name: "Operations Management",

        slug: "operations-management",

        description: "Operations, logistics and supply chain courses.",

        image: "",

        icon: "inventory",

        color: "#795548",

        featured: true,

        displayOrder: 5,

        seo: {
            title: "",
            description: "",
            keywords: []
        },

        isActive: true,

        createdAt: now,

        updatedAt: now
    }

];
export const trainingVenues: TrainingVenue[] = [
    {
        id: "london",
        name: "LCT London",
        city: "London",
        state: "England",
        country: "United Kingdom",
        address: "Canary Wharf",
        postcode: "E14",
        latitude: 51.5074,
        longitude: -0.1278,
        timezone: "GMT",
        contactEmail: "",
        contactPhone: "",
        website: "",
        image: "home1.webp",
        facilities: [
            "WiFi",
            "Parking",
            "Projector",
            "Coffee Break",
            "Training Room",
        ],
        isActive: true,
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "dubai",
        name: "LCT Dubai",
        city: "Dubai",
        state: "Dubai",
        country: "United Arab Emirates",
        address: "Business Bay",
        postcode: "",
        latitude: 25.2048,
        longitude: 55.2708,
        timezone: "GST",
        contactEmail: "",
        contactPhone: "",
        website: "",
        image: "home2.webp",
        facilities: [
            "WiFi",
            "Parking",
            "Conference Room",
        ],
        isActive: true,
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "abuja",
        name: "Abuja Training Centre",
        city: "Abuja",
        state: "FCT",
        country: "Nigeria",
        address: "Central Business District",
        postcode: "900001",
        latitude: 9.0765,
        longitude: 7.3986,
        timezone: "WAT",
        contactEmail: "",
        contactPhone: "",
        website: "",
        image: "home3.webp",
        facilities: [
            "WiFi",
            "Air Conditioning",
            "Parking",
        ],
        isActive: true,
        createdAt: now,
        updatedAt: now,
    },
];
export const courses: Course[] = [

// ─── Additional Courses ─────────────────────────────────────

// Digital Technologies (categoryId: "digital") – already have 2, add 1 more
    {
        id: "cybersecurity-fundamentals",
        categoryId: "digital",
        code: "DIG-003",
        name: "Cybersecurity Fundamentals",
        slug: "cybersecurity-fundamentals",
        shortDescription: "Protect your organization from cyber threats.",
        overview: "Learn the core principles of cybersecurity, threat detection, and risk mitigation.",
        objectives: [
            "Identify common cyber threats",
            "Implement security controls",
            "Respond to security incidents"
        ],
        outcomes: [
            "Develop a security policy",
            "Conduct risk assessments"
        ],
        whoShouldAttend: [
            "IT Professionals",
            "Managers",
            "Security Analysts"
        ],
        prerequisites: [
            "Basic IT knowledge"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Cyber", "Security", "Risk"],
        industries: ["Banking", "Government", "Healthcare"],
        featured: true,
        rating: 4.7,
        reviewCount: 95,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },

// Business Management (categoryId: "business-management") – add 3
    {
        id: "strategic-business-management",
        categoryId: "business-management",
        code: "BUS-001",
        name: "Strategic Business Management",
        slug: "strategic-business-management",
        shortDescription: "Drive business growth with effective strategy.",
        overview: "Master the tools and frameworks for strategic planning and execution.",
        objectives: [
            "Develop strategic vision",
            "Analyze competitive environment",
            "Implement strategic initiatives"
        ],
        outcomes: [
            "Create a strategic plan",
            "Align resources with strategy"
        ],
        whoShouldAttend: [
            "Senior Managers",
            "Entrepreneurs",
            "Business Analysts"
        ],
        prerequisites: [
            "Understanding of business basics"
        ],
        duration: "5 Days",
        language: "English",
        level: "Advanced",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Strategy", "Business", "Growth"],
        industries: ["All"],
        featured: true,
        rating: 4.9,
        reviewCount: 87,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "project-management-professional",
        categoryId: "business-management",
        code: "BUS-002",
        name: "Project Management Professional (PMP)",
        slug: "project-management-professional",
        shortDescription: "Master project management techniques.",
        overview: "Learn to initiate, plan, execute, and close projects successfully.",
        objectives: [
            "Understand project lifecycle",
            "Use project management tools",
            "Manage stakeholders"
        ],
        outcomes: [
            "Lead projects effectively",
            "Mitigate risks"
        ],
        whoShouldAttend: [
            "Project Managers",
            "Team Leaders",
            "Engineers"
        ],
        prerequisites: [
            "Basic project experience"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Project", "Management", "PMP"],
        industries: ["Construction", "IT", "Finance"],
        featured: true,
        rating: 4.8,
        reviewCount: 156,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "business-process-improvement",
        categoryId: "business-management",
        code: "BUS-003",
        name: "Business Process Improvement",
        slug: "business-process-improvement",
        shortDescription: "Optimize business processes for efficiency.",
        overview: "Learn process mapping, analysis, and re‑engineering techniques.",
        objectives: [
            "Map existing processes",
            "Identify bottlenecks",
            "Design improved workflows"
        ],
        outcomes: [
            "Increase operational efficiency",
            "Reduce costs"
        ],
        whoShouldAttend: [
            "Operations Managers",
            "Process Analysts",
            "Quality Managers"
        ],
        prerequisites: [
            "Basic business knowledge"
        ],
        duration: "3 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Process", "Improvement", "Lean"],
        industries: ["Manufacturing", "Service", "Healthcare"],
        featured: false,
        rating: 4.6,
        reviewCount: 73,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },

// Leadership & Management (categoryId: "leadership") – add 3
    {
        id: "executive-leadership",
        categoryId: "leadership",
        code: "LEAD-001",
        name: "Executive Leadership",
        slug: "executive-leadership",
        shortDescription: "Develop your leadership potential.",
        overview: "Build the skills to lead at the highest levels of an organization.",
        objectives: [
            "Understand leadership styles",
            "Build high‑performing teams",
            "Drive organizational change"
        ],
        outcomes: [
            "Create a personal leadership plan",
            "Inspire and motivate others"
        ],
        whoShouldAttend: [
            "Senior Executives",
            "Directors",
            "Aspiring Leaders"
        ],
        prerequisites: [
            "Several years of management experience"
        ],
        duration: "5 Days",
        language: "English",
        level: "Advanced",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Leadership", "Executive", "Strategy"],
        industries: ["All"],
        featured: true,
        rating: 4.9,
        reviewCount: 210,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "team-building-collaboration",
        categoryId: "leadership",
        code: "LEAD-002",
        name: "Team Building & Collaboration",
        slug: "team-building-collaboration",
        shortDescription: "Foster collaboration and team synergy.",
        overview: "Learn techniques to build trust, improve communication, and drive team performance.",
        objectives: [
            "Identify team dynamics",
            "Resolve conflicts",
            "Enhance collaboration"
        ],
        outcomes: [
            "Lead effective teams",
            "Increase team productivity"
        ],
        whoShouldAttend: [
            "Team Leaders",
            "Managers",
            "HR Professionals"
        ],
        prerequisites: [
            "Basic management experience"
        ],
        duration: "3 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Team", "Collaboration", "Communication"],
        industries: ["All"],
        featured: false,
        rating: 4.7,
        reviewCount: 134,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "change-management",
        categoryId: "leadership",
        code: "LEAD-003",
        name: "Change Management",
        slug: "change-management",
        shortDescription: "Manage organizational change effectively.",
        overview: "Learn to lead change initiatives and overcome resistance.",
        objectives: [
            "Understand change models",
            "Plan change strategies",
            "Communicate vision"
        ],
        outcomes: [
            "Execute successful change projects",
            "Sustain change"
        ],
        whoShouldAttend: [
            "Managers",
            "Change Agents",
            "HR Managers"
        ],
        prerequisites: [
            "Basic management knowledge"
        ],
        duration: "4 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Change", "Transformation", "Resistance"],
        industries: ["All"],
        featured: true,
        rating: 4.8,
        reviewCount: 98,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },

// Banking & Finance (categoryId: "banking-finance") – add 3
    {
        id: "financial-analysis",
        categoryId: "banking-finance",
        code: "FIN-001",
        name: "Financial Analysis",
        slug: "financial-analysis",
        shortDescription: "Analyze financial statements for better decisions.",
        overview: "Learn ratio analysis, valuation, and financial modeling.",
        objectives: [
            "Interpret financial statements",
            "Perform ratio analysis",
            "Build financial models"
        ],
        outcomes: [
            "Make informed investment decisions",
            "Assess company performance"
        ],
        whoShouldAttend: [
            "Finance Professionals",
            "Analysts",
            "Investors"
        ],
        prerequisites: [
            "Basic accounting knowledge"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Finance", "Analysis", "Modeling"],
        industries: ["Banking", "Investment", "Corporate"],
        featured: true,
        rating: 4.8,
        reviewCount: 145,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "investment-banking",
        categoryId: "banking-finance",
        code: "FIN-002",
        name: "Investment Banking",
        slug: "investment-banking",
        shortDescription: "Master the fundamentals of investment banking.",
        overview: "Learn M&A, capital raising, and financial structuring.",
        objectives: [
            "Understand M&A processes",
            "Perform company valuations",
            "Structure financing deals"
        ],
        outcomes: [
            "Advise on corporate finance",
            "Identify investment opportunities"
        ],
        whoShouldAttend: [
            "Investment Bankers",
            "Corporate Finance Professionals",
            "Analysts"
        ],
        prerequisites: [
            "Financial analysis background"
        ],
        duration: "5 Days",
        language: "English",
        level: "Advanced",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Investment", "Banking", "M&A"],
        industries: ["Banking", "Consulting"],
        featured: true,
        rating: 4.9,
        reviewCount: 89,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "risk-management",
        categoryId: "banking-finance",
        code: "FIN-003",
        name: "Risk Management",
        slug: "risk-management",
        shortDescription: "Identify and mitigate financial risks.",
        overview: "Learn to manage credit, market, and operational risks.",
        objectives: [
            "Identify types of financial risk",
            "Implement risk mitigation strategies",
            "Comply with regulations"
        ],
        outcomes: [
            "Develop a risk management framework",
            "Reduce exposure"
        ],
        whoShouldAttend: [
            "Risk Managers",
            "Compliance Officers",
            "Auditors"
        ],
        prerequisites: [
            "Basic finance knowledge"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Risk", "Compliance", "Mitigation"],
        industries: ["Banking", "Insurance", "Corporate"],
        featured: false,
        rating: 4.6,
        reviewCount: 78,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },

// Operations Management (categoryId: "operations") – add 3
    {
        id: "supply-chain-management",
        categoryId: "operations",
        code: "OPS-001",
        name: "Supply Chain Management",
        slug: "supply-chain-management",
        shortDescription: "Optimize your supply chain for efficiency.",
        overview: "Learn logistics, procurement, and supply chain integration.",
        objectives: [
            "Understand supply chain components",
            "Improve logistics and distribution",
            "Manage supplier relationships"
        ],
        outcomes: [
            "Design a resilient supply chain",
            "Reduce costs"
        ],
        whoShouldAttend: [
            "Supply Chain Managers",
            "Logistics Coordinators",
            "Operations Managers"
        ],
        prerequisites: [
            "Basic business knowledge"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Supply Chain", "Logistics", "Procurement"],
        industries: ["Manufacturing", "Retail", "Healthcare"],
        featured: true,
        rating: 4.8,
        reviewCount: 112,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "lean-six-sigma",
        categoryId: "operations",
        code: "OPS-002",
        name: "Lean Six Sigma",
        slug: "lean-six-sigma",
        shortDescription: "Drive continuous improvement with Lean and Six Sigma.",
        overview: "Learn DMAIC, process improvement, and waste reduction.",
        objectives: [
            "Implement Lean principles",
            "Apply Six Sigma tools",
            "Reduce defects and waste"
        ],
        outcomes: [
            "Lead improvement projects",
            "Achieve cost savings"
        ],
        whoShouldAttend: [
            "Quality Managers",
            "Process Engineers",
            "Operations Managers"
        ],
        prerequisites: [
            "Basic quality awareness"
        ],
        duration: "5 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Lean", "Six Sigma", "Improvement"],
        industries: ["Manufacturing", "Healthcare", "Finance"],
        featured: true,
        rating: 4.9,
        reviewCount: 203,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    },
    {
        id: "logistics-distribution",
        categoryId: "operations",
        code: "OPS-003",
        name: "Logistics & Distribution",
        slug: "logistics-distribution",
        shortDescription: "Master logistics and distribution strategies.",
        overview: "Learn warehouse management, transportation, and inventory control.",
        objectives: [
            "Design distribution networks",
            "Optimize inventory levels",
            "Improve delivery performance"
        ],
        outcomes: [
            "Reduce lead times",
            "Enhance customer satisfaction"
        ],
        whoShouldAttend: [
            "Logistics Managers",
            "Distribution Planners",
            "Supply Chain Analysts"
        ],
        prerequisites: [
            "Basic supply chain knowledge"
        ],
        duration: "4 Days",
        language: "English",
        level: "Intermediate",
        deliveryModes: ["Classroom", "Virtual"],
        certificate: true,
        accreditation: "LCT Certificate",
        brochureUrl: "",
        thumbnail: "",
        banner: "",
        gallery: [],
        tags: ["Logistics", "Distribution", "Inventory"],
        industries: ["Retail", "Manufacturing", "E-commerce"],
        featured: false,
        rating: 4.5,
        reviewCount: 67,
        isActive: true,
        seo: { title: "", description: "", keywords: [] },
        createdAt: now,
        updatedAt: now
    }

];
export const courseTopics: CourseTopic[] = [

// Additional topics for the new courses
// Digital Technologies - Cybersecurity Fundamentals
    {
        id: "topic-005",
        courseId: "cybersecurity-fundamentals",
        title: "Introduction to Cybersecurity",
        description: "Overview of cybersecurity landscape and threat landscape.",
        learningOutcomes: [
            "Define cybersecurity",
            "Identify common threats"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-006",
        courseId: "cybersecurity-fundamentals",
        title: "Security Frameworks & Standards",
        description: "Learn NIST, ISO 27001, and other frameworks.",
        learningOutcomes: [
            "Understand compliance requirements",
            "Apply security controls"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-007",
        courseId: "cybersecurity-fundamentals",
        title: "Incident Response",
        description: "How to detect and respond to breaches.",
        learningOutcomes: [
            "Develop an incident response plan",
            "Conduct forensic analysis"
        ],
        duration: "3 Hours",
        order: 3
    },

// Business Management - Strategic Business Management
    {
        id: "topic-008",
        courseId: "strategic-business-management",
        title: "Strategic Planning",
        description: "Developing a strategic vision and mission.",
        learningOutcomes: [
            "Create a vision statement",
            "Conduct a SWOT analysis"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-009",
        courseId: "strategic-business-management",
        title: "Competitive Analysis",
        description: "Analyze industry and competition using Porter's Five Forces.",
        learningOutcomes: [
            "Assess industry attractiveness",
            "Identify competitive advantage"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-010",
        courseId: "strategic-business-management",
        title: "Strategy Execution",
        description: "Implementing strategy effectively.",
        learningOutcomes: [
            "Develop action plans",
            "Monitor progress"
        ],
        duration: "3 Hours",
        order: 3
    },

// Business Management - Project Management Professional
    {
        id: "topic-011",
        courseId: "project-management-professional",
        title: "Project Initiation",
        description: "Define scope, objectives, and stakeholders.",
        learningOutcomes: [
            "Create a project charter",
            "Identify stakeholders"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-012",
        courseId: "project-management-professional",
        title: "Project Planning",
        description: "Develop schedules, budgets, and resource plans.",
        learningOutcomes: [
            "Create a WBS",
            "Develop a Gantt chart"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-013",
        courseId: "project-management-professional",
        title: "Project Execution & Control",
        description: "Manage teams, risks, and changes.",
        learningOutcomes: [
            "Manage project scope",
            "Monitor progress"
        ],
        duration: "4 Hours",
        order: 3
    },
    {
        id: "topic-014",
        courseId: "project-management-professional",
        title: "Project Closure",
        description: "Handover and lessons learned.",
        learningOutcomes: [
            "Conduct project review",
            "Document lessons learned"
        ],
        duration: "2 Hours",
        order: 4
    },

// Business Management - Business Process Improvement
    {
        id: "topic-015",
        courseId: "business-process-improvement",
        title: "Process Mapping",
        description: "Document current processes.",
        learningOutcomes: [
            "Create process flowcharts",
            "Identify inefficiencies"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-016",
        courseId: "business-process-improvement",
        title: "Process Analysis",
        description: "Analyze bottlenecks and root causes.",
        learningOutcomes: [
            "Use root cause analysis",
            "Measure process performance"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-017",
        courseId: "business-process-improvement",
        title: "Process Redesign",
        description: "Design improved processes.",
        learningOutcomes: [
            "Develop process improvements",
            "Implement changes"
        ],
        duration: "3 Hours",
        order: 3
    },

// Leadership & Management - Executive Leadership
    {
        id: "topic-018",
        courseId: "executive-leadership",
        title: "Leadership Styles",
        description: "Understand different leadership approaches.",
        learningOutcomes: [
            "Identify personal style",
            "Adapt to situations"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-019",
        courseId: "executive-leadership",
        title: "Building High-Performing Teams",
        description: "Recruit, develop, and motivate teams.",
        learningOutcomes: [
            "Form effective teams",
            "Create a positive culture"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-020",
        courseId: "executive-leadership",
        title: "Strategic Decision Making",
        description: "Make decisions in complex environments.",
        learningOutcomes: [
            "Use decision frameworks",
            "Manage risk"
        ],
        duration: "3 Hours",
        order: 3
    },

// Leadership & Management - Team Building & Collaboration
    {
        id: "topic-021",
        courseId: "team-building-collaboration",
        title: "Team Dynamics",
        description: "Understand group behavior.",
        learningOutcomes: [
            "Identify team stages",
            "Manage conflicts"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-022",
        courseId: "team-building-collaboration",
        title: "Communication & Feedback",
        description: "Enhance communication skills.",
        learningOutcomes: [
            "Deliver effective feedback",
            "Active listening"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-023",
        courseId: "team-building-collaboration",
        title: "Collaboration Tools",
        description: "Use digital tools to collaborate.",
        learningOutcomes: [
            "Use collaboration platforms",
            "Manage remote teams"
        ],
        duration: "2 Hours",
        order: 3
    },

// Leadership & Management - Change Management
    {
        id: "topic-024",
        courseId: "change-management",
        title: "Change Models",
        description: "Learn Kotter, ADKAR, and other models.",
        learningOutcomes: [
            "Apply change frameworks",
            "Assess readiness"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-025",
        courseId: "change-management",
        title: "Stakeholder Engagement",
        description: "Communicate and gain buy-in.",
        learningOutcomes: [
            "Map stakeholders",
            "Develop communication plans"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-026",
        courseId: "change-management",
        title: "Sustaining Change",
        description: "Embed change into culture.",
        learningOutcomes: [
            "Reinforce new behaviors",
            "Monitor adoption"
        ],
        duration: "3 Hours",
        order: 3
    },

// Banking & Finance - Financial Analysis
    {
        id: "topic-027",
        courseId: "financial-analysis",
        title: "Financial Statement Analysis",
        description: "Analyze balance sheets, income statements, and cash flows.",
        learningOutcomes: [
            "Interpret financial reports",
            "Calculate key ratios"
        ],
        duration: "4 Hours",
        order: 1
    },
    {
        id: "topic-028",
        courseId: "financial-analysis",
        title: "Valuation Techniques",
        description: "Learn DCF, comparable company analysis, and precedent transactions.",
        learningOutcomes: [
            "Perform company valuation",
            "Use valuation models"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-029",
        courseId: "financial-analysis",
        title: "Financial Modeling",
        description: "Build financial models in Excel.",
        learningOutcomes: [
            "Create projection models",
            "Sensitivity analysis"
        ],
        duration: "4 Hours",
        order: 3
    },

// Banking & Finance - Investment Banking
    {
        id: "topic-030",
        courseId: "investment-banking",
        title: "M&A Fundamentals",
        description: "Understand mergers and acquisitions processes.",
        learningOutcomes: [
            "Identify deal types",
            "Understand M&A lifecycle"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-031",
        courseId: "investment-banking",
        title: "Capital Markets",
        description: "Equity and debt capital raising.",
        learningOutcomes: [
            "Understand IPOs",
            "Analyze debt offerings"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-032",
        courseId: "investment-banking",
        title: "Deal Structuring",
        description: "Structure financing and deals.",
        learningOutcomes: [
            "Design deal terms",
            "Manage regulatory considerations"
        ],
        duration: "4 Hours",
        order: 3
    },

// Banking & Finance - Risk Management
    {
        id: "topic-033",
        courseId: "risk-management",
        title: "Types of Risk",
        description: "Credit, market, operational, and liquidity risks.",
        learningOutcomes: [
            "Classify risks",
            "Measure risk exposure"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-034",
        courseId: "risk-management",
        title: "Risk Mitigation Strategies",
        description: "Hedging, diversification, and insurance.",
        learningOutcomes: [
            "Develop risk mitigation plans",
            "Use financial instruments"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-035",
        courseId: "risk-management",
        title: "Regulatory Compliance",
        description: "Understand Basel, Solvency, and other regulations.",
        learningOutcomes: [
            "Comply with financial regulations",
            "Prepare for audits"
        ],
        duration: "3 Hours",
        order: 3
    },

// Operations Management - Supply Chain Management
    {
        id: "topic-036",
        courseId: "supply-chain-management",
        title: "Supply Chain Strategy",
        description: "Design a supply chain aligned with business goals.",
        learningOutcomes: [
            "Define supply chain objectives",
            "Design network"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-037",
        courseId: "supply-chain-management",
        title: "Procurement and Supplier Management",
        description: "Manage supplier relationships.",
        learningOutcomes: [
            "Select suppliers",
            "Negotiate contracts"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-038",
        courseId: "supply-chain-management",
        title: "Logistics and Distribution",
        description: "Plan transportation and warehouse operations.",
        learningOutcomes: [
            "Optimize logistics",
            "Reduce delivery times"
        ],
        duration: "3 Hours",
        order: 3
    },

// Operations Management - Lean Six Sigma
    {
        id: "topic-039",
        courseId: "lean-six-sigma",
        title: "Introduction to Lean",
        description: "Eliminate waste and increase value.",
        learningOutcomes: [
            "Identify waste (Muda)",
            "Apply 5S and Kanban"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-040",
        courseId: "lean-six-sigma",
        title: "Six Sigma DMAIC",
        description: "Define, Measure, Analyze, Improve, Control.",
        learningOutcomes: [
            "Apply DMAIC methodology",
            "Use statistical tools"
        ],
        duration: "4 Hours",
        order: 2
    },
    {
        id: "topic-041",
        courseId: "lean-six-sigma",
        title: "Sustaining Improvements",
        description: "Monitor and control processes.",
        learningOutcomes: [
            "Implement control plans",
            "Monitor key metrics"
        ],
        duration: "3 Hours",
        order: 3
    },

// Operations Management - Logistics & Distribution
    {
        id: "topic-042",
        courseId: "logistics-distribution",
        title: "Warehouse Management",
        description: "Optimize warehouse operations.",
        learningOutcomes: [
            "Design warehouse layout",
            "Manage inventory"
        ],
        duration: "3 Hours",
        order: 1
    },
    {
        id: "topic-043",
        courseId: "logistics-distribution",
        title: "Transportation Management",
        description: "Select and manage carriers.",
        learningOutcomes: [
            "Choose transport modes",
            "Optimize routes"
        ],
        duration: "3 Hours",
        order: 2
    },
    {
        id: "topic-044",
        courseId: "logistics-distribution",
        title: "Inventory Control",
        description: "Manage stock levels and reduce carrying costs.",
        learningOutcomes: [
            "Set reorder points",
            "Use ABC analysis"
        ],
        duration: "3 Hours",
        order: 3
    }

];
export const courseSessions: CourseSession[] = [

// Additional sessions for the new courses

// Cybersecurity Fundamentals
    {
        id: "session-003",
        courseId: "cybersecurity-fundamentals",
        venueId: "london",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-03-02")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-03-06")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-02-23")),
        duration: "5 Days",
        price: 4995,
        currency: "GBP",
        availableSeats: 18,
        totalSeats: 25,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Upcoming",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },
    {
        id: "session-004",
        courseId: "cybersecurity-fundamentals",
        venueId: "dubai",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-04-06")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-04-10")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-03-30")),
        duration: "5 Days",
        price: 4995,
        currency: "GBP",
        availableSeats: 20,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Virtual",
        status: "Open",
        notes: "",
        isFeatured: false,
        createdAt: now,
        updatedAt: now
    },

// Strategic Business Management
    {
        id: "session-005",
        courseId: "strategic-business-management",
        venueId: "abuja",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-05-11")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-05-15")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-05-04")),
        duration: "5 Days",
        price: 4500,
        currency: "GBP",
        availableSeats: 10,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Project Management Professional
    {
        id: "session-006",
        courseId: "project-management-professional",
        venueId: "london",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-06-08")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-06-12")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-06-01")),
        duration: "5 Days",
        price: 5200,
        currency: "GBP",
        availableSeats: 12,
        totalSeats: 25,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Business Process Improvement
    {
        id: "session-007",
        courseId: "business-process-improvement",
        venueId: "dubai",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-07-20")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-07-22")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-07-13")),
        duration: "3 Days",
        price: 3500,
        currency: "GBP",
        availableSeats: 15,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Virtual",
        status: "Upcoming",
        notes: "",
        isFeatured: false,
        createdAt: now,
        updatedAt: now
    },

// Executive Leadership
    {
        id: "session-008",
        courseId: "executive-leadership",
        venueId: "london",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-08-03")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-08-07")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-07-27")),
        duration: "5 Days",
        price: 5500,
        currency: "GBP",
        availableSeats: 8,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Team Building & Collaboration
    {
        id: "session-009",
        courseId: "team-building-collaboration",
        venueId: "abuja",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-09-14")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-09-16")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-09-07")),
        duration: "3 Days",
        price: 3200,
        currency: "GBP",
        availableSeats: 18,
        totalSeats: 25,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: false,
        createdAt: now,
        updatedAt: now
    },

// Change Management
    {
        id: "session-010",
        courseId: "change-management",
        venueId: "dubai",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-10-19")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-10-22")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-10-12")),
        duration: "4 Days",
        price: 4800,
        currency: "GBP",
        availableSeats: 10,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Virtual",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Financial Analysis
    {
        id: "session-011",
        courseId: "financial-analysis",
        venueId: "london",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-11-02")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-11-06")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-10-26")),
        duration: "5 Days",
        price: 5200,
        currency: "GBP",
        availableSeats: 14,
        totalSeats: 25,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Investment Banking
    {
        id: "session-012",
        courseId: "investment-banking",
        venueId: "dubai",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2026-12-07")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2026-12-11")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2026-11-30")),
        duration: "5 Days",
        price: 5500,
        currency: "GBP",
        availableSeats: 8,
        totalSeats: 15,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Risk Management
    {
        id: "session-013",
        courseId: "risk-management",
        venueId: "abuja",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2027-01-18")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2027-01-22")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2027-01-11")),
        duration: "5 Days",
        price: 4600,
        currency: "GBP",
        availableSeats: 12,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Virtual",
        status: "Upcoming",
        notes: "",
        isFeatured: false,
        createdAt: now,
        updatedAt: now
    },

// Supply Chain Management
    {
        id: "session-014",
        courseId: "supply-chain-management",
        venueId: "london",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2027-02-08")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2027-02-12")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2027-02-01")),
        duration: "5 Days",
        price: 4995,
        currency: "GBP",
        availableSeats: 16,
        totalSeats: 25,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Lean Six Sigma
    {
        id: "session-015",
        courseId: "lean-six-sigma",
        venueId: "dubai",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2027-03-15")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2027-03-19")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2027-03-08")),
        duration: "5 Days",
        price: 5200,
        currency: "GBP",
        availableSeats: 10,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Virtual",
        status: "Open",
        notes: "",
        isFeatured: true,
        createdAt: now,
        updatedAt: now
    },

// Logistics & Distribution
    {
        id: "session-016",
        courseId: "logistics-distribution",
        venueId: "abuja",
        startDate: admin.firestore.Timestamp.fromDate(new Date("2027-04-19")),
        endDate: admin.firestore.Timestamp.fromDate(new Date("2027-04-22")),
        registrationDeadline: admin.firestore.Timestamp.fromDate(new Date("2027-04-12")),
        duration: "4 Days",
        price: 3800,
        currency: "GBP",
        availableSeats: 15,
        totalSeats: 20,
        instructor: "",
        deliveryMode: "Classroom",
        status: "Open",
        notes: "",
        isFeatured: false,
        createdAt: now,
        updatedAt: now
    }

];