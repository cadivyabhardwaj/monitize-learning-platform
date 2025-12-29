
import { LearningModule } from '../types';

export const gstProfessionalsModule: LearningModule = {
  id: "gst-professionals",
  title: "GST for Professionals",
  category: "Tax",
  shortDescription: "Understand how GST applies to professional services, without filing complexity or compliance fear.",
  detailedDescription: "A logical roadmap designed for freelancers, consultants, and service providers. This module deconstructs the structural intent of the Goods and Services Tax, focusing on the conceptual flow of supply, credit, and professional responsibility in the Indian ecosystem. Educational awareness only. This module does not provide GST filing, registration, or compliance advice.",
  learningObjectives: [
    "Identify the foundational purpose of GST as a harmonized consumption tax",
    "Define the logical scope of a 'Professional' within the GST framework",
    "Understand the conceptual definition of 'Supply of Services'",
    "Recognize the triggers for registration thresholds without numerical fixation",
    "Master the mental model of Output Tax versus Input Tax Credit",
    "Identify the structural requirements of a professional tax invoice",
    "Grasp the logic of 'Place of Supply' for domestic and international clients",
    "Understand the impact of GST on monthly professional cash flow",
    "Recognize the concept of periodic compliance cycles and reconciliation",
    "Identify common behavioral and logical mistakes made by solo professionals",
    "Debunk prevailing myths regarding GST in the gig economy",
    "Build a framework for a responsible and ethical compliance mindset"
  ],
  estimatedEffort: "Deep",
  iconName: "Gavel",
  levels: [
    {
      id: 1,
      title: "Why GST Exists",
      badge: "L1: Structural Intent",
      units: [
        {
          id: "g1u1",
          title: "Beyond Tax Collection",
          durationMins: 20,
          whyThisMatters: "Understanding the system's logic reduces the friction of participation.",
          content: "GST was introduced to solve the problem of 'Tax on Tax' (cascading). Before GST, taxes paid at one level weren't always credited at the next. For a professional, GST creates a transparent chain where tax is only paid on the value you add. Logically, it moves India from a fragmented market to a unified economic zone. As a professional, you are a critical node in this digital value chain.",
          actionableNextStep: "Reflect on how a unified market conceptually makes it easier to serve clients across different Indian states."
        }
      ],
      quiz: [
        {
          id: "gq1_1",
          question: "What is the primary logical problem that GST was designed to solve?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "To make services more expensive for the end user.", explanation: "Incorrect. The intent is efficiency, not necessarily higher cost." },
            { id: "go2", text: "To eliminate the 'cascading' effect of multiple taxes on the same value.", explanation: "Correct. This 'Tax on Tax' removal is the core logic of GST." },
            { id: "go3", text: "To replace the need for professional bank accounts.", explanation: "Incorrect. Banking and Tax systems are separate infrastructures." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Professional Identity",
      badge: "L2: Scope Logic",
      units: [
        {
          id: "g2u1",
          title: "Who Is a Professional in GST?",
          durationMins: 25,
          whyThisMatters: "Knowing your classification determines which rules apply to your logic.",
          content: "In GST logic, a professional is typically a provider of 'Services' rather than 'Goods'. This includes individuals using specialized intellectual or manual skills—such as Designers, Developers, Doctors, CAs, and Consultants. Whether you are a solo freelancer or part of a small firm, the system views you as a 'Taxable Person' once you enter the commercial stream of supply.",
          actionableNextStep: "Identify if your primary source of income is classified as a 'Service' (Intellectual Output) or 'Goods' (Physical Product)."
        }
      ],
      quiz: [
        {
          id: "gq2_1",
          question: "In the context of GST logic, how is a freelancer primarily classified?",
          correctOptionId: "go1",
          options: [
            { id: "go1", text: "As a provider of services.", explanation: "Correct. Intellectual or professional output is categorized as a service." },
            { id: "go2", text: "As a consumer only.", explanation: "Incorrect. While you consume, in your professional capacity, you are a provider/supplier." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Supply of Services",
      badge: "L3: Exchange Logic",
      units: [
        {
          id: "g3u1",
          title: "Defining the Transaction",
          durationMins: 25,
          whyThisMatters: "Not every interaction is a 'Supply' under the law.",
          content: "The logic of GST centers on 'Supply'. A supply of service occurs when there is an agreement to perform a task for a 'Consideration' (payment). This consideration doesn't have to be cash; it can be barter. If you provide a service for free out of personal affection, it generally lacks the commercial 'Consideration' logic required to trigger GST, unless it happens between related parties.",
          actionableNextStep: "Differentiate between a personal favor and a professional contract in your recent interactions."
        }
      ],
      quiz: [
        {
          id: "gq3_1",
          question: "Which element is logically required for an activity to be considered a 'Supply' in a professional context?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "A physical office building.", explanation: "Incorrect. Supply can happen anywhere, including digitally." },
            { id: "go2", text: "Consideration (Payment or Value exchange).", explanation: "Correct. Commercial supply requires an exchange of value." },
            { id: "go3", text: "A minimum of 10 employees.", explanation: "Incorrect. A single individual can initiate a supply." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Registration Thresholds",
      badge: "L4: Entry Logic",
      units: [
        {
          id: "g4u1",
          title: "Conceptual Boundaries",
          durationMins: 30,
          whyThisMatters: "Knowing when to join the system prevents administrative friction later.",
          content: "The system does not expect every hobbyist to register. Registration logic is based on 'Aggregate Turnover'—the total value of all your supplies in a year. There are limits (conceptual 'thresholds') below which registration is optional. However, certain triggers—like providing services to a client in a different state (Inter-state supply)—may conceptually change the requirement for registration regardless of turnover.",
          actionableNextStep: "Assess your total annual revenue (Turnover) to understand your proximity to standard thresholds."
        }
      ],
      quiz: [
        {
          id: "gq4_1",
          question: "What is the primary metric used to determine if a professional enters the scope of mandatory registration?",
          correctOptionId: "go3",
          options: [
            { id: "go1", text: "The number of hours worked per week.", explanation: "Incorrect. Time spent is an internal metric, not a regulatory one." },
            { id: "go2", text: "The age of the professional.", explanation: "Incorrect. Age is irrelevant to commercial logic." },
            { id: "go3", text: "Aggregate annual turnover (Total revenue).", explanation: "Correct. Scale of commercial activity is the primary trigger." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "The Credit Mental Model",
      badge: "L5: Value-Add Logic",
      units: [
        {
          id: "g5u1",
          title: "Output Tax vs. Input Credit",
          durationMins: 35,
          whyThisMatters: "This is the 'profit protection' logic of the GST system.",
          content: "Logic: You are a collection agent. When you bill a client, you collect 'Output Tax' on behalf of the government. However, to run your office, you pay GST on your laptop, internet, and rent—this is 'Input Tax'. The system allows you to deduct what you ALREADY PAID (Input) from what you COLLECTED (Output). You only deposit the 'Net' difference. This ensures you aren't taxed on your business costs.",
          actionableNextStep: "List three professional expenses (e.g., Software, Hardware, Rent) where you likely pay GST as an 'Input'."
        }
      ],
      quiz: [
        {
          id: "gq5_1",
          question: "Scenario: You collect ₹1800 as tax from a client but you already paid ₹1000 as tax on your office rent. How much do you logically owe the government?",
          correctOptionId: "go1",
          options: [
            { id: "go1", text: "₹800 (The difference).", explanation: "Correct. This is the 'Input Tax Credit' logic in action." },
            { id: "go2", text: "₹2800 (The total).", explanation: "Incorrect. That would be double taxation, which GST avoids." },
            { id: "go3", text: "₹0 (The government waives it).", explanation: "Incorrect. You must deposit the net tax collected on the value you added." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Professional Invoicing",
      badge: "L6: Documentation Logic",
      units: [
        {
          id: "g6u1",
          title: "What the System Expects",
          durationMins: 25,
          whyThisMatters: "Incorrect invoices lead to clients being unable to claim credit, causing trust issues.",
          content: "A GST invoice is a legal record of supply. It must conceptually contain: 1. Identity (Names and GSTINs). 2. Nature of Service (using SAC codes). 3. Value (Rate and Total). 4. Place of Supply. For professionals, the 'Service Accounting Code' (SAC) is the digital label that tells the system exactly what kind of expertise you provided.",
          actionableNextStep: "Locate the 'SAC' code most relevant to your specific profession (e.g., Software, Design, or Legal)."
        }
      ],
      quiz: [
        {
          id: "gq6_1",
          question: "What is the logical purpose of an SAC (Service Accounting Code) on an invoice?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "To make the invoice look more professional.", explanation: "Incorrect. It serves a functional regulatory purpose." },
            { id: "go2", text: "To categorize the type of service for correct systematic processing.", explanation: "Correct. Codes allow the system to identify the nature of the supply automatically." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Place of Supply Basics",
      badge: "L7: Geographical Logic",
      units: [
        {
          id: "g7u1",
          title: "Intra, Inter, and Exports",
          durationMins: 30,
          whyThisMatters: "Tax destination determines which 'Type' of tax logic applies.",
          content: "GST is a destination-based tax. 1. Client in your state: Intra-state logic. 2. Client in a different Indian state: Inter-state logic. 3. Client outside India: Export logic. Exports are unique—they are conceptually 'Zero-Rated', meaning you don't charge tax to the foreign client, but you can still claim credit for the taxes you paid on your inputs in India.",
          actionableNextStep: "Categorize your current client list into 'Same State', 'Other State', and 'International'."
        }
      ],
      quiz: [
        {
          id: "gq7_1",
          question: "Why is the 'Export of Services' conceptually encouraged in the GST logic?",
          correctOptionId: "go1",
          options: [
            { id: "go1", text: "It allows services to be competitive globally by not adding domestic tax costs.", explanation: "Correct. Zero-rating ensures Indian expertise remains price-competitive abroad." },
            { id: "go2", text: "It prevents foreign clients from knowing about Indian taxes.", explanation: "Incorrect. It's a structural economic choice for trade balance." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Cash Flow Reality",
      badge: "L8: Financial Logic",
      units: [
        {
          id: "g8u1",
          title: "The Accrual Trap",
          durationMins: 25,
          whyThisMatters: "Mistaking GST collected for personal income is a primary cause of business failure.",
          content: "The most critical mental shift: The GST you collect is NOT your money. It is a temporary liability. Logically, you should keep it in a separate 'bucket' or sub-account. If a client pays you ₹1,18,000 (where 18k is GST), only ₹1,00,000 belongs to your professional fees. Using that 18k for personal expenses creates a 'Cash Flow Gap' when the compliance cycle arrives.",
          actionableNextStep: "Set up a mental or physical 'Tax Bucket' where you set aside collected tax immediately upon receipt."
        }
      ],
      quiz: [
        {
          id: "gq8_1",
          question: "How should a professional logically view the GST portion of a client's payment?",
          correctOptionId: "go3",
          options: [
            { id: "go1", text: "As a bonus for good work.", explanation: "Incorrect. It is a statutory collection." },
            { id: "go2", text: "As part of their gross profit.", explanation: "Incorrect. It is a pass-through liability." },
            { id: "go3", text: "As a temporary liability held in trust for the government.", explanation: "Correct. This mindset ensures cash is available when due." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Compliance Cycles",
      badge: "L9: Periodic Awareness",
      units: [
        {
          id: "g9u1",
          title: "Reporting vs. Payment",
          durationMins: 25,
          whyThisMatters: "Compliance is about synchronization, not just money.",
          content: "The GST system works in cycles. You must periodically 'Declare' what you supplied (Reporting) and 'Deposit' the net tax (Payment). The logic is 'Self-Assessment': the government trusts you to report accurately, but verifies it through 'Reconciliation'—checking if the tax you claimed as an 'Input' matches what your supplier reported as their 'Output'.",
          actionableNextStep: "Reflect on the importance of your suppliers being GST-compliant so that you can receive your credits."
        }
      ],
      quiz: [
        {
          id: "gq9_1",
          question: "What is the logical purpose of 'Reconciliation' in the GST ecosystem?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "To make professionals do more paperwork.", explanation: "Incorrect. Paperwork is a byproduct, not the purpose." },
            { id: "go2", text: "To ensure that tax credits are only claimed if the tax was actually deposited by the supplier.", explanation: "Correct. This closes the loop and prevents fraudulent claims." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Common Professional Mistakes",
      badge: "L10: Behavioral Shield",
      units: [
        {
          id: "g10u1",
          title: "Pattern Recognition of Errors",
          durationMins: 30,
          whyThisMatters: "Learning from others' logical lapses prevents your own.",
          content: "Common Errors: 1. Mixing personal purchases (like a home fridge) with business inputs. 2. Not registering when required for inter-state digital services. 3. Forgetting that GST applies even if the client doesn't ask for an invoice. 4. Ignoring 'Reverse Charge' logic—where you might have to pay tax on services you buy from unregistered persons. Educational awareness only.",
          actionableNextStep: "Review your recent 'Business Expenses' and ensure they are logically related to your professional output."
        }
      ],
      quiz: [
        {
          id: "gq10_1",
          question: "Why is it logically incorrect to claim GST credit on a personal television purchase through a business GSTIN?",
          correctOptionId: "go1",
          options: [
            { id: "go1", text: "The purchase is not used 'in the course or furtherance of business'.", explanation: "Correct. Business credit is strictly for business enablement." },
            { id: "go2", text: "Because TVs don't have GST.", explanation: "Incorrect. TVs have GST, but the logic of 'Usage' is the differentiator." }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "GST Myths in Freelancing",
      badge: "L11: Clarity over Hype",
      units: [
        {
          id: "g11u1",
          title: "De-bunking the Noise",
          durationMins: 30,
          whyThisMatters: "Misinformation leads to either unnecessary fear or dangerous neglect.",
          content: "Myth 1: 'I work from home, so GST doesn't apply.' Reality: Physical location doesn't matter; commercial supply does. Myth 2: 'GST is an extra cost for me.' Reality: If you are B2B, your client gets the credit back; if you are B2C, it is a pass-through cost. Myth 3: 'Small freelancers are invisible to the system.' Reality: Digital payments create a permanent auditable trail.",
          actionableNextStep: "Recall a piece of GST 'advice' you heard recently and test it against these logical frameworks."
        }
      ],
      quiz: [
        {
          id: "gq11_1",
          question: "Is it logically true that 'GST is a 18% loss of income' for a professional?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "Yes, it reduces your fees directly.", explanation: "Incorrect. You collect it *over and above* your fees." },
            { id: "go2", text: "No, it is a tax collected from the client and passed to the government.", explanation: "Correct. It is not a reduction of your agreed professional fee." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "A Responsible Mindset",
      badge: "L12: The Professional Pledge",
      units: [
        {
          id: "g12u1",
          title: "The Dignity of Compliance",
          durationMins: 20,
          whyThisMatters: "Compliance is a hallmark of a mature professional practice.",
          content: "Completing this track means you now understand the 'Why' behind the 'What'. GST is a structural responsibility that accompanies professional growth. A responsible mindset involves: 1. Continuous awareness of your turnover. 2. Disciplined documentation. 3. Ethical separation of taxes from fees. Educational awareness only. This module does not provide GST filing, registration, or compliance advice.",
          actionableNextStep: "Commit to checking your 'GST Readiness' once every quarter as a standard business hygiene practice."
        }
      ],
      quiz: [
        {
          id: "gq12_1",
          question: "What is the ultimate goal of achieving GST literacy as a professional?",
          correctOptionId: "go2",
          options: [
            { id: "go1", text: "To never have to talk to a Chartered Accountant again.", explanation: "Incorrect. Literacy makes the conversation with a CA more effective." },
            { id: "go2", text: "To move from a state of compliance-fear to a state of structural understanding and agency.", explanation: "Correct. Understanding the logic removes the anxiety of the unknown." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Central Goods and Services Tax Act, 2017", "Integrated Goods and Services Tax Act, 2017"],
    lastReviewedDate: "2024-12-28"
  },
  seo: {
    metaTitle: "GST for Professionals India | Monitize Learning",
    metaDescription: "Master the logic of GST for freelancers and consultants. Learn about supply of services, input tax credit, and professional invoicing."
  }
};
