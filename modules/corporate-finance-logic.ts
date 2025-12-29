import { LearningModule } from '../types';

export const corporateFinanceLogicModule: LearningModule = {
  id: "corporate-finance-logic",
  title: "Corporate Finance Logic",
  /* Fixed: Added missing category property */
  category: "Business",
  shortDescription: "Understand how companies think about money, capital, costs, funding, and financial decisions — without MBA jargon or investment hype.",
  detailedDescription: "A strategic deconstruction of organizational financial logic. This module explains the mechanical relationship between capital allocation, operational constraints, and institutional survival within the Indian corporate framework. Educational awareness only. This module does not provide financial, accounting, legal, or investment advice.",
  learningObjectives: [
    "Define corporate finance as the logic of organizational resource allocation",
    "Identify the structural differences between personal and corporate financial goals",
    "Grasp the conceptual distinction between Capital (Seed) and Revenue (Fuel)",
    "Understand the 'Oxygen' logic of Cash Flow versus the 'Report' logic of Profit",
    "Recognize the trade-offs between Debt and Equity funding structures",
    "Identify the conceptual 'Cost of Capital' as an opportunity cost baseline",
    "Understand the Working Capital cycle and its impact on institutional liquidity",
    "Distinguish between long-term CAPEX and recurring OPEX decision-making",
    "Recognize why profitable entities may require external capital for scaling",
    "Build a framework for interpreting corporate financial disclosures and constraints"
  ],
  estimatedEffort: "Deep",
  iconName: "Landmark",
  levels: [
    {
      id: 1,
      title: "What Is Corporate Finance (Plain Language)",
      badge: "L1: Allocation Logic",
      units: [
        {
          id: "cf-1-u1",
          title: "The Logic of Choice",
          durationMins: 20,
          whyThisMatters: "Corporate finance is often mistaken for 'math'. It is actually the logic of allocation.",
          content: "Corporate finance is the system of deciding how a company acquires resources and where it deploys them. If a company has ₹100, should it build a new warehouse or hire more staff? This choice is the core of corporate finance. It is the process of managing constraints to ensure the organization can continue to function. Educational awareness only.",
          actionableNextStep: "Reflect on how your own organization decides which projects to fund each year.",
          structuralExplanation: ["Resource Sourcing: Where money comes from.", "Resource Deployment: Where money goes.", "Survival Monitoring: Ensuring the organization doesn't run out of cash."],
          commonMisinterpretations: ["Corporate finance is just for accountants.", "It's about making the most money possible today."]
        }
      ],
      realWorldAnalogies: ["A chef deciding whether to buy a better stove or fresher ingredients with a fixed budget."],
      reflectionPrompt: "If you were given a fixed budget for a team project, what criteria would you use to decide which expense is most critical?",
      quiz: [
        {
          id: "cf-q1-1",
          question: "At its core, what is the primary 'Logic' of corporate finance?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Memorizing accounting formulas.", explanation: "Incorrect. Formulas are tools; logic is the decision-making framework." },
            { id: "opt2", text: "The strategic allocation of limited resources within an organization.", explanation: "Correct. Managing constraints is the central pillar." },
            { id: "opt3", text: "Predicting the stock market.", explanation: "Incorrect. That is speculative finance, not corporate finance." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Business Finance vs Personal Finance",
      badge: "L2: Scale & Separation",
      units: [
        {
          id: "cf-2-u1",
          title: "The Corporate Veil",
          durationMins: 25,
          whyThisMatters: "Mixing personal and business logic leads to poor institutional decisions.",
          content: "In personal finance, the goal is often lifestyle and wealth. In business finance, the 'Entity' is a separate legal person. Business logic ignores personal desires and focuses on 'Utility'. If a machine produces value, it is purchased. If an employee provides scale, they are hired. The scale of time is also different—corporate finance looks at 10-20 year infrastructure cycles. Educational awareness only.",
          actionableNextStep: "Identify three decisions your company made that would seem 'expensive' for an individual but 'logical' for a business.",
          legalContext: ["Separate Legal Entity under Companies Act 2013.", "Limited Liability protection."],
          decisionTradeOffs: ["Individual Comfort vs. Institutional Utility.", "Short-term savings vs. Long-term scalability."]
        }
      ],
      realWorldAnalogies: ["The difference between buying a car for family comfort (Personal) and buying a truck to deliver goods (Business)."],
      quiz: [
        {
          id: "cf-q2-1",
          question: "Why does corporate finance logic treat the company as a 'Separate Person'?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "To ensure decisions are based on institutional survival, not individual whims.", explanation: "Correct. The separation allows for objective resource management." },
            { id: "opt2", text: "To make it harder for people to understand the accounts.", explanation: "Incorrect. Transparency is actually mandated by law." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Capital, Revenue & Cash — Not the Same",
      badge: "L3: Financial Pillars",
      units: [
        {
          id: "cf-3-u1",
          title: "The Three Forms of Value",
          durationMins: 30,
          whyThisMatters: "Confusing these three leads to structural failures in business growth.",
          content: "1. Capital: The structural foundation (The seed). It is money used to build the capability to earn. 2. Revenue: The fuel. It is the gross inflow from activities. 3. Cash: The oxygen. It is the liquid resource available to pay bills today. A company can have massive capital (factories) and high revenue (sales), but if it has no cash, it 'suffocates' and fails. Educational awareness only.",
          actionableNextStep: "Look at a simple P&L and identify which line items represent 'Seed' and which represent 'Fuel'.",
          accountingContext: ["Balance Sheet (Capital)", "Income Statement (Revenue)", "Cash Flow Statement (Cash)"],
          commonMisinterpretations: ["High revenue means the company is rich in cash.", "Capital is just money sitting in the bank."]
        }
      ],
      realWorldAnalogies: ["A farm (Capital), the crops harvested (Revenue), and the money in the farmer's pocket to buy seeds for tomorrow (Cash)."],
      quiz: [
        {
          id: "cf-q3-1",
          question: "In corporate logic, which of the following is most essential for immediate daily survival?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Large amounts of Fixed Capital.", explanation: "Incorrect. You cannot pay salaries with a factory building." },
            { id: "opt2", text: "High booked Revenue.", explanation: "Incorrect. Revenue is a promise until it becomes cash." },
            { id: "opt3", text: "Liquid Cash Flow.", explanation: "Correct. Cash is the medium required to settle immediate obligations." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Profit vs Cash Flow — Why Companies Fail",
      badge: "L4: The Survival Gap",
      units: [
        {
          id: "cf-4-u1",
          title: "The Timing Problem",
          durationMins: 30,
          whyThisMatters: "Profitable companies go bankrupt every day due to timing mismatches.",
          content: "Profit is an 'opinion' formed by accounting rules (accrual basis). If you sell a product for ₹100 but the customer pays you in 6 months, you have 'Profit' today but zero 'Cash'. If your rent is due tomorrow, the 'Profit' won't help. Corporate finance logic focuses on the 'Cash Conversion Cycle'—how fast a rupee spent on raw materials returns as a rupee in the bank. Educational awareness only.",
          actionableNextStep: "Reflect on a time you 'earned' money but didn't have it in your account yet—this is the profit/cash gap.",
          constraintsAndRisks: ["Accounts Receivable aging.", "Inventory pile-up.", "Credit terms with suppliers."],
          decisionTradeOffs: ["Selling more on credit (High Profit, Low Cash) vs. Selling less for upfront payment (Low Profit, High Cash)."]
        }
      ],
      realWorldAnalogies: ["Winning a prize that will be delivered in a year (Profit) vs. Having the money for lunch today (Cash)."],
      quiz: [
        {
          id: "cf-q4-1",
          question: "Why might a company with record-high profits still face bankruptcy?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Because the cash from those profits is locked in 'receivables' while bills are due now.", explanation: "Correct. This is a classic liquidity failure." },
            { id: "opt2", text: "Because the government took all the profit.", explanation: "Incorrect. Taxes are calculated on realized or accrued profit, but they aren't the primary cause of this specific failure logic." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Debt, Equity & Hybrid Funding Logic",
      badge: "L5: Capital Structure",
      units: [
        {
          id: "cf-5-u1",
          title: "Sharing Risk vs sharing Obligation",
          durationMins: 30,
          whyThisMatters: "Funding isn't just about 'getting money'; it's about who controls the future.",
          content: "Logic: 1. Equity: You sell a piece of the future. You share the risk. If the company fails, you don't owe the equity holders. But if it succeeds, they own a piece forever. 2. Debt: You rent money. You keep 100% ownership, but you have a mandatory obligation to pay back the principal plus interest. If you fail to pay, the 'renter' can take your assets. Corporate finance is the logic of balancing these two. Educational awareness only.",
          actionableNextStep: "Identify whether your company recently raised funds through a bank loan (Debt) or a venture round (Equity).",
          decisionTradeOffs: ["Control (Equity cost) vs. Commitment (Debt cost).", "Static cost (Debt interest) vs. Dynamic cost (Equity dilution)."]
        }
      ],
      realWorldAnalogies: ["Equity is like bringing a partner into your shop; Debt is like taking a loan from a neighbor."],
      quiz: [
        {
          id: "cf-q5-1",
          question: "What is the primary logical 'Risk' associated with high Debt funding?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Losing ownership of the company.", explanation: "Incorrect. Equity causes loss of ownership; Debt causes a mandatory repayment burden." },
            { id: "opt2", text: "Mandatory cash outflows regardless of whether the business is doing well.", explanation: "Correct. Interest and principal must be paid even during a downturn." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Cost of Capital (Conceptual Awareness)",
      badge: "L6: The Hurdles",
      units: [
        {
          id: "cf-6-u1",
          title: "Nothing Is Free",
          durationMins: 25,
          whyThisMatters: "Even 'internal' money has a cost: the cost of what else you could have done with it.",
          content: "In corporate logic, money always has a cost. If you use your own cash, the 'Cost' is the interest you would have earned in a bank. If you use Debt, the cost is the interest rate. If you use Equity, the cost is the expected growth the shareholders demand. Logic: A project is only 'Viable' if its generated value is higher than the 'Cost' of the money used to build it. This is the 'Hurdle Rate'. Educational awareness only.",
          actionableNextStep: "Ask: 'If we didn't spend this ₹10 Lakhs on this project, where else could the company have safely put it?'",
          accountingContext: ["Weighted Average Cost of Capital (WACC) - Conceptual only.", "Internal Rate of Return (IRR) expectations."]
        }
      ],
      realWorldAnalogies: ["Choosing between spending your savings on a new course or keeping it in an FD that pays 7%."],
      quiz: [
        {
          id: "cf-q6-1",
          question: "If a company's cost of capital is 12%, but a new project only earns 8%, what is the logical decision?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Reject the project; it is destroying institutional value.", explanation: "Correct. The hurdle rate has not been met." },
            { id: "opt2", text: "Accept the project because 8% is still a profit.", explanation: "Incorrect. In corporate logic, 8% is a relative loss if the money costs 12%." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Working Capital & Liquidity Cycles",
      badge: "L7: The Daily Engine",
      units: [
        {
          id: "cf-7-u1",
          title: "The Friction of Operations",
          durationMins: 30,
          whyThisMatters: "Growth requires more cash to be 'trapped' in the system.",
          content: "Working capital is the money tied up in the daily engine. Logic: You buy materials -> you make product -> you wait for client to pay. During this cycle, your money is 'trapped' in inventory and receivables. As a company grows, it needs MORE working capital. Many companies fail during rapid growth because they run out of cash to 'trap' in this cycle. This is called 'Overtrading'. Educational awareness only.",
          actionableNextStep: "Calculate how many days, on average, it takes for your company to collect payment from a client.",
          decisionTradeOffs: ["Faster collections (discounts) vs. Longer credit (higher sales volume).", "Just-in-time inventory vs. Safety stock."]
        }
      ],
      realWorldAnalogies: ["A street vendor who needs to buy vegetables at 5 AM but only gets paid by customers at 7 PM."],
      quiz: [
        {
          id: "cf-q7-1",
          question: "What does a 'Negative Working Capital' logic conceptually imply?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The company collects money from customers faster than it has to pay its suppliers.", explanation: "Correct. This is a sign of high operational efficiency and power (e.g., Amazon or large retailers)." },
            { id: "opt2", text: "The company is about to go bankrupt.", explanation: "Incorrect. Negative working capital can actually be a sign of a very strong cash-generating model." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "CAPEX vs OPEX Decisions",
      badge: "L8: Infrastructure vs Fuel",
      units: [
        {
          id: "cf-8-u1",
          title: "Long-term capability vs Daily runtime",
          durationMins: 25,
          whyThisMatters: "Confusing these two leads to messy balance sheets and poor tax logic.",
          content: "1. CAPEX (Capital Expenditure): Buying the stove. It is a long-term capability. The cost is spread over years (Depreciation). 2. OPEX (Operating Expenditure): Buying the gas. it is a daily runtime cost. It is fully deducted from profit today. Logic: Corporate finance decides whether to 'Buy' (CAPEX) or 'Rent/Subscribe' (OPEX, like Cloud computing). Renting is safer for cash flow; Buying is cheaper in the long run. Educational awareness only.",
          actionableNextStep: "Check if your company owns its office building (CAPEX) or rents it (OPEX).",
          accountingContext: ["Asset Capitalization.", "Depreciation/Amortization logic."],
          decisionTradeOffs: ["Large upfront cash drain (CAPEX) vs. Recurring monthly outflow (OPEX)."]
        }
      ],
      realWorldAnalogies: ["Buying a car (CAPEX) vs. taking an Uber every day (OPEX)."],
      quiz: [
        {
          id: "cf-q8-1",
          question: "Why might a modern startup prefer OPEX (like renting software) over CAPEX (buying servers)?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Because they like paying every month.", explanation: "Incorrect." },
            { id: "opt2", text: "Because renting is always cheaper.", explanation: "Incorrect. Renting is often more expensive over time." },
            { id: "opt3", text: "To preserve upfront cash and maintain flexibility to scale up or down.", explanation: "Correct. OPEX allows for 'Elastic' resource management." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Why Profitable Companies Still Raise Money",
      badge: "L9: Scaling Speed",
      units: [
        {
          id: "cf-9-u1",
          title: "The Acceleration Logic",
          durationMins: 30,
          whyThisMatters: "External funding is a choice of 'Speed' over 'Independence'.",
          content: "A company making ₹10 profit could reinvest it and grow 10% next year. But if it wants to grow 500%, the internal profit isn't enough. It needs 'External Capital' to buy speed. Logic: Companies raise money to: 1. Capture market share before competitors. 2. Build massive infrastructure that profit can't fund yet. 3. Create a safety buffer for 'Black Swan' events. Profit builds the house; Funding builds the skyscraper. Educational awareness only.",
          actionableNextStep: "Think of one large Indian company (e.g. Jio) that spent massive capital before earning its first rupee of profit.",
          constraintsAndRisks: ["Dilution of control.", "Debt service burden.", "Burn rate management."]
        }
      ],
      realWorldAnalogies: ["Using your salary to slowly build a house vs. taking a loan to build it in 6 months."],
      quiz: [
        {
          id: "cf-q9-1",
          question: "What is the primary 'Trade-off' when a company raises external Equity funding?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Paying back the money with high interest.", explanation: "Incorrect. That is Debt logic." },
            { id: "opt2", text: "Gaining speed and scale at the cost of ownership and control.", explanation: "Correct. Equity is a trade-off between the 'Size of the pie' and the 'Percentage of the slice'." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Corporate Finance Myths & Misunderstandings",
      badge: "L10: Final Framework",
      units: [
        {
          id: "cf-10-u1",
          title: "The Maturity Pledge",
          durationMins: 20,
          whyThisMatters: "Completing this module means moving from 'Accounting' to 'Logic'.",
          content: "Myth 1: 'More profit is always better.' Reality: Profit without cash is a trap. Myth 2: 'Debt is bad.' Reality: Low-cost debt is a powerful tool for growth. Myth 3: 'Finance is only for the CFO.' Reality: Every operational decision (hiring, buying, discount-offering) is a corporate finance decision. Logic is the ultimate filter for professional maturity. Educational awareness only. This module does not provide financial, accounting, legal, or investment advice.",
          actionableNextStep: "Write down one 'Non-Finance' decision you made this week and identify the hidden 'Financial Logic' behind it.",
          commonMisinterpretations: ["Profit = Cash.", "Bankruptcy only happens to 'bad' businesses.", "Financial reports are only for taxes."]
        }
      ],
      quiz: [
        {
          id: "cf-q10-1",
          question: "What is the ultimate goal of achieving corporate finance literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To become a certified tax auditor.", explanation: "Incorrect. That is a professional specialty." },
            { id: "opt2", text: "To understand the structural trade-offs and logical constraints that drive organizational decisions.", explanation: "Correct. Literacy enables better collaboration and decision-making within the entity." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Companies Act 2013", "Accounting Standards (AS/Ind-AS) Overview"],
    lastReviewedDate: "2025-02-01"
  },
  seo: {
    metaTitle: "Corporate Finance Logic | Monitize Business Literacy",
    metaDescription: "Master the logic of organizational finance. Learn about capital structure, profit vs cash flow, and institutional resource allocation."
  }
};
