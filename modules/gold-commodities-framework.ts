import { LearningModule } from '../types';

export const goldCommoditiesFrameworkModule: LearningModule = {
  id: "gold-commodities-framework",
  title: "Gold & Commodities Framework",
  /* Fixed: Added missing category property */
  category: "Markets",
  shortDescription: "Understand how gold and commodities function structurally in India — forms, pricing logic, risks, taxation, and usage — without investment advice.",
  detailedDescription: "A technical deconstruction of the commodity ecosystem. This module explains the logic of risk pooling in gold, the regulatory mandate of Sovereign Gold Bonds, and the structural differences between physical and digital commodities. Educational awareness only. This module does not provide commodity, investment, tax, or financial advice.",
  learningObjectives: [
    "Define commodities as fungible economic goods",
    "Distinguish between consumption-led and finance-led gold acquisition",
    "Understand the structural differences between jewellery, coins, and bars",
    "Grasp the logic of Caratage and BIS Hallmarking",
    "Identify the components of gold pricing (Global Fix + Duties + Margins)",
    "Understand the sovereign guarantee logic of SGBs",
    "Recognize the custody and counterparty risks in Digital Gold",
    "Identify the liquidity constraints across different commodity forms",
    "Understand the basic GST and Capital Gains tax framework for gold",
    "Identify the role of Silver and Energy commodities as industrial inputs",
    "Recognize the risks of leverage in commodity derivatives",
    "Differentiate between spot markets and future delivery logic",
    "Build a framework for identifying transparency in jeweler billing",
    "Understand why commodities do not generate internal cash flow (dividends/interest)"
  ],
  estimatedEffort: "Deep",
  iconName: "Coins",
  levels: [
    {
      id: 1,
      title: "What Are Commodities & Why Gold Is Different",
      badge: "L1: Classification Logic",
      units: [
        {
          id: "gc-1-u1",
          title: "Fungibility and Natural Resources",
          durationMins: 20,
          whyThisMatters: "Commodities behave differently because they are raw inputs, not businesses.",
          content: "In financial logic, a commodity is a basic good used in commerce that is interchangeable with other goods of the same type. Gold is a unique commodity because it has high 'Value Density' and a low 'Perishability' rate compared to agri-commodities. Unlike a stock (which represents a business) or a bond (which represents a loan), a commodity's value is derived purely from supply/demand dynamics and its physical utility.",
          actionableNextStep: "Identify three items in your household that are derived from raw commodities (e.g., fuel, flour, wiring)."
        }
      ],
      quiz: [
        {
          id: "gcq1_1",
          question: "What is a defining characteristic of a 'Commodity' in a market framework?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "It generates quarterly dividends for the holder.", explanation: "Incorrect. Commodities are inert assets and do not produce internal cash flow." },
            { id: "opt2", text: "Fungibility: one unit is identical to any other unit of the same grade.", explanation: "Correct. This allows commodities to be traded on standard exchanges." },
            { id: "opt3", text: "It is always a digital-only asset.", explanation: "Incorrect. Most commodities are physical natural resources." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Gold in India: Cultural vs Financial Roles",
      badge: "L2: Usage Context",
      units: [
        {
          id: "gc-2-u1",
          title: "Consumption vs Provisioning",
          durationMins: 20,
          whyThisMatters: "Confusing a cultural gift for a financial asset leads to mispricing risks.",
          content: "In India, gold serves a dual logic. 1. Cultural/Social: Used in weddings and rituals. Here, 'Making Charges' and design aesthetics are priority costs. 2. Economic/Financial: Used as a store of value. Here, purity and liquidity are the only priorities. Logical friction occurs when users try to use social jewellery as a high-efficiency financial tool, ignoring the high 'wastage' costs involved in the initial purchase.",
          actionableNextStep: "Reflect on your household gold: is it primarily for 'Wear' (Social) or for 'Emergency Buffer' (Economic)?"
        }
      ],
      quiz: [
        {
          id: "gcq2_1",
          question: "Why is jewellery often a less efficient 'financial' form of gold than bars or coins?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "High 'Making Charges' that are not recoverable during a sale.", explanation: "Correct. These are consumption costs that erode the financial value of the metal." },
            { id: "opt2", text: "Jewellery is illegal to sell in India.", explanation: "Incorrect. It is perfectly legal but involves higher transaction friction." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Forms of Gold: Jewellery, Coins, Bars",
      badge: "L3: Physical Formats",
      units: [
        {
          id: "gc-3-u1",
          title: "The Friction of Form",
          durationMins: 25,
          whyThisMatters: "The form of gold determines the 'Bid-Ask Spread' you face at the jeweler.",
          content: "Physical gold exists in a hierarchy of efficiency. Bars (99.9% purity) have the lowest spread between buy and sell prices. Coins (Standardized weight) offer moderate efficiency and easier storage. Jewellery involves the highest friction because the 'purity' is often lower (22K or 18K) to allow for structural strength, and the labor cost (Making) is lost the moment you leave the store. Educational awareness only.",
          actionableNextStep: "Compare the 'Sell-back' policy of a local jeweler for a bar versus a piece of intricate jewellery."
        }
      ],
      quiz: [
        {
          id: "gcq3_1",
          question: "Which form of physical gold typically has the highest purity and lowest transaction friction?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Intricate Antique Jewellery", explanation: "Incorrect. This has the highest labor cost and lower metal purity." },
            { id: "opt2", text: "Gold-plated ornaments", explanation: "Incorrect. These have negligible precious metal value." },
            { id: "opt3", text: "24K Gold Bars/Biscuits", explanation: "Correct. These are standardized for purity and have minimal labor costs." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Purity, Hallmarking & Weight Mechanics",
      badge: "L4: Standards",
      units: [
        {
          id: "gc-4-u1",
          title: "Caratage and BIS Verification",
          durationMins: 30,
          whyThisMatters: "Buying unverified gold creates significant 'Information Asymmetry' risk.",
          content: "Purity logic in India is managed by the BIS (Bureau of Indian Standards). 24K (99.9%) is the base. 22K (91.6%) is standard for jewellery. A BIS Hallmark contains three markers: 1. The BIS Logo. 2. Purity Grade (e.g., 22K916). 3. HUID (6-digit unique alphanumeric code). This system ensures that the seller's claim of purity is verified by a third-party lab. Weight is measured in Grams, though international markets use Troy Ounces (approx 31.1 grams).",
          actionableNextStep: "Use a magnifying glass to locate the 6-digit HUID code on a piece of hallmarked gold."
        }
      ],
      quiz: [
        {
          id: "gcq4_1",
          question: "What does '22K916' conceptually represent on a gold hallmark?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "22 Carat gold, containing 91.6% pure gold by weight.", explanation: "Correct. The rest is usually copper or silver to add strength." },
            { id: "opt2", text: "Gold that was made in the year 1916.", explanation: "Incorrect. 916 is a purity percentage marker." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Pricing Logic: How Gold Prices Are Derived",
      badge: "L5: Economic Drivers",
      units: [
        {
          id: "gc-5-u1",
          title: "The Indian Gold Price Formula",
          durationMins: 30,
          whyThisMatters: "Local prices are not just reflections of global supply, but also local statutory costs.",
          content: "The price you pay in India follows this logic: [International Spot Price x USD-INR Exchange Rate] + [Import Custom Duties] + [Agriculture Infrastructure Cess] + [Local Jeweler Margin/Premium] + [3% GST]. This explains why gold prices in Dubai or Singapore are often lower than in Mumbai. The local price is a 'Gross Price' inclusive of significant statutory taxes.",
          actionableNextStep: "Calculate the 3% GST on a hypothetical gold purchase of ₹1,00,000 to see the statutory load."
        }
      ],
      quiz: [
        {
          id: "gcq5_1",
          question: "Why might the price of gold in India rise even if the International (Global) price remains flat?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because the sun is hotter in India.", explanation: "Incorrect." },
            { id: "opt2", text: "Depreciation of the Indian Rupee (INR) against the US Dollar (USD).", explanation: "Correct. Gold is priced globally in USD; a weaker INR makes it more expensive to import." },
            { id: "opt3", text: "Because people are buying more silver.", explanation: "Incorrect. While related, exchange rates have a more direct impact on pricing logic." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Digital Gold & SGBs (Structure Only)",
      badge: "L6: Non-Physical Ownership",
      units: [
        {
          id: "gc-6-u1",
          title: "Digital Formats vs Sovereign Mandates",
          durationMins: 35,
          whyThisMatters: "The source of the 'Promise' determines your credit and liquidity risk.",
          content: "1. Digital Gold: Sold via apps. Logic: A private company buys physical gold and stores it in a vault on your behalf. Counterparty risk exists (you depend on the company's integrity). 2. Sovereign Gold Bonds (SGB): Issued by the RBI on behalf of the Govt of India. Logic: You own 'grams' on paper. The govt guarantees the price of gold at the time of maturity, plus pays a fixed annual interest (e.g. 2.5%). SGBs have an 8-year lock-in with exit windows after the 5th year. Educational awareness only.",
          actionableNextStep: "Identify the current 'Issue Price' of the latest SGB series on the RBI website."
        }
      ],
      quiz: [
        {
          id: "gcq6_1",
          question: "What is the primary structural difference between SGBs and Digital Gold?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Digital gold is guaranteed by the government.", explanation: "Incorrect. Digital gold is a private contractual arrangement." },
            { id: "opt2", text: "SGBs allow you to withdraw physical gold at any time.", explanation: "Incorrect. SGBs are cash-settled; you get the value of gold in INR." },
            { id: "opt3", text: "SGBs are sovereign-backed and pay an additional annual interest yield.", explanation: "Correct. This makes them a unique hybrid of commodity and debt logic." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Storage, Custody & Liquidity Risks",
      badge: "L7: Risk Awareness",
      units: [
        {
          id: "gc-7-u1",
          title: "The Cost of Holding",
          durationMins: 25,
          whyThisMatters: "Ignoring 'Invisible Costs' like storage and insurance leads to lower real outcomes.",
          content: "Physical commodities have 'Carrying Costs'. 1. Storage: Bank locker fees or home safes. 2. Security: Risk of theft or physical loss. 3. Liquidity Risk: Converting a physical bar to cash requires finding a jeweler, verifying purity (melting test), and accepting a 'buy-back' spread (often 2-5% below market). Digital forms (SGB/Gold ETFs) have zero storage risk but involve 'Market Liquidity' risk if you try to sell them on an exchange before maturity.",
          actionableNextStep: "Ask your bank about the annual fee for a 'Small' locker and conceptualize it as a percentage of your gold's value."
        }
      ],
      quiz: [
        {
          id: "gcq7_1",
          question: "Which form of gold logically eliminates physical theft risk and bank locker costs?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Gold ETFs or Sovereign Gold Bonds.", explanation: "Correct. These are dematerialized forms held in your secure demat account." },
            { id: "opt2", text: "Keeping gold in a wooden cupboard.", explanation: "Incorrect. This increases physical risk significantly." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Commodities Beyond Gold (Silver, Energy, Agri)",
      badge: "L8: Broad Ecosystem",
      units: [
        {
          id: "gc-8-u1",
          title: "Industrial and Agricultural Logic",
          durationMins: 30,
          whyThisMatters: "Other commodities are driven by 'Usage' cycles rather than 'Wealth' cycles.",
          content: "1. Silver: 50% of demand is industrial (solar panels, electronics). Logic: Prices track economic growth. 2. Energy (Crude Oil/Gas): Driven by geopolitical supply. Logic: High price volatility impacts the entire economy (transportation costs). 3. Agri-Commodities (Wheat/Sugar): Seasonal logic. Subject to 'Perishability' and government price floors (MSP). Retail users should recognize that these markets are professional domains involving high technical complexity.",
          actionableNextStep: "Reflect on how a rise in crude oil prices conceptually impacts the cost of your grocery delivery."
        }
      ],
      quiz: [
        {
          id: "gcq8_1",
          question: "Why is Silver's pricing logic different from Gold's?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because it is cheaper.", explanation: "Incorrect. Price level is a result, not the logic." },
            { id: "opt2", text: "Because it has significant industrial usage beyond being a store of value.", explanation: "Correct. Industrial demand cycles heavily influence silver's market behavior." },
            { id: "opt3", text: "Because silver is not a commodity.", explanation: "Incorrect. Silver is one of the most traded commodities globally." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Common Myths & Final Framework",
      badge: "L9: Strategic Maturity",
      units: [
        {
          id: "gc-9-u1",
          title: "De-bunking and The Literacy Pledge",
          durationMins: 25,
          whyThisMatters: "Mastery means moving from cultural hype to structural reality.",
          content: "Myth 1: 'Gold is a risk-free investment.' Reality: Gold prices can stagnate or drop for decades. Myth 2: 'Buying gold jewellery is the best way to save for a daughter's wedding.' Reality: Style changes; the 'making charges' paid 20 years ago are 100% loss. SGBs or Bars are structurally more efficient for the same goal. Final Framework: 1. Verify Purity (Hallmark). 2. Minimize Friction (Format). 3. Plan for Taxation (LTCG). 4. Use for Utility BEFORE Speculation. Completing this track means you now recognize commodities as specific administrative assets. Educational awareness only.",
          actionableNextStep: "Commit to checking the 'BIS Care' app for any future hallmarked gold purchases."
        }
      ],
      quiz: [
        {
          id: "gcq9_1",
          question: "What is the ultimate goal of achieving commodity literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To become a high-frequency gold trader.", explanation: "Incorrect. Speculation is a professional risk, not a literacy goal." },
            { id: "opt2", text: "To understand the structural costs, purity standards, and regulatory frameworks of Indian commodity assets.", explanation: "Correct. Literacy provides the calm needed for disciplined and transparent acquisition." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Bureau of Indian Standards Act", "RBI SGB Guidelines", "SEBI Commodity Regulations"],
    lastReviewedDate: "2025-01-28"
  },
  seo: {
    metaTitle: "Gold & Commodities Framework India | Monitize Learning",
    metaDescription: "Master the structural logic of Indian gold buying. Learn about hallmarking, SGBs, digital gold, and commodity pricing mechanics."
  }
};
