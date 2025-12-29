import { LearningModule } from '../types';

export const scheduleIIIAuditModule: LearningModule = {
  id: "schedule-iii-audit",
  title: "Financial Statements – The Audit Report",
  /* Fixed: Added missing category property */
  category: "Technical",
  shortDescription: "Understand the logic of the Auditor's opinion, key audit matters, and the purpose of statutory verification.",
  detailedDescription: "A technical guide to interpreting the Independent Auditor's Report. This module explains the different types of opinions, the conceptual boundary between management and auditor responsibilities, and how to read the 'CARO' reporting mandated in India. Educational awareness only. This module does not constitute audit, legal, or professional advice.",
  learningObjectives: [
    "Identify the foundational purpose of a Statutory Audit",
    "Understand the four types of Audit Opinions (Unqualified, Qualified, Adverse, Disclaimer)",
    "Grasp the logic of 'Materiality' in financial reporting",
    "Distinguish between Management's and Auditor's responsibilities",
    "Identify Key Audit Matters (KAM) and Emphasis of Matter (EoM) paragraphs",
    "Understand the statutory checklist of CARO (Companies Auditor's Report Order)"
  ],
  estimatedEffort: "Deep",
  iconName: "ShieldCheck",
  levels: [
    {
      id: 1,
      title: "Purpose of the Audit Report",
      badge: "L1: Assurance Logic",
      units: [
        {
          id: "audit-1-u1",
          title: "The Third-Party Verdict",
          durationMins: 20,
          whyThisMatters: "Financial statements are management's claims; the audit is the verification.",
          content: "A statutory audit provides 'Reasonable Assurance' that the financial statements are free from material misstatement. It is not a guarantee of 100% accuracy, but a logical check by an independent professional (Chartered Accountant). The report is the final output where the auditor speaks directly to the shareholders about the reliability of the numbers.",
          actionableNextStep: "Locate the 'Independent Auditor's Report' in an annual report and identify the 'Opinion' section at the beginning.",
          structuralExplanation: ["Reasonable Assurance", "Professional Skepticism"],
          legalContext: ["Section 143 of Companies Act 2013"]
        }
      ],
      quiz: [
        {
          id: "aud-q1",
          question: "What does an auditor conceptually provide to stakeholders?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Reasonable assurance that financials are fairly presented.", explanation: "Correct. Auditors provide assurance, not a guarantee of absolute correctness." },
            { id: "opt2", text: "A certificate that the company will never go bankrupt.", explanation: "Incorrect. An audit is a historical verification, not a future prophecy." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Opinion Hierarchy",
      badge: "L2: Trust Signals",
      units: [
        {
          id: "audit-2-u1",
          title: "Unqualified vs. Modified Opinions",
          durationMins: 25,
          whyThisMatters: "The wording of the opinion determines the quality of the financial record.",
          content: "1. Unqualified (Clean): Everything is fine. 2. Qualified: Everything is fine 'except' for specific items. 3. Adverse: The records do not show a true and fair view. 4. Disclaimer: The auditor couldn't get enough evidence to form any opinion. Logic: A clean opinion is the baseline requirement for trust in capital markets.",
          actionableNextStep: "Check if the audit opinion starts with 'In our opinion... the aforesaid financial statements give a true and fair view'."
        }
      ],
      quiz: [
        {
          id: "aud-q2",
          question: "Which opinion is issued if the auditor finds significant, widespread errors that mislead the user?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Qualified Opinion", explanation: "Incorrect. Qualified is for specific, non-pervasive errors." },
            { id: "opt2", text: "Adverse Opinion", explanation: "Correct. Adverse means the financials as a whole do not represent reality." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Emphasis & Key Matters",
      badge: "L3: Focus Zones",
      units: [
        {
          id: "audit-3-u1",
          title: "KAM and EoM Logic",
          durationMins: 25,
          whyThisMatters: "These paragraphs highlight where the business is most complex or risky.",
          content: "Key Audit Matters (KAM) describe areas that required the most auditor attention (e.g., complex valuations). Emphasis of Matter (EoM) is used to highlight something already in the notes that the auditor thinks is crucial (e.g., a massive legal dispute). Logic: These sections tell you where the auditor spent their 'most difficult hours'.",
          actionableNextStep: "Read the KAM section to see which accounting estimate (like inventory valuation) was deemed most complex this year."
        }
      ],
      quiz: [
        {
          id: "aud-q3",
          question: "Where would an auditor highlight a significant legal case that might bankrupt the company?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Title Page", explanation: "Incorrect." },
            { id: "opt2", text: "Emphasis of Matter Paragraph", explanation: "Correct. This is used to draw attention to matters fundamental to the user's understanding." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Who Is Responsible?",
      badge: "L4: Liability Logic",
      units: [
        {
          id: "audit-4-u1",
          title: "Management vs. Auditor",
          durationMins: 20,
          whyThisMatters: "Auditors are not responsible for preparing the numbers; management is.",
          content: "The logic of accountability is split. Management is responsible for: 1. Preparing the financials. 2. Maintaining Internal Controls. 3. Preventing Fraud. The Auditor is responsible for: 1. Expressing an opinion on those financials. 2. Reporting if the controls actually work. Understanding this boundary prevents 'Auditor Blame' for management failures.",
          actionableNextStep: "Locate the 'Management's Responsibility' section to see the official pledge of accuracy."
        }
      ],
      quiz: [
        {
          id: "aud-q4",
          question: "Who is primarily responsible for preventing fraud within a company?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The Statutory Auditor", explanation: "Incorrect. They only check for material misstatements; they are not a police force." },
            { id: "opt2", text: "Management and those Charged with Governance", explanation: "Correct. Internal safety and prevention logic rests with the company leadership." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Going Concern & Materiality",
      badge: "L5: Survival Math",
      units: [
        {
          id: "audit-5-u1",
          title: "The Assumption of Continuity",
          durationMins: 25,
          whyThisMatters: "If the 'Going Concern' assumption fails, the valuation of assets changes entirely.",
          content: "Audit logic assumes the company will survive for at least 12 months (Going Concern). If the auditor has 'Material Uncertainty' about this, they must report it. Materiality is the concept that an error only matters if it would change a user's decision. A ₹1 Crore error is material for a startup, but might be 'Immaterial' for Reliance.",
          actionableNextStep: "Search for the term 'Material Uncertainty' in the audit report of a company facing financial stress."
        }
      ],
      quiz: [
        {
          id: "aud-q5",
          question: "What does the 'Materiality' principle imply logically?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Auditors focus on errors large enough to impact user decisions.", explanation: "Correct. It is a logic of significance, not just arithmetic perfection." },
            { id: "opt2", text: "Auditors check every single rupee of every transaction.", explanation: "Incorrect. This would be impossible; audits work on sampling and materiality." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "CARO 2020: The Indian List",
      badge: "L6: Statutory Check",
      units: [
        {
          id: "audit-6-u1",
          title: "Specific Reporting Mandates",
          durationMins: 30,
          whyThisMatters: "CARO provides deep insights into inventory, loans to directors, and physical verification.",
          content: "The Companies Auditor's Report Order (CARO) is an Indian-specific requirement where auditors must answer specific questions: 1. Is inventory physically verified? 2. Are title deeds of land held in the company's name? 3. Are statutory dues (PF, GST) paid on time? 4. Has the company defaulted on loans? CARO is often where the most useful 'Red Flags' are found. Educational awareness only.",
          actionableNextStep: "Read the 'Annexure to the Independent Auditor's Report' (CARO) and check the clause on 'Statutory Dues'."
        }
      ],
      quiz: [
        {
          id: "aud-q6",
          question: "Where would you find information about whether the company is paying its PF/ESI dues regularly?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "In the P&L account.", explanation: "Incorrect. The P&L shows the expense, not the compliance status." },
            { id: "opt2", text: "In the CARO Annexure to the Audit Report.", explanation: "Correct. Auditors must specifically report on the regularity of statutory payments here." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Companies Act 2013", "Standards on Auditing (SAs)", "CARO 2020"],
    lastReviewedDate: "2024-05-20"
  },
  seo: {
    metaTitle: "Audit Report Literacy India",
    metaDescription: "Learn how to read and interpret the Statutory Audit Report and CARO 2020 under Indian Law."
  }
};
