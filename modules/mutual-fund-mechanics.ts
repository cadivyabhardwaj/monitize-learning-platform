import { LearningModule } from '../types';

export const mutualFundMechanicsModule: LearningModule = {
  id: "mutual-fund-mechanics",
  title: "Mutual Fund Mechanics",
  /* Fixed: Added missing category property */
  category: "Markets",
  shortDescription: "Understand how mutual funds function mechanically — from pooling and NAV calculation to risk classification and expense structures — without investment advice.",
  detailedDescription: "A technical deconstruction of the Mutual Fund structure in India. This module explains the legal framework of Trusts, the mathematical derivation of Net Asset Value (NAV), and the impact of operational costs. Educational awareness only. This module does not provide investment, legal, or financial advice.",
  learningObjectives: [
    "Define a Mutual Fund as a legal Trust structure in India",
    "Explain the logic of 'Pooling' resources from multiple participants",
    "Understand the mathematical calculation of Net Asset Value (NAV)",
    "Identify the roles of AMCs, Trustees, and Fund Managers",
    "Deconstruct the impact of Expense Ratios on terminal value",
    "Distinguish between Direct and Regular plans structurally",
    "Understand the mechanical process of SIP (Rupee Cost Averaging)",
    "Recognize SEBI risk labels and categorization logic",
    "Identify entry/exit load mechanics and liquidity constraints",
    "Debunk common myths regarding NAV price and fund size"
  ],
  estimatedEffort: "Deep",
  iconName: "TrendingUp",
  levels: [
    {
      id: 1,
      title: "What Is a Mutual Fund?",
      badge: "Level 1: Structural View",
      units: [
        {
          id: "mf1u1",
          title: "The Trust Framework",
          durationMins: 20,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "In India, a Mutual Fund is conceptually a 'Trust' established under the Indian Trusts Act. It is not a company. The logic is simple: several participants with common financial goals pool their money. This pool is then deployed into various assets. As a participant, you do not own the stocks or bonds directly; you own 'units' of the trust which represent your proportional claim on the pool's total value.",
          actionableNextStep: "Locate the 'Statement of Additional Information' (SAI) for any fund house to see the 'Trust' declaration."
        }
      ],
      quiz: [
        {
          id: "mfq1_1",
          question: "What is the legal structure of a Mutual Fund in India?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "A Private Limited Company.", explanation: "Incorrect. While an AMC is a company, the Fund itself is a Trust." },
            { id: "mo2", text: "A Trust.", explanation: "Correct. Mutual Funds are constituted as Trusts to protect participant interests." },
            { id: "mo3", text: "A Cooperative Society.", explanation: "Incorrect. The regulatory framework requires a Trust structure." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Pooling & Unit Allocation",
      badge: "Level 2: Participation Logic",
      units: [
        {
          id: "mf2u1",
          title: "How Units Are Born",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "When you contribute money to a pool, the system must determine your 'Share'. This is done through 'Units'. Logic: If the total pool value is ₹1,00,000 and it is divided into 10,000 units, each unit represents ₹10 of the value. If you contribute ₹1,000, you are allocated 100 units. These units represent your fractional ownership of every single asset held within that pool.",
          actionableNextStep: "Reflect on how 'Units' allow you to hold a fraction of a high-priced asset that you could not afford individually."
        }
      ],
      quiz: [
        {
          id: "mfq2_1",
          question: "If you invest ₹5,000 when the unit price is ₹50, how many units are conceptually allocated?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "100 Units.", explanation: "Correct. Allocation Logic: Investment Amount / Unit Price = Units (5000/50 = 100)." },
            { id: "mo2", text: "5,000 Units.", explanation: "Incorrect. The units represent a proportion of the price, not the total currency." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "NAV Mechanics",
      badge: "Level 3: Valuation Logic",
      units: [
        {
          id: "mf3u1",
          title: "Net Asset Value (NAV) Calculation",
          durationMins: 30,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "NAV is the market value of one unit of the fund. Mathematical Logic: (Total Market Value of Assets - Liabilities) / Total Number of Units. NAV is calculated at the end of every business day based on the closing prices of the underlying assets. It is a 'floating' number; it goes up or down depending on the market movements of what the pool owns.",
          actionableNextStep: "Check the closing NAV of any fund today and compare it with its previous day's value."
        }
      ],
      quiz: [
        {
          id: "mfq3_1",
          question: "Does a rising NAV guarantee that the fund is 'making a profit' for everyone?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "Yes, a higher NAV always means profit.", explanation: "Incorrect. 'Profit' depends on your specific purchase price relative to the current NAV." },
            { id: "mo2", text: "No, it simply represents the current market valuation of the pooled assets per unit.", explanation: "Correct. NAV is a valuation metric, not a historical performance guarantee." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "AMC, Trustees & Managers",
      badge: "Level 4: Governance Flow",
      units: [
        {
          id: "mf4u1",
          title: "The Three-Tier Logic",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "1. The Sponsor (Promoter): The entity that sets up the fund. 2. The AMC (Asset Management Company): The company hired to manage the money. 3. The Trustees: Independent individuals who ensure the AMC follows the rules and protects the participants. Logic: This separation ensures that the people managing the money (AMC) are always supervised by people representing the owners (Trustees).",
          actionableNextStep: "Search for the name of the 'Trustee Company' associated with your preferred fund house."
        }
      ],
      quiz: [
        {
          id: "mfq4_1",
          question: "What is the primary role of the Trustees in a Mutual Fund?",
          correctOptionId: "mo3",
          options: [
            { id: "mo1", text: "To pick which stocks to buy.", explanation: "Incorrect. That is the Fund Manager's job." },
            { id: "mo2", text: "To sell the fund to new customers.", explanation: "Incorrect. That is marketing and distribution." },
            { id: "mo3", text: "To protect the interests of the unit-holders and ensure regulatory compliance.", explanation: "Correct. Trustees act as the guardians of the participant's pool." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "The Expense Ratio",
      badge: "Level 5: Operational Costs",
      units: [
        {
          id: "mf5u1",
          title: "The Cost of Management",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "Managing a pool costs money (salaries, software, rent, marketing). The Expense Ratio is the percentage of the pool's assets taken annually to cover these costs. Logic: It is deducted daily from the NAV. If a fund has a 1% expense ratio, and the underlying assets appreciate by 10%, the reported NAV appreciation will be approximately 9%. Over decades, small differences in expense ratios have a significant cumulative impact on terminal value.",
          actionableNextStep: "Compare the 'Total Expense Ratio' (TER) of two similar funds in the same category."
        }
      ],
      quiz: [
        {
          id: "mfq5_1",
          question: "How is the Expense Ratio typically charged to a participant?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "It is adjusted daily in the Net Asset Value (NAV).", explanation: "Correct. You don't pay it as a separate bill; it is built into the unit price." },
            { id: "mo2", text: "The bank sends a separate invoice at the end of the year.", explanation: "Incorrect. Operational costs are seamlessly deducted from the pool's assets." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Direct vs Regular",
      badge: "Level 6: Intermediary Logic",
      units: [
        {
          id: "mf6u1",
          title: "The Structural Difference",
          durationMins: 20,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "1. Regular Plan: You use an intermediary (broker/advisor). The AMC pays them a commission out of the expense ratio. 2. Direct Plan: You deal with the AMC directly. No commission is paid. Logic: Because no commission is paid, the Expense Ratio of a Direct plan is lower. This leads to a higher NAV over time for the same set of underlying assets. Both plans own the exact same assets; only the cost structure differs.",
          actionableNextStep: "Identify the 'Direct' tag on any fund name on an investment platform."
        }
      ],
      quiz: [
        {
          id: "mfq6_1",
          question: "Why does a Direct plan typically have a higher NAV than a Regular plan for the same fund?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "Direct plans own better quality stocks.", explanation: "Incorrect. Both plans hold identical assets." },
            { id: "mo2", text: "Direct plans have lower expenses as no commissions are paid.", explanation: "Correct. Lower deductions from the pool's value result in a higher NAV." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "SIP Mechanics",
      badge: "Level 7: Time & Units",
      units: [
        {
          id: "mf7u1",
          title: "Rupee Cost Averaging",
          durationMins: 30,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "A Systematic Investment Plan (SIP) is a mechanical instruction. Logic: You invest a fixed amount at fixed intervals. When the market is high (high NAV), your ₹1,000 buys fewer units. When the market is low (low NAV), your ₹1,000 buys more units. Over time, this 'averages' out the cost of your units. It is a mathematical strategy to manage market uncertainty without needing to 'time' the market.",
          actionableNextStep: "Calculate how many units ₹2,000 buys at an NAV of ₹20 vs ₹25 to see the 'Unit Count' fluctuation."
        }
      ],
      quiz: [
        {
          id: "mfq7_1",
          question: "What is the primary mechanical benefit of an SIP?",
          correctOptionId: "mo3",
          options: [
            { id: "mo1", text: "It guarantees the market will never drop.", explanation: "Incorrect. Markets always fluctuate." },
            { id: "mo2", text: "It makes you an expert in stock picking.", explanation: "Incorrect. SIP is a process, not a skill acquisition tool." },
            { id: "mo3", text: "It automatically buys more units when prices are low.", explanation: "Correct. This is the logic of Rupee Cost Averaging." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Risk Labels & Categories",
      badge: "Level 8: Classification Logic",
      units: [
        {
          id: "mf8u1",
          title: "SEBI Risk-o-meter",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "SEBI mandates a 'Risk-o-meter' for every fund, ranging from 'Low' to 'Very High'. This is based on the nature of assets held. 1. Equity Funds (Stocks): Generally high volatility. 2. Debt Funds (Loans): Generally lower volatility, focus on yield. 3. Hybrid Funds: A mix. Logic: Categories exist to help participants identify pools that match their own comfort baseline for uncertainty.",
          actionableNextStep: "Locate the 6-level Risk-o-meter on any fund's marketing document."
        }
      ],
      quiz: [
        {
          id: "mfq8_1",
          question: "What does a 'Very High' risk label on a fund conceptually indicate?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "High probability of price volatility in the short term.", explanation: "Correct. Risk labels primarily reflect the intensity of expected price movements." },
            { id: "mo2", text: "The fund manager is untrustworthy.", explanation: "Incorrect. Risk labels relate to asset nature, not manager integrity." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Entry, Exit & Liquidity",
      badge: "Level 9: Flow Constraints",
      units: [
        {
          id: "mf9u1",
          title: "The Cost of Leaving",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "Liquidity is the ability to turn units back into cash. 1. Entry Load: (Abolished in India since 2009). 2. Exit Load: A fee charged if you withdraw before a specific period (e.g., 1 year). Logic: Exit loads discourage short-term churn, which protects the long-term participants in the pool from the costs of frequent asset liquidation.",
          actionableNextStep: "Check the 'Exit Load' period for a sample Equity vs a Liquid fund."
        }
      ],
      quiz: [
        {
          id: "mfq9_1",
          question: "Why do funds logically charge an Exit Load?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "To make extra profit for the bank.", explanation: "Incorrect. The load usually goes back into the fund pool or covers costs." },
            { id: "mo2", text: "To discourage short-term withdrawals that increase costs for long-term holders.", explanation: "Correct. It serves as a behavioral and operational stabilizer." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Common Myths",
      badge: "Level 10: Logic Shield",
      units: [
        {
          id: "mf10u1",
          title: "Face Value and NAV Size",
          durationMins: 20,
          whyThisMatters: "Educational awareness only. This module does not provide investment, legal, or financial advice.",
          content: "Myth 1: 'A low NAV (₹10) is cheaper than a high NAV (₹100)'. Reality: A ₹1,000 investment buys more units in the first case, but the percentage growth of the underlying assets is what matters. Myth 2: 'New Fund Offers (NFOs) are like IPOs'. Reality: An NFO is just a new pool starting at ₹10; it doesn't represent a 'discount' on value. Logical participants focus on asset quality and expense ratios, not unit prices.",
          actionableNextStep: "Finalize your learning by committing to ignore 'NAV price' as an indicator of value."
        }
      ],
      quiz: [
        {
          id: "mfq10_1",
          question: "Is a Mutual Fund with a ₹10 NAV 'cheaper' than one with a ₹500 NAV?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "Yes, it is more affordable.", explanation: "Incorrect. You can invest the same minimum amount in both." },
            { id: "mo2", text: "No, unit price is irrelevant to the value of the underlying assets.", explanation: "Correct. NAV is merely a division of total value; the cost to enter the pool is the same." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["SEBI (Mutual Funds) Regulations, 1996"],
    lastReviewedDate: "2025-01-20"
  },
  seo: {
    metaTitle: "Mutual Fund Mechanics India | Monitize Learning",
    metaDescription: "Master the logic of Indian Mutual Funds. Learn about Trust structures, NAV calculation, Expense Ratios, and SIP mechanics."
  }
};
