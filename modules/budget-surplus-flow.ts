import { LearningModule } from '../types';

export const budgetSurplusFlowModule: LearningModule = {
  id: "budget-surplus-flow",
  title: "Budget & Surplus Flow",
  /* Fixed: Added missing category property */
  category: "Personal",
  shortDescription: "Understand how income, expenses, surplus, and allocation decisions actually work — in households, businesses, and governments.",
  detailedDescription: "A technical deconstruction of resource allocation. This module explains the mechanical relationship between inflow and outflow, the structural nature of cost elasticity, and the logical barriers to maintaining a stable surplus. Educational awareness only. This module does not provide financial, accounting, legal, or investment advice.",
  learningObjectives: [
    "Define a budget as an allocation logic rather than a tracking file",
    "Identify the difference between periodic income and realized cash flow",
    "Grasp the structural nature of Fixed vs Variable costs",
    "Understand why mathematical precision often fails behavioral reality",
    "Distinguish between Gross Surplus and Usable (Liquidity-ready) Surplus",
    "Recognize common behavioral 'leakages' that drain unallocated resources",
    "Understand the 'Floor' logic of emergency buffers for institutional stability",
    "Identify how allocation priorities shift across life stages and entity types",
    "Build a framework for assessing financial trade-offs without emotional bias"
  ],
  estimatedEffort: "Fundamental",
  iconName: "PieChart",
  levels: [
    {
      id: 1,
      title: "What Is a Budget (Beyond Numbers)",
      badge: "L1: Intent Logic",
      units: [
        {
          id: "bsf-1-u1",
          title: "The Logic of Prioritization",
          durationMins: 15,
          whyThisMatters: "A budget is a map of intentions, not just a record of history.",
          content: "A budget is often mistaken for a restrictive list of 'don'ts'. Logically, it is a proactive system for deciding where resources will go before they arrive. It is a tool for managing constraints. In any entity—household or business—resources are limited while desires or needs are vast. The budget is the logical filter that resolves this conflict. Educational awareness only.",
          actionableNextStep: "Reflect on whether your current money management is 'Reactive' (tracking after spending) or 'Proactive' (allocating before spending).",
          structuralExplanation: ["Resource Sourcing: Where inflow originates.", "Boundary Setting: Defining the maximum allowable outflow per category."],
          commonMisinterpretations: ["Budgeting is about being cheap.", "You only need a budget if you are low on funds."]
        }
      ],
      realWorldAnalogies: ["A GPS map: It doesn't drive the car, but it prevents you from taking wrong turns into dead ends."],
      reflectionPrompt: "If your monthly inflow increased by 10%, would your current 'allocation logic' handle it automatically, or would it just vanish?",
      quiz: [
        {
          id: "bsf-q1-1",
          question: "Structurally, what is the primary purpose of a budget?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To record every single transaction after it happens.", explanation: "Incorrect. That is bookkeeping/tracking, not budgeting." },
            { id: "opt2", text: "To proactively allocate limited resources based on identified priorities.", explanation: "Correct. Budgeting is about decision-making before the event." },
            { id: "opt3", text: "To make sure you never spend money on entertainment.", explanation: "Incorrect. Budgeting is about allocation, which can include any category." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Income, Expense & Surplus — Flow Logic",
      badge: "L2: The Plumbing",
      units: [
        {
          id: "bsf-2-u1",
          title: "The River and the Reservoir",
          durationMins: 20,
          whyThisMatters: "Thinking of money as a static 'amount' hides the risks of timing mismatches.",
          content: "1. Income: The inflow. 2. Expense: The outflow. 3. Surplus: The delta (Inflow - Outflow). Logic: Surplus is not a gift; it is a structural outcome of maintaining a gap. If the outflow pipes are the same size as the inflow pipes, the reservoir (Savings) never fills. In household logic, timing matters—if your rent (Outflow) is due on the 1st but your salary (Inflow) arrives on the 7th, you have a 'Liquidity Gap' even if you are profitable on paper. Educational awareness only.",
          actionableNextStep: "Map the 'Arrival Dates' of your income against the 'Due Dates' of your three largest expenses.",
          structuralExplanation: ["Inflow Timing", "Outflow Intensity", "Residual Accumulation"]
        }
      ],
      realWorldAnalogies: ["A water tank where the tap (income) is smaller than the drain (expenses)."],
      quiz: [
        {
          id: "bsf-q2-1",
          question: "What logically creates a 'Surplus'?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Maintaining a deliberate gap where inflow is greater than outflow.", explanation: "Correct. Surplus is the mathematical result of this gap." },
            { id: "opt2", text: "Earning a very high salary.", explanation: "Incorrect. High earners can have zero surplus if their outflow matches their inflow." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Fixed vs Variable Costs",
      badge: "L3: Logic of Elasticity",
      units: [
        {
          id: "bsf-3-u1",
          title: "The Hard Floor vs The Soft Ceiling",
          durationMins: 20,
          whyThisMatters: "High fixed costs lead to structural fragility during income drops.",
          content: "• Fixed Costs: Contractual obligations (Rent, EMI, Insurance, Subscriptions). You must pay these regardless of behavior. Logic: These define your 'Survival Floor' • Variable Costs: Discretionary choices (Dining out, Travel, Shopping). Logic: These are 'Elastic'—you can stretch or shrink them instantly. A stable budget manages the ratio. If your Fixed Costs exceed 50% of your inflow, your ability to react to life changes (Income loss) is structurally compromised.",
          actionableNextStep: "Tag your monthly expenses as 'Inelastic' (Must pay) or 'Elastic' (Can cut today).",
          decisionTradeOffs: ["Commitment (Fixed) vs. Flexibility (Variable)"]
        }
      ],
      realWorldAnalogies: ["A fixed cost is like a heavy anchor; a variable cost is like the sails of a boat."],
      quiz: [
        {
          id: "bsf-q3-1",
          question: "Why is a high 'Fixed Cost' ratio considered logically risky?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Because fixed costs are more expensive.", explanation: "Incorrect. Cost magnitude is different from cost nature." },
            { id: "opt2", text: "Because you can't see them on a bank statement.", explanation: "Incorrect." },
            { id: "opt3", text: "Because they cannot be easily reduced if your income suddenly stops.", explanation: "Correct. Inelasticity creates financial fragility." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Why Most Budgets Fail",
      badge: "L4: Behavioral Gaps",
      units: [
        {
          id: "bsf-4-u1",
          title: "Rigidity vs Reality",
          durationMins: 20,
          whyThisMatters: "Planning for a perfect month guarantees failure in an imperfect world.",
          content: "Budgets fail due to: 1. Complexity (Tracking every ₹1 leads to fatigue). 2. Missing the 'Invisible' (Ignoring annual taxes, repairs, or gifts). 3. No 'Buffering' (Allocating 100% of resources leaves no room for friction). Logic: A resilient budget is 80% accurate and includes a 'Chaos Category' for the things you forgot to plan for. Control exists only after behavior stabilizes. Educational awareness only.",
          actionableNextStep: "Look at your last 6 months: find one expense that happened which wasn't in your 'Monthly' plan.",
          constraintsAndRisks: ["Complexity Fatigue", "Optimism Bias", "The Forgotten Annuals"]
        }
      ],
      realWorldAnalogies: ["A bridge built without expansion joints: it looks solid but cracks when the temperature changes."],
      quiz: [
        {
          id: "bsf-q4-1",
          question: "Which of these is a common logical error in budgeting?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Failing to account for non-monthly 'Lumpy' expenses like annual insurance.", explanation: "Correct. These 'hidden' costs often destroy monthly surplus logic." },
            { id: "opt2", text: "Allocating too much money to the 'Essentials' bucket.", explanation: "Incorrect. That is usually a necessity, not an error." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Gross Surplus vs Usable Surplus",
      badge: "L5: The Net Truth",
      units: [
        {
          id: "bsf-5-u1",
          title: "The Illusion of Margin",
          durationMins: 25,
          whyThisMatters: "Taxes and mandatory provisions consume your surplus before you do.",
          content: "Gross Surplus is what's left after your lifestyle spending. Usable Surplus is what's left after Lifestyle + Taxes + Mandatory Obligations. Logic: If you earn ₹100, spend ₹60, and owe ₹15 in future taxes, your usable surplus is ₹25, not ₹40. Many people 'spend their surplus' twice because they forget that a portion of that cash in the bank is already legally or structurally committed to the government or future debt. Educational awareness only.",
          actionableNextStep: "Calculate your 'Deferred Liabilities' (unpaid taxes, upcoming premiums) to see your true usable margin.",
          structuralExplanation: ["Gross Margin: Simple inflow - outflow.", "Usable Margin: Residual cash after statutory and contractual provisions."]
        }
      ],
      realWorldAnalogies: ["Seeing ₹100 in your hand but knowing you have to give ₹20 to a friend tomorrow."],
      quiz: [
        {
          id: "bsf-q5-1",
          question: "How is 'Usable Surplus' logically derived?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "By ignoring taxes and focusing on cash in hand.", explanation: "Incorrect. This leads to liquidity crises later." },
            { id: "opt2", text: "By subtracting all current and deferred statutory obligations from the gross residual cash.", explanation: "Correct. It represents the only capital truly available for new decisions." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Allocation Order & Leakages",
      badge: "L6: Sequencing",
      units: [
        {
          id: "bsf-6-u1",
          title: "The Bucket Sequence",
          durationMins: 25,
          whyThisMatters: "The order in which you pay determines which bucket goes empty.",
          content: "Logic: Sequence matters. 1. Survival Bucket (Food/Rent). 2. Protection Bucket (Insurance/Debt). 3. Growth Bucket (Provisioning). 4. Lifestyle Bucket (Wants). 'Leakage' occurs when the Lifestyle bucket is filled before the Protection or Growth buckets. Unallocated surplus almost always 'leaks' into variable lifestyle spending due to psychological 'found money' syndrome. Surplus exists only after behavior stabilizes. Educational awareness only.",
          actionableNextStep: "Commit to a sequence: ensure your mandatory outflows happen as soon as the inflow arrives.",
          commonMisinterpretations: ["Found Money Syndrome: Spending unallocated cash just because it exists."]
        }
      ],
      realWorldAnalogies: ["Filling buckets from the bottom up: if the bottom buckets have holes (leakages), the top never fills."],
      quiz: [
        {
          id: "bsf-q6-1",
          question: "What is 'Behavioral Leakage' in a budget?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Paying too much for a house.", explanation: "Incorrect. That is a sizing issue." },
            { id: "opt2", text: "When a bank account is hacked.", explanation: "Incorrect. That is a security failure." },
            { id: "opt3", text: "Unplanned, small discretionary spends that gradually consume the unallocated surplus.", explanation: "Correct. Leakage is the erode-by-default logic of unplanned cash." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Emergency Buffers & Stability",
      badge: "L7: Resilience",
      units: [
        {
          id: "bsf-7-u1",
          title: "The Financial Floor",
          durationMins: 20,
          whyThisMatters: "Stability is a prerequisite for any further allocation logic.",
          content: "An emergency buffer is not 'savings'—it is an 'Institutional Insurance Policy'. Logic: It decouples your survival from your immediate income stream. Sizing logic: 6-12 months of 'Fixed Costs'. Until this buffer is built, any 'Growth' allocation is structurally built on sand. Stability precedes advancement. Educational awareness only. This module does not provide investment advice.",
          actionableNextStep: "Calculate your 'Survival Burn Rate' per month to size your theoretical buffer.",
          constraintsAndRisks: ["Income Volatility", "Liquidity Risk"]
        }
      ],
      realWorldAnalogies: ["The spare tire in a car: you don't use it every day, but without it, a single flat tire stops the journey."],
      quiz: [
        {
          id: "bsf-q7-1",
          question: "What is the logical sizing of an emergency buffer?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Based on a multiple of your essential fixed monthly outflows.", explanation: "Correct. It must cover the survival floor for a specific duration." },
            { id: "opt2", text: "Based on how much you want to spend on a holiday.", explanation: "Incorrect. Holidays are variable desires, not survival needs." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Budgeting Across Life Stages",
      badge: "L8: Dynamic Logic",
      units: [
        {
          id: "bsf-8-u1",
          title: "The Lifecycle Pledge",
          durationMins: 15,
          whyThisMatters: "Mastery means moving from rigid rules to adaptive frameworks.",
          content: "Household budget logic is high in Variable costs early on. Middle stages are dominated by high Fixed costs (Home, School). Late stages return to health and maintenance priorities. Logic: Every decade requires a 'Budget Re-Architecture'. What worked in your 20s (flexibility) will not work in your 40s (commitments). Acknowledge your current stage to align your allocation logic. Educational awareness only. This module does not provide financial, accounting, legal, or investment advice.",
          actionableNextStep: "Write down your three biggest 'Fixed Commitments' for the next 5 years."
        }
      ],
      realWorldAnalogies: ["A hiker's backpack: you carry different gear when you're in the valley than when you're at the peak."],
      quiz: [
        {
          id: "bsf-q8-1",
          question: "What is the ultimate goal of achieving budget literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To never spend money on things you enjoy.", explanation: "Incorrect. The goal is intentionality, not austerity." },
            { id: "opt2", text: "To understand the structural trade-offs and logical flows that ensure institutional survival.", explanation: "Correct. Literacy provides the defensive logic needed to manage life's constraints." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: false,
    regulatedTopic: false,
    regulatoryReferences: ["General Financial Literacy Frameworks"],
    lastReviewedDate: "2025-02-02"
  },
  seo: {
    metaTitle: "Budget & Surplus Flow Logic | Monitize Personal Literacy",
    metaDescription: "Master the logic of resource allocation. Learn about fixed vs variable costs, surplus leakage, and behavioral budgeting patterns."
  }
};
