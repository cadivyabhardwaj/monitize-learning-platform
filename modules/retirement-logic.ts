
import { LearningModule } from '../types';

export const retirementLogicModule: LearningModule = {
  id: "retirement-logic",
  title: "Retirement & Longevity",
  category: "Personal",
  shortDescription: "Managing capital during the decumulation phase in India—understanding inflation, corpus sustainability, and the 'Bucket Strategy'.",
  detailedDescription: "A comprehensive framework for the most complex phase of financial life: Retirement. This module deconstructs the transition from earning to spending, focusing on longevity risk, inflation-adjusted withdrawals, and the structural role of Indian retirement instruments like EPF, NPS, and Annuities. Educational awareness only.",
  learningObjectives: [
    "Understand the 'Longevity Risk'—the statistical probability of outliving your capital",
    "Grasp the impact of compounding inflation on fixed retirement incomes",
    "Identify the logical difference between the Accumulation and Decumulation phases",
    "Understand the 'Bucket Strategy' for managing cash flow and volatility",
    "Recognize the mechanics of Safe Withdrawal Rates (SWR) in an Indian context",
    "Understand the structural roles of EPF, NPS, and senior citizen savings schemes",
    "Identify the tax logic of different retirement withdrawal mechanisms (SWP vs Annuity)",
    "Recognize the behavioral shift required to move from 'Saving' to 'Spending'",
    "Identify the importance of a medical buffer as a standalone financial asset",
    "Build a framework for questioning retirement product promises"
  ],
  estimatedEffort: "Deep",
  iconName: "History",
  levels: [
    {
      id: 1,
      title: "The Longevity Risk",
      badge: "L1: Survival Logic",
      units: [
        {
          id: "ret-1-u1",
          title: "Living Too Long",
          durationMins: 20,
          whyThisMatters: "The greatest risk in retirement is not market crashes, but survival.",
          content: "Logically, retirement is a race between your capital and your biological clock. With medical advancements in India, 'Retirement' can now last 30+ years. The 'Longevity Risk' is the statistical probability that you will exhaust your resources while you are still physically present. Literacy means planning for the 95th percentile of life expectancy, not the average.",
          actionableNextStep: "Reflect on the age of your oldest living relative and conceptualize a 35-year income gap."
        }
      ],
      quiz: [
        {
          id: "ret-1-q1",
          question: "What is the primary conceptual definition of 'Longevity Risk'?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The risk that you will pass away too early.", explanation: "Incorrect. That is a mortality risk covered by life insurance." },
            { id: "opt2", text: "The risk that you will outlive your financial resources.", explanation: "Correct. This is the structural challenge of retirement planning." },
            { id: "opt3", text: "The risk that you will lose your physical fitness.", explanation: "Incorrect. That is a health risk, though related to cost." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Retirement Inflation",
      badge: "L2: Purchasing Power",
      units: [
        {
          id: "ret-2-u1",
          title: "The 6% Eroder",
          durationMins: 25,
          whyThisMatters: "A fixed income in retirement is a decreasing income in reality.",
          content: "Inflation is particularly dangerous in retirement because you have no 'Earning Leverage' (salary hikes) to fight it. If you need ₹1 Lakh today, and inflation is 6%, you will need ₹1.8 Lakhs in 10 years just to maintain the SAME lifestyle. Logic: Your retirement corpus must not just provide cash; it must provide 'Inflation-Adjusted' cash flow.",
          actionableNextStep: "Identify how much the price of a basic utility (like electricity or milk) has changed in the last 10 years."
        }
      ],
      quiz: [
        {
          id: "ret-2-q1",
          question: "Why is inflation more 'dangerous' conceptually during retirement than during your working years?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Because you no longer have an increasing salary to offset rising costs.", explanation: "Correct. You are on a 'Fixed Resource' logic while costs are on a 'Variable Increase' logic." },
            { id: "opt2", text: "Because prices only go up after you stop working.", explanation: "Incorrect. Inflation is constant; your ability to react to it is what changes." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Corpus Calculation Logic",
      badge: "L3: Structural Sizing",
      units: [
        {
          id: "ret-3-u1",
          title: "The 25x/30x Framework",
          durationMins: 30,
          whyThisMatters: "Most people stop saving when they reach a 'large number' rather than a 'sufficient number'.",
          content: "A common starting logic is the 25x/30x rule. To sustain 30 years of retirement, you conceptually need 25 to 30 times your **annual** essential expenses as a starting corpus. If your annual expenses are ₹12 Lakhs, your corpus logic suggests ₹3 Crores to ₹3.6 Crores. This assumes a balance between growth assets and debt to outpace inflation. Educational awareness only.",
          actionableNextStep: "Calculate your current 'Annual Essential Outflow' to derive your theoretical 25x corpus target."
        }
      ],
      quiz: [
        {
          id: "ret-3-q1",
          question: "If an individual needs ₹50,000 per month for essentials, what is their theoretical '25x' corpus target?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "₹50 Lakhs", explanation: "Incorrect. You must multiply the annual expense (6 Lakhs) by 25." },
            { id: "opt2", text: "₹1 Crore", explanation: "Incorrect. 6 Lakhs x 25 = 1.5 Crores." },
            { id: "opt3", text: "₹1.5 Crores", explanation: "Correct. 50k x 12 months = 6L annual. 6L x 25 = 1.5 Crores." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Accumulation vs Decumulation",
      badge: "L4: The Great Pivot",
      units: [
        {
          id: "ret-4-u1",
          title: "Changing the Mathematical Goal",
          durationMins: 25,
          whyThisMatters: "Strategies that work while earning can be disastrous while spending.",
          content: "Phase 1: Accumulation (Working). Goal: Net Worth Growth. Volatility is a friend because you 'buy the dips'. Phase 2: Decumulation (Retired). Goal: Cash Flow Stability. Volatility is a threat because selling assets during a 'dip' causes permanent corpus depletion (Sequence of Returns Risk). Logic: The day you retire, your priority shifts from 'Maximizing Return' to 'Managing Drawdown'.",
          actionableNextStep: "Reflect on how your mindset changes when using a rechargeable battery vs a disposable one."
        }
      ],
      quiz: [
        {
          id: "ret-4-q1",
          question: "What is the primary shift in goal when moving from the working phase to the retirement phase?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To take more risk to grow the money faster.", explanation: "Incorrect. High risk during withdrawal can lead to rapid depletion." },
            { id: "opt2", text: "To prioritize consistent cash flow over total asset growth.", explanation: "Correct. Stability of income becomes the primary logical requirement." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Safe Withdrawal Rates",
      badge: "L5: The Drain Logic",
      units: [
        {
          id: "ret-5-u1",
          title: "The 4% Rule Concept",
          durationMins: 30,
          whyThisMatters: "Withdrawing too much too early destroys the compounding 'tail' of your corpus.",
          content: "The 'Safe Withdrawal Rate' (SWR) is the percentage of your initial corpus you can withdraw annually (inflation-adjusted) without running out of money for 30 years. In India, due to higher inflation and different tax slabs, a 4% SWR is often cited as a conceptual baseline. If you have ₹1 Crore, you withdraw ₹4 Lakhs in Year 1. Logic: You must consume the 'golden eggs' (returns) but protect the 'goose' (principal).",
          actionableNextStep: "Test a 4% withdrawal logic on any theoretical corpus amount."
        }
      ],
      quiz: [
        {
          id: "ret-5-q1",
          question: "Why is withdrawing 10% of your corpus annually considered logically risky for a 30-year retirement?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It depletes the principal too fast to allow for long-term growth and inflation protection.", explanation: "Correct. A 10% drain is difficult to sustain against inflation over decades." },
            { id: "opt2", text: "Because 10% is an unlucky number in finance.", explanation: "Incorrect. The risk is mathematical and structural, not superstitious." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "The Bucket Strategy",
      badge: "L6: Allocation Logic",
      units: [
        {
          id: "ret-6-u1",
          title: "Segmenting Time Horizons",
          durationMins: 35,
          whyThisMatters: "A single 'mixed' portfolio creates panic during market drops.",
          content: "Logic: Divide your corpus into three conceptual buckets:\n1. Liquid Bucket: 2-3 years of cash (Savings/Liquid Funds). Purpose: Peace of mind.\n2. Safety Bucket: 5-7 years of expenses (FDs/Bonds). Purpose: Predictable yield.\n3. Growth Bucket: The rest (Equity/Real Estate). Purpose: Beating long-term inflation. \nAs the Liquid bucket empties, you refill it from the Safety bucket, allowing the Growth bucket to recover from market cycles.",
          actionableNextStep: "Sketch three circles and label them 0-2 yrs, 3-7 yrs, and 8+ yrs."
        }
      ],
      quiz: [
        {
          id: "ret-6-q1",
          question: "In the Bucket Strategy, what is the logical purpose of the 'Growth Bucket'?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To pay next month's rent.", explanation: "Incorrect. That is the role of the Liquid Bucket." },
            { id: "opt2", text: "To ensure the total corpus maintains its purchasing power 10-15 years from now.", explanation: "Correct. Growth assets fight the long-term erosion of inflation." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Indian Instruments: EPF & NPS",
      badge: "L7: Statutory Pillars",
      units: [
        {
          id: "ret-7-u1",
          title: "Provident Funds and Annuities",
          durationMins: 30,
          whyThisMatters: "These are the default frameworks for most Indian salaried professionals.",
          content: "EPF (Employee Provident Fund) is a debt-heavy, tax-efficient 'Locked-in' corpus. NPS (National Pension System) is a lower-cost, equity-linked framework that mandates a 40% 'Annuity'—where you trade a lump sum for a guaranteed monthly pension for life. Logic: Statutory tools provide the 'Base Floor' of retirement income, while personal savings provide the 'Lifestyle' layer.",
          actionableNextStep: "Locate your last EPF statement and identify the current 'Closing Balance'."
        }
      ],
      quiz: [
        {
          id: "ret-7-q1",
          question: "What is the structural role of an 'Annuity' in the NPS framework?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "To give you a lump sum to buy a car.", explanation: "Incorrect. A lump sum is the non-annuitized portion." },
            { id: "opt2", text: "To invest in high-risk stocks.", explanation: "Incorrect. Annuities are insurance products providing fixed income." },
            { id: "opt3", text: "To convert a portion of the corpus into a guaranteed lifetime income stream.", explanation: "Correct. It shifts the 'Investment Risk' to an insurer." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Withdrawal Tax Logic",
      badge: "L8: Post-Tax Surplus",
      units: [
        {
          id: "ret-8-u1",
          title: "SWP vs. Annuity Taxation",
          durationMins: 25,
          whyThisMatters: "Tax is your greatest 'unplanned' retirement expense.",
          content: "1. Systematic Withdrawal Plan (SWP): You only pay tax on the 'Gains' portion of each withdrawal (Capital Gains tax). 2. Annuity/Pension: The entire payout is treated as 'Income' and taxed at your slab rate. Logic: SWP is often more tax-efficient for high-surplus individuals, while Annuity offers higher certainty. Literacy means choosing the logic that maximizes your 'Post-Tax' cash flow.",
          actionableNextStep: "Check the current 'Capital Gains' tax rates for Equity vs Debt in the latest budget summary."
        }
      ],
      quiz: [
        {
          id: "ret-8-q1",
          question: "Logically, why might an SWP be more tax-efficient than a traditional pension for a retiree?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Because you are only taxed on the profit component, not the whole withdrawal.", explanation: "Correct. Capital gains logic is generally more favorable than slab-based income logic for withdrawals." },
            { id: "opt2", text: "Because SWPs are tax-free.", explanation: "Incorrect. All realized gains are subject to statutory taxes." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "The Medical Buffer",
      badge: "L9: Risk Overlay",
      units: [
        {
          id: "ret-9-u1",
          title: "Health as a Financial Asset",
          durationMins: 25,
          whyThisMatters: "Medical costs in India grow at double the rate of general inflation.",
          content: "A standard retirement corpus logic assumes normal living costs. A single critical illness can consume 30% of a corpus instantly. Logic: You need a two-tier defense. 1. Base Health Insurance (to protect capital). 2. Standalone Medical Buffer (for costs insurance doesn't cover). In retirement, your medical buffer is not 'savings'; it is a dedicated 'Risk Protection' asset.",
          actionableNextStep: "Estimate the current cost of a common surgery (e.g. bypass or knee replacement) and conceptualize it as a corpus 'withdrawal'."
        }
      ],
      quiz: [
        {
          id: "ret-9-q1",
          question: "How should a medical buffer be logically viewed within a retirement plan?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "As 'extra' money to be spent on vacations if you stay healthy.", explanation: "Incorrect. It is a dedicated risk reserve." },
            { id: "ret-9-o2", text: "As a non-discretionary asset reserved strictly for health-related capital protection.", explanation: "Correct. It prevents a medical crisis from derailing your basic survival budget." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "The Behavioral Maturity",
      badge: "L10: Living your Legacy",
      units: [
        {
          id: "ret-10-u1",
          title: "Permission to Spend",
          durationMins: 20,
          whyThisMatters: "Many Indian retirees suffer from 'Wealth Hoarding'—dying with too much while living in scarcity.",
          content: "The final logical challenge of retirement is behavioral. After 40 years of 'Saving', spending feels like a failure. Maturity is realizing that your corpus is a 'Fuel Tank' designed to be used. Once your 'Longevity Risk' is managed (via a 30x corpus or annuity), spending on your health, comfort, and experiences is the logical fulfillment of your life's work. Educational awareness only.",
          actionableNextStep: "Write down one 'Lifestyle' goal for your retirement that you are currently afraid will 'waste' money."
        }
      ],
      quiz: [
        {
          id: "ret-10-q1",
          question: "What is the ultimate goal of a well-structured retirement plan?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To become the richest person in the neighborhood.", explanation: "Incorrect. That is an accumulation-phase ego goal." },
            { id: "opt2", text: "To achieve the dignity of independence and the freedom to spend on a planned lifestyle.", explanation: "Correct. Retirement literacy provides the confidence to use resources effectively." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["PFRDA Act", "Income Tax Act (Retirement Benefits)"],
    lastReviewedDate: "2024-12-30"
  },
  seo: {
    metaTitle: "Retirement & Longevity India | Monitize Learning",
    metaDescription: "Master the decumulation logic of retirement in India. Learn about corpus sizing, SWR, bucket strategies, and medical buffers."
  }
};
