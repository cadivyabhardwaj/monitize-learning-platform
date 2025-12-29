import { LearningModule } from '../types';

export const derivativeLogicModule: LearningModule = {
  id: "derivative-logic",
  title: "Derivative Logic",
  /* Fixed: Added missing category property */
  category: "Markets",
  shortDescription: "Understand what derivatives actually are, why they exist, and how risk is transferred, amplified, or misunderstood.",
  detailedDescription: "A strategic deconstruction of the derivative ecosystem. This module explains the mechanical relationship between underlying assets and their derived contracts, the structural nature of obligation vs rights, and the systemic logic of risk shifting in modern markets. Educational awareness only. This module does not provide trading, investment, financial, or risk management advice.",
  learningObjectives: [
    "Define a derivative as a contract whose value is dependent on an underlying asset",
    "Identify the foundational purpose of derivatives as risk-transfer instruments",
    "Distinguish between the logical structures of Futures, Options, and Swaps",
    "Understand the difference between a contractual 'Obligation' and a 'Right'",
    "Recognize how Margin and Premium serve as the entry costs for participation",
    "Grasp the conceptual amplification of outcomes through 'Leverage'",
    "Differentiate between Hedging (Protection) and Speculation (Directional Betting)",
    "Identify why the 'Zero-Sum' nature of derivatives makes them structurally distinct from long-term investing",
    "Analyze common retail behavioral mistakes leading to capital erosion",
    "Understand the institutional role of clearing corporations and risk management"
  ],
  estimatedEffort: "Deep",
  iconName: "TrendingUp",
  levels: [
    {
      id: 1,
      title: "Why Derivatives Exist",
      badge: "L1: Risk Shifting",
      units: [
        {
          id: "dl-1-u1",
          title: "The Insurance of Price",
          durationMins: 20,
          whyThisMatters: "Derivatives are often mistaken for 'betting tools'. They are actually 'risk-management tools'.",
          content: "In financial logic, derivatives were created to manage uncertainty. If a farmer grows wheat, they fear the price will drop. If a bakery buys wheat, they fear the price will rise. A derivative contract allows them to agree on a price today for a transaction tomorrow. Derivatives shift the risk of price change from someone who wants to avoid it to someone who is willing to bear it for a cost. Educational awareness only.",
          actionableNextStep: "Identify one commodity in your daily life (like fuel) and reflect on how price uncertainty affects its producers.",
          structuralExplanation: ["Risk Origin: Physical uncertainty.", "Risk Transfer: The contract as a medium.", "Equilibrium: Finding a price that satisfies both counterparties."]
        }
      ],
      realWorldAnalogies: ["An airline buying fuel contracts 6 months in advance to ensure they don't go bankrupt if oil prices spike."],
      reflectionPrompt: "If you were a business owner, would you prefer a 'guaranteed price' tomorrow or the 'chance' of a lower price with the risk of a much higher one?",
      quiz: [
        {
          id: "dl-q1-1",
          question: "At its core, what is the primary 'Logic' for the existence of derivatives?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To replace traditional stock market investing.", explanation: "Incorrect. Derivatives are auxiliary to underlying assets." },
            { id: "opt2", text: "To transfer the risk of price uncertainty between participants.", explanation: "Correct. Risk shifting is the fundamental purpose." },
            { id: "opt3", text: "To guarantee a profit for every buyer.", explanation: "Incorrect. There are no guarantees; risk is merely moved, not removed." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Underlying vs Derivative",
      badge: "L2: Dependency",
      units: [
        {
          id: "dl-2-u1",
          title: "The Shadow Logic",
          durationMins: 25,
          whyThisMatters: "Confusion between the 'Thing' and the 'Contract' leads to valuation errors.",
          content: "A derivative has no value of its own. Its value is 'Derived' from an 'Underlying' asset. Logic: If the asset is Gold, the derivative is a contract to buy or sell Gold. If the price of Gold moves, the contract's value moves based on that change. Think of the underlying as the physical object and the derivative as its shadow. The shadow moves only because the object moves. Educational awareness only.",
          actionableNextStep: "List three common 'Underlying' assets in the Indian market (e.g., Nifty 50, Reliance, US Dollar).",
          structuralExplanation: ["Asset: Physical or Financial baseline.", "Derivative: The secondary legal agreement.", "Correlation: The link between the two."]
        }
      ],
      realWorldAnalogies: ["A receipt for a pre-ordered gadget: The receipt itself is worthless without the existence of the gadget it represents."],
      quiz: [
        {
          id: "dl-q2-1",
          question: "What logically happens to a derivative contract if its 'Underlying' asset ceases to exist?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The derivative contract becomes logically and financially void.", explanation: "Correct. Value is derived; without the source, the derivation fails." },
            { id: "opt2", text: "The derivative contract gains more value.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Futures: Obligation Contracts",
      badge: "L3: Hard Commitments",
      units: [
        {
          id: "dl-3-u1",
          title: "The Locked Future",
          durationMins: 25,
          whyThisMatters: "Futures are two-way obligations. You cannot simply 'walk away'.",
          content: "A Future is a 'Hard Contract'. Both the buyer and the seller are legally 'Obligated' to fulfill the trade at the agreed price on the expiry date. Logic: It removes all choice. If you buy a future at ₹100 and the price drops to ₹80, you MUST still pay ₹100. This creates 'Linear Risk'—for every rupee the underlying moves, your contract gains or loses a corresponding amount. Educational awareness only.",
          actionableNextStep: "Reflect on a real estate booking where you pay an advance and commit to the final price regardless of market changes.",
          structuralExplanation: ["Buyer: Mandatory purchase at price X.", "Seller: Mandatory sale at price X.", "Outcome: Zero choice at maturity."]
        }
      ],
      quiz: [
        {
          id: "dl-q3-1",
          question: "In a Futures contract, which party has the 'choice' to not fulfill the trade at expiry?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Only the Buyer.", explanation: "Incorrect." },
            { id: "opt2", text: "Only the Seller.", explanation: "Incorrect." },
            { id: "opt3", text: "Neither party; both are legally obligated.", explanation: "Correct. Futures are mutual binding commitments." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Options: Rights vs Obligations",
      badge: "L4: Choice Logic",
      units: [
        {
          id: "dl-4-u1",
          title: "The Asymmetric Contract",
          durationMins: 30,
          whyThisMatters: "Options separate 'The Right to Act' from 'The Duty to Perform'.",
          content: "An Option is a one-sided choice. 1. The Buyer pays a small fee (Premium) for the 'Right' (but not the obligation) to buy or sell. 2. The Seller receives the fee and takes on the 'Obligation' to perform IF the buyer chooses. Logic: The buyer's risk is limited to the fee paid. The seller's risk is theoretically much higher because they have lost the power of choice. This creates 'Non-Linear' outcomes. Educational awareness only.",
          actionableNextStep: "Identify the 'Premium' paid in a non-financial context, like a non-refundable booking fee for a hotel.",
          decisionTradeOffs: ["Buyer: Limited Risk (Premium) for Potential Right.", "Seller: Limited Gain (Premium) for Potential Obligation."]
        }
      ],
      realWorldAnalogies: ["An insurance policy: You (Buyer) pay a premium for the right to a claim. The company (Seller) is obligated to pay if the condition is met."],
      quiz: [
        {
          id: "dl-q4-1",
          question: "What is the primary 'Right' that an Option Buyer purchases?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The choice to execute the trade only if it is beneficial to them.", explanation: "Correct. The buyer holds the 'Option', not the obligation." },
            { id: "opt2", text: "The right to a guaranteed dividend from the company.", explanation: "Incorrect. Options do not grant ownership rights like dividends." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Margin, Premium & Leverage",
      badge: "L5: Capital Mechanics",
      units: [
        {
          id: "dl-5-u1",
          title: "The Power of Amplification",
          durationMins: 30,
          whyThisMatters: "Leverage makes small movements feel massive, which is the primary cause of ruin.",
          content: "Derivatives use 'Leverage'. Logic: Instead of paying ₹100 for a stock, you pay ₹10 (Margin) to control the 'Future' of that stock. If the stock moves ₹2, you have made a 20% gain or loss on your ₹10 capital, even though the stock only moved 2%. Leverage 'Amplifies' the math. It allows a small amount of capital to control a large amount of risk. Educational awareness only.",
          actionableNextStep: "Calculate the 'Leverage Factor' if ₹20,000 margin allows you to control ₹1,00,000 worth of underlying assets.",
          constraintsAndRisks: ["Margin Calls: Mandatory cash injection if losses exceed a threshold.", "Liquidity Risk: Inability to exit a leveraged position."]
        }
      ],
      realWorldAnalogies: ["A street vendor who needs to buy vegetables at 5 AM but only gets paid by customers at 7 PM."],
      quiz: [
        {
          id: "dl-q5-1",
          question: "How does 'Leverage' conceptually impact a participant's capital?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "It reduces the volatility of the investment.", explanation: "Incorrect. It dramatically increases perceived volatility." },
            { id: "opt2", text: "It amplifies both the potential gains and the potential losses proportionally.", explanation: "Correct. Leverage is a double-edged multiplier." },
            { id: "opt3", text: "It ensures that the participant never runs out of money.", explanation: "Incorrect. Leveraged positions can result in losses exceeding initial capital." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Hedging vs Speculation",
      badge: "L6: Purpose Logic",
      units: [
        {
          id: "dl-6-u1",
          title: "Protection vs Prediction",
          durationMins: 25,
          whyThisMatters: "Confusing a bet for a shield leads to structural portfolio failure.",
          content: "1. Hedging (The Shield): You already own the asset and use a derivative to 'Offset' potential loss. Logic: If the asset or market value drops, the derivative gains. You pay a cost to ensure stability. 2. Speculation (The Bet): You do not own the asset. You use the derivative to 'Profit' from a predicted direction. Logic: You are taking on risk that didn't exist for you before. Derivatives are conceptually an 'Insurance' system where speculators act as the 'Re-insurers'. Educational awareness only.",
          actionableNextStep: "Reflect on whether your interest in derivatives is to 'Protect' something you own or 'Gain' from something you don't.",
          structuralExplanation: ["Hedger: Transfers risk OUT.", "Speculator: Takes risk IN (for a fee)."]
        }
      ],
      quiz: [
        {
          id: "dl-q6-1",
          question: "Which behavior is logically defined as 'Hedging'?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "An exporter using a currency contract to lock in a Rupee rate for a future payment.", explanation: "Correct. This is using a derivative to protect a real-world business inflow." },
            { id: "opt2", text: "An individual buying an option because they think the market will double by Friday.", explanation: "Incorrect. This is speculation based on a directional bet." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Why Losses Are Common",
      badge: "L7: Probability Reality",
      units: [
        {
          id: "dl-7-u1",
          title: "The Friction of Time and Cost",
          durationMins: 30,
          whyThisMatters: "In a zero-sum game, the 'House' (Taxes/Brokerage) and 'Time' are constant eroders.",
          content: "Derivatives are 'Zero-Sum' (minus friction). Logic: If you make ₹1,000, someone else lost ₹1,000. Unlike the stock market where all companies can grow over 20 years, derivatives are a closed loop. For retail buyers, the biggest eroders are: 1. Time Decay (Theta): Options lose value every day they sit idle. 2. Impact Cost: The price of entering and exiting. 3. Over-leveraging: One mistake wiping out 100% of capital. Educational awareness only.",
          actionableNextStep: "Examine the SEBI mandatory disclosure that '9 out of 10 retail traders lose money in F&O'.",
          commonMisinterpretations: ["Ignoring the cost of time.", "Using 100% of capital for margin.", "Emotional 'revenge' participation after a loss."]
        }
      ],
      quiz: [
        {
          id: "dl-q7-1",
          question: "What is meant by the 'Zero-Sum' nature of derivatives?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "The total value of the market is zero.", explanation: "Incorrect." },
            { id: "opt2", text: "The probability of winning is 0%.", explanation: "Incorrect." },
            { id: "opt3", text: "The gain of one participant is the exact loss of another participant.", explanation: "Correct. No new value is created within the derivative loop itself." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Institutional vs Retail Use",
      badge: "L8: Tool Maturity",
      units: [
        {
          id: "dl-8-u1",
          title: "Who Are You Playing Against?",
          durationMins: 25,
          whyThisMatters: "Retail participants often use 'Institutional Tools' without 'Institutional Infrastructure'.",
          content: "Institutional logic for derivatives: 1. Arbitrage (finding small math errors between markets). 2. Portfolio Hedging. 3. Market Making. Institutions use high-speed algorithms and massive capital buffers. Retail logic often centers on 'high returns with small capital'. This mismatch in logic is why institutional participants are often the 'Sellers' of the options that retail 'Buyers' lose money on. Educational awareness only.",
          actionableNextStep: "Reflect on whether a high-speed professional tool is appropriate for a part-time individual participant.",
          structuralExplanation: ["Institutional: Math-driven and risk-contained.", "Retail: Often emotion-driven and capital-exposed."]
        }
      ],
      quiz: [
        {
          id: "dl-q8-1",
          question: "Why do Institutions typically have a logical advantage in derivative markets?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because they are allowed to cheat.", explanation: "Incorrect. Markets are regulated and transparent." },
            { id: "opt2", text: "Because of superior technology, mathematical risk models, and diversified capital.", explanation: "Correct. Professional infrastructure provides the logic for consistent risk management." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "When Derivatives Make Sense (Conceptually)",
      badge: "L9: Strategic Maturity",
      units: [
        {
          id: "dl-9-u1",
          title: "The Maturity Pledge",
          durationMins: 20,
          whyThisMatters: "Mastery means treating derivatives as an advanced surgical tool, not a daily habit.",
          content: "Derivatives logically apply when: 1. You have an existing asset to protect (Hedging). 2. You have a highly specific, math-backed view on volatility (Advanced). 3. You understand and can afford to lose 100% of the deployed capital. Literacy is recognizing that for 99% of people, the underlying assets (Stocks/Bonds/MFs) provide sufficient growth logic without the need for derivative complexity. Educational awareness only. This module does not provide trading, investment, financial, or risk management advice.",
          actionableNextStep: "Commit to never entering a derivative contract without identifying whether you are 'Hedging' or 'Speculating'."
        }
      ],
      quiz: [
        {
          id: "dl-q9-1",
          question: "What is the ultimate goal of achieving derivative literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To quit your job and trade options full-time.", explanation: "Incorrect. That is a career choice, not a literacy goal." },
            { id: "opt2", text: "To understand the structural risks, the logic of risk transfer, and the high probability of capital loss for retail participants.", explanation: "Correct. Literacy provides the defensive logic needed to avoid unnecessary ruin." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["SEBI (F&O) Guidelines", "SCRA 1956", "Exchange Risk Management Frameworks"],
    lastReviewedDate: "2025-02-03"
  },
  seo: {
    metaTitle: "Derivative Logic & Risk Transfer | Monitize Markets",
    metaDescription: "Master the structural logic of Futures and Options. Understand how risk is shifted, amplified, and misunderstood in the derivative ecosystem."
  }
};
