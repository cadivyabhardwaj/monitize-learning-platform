
import { LearningModule } from '../types';

export const bankingAwarenessModule: LearningModule = {
  id: "banking-credit-awareness",
  title: "Banking & Credit Awareness",
  category: "Personal",
  shortDescription: "Understand the logic of the Indian banking system, accounts, money movement, and responsible credit behavior.",
  detailedDescription: "This module provides a strictly educational roadmap for navigating the Indian banking landscape. Learn the structural purpose of financial institutions, the mechanics of digital payments, and the logical pillars of credit without product bias.",
  learningObjectives: [
    "Understand how banks function as intermediaries in India",
    "Distinguish between savings, current, and fixed accounts conceptually",
    "Recognize the mechanics of digital money movement (UPI, NEFT, RTGS)",
    "Understand the fundamental definition of credit as a liability",
    "Recognize how loans and EMIs function at a structural level",
    "Identify the logic of credit card billing cycles and interest triggers",
    "Recognize behavioral factors that influence credit scores (CIBIL logic)",
    "Identify safe banking practices and formal grievance escalation channels"
  ],
  estimatedEffort: "Deep",
  iconName: "Landmark",
  levels: [
    {
      id: 1,
      title: "What Is a Bank?",
      badge: "Level 1: Foundational Purpose",
      units: [
        {
          id: "b1u1",
          title: "The Intermediary Logic",
          durationMins: 20,
          whyThisMatters: "Knowing the purpose of banks helps you understand their risk and utility.",
          content: "In India, banks are financial intermediaries regulated by the Reserve Bank of India (RBI). Logic dictates that a bank's primary role is to bridge the gap between people with surplus capital (Depositors) and those who need capital for productive use (Borrowers).\n\n• Public Sector Banks: Majority owned by the Government of India.\n• Private Sector Banks: Owned by private shareholders/entities.\n• RBI Oversight: The RBI acts as the 'banker's bank', ensuring systemic stability and consumer protection.",
          actionableNextStep: "Identify whether your primary bank is categorized as a Public or Private sector institution."
        }
      ],
      quiz: [
        {
          id: "q1",
          question: "Scenario: A small business owner needs a loan to expand, while a salaried professional wants to save for retirement. How does the bank facilitate this?",
          correctOptionId: "o2",
          options: [
            { id: "o1", text: "By giving the professional's money directly to the owner without records.", explanation: "Incorrect. Banks operate through a ledger-based system of deposits and assets." },
            { id: "o2", text: "By acting as a bridge that pools deposits and lends them out responsibly.", explanation: "Correct. This is the core logical function of an intermediary." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Banks are just digital vaults to store money.", fact: "Banks are active economic engines that deploy capital to facilitate growth." }]
    },
    {
      id: 2,
      title: "Bank Accounts Explained",
      badge: "Level 2: Structural Containers",
      units: [
        {
          id: "b2u1",
          title: "Savings, Current, and Fixed Logic",
          durationMins: 20,
          whyThisMatters: "Using the wrong account leads to lost yield or unnecessary fees.",
          content: "Bank accounts are 'logical containers' for your money, each with a specific design:\n\n• Savings Account: Designed for individuals to store surplus cash with high liquidity and basic interest.\n• Current Account: Designed for businesses with high transaction volumes; usually offers zero interest but unlimited transactions.\n• Fixed Deposit (FD): A contract where you lock money for a specific period for higher interest. The logic is: the longer you leave the money, the more the bank compensates you for your 'time-commitment'.",
          actionableNextStep: "Review your last three months of bank statements to check if your account type matches your transaction volume."
        }
      ],
      quiz: [
        {
          id: "q2",
          question: "Scenario: A freelancer starts getting 50 payments a month. Why might they conceptually move from a Savings to a Current account?",
          correctOptionId: "o1",
          options: [
            { id: "o1", text: "Because Current accounts are designed for high-frequency business volume.", explanation: "Correct. Savings accounts are for individual surpluses, not commercial churn." },
            { id: "o2", text: "To earn more interest on their daily balance.", explanation: "Incorrect. Current accounts usually offer zero interest." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Fixed Deposits are always the best way to save.", fact: "FDs offer certainty but lack immediate liquidity for emergencies." }]
    },
    {
      id: 3,
      title: "How Money Moves",
      badge: "Level 3: Digital Plumbing",
      units: [
        {
          id: "b3u1",
          title: "The Logic of UPI, NEFT, and RTGS",
          durationMins: 25,
          whyThisMatters: "Understanding transfer methods prevents errors and payment delays.",
          content: "In the Indian digital ecosystem, money moves through different 'rails':\n\n• UPI (Unified Payments Interface): Instant, mobile-first, 24/7. Logic: Optimized for small, frequent payments.\n• NEFT (National Electronic Funds Transfer): Batch-processed. Logic: Secure for medium-sized amounts where instant clearance isn't critical.\n• RTGS (Real-Time Gross Settlement): Individual processing. Logic: Reserved for high-value transactions (above ₹2 Lakhs) where speed and finality are paramount.\n\nDigital vs Physical: Digital moves data; physical moves paper (Cheques/Cash). Logic dictates that digital is more auditable and efficient.",
          actionableNextStep: "Identify the daily transaction limit set by your bank for UPI payments."
        }
      ],
      quiz: [
        {
          id: "q3",
          question: "Scenario: You need to send ₹5 Lakhs for a property downpayment instantly. Which rail is conceptually designed for this high-value transfer?",
          correctOptionId: "o2",
          options: [
            { id: "o1", text: "UPI", explanation: "Incorrect. UPI has daily limits usually well below ₹5 Lakhs." },
            { id: "o2", text: "RTGS", explanation: "Correct. RTGS is the 'high-value' real-time settlement rail in India." }
          ]
        }
      ],
      mythVsFact: [{ myth: "You need a PIN to receive money on UPI.", fact: "CRITICAL: You only need a PIN to SEND money. Any request to enter a PIN to receive is a fraud attempt." }]
    },
    {
      id: 4,
      title: "Credit: Meaning & Purpose",
      badge: "Level 4: Borrowing from the Future",
      units: [
        {
          id: "b4u1",
          title: "The Concept of Leverage",
          durationMins: 15,
          whyThisMatters: "Viewing credit as income is the primary cause of financial ruin.",
          content: "Logic: Credit is the ability to spend 'Future Income' today. It is a liability, not an asset. \n\n• Why Banks Lend: They trust your future earning capacity.\n• Credit vs Income: Income is money you earned; Credit is money you owe.\n• Short-term vs Long-term: Short-term credit (like Credit Cards) handles cash flow gaps; Long-term credit (like Home Loans) builds assets.",
          actionableNextStep: "Reflect on any debt you currently have: Is it funding an asset or consumption?"
        }
      ],
      quiz: [
        {
          id: "q4",
          question: "What is the structural difference between 'Income' and 'Credit'?",
          correctOptionId: "o1",
          options: [
            { id: "o1", text: "Income is earned wealth; Credit is borrowed future earnings.", explanation: "Correct. Credit creates a mandatory obligation to pay back from future labor." },
            { id: "o2", text: "Credit is a gift from the bank for being a loyal customer.", explanation: "Incorrect. Credit is a commercial contract involving interest and repayment." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Credit is 'extra money'.", fact: "Credit is a 'time-shift' of your future money with an added cost (interest)." }]
    },
    {
      id: 5,
      title: "Loans (Awareness)",
      badge: "Level 5: Secured vs Unsecured",
      units: [
        {
          id: "b5u1",
          title: "Understanding EMI Mechanics",
          durationMins: 20,
          whyThisMatters: "Understanding loan structure helps you choose the right tool for a specific goal.",
          content: "Loans in India are logically split into two categories:\n\n• Secured Loans: Backed by collateral (Home, Car, Gold). If you default, the bank takes the asset. Logic: Lower risk for the bank, lower cost for you.\n• Unsecured Loans: Based solely on your promise (Personal, Education). Logic: Higher risk for the bank, higher cost for you.\n\nEquated Monthly Installment (EMI): A fixed payment that covers both the interest and a portion of the principal. In the early stages of a loan, most of the EMI goes toward interest.",
          actionableNextStep: "Check if your existing loans are 'Secured' or 'Unsecured' and note the difference in their conceptual costs."
        }
      ],
      quiz: [
        {
          id: "q5",
          question: "Scenario: Why is the cost (interest) of a Personal Loan usually higher than a Home Loan?",
          correctOptionId: "o1",
          options: [
            { id: "o1", text: "Because there is no physical asset (collateral) for the bank to recover in case of default.", explanation: "Correct. Higher lender risk logically results in higher borrower cost." },
            { id: "o2", text: "Because banks want to discourage people from taking personal loans.", explanation: "Incorrect. The logic is based on risk-adjusted pricing of capital." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Zero-cost EMIs mean the product is free.", fact: "Zero-cost EMIs often involve processing fees or the 'interest' is pre-built into the product price." }]
    },
    {
      id: 6,
      title: "Credit Cards Explained",
      badge: "Level 6: The Revolving Cycle",
      units: [
        {
          id: "b6u1",
          title: "Billing Cycles & Interest Triggers",
          durationMins: 25,
          whyThisMatters: "Credit cards are the most powerful and most dangerous financial tools.",
          content: "A credit card is a 'revolving' loan with a grace period. \n\n• Billing Cycle: The 30-day period where your spends are totaled.\n• Grace Period: The 15-20 days after the bill is generated to pay without interest.\n• The 'Minimum Due' Trap: Paying only the minimum prevents 'default' status but triggers compound interest on the entire remaining balance immediately. \n\nLogic: Credit cards should be used for convenience (moving money), not for funding a lifestyle you haven't earned yet.",
          actionableNextStep: "Locate your last credit card statement and identify the 'Total Amount Due' vs 'Minimum Amount Due' dates."
        }
      ],
      quiz: [
        {
          id: "b6q6",
          question: "Scenario: You spend ₹10,000 on a card. You pay only the ₹500 'Minimum Due'. What is the logical consequence?",
          correctOptionId: "o2",
          options: [
            { id: "o1", text: "The bank waives the interest because you made a partial payment.", explanation: "Incorrect. Banks charge interest on the full remaining balance immediately." },
            { id: "o2", text: "High-interest debt begins to compound on the remaining ₹9,500.", explanation: "Correct. This is the start of a potential debt trap." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Credit cards are 'bad'.", fact: "Credit cards are neutral tools; the outcome depends entirely on your repayment discipline." }]
    },
    {
      id: 7,
      title: "Credit Score Awareness",
      badge: "Level 7: Your Financial Shadow",
      units: [
        {
          id: "b7u1",
          title: "CIBIL Logic & Behavioral Tracking",
          durationMins: 20,
          whyThisMatters: "Your credit history determines your future 'cost of capital'.",
          content: "In India, Credit Bureaus (like CIBIL) keep a record of your borrowing behavior. Your score (300-900) is a reflection of your discipline.\n\n• Payment History: Did you pay on time? (Most important factor).\n• Credit Utilization: How much of your available limit are you using? Logic: Using 100% suggests high dependency/risk.\n• Credit Mix: A balance of secured and unsecured credit suggests maturity.\n\nLogic: A high score proves to the system that you are a reliable participant.",
          actionableNextStep: "Check your credit score once a year to ensure no errors are being reported against your PAN."
        }
      ],
      quiz: [
        {
          id: "q7",
          question: "Which behavior conceptually helps maintain a high credit score?",
          correctOptionId: "o1",
          options: [
            { id: "o1", text: "Consistent, on-time repayment of all dues.", explanation: "Correct. Reliability is the primary signal banks look for." },
            { id: "o2", text: "Closing all your bank accounts and only using cash.", explanation: "Incorrect. Having zero credit history makes it difficult for banks to assess your risk later." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Checking your own score reduces it.", fact: "Checking your own score (Soft Inquiry) does not affect it. Only lender-initiated checks (Hard Inquiry) can have an impact." }]
    },
    {
      id: 8,
      title: "Safe & Responsible Banking",
      badge: "Level 8: Defensive Hygiene",
      units: [
        {
          id: "b8u1",
          title: "Fraud Awareness & Grievances",
          durationMins: 20,
          whyThisMatters: "Security is your responsibility in a digital world.",
          content: "Banking hygiene is non-negotiable:\n\n• OTP/PIN Discipline: Banks NEVER ask for these. Sharing them is giving away the key to your vault.\n• Grievance Channels: If a bank fails to resolve a complaint, you have the right to escalate to the RBI Banking Ombudsman.\n• Social Engineering: Be wary of calls creating 'urgency' (e.g. 'Account will be blocked'). Logic: Real banks use official channels and provide time for compliance.",
          actionableNextStep: "Find and save the 'National Cyber Crime Helpline' number (1930) in your phone."
        }
      ],
      quiz: [
        {
          id: "q8",
          question: "Scenario: A caller claiming to be from the RBI asks for your OTP to verify your Aadhaar linkage. What is the logical red flag?",
          correctOptionId: "o1",
          options: [
            { id: "o1", text: "Regulators and banks never ask for sensitive credentials like OTPs over calls.", explanation: "Correct. This is a foundational rule of banking security." },
            { id: "o2", text: "The RBI only calls on weekends.", explanation: "Incorrect. The red flag is the request for the credential itself, regardless of the timing." }
          ]
        }
      ],
      mythVsFact: [{ myth: "If I lose money to a scam, the bank will always pay it back.", fact: "Reimbursement often depends on how quickly you report the fraud and whether you shared your credentials voluntarily." }]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Banking Regulation Act 1949", "RBI Consumer Protection Framework"],
    lastReviewedDate: "2024-11-25"
  },
  seo: {
    metaTitle: "Banking & Credit Awareness India | Monitize Learning",
    metaDescription: "Master the mechanics of Indian banking, accounts, digital payments, and credit scores in this 8-level educational track."
  }
};
