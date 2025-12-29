
import { LearningModule } from '../types';

export const nriFinancialFrameworkModule: LearningModule = {
  id: "nri-financial-framework",
  title: "NRI Financial Framework",
  category: "Technical",
  shortDescription: "Understand how residency status changes your financial logic in India, from accounts and income classification to reporting responsibilities.",
  detailedDescription: "A neutral, technical roadmap for Indian citizens and PIOs residing abroad. This module deconstructs the conceptual boundaries between Resident and Non-Resident status, the logic of repatriability in bank accounts, and how the 'source of income' principle applies across borders. Educational awareness only. This module does not provide legal, tax, or advisory guidance.",
  learningObjectives: [
    "Identify the conceptual triggers for 'Non-Resident' status in India",
    "Understand the logical shift from global to source-based reporting",
    "Grasp the structural differences between NRE and NRO accounts",
    "Define the concept of 'Repatriability' and its regulatory intent",
    "Distinguish between income earned in India and income earned abroad",
    "Identify the logic behind the 'transitional' RNOR status for returnees",
    "Understand why account redesignation is a critical administrative step",
    "Recognize common myths around double taxation without technical math",
    "Identify behavioral mistakes unique to the NRI lifecycle",
    "Build a framework for questioning cross-border financial complexity"
  ],
  estimatedEffort: "Deep",
  iconName: "Globe",
  levels: [
    {
      id: 1,
      title: "Residency Identity",
      badge: "L1: Status Logic",
      units: [
        {
          id: "nri-1-u1",
          title: "Citizenship vs Residency",
          durationMins: 20,
          whyThisMatters: "Financial rules follow where you live, not the color of your passport.",
          content: "In financial logic, your status as a 'Non-Resident' is determined primarily by your physical presence in India during a financial year. While citizenship relates to your legal identity and passport, residency is a mathematical fact. Conceptually, if you spend more than a certain number of days abroad (typically 182 days or more), the system begins viewing you as an NRI for that cycle.",
          actionableNextStep: "Reflect on your travel history over the last 12 months to conceptualize your current residency 'bucket'."
        }
      ],
      quiz: [
        {
          id: "nri-1-q1",
          question: "Which factor primarily determines your 'NRI' status for financial logic in India?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The country that issued your passport.", explanation: "Incorrect. Citizenship and Residency are distinct logical concepts." },
            { id: "opt2", text: "The number of days spent physically residing outside India.", explanation: "Correct. Residency is a time-based factual assessment." },
            { id: "opt3", text: "Your emotional intent to eventually return home.", explanation: "Incorrect." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Residency Pivot",
      badge: "L2: Scope of Logic",
      units: [
        {
          id: "nri-2-u1",
          title: "The Jurisdiction Shift",
          durationMins: 15,
          whyThisMatters: "Becoming an NRI changes the 'default settings' of your financial life.",
          content: "Becoming an NRI is a 'Pivot Point'. As a Resident, the Indian system conceptually views your 'Global' income. As a Non-Resident, the system's logic narrows down to only what is 'sourced' from or 'received' in India.",
          actionableNextStep: "List your income sources: are they physically rooted in India or in your country of residence?"
        }
      ],
      quiz: [
        {
          id: "nri-2-q1",
          question: "How does the scope of financial reporting logically change when one becomes an NRI?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It shifts from a 'Global' view to a 'Source-in-India' view.", explanation: "Correct. Non-residents are generally only observed for activities tied to India." },
            { id: "opt2", text: "It stops entirely because the individual is now abroad.", explanation: "Incorrect." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["FEMA 1999", "Income Tax Act 1961"],
    lastReviewedDate: "2025-01-05"
  },
  seo: {
    metaTitle: "NRI Financial Framework India | Monitize Learning",
    metaDescription: "Understand residency status, NRE/NRO accounts, and the tax logic for Non-Resident Indians."
  }
};
