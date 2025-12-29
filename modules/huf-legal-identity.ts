import { LearningModule } from '../types';

export const hufLegalIdentityModule: LearningModule = {
  id: "huf-legal-identity",
  title: "HUF Legal Identity",
  /* Fixed: Added missing category property */
  category: "Personal",
  shortDescription: "Understand the Hindu Undivided Family as a legal and financial identity, including its formation logic, governance structure, and common misconceptions.",
  detailedDescription: "A comprehensive roadmap to understanding the Hindu Undivided Family (HUF) as a distinct legal 'person' in the Indian financial system. This module deconstructs the conceptual boundaries between family membership and legal coparcenary, management by the Karta, and the structural logic of ancestral property. Educational awareness only. This module does not provide legal, tax, or advisory guidance.",
  learningObjectives: [
    "Identify an HUF as a 'Legal Fiction' distinct from its individual members",
    "Understand the logical difference between Individual and HUF identifiers",
    "Grasp the requirements for forming an HUF conceptually",
    "Distinguish between Coparceners (those with birthright) and Members",
    "Identify the fiduciary role and liabilities of the Karta",
    "Understand the logic of HUF property acquisition (Ancestral vs. Gifts)",
    "Recognize income attribution principles and 'Clubbing' concepts",
    "Define 'Partition' and its conceptual impact on legal identity",
    "Identify common myths regarding HUF as a loophole",
    "Understand the risks of misuse and the importance of genuine intent",
    "Build a framework for when an HUF structure logically applies"
  ],
  estimatedEffort: "Deep",
  iconName: "Scale",
  levels: [
    {
      id: 1,
      title: "What Is an HUF?",
      badge: "L1: Conceptual Identity",
      units: [
        {
          id: "h1u1",
          title: "The Legal Fiction",
          durationMins: 20,
          whyThisMatters: "An HUF is treated as a separate 'person' by the tax department.",
          content: "In the Indian legal landscape, a Hindu Undivided Family (HUF) is a 'Legal Person'. It is not a company, yet it has its own PAN and bank accounts. Logically, it is a recognition of the collective economic identity of a family. An HUF consists of all persons lineally descended from a common ancestor, and includes their wives and daughters. It is born of status, not of contract. Educational awareness only.",
          actionableNextStep: "Reflect on whether your family currently holds any assets collectively (like ancestral land)."
        }
      ],
      quiz: [
        {
          id: "hq1",
          question: "How is an HUF primarily viewed by the Indian Income Tax Department?",
          correctOptionId: "ho2",
          options: [
            { id: "ho1", text: "As a branch of a private limited company.", explanation: "Incorrect. HUF is a distinct entity based on personal law, not the Companies Act." },
            { id: "ho2", text: "As a separate 'person' or legal entity distinct from its members.", explanation: "Correct. It is treated as an independent taxable unit with its own PAN." },
            { id: "ho3", text: "As a casual club for family members.", explanation: "Incorrect. While it involves family, it has a formal statutory identity." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Individual vs. HUF",
      badge: "L2: Identity Logic",
      units: [
        {
          id: "h2u1",
          title: "The Separation Principle",
          durationMins: 20,
          whyThisMatters: "Mixing individual and HUF funds can lead to legal complexity.",
          content: "Logic: Person A is an individual. HUF A is a family entity where Person A might be the manager. Even though the same human is involved, the 'Wallets' are different. An HUF has its own income heads and follows its own slab-based logic. It is a separate 'Tax Unit' entirely. This separation allows for structured family wealth management. Educational awareness only.",
          actionableNextStep: "Check if you have any bank accounts where you are the 'Authorised Signatory' for a different legal entity."
        }
      ],
      quiz: [
        {
          id: "hq2",
          question: "Can an individual and their HUF have two different PAN cards?",
          correctOptionId: "ho1",
          options: [
            { id: "ho1", text: "Yes, because they are separate legal identities.", explanation: "Correct. Since they are different 'persons' in the eyes of the law, they require distinct identifiers." },
            { id: "ho2", text: "No, one human can only have one identity.", explanation: "Incorrect. A human can represent multiple legal identities (Self, Director, Karta)." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Coparceners & Members",
      badge: "L3: Rights Hierarchy",
      units: [
        {
          id: "h3u1",
          title: "Birthright vs. Membership",
          durationMins: 25,
          whyThisMatters: "Not everyone in the HUF has a legal claim to demand partition.",
          content: "1. Coparcener: Someone who has a birthright to the HUF property. This includes sons and daughters (per 2005 amendments). They can demand 'Partition' (splitting the assets). 2. Member: Someone who is part of the HUF but lacks birthright to ancestral property (e.g., wives who marry into the family). They have a right to maintenance but cannot logically demand a split. Educational awareness only.",
          actionableNextStep: "Map your immediate family tree and identify who would be a 'Coparcener' by birth."
        }
      ],
      quiz: [
        {
          id: "hq3",
          question: "What is the primary logical differentiator of a 'Coparcener'?",
          correctOptionId: "ho3",
          options: [
            { id: "ho1", text: "They earn the highest salary in the family.", explanation: "Incorrect. Personal income is irrelevant to HUF status." },
            { id: "ho2", text: "They are the only ones allowed to use the bank account.", explanation: "Incorrect. Account usage is a matter of management/Karta authority." },
            { id: "ho3", text: "They have a legal birthright to the family assets and can demand partition.", explanation: "Correct. This birthright is the core of coparcenary logic." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "The Karta",
      badge: "L4: Governance Role",
      units: [
        {
          id: "h4u1",
          title: "Management and Liability",
          durationMins: 25,
          whyThisMatters: "The Karta has near-absolute power, but also high responsibility.",
          content: "The Karta is typically the eldest coparcener and acts as the manager of the HUF. Logic: The Karta can enter into contracts, manage property, and represent the family in court. However, their powers are fiduciary—meaning they must act in the interest of all members. If a Karta acts recklessly, they may be personally liable to other members for the loss of HUF capital. Educational awareness only.",
          actionableNextStep: "Reflect on who in a multi-generational structure is naturally positioned for the 'ELD' (Eldest) role."
        }
      ],
      quiz: [
        {
          id: "hq4",
          question: "Can a female coparcener be the Karta of an HUF according to current legal logic?",
          correctOptionId: "ho1",
          options: [
            { id: "ho1", text: "Yes, recent judicial interpretations allow the eldest female coparcener to be Karta.", explanation: "Correct. Modern Indian law has evolved to recognize gender-neutral leadership in HUFs." },
            { id: "ho2", text: "No, only men can manage family property.", explanation: "Incorrect. This is an outdated myth; gender equality has been integrated into HUF logic." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "HUF Property Logic",
      badge: "L5: Asset Origins",
      units: [
        {
          id: "h5u1",
          title: "Ancestral vs. Individual Inflow",
          durationMins: 30,
          whyThisMatters: "You cannot simply put your salary into an HUF to 'hide' it.",
          content: "Property in an HUF can come from: 1. Ancestral property (inherited from three generations of male ancestors). 2. Gifts to the HUF as a unit. 3. Property created by the HUF's own investments. Logic: An individual cannot 'Throw' their own earned income into the HUF just to avoid tax (Clubbing provisions). The HUF must have its own 'Common Pool' origin. Educational awareness only.",
          actionableNextStep: "Identify the 'Source' of any asset you believe belongs to your family unit."
        }
      ],
      quiz: [
        {
          id: "hq5",
          question: "If you 'Gift' your own salary income to your HUF, what occurs logically for tax awareness?",
          correctOptionId: "ho2",
          options: [
            { id: "ho1", text: "The money becomes tax-free for everyone.", explanation: "Incorrect. There is no magic eraser for tax on earned income." },
            { id: "ho2", text: "The income is 'Clubbed' back to the individual who earned it.", explanation: "Correct. Anti-avoidance logic prevents simple shifting of personal earnings to another unit." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Income Separation",
      badge: "L6: Attribution Logic",
      units: [
        {
          id: "h6u1",
          title: "Heads of HUF Income",
          durationMins: 25,
          whyThisMatters: "HUF can earn from property or business, but NOT from 'Salary'.",
          content: "An HUF can earn income from: • House Property (Rent). • Business/Profession (if the business is family-owned). • Capital Gains (Sale of assets). • Other Sources (Dividends/Interest). Critical Logic: An HUF CANNOT have 'Salary' income, because salary is earned by an individual's personal skill and labor, not by a family unit. Educational awareness only.",
          actionableNextStep: "Categorize your family's rental income—does it belong to individuals or the common pool?"
        }
      ],
      quiz: [
        {
          id: "hq6",
          question: "Which Head of Income is logically impossible for an HUF to have?",
          correctOptionId: "ho1",
          options: [
            { id: "ho1", text: "Income from Salary.", explanation: "Correct. Salary is personal and linked to individual labor, which an entity cannot perform." },
            { id: "ho2", text: "Capital Gains.", explanation: "Incorrect. HUFs frequently buy and sell property or shares." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "The Partition",
      badge: "L7: Dissolution Logic",
      units: [
        {
          id: "h7u1",
          title: "Total vs. Partial Split",
          durationMins: 30,
          whyThisMatters: "Partition is the point where the 'Legal Fiction' ends or changes.",
          content: "Partition is the splitting of the HUF. 1. Total Partition: Every asset is divided among coparceners and the HUF ceases to exist as a tax unit. 2. Partial Partition: Not recognized for tax purposes in many scenarios (since 1978). Logic: The system prefers the HUF to remain whole or be completely split to prevent fragmented data-reporting. Partition leads to the crystallization of individual ownership. Educational awareness only.",
          actionableNextStep: "Research the term 'Mete and Bounds' to see how physical split differs from verbal split."
        }
      ],
      quiz: [
        {
          id: "hq7",
          question: "What happens to the HUF entity after a 'Total Partition'?",
          correctOptionId: "ho2",
          options: [
            { id: "ho1", text: "It doubles in size.", explanation: "Incorrect. Partition is a split, not a growth event." },
            { id: "ho2", text: "It ceases to exist as a separate legal/tax unit.", explanation: "Correct. Once all assets are divided, the 'common pool' identity is resolved." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Myths & Abuse",
      badge: "L8: Behavioral Shield",
      units: [
        {
          id: "h8u1",
          title: "HUF Is Not a Loophole",
          durationMins: 25,
          whyThisMatters: "Misusing an HUF can lead to high-intensity scrutiny.",
          content: "Common Myths: • 'HUF is a secret way to save 30% tax.' Reality: HUF has its own costs and requires genuine family assets. • 'I can create an HUF with just myself.' Reality: An HUF requires a family (at least two members). Logic: The department looks for 'Substance over Form'. If there is no real family pool, the identity is logically vulnerable to challenge. Educational awareness only.",
          actionableNextStep: "Verify if your understanding of HUF was based on a 'Trick' or a 'Structure'."
        }
      ],
      quiz: [
        {
          id: "hq8",
          question: "What is the primary risk of creating a 'Paper-Only' HUF with no real family assets?",
          correctOptionId: "ho1",
          options: [
            { id: "ho1", text: "Scrutiny and rejection of the entity's tax logic due to lack of substance.", explanation: "Correct. Regulators track 'Sham' entities that exist only to shift income." },
            { id: "ho2", text: "The family will forget each other's names.", explanation: "Incorrect. This is a personal matter, not a regulatory risk." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "When HUF Makes Sense",
      badge: "L9: Strategic Maturity",
      units: [
        {
          id: "h9u1",
          title: "The Logic of Continuity",
          durationMins: 20,
          whyThisMatters: "Building a structure requires a 50-year vision.",
          content: "An HUF logically makes sense when: 1. There are ancestral properties that are hard to divide physically. 2. The family intends to grow a generational business pool. 3. There is a desire for professional governance of family wealth. Completing this track means you now understand the 'Why' and 'Who' of an HUF. Educational awareness only. This module does not provide legal, tax, or advisory guidance.",
          actionableNextStep: "Prepare a list of family-owned assets and ask: 'Who is the logical owner: the Individual or the Unit?'"
        }
      ],
      quiz: [
        {
          id: "hq9",
          question: "What is the ultimate goal of achieving HUF literacy?",
          correctOptionId: "ho2",
          options: [
            { id: "ho1", text: "To become a legal expert in ancient scriptures.", explanation: "Incorrect. This is for modern financial participation." },
            { id: "ho2", text: "To understand the structural utility and responsibilities of family-based legal identities.", explanation: "Correct. Literacy provides the confidence to manage family wealth logically and responsibly." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Hindu Succession Act 1956", "Income Tax Act 1961 (Section 2(31))"],
    lastReviewedDate: "2025-01-10"
  },
  seo: {
    metaTitle: "HUF Legal Identity India | Monitize Learning",
    metaDescription: "Master the logic of Hindu Undivided Family structures. Learn about coparceners, Karta roles, and HUF property rules in India."
  }
};
