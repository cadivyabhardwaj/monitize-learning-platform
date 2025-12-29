import { LearningModule } from '../types';

export const startupCompensationModule: LearningModule = {
  id: "startup-compensation-esops-rsus",
  title: "ESOPs, RSUs & Startup Compensation",
  /* Fixed: Added missing category property */
  category: "Business",
  shortDescription: "Understand how startup compensation instruments like ESOPs and RSUs work structurally, legally, and tax-wise — without assumptions of wealth or exit outcomes.",
  detailedDescription: "A technical deconstruction of equity-linked compensation in the Indian startup ecosystem. This module explains the mechanical transition from a grant to ownership, the statutory tax events, and the structural limitations of secondary liquidity. Educational awareness only. This module does not provide compensation, tax, legal, or investment advice.",
  learningObjectives: [
    "Define ESOPs as conditional rights to acquire shares",
    "Identify the difference between ESOPs, RSUs, and SARs",
    "Understand the logic of 'Vesting' as an earn-out mechanism",
    "Grasp the 'Cliff' as an initial retention barrier",
    "Distinguish between a Grant, Exercise, and Allocation",
    "Identify the two distinct tax events in the ESOP lifecycle",
    "Recognize the impact of the 'Exercise Price' on cash flow",
    "Understand why paper valuation is distinct from cash liquidity",
    "Identify the risk of forfeiture upon resignation or termination",
    "Recognize employer-controlled exit mechanics (Buybacks)",
    "Understand the conceptual logic of dilution in growth stages",
    "Differentiate between equity as a benefit vs equity as an investment",
    "Identify common documentation requirements (Grant Letters, ESOP Plans)",
    "Build a framework for assessing the structural risks of equity pay"
  ],
  estimatedEffort: "Deep",
  iconName: "Award",
  levels: [
    {
      id: 1,
      title: "What Is Startup Equity Compensation",
      badge: "L1: Structural Concept",
      units: [
        {
          id: "sc-1-u1",
          title: "Equity as a Conditional Promise",
          durationMins: 20,
          whyThisMatters: "Thinking of ESOPs as 'free shares' ignores the contractual conditions attached.",
          content: "In financial logic, equity compensation is a mechanism to align employee retention with business growth. It is not a gift of cash; it is a 'Conditional Right' to own a piece of the company in the future. Logically, the company is trading a future portion of its ownership in exchange for your current labor and continued presence. Educational awareness only. This module does not provide compensation, tax, legal, or investment advice.",
          actionableNextStep: "Review your employment contract to see if 'Equity' is listed as a fixed or variable component."
        }
      ],
      quiz: [
        {
          id: "scq1_1",
          question: "Structurally, what does an ESOP Grant represent on the day it is issued?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Immediate ownership of company shares.", explanation: "Incorrect. Ownership only happens after vesting and exercise." },
            { id: "opt2", text: "A promise of the right to buy shares in the future if conditions are met.", explanation: "Correct. It is a contractual option, not an asset yet." },
            { id: "opt3", text: "A fixed cash bonus that will be paid next month.", explanation: "Incorrect. Equity is distinct from cash salary." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "ESOPs Explained Without Exit Hype",
      badge: "L2: Option Mechanics",
      units: [
        {
          id: "sc-2-u1",
          title: "The Logic of the 'Option'",
          durationMins: 20,
          whyThisMatters: "Confusion between 'Shares' and 'Options' leads to incorrect tax assumptions.",
          content: "An ESOP is an Employee Stock 'Option'. Logic: You are given the 'Option' (but not the obligation) to buy shares at a pre-fixed price (Exercise Price). If the company's valuation stays below your exercise price, the option is mathematically 'out-of-the-money' and has zero immediate utility. The logic is based on participation in the company's growth beyond a specific baseline price.",
          actionableNextStep: "Identify the 'Exercise Price' in a sample grant letter."
        }
      ],
      quiz: [
        {
          id: "scq2_1",
          question: "What happens logically if the company valuation is lower than your ESOP Exercise Price?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The options have no immediate financial utility.", explanation: "Correct. Buying a share for more than its worth is logically inefficient." },
            { id: "opt2", text: "The company must pay you the difference in cash.", explanation: "Incorrect. ESOPs carry no such guarantee." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "RSUs, ESOPs & SARs — Key Differences",
      badge: "L3: Instrument Logic",
      units: [
        {
          id: "sc-3-u1",
          title: "The Hierarchy of Instruments",
          durationMins: 25,
          whyThisMatters: "Different instruments trigger different tax and cash-flow requirements.",
          content: "1. ESOPs: You pay an exercise price to get shares. High risk, potentially high impact. 2. RSUs (Restricted Stock Units): Shares given to you usually at zero or nominal cost after vesting. Logic: These are effectively 'shares with a delay timer'. 3. SARs (Stock Appreciation Rights): Cash-settled units. You don't get shares, you get the 'increase in value' in cash. Logic: SARs avoid dilution but lack the legal standing of ownership.",
          actionableNextStep: "Reflect on whether your instrument requires you to put in your own cash (Exercise Price) to get shares."
        }
      ],
      quiz: [
        {
          id: "scq3_1",
          question: "Which instrument logically requires an employee to pay a 'Purchase Price' to acquire the shares?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "ESOPs", explanation: "Correct. ESOPs involve an 'Exercise Price' payment." },
            { id: "opt2", text: "RSUs", explanation: "Incorrect. RSUs are typically granted without a purchase price." },
            { id: "opt3", text: "SARs", explanation: "Incorrect. SARs are cash-settled based on value increase." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Vesting, Cliff & Allocation Mechanics",
      badge: "L4: The Timer",
      units: [
        {
          id: "sc-4-u1",
          title: "Earning Your Rights",
          durationMins: 25,
          whyThisMatters: "Leaving before the cliff means you leave with exactly zero equity.",
          content: "Logic: Vesting is the process by which you 'earn' the right to your options over time. 1. The Cliff: A minimum period (usually 1 year in India) before any vesting happens. 2. Vesting Schedule: The timeline (e.g., 25% every year for 4 years) for the remainder. If you leave at month 11, the logic is simple: you have earned nothing despite your grant letter. Vesting is the company's insurance against short-term churn.",
          actionableNextStep: "Locate the 'Vesting Schedule' in your documentation and calculate your 'fully vested' date."
        }
      ],
      quiz: [
        {
          id: "scq4_1",
          question: "What is the primary logical purpose of a 1-year 'Cliff'?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "To make the employee work faster.", explanation: "Incorrect." },
            { id: "opt2", text: "To pay for the company's electricity.", explanation: "Incorrect." },
            { id: "opt3", text: "To ensure a minimum retention period before any equity rights are granted.", explanation: "Correct. It serves as a threshold for employee commitment." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Exercise, Ownership & Restrictions",
      badge: "L5: The Conversion",
      units: [
        {
          id: "sc-5-u1",
          title: "The Act of Exercising",
          durationMins: 30,
          whyThisMatters: "Vesting is not ownership. Exercise is the trigger.",
          content: "Once options are 'Vested', they are 'Exercisable'. Exercising is the mechanical act of paying the exercise price to the company to convert those options into actual shares. Logic: Only after exercise do you become a legal shareholder. Important: Exercising often comes with 'Restrictions' (ROFR - Right of First Refusal), meaning you cannot sell your shares to anyone without asking the company first.",
          actionableNextStep: "Check if your ESOP plan has a 'Post-Termination Exercise Period' (PTEP) — the time you have to exercise after leaving."
        }
      ],
      quiz: [
        {
          id: "scq5_1",
          question: "At what point do you logically and legally become a 'Shareholder' of the startup?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "When you receive the Grant Letter.", explanation: "Incorrect. This is just a promise." },
            { id: "opt2", text: "After you 'Exercise' your vested options and shares are allotted.", explanation: "Correct. Exercise is the conversion into ownership." },
            { id: "opt3", text: "When you finish your first year (Cliff).", explanation: "Incorrect. Vesting grants rights, but not shares." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Taxation of ESOPs & RSUs (Awareness Only)",
      badge: "L6: Statutory Outflows",
      units: [
        {
          id: "sc-6-u1",
          title: "The Two Tax Events",
          durationMins: 30,
          whyThisMatters: "You may owe significant cash tax on 'paper value' even if you haven't sold any shares.",
          content: "In India, equity compensation follows a 'Double-Tax' logic. 1. At Exercise: The difference between the Fair Market Value (FMV) and your Exercise Price is taxed as 'Salary' (Perquisite). You must pay this in cash even if the shares are not sellable. 2. At Sale: The difference between the Sale Price and FMV is taxed as 'Capital Gains'. Educational awareness only. This module does not provide tax advice.",
          actionableNextStep: "Reflect on the 'Perquisite Tax' logic: do you have the cash buffer to pay tax on a paper value increase?"
        }
      ],
      quiz: [
        {
          id: "scq6_1",
          question: "When is the 'Perquisite Tax' (Salary Tax) logically triggered for an ESOP holder in India?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "At the time of 'Exercise' (converting options to shares).", explanation: "Correct. The 'benefit' is considered earned income at the moment of exercise." },
            { id: "opt2", text: "Only when the shares are sold for cash.", explanation: "Incorrect. That is the second tax event (Capital Gains)." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Liquidity, Exit & Employer Control",
      badge: "L7: Cash Logic",
      units: [
        {
          id: "sc-7-u1",
          title: "The Secondary Reality",
          durationMins: 25,
          whyThisMatters: "Owning shares does not mean you have cash in the bank.",
          content: "Startup shares are 'Illiquid Assets'. Unlike public stocks (like Reliance or Infosys), you cannot sell them on an exchange. Logic: Liquidity only occurs when: 1. There is an IPO. 2. The company is acquired. 3. There is a 'Buyback' or 'Secondary Sale' organized by the company. The employer usually controls the timing and price of these liquidity events. Paper value is a mathematical estimate; cash is the reality.",
          actionableNextStep: "Examine your ESOP policy for any 'Exit' clauses or buyback history."
        }
      ],
      quiz: [
        {
          id: "scq7_1",
          question: "Why is startup equity considered a 'Low Liquidity' asset?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because it is illegal to sell startup shares.", explanation: "Incorrect. It is legal but restricted by contract." },
            { id: "opt2", text: "Because there is no public market to sell them, and sales are usually controlled by the company.", explanation: "Correct. Transaction friction is extremely high in private companies." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Risks: Forfeiture, Dilution & Failure",
      badge: "L8: Downside Logic",
      units: [
        {
          id: "sc-8-u1",
          title: "When Equity Becomes Zero",
          durationMins: 30,
          whyThisMatters: "Most startup compensation discussions ignore the failure rate logic.",
          content: "1. Forfeiture: If you leave, unvested options are lost. 2. Dilution: As the company raises more capital, your 1% ownership might become 0.1%. Logic: While your share count stays the same, your 'slice of the pie' shrinks. 3. Failure: If the startup goes bankrupt, common equity holders are the last to be paid, usually resulting in zero terminal value. Equity is a 'High Risk' compensation component.",
          actionableNextStep: "Conceptually calculate the impact of a 20% dilution on a theoretical 1% holding."
        }
      ],
      quiz: [
        {
          id: "scq8_1",
          question: "In the event of a company liquidation (bankruptcy), where do 'Common Equity' holders (Employees) typically stand in the payout logic?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "They are paid first, before the bank.", explanation: "Incorrect. Employees get salaries first, but shareholders get paid last." },
            { id: "opt2", text: "They are paid at the same time as investors.", explanation: "Incorrect. Investors usually have 'Preference' shares." },
            { id: "opt3", text: "They are paid last, after all debts and preferred investors are cleared.", explanation: "Correct. This is why equity carries the highest risk." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Common Myths & Costly Assumptions",
      badge: "L9: Cognitive Maturity",
      units: [
        {
          id: "sc-9-u1",
          title: "The Literacy Pledge",
          durationMins: 20,
          whyThisMatters: "Mastery means treating equity as a 'potential' bonus, not a 'guaranteed' salary.",
          content: "Myth 1: 'ESOPs are a replacement for salary.' Reality: Salary pays today's bills; ESOPs are a high-risk bet on tomorrow. Myth 2: 'My offer letter says I have ₹50 Lakhs in ESOPs.' Reality: You have a specific number of options. The ₹50L is an estimate based on a current valuation that might not hold. Final Framework: 1. Read the ESOP Plan (Legal). 2. Plan for Exercise Tax (Cash). 3. Diversify your other assets (Risk). Educational awareness only.",
          actionableNextStep: "Commit to never signing an employment offer based solely on 'paper value' of equity."
        }
      ],
      quiz: [
        {
          id: "scq9_1",
          question: "What is the ultimate goal of achieving ESOP literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To negotiate a ₹10 Crore exit.", explanation: "Incorrect. Outcomes cannot be predicted." },
            { id: "opt2", text: "To understand the structural conditions, tax liabilities, and liquidity risks of equity compensation.", explanation: "Correct. Literacy provides the defensive logic needed for career and financial decisions." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Income Tax Act (Rule 3(8))", "SEBI (Share Based Employee Benefits) Regulations", "Companies Act 2013"],
    lastReviewedDate: "2025-01-31"
  },
  seo: {
    metaTitle: "ESOPs & Startup Compensation India | Monitize",
    metaDescription: "Master the structural logic of Indian startup compensation. Learn about ESOPs, RSUs, vesting schedules, exercise tax, and liquidity risks."
  }
};
