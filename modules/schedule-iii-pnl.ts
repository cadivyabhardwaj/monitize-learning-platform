import { LearningModule } from '../types';

export const scheduleIIIPnLModule: LearningModule = {
  id: "schedule-iii-pnl",
  title: "Financial Statements – Statement of Profit & Loss",
  /* Fixed: Added missing category property */
  category: "Technical",
  shortDescription: "Understand the statutory format, classification, and disclosure requirements for P&L under Schedule III.",
  detailedDescription: "A technical deconstruction of the Statement of Profit and Loss as prescribed by the Companies Act, 2013. This module covers the accrual logic, revenue recognition, expense categorization, and the presentation of comprehensive income. Educational awareness only. This module explains statutory presentation under Schedule III of the Companies Act, 2013 and does not constitute accounting, audit, or professional advice.",
  learningObjectives: [
    "Identify the mandatory format of P&L under Schedule III",
    "Distinguish between Revenue from Operations and Other Income",
    "Understand the classification of expenses (COGS, Employee Benefits, Finance Costs)",
    "Identify Exceptional and Extraordinary items",
    "Recognize Tax Expense components (Current vs Deferred)",
    "Understand the significance of EPS and Other Comprehensive Income (OCI)"
  ],
  estimatedEffort: "Deep",
  iconName: "ClipboardCheck",
  levels: [
    {
      id: 1,
      title: "Purpose of Statement of Profit & Loss",
      badge: "L1: Performance Logic",
      units: [
        {
          id: "pnl-1-u1",
          title: "The Accrual Foundation",
          durationMins: 20,
          whyThisMatters: "P&L is a record of performance, not cash movement.",
          content: "The Statement of Profit and Loss provides a snapshot of an entity's financial performance over a specific reporting period. Unlike a cash book, it follows the 'Accrual Basis' of accounting, where income is recognized when earned and expenses when incurred. Schedule III mandates a vertical format to ensure uniformity across Indian companies.",
          actionableNextStep: "Locate the 'Statement of Profit and Loss' in a public company's annual report and verify it is in vertical format.",
          structuralExplanation: ["Revenue: The top line.", "Expenses: The operational outflows.", "Profit/Loss: The residual performance."],
          accountingContext: ["Accrual Principle", "Matching Concept"],
          legalContext: ["Section 129 of Companies Act 2013", "Schedule III Division I/II/III"]
        }
      ],
      quiz: [
        {
          id: "pnl-q1",
          question: "Which accounting principle is fundamental to the Statement of Profit & Loss?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Accrual Basis", explanation: "Correct. Schedule III requires financial statements to be prepared on an accrual basis." },
            { id: "opt2", text: "Cash Basis", explanation: "Incorrect. Companies Act generally prohibits cash-basis reporting for financial statements." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Revenue from Operations vs Other Income",
      badge: "L2: Inflow Logic",
      units: [
        {
          id: "pnl-2-u1",
          title: "Classifying Inflows",
          durationMins: 25,
          whyThisMatters: "Mixing core revenue with incidental gains obscures business health.",
          content: "Schedule III requires a clear distinction between 'Revenue from Operations' (earned from the main business activity) and 'Other Income' (interest, dividends, gain on sale of investments). For a manufacturing company, selling scrap is Other Income; for a scrap dealer, it is Revenue from Operations.",
          actionableNextStep: "Check the 'Notes to Accounts' for Revenue to see what constitutes the company's primary business.",
          structuralExplanation: ["Gross Sales", "Excise/GST impacts (netting off logic)", "Incidental Incomes"],
          commonMisinterpretations: ["All cash receipts are Revenue.", "Interest income is always Other Income (not true for NBFCs)."]
        }
      ],
      quiz: [
        {
          id: "pnl-q2",
          question: "How should interest income be classified for a standard manufacturing company?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Revenue from Operations", explanation: "Incorrect. Interest is not the primary operating activity of a manufacturer." },
            { id: "opt2", text: "Other Income", explanation: "Correct. It is an incidental inflow for non-financial entities." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Expense Classification & Presentation",
      badge: "L3: Outflow Logic",
      units: [
        {
          id: "pnl-3-u1",
          title: "The Standard Buckets",
          durationMins: 25,
          whyThisMatters: "Uniform classification allows for cross-industry comparison.",
          content: "Expenses must be grouped into specific heads: 1. Cost of Materials Consumed, 2. Purchase of Stock-in-Trade, 3. Changes in Inventories, 4. Employee Benefit Expenses, 5. Finance Costs, 6. Depreciation & Amortization, and 7. Other Expenses. This standardization prevents companies from hiding specific costs in vague categories.",
          actionableNextStep: "Examine 'Employee Benefit Expenses' to see the split between salaries, PF contributions, and staff welfare.",
          structuralExplanation: ["Variable Costs (Materials)", "Finance Costs (Interest)", "Non-cash Costs (Depreciation)"],
          constraintsAndRisks: ["Capitalization of expenses", "Overstatement of inventory"]
        }
      ],
      quiz: [
        {
          id: "pnl-q3",
          question: "Where would 'Interest on Bank Loan' be classified under Schedule III?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Finance Costs", explanation: "Correct. Finance costs include interest and other borrowing costs." },
            { id: "opt2", text: "Other Expenses", explanation: "Incorrect. Schedule III has a specific head for finance-related costs." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Exceptional Items & Tax Expense",
      badge: "L4: The Bottom Line",
      units: [
        {
          id: "pnl-4-u1",
          title: "Beyond Normal Operations",
          durationMins: 25,
          whyThisMatters: "Exceptional items can distort the perception of recurring profit.",
          content: "Exceptional items are incomes or expenses that arise from events within the business but are of such size or nature that they need separate disclosure (e.g., disposal of a factory). Tax Expense includes 'Current Tax' (payable now) and 'Deferred Tax' (accounting for timing differences between book profit and tax profit).",
          actionableNextStep: "Check if the company has a 'Deferred Tax Asset' or 'Liability' on the Balance Sheet linked to the P&L tax expense.",
          structuralExplanation: ["PBT (Profit Before Tax)", "PAT (Profit After Tax)", "Tax Reconciliation"],
          accountingContext: ["AS-22 / Ind AS 12 (Income Taxes)"]
        }
      ],
      quiz: [
        {
          id: "pnl-q4",
          question: "Does Profit After Tax (PAT) always represent cash available for dividends?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, it is the net profit.", explanation: "Incorrect. PAT includes non-cash items like depreciation and deferred tax." },
            { id: "opt2", text: "No, because it includes non-cash adjustments and accruals.", explanation: "Correct. Profitability and liquidity are distinct concepts." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "EPS, OCI & Disclosure Notes",
      badge: "L5: Shareholder Logic",
      units: [
        {
          id: "pnl-5-u1",
          title: "Earnings and Comprehensive View",
          durationMins: 20,
          whyThisMatters: "EPS is the primary link between accounting profit and stock market value.",
          content: "Earnings Per Share (EPS) must be disclosed on the face of the P&L (Basic and Diluted). For companies following Ind AS, 'Other Comprehensive Income' (OCI) captures gains/losses that aren't recognized in the P&L yet (like revaluation of assets). Disclosure Notes provide the granular detail behind the summarized numbers.",
          actionableNextStep: "Compare Basic EPS and Diluted EPS. If they differ, look for potential dilution from ESOPs or convertible debt.",
          structuralExplanation: ["Weighted Average Shares", "Items not reclassifiable to P&L", "Segment Reporting"],
          legalContext: ["AS-20 / Ind AS 33 (EPS)"]
        }
      ],
      quiz: [
        {
          id: "pnl-q5",
          question: "What does 'Diluted EPS' account for?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Potential shares from convertible instruments or options.", explanation: "Correct. It shows the 'worst case' earnings spread if all potential shares are issued." },
            { id: "opt2", text: "Only the shares currently held by promoters.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "What P&L Does NOT Tell You",
      badge: "L6: Critical Limits",
      units: [
        {
          id: "pnl-6-u1",
          title: "The Limits of the Income Statement",
          durationMins: 20,
          whyThisMatters: "Over-reliance on P&L alone leads to a misunderstanding of solvency.",
          content: "1. P&L does not show Cash Flow (A company can be profitable and bankrupt). 2. It does not show Valuation (Asset quality). 3. It is subject to Management Estimates (Depreciation rates, bad debt provisions). 4. It does not show Opportunity Cost. It is a historical record of recognized accounting events, not a future guarantee. Educational awareness only.",
          actionableNextStep: "Cross-reference the 'Profit' with the 'Cash Flow from Operations' to see the quality of earnings.",
          constraintsAndRisks: ["Aggressive revenue recognition", "Provision manipulation"],
          commonMisinterpretations: ["Profit = Cash", "High EPS = Safe investment"]
        }
      ],
      quiz: [
        {
          id: "pnl-q6",
          question: "Which of the following is a limitation of the P&L statement?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "It doesn't list the names of employees.", explanation: "Incorrect. This is not a financial limitation." },
            { id: "opt2", text: "It is based on accruals and estimates rather than pure cash movements.", explanation: "Correct. Accounting profit is a construct that depends on policy choices." }
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
    metaTitle: "Schedule III P&L Statement Literacy",
    metaDescription: "Learn the statutory format and logic of the Statement of Profit and Loss under the Companies Act 2013."
  }
};
