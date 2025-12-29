
import { LearningModule } from '../types';

export const taxFundamentalsModule: LearningModule = {
  id: "tax-fundamentals",
  title: "Tax Fundamentals (India)",
  category: "Tax",
  shortDescription: "Decode the Income Tax Act, FY/AY logic, and Dual Regime structures.",
  detailedDescription: "Master the structural timeline and logical pillars of the Indian Direct Tax system. Understand why the calendar year differs from the financial year.",
  learningObjectives: [
    "Distinguish between Financial Year and Assessment Year",
    "Map the 5 Heads of Income under the Act",
    "Compare Old vs New tax regimes conceptually",
    "Understand the mechanics of TDS as a credit"
  ],
  estimatedEffort: "Deep",
  iconName: "Gavel",
  levels: [
    { id: 1, title: "The Statutory Timeline", badge: "L1: Timeline", units: [{ id: "t1u1", title: "FY vs AY Logic", durationMins: 15, whyThisMatters: "Timing errors lead to penalties.", content: "Income earned in FY 2023-24 (April to March) is assessed in AY 2024-25. Knowing this lag is critical for planning advance tax.", actionableNextStep: "Identify the current AY for your last tax filing." }], quiz: [{ id: "tq1", question: "Income earned in July 2024 belongs to which Assessment Year?", correctOptionId: "o2", options: [{id: "o1", text: "AY 2024-25", explanation: "Incorrect. July 24 is in FY 24-25, so assessment is the next year."}, {id: "o2", text: "AY 2025-26", explanation: "Correct. AY is always the year following the FY."}] }] },
    { id: 2, title: "Who Is a Taxpayer", badge: "L2: Identity", units: [{ id: "t2u1", title: "PAN & Entity Logic", durationMins: 15, whyThisMatters: "Tax identity is tied to identifiers.", content: "PAN is the universal identifier. Residency is based on the 182-day physical presence rule, not just citizenship.", actionableNextStep: "Check if your PAN is linked to your Aadhaar." }], quiz: [{ id: "tq2", question: "What primarily determines Indian tax residency for an individual?", correctOptionId: "o2", options: [{id: "o1", text: "Having an Indian passport.", explanation: "Incorrect. Residency is about physical presence, not passport status."}, {id: "o2", text: "Days spent in India (usually 182+).", explanation: "Correct. Residency is a physical fact-based assessment."}] }] },
    { id: 3, title: "Heads of Income", badge: "L3: Structure", units: [{ id: "t3u1", title: "The 5 Buckets", durationMins: 20, whyThisMatters: "Every rupee must fit in a bucket.", content: "Salary, House Property, Business/Profession, Capital Gains, and Other Sources. Each has different rules for logic and taxation.", actionableNextStep: "Map your income sources to these 5 heads." }], quiz: [{ id: "tq3", question: "To which head does 'Savings Bank Interest' belong?", correctOptionId: "o3", options: [{id: "o1", text: "Salary", explanation: "Incorrect."}, {id: "o2", text: "Capital Gains", explanation: "Incorrect."}, {id: "o3", text: "Income from Other Sources", explanation: "Correct. It is the residual bucket for income not fitting elsewhere."}] }] },
    { id: 4, title: "Salary & Payslip", badge: "L4: Earnings", units: [{ id: "t4u1", title: "CTC vs Take-home", durationMins: 20, whyThisMatters: "Understand your deductions.", content: "Standard components include HRA, Basic, PF, and PT. Employer acts as a collection agent for the government.", actionableNextStep: "Identify the TDS component on your payslip." }], quiz: [{ id: "tq4", question: "What is CTC?", correctOptionId: "o1", options: [{id: "o1", text: "The total expense an employer incurs for an employee.", explanation: "Correct. It includes salary, perks, and statutory contributions."}, {id: "o2", text: "The money you receive in your bank.", explanation: "Incorrect. That is Net Take-home."}] }] },
    { id: 5, title: "TDS Explained", badge: "L5: Credits", units: [{ id: "t5u1", title: "Pay-as-you-earn", durationMins: 20, whyThisMatters: "TDS is a prepayment, not final tax.", content: "Form 16 (Salary) or 16A (Others) are certificates proving your tax was deposited. Verify this via Form 26AS.", actionableNextStep: "Download your latest Form 26AS." }], quiz: [{ id: "tq5", question: "What is Form 26AS?", correctOptionId: "o1", options: [{id: "o1", text: "Your consolidated tax passbook.", explanation: "Correct. It shows all tax deducted against your PAN by various entities."}, {id: "o2", text: "An investment proof.", explanation: "Incorrect. It is a record of tax paid."}] }] },
    { id: 6, title: "Taxable vs Exempt", badge: "L6: Exemptions", units: [{ id: "t6u1", title: "What the Law Excludes", durationMins: 20, whyThisMatters: "Not all inflow is taxable.", content: "Exemptions like agricultural income or gifts from relatives are not included in taxable total income.", actionableNextStep: "List non-taxable inflows you had last year." }], quiz: [{ id: "tq6", question: "Which is generally exempt from central income tax in India?", correctOptionId: "o2", options: [{id: "o1", text: "Fixed Deposit Interest.", explanation: "Incorrect. This is fully taxable under 'Other Sources'."}, {id: "o2", text: "Agricultural Income.", explanation: "Correct. Under current frameworks, it is largely exempt from central tax."}] }] },
    { id: 7, title: "Filing Obligations", badge: "L7: Filing", units: [{ id: "t7u1", title: "ITR: The Declaration", durationMins: 25, whyThisMatters: "Filing is a mandatory report card.", content: "Paying tax is the transfer of money; Filing is the reporting of details. You must file even if your tax is zero if you cross the basic limit.", actionableNextStep: "Identify the filing deadline for individuals." }], quiz: [{ id: "tq7", question: "Can you file an ITR with zero tax liability?", correctOptionId: "o1", options: [{id: "o1", text: "Yes, and it is often beneficial for loan eligibility.", explanation: "Correct. ITR is an official record of income history."}, {id: "o2", text: "No, it's only for those who owe money.", explanation: "Incorrect. Filing is a statutory disclosure requirement."}] }] },
    { id: 8, title: "Intro to GST", badge: "L8: Indirect", units: [{ id: "t8u1", title: "Consumption Tax logic", durationMins: 20, whyThisMatters: "GST affects every invoice.", content: "GST is a destination-based tax. Businesses act as collection agents. Input Tax Credit (ITC) allows businesses to avoid tax on tax.", actionableNextStep: "Check the GST split on your next restaurant bill." }], quiz: [{ id: "tq8", question: "What is Input Tax Credit (ITC)?", correctOptionId: "o2", options: [{id: "o1", text: "A loan from the government.", explanation: "Incorrect."}, {id: "o2", text: "Setting off tax paid on purchases against tax collected on sales.", explanation: "Correct. This is the core mechanism of GST value addition."}] }] },
    { id: 9, title: "Tax Discipline", badge: "L9: Hygiene", units: [{ id: "t9u1", title: "Record Keeping", durationMins: 15, whyThisMatters: "Proof is your responsibility.", content: "Maintain records for 7-8 years. Digital trails are the best defense against scrutiny notices.", actionableNextStep: "Organize digital copies of your last 3 years of ITRs." }], quiz: [{ id: "tq9", question: "How long should you ideally keep tax-related documents?", correctOptionId: "o2", options: [{id: "o1", text: "1 Year.", explanation: "Incorrect. Assessment can be reopened much later."}, {id: "o2", text: "7-8 Years.", explanation: "Correct. This covers the standard statutory look-back periods."}] }] }
  ],
  compliance: { 
    needsLegalReview: true, 
    regulatedTopic: true, 
    regulatoryReferences: ["Income Tax Act 1961"], 
    lastReviewedDate: "2024-11-22" 
  },
  seo: { 
    metaTitle: "Indian Tax Fundamentals", 
    metaDescription: "Conceptual guide to the Indian tax system." 
  }
};
