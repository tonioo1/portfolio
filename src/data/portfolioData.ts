import { ProjectItem, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: "Antonio Jr. Camacho",
  program: "BS in Computer Science (4th year), Undergraduate",
  careerInterests: [
    "AI-Assisted Web Development",
    "Graphic Designing",
    "Front End Developing"
  ],
  contacts: {
    email: "danolexcamacho@gmail.com",
    mobile: "+63 927 065 0423",
    location: "Philippines",
    github: "https://github.com/tonioo1",
    instagram: "https://www.instagram.com/lazy.hippo24/?utm_source=ig_web_button_share_sheet"
  }
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "figma",
    name: "Figma",
    category: "Tools & Software",
    proficiency: 85,
    experience: "UI/UX & Graphic Design",
    tagline: "Wireframing, Auto Layout & Design Systems",
    description: "Creating responsive web layouts, interactive prototypes, design tokens, and graphic visual assets with component variants and auto-layout precision.",
    highlightCodeOrWorkflow: `// Figma Design System Workflow
- Master Component Architecture
- Auto-Layout & Fluid Grids (8pt Baseline)
- Design Tokens: Typography, Color & Spacings
- Interactive High-Fidelity Micro-Prototypes`
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools & Software",
    proficiency: 50,
    experience: "Primary IDE",
    tagline: "Extensions, Debugging & Tooling",
    description: "Daily development hub configured for rapid development, source control management, snippets, and integrated terminal workflows.",
    highlightCodeOrWorkflow: `// VS Code Daily Stack
- Extensions: Prettier, ESLint, Tailwind CSS IntelliSense
- Integrated Terminal & Git branch management
- Workspace debugging & multi-file refactoring`
  },
  {
    id: "aistudio",
    name: "Google AI Studio",
    category: "Tools & Software",
    proficiency: 70,
    experience: "AI Prototyping",
    tagline: "Prompt Engineering & Multimodal AI",
    description: "Prototyping modern web features using Gemini models, system instructions, structured JSON outputs, multimodal reasoning, and rapid experimentation.",
    highlightCodeOrWorkflow: `// Google AI Studio Workflow
- System Instructions & Few-Shot Prompt Engineering
- Structured JSON Schema Outputs for Web Engines
- Multimodal Image & Document Analysis Prototyping`
  },
  {
    id: "java",
    name: "Java",
    category: "Languages & Tech",
    proficiency: 40,
    experience: "Core Academic Curriculum",
    tagline: "OOP, Data Structures & Algorithms",
    description: "Building reliable console systems, algorithmic logic, object hierarchies, data manipulation models, and software design patterns.",
    highlightCodeOrWorkflow: `public class SoftwareEngine {
    private String engineer = "Antonio Jr. Camacho";
    
    public void executeLogic() {
        System.out.println("Compiling robust CS solutions...");
    }
}`
  },
  {
    id: "php",
    name: "PHP",
    category: "Languages & Tech",
    proficiency: 50,
    experience: "Server-Side Scripting",
    tagline: "Server-Side Scripting & Database I/O",
    description: "Developing dynamic server-rendered pages, authentication flows, session handling, relational database queries, and backend services.",
    highlightCodeOrWorkflow: `<?php
// Dynamic Server Endpoint
header('Content-Type: application/json');
$student = [
    'name' => 'Antonio Jr. Camacho',
    'program' => 'BS Computer Science (4th Year)',
    'skills' => ['Java', 'PHP', 'HTML', 'CSS', 'Figma']
];
echo json_encode($student);
?>`
  },
  {
    id: "html",
    name: "HTML",
    category: "Languages & Tech",
    proficiency: 75,
    experience: "Foundation Standard",
    tagline: "Semantic Elements & Accessibility",
    description: "Writing clean semantic markup that respects accessibility (ARIA, WCAG standards), SEO best practices, and well-structured document hierarchy.",
    highlightCodeOrWorkflow: `<article class="portfolio-item" role="region">
  <header>
    <h1>Modern Frontend Architecture</h1>
    <time datetime="2026-10-28">Academic Year 2026</time>
  </header>
  <p>Semantic, accessible, and standards-compliant.</p>
</article>`
  },
  {
    id: "css",
    name: "CSS",
    category: "Languages & Tech",
    proficiency: 75,
    experience: "UI Styling & Animations",
    tagline: "Flexbox, CSS Grid & Responsive Motion",
    description: "Crafting bespoke visual styling, responsive design across mobile and desktop viewports, custom keyframes, Tailwind utilities, and smooth micro-interactions.",
    highlightCodeOrWorkflow: `.card-editorial {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(12px);
}`
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "academic-portal",
    title: "University Course & Student Information Engine",
    subtitle: "Full-Stack Academic Record & Enrollment Portal",
    category: "software",
    role: "Lead Full-Stack Developer & Database Architect",
    tools: ["Java", "PHP", "HTML", "CSS", "VS Code"],
    summary: "An integrated student management system engineered for academic tracking, course prerequisites verification, and role-based grade management.",
    problem: "Academic departments struggle with manual record keeping, fragmented spreadsheets, and error-prone prerequisite validation during semester enrollment.",
    solution: "Engineered an end-to-end portal featuring automated prerequisite checking in Java, authenticated PHP API endpoints, and a responsive frontend interface.",
    keyFeatures: [
      "Prerequisite validation algorithm preventing scheduling clashes",
      "Secure student/faculty authentication with role-based permissions",
      "Dynamic grade calculator and semester GPA distribution analytics",
      "Exportable grade records and PDF summary generations"
    ],
    metricsOrOutcome: "Reduced scheduling conflicts in simulations to 0% with sub-100ms response time for curriculum lookup queries."
  },
  {
    id: "interactive-portfolio",
    title: "Creative Developer & Student Portfolio Space",
    subtitle: "Clean Editorial Portfolio Architecture",
    category: "frontend",
    role: "Sole Designer & Frontend Engineer",
    tools: ["HTML", "CSS", "Figma", "VS Code"],
    summary: "A distinctive personal portfolio inspired by modern award-winning studios (CartoonEast style), focusing on clean typography and crisp whitespace.",
    problem: "Traditional student resumes and portfolios look identical, static, and fail to convey both software engineering depth and creative visual sensibilities.",
    solution: "Built a customized web platform with zero-pill typography, audio clicks, right-aligned hierarchy, and responsive micro-interactions.",
    keyFeatures: [
      "Minimalist right-aligned editorial layout",
      "Custom Web Audio API synthesizer for tactile click feedback",
      "Responsive layout optimized from mobile viewports to desktop",
      "Dynamic project case study inspector and one-click contact flows"
    ],
    metricsOrOutcome: "Clean, fast-loading, zero bloat, and fully responsive."
  },
  {
    id: "gemini-study-copilot",
    title: "Multimodal AI Study & Exam Review Assistant",
    subtitle: "Intelligent Concept Decomposition & Quiz Generator",
    category: "ai",
    role: "AI Workflow Architect & Frontend Designer",
    tools: ["Google AI Studio", "HTML", "CSS", "VS Code", "PHP"],
    summary: "An academic prototype that transforms complex Computer Science textbooks, algorithms, and code snippets into interactive flashcards and practice quizzes.",
    problem: "Reviewing comprehensive 4th-year CS topics (Operating Systems, Distributed Systems) requires synthesizing hundreds of dense academic pages.",
    solution: "Utilized Google AI Studio to engineer prompt matrices that decompose algorithms into step-by-step mental models with self-testing questions.",
    keyFeatures: [
      "Gemini prompt engineering with structured JSON schema outputs",
      "Interactive step-by-step algorithm walkthroughs",
      "Self-generating quiz system with instant answer explanation",
      "Clean study interface designed in Figma"
    ],
    metricsOrOutcome: "Generates high-accuracy practice questions across 8 core CS subjects with verified conceptual explanations."
  },
  {
    id: "zenith-ui-design-system",
    title: "Zenith: Modern Dark Editorial Design System",
    subtitle: "Design Tokens, Figma Component Library & Vector Icons",
    category: "design",
    role: "UI/UX Graphic Designer",
    tools: ["Figma", "CSS", "HTML"],
    summary: "A comprehensive design system created in Figma featuring 80+ components, typography scale, color tokens, and layout guidelines for student developers.",
    problem: "Students and solo developers often struggle to maintain visual consistency across disparate screens, resulting in disjointed interfaces.",
    solution: "Designed a unified Figma design system utilizing auto-layout 5.0, variables for dark/light modes, accessible color contrasts, and exported CSS stylesheets.",
    keyFeatures: [
      "Standardized 8px baseline grid and typographic scale",
      "WCAG 2.1 AA compliant color palette",
      "Interactive Figma prototype with hover states and navigation flows",
      "Direct code parity with clean CSS classes and variables"
    ],
    metricsOrOutcome: "80+ modular components built, accelerated interface prototyping time by 4x across academic design tasks."
  }
];
