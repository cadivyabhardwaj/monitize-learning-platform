
import { LearningModule } from '../types';

export const bankingUpiMechanicsModule: LearningModule = {
  id: "banking-upi-mechanics",
  title: "Banking & UPI Mechanics",
  category: "Technical",
  shortDescription: "Understand how banks, accounts, UPI, and payment rails work in India—what happens behind the screen when money moves.",
  detailedDescription: "A deep dive into the plumbing of the Indian digital payment ecosystem. This module deconstructs the logical relationship between your bank ledger, the NPCI switch, and the UPI protocol. Educational awareness only. This module does not provide banking, transactional, or financial advice.",
  learningObjectives: [
    "Understand the logical concept of a Bank Account as a digital ledger",
    "Identify the roles of RBI and NPCI in the Indian payment ecosystem",
    "Trace the conceptual lifecycle of a digital transaction",
    "Understand the architecture of UPI (Unified Payments Interface)",
    "Distinguish between Virtual Payment Addresses (VPA) and Handles",
    "Recognize the causes and logic behind 'Pending' and 'Failed' states",
    "Understand the systemic logic behind transaction and daily limits",
    "Differentiate between technical reversals and social engineering fraud",
    "Identify the logic of settlement cycles and reconciliation lags",
    "Build a framework for questioning payment delays and error messages"
  ],
  estimatedEffort: "Deep",
  iconName: "CreditCard",
  levels: [
    {
      id: 1,
      title: "What Is a Bank Account?",
      badge: "L1: Ledger Logic",
      units: [
        {
          id: "upi-1-u1",
          title: "The Digital Ledger",
          durationMins: 20,
          whyThisMatters: "Thinking of an account as a 'box of cash' leads to confusion about digital delays.",
          content: "Logically, a bank account is not a physical container. It is a line in a highly secure, digital database (the Core Banking System or CBS). When you 'deposit' money, the bank increments your ledger entry. When you 'spend', the bank decrements it. The money you see on your screen is a 'promise to pay' by the bank, backed by regulatory reserves.",
          actionableNextStep: "Identify the 'Core Banking System' (CBS) terminology in your next bank circular."
        }
      ],
      quiz: [
        {
          id: "upi-1-q1",
          question: "What is the primary conceptual definition of a digital bank account in the modern era?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "A physical vault assigned to your name in a branch.", explanation: "Incorrect. Modern banking is almost entirely ledger-based." },
            { id: "opt2", text: "A record in a digital ledger representing a balance of value.", explanation: "Correct. It is an accounting entry in the bank's core system." },
            { id: "opt3", text: "A prepaid card that holds currency notes.", explanation: "Incorrect. That is a wallet or a physical object, not the account structure." }
          ]
        }
      ],
      mythVsFact: [{ myth: "Your money is sitting as cash in the branch where you opened the account.", fact: "Most of a bank's deposits are deployed for loans/investments, with only a fraction held as liquid reserves." }]
    },
    {
      id: 2,
      title: "Governance: RBI & NPCI",
      badge: "L2: Institutional Roles",
      units: [
        {
          id: "upi-2-u1",
          title: "Separation of Powers",
          durationMins: 25,
          whyThisMatters: "Knowing who builds the road vs who drives the bus helps you identify where errors occur.",
          content: "The Indian ecosystem is unique. 1. RBI (Reserve Bank of India) is the Regulator: They set the rules of safety and liquidity. 2. NPCI (National Payments Corporation of India) is the Infrastructure: They built the 'rails' like UPI and IMPS. 3. Banks are the Custodians: They hold your ledger. A UPI payment requires all three layers to be conceptually synchronized.",
          actionableNextStep: "Search for 'NPCI Products' to see the variety of payment rails they manage beyond UPI."
        }
      ],
      quiz: [
        {
          id: "upi-2-q1",
          question: "Which entity is logically responsible for building the underlying software switch that connects different banks for UPI?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "NPCI", explanation: "Correct. NPCI acts as the central hub and infrastructure provider for retail payments in India." },
            { id: "opt2", text: "Individual Local Banks", explanation: "Incorrect. Banks connect to the NPCI switch, but didn't build the central infrastructure." },
            { id: "opt3", text: "The Income Tax Department", explanation: "Incorrect. They track money movement but do not provide payment infrastructure." }
          ]
        }
      ],
      mythVsFact: [{ myth: "NPCI is a government department.", fact: "NPCI is an initiative of the RBI and IBA (Indian Banks' Association), set up as a non-profit company for systemic benefit." }]
    },
    {
      id: 3,
      title: "Sending Money: The Flow",
      badge: "L3: Transaction Lifecycle",
      units: [
        {
          id: "upi-3-u1",
          title: "From Tap to Ledger",
          durationMins: 30,
          whyThisMatters: "Understanding the chain of command explains why some payments hang 'in between'.",
          content: "A digital payment follows a strict logical path: 1. Initiation (You tap pay). 2. Authentication (You enter your PIN). 3. Authorization (Your bank checks your ledger). 4. Switching (NPCI sends the message to the receiver's bank). 5. Credit (The receiver's bank updates their ledger). If any one of these 5 steps times out, the transaction state becomes uncertain.",
          actionableNextStep: "Reflect on a previous 'Pending' payment: At which of the 5 steps did it likely encounter a delay?"
        }
      ],
      quiz: [
        {
          id: "upi-3-q1",
          question: "In the lifecycle of a transaction, what occurs immediately after you successfully enter your PIN?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "The receiver instantly gets the cash in hand.", explanation: "Incorrect. The receiver's ledger is updated later in the sequence." },
            { id: "opt2", text: "The money is sent to a satellite for verification.", explanation: "Incorrect. Verification happens via secure data switches on terrestrial networks." },
            { id: "opt3", text: "The Remitter (Sender) Bank authorizes the debit from the ledger.", explanation: "Correct. The first technical hurdle is the sender's bank confirming available funds." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "UPI Architecture",
      badge: "L4: The 4-Party Model",
      units: [
        {
          id: "upi-4-u1",
          title: "PSP vs Issuer",
          durationMins: 25,
          whyThisMatters: "Most users confuse their 'App' with their 'Bank'.",
          content: "UPI operates on a 4-party logic: 1. The Payer App (PSP - Payment Service Provider). 2. The Payer Bank (Issuer). 3. The NPCI Switch. 4. The Payee Bank (Acquirer). When you use a popular UPI app, it is merely the interface (PSP). It doesn't hold your money; your Bank (Issuer) does. This separation ensures you can switch apps without switching banks.",
          actionableNextStep: "Open your UPI app settings and identify which 'PSP' handle (e.g. @okaxis, @okhdfc) you are using."
        }
      ],
      quiz: [
        {
          id: "upi-4-q1",
          question: "Logically, does a UPI App (like PhonePe or Google Pay) hold your account balance?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, they are digital banks.", explanation: "Incorrect. They are typically PSPs (Apps) that interface with your bank." },
            { id: "opt2", text: "No, they only provide the interface to access your bank ledger.", explanation: "Correct. Your actual money stays with the bank, the app is just the 'remote control'." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "UPI IDs & Virtual Addresses",
      badge: "L5: The Mapping Logic",
      units: [
        {
          id: "upi-5-u1",
          title: "VPAs: Identity without Details",
          durationMins: 20,
          whyThisMatters: "VPAs prevent the need to share sensitive account numbers/IFSC codes.",
          content: "A Virtual Payment Address (VPA) is an alias. Logic: Your bank maps 'user@handle' to 'Account No: 12345'. NPCI maintains this central mapping. When someone sends money to your VPA, the system 'resolves' it into your bank details behind the scenes. This layer of abstraction is the core security feature of UPI.",
          actionableNextStep: "Create a second VPA (alias) for the same bank account to understand the mapping logic."
        }
      ],
      quiz: [
        {
          id: "upi-5-q1",
          question: "What is the primary logical benefit of using a VPA (UPI ID)?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It allows you to receive money without sharing your bank account number.", explanation: "Correct. Abstraction improves privacy and security." },
            { id: "opt2", text: "It makes the money travel faster than normal.", explanation: "Incorrect. Speed is a function of the rail (IMPS/UPI), not the identifier." },
            { id: "opt3", text: "It guarantees the sender is an honest person.", explanation: "Incorrect. A VPA identifies a destination, not the intent of a person." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Success, Pending & Failed",
      badge: "L6: The Status Matrix",
      units: [
        {
          id: "upi-6-u1",
          title: "The 'In-Between' States",
          durationMins: 30,
          whyThisMatters: "Most anxiety comes from not knowing what 'Pending' actually means.",
          content: "1. Success: All ledgers updated. 2. Failed: Transaction rejected (Insufficient funds, wrong PIN). 3. Pending (Timeout): A technical glitch where the Sender Bank debited, but hasn't received a 'Confirm' message from the Payee Bank. Logic: In 'Pending' states, banks use a 'Deemed Approved' or 'Reversal' cycle that usually takes 24-48 hours to resolve via automated reconciliation.",
          actionableNextStep: "Examine a past transaction receipt for the 'RRN' (Retrieval Reference Number) - the unique ID for status checks."
        }
      ],
      quiz: [
        {
          id: "upi-6-q1",
          question: "Scenario: Money is debited from your account, but the status is 'Pending'. What is the most likely technical cause?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Your bank has permanently taken the money.", explanation: "Incorrect. This is against regulatory logic; the money is in a suspense account." },
            { id: "opt2", text: "The receiver has blocked your payment.", explanation: "Incorrect. Blocks usually result in immediate 'Failed' states." },
            { id: "opt3", text: "A communication timeout between the central switch and the receiver's bank.", explanation: "Correct. The message chain was broken, leaving the status unconfirmed." }
          ]
        }
      ],
      mythVsFact: [{ myth: "If a payment is 'Pending', it will always reach the receiver eventually.", fact: "Pending payments can also fail and trigger a reversal to the sender's account during the batch reconciliation." }]
    },
    {
      id: 7,
      title: "Limits & Systemic Stability",
      badge: "L7: Structural Constraints",
      units: [
        {
          id: "upi-7-u1",
          title: "Why You Can't Send Everything",
          durationMins: 25,
          whyThisMatters: "Limits are not 'rules to annoy you'; they are defensive walls for the banking system.",
          content: "RBI and NPCI impose limits: 1. Per Transaction Limit (usually ₹1 Lakh). 2. Daily Aggregate Limit. 3. Velocity Limit (number of transfers per day). Logic: Limits prevent catastrophic losses in case of credential theft and ensure the NPCI switch isn't overwhelmed by high-frequency automated bots. Educational awareness only.",
          actionableNextStep: "Check your specific bank's mobile app for your custom daily transaction limits."
        }
      ],
      quiz: [
        {
          id: "upi-7-q1",
          question: "What is the primary logical reason for 'Daily Transaction Limits' on UPI?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To encourage users to go back to using cash.", explanation: "Incorrect. The ecosystem aims for digitalization." },
            { id: "opt2", text: "To mitigate risk from unauthorized access and ensure system stability.", explanation: "Correct. Limits contain potential damage and manage load." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Reversals vs Chargebacks",
      badge: "L8: Corrective Logic",
      units: [
        {
          id: "upi-8-u1",
          title: "How Errors Resolve",
          durationMins: 30,
          whyThisMatters: "Digital money doesn't just 'disappear'; it is always on a ledger somewhere.",
          content: "1. Auto-Reversal: Triggered when the system detects a timeout error. 2. Chargeback: A formal request to the bank to investigate a transaction (e.g., fraud or non-delivery of service). Logic: Since UPI is a 'Push' system, you cannot 'Pull' money back once sent. Corrections require either the receiver's consent or a formal institutional dispute process. Educational awareness only.",
          actionableNextStep: "Locate the 'Raise Dispute' button in your UPI app to understand the interface logic."
        }
      ],
      quiz: [
        {
          id: "upi-8-q1",
          question: "If you accidentally send money to the wrong person via UPI, can you logically 'Undo' it like a delete button?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, by calling the UPI app support within 5 minutes.", explanation: "Incorrect. Once the ledger is updated at the Payee bank, the transaction is final." },
            { id: "opt2", text: "No, UPI is a 'Push' system and finality is near-instant.", explanation: "Correct. Recovery requires voluntary return or institutional legal processes." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Safety Layers & Fraud Logic",
      badge: "L9: Human vs Technical",
      units: [
        {
          id: "upi-9-u1",
          title: "The PIN Hierarchy",
          durationMins: 20,
          whyThisMatters: "Most 'hacks' are actually social manipulation, not technical breaches.",
          content: "Safety logic: 1. Device Binding (App only works on your SIM/Phone). 2. App Passcode (Locks the app). 3. UPI PIN (Authorizes the ledger debit). Critical awareness: Any request to enter your PIN while 'receiving' money is logically a fraud. You NEVER need a PIN to receive a credit. Educational awareness only.",
          actionableNextStep: "Verify that your primary banking SIM is in a secure, PIN-locked slot."
        }
      ],
      quiz: [
        {
          id: "upi-9-q1",
          question: "A stranger sends you a 'Request Money' link on a UPI app claiming they sent you too much by mistake. What is the logical red flag?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Entering a PIN on a request link will DEBIT your account, not credit it.", explanation: "Correct. This is the #1 rule of UPI safety logic." },
            { id: "opt2", text: "The link should be green, not blue.", explanation: "Incorrect. Colors are not reliable indicators of logical safety." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Reconciliation Lag",
      badge: "L10: Temporal Reality",
      units: [
        {
          id: "upi-10-u1",
          title: "The 24-Hour Settlement Cycle",
          durationMins: 25,
          whyThisMatters: "Understanding why errors take time to fix prevents repetitive calls to support.",
          content: "Why do banks ask for 24-72 hours? Logic: While the *message* of your payment is instant, the actual *settlement* of funds between Bank A and Bank B happens in batches. If an error occurs, the banks must 'reconcile' their records at the end of the day. Only after this batch process can they identify the 'orphaned' funds and trigger a refund. Educational awareness only.",
          actionableNextStep: "Reflect on why real-time systems still need 'End of Day' (EOD) processing."
        }
      ],
      quiz: [
        {
          id: "upi-10-q1",
          question: "Why does a failed UPI transaction conceptually take up to 3-5 business days for a refund in some cases?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The money is traveling physically between branches.", explanation: "Incorrect. All movement is electronic." },
            { id: "opt2", text: "It involves cross-institutional reconciliation and batch processing cycles.", explanation: "Correct. Automated checks across different bank systems take time to finalize." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Payment and Settlement Systems Act, 2007", "NPCI UPI Operating Guidelines"],
    lastReviewedDate: "2024-12-08"
  },
  seo: {
    metaTitle: "Banking & UPI Mechanics India | Monitize Learning",
    metaDescription: "Master the mechanics of Indian banking, RBI/NPCI roles, transaction lifecycles, and UPI security in this 10-level educational track."
  }
};
