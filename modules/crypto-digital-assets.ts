import { LearningModule } from '../types';

export const cryptoDigitalAssetsModule: LearningModule = {
  id: "crypto-digital-assets",
  title: "Crypto & Digital Assets",
  /* Fixed: Added missing category property */
  category: "Markets",
  shortDescription: "Understand how crypto and digital assets function structurally, legally, and technologically — without trading, speculation, or investment advice.",
  detailedDescription: "A technical deconstruction of the Virtual Digital Asset (VDA) ecosystem. This module explains blockchain ledger mechanics, the legal classification of tokens in India, the structural risks of self-custody, and the statutory tax framework. Educational awareness only. This module does not provide crypto, investment, tax, or financial advice.",
  learningObjectives: [
    "Define crypto assets as digital ledger entries (VDA)",
    "Understand blockchain as a distributed ledger protocol",
    "Identify the difference between crypto, tokens, and NFTs",
    "Distinguish between sovereign currency and private tokens",
    "Recognize the irreversibility logic of decentralized transactions",
    "Understand the risks of private key custody and seed phrases",
    "Identify the absence of intrinsic cash flow in most tokens",
    "Understand the regulatory definition of VDA in the Indian Finance Act",
    "Identify the 30% tax and 1% TDS statutory framework in India",
    "Recognize the role of FIU-registered exchanges vs. offshore platforms",
    "Identify common scam patterns: Rug Pulls and Phishing",
    "Understand why losses in digital assets are typically permanent",
    "Differentiate between technology adoption and financial speculation",
    "Grasp the concept of stablecoins and their underlying dependencies",
    "Build a framework for identifying marketing hyperbole and 'shilling'"
  ],
  estimatedEffort: "Deep",
  iconName: "Zap",
  levels: [
    {
      id: 1,
      title: "What Are Crypto & Digital Assets",
      badge: "Level 1: Foundational Logic",
      units: [
        {
          id: "cda-1-u1",
          title: "Entries on a Shared Ledger",
          durationMins: 25,
          whyThisMatters: "Thinking of crypto as 'money' obscures its structural nature as a database entry.",
          content: "In structural logic, a crypto asset is not a physical object or a traditional file. It is an entry on a distributed digital ledger. In India, these are legally termed 'Virtual Digital Assets' (VDA). They represent a claim on a digital record that is managed by a network rather than a single central authority like a bank. Educational awareness only. This module does not provide crypto, investment, tax, or financial advice.",
          actionableNextStep: "Reflect on how a digital entry (like a loyalty point) differs from a sovereign currency note."
        }
      ],
      quiz: [
        {
          id: "cda-q1-1",
          question: "Technically, what does 'owning' a crypto asset represent?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Possessing a digital image file on your phone.", explanation: "Incorrect. The asset exists on the ledger, not as a local file." },
            { id: "opt2", text: "Having the private key that controls a specific record on a distributed ledger.", explanation: "Correct. Ownership is defined by cryptographic control over a ledger entry." },
            { id: "opt3", text: "A contract with the government for future payment.", explanation: "Incorrect. Private crypto assets are not sovereign obligations." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Blockchain Explained Without Hype",
      badge: "Level 2: Infrastructure",
      units: [
        {
          id: "cda-2-u1",
          title: "The Immutable Database",
          durationMins: 30,
          whyThisMatters: "Blockchain is the technology; crypto is just one application of it.",
          content: "Blockchain is a type of database where data is stored in 'blocks' that are cryptographically linked. Logic: 1. Distributed: Copy of the ledger exists on many computers. 2. Consensus: The network must agree before a new entry is added. 3. Immutable: Once added, entries cannot be deleted or edited. This creates a high-integrity record system, but it also means errors (like sending to the wrong address) are permanent. Educational awareness only.",
          actionableNextStep: "Reflect on the 'Public Glass Box' analogy: everyone can see the transactions, but no one can erase them."
        }
      ],
      quiz: [
        {
          id: "cda-q2-1",
          question: "What is the logical consequence of blockchain 'Immutability'?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Transactions cannot be reversed or edited once confirmed.", explanation: "Correct. This is a foundational structural rule of the technology." },
            { id: "opt2", text: "The price of the asset is guaranteed to never drop.", explanation: "Incorrect. Immutability refers to data persistence, not market value." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Crypto vs Currency vs Securities",
      badge: "Level 3: Legal Taxonomy",
      units: [
        {
          id: "cda-3-u1",
          title: "The Classification Gap",
          durationMins: 25,
          whyThisMatters: "Confusing tokens with 'legal tender' leads to major regulatory risks.",
          content: "• Currency: Issued by RBI (Fiat). It is legal tender for debt settlement. • Securities: Represent ownership in a business (Stocks). • Crypto: In India, these are 'Virtual Digital Assets'. They are NOT legal tender. They do not represent a claim on a company's assets unless structured as a 'security token'. Logic: Most crypto assets are inert digital commodities with no underlying guarantee from any sovereign or business entity. Educational awareness only.",
          actionableNextStep: "Check the RBI website to see the distinction between the E-Rupee (CBDC) and private crypto assets."
        }
      ],
      quiz: [
        {
          id: "cda-q3-1",
          question: "Is Bitcoin or Ethereum considered 'Legal Tender' in India?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, because the government taxes them.", explanation: "Incorrect. Taxation does not imply the status of legal tender." },
            { id: "opt2", text: "No, they are classified as VDAs and cannot be used to legally settle sovereign debts.", explanation: "Correct. Only the RBI-issued Rupee is legal tender in India." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Tokens, Coins & NFTs — Structural Differences",
      badge: "Level 4: Asset Classes",
      units: [
        {
          id: "cda-4-u1",
          title: "Fungibility and Protocols",
          durationMins: 30,
          whyThisMatters: "Different tokens have completely different technical utilities.",
          content: "• Coins (Native): Exist on their own blockchain (e.g., BTC, ETH). • Tokens: Exist on top of an existing blockchain (e.g., ERC-20 tokens). • NFTs (Non-Fungible Tokens): Unique digital identifiers that are not interchangeable. Logic: One Rupee is always equal to another (Fungible). One unique painting is not equal to another (Non-Fungible). NFTs apply the 'unique identifier' logic to ledger entries. Educational awareness only.",
          actionableNextStep: "Search for the term 'Fungibility' to understand why it's the core of most financial systems."
        }
      ],
      quiz: [
        {
          id: "cda-q4-1",
          question: "What is the primary logical difference between a standard crypto token and an NFT?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "NFTs are more expensive.", explanation: "Incorrect. Price is a market outcome, not a structural difference." },
            { id: "opt2", text: "Tokens are only for businesses.", explanation: "Incorrect." },
            { id: "opt3", text: "Tokens are interchangeable (fungible); NFTs are unique (non-fungible).", explanation: "Correct. This is the technical differentiator of the NFT protocol." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Custody, Wallets & Irreversibility",
      badge: "Level 5: Responsibility",
      units: [
        {
          id: "cda-5-u1",
          title: "Private Key Sovereignty",
          durationMins: 30,
          whyThisMatters: "In crypto, losing your password is not like losing your bank password.",
          content: "Your 'Wallet' is an interface to your Private Key (or Seed Phrase). Logic: 1. Self-Custody: You hold the keys. If you lose them, the assets are gone forever. No support desk can help. 2. Exchange Custody: The exchange holds the keys. You trust them to keep your assets safe. 3. Irreversibility: Once a transaction is broadcast to the network, it cannot be stopped or pulled back. You are your own vault manager. Educational awareness only.",
          actionableNextStep: "Research the phrase 'Not your keys, not your coins' to understand the custody logic shift."
        }
      ],
      quiz: [
        {
          id: "cda-q5-1",
          question: "What happens if you lose the 12-word seed phrase to a self-custody wallet?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Access to the assets is lost permanently and cannot be recovered.", explanation: "Correct. In a decentralized system, the seed phrase is the only mathematical proof of ownership." },
            { id: "opt2", text: "The wallet company resets it after a KYC check.", explanation: "Incorrect. In true self-custody, there is no company with access to your keys." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Volatility & Absence of Intrinsic Value",
      badge: "Level 6: Economic Nature",
      units: [
        {
          id: "cda-6-u1",
          title: "The Zero-Yield Reality",
          durationMins: 25,
          whyThisMatters: "Most crypto assets do not produce income like businesses or bonds.",
          content: "Unlike a company (which earns profits) or a bond (which pays interest), most crypto tokens produce nothing internally. Their price is driven purely by the 'Secondary Market'—what the next person is willing to pay. This leads to extreme volatility. Logic: Without an 'Economic Anchor' like quarterly earnings, the value is entirely based on liquidity and sentiment. Risk of 100% loss is a structural reality. Educational awareness only.",
          actionableNextStep: "Compare the 'Value Floor' of a house (rent) with the 'Value Floor' of a digital token."
        }
      ],
      quiz: [
        {
          id: "cda-q6-1",
          question: "Why do crypto assets typically exhibit much higher volatility than blue-chip stocks?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because they are newer.", explanation: "Incorrect. Age is a factor, but not the primary structural reason." },
            { id: "opt2", text: "They lack intrinsic cash flows (dividends/profits) to act as a mathematical value floor.", explanation: "Correct. Without internal earnings, the price is anchored only to external demand." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Regulation & Legal Position in India",
      badge: "Level 7: Statutory Framework",
      units: [
        {
          id: "cda-7-u1",
          title: "VDA and PMLA",
          durationMins: 30,
          whyThisMatters: "Ignoring the legal status of crypto in India leads to compliance failure.",
          content: "Currently, India classifies crypto as Virtual Digital Assets (VDA). They are brought under the Prevention of Money Laundering Act (PMLA). Logic: 1. FIU Registration: Indian exchanges must register with the Financial Intelligence Unit. 2. KYC: Mandatory identification of all participants. 3. Reporting: High-value transactions are monitored. The government has explicitly stated that 'Regulation' does not imply 'Legality as Currency'. Educational awareness only.",
          actionableNextStep: "Check if your chosen platform is registered with the FIU-India (Financial Intelligence Unit)."
        }
      ],
      quiz: [
        {
          id: "cda-q7-1",
          question: "Does the fact that the Indian government taxes crypto imply that it is an 'authorized' or 'safe' asset?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, taxation equals government approval.", explanation: "Incorrect. Taxation is a statutory requirement on income, not an endorsement of the asset." },
            { id: "opt2", text: "No, taxation and legality/regulation are separate logical frameworks.", explanation: "Correct. The government can tax any income regardless of the underlying asset's regulatory status." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Tax Treatment Overview (Awareness Only)",
      badge: "Level 8: Statutory Costs",
      units: [
        {
          id: "cda-8-u1",
          title: "30% Tax and 1% TDS",
          durationMins: 25,
          whyThisMatters: "Tax on crypto in India is significantly higher than on other asset classes.",
          content: "The Income Tax Act (Section 115BBH) applies a flat 30% tax on any income from the transfer of VDA. Crucially: 1. No deduction of expenses (except cost of acquisition). 2. No set-off of losses in one token against gains in another. 3. 1% TDS on every transaction to track the digital trail. Logic: The system creates high 'Friction Costs' for VDA participants. Educational awareness only. This module does not provide tax advice.",
          actionableNextStep: "Calculate the net tax on a gain of ₹100 and a loss of ₹100 under current Indian VDA rules (spoiler: you still owe tax)."
        }
      ],
      quiz: [
        {
          id: "cda-q8-1",
          question: "Under current Indian VDA tax logic, can you use a loss in Bitcoin to reduce the tax on a profit in Ethereum?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, just like stocks.", explanation: "Incorrect. VDA tax rules specifically prohibit the set-off of losses across tokens." },
            { id: "opt2", text: "No, losses in one VDA cannot be set off against gains in another.", explanation: "Correct. This is a unique and high-cost structural rule for digital assets in India." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Scams, Rug Pulls & Social Media Traps",
      badge: "Level 9: Defensive Logic",
      units: [
        {
          id: "cda-9-u1",
          title: "Spotting Digital Deception",
          durationMins: 25,
          whyThisMatters: "In a world of irreversibility, the only defense is early detection.",
          content: "Common Scam Logic: 1. Rug Pull: Developers hype a token, then drain the liquidity and vanish. 2. Phishing: Scammers ask for your 'Seed Phrase' to fix a technical error. 3. Shilling: Unpaid or undisclosed promotions by celebrities/influencers. 4. Ponzi Yields: Promises of 'guaranteed' 20% monthly returns. Logic: If the code is not verified or the yield is magical, the risk is likely 100%. Educational awareness only.",
          actionableNextStep: "Recall the 'Sovereign Guarantee' on bank deposits and note its total absence in private token protocols."
        }
      ],
      quiz: [
        {
          id: "cda-q9-1",
          question: "What is a 'Rug Pull' in the crypto ecosystem?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "When project creators drain all funds and disappear, leaving tokens worthless.", explanation: "Correct. This is a common form of exit fraud in unregulated token markets." },
            { id: "opt2", text: "When a blockchain gets too heavy to process.", explanation: "Incorrect. That is a scaling issue." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Common Myths & Dangerous Assumptions",
      badge: "Level 10: Final Framework",
      units: [
        {
          id: "cda-10-u1",
          title: "The Maturity Pledge",
          durationMins: 20,
          whyThisMatters: "Mastery means moving from hype to structural reality.",
          content: "Myth 1: 'Crypto is a safe haven like gold.' Reality: Crypto is highly correlated with risky tech stocks and has no long-term history. Myth 2: 'It's the future of money.' Reality: It is a technology for digital records; sovereign money (CBDCs) is the actual future of digital tender. Final Framework: 1. Verify Custody. 2. Recognize Zero Yield. 3. Plan for 30% Tax. 4. Use for Utility, not Speculation. Educational awareness only. This module does not provide crypto, investment, tax, or financial advice.",
          actionableNextStep: "Draft a 'Refusal Checklist'—what triggers will make you say 'No' to a new token claim?"
        }
      ],
      quiz: [
        {
          id: "cda-q10-1",
          question: "What is the ultimate goal of achieving digital asset literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To find the next 'moon' token early.", explanation: "Incorrect. Speculation is not the goal of literacy." },
            { id: "opt2", text: "To understand the structural risks, technical limits, and legal realities of the ecosystem.", explanation: "Correct. Literacy provides the defensive logic needed to navigate a high-risk environment." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Finance Act 2022 (VDA)", "PMLA 2002", "RBI Circulars on Virtual Currencies"],
    lastReviewedDate: "2025-01-30"
  },
  seo: {
    metaTitle: "Crypto & Digital Assets Literacy India | Monitize",
    metaDescription: "Master the structural logic of crypto assets, blockchain mechanics, VDA taxation in India, and the risks of self-custody."
  }
};
