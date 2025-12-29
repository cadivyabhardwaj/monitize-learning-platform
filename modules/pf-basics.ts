
import { LearningModule } from '../types';

export const pfBasicsModule: LearningModule = {
  id: "pf-foundations",
  title: "Personal Finance Basics",
  category: "Personal",
  shortDescription: "Master the logic of cash flow, inflation, and surplus management in India.",
  detailedDescription: "A foundational track for understanding money as a resource. Move from reactive survival to proactive provisioning in the Indian urban context.",
  learningObjectives: [
    "Understand how income, expenses, and liabilities interact",
    "Read an Indian salary slip without confusion (TDS, PF, PT)",
    "Distinguish between wealth-building leverage and harmful debt",
    "Build a basic monthly budget framework suited for Indian costs",
    "Grasp the concept of an Emergency Fund as a financial floor"
  ],
  estimatedEffort: "Deep",
  iconName: "Target",
  levels: [
    {
      id: 1, title: "Money & Mindset", badge: "L1: Psychology",
      units: [
        { id: "p1u1", title: "What Money Actually Represents", durationMins: 10, whyThisMatters: "Money is a tool for agency, not just status.", content: "In the Indian context, money is often viewed through the lens of social signaling. Logically, money represents 'stored time'. Separating the emotion of status from the math of survival is the first step to financial resilience.", actionableNextStep: "Identify three monthly expenses driven by 'status' rather than 'utility'." }
      ],
      quiz: [{ id: "pq1", question: "In this framework, what is the most logical definition of money?", correctOptionId: "o1", options: [{id: "o1", text: "Stored time and energy.", explanation: "Correct. Money is the medium that allows you to deploy your past labor into future resources."}, {id: "o2", text: "A measure of social success.", explanation: "Incorrect. That is a cultural perception, not a logical financial utility."}] }]
    },
    {
      id: 2, title: "Income Types in India", badge: "L2: Inflow",
      units: [
        { id: "p2u1", title: "Gross vs Net Income", durationMins: 15, whyThisMatters: "You cannot spend your CTC.", content: "Indian professionals focus on CTC (Cost to Company). However, planning must only happen on 'Take-home' (Net) income. Deductions like EPF and TDS are mandatory outflows that reduce your immediate liquidity.", actionableNextStep: "Locate your last salary slip and highlight the 'Net Pay' figure." }
      ],
      quiz: [{ id: "pq2", question: "Which figure is used for monthly survival planning?", correctOptionId: "o2", options: [{id: "o1", text: "Gross CTC.", explanation: "Incorrect. CTC includes taxes and retirement benefits you can't access today."}, {id: "o2", text: "Net Take-home Income.", explanation: "Correct. This is the actual cash available for distribution."}] }]
    },
    { id: 3, title: "Understanding Expenses", badge: "L3: Outflow", units: [{ id: "p3u1", title: "Fixed vs Variable Costs", durationMins: 15, whyThisMatters: "Fragility comes from high fixed costs.", content: "Fixed costs (Rent, EMI) are contractual. Variable costs (Dining, Travel) are elastic. A resilient budget keeps fixed costs below 45% of net income.", actionableNextStep: "Tag your expenses as 'Static' or 'Elastic'." }], quiz: [{ id: "pq3", question: "Why is high fixed-cost problematic?", correctOptionId: "o1", options: [{id: "o1", text: "It reduces survival flexibility during income gaps.", explanation: "Correct. If you lose income, fixed costs still require payment, leading to debt."}, {id: "o2", text: "It is always illegal.", explanation: "Incorrect. It's a choice of structure, not a legal issue."}] }] },
    { id: 4, title: "Savings Fundamentals", badge: "L4: The Buffer", units: [{ id: "p4u1", title: "Emergency Fund Logic", durationMins: 20, whyThisMatters: "Savings is self-insurance.", content: "An emergency fund should cover 6-12 months of survival expenses. It must be kept in liquid forms like Savings Accounts or Liquid MFs.", actionableNextStep: "Calculate your 6-month 'Survival Floor' amount." }], quiz: [{ id: "pq4", question: "What is the primary goal of an Emergency Fund?", correctOptionId: "o2", options: [{id: "o1", text: "To earn high market returns.", explanation: "Incorrect. The goal is certainty and access, not yield."}, {id: "o2", text: "Immediate capital access during life crises.", explanation: "Correct. It serves as a shock absorber."}] }] },
    { id: 5, title: "Banking Basics & Hygiene", badge: "L5: Infrastructure", units: [{ id: "p5u1", title: "UPI & Digital Security", durationMins: 15, whyThisMatters: "Convenience requires vigilance.", content: "UPI is a push mechanism. You only need a PIN to send money, never to receive. PIN sharing is the #1 cause of digital fraud in India.", actionableNextStep: "Set a daily transaction limit on your primary UPI app." }], quiz: [{ id: "pq5", question: "When is a PIN required in a UPI transaction?", correctOptionId: "o1", options: [{id: "o1", text: "Only when moving money OUT of your account.", explanation: "Correct. Receiving money requires no PIN interaction."}, {id: "o2", text: "Both for sending and receiving.", explanation: "Incorrect. Scammers often trick users into entering PINs to 'receive' money."}] }] },
    { id: 6, title: "Debt & Credit Awareness", badge: "L6: Liabilities", units: [{ id: "p6u1", title: "Good vs Harmful Debt", durationMins: 15, whyThisMatters: "Debt amplifies both growth and ruin.", content: "Good debt is used for appreciating assets (Home Loan). Harmful debt is for consumption (Credit Cards, Personal Loans for gadgets). High-interest debt destroys surplus.", actionableNextStep: "Audit your EMIs for 'Consumption' vs 'Assets'." }], quiz: [{ id: "pq6", question: "Why is Credit Card debt particularly harmful?", correctOptionId: "o1", options: [{id: "o1", text: "Compounding high interest (often 40%+).", explanation: "Correct. Revolving debt is mathematically the most expensive way to fund a lifestyle."}, {id: "o2", text: "It is not taxable.", explanation: "Incorrect. Tax status is irrelevant to the high cost of interest."}] }] },
    { id: 7, title: "Intro to Taxes", badge: "L7: Statutory", units: [{ id: "p7u1", title: "TDS & Filing Logic", durationMins: 20, whyThisMatters: "Filing is your financial citizenship.", content: "TDS is an advance tax. Filing an ITR is the final reconciliation. Even with zero tax, ITR serves as income proof for loans and visas.", actionableNextStep: "Identify your Form 26AS on the e-filing portal." }], quiz: [{ id: "pq7", question: "Does TDS deduction exempt you from filing an ITR?", correctOptionId: "o2", options: [{id: "o1", text: "Yes, tax is already paid.", explanation: "Incorrect. TDS is an estimate; the ITR is the mandatory final declaration."}, {id: "o2", text: "No, ITR is the mandatory annual reconciliation.", explanation: "Correct. Everyone above the exemption limit must file regardless of TDS."}] }] },
    { id: 8, title: "Personal Finance Hygiene", badge: "L8: Mastery", units: [{ id: "p8u1", title: "Record Keeping Habits", durationMins: 15, whyThisMatters: "Measurement is the precursor to management.", content: "Keep 8 years of financial records. Organize Salary Slips, Form 16, and Insurance policies into a single logical directory.", actionableNextStep: "Create a folder named 'Monitize_Archive_2024'." }], quiz: [{ id: "pq8", question: "What is the primary benefit of an annual money review?", correctOptionId: "o1", options: [{id: "o1", text: "To align resources with changing life goals.", explanation: "Correct. Finance is dynamic; your strategy must adapt to your life stage."}, {id: "o2", text: "To calculate ways to spend more.", explanation: "Incorrect. The goal is resilience and growth, not expanded consumption."}] }] }
  ],
  compliance: { 
    needsLegalReview: false, 
    regulatedTopic: false, 
    regulatoryReferences: ["General Literacy"], 
    lastReviewedDate: "2024-11-20" 
  },
  seo: { 
    metaTitle: "Personal Finance Basics India", 
    metaDescription: "Learn basic financial logic for the Indian market." 
  }
};
