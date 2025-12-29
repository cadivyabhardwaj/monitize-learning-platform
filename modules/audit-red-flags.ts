import { LearningModule } from '../types';

export const auditRedFlagsModule: LearningModule = {
  id: "audit-red-flags",
  title: "Red Flags Auditors Actually Look For",
  category: "Technical",
  shortDescription: "Understand how auditors assess risk, identify patterns of manipulation, and evaluate the integrity of financial records.",
  detailedDescription: "A strategic deconstruction of the auditor's mind. This module explains common indicators of financial misstatement, internal control failures, and statutory defaults that trigger scrutiny under Indian Audit Standards (SAs) and the Companies Act, 2013.",
  learningObjectives: [
    "Understand the logic of 'Professional Skepticism' as a risk-assessment tool",
    "Identify patterns of revenue recognition manipulation and expense inflation",
    "Grasp the risk associated with manual journal entries and round-figure transactions",
    "Analyze the logic of Related Party Transactions and Director-level risks",
    "Recognize statutory red flags in GST, TDS, and other compliance areas",
    "Understand the 'Survival Logic' of Cash Flow versus Reported Profits",
    "Identify documentation and process failures that weaken internal controls",
    "Differentiate between Material Misstatements and reportable CARO items"
  ],
  estimatedEffort: "Deep",
  iconName: "ShieldAlert",
  levels: [
    {
      id: 1,
      title: "Why Auditors Look for Red Flags",
      badge: "L1: Risk Logic",
      units: [
        {
          id: "arf-1-u1",
          title: "The Lens of Skepticism",
          durationMins: 20,
          whyThisMatters: "Auditors do not assume every record is true; they look for proof of integrity.",
          content: "In audit logic, 'Professional Skepticism' is the baseline. An auditor is trained to recognize that management has an inherent incentive to present a 'perfect' picture. Red flags are not accusations; they are 'Anomalies' that require further evidence.",
          actionableNextStep: "Adopt a 'Self-Audit' mindset: Look at your last three internal reports and ask 'What is the third-party evidence for this claim?'"
        }
      ],
      quiz: [
        {
          id: "arf-q1-1",
          question: "What is the logical purpose of 'Professional Skepticism' in an audit?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To assume management is always committing fraud.", explanation: "Incorrect. Skepticism is neutral questioning, not an assumption of guilt." },
            { id: "opt2", text: "To maintain a questioning mind and critically assess the validity of audit evidence.", explanation: "Correct. It is a filter for objective evaluation." },
            { id: "opt3", text: "To find ways to delay the audit process.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Audit Trail Requirement",
      badge: "L2: Procedural Integrity",
      units: [
        {
          id: "arf-2-u1",
          title: "The Immutable Record",
          durationMins: 25,
          whyThisMatters: "Lack of 'Edit Logs' is an automatic high-risk signal in modern audits.",
          content: "Under the Companies Act 2013, Indian companies must use accounting software that records every edit made to the books. If the 'Audit Trail' feature is disabled or shows frequent back-dated entries, an auditor flags this as a significant control failure. Logic: If you can edit the past without a record, the future statements cannot be verified.",
          actionableNextStep: "Check your accounting software: is the 'Edit Trail' feature enabled and unchangeable?"
        }
      ],
      quiz: [
        {
          id: "arf-q2-1",
          question: "What does an 'Audit Trail' in accounting software primarily verify?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The history of every transaction entry, modification, and deletion.", explanation: "Correct. This provides the log of 'Who, When, and What' changed in the records." },
            { id: "opt2", text: "The name of the company's biggest customer.", explanation: "Incorrect. This is a data point, not a process trail." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["SA 240", "Companies Act 2013 Section 143", "CARO 2020"],
    lastReviewedDate: "2024-02-15"
  },
  seo: {
    metaTitle: "Audit Red Flags Awareness | Monitize Technical",
    metaDescription: "Understand the logic of risk assessment in Indian statutory audits and identify common financial red flags."
  }
};