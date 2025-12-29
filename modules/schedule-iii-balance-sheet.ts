import { LearningModule } from '../types';

export const scheduleIIIBalanceSheetModule: LearningModule = {
  id: "schedule-iii-balance-sheet",
  title: "Financial Statements – Balance Sheet",
  /* Fixed: Added missing category property */
  category: "Technical",
  shortDescription: "Understand the classification of Equity, Liabilities, and Assets under Schedule III requirements.",
  detailedDescription: "A deep dive into the 'Statement of Assets and Liabilities'. This module deconstructs the grouping logic of current vs non-current items, the structure of shareholder funds, and the disclosure of contingent liabilities. Educational awareness only. This module explains statutory presentation under Schedule III of the Companies Act, 2013 and does not constitute accounting, audit, or professional advice.",
  learningObjectives: [
    "Identify the mandatory vertical format of the Balance Sheet",
    "Understand the components of Shareholder Funds (Capital vs Reserves)",
    "Distinguish between Current and Non-Current Liabilities/Assets",
    "Identify types of Assets (Fixed, Intangible, Financial)",
    "Recognize the purpose of Notes to Accounts in detail",
    "Understand the logic of the 'Operating Cycle'"
  ],
  estimatedEffort: "Deep",
  iconName: "Scale",
  levels: [
    {
      id: 1,
      title: "Purpose of Balance Sheet under Schedule III",
      badge: "L1: Structural Logic",
      units: [
        {
          id: "bs-1-u1",
          title: "The Financial Position",
          durationMins: 20,
          whyThisMatters: "The Balance Sheet is a snapshot of 'what is owned' and 'what is owed'.",
          content: "The Balance Sheet presents the financial position of a company at a specific point in time. It follows the fundamental accounting equation: Assets = Equity + Liabilities. Schedule III Division I/II prescribes a specific order of presentation to ensure stakeholders can evaluate liquidity and solvency consistently.",
          actionableNextStep: "Verify that the 'Total Assets' matches 'Total Equity & Liabilities' in your chosen annual report.",
          structuralExplanation: ["Equity: Owners' stake.", "Liabilities: External obligations.", "Assets: Economic resources."],
          legalContext: ["Companies Act 2013 Schedule III"]
        }
      ],
      quiz: [
        {
          id: "bs-q1",
          question: "In Schedule III, what is the required presentation format?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Horizontal (T-shape)", explanation: "Incorrect. Traditional horizontal format is no longer used for statutory filing." },
            { id: "opt2", text: "Vertical", explanation: "Correct. Schedule III mandates a vertical format starting with Equity & Liabilities." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Equity & Liabilities Structure",
      badge: "L2: Sources of Funds",
      units: [
        {
          id: "bs-2-u1",
          title: "Shareholders and Creditors",
          durationMins: 25,
          whyThisMatters: "Understanding the priority of claims is essential for solvency awareness.",
          content: "1. Share Capital: The face value of shares. 2. Reserves & Surplus: Accumulated profits (Retained Earnings). 3. Long-term Borrowings: Debt due after 12 months. 4. Trade Payables: Dues to suppliers. Schedule III requires splitting debt into 'Current' and 'Non-Current' based on the expected date of repayment.",
          actionableNextStep: "Identify 'Retained Earnings' in the Reserves section; this is the link from the P&L.",
          structuralExplanation: ["Authorized vs Issued Capital", "Secured vs Unsecured Loans", "MSME Dues in Trade Payables"]
        }
      ],
      quiz: [
        {
          id: "bs-q2",
          question: "Where are accumulated profits shown on the Balance Sheet?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Reserves and Surplus", explanation: "Correct. This is where undistributed profits from the P&L are parked." },
            { id: "opt2", text: "Trade Payables", explanation: "Incorrect. This represents dues to suppliers for purchases." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Assets Classification & Disclosure",
      badge: "L3: Resource Logic",
      units: [
        {
          id: "bs-3-u1",
          title: "Tangible, Intangible, and Financial",
          durationMins: 25,
          whyThisMatters: "Asset classification determines how value is realized over time.",
          content: "Assets are categorized by their nature. Property, Plant & Equipment (Tangible) are used for production. Intangibles (Software, Patents) have no physical form. Financial Assets (Cash, Investments) represent claims to future value. Schedule III mandates disclosure of 'Capital Work-in-Progress' for assets currently being built.",
          actionableNextStep: "Check if the company has 'Goodwill' under Intangible Assets; this usually indicates a past acquisition.",
          structuralExplanation: ["PPE (Property, Plant, Equip)", "Inventories", "Trade Receivables"],
          accountingContext: ["AS-10 / Ind AS 16 (PPE)"]
        }
      ],
      quiz: [
        {
          id: "bs-q3",
          question: "How is a factory building under construction classified?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Inventory", explanation: "Incorrect unless the company is a real estate developer." },
            { id: "opt2", text: "Trade Receivable", explanation: "Incorrect." },
            { id: "opt3", text: "Capital Work-in-Progress", explanation: "Correct. Assets under construction have a dedicated head under Schedule III." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Current vs Non-Current Logic",
      badge: "L4: The Time Divide",
      units: [
        {
          id: "bs-4-u1",
          title: "The Operating Cycle",
          durationMins: 30,
          whyThisMatters: "Current items determine the company's ability to pay bills next month.",
          content: "Schedule III uses two criteria for 'Current': 1. The 12-month rule (expected within a year). 2. The Operating Cycle rule (the time from cash-to-inventory-to-cash). If a project takes 18 months, items related to it can still be 'Current'. Anything else is 'Non-Current'. This distinction is the basis for liquidity analysis.",
          actionableNextStep: "Read the 'Significant Accounting Policies' note to find the company's defined Operating Cycle.",
          structuralExplanation: ["Liquidity vs Solvency", "Current Ratio basis"],
          accountingContext: ["Management decides the operating cycle based on business nature."]
        }
      ],
      quiz: [
        {
          id: "bs-q4",
          question: "If a loan is due for repayment in 18 months, how is it generally classified?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Current Liability", explanation: "Incorrect (unless it fits a very long operating cycle)." },
            { id: "opt2", text: "Non-Current Liability", explanation: "Correct. It exceeds the standard 12-month threshold." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Notes to Accounts & Schedules",
      badge: "L5: Granularity",
      units: [
        {
          id: "bs-5-u1",
          title: "The Detail behind the Summary",
          durationMins: 20,
          whyThisMatters: "The face of the Balance Sheet is just a summary; the truth is in the Notes.",
          content: "Schedule III mandates specific disclosures in the Notes: 1. Aging of Trade Receivables (how old is the debt?). 2. Relationships with related parties. 3. Details of shareholding (who owns >5%). 4. Contingent Liabilities (legal cases that *might* cost money).",
          actionableNextStep: "Look for 'Contingent Liabilities' – these are significant risks not recorded in the numbers yet.",
          accountingContext: ["Auditors focus heavily on aging schedules and related party disclosures."]
        }
      ],
      quiz: [
        {
          id: "bs-q5",
          question: "Where would you find information about a pending court case against the company?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Fixed Assets Schedule", explanation: "Incorrect." },
            { id: "opt2", text: "Notes to Accounts: Contingent Liabilities", explanation: "Correct. Potential future obligations are disclosed here." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "What Balance Sheet Does NOT Show",
      badge: "L6: Critical Limits",
      units: [
        {
          id: "bs-6-u1",
          title: "Market Value vs Book Value",
          durationMins: 20,
          whyThisMatters: "Assets are often recorded at cost, not what they are worth today.",
          content: "1. The Balance Sheet shows 'Historical Cost', not Market Value (Ind AS uses more 'Fair Value' but not for all items). 2. It does not value Human Capital (The employees). 3. It does not show Brand Value (unless purchased). 4. It is a static snapshot; it doesn't show the 'momentum' of the business. Educational awareness only.",
          actionableNextStep: "Compare the 'Book Value' of a company with its 'Market Cap' on a stock exchange."
        }
      ],
      quiz: [
        {
          id: "bs-q6",
          question: "Why might a company's land be undervalued on the Balance Sheet?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It is recorded at the price it was bought for decades ago (Historical Cost).", explanation: "Correct. Traditional accounting records assets at cost, ignoring market appreciation." },
            { id: "opt2", text: "Because the company wants to hide its wealth.", explanation: "Incorrect. This is a standard accounting principle, not a choice to hide assets." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Companies Act 2013", "Schedule III", "Accounting Standards"],
    lastReviewedDate: "2024-05-20"
  },
  seo: {
    metaTitle: "Schedule III Balance Sheet Literacy",
    metaDescription: "Understand the grouping and classification logic of Assets and Liabilities under the Companies Act 2013."
  }
};
