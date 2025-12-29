import React from 'react';
import { 
  ShieldCheck, BookOpen, Users, TrendingUp, FileText, Briefcase, 
  Calculator, PieChart, CreditCard, ClipboardCheck, Target, 
  Gavel, Coins, Scale, Wallet, Building2, CalendarClock, Layers, Globe,
  LayoutDashboard, CalendarRange, BrainCircuit, GitMerge
} from 'lucide-react';

export const BRAND_NAME = "Monitize";

export const SEO_CONTENT = {
  TITLE: "Monitize | Financial Clarity & Educational Infrastructure for India",
  DESCRIPTION: "Independent educational platform for Indian financial logic. Explore tax frameworks, market mechanics, and planning utilities through neutral, non-advisory workspaces."
};

/**
 * ACKNOWLEDGEMENT TEMPLATES
 * Strictly non-credentialing language for learning milestones.
 */
export const ACKNOWLEDGEMENT_STRINGS = {
  GLOBAL_HEADER: "Learning Completion Acknowledgement",
  DISCLAIMER: "This acknowledgement is not a certificate, license, or professional credential. It represents completion of educational content only.",
  SCOPE_NOTE: "This completion reflects engagement with structured learning content designed to improve conceptual understanding of financial topics. It does not certify expertise, professional competence, or regulatory qualification.",
  LEVEL_MAP: {
    1: "completed foundational learning focused on basic awareness and terminology.",
    2: "completed intermediate learning focused on understanding frameworks and logic.",
    3: "completed advanced conceptual learning focused on market behavior and limitations."
  }
};

export const HERO_CONTENT = {
  BADGE: "A Growing Community of Indian Professionals",
  HEADLINE_TOP: "Clarity in Finance",
  HEADLINE_ACCENT: "Built for India",
  SUBHEADLINE: "A neutral educational ecosystem providing the conceptual frameworks and mathematical simulators required to navigate India's financial complexity."
};

export const TRUST_INDICATORS = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#1FA67A]" />,
    text: "Neutral India-centric learning tracks"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#1FA67A]" />,
    text: "Education-first zero conflict policy"
  },
  {
    icon: <Users className="w-6 h-6 text-[#1FA67A]" />,
    text: "Verified independent professional directory"
  }
];

export const LEARNING_PATHS = [
  {
    id: "market-investing-basics",
    title: "Market & Investing Basics",
    description: "A deep 10-level progression through terminology, participant roles, and behavioral market logic.",
    icon: <Globe className="w-8 h-8 text-[#1FA67A]" />,
    effort: "Deep",
    topics: [
      { title: "Participant Roles", type: "Awareness" },
      { title: "Volatility Mechanics", type: "Framework" },
      { title: "Behavioral Biases", type: "Mechanical" }
    ]
  },
  {
    id: "tax-fundamentals",
    title: "Tax Fundamentals (India)",
    description: "Conceptual mapping of Direct and Indirect tax regimes, slabs, and statutory timelines.",
    icon: <Gavel className="w-8 h-8 text-[#1FA67A]" />,
    effort: "Deep Progression",
    topics: [
      { title: "FY vs AY Logic", type: "Foundation" },
      { title: "Heads of Income", type: "Structure" },
      { title: "Residential Nuance", type: "Nuance" }
    ]
  },
  {
    id: "pf-foundations",
    title: "Personal Finance Basics",
    description: "Foundational concepts of cash flow, inflation, and risk management within the Indian context.",
    icon: <Target className="w-8 h-8 text-[#1FA67A]" />,
    effort: "Deep",
    topics: [
      { title: "Inflation & Power", type: "Video" },
      { title: "Emergency Fund", type: "Explainer" },
      { title: "Insurance Risk", type: "Guide" }
    ]
  },
  {
    id: "business-msme-logic",
    title: "Business & MSME Awareness",
    description: "Financial structures and regulatory readiness frameworks for Indian business owners.",
    icon: <Briefcase className="w-8 h-8 text-[#1FA67A]" />,
    effort: "Deep",
    topics: [
      { title: "Entity Type Logic", type: "Guide" },
      { title: "GST Registration", type: "Checklist" },
      { title: "Statutory Docs", type: "Framework" }
    ]
  }
];

