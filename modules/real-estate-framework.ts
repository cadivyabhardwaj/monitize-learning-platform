import { LearningModule } from '../types';

export const realEstateFrameworkModule: LearningModule = {
  id: "real-estate-framework",
  title: "Real Estate Framework",
  /* Fixed: Added missing category property */
  category: "Markets",
  shortDescription: "Understand how real estate works structurally in India — ownership, cash flows, risks, taxes, and legal mechanics — without investment advice.",
  detailedDescription: "A technical deconstruction of the real estate ecosystem. This module explains the legal logic of land titles, the impact of friction costs, and the structural relationship between debt and property ownership. Educational awareness only. This module does not provide real estate, legal, tax, or financial advice.",
  learningObjectives: [
    "Define Real Estate as a legal 'Immovable Asset' category",
    "Distinguish between 'Use Assets' and 'Capital Assets' conceptually",
    "Understand ownership structures: Individual, Joint, and HUF",
    "Identify the logical difference between Freehold and Leasehold property",
    "Grasp the sequence of Possession versus Registration",
    "Understand Stamp Duty and Registration fees as 'Friction Costs'",
    "Deconstruct the structural components of a Home Loan (EMI logic)",
    "Compare the cash-flow logic of Rent versus Ownership",
    "Identify recurring holding costs like property tax and maintenance",
    "Understand liquidity risk and the 'Marketability' of a title",
    "Recognize the structure of Rental Income and TDS obligations",
    "Understand the conceptual logic of Capital Gains (STCG vs LTCG)",
    "Identify compliance risks related to Benami transactions and black money",
    "Build a framework for assessing property-related administrative records"
  ],
  estimatedEffort: "Deep",
  iconName: "Building2",
  levels: [
    {
      id: 1,
      title: "What Is Real Estate?",
      badge: "L1: Legal Identity",
      units: [
        {
          id: "re-1-u1",
          title: "Legal vs Emotional Asset",
          durationMins: 25,
          whyThisMatters: "Educational awareness only. This module does not provide advice.",
          content: "In the Indian legal framework, Real Estate is classified as 'Immovable Property'. Unlike a car or a stock, it is physically rooted in a specific jurisdiction. Logically, you don't 'buy a house'; you buy a bundle of 'Rights' to a specific piece of land and its improvements. Transitioning from an emotional view ('my home') to a structural view ('a bundle of titles') is essential for risk awareness.",
          actionableNextStep: "Search for the 'Transfer of Property Act' to see how immovable assets are defined."
        }
      ],
      quiz: [
        {
          id: "req1_1",
          question: "What does 'owning' real estate conceptually represent in a legal framework?",
          correctOptionId: "ro2",
          options: [
            { id: "ro1", text: "A guarantee that the price will always rise.", explanation: "Incorrect. No asset class offers guaranteed growth." },
            { id: "ro2", text: "A bundle of legal rights to a specific immovable land area and its structure.", explanation: "Correct. Ownership is the possession of legal titles and rights." },
            { id: "ro3", text: "A physical object that can be moved at will.", explanation: "Incorrect. Real estate is 'immovable' by definition." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Types of Property in India",
      badge: "L2: Classification",
      units: [
        {
          id: "re-2-u1",
          title: "Agricultural, Residential & Commercial",
          durationMins: 30,
          whyThisMatters: "Using property for the wrong purpose can lead to statutory fines.",
          content: "Property logic in India is strictly categorized by 'Usage'. 1. Agricultural: Generally restricted to residents with specific credentials in some states. 2. Residential: Designated for living. 3. Commercial: For trade and office use. Each category has different tax rates, stamp duties, and utility bill structures. Logic: The 'Nature' of the land determines its regulatory framework.",
          actionableNextStep: "Identify the 'Land Use' (NA or Non-Agricultural) status on a sample property record."
        }
      ],
      quiz: [
        {
          id: "req2_1",
          question: "Why is it important to check the 'Land Use' status before acquiring property?",
          correctOptionId: "ro1",
          options: [
            { id: "ro1", text: "To ensure the intended activity (living vs. business) is legally permitted on that specific plot.", explanation: "Correct. Regulatory frameworks strictly enforce usage zones." },
            { id: "ro2", text: "To calculate how many bricks the building needs.", explanation: "Incorrect. This is an engineering concern, not a legal logic." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Ownership Structures & Titles",
      badge: "L3: Title Logic",
      units: [
        {
          id: "re-3-u1",
          title: "Joint vs Individual Ownership",
          durationMins: 35,
          whyThisMatters: "Structural choices at the start impact succession and taxes for decades.",
          content: "1. Individual: Sole control and liability. 2. Joint (Tenants in Common): Each owns a specific percentage. 3. Joint (Joint Tenants with Survivorship): Logic: If one passes, ownership passes automatically to the other. In India, joint ownership between spouses is common to optimize for lower stamp duty rates in certain states and easier transmission. Educational awareness only.",
          actionableNextStep: "Compare the stamp duty rates for male vs. female owners in your specific state."
        }
      ],
      quiz: [
        {
          id: "req3_1",
          question: "What is a common reason for opting for joint ownership between family members in India?",
          correctOptionId: "ro3",
          options: [
            { id: "ro1", text: "To hide the asset from the government.", explanation: "Incorrect. All owners must be reported in the registry." },
            { id: "ro2", text: "To make the building taller.", explanation: "Incorrect." },
            { id: "ro3", text: "To optimize for potential lower stamp duty rates and facilitate seamless succession.", explanation: "Correct. Many states offer lower rates for female co-owners." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Registration & Records",
      badge: "L4: Documentation",
      units: [
        {
          id: "re-4-u1",
          title: "Stamp Duty & Index II",
          durationMins: 35,
          whyThisMatters: "A property is not 'yours' until the government records reflect it.",
          content: "The 'Source of Truth' for property is the government sub-registrar's office. 1. Stamp Duty: A state-level tax on the transaction. 2. Registration: The official recording. 3. Index II: The summary document showing the change in hands. 4. Mutation: Updating the revenue records (7/12 extract or Property Card). Logic: Possession (keys) is physical; Title (registration) is legal. Both are required for completeness.",
          actionableNextStep: "Locate an 'Index II' document for any property to see the summary structure."
        }
      ],
      quiz: [
        {
          id: "req4_1",
          question: "What does the 'Mutation' process conceptually represent in property records?",
          correctOptionId: "ro2",
          options: [
            { id: "ro1", text: "Changing the physical color of the building.", explanation: "Incorrect." },
            { id: "ro2", text: "Updating the local revenue records to reflect the new owner's name for property tax purposes.", explanation: "Correct. Mutation links the legal ownership to the local administrative authority." },
            { id: "ro3", text: "A type of insurance against fire.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Home Loan Mechanics",
      badge: "L5: Debt Structure",
      units: [
        {
          id: "re-5-u1",
          title: "Amortization & Interest Logic",
          durationMins: 30,
          whyThisMatters: "Most home owners pay for their property twice (Principal + Interest).",
          content: "A home loan is a 'Long-term Liability'. Logic: In the early years of a 20-year EMI, approx 70-80% of your payment goes toward 'Interest', not 'Principal'. This is called the amortization curve. Reducing the 'Tenure' (by making extra payments) is mathematically more efficient than looking for a minor interest rate cut. Educational awareness only.",
          actionableNextStep: "Use an EMI calculator to see how much 'Total Interest' is paid over 20 years for a ₹50L loan."
        }
      ],
      quiz: [
        {
          id: "req5_1",
          question: "In a standard long-term home loan, what does the 'EMI' primarily consist of in the first 5 years?",
          correctOptionId: "ro1",
          options: [
            { id: "ro1", text: "Predominantly interest payments on the outstanding principal.", explanation: "Correct. Due to amortization math, interest is front-loaded." },
            { id: "ro2", text: "Direct repayment of the building cost.", explanation: "Incorrect. Principal repayment starts slow and accelerates later." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Cash Flow & Holding Costs",
      badge: "L6: Economic Flow",
      units: [
        {
          id: "re-6-u1",
          title: "The Invisible Outflows",
          durationMins: 30,
          whyThisMatters: "Property is not a 'one-time cost' asset.",
          content: "Property ownership logic involves 'Holding Costs': 1. Property Tax (paid to municipality). 2. Society Maintenance. 3. Repair & Sinking Funds. 4. Opportunity Cost (Interest lost on the down payment). When compared to Rent, ownership replaces a monthly expense with a complex set of operational costs and debt servicing. Logic: Ownership is a move from 'Elastic Cost' (Rent) to 'Fixed Commitment' (EMI/Maintenance).",
          actionableNextStep: "Calculate the annual 'Maintenance + Property Tax' for a sample 1000 sq.ft flat."
        }
      ],
      quiz: [
        {
          id: "req6_1",
          question: "Which of these is a recurring 'Holding Cost' for a property owner?",
          correctOptionId: "ro3",
          options: [
            { id: "ro1", text: "The purchase price.", explanation: "Incorrect. This is a one-time capital cost." },
            { id: "ro2", text: "A bank FD interest payment.", explanation: "Incorrect." },
            { id: "ro3", text: "Annual municipal property tax and monthly maintenance dues.", explanation: "Correct. These are required for the upkeep and legal standing of the asset." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Rental Income & Compliance",
      badge: "L7: Income Logic",
      units: [
        {
          id: "re-7-u1",
          title: "Income from House Property",
          durationMins: 30,
          whyThisMatters: "Rental income is taxable even if the property is lying vacant in some cases.",
          content: "Logic: Rental income is categorized under 'Income from House Property'. You are allowed a 'Standard Deduction' of 30% for repairs, regardless of actual spend. If you receive more than ₹50,000 per month as rent, the tenant is required to deduct TDS. Literacy means recognizing that rent is 'Gross Revenue', not 'Net Profit'. Educational awareness only.",
          actionableNextStep: "Identify the Section 194-IB requirements for TDS on rent payments."
        }
      ],
      quiz: [
        {
          id: "req7_1",
          question: "What is the 'Standard Deduction' logically intended for in rental income taxation?",
          correctOptionId: "ro1",
          options: [
            { id: "ro1", text: "To cover the costs of repairs and maintenance without needing to provide every bill.", explanation: "Correct. The 30% deduction simplifies the accounting of property upkeep." },
            { id: "ro2", text: "To give the owner a free vacation.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Capital Gains & Tax Awareness",
      badge: "L8: Exit Logic",
      units: [
        {
          id: "re-8-u1",
          title: "The Logic of Selling",
          durationMins: 35,
          whyThisMatters: "Tax on property sale depends on how long you held it.",
          content: "1. Short-Term (STCG): If sold within 2 years (usually taxed at slab). 2. Long-Term (LTCG): If sold after 2 years (taxed at 12.5% or previous rates depending on budget rules). Indexation (inflation adjustment) was historically used to lower tax, but recent changes have shifted the logic toward fixed rates. Logic: The government encourages 'Long-term Holding' through preferential tax treatments. Educational awareness only.",
          actionableNextStep: "Research 'Section 54' to understand the logic of reinvesting gains into another house."
        }
      ],
      quiz: [
        {
          id: "req8_1",
          question: "What is the primary factor that determines the 'Tax Rate' on the sale of a house in India?",
          correctOptionId: "ro2",
          options: [
            { id: "ro1", text: "The color of the front door.", explanation: "Incorrect." },
            { id: "ro2", text: "The period of holding (time between purchase and sale).", explanation: "Correct. Duration defines whether the gain is short-term or long-term." },
            { id: "req8_o3", text: "The age of the owner only.", explanation: "Incorrect. Duration of the asset is the primary statutory trigger." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Liquidity & Legal Risks",
      badge: "L9: Hazard Logic",
      units: [
        {
          id: "re-9-u1",
          title: "The 'Lock-in' Reality",
          durationMins: 35,
          whyThisMatters: "You cannot sell 10% of a house if you need quick cash.",
          content: "1. Liquidity Risk: It can take 6-12 months to find a buyer and complete a sale. 2. Legal Risk: Encumbrances (hidden loans), family disputes, or faulty titles. 3. Concentration Risk: Putting 90% of your wealth into one building makes you vulnerable to local issues. Logic: Real estate is an 'Indivisible Asset' with high transaction friction. Professional 'Due Diligence' is a non-negotiable step.",
          actionableNextStep: "Locate a 'Public Notice' in a newspaper regarding property title verification."
        }
      ],
      quiz: [
        {
          id: "req9_1",
          question: "Why is real estate considered a 'Low Liquidity' asset compared to gold or stocks?",
          correctOptionId: "ro1",
          options: [
            { id: "ro1", text: "Because it cannot be easily divided and requires significant time/paperwork to find a buyer.", explanation: "Correct. Transaction friction is the primary cause of liquidity risk." },
            { id: "ro2", text: "Because houses are too heavy.", explanation: "Incorrect. Liquidity is about the ease of conversion to cash." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Myths & Final Framework",
      badge: "L10: Strategic Maturity",
      units: [
        {
          id: "re-10-u1",
          title: "The Logic of Choice",
          durationMins: 25,
          whyThisMatters: "Completion means moving from myths to structural reality.",
          content: "Myth: 'Property prices never go down.' Reality: Values can stagnate for decades or drop in real terms (adjusted for inflation). Final Framework: 1. Verify Titles (Legal). 2. Account for Friction Costs (Math). 3. Understand Holding Cycles (Time). 4. Use for Utility before Speculation (Maturity). Completing this track means you now recognize property as a formal administrative system. Educational awareness only.",
          actionableNextStep: "Commit to never signing a property agreement without a professional title search report."
        }
      ],
      quiz: [
        {
          id: "req10_1",
          question: "What is the ultimate goal of achieving real estate literacy?",
          correctOptionId: "ro2",
          options: [
            { id: "ro1", text: "To become a professional property dealer.", explanation: "Incorrect. You only need functional agency." },
            { id: "ro2", text: "To understand the structural risks and administrative responsibilities of property ownership in India.", explanation: "Correct. Literacy provides the calm needed for large, irreversible decisions." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Transfer of Property Act, 1882", "RERA Act, 2016", "Indian Stamp Act, 1899"],
    lastReviewedDate: "2025-01-25"
  },
  seo: {
    metaTitle: "Real Estate Framework India | Monitize Learning",
    metaDescription: "Master the structural logic of Indian real estate. Learn about titles, stamp duty, RERA, home loans, and property taxes."
  }
};
