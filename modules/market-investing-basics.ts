
import { LearningModule } from '../types';

export const marketInvestingBasicsModule: LearningModule = {
  id: "market-investing-basics",
  title: "Market & Investing Basics",
  category: "Markets",
  shortDescription: "Understand how the Indian market ecosystem functions—from capital flow logic to behavioral dynamics.",
  detailedDescription: "A comprehensive 10-level framework deconstructing the mechanics of capital markets. This module builds the cognitive resilience required to distinguish between temporary price volatility and permanent loss of capital, while explaining the structural roles of SEBI, Exchanges, and various asset classes.",
  learningObjectives: [
    "Understand the logical purpose of financial markets as capital bridges",
    "Identify the behavioral differences between investing and speculation",
    "Grasp the structural role of SEBI and the Stock Exchanges",
    "Recognize the fundamental logic of Equity (Ownership) vs. Debt (Lending)",
    "Understand the 'Pooled Logic' behind Mutual Funds",
    "Identify how information translates into price movements",
    "Distinguish between market volatility and permanent capital loss",
    "Recognize common psychological biases in the Indian retail context",
    "Understand the limitations of linear mathematical simulators",
    "Build a framework for engaging with licensed professionals"
  ],
  estimatedEffort: "Deep",
  iconName: "TrendingUp",
  levels: [
    {
      id: 1,
      title: "The Capital Bridge",
      badge: "L1: Foundational Purpose",
      units: [
        {
          id: "m1u1",
          title: "Why Markets Exist",
          durationMins: 30,
          whyThisMatters: "Thinking of markets as a 'casino' ignores their critical economic function.",
          content: "Financial markets are the circulatory system of the Indian economy. Their primary logical role is to act as a bridge. On one side, we have Savers (individuals with surplus capital). On the other, we have Issuers (Companies or Governments who need capital to build factories, infrastructure, or technology). Markets allow capital to move from 'Stagnation' to 'Productivity'. When you participate, you aren't just betting on a number; you are providing the fuel for economic expansion.",
          actionableNextStep: "Identify three companies listed on the NSE that provide services or products you use every day."
        }
      ],
      quiz: [
        {
          id: "mq1_1",
          question: "What is the primary logical function of a financial market in an economy?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "To provide a platform for high-speed gambling.", explanation: "Incorrect. While some treat it that way, its structural purpose is capital allocation." },
            { id: "mo2", text: "To move capital from people with surplus to entities that need it for productive use.", explanation: "Correct. This is the core 'Bridge Logic' of any capital market." },
            { id: "mo3", text: "To guarantee that every participant makes a fixed monthly profit.", explanation: "Incorrect. Markets involve risk and do not offer guarantees; they offer participation in growth." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Investing vs. Speculation",
      badge: "L2: Behavioral Logic",
      units: [
        {
          id: "m2u1",
          title: "The Mindset Distinction",
          durationMins: 30,
          whyThisMatters: "Mistaking speculation for investing is the #1 cause of retail capital erosion.",
          content: "Investing is the act of allocating capital based on the expected long-term growth of the underlying asset's value or cash flow. Speculation is the attempt to profit from short-term price fluctuations without regard for fundamental value. Logic: The investor looks at the 'Business'; the speculator looks at the 'Ticker'. In India, high-frequency trading is often confused with long-term wealth creation. Understanding which game you are playing is critical for your survival.",
          actionableNextStep: "Reflect on a previous financial decision: Was it based on the business's quality or the hope that 'the price would go up tomorrow'?"
        }
      ],
      quiz: [
        {
          id: "mq2_1",
          question: "Which of these behaviors conceptually aligns with 'Investing'?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "Buying a share because the company is expanding its factories and increasing profits.", explanation: "Correct. This is participation in fundamental business growth." },
            { id: "mo2", text: "Buying a share because a 'finfluencer' said it would double in three days.", explanation: "Incorrect. This is speculation based on noise and social proof." },
            { id: "mo3", text: "Selling a share immediately because the overall market dropped 1% today.", explanation: "Incorrect. This is a reactive emotional response to volatility, not an investment logic." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "The Umpire & The Field",
      badge: "L3: Institutional Logic",
      units: [
        {
          id: "m3u1",
          title: "SEBI and The Exchanges",
          durationMins: 35,
          whyThisMatters: "Safety comes from transparency, which is mandated by the regulator.",
          content: "The 'Field' consists of the Stock Exchanges (NSE/BSE) where matching of buyers and sellers happens. The 'Umpire' is SEBI (Securities and Exchange Board of India). SEBI's logical mandate is threefold: Protect investors, Develop the market, and Regulate participants. They ensure that companies disclose their true financial state so you can make informed choices. Without SEBI, the market lacks the 'Trust Logic' required for retail participation.",
          actionableNextStep: "Visit the SEBI website (sebi.gov.in) and locate the 'Investor Education' section."
        }
      ],
      quiz: [
        {
          id: "mq3_1",
          question: "Does SEBI's regulation of a company guarantee that its stock price will always go up?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "Yes, SEBI only allows 'good' companies to list.", explanation: "Incorrect. SEBI mandates disclosure; they do not predict or guarantee business success." },
            { id: "mo2", text: "No, SEBI ensures transparency of information, not the outcome of the business.", explanation: "Correct. The 'Umpire' ensures fair play, but the 'Players' (Companies) can still lose the game." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Equity vs. Debt",
      badge: "L4: Instrument Logic",
      units: [
        {
          id: "m4u1",
          title: "Ownership vs. Lending",
          durationMins: 30,
          whyThisMatters: "Your claim on the company's future depends on the instrument type.",
          content: "Logic: Equity is 'Ownership'. You share in the profits (dividends) and losses. Your upside is theoretically unlimited, but your downside is the total capital invested. Debt (Bonds/Debentures) is 'Lending'. You provide capital for a fixed interest (coupon) and return of principal. You do not share in extra profits, but you have a higher priority claim if the company fails. Equity builds wealth; Debt provides stability.",
          actionableNextStep: "Identify one 'Equity' instrument and one 'Debt' instrument in your current or target savings mix."
        }
      ],
      quiz: [
        {
          id: "mq4_1",
          question: "Scenario: A company doubles its profits in a year. Which participant logically benefits more from this specific growth?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "The Equity Shareholder.", explanation: "Correct. Owners have a residual claim on all profits after obligations are met." },
            { id: "mo2", text: "The Bondholder (Debt).", explanation: "Incorrect. Lenders only receive their fixed interest, regardless of how much profit the company makes." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Mutual Fund Mechanics",
      badge: "L5: Pooled Logic",
      units: [
        {
          id: "m5u1",
          title: "Professional Diversification",
          durationMins: 35,
          whyThisMatters: "Individual stock picking requires time and skill that many don't have.",
          content: "A Mutual Fund is a 'Logical Pool'. Thousands of individuals contribute capital, which is managed by a professional Fund Manager. The logic is Diversification: instead of buying one stock, you buy a fraction of 50 stocks. This reduces the risk of one company failing. Key Metric: The Expense Ratio. This is the fee you pay the manager for this logic. Lower fees often translate to better long-term terminal value.",
          actionableNextStep: "Examine a 'Fact Sheet' of any Indian mutual fund to see the list of top 10 companies it owns."
        }
      ],
      quiz: [
        {
          id: "mq5_1",
          question: "What is the primary risk-reduction logic of a Mutual Fund?",
          correctOptionId: "mo3",
          options: [
            { id: "mo1", text: "It guarantees the market will not go down.", explanation: "Incorrect. No fund can stop the market from moving." },
            { id: "mo2", text: "It removes all taxes from your investments.", explanation: "Incorrect. MF returns are subject to Capital Gains tax." },
            { id: "mo3", text: "It spreads capital across many assets to reduce the impact of any single failure.", explanation: "Correct. This is the fundamental logic of diversification." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Price Discovery",
      badge: "L6: Value Logic",
      units: [
        {
          id: "m6u1",
          title: "How Information Becomes Price",
          durationMins: 30,
          whyThisMatters: "Understanding that price is a 'collective opinion' helps you ignore daily noise.",
          content: "Stock prices don't move randomly; they move based on information. When new information (like an earnings report or a government policy) arrives, thousands of participants adjust their 'buy' or 'sell' orders. This process is called Price Discovery. Logic: The price is the current equilibrium between supply and demand. However, Price is what you pay; Value is what you get. Markets are often 'efficient' in the long run but 'irrational' in the short run.",
          actionableNextStep: "Observe a stock price after a major news event (like a budget or earnings) to see how quickly the 'equilibrium' shifts."
        }
      ],
      quiz: [
        {
          id: "mq6_1",
          question: "If everyone suddenly wants to buy a specific stock but no one wants to sell it, what logically happens to the price?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "The price stays the same to be fair to everyone.", explanation: "Incorrect. Markets are driven by supply and demand, not static fairness." },
            { id: "mo2", text: "The price rises until a seller is willing to enter the transaction.", explanation: "Correct. Higher demand relative to supply forces the price upward." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Risk vs. Volatility",
      badge: "L7: Temporal Logic",
      units: [
        {
          id: "m7u1",
          title: "The Bouncy Road to Growth",
          durationMins: 35,
          whyThisMatters: "Treating volatility as risk leads to 'Panic Selling' at the wrong time.",
          content: "Volatility is the temporary movement of price. It is a feature, not a bug. Risk is the permanent loss of capital. Logic: If you own a house and its market value drops 5% today, you don't 'lose' money unless you sell. In markets, daily ripples are volatility. Risk only materializes if the underlying company goes bankrupt or you sell a quality asset during a temporary dip. Your 'Time Horizon' is your best defense against volatility.",
          actionableNextStep: "Draw a wavy line moving upward. Mark the waves as 'Volatility' and the starting vs. ending point as 'Growth'."
        }
      ],
      quiz: [
        {
          id: "mq7_1",
          question: "You buy a quality business. The market crashes 10% next week due to a global event unrelated to your business. What has occurred?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "Market Volatility.", explanation: "Correct. This is a temporary price fluctuation, not necessarily a fundamental failure." },
            { id: "mo2", text: "Permanent Risk Realization.", explanation: "Incorrect. Risk is only 'realized' if you sell or if the business itself is destroyed." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Behavioral Biases",
      badge: "L8: Psychological Logic",
      units: [
        {
          id: "m8u1",
          title: "The Indian Retail Traps",
          durationMins: 30,
          whyThisMatters: "Logic is often hijacked by biological survival instincts.",
          content: "Common Indian Biases:\n• Herd Mentality: Buying 'hot' stocks because everyone in your circle is.\n• Recency Bias: Assuming that because the market went up yesterday, it will go up today.\n• Loss Aversion: The pain of losing ₹1000 is felt twice as intensely as the joy of gaining ₹1000, leading to poor 'Hold vs Sell' decisions.\n\nLogic says: Discipline beats intelligence. A structured plan is your shield against these evolutionary traps.",
          actionableNextStep: "Write down your 'Exit Logic' for an investment BEFORE you buy it, while you are calm."
        }
      ],
      quiz: [
        {
          id: "mq8_1",
          question: "Why do people often buy at market peaks and sell at market bottoms?",
          correctOptionId: "mo1",
          options: [
            { id: "mo1", text: "Herd Mentality and emotional reaction to volatility.", explanation: "Correct. Evolution pushes us to follow the crowd (Safety) and flee from pain (Loss Aversion)." },
            { id: "mo2", text: "Because they have a mathematical plan to do so.", explanation: "Incorrect. Most retail participants abandon their plan when emotions run high." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "The Simulator Limit",
      badge: "L9: Structural Logic",
      units: [
        {
          id: "m9u1",
          title: "Linear Models vs. Random Reality",
          durationMins: 30,
          whyThisMatters: "Simulators provide awareness, not prophecies.",
          content: "Mathematical simulators (like SIP or Tax calculators) are 'Linear'. They assume a constant rate of 12% or a fixed tax law. Reality is 'Non-Linear'. Real markets have 'Black Swans'—unpredictable events with extreme impact. Logic: Use simulators to understand direction and scale, but never assume the decimal point in a 20-year projection is a guaranteed outcome. Diversification is your hedge against the 'Linearity Myth'.",
          actionableNextStep: "Run a SIP simulator with 8%, 10%, and 12% to see how sensitive the terminal value is to small changes."
        }
      ],
      quiz: [
        {
          id: "mq9_1",
          question: "What is the primary limitation of a mathematical SIP growth illustrator?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "It cannot handle large numbers.", explanation: "Incorrect. Calculators excel at large numbers." },
            { id: "mo2", text: "It assumes a constant rate, whereas real markets fluctuate randomly.", explanation: "Correct. Real outcomes are rarely as smooth or predictable as the linear model suggests." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Maturity & Professionalism",
      badge: "L10: Participation Logic",
      units: [
        {
          id: "m10u1",
          title: "Moving from Learning to Engagement",
          durationMins: 25,
          whyThisMatters: "Education ends here; personalized planning begins with experts.",
          content: "You have completed the conceptual framework. Logic dictates that while general knowledge is power, personalized execution requires specific facts. Responsible participation means:\n1. Knowing your 'Risk Capacity' (how much loss your goals can take).\n2. Consulting SEBI-Registered Investment Advisors (RIA) for planning.\n3. Using the directory to find vetted professionals for execution.\n\nEducational awareness is the foundation of the dignity of informed action.",
          actionableNextStep: "Prepare a list of three conceptual questions to ask a financial professional during a consultation."
        }
      ],
      quiz: [
        {
          id: "mq10_1",
          question: "What is the most responsible next step after completing this educational track?",
          correctOptionId: "mo2",
          options: [
            { id: "mo1", text: "Immediately invest all savings into the highest performing stock of last year.", explanation: "Incorrect. This ignores all behavioral and risk logic learned." },
            { id: "mo2", text: "Align your new understanding with your specific life goals and seek professional advice.", explanation: "Correct. Knowledge plus personalized expert guidance leads to resilient action." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["SEBI Act 1992", "SEBI (Investment Advisers) Regulations, 2013"],
    lastReviewedDate: "2024-12-10"
  },
  seo: {
    metaTitle: "Market & Investing Basics India | Monitize Learning",
    metaDescription: "Master the logical foundations of the Indian stock market. Learn about SEBI, asset classes, risk vs volatility, and behavioral biases."
  }
};
