import { LearningModule } from '../types';

export const scheduleIIICashFlowModule: LearningModule = {
  id: "schedule-iii-cash-flow",
  title: "Financial Statements – Cash Flow Statement",
  /* Fixed: Added missing category property */
  category: "Technical",
  shortDescription: "Understand the logic of cash movements through Operating, Investing, and Financing activities.",
  detailedDescription: "A technical guide to the Cash Flow Statement (AS-3 / Ind AS 7). This module explains how to reconcile accounting profit with physical cash, the importance of non-cash adjustments, and how to track where cash is generated and where it is consumed. Educational awareness only. This module explains statutory presentation under Schedule III of the Companies Act, 2013 and does not constitute accounting, audit, or professional advice.",
  learningObjectives: [
    "Identify the three mandatory categories of cash flow",
    "Understand why Net Profit is adjusted to reach Operating Cash Flow",
    "Identify Investing Activities (Capex, Investments)",
    "Identify Financing Activities (Debt, Dividends, Equity)",
    "Grasp the difference between the Direct and Indirect methods",
    "Recognize the importance of Cash Equivalents"
  ],
  estimatedEffort: "Deep",
  iconName: "History",
  levels: [
    {
      id: 1,
      title: "Why Cash Flow Statement Exists",
      badge: "L1: Liquidity Logic",
      units: [
        {
          id: "cf-1-u1",
          title: "The Reality Check",
          durationMins: 20,
          whyThisMatters: "Profit is an opinion; Cash is a fact.",
          content: "The Cash Flow Statement (CFS) is the bridge between the P&L and the Balance Sheet. While P&L shows profit on an accrual basis, the CFS shows the actual movement of currency. A company with high P&L profit can still run out of cash if its customers don't pay. The CFS is the ultimate filter for survival analysis.",
          actionableNextStep: "Locate the Cash Flow Statement and verify that the 'Ending Cash' matches the 'Cash and Bank' line on the Balance Sheet.",
          structuralExplanation: ["Generation of Cash", "Deployment of Cash", "Reconciliation with Ledger"],
          legalContext: ["AS-3 / Ind AS 7", "Mandatory for all except Small Companies/OPCs"]
        }
      ],
      quiz: [
        {
          id: "cf-q1",
          question: "Which of the following is true about the Cash Flow Statement?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It excludes non-cash items like depreciation.", explanation: "Correct. CFS only tracks actual inflows and outflows of cash." },
            { id: "opt2", text: "It is identical to the P&L statement.", explanation: "Incorrect. P&L is accrual-based; CFS is cash-based." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Operating Activities Explained",
      badge: "L2: Core Logic",
      units: [
        {
          id: "cf-2-u1",
          title: "Cash from the Engine",
          durationMins: 25,
          whyThisMatters: "Operating cash flow should ideally be the primary source of cash for a healthy company.",
          content: "Operating activities are the core income-producing activities of the company. It starts with Profit Before Tax and adds back non-cash charges (Depreciation). Then, it adjusts for changes in Working Capital. If inventory increases, it is a 'Use of Cash' (negative). If trade payables increase, it is a 'Source of Cash' (positive).",
          actionableNextStep: "Examine the 'Adjustments for Working Capital' to see if a company is struggling to collect from customers (high negative receivables adjustment).",
          structuralExplanation: ["Non-cash add-backs", "Working Capital changes", "Interest/Taxes paid"]
        }
      ],
      quiz: [
        {
          id: "cf-q2",
          question: "In the Indirect method, how is Depreciation treated in Operating Activities?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Added back to Net Profit", explanation: "Correct. Since it was deducted to find profit but didn't involve cash, it must be added back." },
            { id: "opt2", text: "Deducted from Net Profit", explanation: "Incorrect. That would double-count the non-cash expense." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Investing Activities Explained",
      badge: "L3: Asset Logic",
      units: [
        {
          id: "cf-3-u1",
          title: "Cash for Future Capacity",
          durationMins: 25,
          whyThisMatters: "Negative investing cash flow is often a sign of expansion.",
          content: "Investing activities include: 1. Purchase/Sale of PPE (CAPEX). 2. Purchase/Sale of other company's shares or bonds. 3. Interest and Dividends received. A company spending cash to buy new machines will show a 'Cash Outflow' from Investing activities. This is the 'Deployment' of capital into long-term resources.",
          actionableNextStep: "Identify the amount spent on 'Purchase of Property, Plant, and Equipment' – this is the CAPEX of the year.",
          commonMisinterpretations: ["Interest received being classified under financing (Incorrect)."]
        }
      ],
      quiz: [
        {
          id: "cf-q3",
          question: "Selling an old machine for cash is classified under which activity?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Operating", explanation: "Incorrect unless the company is a machine dealer." },
            { id: "opt2", text: "Investing", explanation: "Correct. Disposal of long-term assets is an investing activity." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Financing Activities Explained",
      badge: "L4: Funding Logic",
      units: [
        {
          id: "cf-4-u1",
          title: "Cash for Capital Providers",
          durationMins: 25,
          whyThisMatters: "Shows how the company is being funded – by owners or by lenders.",
          content: "Financing activities result in changes in the size and composition of the contributed equity and borrowings. 1. Proceeds from issuing shares. 2. Repayment of loans. 3. Payment of Dividends. 4. Payment of Interest. If a company raises a ₹100 Crore loan, it shows as an 'Inflow' from Financing.",
          actionableNextStep: "Check if the company paid dividends this year; it will be a negative figure in this section.",
          structuralExplanation: ["Debt Servicing", "Equity Infusion", "Buybacks"]
        }
      ],
      quiz: [
        {
          id: "cf-q4",
          question: "Where is the 'Payment of Dividends' recorded in the CFS?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Operating Activities", explanation: "Incorrect." },
            { id: "opt2", text: "Financing Activities", explanation: "Correct. Dividends relate to the providers of equity capital." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Indirect Method & Adjustments",
      badge: "L5: The Bridge",
      units: [
        {
          id: "cf-5-u1",
          title: "The Common Standard",
          durationMins: 30,
          whyThisMatters: "Almost all Indian companies use the Indirect method; learning it is essential for reading reports.",
          content: "The Indirect method starts with Net Profit and reconciles it back to cash. 1. Non-Cash items (Depreciation). 2. Non-Operating items (Interest paid/received). 3. Working Capital adjustments. This method is preferred by analysts because it clearly shows the 'Quality of Earnings' (Profit vs Cash conversion).",
          actionableNextStep: "Find the 'Net Cash from Operating Activities' and divide it by 'Net Profit'. A ratio above 1 indicates high quality earnings.",
          accountingContext: ["Auditors verify that the adjustments for taxes and extraordinary items match the P&L notes."]
        }
      ],
      quiz: [
        {
          id: "cf-q5",
          question: "What does the Indirect Method bridge?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Net Profit and Operating Cash Flow", explanation: "Correct. It reconciles accounting profit to actual operating cash." },
            { id: "opt2", text: "Assets and Liabilities", explanation: "Incorrect. That is the role of the Balance Sheet equation." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Why Profits ≠ Cash",
      badge: "L6: Critical Limits",
      units: [
        {
          id: "cf-6-u1",
          title: "The Dangers of Accrual Blindness",
          durationMins: 20,
          whyThisMatters: "High profit is not a shield against insolvency.",
          content: "1. Profit includes credit sales; Cash flow doesn't. 2. Profit ignores loan repayments; Cash flow includes them. 3. Profit excludes CAPEX; Cash flow includes it. 4. Profit is influenced by accounting estimates; Cash flow is a bank-verified fact. Educational awareness only.",
          actionableNextStep: "Search for a historical example of a profitable company that failed due to a 'Cash Crunch'.",
          decisionTradeOffs: ["Management uses FCF (Free Cash Flow) to decide on expansion and dividends."]
        }
      ],
      quiz: [
        {
          id: "cf-q6",
          question: "Why can a profitable company have a negative Cash Flow from Operations?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because it has too much cash.", explanation: "Incorrect." },
            { id: "opt2", text: "Because all the profit is stuck in unpaid customer invoices (receivables).", explanation: "Correct. This highlights the gap between accounting revenue and real liquidity." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["AS-3", "Ind AS 7", "Companies Act 2013"],
    lastReviewedDate: "2024-05-20"
  },
  seo: {
    metaTitle: "Cash Flow Statement Literacy India",
    metaDescription: "Master the logic of Operating, Investing, and Financing cash flows under Indian accounting standards."
  }
};
