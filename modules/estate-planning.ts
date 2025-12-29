import { LearningModule } from '../types';

export const estatePlanningModule: LearningModule = {
  id: "estate-planning",
  title: "Estate & Transmission",
  /* Fixed: Added missing category property */
  category: "Personal",
  shortDescription: "Understand the logical flow of asset transmission, the role of nominations, and the structural purpose of Wills in India.",
  detailedDescription: "A comprehensive 12-level track deconstructing the mechanics of financial and legal succession. This module explains the conceptual transition of ownership, the operational utility of nominations, and the institutional logic of inheritance laws in India. Educational awareness only. This module does not provide legal, tax, or advisory guidance.",
  learningObjectives: [
    "Identify the foundational purpose of estate planning as a friction-reduction tool",
    "Understand the logical mechanism of 'Nomination' in financial accounts",
    "Grasp the critical distinction between a 'Nominee' and a 'Legal Heir'",
    "Recognize the structural intent and necessity of a 'Will'",
    "Understand the 'Default Logic' of Intestate Succession for different communities",
    "Identify the verification purpose of 'Probate' and 'Succession Certificates'",
    "Grasp the logic of joint ownership as a transmission shortcut",
    "Understand the conceptual role of a 'Trust' in separating ownership and benefit",
    "Identify common behavioral barriers to legacy planning",
    "Recognize asset-specific transmission nuances (Real Estate vs. Digital Assets)",
    "Build a framework for identifying which professional (Lawyer/CA) is needed",
    "Develop a long-term mindset for responsible asset stewardship"
  ],
  estimatedEffort: "Deep",
  iconName: "Scale",
  levels: [
    {
      id: 1,
      title: "The Logic of Continuity",
      badge: "L1: Foundational Intent",
      units: [
        {
          id: "ep-1-u1",
          title: "Removing Friction for Survivors",
          durationMins: 20,
          whyThisMatters: "Estate planning is not about the person leaving, but about the people staying.",
          content: "In financial logic, estate planning is a 'Continuity Framework'. Without it, assets become 'locked' in the system upon the death of the holder. The goal is to ensure that the transition of ownership from one generation to the next happens with the least amount of legal friction and administrative delay. It is an act of administrative empathy for survivors.",
          actionableNextStep: "Reflect on how much time your family would need to spend in courts/banks if you were unable to manage your accounts tomorrow."
        }
      ],
      quiz: [
        {
          id: "ep-1-q1",
          question: "What is the primary logical objective of a well-structured estate plan?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To avoid paying any taxes whatsoever.", explanation: "Incorrect. While tax efficiency is a byproduct, the primary goal is structured transition." },
            { id: "opt2", text: "To ensure a smooth, low-friction transition of assets to the intended beneficiaries.", explanation: "Correct. Reducing administrative burden for survivors is the core intent." },
            { id: "opt3", text: "To prove that the individual was wealthy.", explanation: "Incorrect. Estate planning is a procedural requirement, not a social signal." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Nomination Logic",
      badge: "L2: The Operational Bridge",
      units: [
        {
          id: "ep-2-u1",
          title: "The Stop-Gap Mechanism",
          durationMins: 25,
          whyThisMatters: "Nomination is the 'Fast-Track' for banks to release funds.",
          content: "A nomination is an operational instruction given to a financial institution (Bank, MF, Insurance). Its logic is simple: 'In my absence, please hand over these resources to this specific person.' It prevents the institution from holding the funds until a court order is produced. However, nomination is an administrative tool, not a final ownership declaration. Educational awareness only.",
          actionableNextStep: "Identify which of your primary bank accounts or demat accounts currently lack a registered nominee."
        }
      ],
      quiz: [
        {
          id: "ep-2-q1",
          question: "Why do financial institutions insist on having a nominee registered?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "To have a clear point of contact to whom they can discharge their responsibility without court intervention.", explanation: "Correct. Nomination allows for immediate operational discharge of the asset." },
            { id: "opt2", text: "Because the nominee becomes the absolute owner of the money immediately.", explanation: "Incorrect. The nominee's role in ownership is more nuanced, as explored in the next level." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Nominee vs. Legal Heir",
      badge: "L3: The Great Distinction",
      units: [
        {
          id: "ep-3-u1",
          title: "Trustee vs. Owner",
          durationMins: 30,
          whyThisMatters: "This is the most common legal misunderstanding in Indian personal finance.",
          content: "Logical Rule: In most Indian financial assets, a Nominee is merely a 'Trustee' or a 'Caretaker'. They receive the money from the bank, but they are legally obligated to hand it over to the 'Legal Heirs' defined in a Will or by succession laws. The only major exception conceptually is Shares/Demat (under specific Companies Act logic) and Life Insurance (Beneficiary Nominees), though even these are subject to evolving legal interpretations.",
          actionableNextStep: "Verify if your intended 'Beneficiaries' (those who should keep the money) are the same as your 'Nominees' (those who will receive it from the bank)."
        }
      ],
      quiz: [
        {
          id: "ep-3-q1",
          question: "In standard banking logic, does a nominee have a right to keep the money for themselves if there are other legal heirs?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Yes, once the bank pays the nominee, the matter is closed.", explanation: "Incorrect. The bank is discharged, but the nominee remains accountable to the heirs." },
            { id: "opt2", text: "No, they usually hold the money in trust for the rightful legal heirs.", explanation: "Correct. Legal heirs retain the ultimate claim to ownership unless specified otherwise by law or a Will." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "The Purpose of a Will",
      badge: "L4: Structural Intent",
      units: [
        {
          id: "ep-4-u1",
          title: "Overriding the Default",
          durationMins: 25,
          whyThisMatters: "If you don't write a Will, the government's 'Default Logic' applies.",
          content: "A Will is a legal declaration of your intent. Its primary logical function is to 'override' the standard succession laws. If you want a specific asset to go to a specific person (who might not be a natural heir), a Will is the only structural way to ensure that intent is recognized. It is a 'Control Mechanism' for your legacy. Educational awareness only.",
          actionableNextStep: "List all your assets and identify if you have any 'non-standard' distribution wishes (e.g., charity, specific friends, or unequal splits)."
        }
      ],
      quiz: [
        {
          id: "ep-4-q1",
          question: "What is the primary logical utility of a Will?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "To prevent the bank from charging fees.", explanation: "Incorrect. Wills do not impact bank fee structures." },
            { id: "opt2", text: "To make the probate process much longer.", explanation: "Incorrect. A clear Will often simplifies the transition process." },
            { id: "opt3", text: "To specify an asset distribution that differs from default succession laws.", explanation: "Correct. A Will allows for personalized distribution logic." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Intestate Succession",
      badge: "L5: The Default Path",
      units: [
        {
          id: "ep-5-u1",
          title: "Logic When No Will Exists",
          durationMins: 30,
          whyThisMatters: "Succession laws in India are community-specific (Hindu, Muslim, Christian).",
          content: "When someone dies 'Intestate' (without a Will), the law applies a 'Default Logic'. For Hindus, Sikhs, Jains, and Buddhists, the Hindu Succession Act defines 'Class I Heirs' (Spouse, Children, Mother) who share the estate equally. If no Class I heirs exist, it moves to Class II. The logic is strictly hierarchical and does not account for personal relationships or dependency. Educational awareness only.",
          actionableNextStep: "Search for the 'Class I Heirs' list under the Hindu Succession Act to see the default beneficiaries for your community."
        }
      ],
      quiz: [
        {
          id: "ep-5-q1",
          question: "If a person dies without a Will, how is their estate distributed logically?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "According to the fixed hierarchy defined in the personal succession laws of their community.", explanation: "Correct. The law provides a rigid default framework when no personal intent is documented." },
            { id: "opt2", text: "The government takes all the assets immediately.", explanation: "Incorrect. 'Escheat' (government takeover) only happens if no heirs can be found whatsoever." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Verification Logic",
      badge: "L6: Probate & Certificates",
      units: [
        {
          id: "ep-6-u1",
          title: "Proving the Paper",
          durationMins: 25,
          whyThisMatters: "Having a Will is not enough; the system must often 'Validate' it.",
          content: "1. Probate: A court process to certify that a Will is genuine. Logically, it is the 'Final Seal' of authenticity. It is mandatory in some Indian cities (Mumbai, Chennai, Kolkata) for specific types of property. 2. Succession Certificate: Used for movable assets (Bank accounts, FDs) when there is no Will. It provides an institutional 'Clearance' for the heirs to claim the funds. Logic: These processes are the 'Quality Control' layers of the law.",
          actionableNextStep: "Check if your primary residence is located in a jurisdiction where Probate is a standard requirement for transmission."
        }
      ],
      quiz: [
        {
          id: "ep-6-q1",
          question: "What is 'Probate' conceptually in the Indian legal framework?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "A tax paid to the court based on the Will's value.", explanation: "Incorrect. While court fees exist, Probate is a process of certification, not just a tax." },
            { id: "opt2", text: "A court-certified validation that a Will is authentic and final.", explanation: "Correct. It is the system's way of verifying the document's logic." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Asset-Specific Flow",
      badge: "L7: Specialized Logic",
      units: [
        {
          id: "ep-7-u1",
          title: "Bank vs. Demat vs. Property",
          durationMins: 30,
          whyThisMatters: "Different assets move through different administrative 'channels'.",
          content: "Logic: Movable assets (Bank balances) are usually the easiest to transmit via nomination. Semi-movable assets (Demat shares) follow SEBI and Depository rules, where a nominee often has a stronger immediate claim. Immovable assets (Real Estate) are the most complex, requiring registration of the new owner in the 'Land Records' (Mutation), usually based on a Will or a Succession Certificate. Awareness: Transmission is not a 'One-Click' event.",
          actionableNextStep: "Locate the 'Mutation' process requirements for property in your local municipal corporation's website."
        }
      ],
      quiz: [
        {
          id: "ep-7-q1",
          question: "Which type of asset transmission typically requires a 'Mutation' process in government records?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Real Estate (Land or Buildings).", explanation: "Correct. Mutation is the process of updating ownership in the revenue records." },
            { id: "opt2", text: "Savings Bank Balance.", explanation: "Incorrect. Banks use internal forms for transmission." },
            { id: "opt3", text: "Fixed Deposits.", explanation: "Incorrect. FDs follow banking/nomination logic." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Joint Ownership Logic",
      badge: "L8: The Shortcut",
      units: [
        {
          id: "ep-8-u1",
          title: "Either or Survivor (E or S)",
          durationMins: 20,
          whyThisMatters: "Joint ownership is often the most effective 'Estate Plan' for simple family needs.",
          content: "In bank accounts and properties, 'Joint Ownership' with an 'Either or Survivor' clause allows the surviving holder to continue managing the asset seamlessly. Logic: The asset doesn't need to 'pass' to the survivor; they are already an owner. This bypasses the need for nomination or succession certificates for immediate operational needs. However, it does not necessarily solve long-term inheritance conflicts between other heirs.",
          actionableNextStep: "Verify if your primary family assets (House/Bank) are held jointly or in a single name."
        }
      ],
      quiz: [
        {
          id: "ep-8-q1",
          question: "What is the primary operational benefit of an 'Either or Survivor' bank account?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "It doubles the interest rate.", explanation: "Incorrect. Joint accounts follow standard interest rules." },
            { id: "opt2", text: "It prevents any taxes on the income.", explanation: "Incorrect. Income remains taxable based on the owners' profiles." },
            { id: "opt3", text: "It allows the surviving holder to operate the account without needing to prove heirship immediately.", explanation: "Correct. It provides seamless operational continuity." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "The Concept of Trusts",
      badge: "L9: Advanced Structure",
      units: [
        {
          id: "ep-9-u1",
          title: "Separating Owner and Beneficiary",
          durationMins: 35,
          whyThisMatters: "Trusts are used when the beneficiary (e.g., a minor or disabled child) cannot manage assets themselves.",
          content: "A Private Trust is a 'Three-Party' logic: 1. The Settlor (gives the asset). 2. The Trustee (manages the asset). 3. The Beneficiary (enjoys the asset). The logic is to ensure the asset is used for a specific purpose over a long period. In India, trusts are increasingly used by professionals to protect assets from family disputes or to provide for specific dependents. Educational awareness only.",
          actionableNextStep: "Reflect on whether any of your dependents would require a 'Manager' (Trustee) for their inheritance."
        }
      ],
      quiz: [
        {
          id: "ep-9-q1",
          question: "In a Trust structure, what is the logical role of the 'Trustee'?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To spend the money on themselves.", explanation: "Incorrect. That would be a breach of trust." },
            { id: "opt2", text: "To manage the assets for the benefit of the beneficiaries as per the Trust Deed.", explanation: "Correct. The Trustee has a fiduciary duty to manage, not own, the resources." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Common Mistakes",
      badge: "L10: Behavioral Shield",
      units: [
        {
          id: "ep-10-u1",
          title: "Administrative Neglect",
          durationMins: 25,
          whyThisMatters: "Small errors in documentation lead to decades of legal battles.",
          content: "Common logical lapses: 1. Outdated Nominees (e.g., late parents still listed). 2. Single-name holdings for critical family assets. 3. Verbal Wills (not recognized for most assets in India). 4. Mismatch in names between Will and Bank records. 5. Assuming that paying EMI makes you the sole heir. Logic: Consistency across all digital and physical records is the best defense.",
          actionableNextStep: "Perform a 'Nominee Audit' across all your insurance and investment dashboards."
        }
      ],
      quiz: [
        {
          id: "ep-10-q1",
          question: "Why is an 'Outdated Nominee' a major logical risk?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The bank will pay the wrong person, forcing the rightful heirs to sue that person for recovery.", explanation: "Correct. It creates a massive litigation burden for the family." },
            { id: "opt2", text: "The government will take 50% of the money as a penalty.", explanation: "Incorrect. The risk is administrative chaos, not a specific penalty rate." }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "The Psychological Block",
      badge: "L11: Behavioral Maturity",
      units: [
        {
          id: "ep-11-u1",
          title: "Mortality Salience",
          durationMins: 20,
          whyThisMatters: "Most people avoid estate planning because it forces them to acknowledge their own mortality.",
          content: "Behavioral science calls this 'Mortality Salience'. The logical brain knows a Will is needed; the emotional brain avoids the topic to avoid discomfort. Maturity in financial logic is realizing that your discomfort today is the 'Premium' you pay for your family's peace of mind tomorrow. Estate planning is a final act of professional discipline. Educational awareness only.",
          actionableNextStep: "Start a conversation with your spouse or parents about 'Asset Visibility'—does everyone know where the passwords and documents are?"
        }
      ],
      quiz: [
        {
          id: "ep-11-q1",
          question: "What is the primary reason most people delay estate planning?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "It is too expensive to write a Will.", explanation: "Incorrect. Simple Wills can be low-cost; the cost of *not* having one is much higher." },
            { id: "opt2", text: "Psychological avoidance of discussing death and the future.", explanation: "Correct. Behavioral biases are the biggest hurdle to legacy planning." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "The Responsible Steward",
      badge: "L12: Final Framework",
      units: [
        {
          id: "ep-12-u1",
          title: "Legacy as Infrastructure",
          durationMins: 20,
          whyThisMatters: "Completion means moving from awareness to a structured lifecycle of updates.",
          content: "Completing this track means you now understand that wealth is a cycle, not a destination. A responsible mindset involves: 1. Regular nomination reviews. 2. Periodic Will updates (after marriage, children, or major asset purchase). 3. Digital asset planning (Cloud storage, Social media). Educational awareness only. This module does not provide legal, tax, or advisory guidance. Final steps should be executed with a licensed practitioner.",
          actionableNextStep: "Create a 'In Case of Emergency' digital or physical file containing a list of all your account numbers and registered nominees."
        }
      ],
      quiz: [
        {
          id: "ep-12-q1",
          question: "What is the ultimate goal of achieving estate planning literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To become a legal expert in inheritance law.", explanation: "Incorrect. You only need functional agency." },
            { id: "opt2", text: "To move from a state of neglect to a state of structural preparedness and administrative responsibility.", explanation: "Correct. Literacy provides the dignity of an orderly transition." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Indian Succession Act 1925", "Hindu Succession Act 1956", "Nomination Rules (RBI/SEBI)"],
    lastReviewedDate: "2025-01-15"
  },
  seo: {
    metaTitle: "Estate & Transmission Planning India | Monitize Learning",
    metaDescription: "Master the logic of asset inheritance in India. Learn about Wills, nomination vs legal heir, and the Indian Succession Act."
  }
};