export const COMPLIANCE = {
  CHARTER_HEADING: "Scope of Educational Services",
  SERVICE_STANDARD_TITLE: "Platform Responsibility Charter",
  SERVICE_STANDARD_DESC: `${BRAND_NAME} is an educational technology framework. We provide conceptual structures and mathematical modeling tools. We do NOT provide investment advice, tax consultancy, or return-filing services.`,
  DISCLAIMER_TITLE: "General Regulatory Disclaimer",
  DISCLAIMER_BODY: `All content on Monitize, including simulator outputs and AI Assistant responses, is strictly for informational and educational purposes. Mathematical models are illustrative and do not account for individual nuances or future regulatory changes. Users should verify all information with a licensed professional before taking action.`,
  FOOTER_TAGLINE: "Educational Integrity Over Financial Advice"
};

export const TOOLS_LIST = [
  {
    id: "regime-simulator",
    categoryId: "tax-compliance",
    name: "Income Tax Simulator",
    description: "Educational modeling of tax liability across New and Old regimes for FY 24-25.",
    inputs: ["Regime Choice", "Income Heads", "Deductions"],
    outputType: "Regime Comparison",
    actionText: "Run Simulation",
    learningLinkId: "tax-fundamentals",
    icon: <Scale className="w-5 h-5" />
  },
  {
    id: "advance-tax-awareness",
    categoryId: "tax-compliance",
    name: "Advance Tax Roadmap",
    description: "Informational guide to the Pay-As-You-Earn framework and statutory installment timelines.",
    inputs: ["Assessee Age", "Income Nature", "Tax Range"],
    outputType: "Statutory Timeline",
    actionText: "Review Roadmap",
    learningLinkId: "tax-fundamentals",
    icon: <CalendarRange className="w-5 h-5" />
  },
  {
    id: "sip-illustrator",
    categoryId: "savings-investments",
    name: "SIP Growth Illustrator",
    description: "Conceptual visualization of compounding power using user-defined periodic installments.",
    inputs: ["Installment", "Duration", "Assumed Rate"],
    outputType: "Growth Illustration",
    actionText: "View Illustration",
    learningLinkId: "market-investing-basics",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    id: "risk-reflection",
    categoryId: "savings-investments",
    name: "Risk Tolerance Reflection",
    description: "Behavioral exercise to identify your emotional baseline regarding market uncertainty.",
    inputs: ["Emotional Responses", "Scenario Choices"],
    outputType: "Behavioral Archetype",
    actionText: "Start Reflection",
    learningLinkId: "market-investing-basics",
    icon: <BrainCircuit className="w-5 h-5" />
  },
  {
    id: "emi-calculator",
    categoryId: "loans-obligations",
    name: "Loan EMI Estimator",
    description: "Mathematical breakdown of principal and interest components in loan repayments.",
    inputs: ["Loan Amount", "Interest Rate", "Tenure"],
    outputType: "Amortization View",
    actionText: "Calculate Estimate",
    learningLinkId: "pf-foundations",
    icon: <CreditCard className="w-5 h-5" />
  },
  {
    id: "business-structure-awareness",
    categoryId: "business-msme",
    name: "Structure Awareness Tool",
    description: "Neutral comparison of Proprietorship, LLP, and Pvt Ltd frameworks for Indian entities.",
    inputs: ["Ownership Count", "Capital Range", "Liability Preference"],
    outputType: "Structural Comparison",
    actionText: "Compare Structures",
    learningLinkId: "business-msme-logic",
    icon: <GitMerge className="w-5 h-5" />
  },
  {
    id: "compliance-checklist",
    categoryId: "business-msme",
    name: "Compliance Readiness Review",
    description: "Informational overview of statutory obligations for Indian business entities.",
    inputs: ["Entity Type", "Turnover Range"],
    outputType: "Readiness Roadmap",
    actionText: "Start Review",
    learningLinkId: "business-msme-logic",
    icon: <ClipboardCheck className="w-5 h-5" />
  },
  {
    id: "financial-snapshot",
    categoryId: "personal-overview",
    name: "Financial Snapshot",
    description: "Consolidated high-level visualization of self-reported assets and obligations.",
    inputs: ["Assets", "Liabilities"],
    outputType: "Net Worth Awareness",
    actionText: "View Snapshot",
    learningLinkId: "pf-foundations",
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: "budget-planner",
    categoryId: "personal-overview",
    name: "Budget Allocation Planner",
    description: "A conceptual tool to visualize income distribution across survival, lifestyle, and savings.",
    inputs: ["Net Income", "Needs", "Wants", "Savings"],
    outputType: "Resource Allocation Perspective",
    actionText: "Plan Allocation",
    learningLinkId: "pf-foundations",
    icon: <LayoutDashboard className="w-5 h-5" />
  }
];

