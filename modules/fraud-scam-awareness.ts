
import { LearningModule } from '../types';

export const fraudScamAwarenessModule: LearningModule = {
  id: "fraud-scam-awareness",
  title: "Frauds, Fake GST Notices & Scam Awareness",
  category: "Technical",
  shortDescription: "Learn how common tax-related scams work, how fake GST notices are structured, and how to identify red flags before reacting.",
  detailedDescription: "A logical defense framework designed to protect professionals and business owners from digital deception. This module deconstructs the anatomy of fake communications, the psychology of panic-based fraud, and the institutional logic of official Indian tax departments. Educational awareness only. This module does not provide legal, tax, or enforcement advice.",
  learningObjectives: [
    "Understand why financial scams target tax-compliant professionals",
    "Identify the structural markers of a fake GST notice",
    "Recognize the logical difference between a communication and an enforcement action",
    "Analyze the psychology of 'Weaponized Urgency' used by scammers",
    "Distinguish between official government domains and phishing email patterns",
    "Identify common impersonation tactics used in fake calls",
    "Understand the role of the Document Identification Number (DIN) in verification",
    "Recognize common errors that lead to falling for a scam",
    "Establish a framework for calm and logical document assessment",
    "Develop digital hygiene habits to minimize exposure to fraud",
    "Adopt a 'Scam-Resistant' mindset for all administrative interactions"
  ],
  estimatedEffort: "Deep",
  iconName: "ShieldAlert",
  levels: [
    {
      id: 1,
      title: "Why Financial Scams Exist",
      badge: "L1: Macro Context",
      units: [
        {
          id: "f1u1",
          title: "The Digital Distance",
          durationMins: 15,
          whyThisMatters: "Scams thrive when we stop viewing systems logically and start viewing them as 'distant threats'.",
          content: "As the Indian tax ecosystem has moved entirely online (Faceless Assessment), the physical connection between officers and taxpayers has reduced. Scammers use this 'Digital Gap' to create fake personas. Logically, a scam is simply a misdirection of authority—using the name of a department to bypass your critical thinking.",
          actionableNextStep: "Reflect on how much of your financial life is handled through a screen versus physical interaction."
        }
      ],
      quiz: [
        {
          id: "fq1_1",
          question: "What is the primary factor that allows digital tax scams to flourish in the current era?",
          correctOptionId: "fo2",
          options: [
            { id: "fo1", text: "Taxes have become too high.", explanation: "Incorrect. Tax rates do not determine the frequency of scams; systemic distance does." },
            { id: "fo2", text: "The removal of physical interaction through digital/faceless systems.", explanation: "Correct. This distance makes it easier for impersonators to pretend to be official entities." },
            { id: "fo3", text: "Scammers are smarter than government officials.", explanation: "Incorrect. Scams rely on psychological triggers, not superior intelligence." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Anatomy of a Fake GST Notice",
      badge: "L2: Visual Logic",
      units: [
        {
          id: "f2u1",
          title: "Spotting Inconsistencies",
          durationMins: 20,
          whyThisMatters: "Fake notices often use low-quality logic in their design.",
          content: "Official notices from the GST department are system-generated. Red flags in a fake PDF include: • Distorted or blurred logos. • Spelling errors in technical terms (e.g., 'Goods and Service Tax' instead of 'Goods and Services Tax'). • Missing Document Identification Number (DIN). • Direct bank account details for 'payment' or 'settlement'. Official logic requires payments only through the designated portal, never directly to an individual bank account.",
          actionableNextStep: "Look for the Document Identification Number (DIN) on any sample document to see its format."
        }
      ],
      quiz: [
        {
          id: "fq2_1",
          question: "Which of these is a major logical indicator that a PDF notice is fake?",
          correctOptionId: "fo1",
          options: [
            { id: "fo1", text: "It asks for a 'Penalty Payment' to be made to a specific bank account provided in the text.", explanation: "Correct. Official taxes are paid through generated challans on the GST portal, never to a specific account listed in a notice." },
            { id: "fo2", text: "It contains a technical reference to a tax law.", explanation: "Incorrect. Both real and fake notices will use legal references to appear authentic." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Email & SMS Scam Patterns",
      badge: "L3: Communication Hygiene",
      units: [
        {
          id: "f3u1",
          title: "The URL and Sender Trap",
          durationMins: 20,
          whyThisMatters: "Most scams begin with a simple click on a deceptive link.",
          content: "Logically, official government emails in India end in .gov.in or .nic.in. Scammers use 'Similar-Looking' domains (e.g., info@gstindia-support.com). SMS scams often use 'Alpha Headers' (like 'GSTOUT') but contain shortened links (bit.ly/xyz) that mask the destination. Official logic never requires you to enter a password or OTP via a link in an SMS.",
          actionableNextStep: "Check the sender address of any promotional or administrative email you received today."
        }
      ],
      quiz: [
        {
          id: "fq3_1",
          question: "What is the most secure way to check if a communication is official?",
          correctOptionId: "fo3",
          options: [
            { id: "fo1", text: "Check if the logo looks professional.", explanation: "Incorrect. Logos can be easily copied or spoofed." },
            { id: "fo2", text: "Reply to the email and ask if they are real.", explanation: "Incorrect. Replying confirms your email is active to the scammer." },
            { id: "fo3", text: "Log in independently to the official GST portal and check the 'Services -> User Services -> View Additional Notices' section.", explanation: "Correct. Trusting only the primary dashboard is the hallmark of logical digital hygiene." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Fake Calls & Impersonation",
      badge: "L4: Verbal Defense",
      units: [
        {
          id: "f4u1",
          title: "The Officer Persona",
          durationMins: 15,
          whyThisMatters: "Human voices are more persuasive than text when creating fear.",
          content: "A scammer calling as an 'Officer' will often cite specific PAN or GSTIN details (which are public records) to build trust. They may use background noise to simulate an office. Logic: Official department inquiries for serious matters are never initiated via WhatsApp calls or private numbers demanding immediate money. The goal is to make you 'settle' without consulting a professional.",
          actionableNextStep: "Practice the phrase: 'I will verify this through the portal and consult my professional before proceeding.'"
        }
      ],
      quiz: [
        {
          id: "fq4_1",
          question: "A caller claims to be from the department and demands an immediate 'Settlement Fee' over the phone to avoid arrest. What is the logical red flag?",
          correctOptionId: "fo1",
          options: [
            { id: "fo1", text: "The request for immediate money transfer and bypassing formal portal procedures.", explanation: "Correct. No official department requests money over a call; everything follows a ledger-based workflow." },
            { id: "fo2", text: "The fact that they knew your GSTIN.", explanation: "Incorrect. GSTINs are public information and do not prove the caller's identity." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Urgency, Fear & Psychology",
      badge: "L5: Behavioral Shield",
      units: [
        {
          id: "f5u1",
          title: "Weaponized Fear",
          durationMins: 25,
          whyThisMatters: "Panic shuts down the logical brain, which is exactly what a scammer needs.",
          content: "Scams rely on 'Amygdala Hijack'—triggering your fight-or-flight response. Phrases like 'Final Notice', 'Cancellation in 2 hours', or 'Court Case' are used to force quick action. Logically, the government follows a 'Due Process' with mandatory timelines for replies (often 7, 15, or 30 days). No official action is ever 'instant' in a way that prevents you from seeking advice.",
          actionableNextStep: "Recall a time you made a decision in a hurry—did you miss a logical red flag?"
        }
      ],
      quiz: [
        {
          id: "fq5_1",
          question: "Why do scammers insist on 'Immediate Action' (within minutes or hours)?",
          correctOptionId: "fo2",
          options: [
            { id: "fo1", text: "Because government offices are very efficient.", explanation: "Incorrect. Official processes are structured and follow statutory timelines." },
            { id: "fo2", text: "To prevent you from having the time to consult a professional or think logically.", explanation: "Correct. Speed is the scammer's tool to bypass your critical analysis." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Official vs Unofficial",
      badge: "L6: Verification Logic",
      units: [
        {
          id: "f6u1",
          title: "The Portal Centrality",
          durationMins: 20,
          whyThisMatters: "If it's not on the portal, it doesn't exist for you.",
          content: "The golden rule of modern tax logic: The Official Portal is the 'Single Source of Truth'. Even if you receive an email that looks real, the first logical step is to check your dashboard on the government portal. If there is no 'Notice' or 'Order' pending there, the external communication is likely unofficial or fraudulent.",
          actionableNextStep: "Locate the 'Notices and Orders' tab on your relevant department dashboard."
        }
      ],
      quiz: [
        {
          id: "fq6_1",
          question: "You receive an email about a tax mismatch. Where should you logically go to verify this?",
          correctOptionId: "fo1",
          options: [
            { id: "fo1", text: "The official government portal dashboard.", explanation: "Correct. Any valid notice will be recorded in the system's official database." },
            { id: "fo2", text: "Reply to the email to see what they say.", explanation: "Incorrect. Interacting with the sender increases your risk." },
            { id: "fo3", text: "Call the phone number provided in the email.", explanation: "Incorrect. Scammers provide their own numbers to further deceive you." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Common Mistakes",
      badge: "L7: Error Patterns",
      units: [
        {
          id: "f7u1",
          title: "The 'Compliance Trap'",
          durationMins: 20,
          whyThisMatters: "Being 'too compliant' can make you vulnerable to scammers.",
          content: "Common logical errors: 1. Assuming a document is real because it has your correct name and address. 2. Clicking 'Download' on a file to 'see the problem'. 3. Paying a small 'Service Charge' to 'fix the error'. Scammers often start with a small, believable amount before escalating to larger demands.",
          actionableNextStep: "Identify your current 'Critical Response Protocol'—who is the first person you would call if you saw a scary notice?"
        }
      ],
      quiz: [
        {
          id: "fq7_1",
          question: "Which of these is a common behavioral mistake when receiving a suspicious notice?",
          correctOptionId: "fo2",
          options: [
            { id: "fo1", text: "Waiting for 24 hours to consult a Chartered Accountant.", explanation: "Incorrect. This is actually a safe and logical response." },
            { id: "fo2", text: "Assuming the document is real just because it contains your correct business details.", explanation: "Correct. Public records (like GSTIN search) allow scammers to find your details easily." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Digital Hygiene & Safe Judgment",
      badge: "L8: Defensive Habits",
      units: [
        {
          id: "f8u1",
          title: "The 3-Step Verification",
          durationMins: 15,
          whyThisMatters: "Consistency in hygiene is better than intensity of reaction.",
          content: "1. Stop: Do not click or call. 2. Verify: Check the DIN on the official portal. 3. Consult: Share the document only with your verified tax professional. Never share OTPs or login credentials over email or phone. Logic: Your credentials are the keys to your financial identity; the government never needs you to hand them over to 'verify' a record.",
          actionableNextStep: "Enable Two-Factor Authentication (2FA) on your email and tax portal accounts if available."
        }
      ],
      quiz: [
        {
          id: "fq8_1",
          question: "What is a 'DIN' and why does it matter logically?",
          correctOptionId: "fo1",
          options: [
            { id: "fo1", text: "A Document Identification Number that allows you to verify a notice's authenticity on the government website.", explanation: "Correct. It is the digital thumbprint of a valid statutory document." },
            { id: "fo2", text: "A secret password for VIP taxpayers.", explanation: "Incorrect. It is a public verification tool for accountability." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "What NOT To Do",
      badge: "L9: Strategic Silence",
      units: [
        {
          id: "f9u1",
          title: "Avoiding Interaction",
          durationMins: 15,
          whyThisMatters: "Interaction is a data point for a scammer.",
          content: "If you receive a suspicious notice: • Do NOT call the phone number mentioned in the PDF. • Do NOT forward the email to anyone except your professional. • Do NOT click 'Unsubscribe' in a scam email (this confirms your address). • Do NOT pay any 'immediate processing fee'. Logically, silence is your shield until you have verified the communication through official channels.",
          actionableNextStep: "Create a mental 'Red Line'—what specific request would make you stop all interaction immediately?"
        }
      ],
      quiz: [
        {
          id: "fq9_1",
          question: "Why should you avoid calling the phone number listed on a suspicious-looking notice?",
          correctOptionId: "fo1",
          options: [
            { id: "fo1", text: "It likely leads to the scammer's call center, designed to further manipulate you.", explanation: "Correct. Scammers use these numbers to initiate a high-pressure verbal scam." },
            { id: "fo2", text: "Because calling is too expensive.", explanation: "Incorrect. The risk is security and deception, not call cost." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "The Scam-Resistant Mindset",
      badge: "L10: Resilience",
      units: [
        {
          id: "f10u1",
          title: "Logical Maturity",
          durationMins: 15,
          whyThisMatters: "Awareness is the final and most powerful firewall.",
          content: "Completing this track means you now understand that scams target emotion, not facts. A scam-resistant mindset is characterized by: • Skepticism of unexpected urgency. • Reliance on primary data (portals). • Collaboration with verified experts. • Constant digital vigilance. Educational awareness only. This module does not provide legal, tax, or enforcement advice.",
          actionableNextStep: "Review your business contact information on the portal to ensure you receive real alerts directly."
        }
      ],
      quiz: [
        {
          id: "fq10_1",
          question: "What is the ultimate goal of achieving scam awareness?",
          correctOptionId: "fo2",
          options: [
            { id: "fo1", text: "To never pay any taxes again.", explanation: "Incorrect. Compliance is part of business logic; awareness protects that logic." },
            { id: "fo2", text: "To replace fear and panic with a structured process of verification and informed response.", explanation: "Correct. Literacy provides the calm needed to navigate the digital world safely." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Information Technology Act 2000", "CBIC DIN Circulars"],
    lastReviewedDate: "2024-12-25"
  },
  seo: {
    metaTitle: "Frauds & Fake GST Notice Awareness India | Monitize",
    metaDescription: "Learn to identify fake GST notices, avoid tax-related scams, and understand official communication patterns in India."
  }
};
