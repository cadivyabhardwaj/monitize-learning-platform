
import { LearningModule } from '../types';

export const businessMsmeLogicModule: LearningModule = {
  id: "business-msme-logic",
  title: "Business & MSME Logic",
  category: "Business",
  shortDescription: "Understand how Indian small businesses operate, earn, comply, and survive—without legal or tax advice.",
  detailedDescription: "A strategic journey through the life cycle of an Indian business entity. This module deconstructs the logical transition from individual freelancing to structured corporate governance, explaining the 'Why' behind GST, TDS, and statutory audits.",
  learningObjectives: [
    "Understand the logical transition from hobby to commercial entity",
    "Identify the structural differences between common Indian entity types",
    "Grasp the conceptual flow of business revenue vs. taxable profit",
    "Recognize the 'Pass-Through' logic of GST and Input Tax Credit",
    "Understand why the government mandates withholding (TDS) on payments",
    "Identify the working capital cycle logic in an Indian MSME",
    "Recognize the purpose of statutory audits and internal governance",
    "Identify regulatory red flags that trigger tax scrutiny",
    "Understand the logic of business banking and credit requirements",
    "Grasp the concept of business maturity and succession logic"
  ],
  estimatedEffort: "Deep",
  iconName: "Briefcase",
  levels: [
    {
      id: 1,
      title: "The Entrepreneurial Logic",
      badge: "L1: Identity Shift",
      units: [
        {
          id: "b1u1",
          title: "Hobby vs. Commercial Business",
          durationMins: 30,
          whyThisMatters: "Mixing personal and business logic leads to administrative failure.",
          content: "In India, the line between a personal hobby and a business is defined by regularity and profit intent. Once you move from a one-off sale to a systematic operation, the Income Tax Act views you as a 'Business or Profession'. The primary logical shift is viewing yourself as an agent of the entity, not the entity itself.",
          actionableNextStep: "Review your last three months of bank statements to identify recurring commercial inflows."
        }
      ],
      quiz: [
        {
          id: "q1_1",
          question: "What is the primary factor that logically turns an activity into a 'Business' for tax awareness?",
          correctOptionId: "opt1b",
          options: [
            { id: "opt1a", text: "Earning more than ₹10 Lakhs.", explanation: "Incorrect. Scale matters for registration, but 'Business' status is defined by intent and regularity." },
            { id: "opt1b", text: "Regularity of transactions with an intent to earn profit.", explanation: "Correct. Systematic operation defines the business logic regardless of initial scale." },
            { id: "opt1c", text: "Having a fancy office space.", explanation: "Incorrect. A business is defined by its economic activity, not its physical assets." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Entity Spectrum",
      badge: "L2: Structural Choice",
      units: [
        {
          id: "b2u1",
          title: "Liability and Legal Identity",
          durationMins: 35,
          whyThisMatters: "Your choice of entity determines your compliance floor and ceiling.",
          content: "Indian law provides a range of containers for your business logic:\n\n• Sole Proprietorship: No separation between owner and entity. High speed, low cost, unlimited liability.\n• Partnership / LLP: Shared logic with limited liability for partners in the LLP version.\n• Pvt Ltd Company: Absolute separation. High trust and scalability, but high compliance overhead (Audits, Board Meetings).",
          actionableNextStep: "Reflect on whether your current business scale justifies the audit costs of a Private Limited structure."
        }
      ],
      quiz: [
        {
          id: "q2_1",
          question: "Which entity structure offers the lowest administrative cost but the highest personal risk?",
          correctOptionId: "opt2a",
          options: [
            { id: "opt2a", text: "Sole Proprietorship", explanation: "Correct. It is easy to start but ties business debt directly to personal assets." },
            { id: "opt2b", text: "Private Limited Company", explanation: "Incorrect. This has limited liability but very high administrative costs." },
            { id: "opt2c", text: "LLP", explanation: "Incorrect. LLP offers a balance of limited liability and moderate costs." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Revenue vs. Profit Math",
      badge: "L3: Economic Reality",
      units: [
        {
          id: "b3u1",
          title: "The Deductibility Logic",
          durationMins: 30,
          whyThisMatters: "Taxes are paid on profit, but businesses often spend on revenue.",
          content: "Logic: Revenue (what you collect) minus Expenses (what you spend to earn) equals Profit. The Income Tax Act only recognizes 'business-related' expenses. Buying a personal laptop on a business account is a common logical error that triggers scrutiny. Real profit is what remains after statutory dues are provisioned.",
          actionableNextStep: "Draft a list of your top 5 monthly expenses and tag them as 'Directly Related to Revenue'."
        }
      ],
      quiz: [
        {
          id: "q3_1",
          question: "Scenario: A freelancer earns ₹1 Lakh but spends ₹80,000 on a personal vacation. What is their taxable business profit?",
          correctOptionId: "opt3c",
          options: [
            { id: "opt3a", text: "₹20,000", explanation: "Incorrect. Personal vacations are not business-deductible expenses." },
            { id: "opt3b", text: "₹0", explanation: "Incorrect. You cannot deduct personal expenses to reach zero profit." },
            { id: "opt3c", text: "₹1,0_0,000 (minus only actual business costs)", explanation: "Correct. Only expenses incurred wholly for the purpose of the profession are deductible." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "GST Foundations",
      badge: "L4: Consumption Tax",
      units: [
        {
          id: "b4u1",
          title: "The Pass-Through Logic",
          durationMins: 35,
          whyThisMatters: "Viewing GST as your money is the most dangerous MSME error.",
          content: "GST is a destination-based consumption tax. As a business owner, you are a collection agent for the Government. Input Tax Credit (ITC) is the logical core: it ensures you only pay tax on the 'Value Added' by your business, preventing a 'Tax on Tax' scenario.",
          actionableNextStep: "Examine a recent business purchase invoice to identify the GST component paid as Input."
        }
      ],
      quiz: [
        {
          id: "q4_1",
          question: "What is the logical purpose of 'Input Tax Credit'?",
          correctOptionId: "opt4b",
          options: [
            { id: "opt4a", text: "To give a discount to small businesses.", explanation: "Incorrect. ITC is a structural mechanism, not a subsidy." },
            { id: "opt4b", text: "To avoid the cascading effect of taxes on taxes.", explanation: "Correct. It ensures tax is only paid on the incremental value you create." },
            { id: "opt4c", text: "To increase the final price for the customer.", explanation: "Incorrect. ITC actually helps keep the final price lower by removing redundant tax layers." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "The TDS Mechanism",
      badge: "L5: Withholding Logic",
      units: [
        {
          id: "b5u1",
          title: "Government's Advance Collection",
          durationMins: 30,
          whyThisMatters: "TDS ensures revenue flow before the annual return.",
          content: "Tax Deducted at Source (TDS) is a mechanism where the payer (your client) deducts a portion of your fee and deposits it with the Govt against your PAN. Logically, this is your 'Advance Tax' already sitting in the Govt treasury. You 'claim' this credit when you file your final annual return.",
          actionableNextStep: "Check your Form 26AS on the e-filing portal to see if your clients have deposited your TDS."
        }
      ],
      quiz: [
        {
          id: "q5_1",
          question: "If a client deducts 10% TDS from your payment, what happens to that money?",
          correctOptionId: "opt5a",
          options: [
            { id: "opt5a", text: "It is deposited with the Govt as a credit against your PAN.", explanation: "Correct. It is your money, prepaid to the tax department on your behalf." },
            { id: "opt5b", text: "It is a processing fee kept by the client.", explanation: "Incorrect. Withholding for personal gain is illegal; it must be deposited." },
            { id: "opt5c", text: "It is lost forever.", explanation: "Incorrect. You can adjust it against your final tax liability." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Working Capital Cycle",
      badge: "L6: Cash Flow Logic",
      units: [
        {
          id: "b6u1",
          title: "The Survival Timeline",
          durationMins: 30,
          whyThisMatters: "Profitable businesses go bankrupt due to poor cycles.",
          content: "Working capital logic: Cash moves to Inventory/Service, which moves to Invoices (Receivables), which eventually moves back to Cash. In India, long receivable cycles (60-90 days) are common. A business must have enough 'Dry Powder' to pay salaries and rent while waiting for clients to pay.",
          actionableNextStep: "Calculate the average number of days between you finishing a task and the cash hitting your account."
        }
      ],
      quiz: [
        {
          id: "q6_1",
          question: "Scenario: A company has ₹10 Lakhs in sales but ₹0 in the bank because clients haven't paid yet. What is this a failure of?",
          correctOptionId: "opt6b",
          options: [
            { id: "opt6a", text: "Sales Strategy", explanation: "Incorrect. Sales were made; the problem is the aftermath." },
            { id: "opt6b", text: "Working Capital Management", explanation: "Correct. The gap between delivery and collection must be funded." },
            { id: "opt6c", text: "Profitability", explanation: "Incorrect. You can be profitable on paper but cash-poor in reality." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Governance & Audits",
      badge: "L7: Statutory Verification",
      units: [
        {
          id: "b7u1",
          title: "The Purpose of Scrutiny",
          durationMins: 35,
          whyThisMatters: "Audits provide a high-trust signal to lenders and regulators.",
          content: "An 'Audit' is a logical check of your accounts by an independent professional (Chartered Accountant). Statutory audits are mandatory for companies. Tax audits are triggered by turnover thresholds. Logic dictates that clean audits lower your risk profile for bank loans and future investors.",
          actionableNextStep: "Identify which threshold (Turnover or Capital) would trigger an audit for your specific entity type."
        }
      ],
      quiz: [
        {
          id: "q7_1",
          question: "Why does the government mandate audits for large turnover businesses?",
          correctOptionId: "opt7c",
          options: [
            { id: "opt7a", text: "To make money for Chartered Accountants.", explanation: "Incorrect. While CAs perform audits, the intent is systemic integrity." },
            { id: "opt7b", text: "To delay the filing process.", explanation: "Incorrect. Audits have strict deadlines to ensure timely collection." },
            { id: "opt7c", text: "To ensure accuracy and transparency in reported financials.", explanation: "Correct. Audits provide independent verification of a business's claims." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Regulatory Red Flags",
      badge: "L8: Risk Awareness",
      units: [
        {
          id: "b8u1",
          title: "Automated Vigilance",
          durationMins: 30,
          whyThisMatters: "The Income Tax Dept uses AI to spot logical inconsistencies.",
          content: "Key Red Flags in India:\n• Mismatch between GST turnover and Income Tax revenue.\n• High-value cash transactions without logical source.\n• Frequent revisions of returns without justification.\n• Significant loans from relatives at zero interest.\n\nLogic: Digital footprints are now interconnected across PAN, GSTIN, and Bank accounts.",
          actionableNextStep: "Check if your business address matches on your Bank, PAN, and GST records."
        }
      ],
      quiz: [
        {
          id: "q8_1",
          question: "Which of these is a major logical red flag for a tax regulator?",
          correctOptionId: "opt8a",
          options: [
            { id: "opt8a", text: "Reporting high sales in GST but low revenue in Income Tax.", explanation: "Correct. Data synchronization across departments makes this inconsistency easy to spot." },
            { id: "opt8b", text: "Hiring more employees.", explanation: "Incorrect. Growth is encouraged by the system." },
            { id: "opt8c", text: "Changing your business logo.", explanation: "Incorrect. Brand changes are operational and have no tax logic impact." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Banking for Business",
      badge: "L9: Institutional Plumbing",
      units: [
        {
          id: "b9u1",
          title: "Current Accounts and Limits",
          durationMins: 30,
          whyThisMatters: "Savings accounts are legally restricted for business use.",
          content: "Logic: Business banking requires a 'Current Account'. Unlike Savings, it offers zero interest but unlimited transactions. For scaling, businesses use 'Overdraft (OD)' or 'Cash Credit (CC)' limits—loans against stock or receivables. This is institutional credit logic designed for cycle management, not personal consumption.",
          actionableNextStep: "Save your bank's 'Schedule of Charges' for your current account to understand transaction fees."
        }
      ],
      quiz: [
        {
          id: "q9_1",
          question: "What is the primary logical differentiator of a Business 'Current Account'?",
          correctOptionId: "opt9b",
          options: [
            { id: "opt9a", text: "It pays higher interest than savings.", explanation: "Incorrect. Current accounts usually pay zero interest." },
            { id: "opt9b", text: "It allows for high-frequency transactions and OD facilities.", explanation: "Correct. It is designed for operational churn, not passive saving." },
            { id: "opt9c", text: "It is free for everyone.", explanation: "Incorrect. Current accounts often have minimum balance requirements and fee structures." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Succession & Scaling",
      badge: "L10: Maturity Logic",
      units: [
        {
          id: "b10u1",
          title: "Beyond the Founder",
          durationMins: 35,
          whyThisMatters: "A business that depends 100% on the founder is a job, not a company.",
          content: "Scaling logic requires moving from 'Founder-led' to 'Process-led'. In India, this transition often involves adding independent directors, professionalizing the HR function, and planning for succession. A mature business survives its creator. This represents the ultimate shift in financial logic: the entity has a life of its own.",
          actionableNextStep: "Document one core business process so a third party could perform it in your absence."
        }
      ],
      quiz: [
        {
          id: "q10_1",
          question: "What indicates a logically 'mature' and 'scalable' business?",
          correctOptionId: "opt10a",
          options: [
            { id: "opt10a", text: "The business functions seamlessly in the founder's absence.", explanation: "Correct. Independence from the individual is the hallmark of structural maturity." },
            { id: "opt10b", text: "The founder works 18 hours a day.", explanation: "Incorrect. High founder dependence is a sign of operational fragility, not scale." },
            { id: "opt10c", text: "The business has 50 credit cards.", explanation: "Incorrect. High revolving debt is a sign of poor capital logic." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Income Tax Act 1961", "CGST Act 2017", "MSMED Act 2006"],
    lastReviewedDate: "2024-12-01"
  },
  seo: {
    metaTitle: "Business & MSME Logic India | Monitize Learning",
    metaDescription: "Master the operational logic of Indian MSMEs, from entity selection and GST pass-through to working capital and audit awareness."
  }
};
