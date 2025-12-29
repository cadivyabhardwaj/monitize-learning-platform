
import { LearningModule } from '../types';

export const insuranceRiskPoolingModule: LearningModule = {
  id: "insurance-risk-pooling",
  title: "Insurance & Risk Pooling",
  category: "Personal",
  shortDescription: "Understand why insurance exists, how risk pooling works, and how claims are interpreted—without product selling or fear tactics.",
  detailedDescription: "A neutral, technical deconstruction of the insurance mechanism. This module moves beyond the sales pitch to explain the mathematical logic of shared risk, the indemnity principle, and the structural reason why exclusions are necessary for a sustainable risk pool. Educational awareness only. This module does not provide insurance advice, product recommendations, or coverage guidance.",
  learningObjectives: [
    "Identify insurance as a risk-transfer mechanism rather than a savings tool",
    "Understand the 'Law of Large Numbers' in the context of risk pooling",
    "Grasp the conceptual logic behind premium calculation and mortality/morbidity costs",
    "Distinguish between 'Pure Risk' and 'Speculative Risk'",
    "Recognize the Principle of Indemnity and why you cannot 'profit' from a claim",
    "Understand the logical role of Exclusions and Waiting Periods in protecting the pool",
    "Differentiate between Life Insurance (Asset Protection) and Investment logic",
    "Identify common causes for claim rejections through a technical lens",
    "Build a framework for evaluating personal risk capacity vs. transfer requirements",
    "Recognize behavioural traps like over-insuring or focusing solely on premium cost"
  ],
  estimatedEffort: "Deep",
  iconName: "ShieldCheck",
  levels: [
    {
      id: 1,
      title: "Risk vs Certainty",
      badge: "L1: Foundations",
      units: [
        {
          id: "irp-1-u1",
          title: "The Logic of Risk Transfer",
          durationMins: 20,
          whyThisMatters: "Insurance is not for 'known' expenses; it is for 'uncertain' catastrophes.",
          content: "In life, there are certainties (buying a car, paying rent) and uncertainties (accidents, critical illness). Logic dictates that while you 'save' for certainties, you 'transfer' uncertainties. Insurance is a contract where one party (you) pays a small, fixed cost (premium) to another party (the insurer) to take on a potentially massive, unknown cost. You are essentially buying financial certainty for an uncertain event.",
          actionableNextStep: "Reflect on which of your financial fears are 'certain' (future needs) and which are 'uncertain' (accidental risks)."
        }
      ],
      quiz: [
        {
          id: "irp-1-q1",
          question: "What is the primary logical role of insurance in a financial plan?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To earn a higher interest rate than a bank FD.", explanation: "Incorrect. Insurance is a cost of risk transfer, not an investment vehicle." },
            { id: "opt2", text: "To transfer a high-severity, low-probability financial risk to a third party.", explanation: "Correct. This is the core 'Risk Transfer' logic." },
            { id: "opt3", text: "To pay for predictable annual expenses like birthdays.", explanation: "Incorrect. Certainties should be handled via savings, not insurance." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Risk Pooling Explained",
      badge: "L2: The Pool Math",
      units: [
        {
          id: "irp-2-u1",
          title: "Many Pay, Few Claim",
          durationMins: 25,
          whyThisMatters: "Premiums are only affordable because most people in the pool will not claim.",
          content: "Insurance relies on the 'Law of Large Numbers'. Imagine 1,000 people living in a building. The chance of a fire is 1 in 1,000 per year. A fire costs ₹1 Crore to fix. No single person can afford ₹1 Crore. However, if all 1,000 people pool ₹10,000 each, the pool has ₹1 Crore. When the fire occurs for one person, the pool pays. This is 'Risk Pooling'. Logic: You aren't paying the premium for yourself; you are contributing to a community buffer where the cost of a single catastrophe is shared.",
          actionableNextStep: "Identify the size of a 'pool' in any social group you belong to—is there a shared buffer logic?"
        }
      ],
      quiz: [
        {
          id: "irp-2-q1",
          question: "Why does risk pooling make insurance affordable?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Because insurers have infinite money.", explanation: "Incorrect. Insurers only manage the pool's resources." },
            { id: "opt2", text: "Because everyone eventually gets their money back.", explanation: "Incorrect. In pure insurance, only those who suffer a loss get money back." },
            { id: "opt3", text: "Because the cost of a few losses is distributed across a large number of participants.", explanation: "Correct. This distribution reduces the individual cost significantly." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Premium Logic",
      badge: "L3: Pricing Risk",
      units: [
        {
          id: "irp-3-u1",
          title: "Conceptual Component Breakdown",
          durationMins: 25,
          whyThisMatters: "Premiums are not random; they reflect the statistical 'price' of your risk.",
          content: "A premium is logically composed of: 1. Pure Premium (The statistical likelihood of the loss happening). 2. Loading Costs (Marketing, Salaries, Distribution). 3. Profit Margin (For the insurer to stay solvent). If you are 25 years old, your pure premium for life insurance is low because the probability of death is low. If you are 60, it is high. Logic: The premium is a 'toll' you pay for entry into the risk pool, calculated based on the risk you bring into it.",
          actionableNextStep: "Reflect on how your lifestyle (smoking, driving habits) conceptually impacts the 'toll' you bring to the pool."
        }
      ],
      quiz: [
        {
          id: "irp-3-q1",
          question: "What does a higher-than-average premium for a specific individual usually logically signify?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The individual brings a higher statistical risk to the pool.", explanation: "Correct. Higher probability or higher potential severity increases the calculated toll." },
            { id: "opt2", text: "The insurer likes that individual less.", explanation: "Incorrect. Pricing is based on actuarial statistics, not personal preference." },
            { id: "opt3", text: "It is a sign that the insurance is working better.", explanation: "Incorrect. Efficiency in insurance is usually about lower premiums for the same risk." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "How Insurers Think (Claims)",
      badge: "L4: Claims Logic",
      units: [
        {
          id: "irp-4-u1",
          title: "Contract Fulfillment, Not Charity",
          durationMins: 30,
          whyThisMatters: "Claims are processed based on 'Evidence' and 'Definitions', not empathy.",
          content: "An insurance policy is a legal contract, not a savings account. When a claim is made, the insurer looks at three things: 1. Did the event happen exactly as defined? 2. Is the event explicitly excluded? 3. Was all material information disclosed correctly at the start? Logic: The insurer's duty is to protect the pool's money from fraudulent or invalid claims so that funds are available for legitimate ones. Educational awareness only.",
          actionableNextStep: "Examine a sample claim form (any type) and note the requirement for evidence (reports, bills, photos)."
        }
      ],
      quiz: [
        {
          id: "irp-4-q1",
          question: "From the insurer's perspective, why is a detailed claim investigation necessary?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To delay payment as long as possible.", explanation: "Incorrect. Regulators mandate timely settlement." },
            { id: "opt2", text: "To ensure the claim is valid under the contract and protect the pool's resources.", explanation: "Correct. This maintains the solvency and fairness of the system." },
            { id: "opt3", text: "To check if the customer has paid their electricity bills.", explanation: "Incorrect. Only information relevant to the risk and contract is investigated." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Exclusions & Waiting Periods",
      badge: "L5: Protecting the Pool",
      units: [
        {
          id: "irp-5-u1",
          title: "Adverse Selection & Moral Hazard",
          durationMins: 30,
          whyThisMatters: "Without exclusions, people would only join the pool when they are already in trouble.",
          content: "Logic 1: Pre-existing Disease (PED) Waiting Periods prevent 'Adverse Selection'—where people buy insurance only after getting sick. Logic 2: Permanent Exclusions (e.g. self-inflicted harm) prevent 'Moral Hazard'—where insurance encourages reckless behavior. Logic 3: Standard Exclusions (e.g. Cosmetic surgery) define what the pool is NOT for. These boundaries ensure the pool remains sustainable for genuine, accidental risks.",
          actionableNextStep: "Locate the 'Exclusions' section in a sample policy document to understand the boundaries of the pool."
        }
      ],
      quiz: [
        {
          id: "irp-5-q1",
          question: "Logically, why do health insurance pools have waiting periods for pre-existing diseases?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "To ensure participants contribute to the pool before withdrawing for known conditions.", explanation: "Correct. This maintains the 'Uncertainty' logic required for pooling." },
            { id: "opt2", text: "To make sure the customer forgets they have the disease.", explanation: "Incorrect. The logic is purely financial sustainability." },
            { id: "opt3", text: "Because hospitals are busy in the first year.", explanation: "Incorrect. Timing is about risk balancing, not hospital schedules." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Health Insurance Logic",
      badge: "L6: Indemnity Framework",
      units: [
        {
          id: "irp-6-u1",
          title: "The Principle of Indemnity",
          durationMins: 25,
          whyThisMatters: "Health insurance is meant to bring you back to where you were, not make you 'richer'.",
          content: "Health insurance operates on 'Indemnity' logic: the insurer pays for the actual loss suffered. If your bill is ₹50,000, you cannot claim ₹1,00,000. If you have two policies, you cannot claim the full amount from both to profit from the surgery. Logic: The insurance pool is a restitution mechanism, not a profit-making opportunity. This prevents the intentional 'buying' of losses.",
          actionableNextStep: "Examine your own health status and reflect on how much 'buffer' you would need to be 'made whole' during a hospital stay."
        }
      ],
      quiz: [
        {
          id: "irp-6-q1",
          question: "If an individual has a hospital bill of ₹1 Lakh and an insurance cover of ₹10 Lakhs, how much will a standard indemnity policy logically pay?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "₹10 Lakhs (the full cover).", explanation: "Incorrect. Standard insurance covers only the loss suffered." },
            { id: "opt2", text: "₹1 Lakh (the actual loss).", explanation: "Correct. The principle of indemnity aims to restore the status quo, not provide profit." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Life Insurance Logic",
      badge: "L7: Human Life Value",
      units: [
        {
          id: "irp-7-u1",
          title: "Protection vs. Savings",
          durationMins: 30,
          whyThisMatters: "Mixing life protection with savings often leads to sub-optimal outcomes in both.",
          content: "Logic: Life insurance is meant to replace the 'Human Life Value' (HLV)—the future earnings that disappear if you are gone. Pure Life Insurance (Term) provides a massive payout for a small cost because it only pays if the event occurs. Mixed products (Endowment/ULIP) provide a lower payout because part of your money is being 'saved'. Literacy involves recognizing that protection is a cost you pay for your family's certainty.",
          actionableNextStep: "Conceptually calculate your HLV: (Current Annual Income x Years until Retirement)."
        }
      ],
      quiz: [
        {
          id: "irp-7-q1",
          question: "What is the primary logical 'product' of a pure term life insurance policy?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "High stock market returns.", explanation: "Incorrect. That is the goal of an investment." },
            { id: "opt2", text: "A retirement pension.", explanation: "Incorrect. That is a decumulation annuity logic." },
            { id: "opt3", text: "Financial replacement of the breadwinner's economic value.", explanation: "Correct. Term insurance is pure risk transfer for human life value." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Asset Insurance Logic",
      badge: "L8: Depreciating Value",
      units: [
        {
          id: "irp-8-u1",
          title: "IDV and Real-World Value",
          durationMins: 25,
          whyThisMatters: "For cars and homes, you are insured for the 'current' value, not the 'purchase' value.",
          content: "In car insurance, logic uses 'Insured Declared Value' (IDV). As the car gets older, the pool takes on less risk, and you pay less premium. If the car is stolen, you get the IDV, not the price of a new car. Logic: Asset insurance is about 'Replacement' cost, adjusted for the reality of wear and tear (depreciation). Educational awareness only.",
          actionableNextStep: "Check the 'IDV' on your last car insurance policy and compare it to current market resale prices."
        }
      ],
      quiz: [
        {
          id: "irp-8-q1",
          question: "Why does the IDV of a vehicle decrease every year?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Because the replacement value of the used asset decreases with time (Depreciation).", explanation: "Correct. Insurance covers current value, not historical cost." },
            { id: "opt2", text: "Because the insurer wants to pay less.", explanation: "Incorrect. It is a standard mathematical adjustment based on asset life." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Insurance is NOT Investment",
      badge: "L9: The Conflict Myth",
      units: [
        {
          id: "irp-9-u1",
          title: "The Cost of Safety",
          durationMins: 30,
          whyThisMatters: "Expecting a 'return' from insurance ignores that risk transfer is an expensive service.",
          content: "Myth: 'Insurance is a waste of money if I don't get anything back.' Reality: You 'got' protection for the whole year. Logic: If you don't claim, the pool is healthy. If you want your money back plus interest, you are looking for an 'Investment' product. Combining them usually hides the true cost of insurance and the true return of the investment. A literate participant keeps their 'Shield' (Insurance) separate from their 'Sword' (Investments).",
          actionableNextStep: "Categorize your monthly outflows: Which are for 'Growth' and which are for 'Defense'?"
        }
      ],
      quiz: [
        {
          id: "irp-9-q1",
          question: "Which of these is a hallmark of a 'Pure' insurance framework?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The promise of doubling your money in 10 years.", explanation: "Incorrect. That is a speculative or growth promise." },
            { id: "opt2", text: "Paying a premium for coverage with no survival benefit if the event doesn't happen.", explanation: "Correct. This is the most efficient form of pure risk transfer." },
            { id: "opt3", text: "A guaranteed gold coin every 5 years.", explanation: "Incorrect. That is a marketing incentive, not a risk logic." }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Claim Rejection Logic",
      badge: "L10: Forensic View",
      units: [
        {
          id: "irp-10-u1",
          title: "Utmost Good Faith",
          durationMins: 25,
          whyThisMatters: "Most rejections happen at the 'Proposal' stage, not the 'Hospital' stage.",
          content: "The logic of insurance is 'Uberrimae Fidei' (Utmost Good Faith). If you hide a smoking habit or a previous heart condition, you have broken the trust of the pool. In a loss, the insurer discovers the hidden fact and rejects the claim. Logic: A rejection is often the system correcting for a person who joined the pool under false pretenses. Disclosure is your primary legal protection. Educational awareness only.",
          actionableNextStep: "Recall if you ever signed a form filled by someone else—did you verify the disclosures?"
        }
      ],
      quiz: [
        {
          id: "irp-10-q1",
          question: "What is the most common logical reason for a genuine life insurance claim being rejected?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Non-disclosure of material facts (like health history) at the time of purchase.", explanation: "Correct. This voids the contract logic." },
            { id: "opt2", text: "The family being too sad.", explanation: "Incorrect. Emotional state is irrelevant to contract fulfillment." }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Behavioural Mistakes",
      badge: "L11: Human Friction",
      units: [
        {
          id: "irp-11-u1",
          title: "Focusing on the 'Price' only",
          durationMins: 25,
          whyThisMatters: "A cheap insurance policy that doesn't cover your specific risk is a 100% waste of money.",
          content: "Behavioural Errors: 1. Under-insuring (having ₹1L cover when a surgery costs ₹5L). 2. Not reading definitions (thinking 'accidental' covers 'natural illness'). 3. Over-insuring assets (paying premium for a car value higher than its market price). Logic: Value in insurance is defined by 'Coverage Depth', not 'Premium Cheapness'.",
          actionableNextStep: "Reflect on a time you picked a service solely based on being the cheapest—did it have hidden costs?"
        }
      ],
      quiz: [
        {
          id: "irp-11-q1",
          question: "Why is 'Under-insurance' logically dangerous?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Because the insurer will be angry.", explanation: "Incorrect. Insurers only care about the contract limits." },
            { id: "opt2", text: "Because the gap between the claim and the actual bill must still be paid from your savings.", explanation: "Correct. It defeats the purpose of fully transferring the catastrophic risk." }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "The Risk-First Mindset",
      badge: "L12: Maturity",
      units: [
        {
          id: "irp-12-u1",
          title: "The Defensive Foundation",
          durationMins: 20,
          whyThisMatters: "Building wealth without insurance is like building a house on sand.",
          content: "The final maturity in financial logic is realizing that Defense (Insurance) precedes Offense (Investing). 1. Health insurance protects your current capital. 2. Life insurance protects your family's future capital. 3. Asset insurance protects your physical tools. Once the floor is secure, you can reach for the ceiling. Educational awareness only. This module does not provide insurance advice, product recommendations, or coverage guidance.",
          actionableNextStep: "List your top three 'Defense' measures and see if they are logically robust enough to protect your 'Offense' goals."
        }
      ],
      quiz: [
        {
          id: "irp-12-q1",
          question: "What is the ultimate goal of achieving insurance literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To become a certified insurance agent.", explanation: "Incorrect. This is for individual financial agency." },
            { id: "opt2", text: "To replace fear and confusion with a structured, defensive framework for life's uncertainties.", explanation: "Correct. Literacy provides the dignity of informed preparedness." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Insurance Act 1938", "IRDAI Protection of Policyholders' Interests Regulations"],
    lastReviewedDate: "2024-12-28"
  },
  seo: {
    metaTitle: "Insurance & Risk Pooling India | Monitize Learning",
    metaDescription: "Master the mechanics of Indian insurance, risk pooling, and claim logic without product bias in this 12-level educational track."
  }
};
