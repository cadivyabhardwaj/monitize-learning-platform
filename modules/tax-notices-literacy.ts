
import { LearningModule } from '../types';

export const taxNoticesLiteracyModule: LearningModule = {
  id: "tax-notices-literacy",
  title: "Tax Notices & Demand Literacy",
  category: "Tax",
  shortDescription: "Learn how to read, classify, and understand Income Tax communications—what they mean, why they are issued, and what they do NOT imply.",
  detailedDescription: "A calm, logical framework for interpreting communications from the Income Tax Department. This module focuses on the 'Why' behind notices and intimations, helping you move from reactive anxiety to structural understanding. Educational awareness only. This module does not provide legal, tax, or compliance advice.",
  learningObjectives: [
    "Understand the logical difference between a communication and an accusation",
    "Identify key identifiers like DIN, Section Numbers, and Assessment Years",
    "Distinguish between Intimations, Notices, and Final Orders",
    "Grasp the automated logic behind Section 143(1) processing",
    "Recognize the common mathematical and logical triggers for demands",
    "Understand how AIS, TDS, and SFT data can trigger automated mismatches",
    "Identify the difference between automated CPC processing and human scrutiny",
    "Understand the conceptual role of revisions and rectifications",
    "Grasp the logic of refund set-offs against existing demands",
    "Build a mental checklist for identifying the complexity of a notice"
  ],
  estimatedEffort: "Deep",
  iconName: "Gavel",
  levels: [
    {
      id: 1,
      title: "Communication vs Accusation",
      badge: "L1: Perspective",
      units: [
        {
          id: "tn1u1",
          title: "The Department as a Data Processor",
          durationMins: 20,
          whyThisMatters: "Most anxiety stems from viewing a letter as a legal threat.",
          content: "In the modern Indian tax ecosystem, most communications are automated outputs from a data processing engine (CPC). The Department processes millions of returns and sends letters whenever data in 'Point A' (your return) doesn't perfectly align with 'Point B' (bank records or employer records). Logically, a notice is a query for consistency, not a verdict of guilt.",
          actionableNextStep: "Reflect on how your bank sends automated balance alerts; conceptually, most tax intimations are similar logic-checks."
        }
      ],
      quiz: [
        {
          id: "tn1q1",
          question: "What is the most logical way to view a standard tax notice in the digital era?",
          correctOptionId: "opt1b",
          options: [
            { id: "opt1a", text: "As a final declaration that a crime has been committed.", explanation: "Incorrect. Modern notices are primarily data-verification queries." },
            { id: "opt1b", text: "As a request for clarification where two data points do not match.", explanation: "Correct. It is a communication seeking logical alignment of information." },
            { id: "opt1c", text: "As a personal letter from a tax officer.", explanation: "Incorrect. Most initial communications are fully automated system outputs." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Anatomy of a Tax Notice",
      badge: "L2: Structural Elements",
      units: [
        {
          id: "tn2u1",
          title: "Headers and Unique Identifiers",
          durationMins: 25,
          whyThisMatters: "Missing the 'DIN' or 'AY' makes a notice impossible to verify.",
          content: "Every valid communication must have: 1. A DIN (Document Identification Number)—this is the digital birth certificate of the notice. 2. The Assessment Year (AY)—the year the tax is being calculated for. 3. The Section Reference—which defines the law being applied. If a document lacks a DIN, it may not be a formal statutory notice.",
          actionableNextStep: "Locate the 'DIN' on any sample tax document to see the 15-20 digit alphanumeric structure."
        }
      ],
      quiz: [
        {
          id: "tn2q1",
          question: "Why is the DIN (Document Identification Number) conceptually critical?",
          correctOptionId: "opt2a",
          options: [
            { id: "opt2a", text: "It ensures the document is officially recorded in the department's system.", explanation: "Correct. No DIN means the document has no standing in the official digital trail." },
            { id: "opt2b", text: "It tells you how much tax you have to pay.", explanation: "Incorrect. The DIN is an identity code, not a calculation result." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Intimation vs Notice vs Order",
      badge: "L3: Classification",
      units: [
        {
          id: "tn3u1",
          title: "The Hierarchy of Intensity",
          durationMins: 25,
          whyThisMatters: "Mixing these three leads to over-reacting or under-reacting.",
          content: "1. Intimation: An automated 'Result Slip' (e.g. 143(1)). It tells you 'this is what we calculated'. 2. Notice: A 'Questionnaire' (e.g. 142(1)). It asks 'can you explain this?'. 3. Order: A 'Final Verdict'. It states 'this is the final decision on your liability'. Identifying which stage you are in determines the logical next step.",
          actionableNextStep: "Categorize any sample tax letter based on whether it is 'Informing', 'Questioning', or 'Deciding'."
        }
      ],
      quiz: [
        {
          id: "tn3q1",
          question: "Which of these is logically a 'Result Slip' after you file your return?",
          correctOptionId: "opt3c",
          options: [
            { id: "opt3a", text: "A Scrutiny Notice.", explanation: "Incorrect. This is a questioning stage." },
            { id: "opt3b", text: "A Search Warrant.", explanation: "Incorrect. This is an enforcement stage." },
            { id: "opt3c", text: "A 143(1) Intimation.", explanation: "Correct. This is the system's way of informing you of the processing result." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Section 143(1): The Summary",
      badge: "L4: Automated Logic",
      units: [
        {
          id: "tn4u1",
          title: "Math vs Logic Processing",
          durationMins: 30,
          whyThisMatters: "Most Indians receive this annually; understanding it reduces routine stress.",
          content: "A 143(1) intimation compares your return with system data. It has three columns: 'As provided by Taxpayer' and 'As computed under 143(1)'. If the numbers match, you see a 'Nil' or 'Refund' status. If they don't, the system identifies 'Prima Facie' errors—simple math mistakes or mismatches in tax credits.",
          actionableNextStep: "Compare the 'Taxpayer' vs 'Department' columns on a processed return to spot where the difference lies."
        }
      ],
      quiz: [
        {
          id: "tn4q1",
          question: "If the 'Department' column shows higher income than the 'Taxpayer' column in a 143(1), what has occurred?",
          correctOptionId: "opt4b",
          options: [
            { id: "opt4a", text: "The department has hacked the return.", explanation: "Incorrect. The department uses reported data from other sources like banks." },
            { id: "opt4b", text: "The system has identified income not reported by the taxpayer.", explanation: "Correct. This is a logical mismatch based on external data points (TDS/SFT)." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Demand Notices (Section 156)",
      badge: "L5: The Math of Dues",
      units: [
        {
          id: "tn5u1",
          title: "Why Demands Appear",
          durationMins: 20,
          whyThisMatters: "A demand is a result, not a punishment.",
          content: "A demand notice (Section 156) is issued whenever the tax calculated (plus interest) exceeds the tax already paid. Triggers include: 1. Late filing interest (234A/B/C). 2. Disallowance of a deduction (like 80C) due to lack of proof. 3. Simple calculation errors. Conceptually, a demand is the department saying: 'Our math shows a shortfall'.",
          actionableNextStep: "Check if a demand includes 'Interest under 234'—this indicates a delay in payment timing."
        }
      ],
      quiz: [
        {
          id: "tn5q1",
          question: "What is conceptually a 'Demand Notice'?",
          correctOptionId: "opt5a",
          options: [
            { id: "opt5a", text: "A formal request to pay a calculated shortfall in tax.", explanation: "Correct. It is the output of a calculation where dues > payments." },
            { id: "opt5b", text: "A cancellation of your PAN card.", explanation: "Incorrect. A demand does not impact your identity, only your ledger." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Mismatch-Based Notices",
      badge: "L6: The Digital Trail",
      units: [
        {
          id: "tn6u1",
          title: "AIS and SFT Data Logic",
          durationMins: 30,
          whyThisMatters: "Your digital footprint is now visible to the Department in real-time.",
          content: "The Annual Information Statement (AIS) collects data from banks, mutual funds, and registries. If you sold a house but didn't report it, the system sees the 'SFT' (Statement of Financial Transaction) from the registrar. Logically, the department sends a notice because their database has more information than your return has provided.",
          actionableNextStep: "Review your AIS on the tax portal just to see the breadth of data reported by your bank."
        }
      ],
      quiz: [
        {
          id: "tn6q1",
          question: "Why might a notice be issued for a transaction you 'forgot' to report?",
          correctOptionId: "opt6c",
          options: [
            { id: "opt6a", text: "Because the department reads your mind.", explanation: "Incorrect. They read data reported by third parties." },
            { id: "opt6b", text: "Because your neighbors reported you.", explanation: "Incorrect. Most data comes from institutional SFT reporting." },
            { id: "opt6c", text: "Because institutional reporting (SFT) has flagged the transaction against your PAN.", explanation: "Correct. Data synchronization across the financial system triggers these queries." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Automated vs Human Scrutiny",
      badge: "L7: Agency Awareness",
      units: [
        {
          id: "tn7u1",
          title: "CPC vs Assessment Officer",
          durationMins: 25,
          whyThisMatters: "Understanding who you are 'talking' to changes the tone of the logic.",
          content: "95% of notices are 'Limited Scrutiny' or 'Automated Queries' from the Central Processing Centre (CPC). These are algorithmic. 'Complete Scrutiny' (Section 143(3)) is when a human officer is assigned to verify your entire financial logic. Human-led scrutiny is rarer and usually reserved for high-value or high-risk logical inconsistencies.",
          actionableNextStep: "Check the top of a notice to see if it mentions 'Faceless Assessment'—this is the automated/regional human hybrid model."
        }
      ],
      quiz: [
        {
          id: "tn7q1",
          question: "What is 'Faceless Assessment' conceptually?",
          correctOptionId: "opt7b",
          options: [
            { id: "opt7a", text: "Assessment where you don't have to show your face to the camera.", explanation: "Incorrect. It refers to the removal of physical interface between officer and taxpayer." },
            { id: "opt7b", text: "A system where the assessing officer's identity is hidden to ensure bias-free logic.", explanation: "Correct. It aims to make the process objective and data-driven." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Revision & Rectification",
      badge: "L8: Corrective Logic",
      units: [
        {
          id: "tn8u1",
          title: "Fixing the Mismatch",
          durationMins: 25,
          whyThisMatters: "Knowing these concepts helps you identify how a dispute might eventually resolve.",
          content: "1. Revision (Section 139(5)): You realize you made a mistake and file a new return to replace the old one. 2. Rectification (Section 154): The system or the officer made a 'Mistake Apparent from Record' (like adding 2+2=5). Conceptually, these are 'Undo' buttons for mathematical or logical errors.",
          actionableNextStep: "Identify if a demand is due to a data entry error (e.g. wrong TDS amount entered) which would fall under Rectification logic."
        }
      ],
      quiz: [
        {
          id: "tn8q1",
          question: "When is 'Rectification' (Sec 154) typically used logically?",
          correctOptionId: "opt8a",
          options: [
            { id: "opt8a", text: "To correct obvious mathematical errors or ignored data in a processed return.", explanation: "Correct. It is for 'apparent' mistakes that don't require new arguments." },
            { id: "opt8b", text: "To change your entire business model.", explanation: "Incorrect. That would require a revised return or a new assessment." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Refund Adjustments",
      badge: "L9: The Offset Rule",
      units: [
        {
          id: "tn9u1",
          title: "Section 245: Intimation of Set-off",
          durationMins: 20,
          whyThisMatters: "This explains why your expected refund might 'disappear' into old dues.",
          content: "Logic: If you are owed a refund this year, but have an unpaid demand from 5 years ago, the system will 'adjust' (set-off) the refund against the debt. Section 245 is an intimation giving you a chance to agree or disagree before the system takes the money. It's a cross-year reconciliation logic.",
          actionableNextStep: "Check for 'Outstanding Tax Demands' on the portal dashboard before expecting a large refund."
        }
      ],
      quiz: [
        {
          id: "tn9q1",
          question: "What is the logical purpose of a Section 245 intimation?",
          correctOptionId: "opt9b",
          options: [
            { id: "opt9a", text: "To tell you your refund is canceled forever.", explanation: "Incorrect. It informs you of a proposed adjustment." },
            { id: "opt9b", text: "To inform you that a current refund will be used to pay off an old tax debt.", explanation: "Correct. This is the 'Settlement' logic of the department's ledger." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Information vs Mandate",
      badge: "L10: Priority Logic",
      units: [
        {
          id: "tn10u1",
          title: "Information vs Mandate",
          durationMins: 20,
          whyThisMatters: "Many people waste energy on 'FYI' letters while missing 'Mandatory' ones.",
          content: "Some communications are 'Educational/Informational' (e.g., reminders to file). These have no statutory section and no DIN. Some are 'Statutory Mandates' (e.g. Notices under Sec 142(1)). Logic: If there is a Section Number and a DIN, the law requires a response. If it's a generic email from 'Income Tax Department' without specific details, it is likely a mass communication.",
          actionableNextStep: "Practice identifying the 'Statutory Section' on any sample tax letter to verify its mandatory nature."
        }
      ],
      quiz: [
        {
          id: "tn10q1",
          question: "How can you logically tell if a tax email is a mandatory legal notice?",
          correctOptionId: "opt10c",
          options: [
            { id: "opt10a", text: "If it uses bold red text.", explanation: "Incorrect. The department uses formal, neutral colors." },
            { id: "opt10b", text: "If it arrives at midnight.", explanation: "Incorrect. Timing is irrelevant to legal standing." },
            { id: "opt10c", text: "If it contains a DIN and references a specific statutory section of the Act.", explanation: "Correct. These are the hallmarks of a formal legal mandate." }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Common Panic Reactions",
      badge: "L11: Behavioral Shield",
      units: [
        {
          id: "tn11u1",
          title: "De-coding the Panic",
          durationMins: 25,
          whyThisMatters: "Panic leads to 'Ghosting' the department or paying incorrect demands.",
          content: "Panic Myth 1: 'A notice means I am a criminal.' Reality: It usually means a data mismatch. Panic Myth 2: 'If I ignore it, it will go away.' Reality: Automated systems escalate demands into 'Orders' if left unaddressed. Logic: Clarity comes from reviewing the data, not fleeing from the letter.",
          actionableNextStep: "Recall a time you received an automated error message from a bank; conceptually link that memory to a tax notice."
        }
      ],
      quiz: [
        {
          id: "tn11q1",
          question: "What is the most dangerous logical fallacy regarding tax notices?",
          correctOptionId: "opt11a",
          options: [
            { id: "opt11a", text: "Assuming that silence will resolve the data mismatch.", explanation: "Correct. In a digital system, silence is often interpreted as acceptance of the department's calculation." },
            { id: "opt11b", text: "Assuming the department is always right.", explanation: "Incorrect. Mismatches can be due to department errors as well, which is why responses exist." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "When Logic Ends, Expertise Begins",
      badge: "L12: Maturity",
      units: [
        {
          id: "tn12u1",
          title: "The Limits of Awareness",
          durationMins: 15,
          whyThisMatters: "Literacy helps you talk to an expert; it doesn't always make you one.",
          content: "You have completed the literacy journey. You now know 'What' is happening. However, 'How' to legally interpret a complex scrutiny case involves case law, recent judgments, and procedural nuances. Professional help (a Chartered Accountant) is logically needed when: 1. The amounts are high. 2. The legal sections are unfamiliar. 3. You disagree with the system's logic and need to file an appeal. Educational awareness only.",
          actionableNextStep: "Save a digital copy of this module summary to use as a 'Primer' if you ever need to consult an expert."
        }
      ],
      quiz: [
        {
          id: "tn12q1",
          question: "What is the primary goal of this literacy module?",
          correctOptionId: "opt12b",
          options: [
            { id: "opt12a", text: "To teach you how to win legal cases against the government.", explanation: "Incorrect. That is a professional legal domain." },
            { id: "opt12b", text: "To replace panic with structured understanding and informed professional engagement.", explanation: "Correct. Literacy allows for calm assessment and better collaboration with experts." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Income Tax Act 1961", "CPC Processing Guidelines"],
    lastReviewedDate: "2024-12-15"
  },
  seo: {
    metaTitle: "Tax Notices & Demand Literacy India | Monitize",
    metaDescription: "Understand Income Tax notices, DINs, and Section 143(1) intimations with clarity. Move from anxiety to structural tax awareness."
  }
};
