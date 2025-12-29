
import { LearningModule } from '../types';

export const creditScoringLogicModule: LearningModule = {
  id: "credit-scoring-logic",
  title: "Credit & Scoring Logic",
  category: "Personal",
  shortDescription: "Understand how credit scores are created, influenced, damaged, and recovered—without myths, fear, or loan-selling bias.",
  detailedDescription: "A systematic deconstruction of the credit reporting ecosystem in India. This module builds technical literacy around credit bureau algorithms, the logical impact of borrowing behavior, and the temporal nature of score recovery. Educational awareness only. This module does not provide financial, lending, or credit advice.",
  learningObjectives: [
    "Identify the structural role of the four RBI-licensed credit bureaus in India",
    "Understand the logical difference between a credit report and a numerical score",
    "Grasp the high weightage of payment behavior in scoring algorithms",
    "Recognize the impact of credit utilization ratios on short-term volatility",
    "Understand the distinction between 'Hard' and 'Soft' enquiries",
    "Identify the long-term conceptual impact of settlements vs. closures",
    "Distinguish between credit eligibility and the numerical credit score",
    "Understand the time-based nature of 'Score Healing' and data cycles",
    "Identify common Indian credit myths through evidence-based logic",
    "Build a behavioral framework for maintaining a resilient credit profile"
  ],
  estimatedEffort: "Deep",
  iconName: "TrendingUp",
  levels: [
    {
      id: 1,
      title: "The Digital Reputation",
      badge: "L1: Foundation",
      units: [
        {
          id: "cs-1-u1",
          title: "What a Score Actually Is",
          durationMins: 20,
          whyThisMatters: "Thinking of a score as a 'grade' leads to unnecessary emotional stress.",
          content: "Logically, a credit score is a numerical snapshot of your reliability as a borrower. It is a predictive model used by the system to estimate the likelihood of a person missing a payment in the next 12-24 months. It is not a measure of your wealth, your character, or your social standing. It is purely a data-driven reputation metric built on historical borrowing patterns.",
          actionableNextStep: "Reflect on how your electricity bill or rent payment behavior might conceptually mirror credit trust."
        }
      ],
      quiz: [
        {
          id: "cs-1-q1",
          question: "What is the primary conceptual purpose of a credit score?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To show how much money you have in the bank.", explanation: "Incorrect. Bureaus do not have access to your bank balance, only your debt history." },
            { id: "opt2", text: "To predict the statistical probability of future payment defaults.", explanation: "Correct. It is a predictive model based on past behavior." },
            { id: "opt3", text: "To give you a rank among your friends.", explanation: "Incorrect. It is an individual metric between you and the credit system." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Your credit score depends on your salary.", fact: "Your score only tracks debt repayment behavior. A high-salary individual with late payments will have a lower score than a low-salary individual with perfect discipline." }]
    },
    {
      id: 2,
      title: "The Indian Bureaus",
      badge: "L2: Ecosystem",
      units: [
        {
          id: "cs-2-u1",
          title: "The Four Guardians",
          durationMins: 25,
          whyThisMatters: "Differences in scores across providers often cause confusion.",
          content: "India has four major credit bureaus licensed by the RBI: CIBIL, Experian, Equifax, and CRIF High Mark. While they all receive similar data from banks, each uses its own proprietary mathematical algorithm. Logically, this means your score will likely vary slightly between bureaus. CIBIL is historically the most widely referenced by Indian public sector banks, but all four carry legal weight.",
          actionableNextStep: "Find the official website of at least two Indian credit bureaus."
        }
      ],
      quiz: [
        {
          id: "cs-2-q1",
          question: "Why might your score be 780 with one bureau and 765 with another?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "One bureau has made a mistake.", explanation: "Not necessarily. Mistakes exist, but variations are usually algorithmic." },
            { id: "opt2", text: "One bank forgot to report to one of them.", explanation: "Banks usually report to all bureaus, though timing lags can occur." },
            { id: "opt3", text: "Each bureau uses a slightly different proprietary scoring algorithm.", explanation: "Correct. The 'math' used to interpret your data varies by provider." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Report vs Score",
      badge: "L3: Data Structure",
      units: [
        {
          id: "cs-3-u1",
          title: "The Narrative vs the Number",
          durationMins: 20,
          whyThisMatters: "Focusing only on the number ignores the data that creates it.",
          content: "The Credit Report is the 'Evidence'; the Credit Score is the 'Conclusion'. The report lists every loan, credit card, enquiry, and repayment date for several years. If the score is low, the report contains the reason (e.g., a late payment in 2022). Logically, you cannot 'fix' the score without first identifying the data point in the report that is causing the drop.",
          actionableNextStep: "Conceptually map a typical report section: Personal Info, Account Info, and Enquiries."
        }
      ],
      quiz: [
        {
          id: "cs-3-q1",
          question: "Which of these is the most accurate logical relationship?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The report provides the raw facts, and the score interprets them.", explanation: "Correct. The score is an output of the data found in the report." },
            { id: "opt2", text: "The score is more important than the report.", explanation: "Incorrect. A lender looks at the details in the report to make final decisions." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Payment Logic",
      badge: "L4: The 35% Factor",
      units: [
        {
          id: "cs-4-u1",
          title: "The Weight of Time",
          durationMins: 30,
          whyThisMatters: "Even a single day's delay is recorded in the 'Days Past Due' (DPD) column.",
          content: "Payment history is the single largest factor (approx. 35%) in your score. Logic: If you pay on time, you are reliable. If you are even 1 day late, it is recorded as 'DPD: 001'. While one minor delay won't destroy a score permanently, a pattern of delays signals high risk. Automated payments (e-mandates) are the logical shield against forgetfulness-driven score damage.",
          actionableNextStep: "Check if your existing EMIs are linked to automated bank mandates."
        }
      ],
      quiz: [
        {
          id: "cs-4-q1",
          question: "What does 'DPD 030' in a credit report logically signify?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The account has been closed for 30 days.", explanation: "Incorrect. Closures are marked separately." },
            { id: "opt2", text: "A payment was delayed by 30 days past the due date.", explanation: "Correct. DPD stands for Days Past Due." },
            { id: "opt3", text: "The loan is for a period of 30 months.", explanation: "Incorrect. DPD is a performance metric, not a tenure metric." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Utilisation Logic",
      badge: "L5: The 30% Rule",
      units: [
        {
          id: "cs-5-u1",
          title: "Bandwidth vs Usage",
          durationMins: 25,
          whyThisMatters: "High usage looks like 'Credit Hunger' even if you pay in full.",
          content: "Credit Utilization Ratio (CUR) is the percentage of your available credit limit you are using. Logic: If you have a ₹1 Lakh limit and spend ₹90,000, you are at 90% CUR. Even if you pay it off perfectly, using nearly all your 'bandwidth' suggests financial dependency. Algorithms generally prefer a CUR below 30% for a healthy profile.",
          actionableNextStep: "Calculate your current credit card usage as a percentage of your total limits."
        }
      ],
      quiz: [
        {
          id: "cs-5-q1",
          question: "If you have a total limit of ₹2,00,000 across two cards and you spend ₹1,40,000, why might your score drop?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Because you spent too much money.", explanation: "Incorrect. Spending isn't the issue; the ratio is." },
            { id: "opt2", text: "Because you are breaking the law.", explanation: "Incorrect. There is no law against using your limit." },
            { id: "opt3", text: "Because your 70% utilization signals high dependency on debt.", explanation: "Correct. High CUR indicates a lack of 'buffer' in your finances." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "The Credit Mix",
      badge: "L6: Diversity Logic",
      units: [
        {
          id: "cs-6-u1",
          title: "Secured vs Unsecured balance",
          durationMins: 25,
          whyThisMatters: "Lenders look for a balanced appetite for different risk types.",
          content: "Logic: An Unsecured loan (Credit Card, Personal Loan) is 'pure promise'. A Secured loan (Home Loan, Car Loan) is backed by an asset. A profile with 10 active personal loans but zero secured assets looks 'unbalanced' to an algorithm. A healthy mix suggests the borrower can manage different types of obligations simultaneously.",
          actionableNextStep: "Identify how many of your active credit lines are 'Unsecured' vs 'Secured'."
        }
      ],
      quiz: [
        {
          id: "cs-6-q1",
          question: "Which credit mix is conceptually considered more 'balanced'?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "5 Credit Cards and 2 Personal Loans.", explanation: "Incorrect. This is entirely unsecured debt." },
            { id: "opt2", text: "1 Home Loan and 2 Credit Cards.", explanation: "Correct. This shows a mix of asset-backed and convenience-based credit." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Hard vs Soft Enquiries",
      badge: "L7: Inquiry Logic",
      units: [
        {
          id: "cs-7-u1",
          title: "The Cost of Asking",
          durationMins: 20,
          whyThisMatters: "Every time a lender pulls your report, it leaves a footprint.",
          content: "1. Soft Enquiry: When you check your own score. Impact: ZERO. Logic: You are being self-aware. 2. Hard Enquiry: When you apply for a loan and the bank checks your score. Impact: Small temporary drop. Logic: Frequent hard enquiries in a short time suggest 'Credit Desperation' or that you are being rejected elsewhere.",
          actionableNextStep: "Count how many times you have applied for a new card or loan in the last 6 months."
        }
      ],
      quiz: [
        {
          id: "cs-7-q1",
          question: "Does checking your own credit score on a portal reduce it?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, by about 5-10 points.", explanation: "Incorrect. This is a common myth." },
            { id: "opt2", text: "No, it is a 'Soft Enquiry' with zero impact.", explanation: "Correct. Self-monitoring is encouraged and does not damage the score." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "The Settlement Trap",
      badge: "L8: Account Status",
      units: [
        {
          id: "cs-8-u1",
          title: "Closed vs Settled",
          durationMins: 30,
          whyThisMatters: "Settlements stay on the report for 7 years as a negative signal.",
          content: "Logic: 'Closed/Paid' means you fulfilled the contract. 'Settled' means the bank agreed to accept LESS than the full amount because you couldn't pay. While 'Settled' stops the calls from recovery agents, it tells future lenders that you are someone who cannot fulfill a 100% commitment. Conceptually, a settlement is an admission of failure to repay as per terms.",
          actionableNextStep: "If negotiating a dispute, prioritize a 'Paid in Full' status over a 'Settlement' offer."
        }
      ],
      quiz: [
        {
          id: "cs-8-q1",
          question: "What is the logical difference between 'Paid' and 'Settled'?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "'Paid' means 100% return; 'Settled' means the lender took a loss.", explanation: "Correct. Lenders view settlements as a sign of past financial distress." },
            { id: "opt2", text: "There is no difference; both mean the debt is gone.", explanation: "Incorrect. The numerical status is gone, but the 'reputation note' is very different." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Score Healing",
      badge: "L9: Time Logic",
      units: [
        {
          id: "cs-9-u1",
          title: "The 36-Month Recovery",
          durationMins: 25,
          whyThisMatters: "Damage is instant, but recovery is a slow data-cycle.",
          content: "Credit bureaus give more weight to recent data. A default from 5 years ago matters less than a default from last month. Logic: You cannot 'delete' a bad history, you can only 'out-discipline' it. By maintaining perfect behavior for 24-36 months, the impact of old errors diminishes naturally. There are no 'fast tricks'—only time and consistency.",
          actionableNextStep: "Identify the date of your last missed payment (if any) to calculate your 'healing window'."
        }
      ],
      quiz: [
        {
          id: "cs-9-q1",
          question: "Can a professional service 'remove' a legitimate late payment from your history?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, for a specific fee to the bureau.", explanation: "Incorrect. This is often a scam; legitimate data cannot be deleted." },
            { id: "opt2", text: "No, only errors can be corrected; real behavior must be out-dispatched by time.", explanation: "Correct. Genuine negative data only fades as newer positive data accumulates." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "The One-Miss Panic",
      badge: "L10: Psychological Shield",
      units: [
        {
          id: "cs-10-u1",
          title: "Proportionality and Perspective",
          durationMins: 20,
          whyThisMatters: "Anxiety leads to erratic financial behavior.",
          content: "Myth: 'Missing one credit card payment by 2 days will make it impossible for me to ever get a home loan.' Reality: A minor glitch in a 10-year perfect history is a statistical outlier. Lenders look for 'Patterns'. If your pattern is 99% on-time, a single human error is logically dismissed as noise. Don't panic; just ensure it doesn't become a second miss.",
          actionableNextStep: "Review your credit report for 'Patterns' of behavior rather than single events."
        }
      ],
      quiz: [
        {
          id: "cs-10-q1",
          question: "What do lenders logically look for in a credit report?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "One single mistake to reject you immediately.", explanation: "Incorrect. Banking is about risk assessment, not perfectionism." },
            { id: "opt2", text: "A consistent pattern of responsible behavior over time.", explanation: "Correct. Lenders want to see a reliable 'track record'." }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "How Lenders Read You",
      badge: "L11: Decision Logic",
      units: [
        {
          id: "cs-11-u1",
          title: "Score vs Eligibility",
          durationMins: 25,
          whyThisMatters: "A 900 score doesn't guarantee a loan if your income is zero.",
          content: "Logic: The Credit Score is only one pillar of 'Eligibility'. Lenders also look at your FOIR (Fixed Obligation to Income Ratio). If you earn ₹50,000 and have EMIs of ₹40,000, your score could be perfect (850), but your capacity to pay a new loan is zero. Literacy means understanding that the score is your 'ID', but your cash flow is your 'Strength'.",
          actionableNextStep: "Calculate your FOIR (Total EMIs divided by Net Salary)."
        }
      ],
      quiz: [
        {
          id: "cs-11-q1",
          question: "Why might someone with a high credit score still get rejected for a loan?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Their existing income cannot support additional EMIs.", explanation: "Correct. Capacity (Income) is as critical as character (Score)." },
            { id: "opt2", text: "The lender doesn't like their score portal.", explanation: "Incorrect. Lenders use official bureau data." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "The Healthy Framework",
      badge: "L12: Maturity",
      units: [
        {
          id: "cs-12-u1",
          title: "The Literacy Pledge",
          durationMins: 15,
          whyThisMatters: "Mastery is applying logic consistently over a lifetime.",
          content: "Healthy Credit Framework:\n1. 100% On-Time: Use automation for everything.\n2. Low CUR: Treat credit limits as 'Safety nets', not 'Spending caps'.\n3. Strategic Mix: Add secured debt only when it builds an asset.\n4. Patience: Understand that healing takes 24+ months.\n5. Privacy: Never share OTPs or login credentials for score checks.\n\nEducational awareness only. This module does not provide financial, lending, or credit advice.",
          actionableNextStep: "Set a calendar reminder to check your official credit report once every 12 months."
        }
      ],
      quiz: [
        {
          id: "cs-12-q1",
          question: "What is the most sustainable way to maintain a high credit reputation?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Opening many new accounts to increase your total limit.", explanation: "Incorrect. This can signal desperation." },
            { id: "opt2", text: "Consistent, automated on-time payments and low utilization.", explanation: "Correct. This is the logical core of credit maturity." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Credit Information Companies (Regulation) Act, 2005", "RBI Master Circular on Credit Information Reporting"],
    lastReviewedDate: "2024-12-20"
  },
  seo: {
    metaTitle: "Credit & Scoring Logic India | Monitize Learning",
    metaDescription: "Master the mechanics of Indian credit bureaus (CIBIL, Experian) and learn how behavior influences your score without product bias."
  }
};
