import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const personalInfo = {
  name: "K Dhanush",
  role: "Python Backend Engineer",
  location: "Bengaluru, India",
  experience: "3.7+ years",
  bio: "I’m K Dhanush, a developer who builds backend systems using Python, Django, Flask & FastAPI.",
  about: "I am a passionate Python Backend Engineer with over 3.7 years of experience in building scalable APIs and healthcare platforms. I care deeply about clean code, performance, and developer experience.",
  socials: [
    { name: "GitHub", icon: Github, url: "https://github.com/Dhanush-Reddy" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/k-dhanush-053a4638b/" },
    { name: "Email", icon: Mail, url: "mailto:kottedhanush06@gmail.com" },
    { name: "Resume", icon: FileText, url: "/assets/Dhanush_Resume.pdf" }
  ]
};

export const skills = {
  backend: ["Python", "Django", "DRF", "Flask", "FastAPI", "Microservices"],
  databases: ["MySQL", "PostgreSQL"],
  cloud: ["AWS", "Docker", "Kubernetes", "Git"],
  data: ["Pandas", "NumPy"],
  tools: ["Swagger", "Jira", "PyTest", "CI/CD"]
};

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "CitiusTech",
    period: "Aug 2023 – Present",
    description: "Building healthcare platforms and scalable APIs."
  },
  {
    id: 2,
    role: "Trainee Engineer",
    company: "Quess Corp",
    period: "Aug 2022 – Jul 2023",
    description: "Worked on backend development and system optimizations."
  }
];

export const projects = [
  {
    id: 1,
    title: "HCIS Billing & Pharmacy Management System",
    tech: ["Django REST", "FastAPI", "Healthcare", "Microservices", "AWS"],
    description: "A hospital information system backend that handles patient billing and pharmacy workflows with automated approval and invoicing.",
    highlights: [
      "Secure REST APIs for billing & pharmacy",
      "Automated invoice & workflow processing",
      "AWS + Docker deployment",
      "Reduced manual interventions"
    ],
    modalContent: {
      overview: "This backend system enables hospitals to manage patient financial workflows efficiently. It connects billing, pharmacy, and patient services into a unified process with real-time synchronization.",
      architecture: [
        "Microservices built using Django REST Framework and FastAPI",
        "PostgreSQL database with optimized queries",
        "AWS EC2 & S3 for deployment",
        "Docker for containerization",
        "Authentication & RBAC with JWT",
        "Logging & monitoring for audit trails"
      ],
      scope: [
        "Create/update/search billing entries",
        "Manage pharmacy prescriptions, dispensing & stock deduction",
        "Invoice generation & approvals",
        "Insurance rules & validation workflows",
        "Error-free real-time updates across modules"
      ],
      impact: [
        "Reduced billing errors by improving data consistency",
        "Enabled automated invoicing & reports generation",
        "Improved patient service time in hospital operations"
      ]
    }
  },
  {
    id: 2,
    title: "ERP Inventory & Procurement Module",
    tech: ["Django", "MySQL", "Pandas", "ERP"],
    description: "An ERP module that manages stock levels, purchase orders, and supplier relationships with analytical reporting.",
    highlights: [
      "Stock threshold alerts",
      "Supplier & Purchase order management",
      "Analytics with Pandas",
      "Exportable reports"
    ],
    modalContent: {
      overview: "Designed to reduce manual tracking of stock and procurement processes by automating workflows from purchase request to inventory update.",
      architecture: [
        "Django backend with REST APIs",
        "MySQL relational database",
        "Pandas/NumPy for reporting and insights",
        "Inventory reconciliation rules for transparency"
      ],
      scope: [
        "Stock tracking and expiration alerts",
        "Approval workflows for procurement",
        "Supplier management & purchase orders",
        "Analytical dashboards + exports (CSV/XLSX)"
      ],
      impact: [
        "Reduced stockouts + optimized reordering",
        "Gave procurement teams real-time visibility",
        "Decreased operational cost through automation"
      ]
    }
  }
];