export const TOOL_CATEGORIES = [
  { id: "tax-compliance", title: "Tax & Compliance", description: "Regime simulations and timelines.", icon: <Scale className="w-6 h-6 text-[#1FA67A]" /> },
  { id: "savings-investments", title: "Savings & Investments", description: "Compounding and growth modeling.", icon: <TrendingUp className="w-6 h-6 text-[#1FA67A]" /> },
  { id: "loans-obligations", title: "Loans & Obligations", description: "Repayment and interest breakdown.", icon: <CreditCard className="w-6 h-6 text-[#1FA67A]" /> },
  { id: "business-msme", title: "Business & MSME", description: "Entity readiness and GST awareness.", icon: <Building2 className="w-6 h-6 text-[#1FA67A]" /> },
  { id: "personal-overview", title: "Personal Overview", description: "Self-reported net worth snapshots.", icon: <Layers className="w-6 h-6 text-[#1FA67A]" /> }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Conceptual Education",
    description: "Master the foundational logic of Indian finance through structured, non-advisory learning tracks."
  },
  {
    number: "02",
    title: "Educational Simulation",
    description: "Use neutral mathematical tools to model various financial scenarios and tax regimes for awareness."
  },
  {
    number: "03",
    title: "Structural Awareness",
    description: "Map out your financial landscape using data-driven frameworks and self-reported snapshot utilities."
  },
  {
    number: "04",
    title: "Professional Discovery",
    description: "Connect with vetted independent experts for personalized advice and statutory execution."
  }
];

export const CORE_OFFERINGS = [
  {
    id: "learn",
    title: "Learning Tracks",
    description: "Comprehensive modules covering Indian taxes, market behavior, and personal finance.",
    icon: <BookOpen className="w-8 h-8 text-[#1FA67A]" />,
    actionText: "Explore Tracks"
  },
  {
    id: "tools",
    title: "Planning Tools",
    description: "Simulators calibrated for Indian income slabs, SIP growth, and loan amortization.",
    icon: <Calculator className="w-8 h-8 text-[#1FA67A]" />,
    actionText: "View Tools"
  },
  {
    id: "compliance",
    title: "Compliance Roadmaps",
    description: "Informational checklists and timelines for individual and business statutory needs.",
    icon: <ClipboardCheck size={32} className="text-[#1FA67A]" />,
    actionText: "Check Readiness"
  },
  {
    id: "directory",
    title: "Expert Gateway",
    description: "A neutral directory of verified independent professionals for specialized advice.",
    icon: <Users className="w-8 h-8 text-[#1FA67A]" />,
    actionText: "Find Experts"
  }
];

export const TOOLS_PREVIEW = [
  {
    name: "Income Tax Simulator",
    category: "Tax & Compliance",
    actionText: "Run Simulation",
    icon: <Scale className="w-5 h-5" />
  },
  {
    name: "SIP Growth Illustrator",
    category: "Savings & Investments",
    actionText: "View Illustration",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    name: "Loan EMI Estimator",
    category: "Loans & Obligations",
    actionText: "Calculate Estimate",
    icon: <CreditCard className="w-5 h-5" />
  }
];