import React from 'react';
import { LearningModule } from '../types';

export const internalControlBasicsModule: LearningModule = {
  id: "internal-control-basics",
  title: "Internal Control Basics",
  category: "Business",
  shortDescription: "Understand the 'Check and Balance' logic that protects business assets, ensures accurate reporting, and prevents fraud.",
  detailedDescription: "A practical, non-technical journey into the world of Governance. This module deconstructs how businesses create systems to ensure their operations run as intended. Learn to distinguish between process and control, identify segregation of duty risks, and understand what auditors look for in a robust control environment.",
  learningObjectives: [
    "Define Internal Control as an organizational safety net",
    "Identify the five core components of a control framework",
    "Distinguish between Preventive and Detective control logic",
    "Apply control principles to Cash, Sales, and Payroll cycles",
    "Understand the 'Segregation of Duties' (SOD) requirements",
    "Recognize red flags that indicate a breakdown in systems",
    "Identify minimum viable controls for Indian MSMEs",
    "Differentiate between the roles of Management and Auditors"
  ],
  estimatedEffort: "Deep",
  iconName: "ShieldCheck",
  levels: [
    {
      id: 1,
      title: "Why Internal Controls Exist",
      badge: "L1: Foundational Logic",
      units: [
        {
          id: "ic-1-u1",
          title: "Logic vs Jargon",
          durationMins: 15,
          whyThisMatters: "Internal control is often seen as 'paperwork.' Logically, it is simply 'insurance against human error and intent.'",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', null, "Internal Control is the system of checks and balances designed to give the owners of a business \"Reasonable Assurance\" that things are going as planned. It is not about one big lock; it is about many small threads woven together."),
            React.createElement('div', { className: "grid md:grid-cols-3 gap-4" },
              React.createElement('div', { className: "p-5 bg-primary/5 rounded-2xl border border-primary/5" },
                React.createElement('p', { className: "text-[10px] font-black text-primary/40 uppercase mb-2" }, "Process"),
                React.createElement('p', { className: "text-xs font-bold text-primary italic" }, "\"How we do it.\"")
              ),
              React.createElement('div', { className: "p-5 bg-accent/5 rounded-2xl border border-accent/10" },
                React.createElement('p', { className: "text-[10px] font-black text-accent uppercase mb-2" }, "Control"),
                React.createElement('p', { className: "text-xs font-bold text-primary italic" }, "\"How we make sure it's done right.\"")
              ),
              React.createElement('div', { className: "p-5 bg-primary/5 rounded-2xl border border-primary/5" },
                React.createElement('p', { className: "text-[10px] font-black text-primary/40 uppercase mb-2" }, "Policy"),
                React.createElement('p', { className: "text-xs font-bold text-primary italic" }, "\"Why we do it this way.\"")
              )
            )
          ),
          actionableNextStep: "Identify one task in your office that 'only one person knows how to do'—this is your first internal control risk."
        }
      ],
      quiz: [
        {
          id: "ic-q1-1",
          question: "Which of these best describes the logical purpose of an internal control?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To slow down the speed of business transactions.", explanation: "Incorrect. While bad controls cause friction, the goal is safety, not speed reduction." },
            { id: "opt2", text: "To ensure operations are accurate, efficient, and compliant.", explanation: "Correct. Controls act as a guidance system for the organization." },
            { id: "opt3", text: "To replace the need for an annual audit.", explanation: "Incorrect. Auditors check the controls; controls do not replace the auditor." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Components of the Framework",
      badge: "L2: Structural Map",
      units: [
        {
          id: "ic-2-u1",
          title: "The Pillars of Control",
          durationMins: 20,
          whyThisMatters: "A lock on the door is useless if the person with the key is untrustworthy.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', null, "Following the global COSO logic (simplified), internal control relies on five interdependent pillars:"),
            React.createElement('ul', { className: "space-y-4" },
              React.createElement('li', { className: "flex items-start gap-4 p-4 bg-white border border-primary/5 rounded-xl" },
                React.createElement('div', { className: "w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" }),
                React.createElement('div', null,
                  React.createElement('p', { className: "text-sm font-bold text-primary" }, "Control Environment"),
                  React.createElement('p', { className: "text-xs text-primary/50" }, "The 'Tone at the Top.' Does the founder value ethics or 'results at any cost'?")
                )
              ),
              React.createElement('li', { className: "flex items-start gap-4 p-4 bg-white border border-primary/5 rounded-xl" },
                React.createElement('div', { className: "w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" }),
                React.createElement('div', null,
                  React.createElement('p', { className: "text-sm font-bold text-primary" }, "Risk Assessment"),
                  React.createElement('p', { className: "text-xs text-primary/50" }, "Identifying where the money can leak (e.g., cash sales, inventory shrinkage).")
                )
              ),
              React.createElement('li', { className: "flex items-start gap-4 p-4 bg-white border border-primary/5 rounded-xl" },
                React.createElement('div', { className: "w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" }),
                React.createElement('div', null,
                  React.createElement('p', { className: "text-sm font-bold text-primary" }, "Monitoring"),
                  React.createElement('p', { className: "text-xs text-primary/50" }, "Checking the checkers. Ensuring the rules are still being followed.")
                )
              )
            )
          ),
          actionableNextStep: "Assess the 'Tone at the Top' in your organization: is compliance seen as a priority or a burden?"
        }
      ],
      quiz: [
        {
          id: "ic-q2-1",
          question: "What is the 'Control Environment' logically compared to?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "The foundation of a building.", explanation: "Correct. Without a strong environment of integrity, all other controls will fail." },
            { id: "opt2", text: "The roof of a building.", explanation: "Incorrect. Environment is the base upon which rules are built." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Types of Controls",
      badge: "L3: Strategic Tools",
      units: [
        {
          id: "ic-3-u1",
          title: "Preventive vs Detective",
          durationMins: 20,
          whyThisMatters: "Prevention is cheaper than detection, but detection is necessary when prevention fails.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "grid md:grid-cols-2 gap-6" },
            React.createElement('div', { className: "p-6 bg-emerald-50 border border-emerald-100 rounded-3xl" },
              React.createElement('p', { className: "text-[10px] font-black text-emerald-600 uppercase mb-2" }, "Preventive"),
              React.createElement('h5', { className: "font-bold text-primary mb-3" }, "The Locked Door"),
              React.createElement('p', { className: "text-xs text-primary/60 leading-relaxed italic" }, "Logic: Stop the error before it happens. Example: A system that won't let you process a payment without a manager's OTP.")
            ),
            React.createElement('div', { className: "p-6 bg-blue-50 border border-blue-100 rounded-3xl" },
              React.createElement('p', { className: "text-[10px] font-black text-blue-600 uppercase mb-2" }, "Detective"),
              React.createElement('h5', { className: "font-bold text-primary mb-3" }, "The CCTV Camera"),
              React.createElement('p', { className: "text-xs text-primary/60 leading-relaxed italic" }, "Logic: Identify the error after it has happened. Example: Monthly bank reconciliations or physical stock-takes.")
            )
          ),
          actionableNextStep: "Categorize your 'Sign-off' process: is it to prevent a mistake or just to record who made it?"
        }
      ],
      quiz: [
        {
          id: "ic-q3-1",
          question: "A monthly stock-take (counting inventory) is which type of control?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "Preventive", explanation: "Incorrect. Counting doesn't stop theft; it reveals that theft has happened." },
            { id: "opt2", text: "Detective", explanation: "Correct. It detects a mismatch between records and physical reality." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Area-Specific Controls",
      badge: "L4: The Operations Suite",
      units: [
        {
          id: "ic-4-u1",
          title: "Cash, Sales, and Purchases",
          durationMins: 25,
          whyThisMatters: "Money is most vulnerable at the points of entry and exit.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-8" },
            React.createElement('div', { className: "p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm" },
              React.createElement('h5', { className: "font-bold text-primary text-sm mb-4" }, "The Cash & Bank Cycle"),
              React.createElement('p', { className: "text-xs text-primary/60 leading-relaxed" }, "Logic: The person who collects cash from customers should NEVER be the same person who records it in the books or reconciles the bank statement.")
            ),
            React.createElement('div', { className: "p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm" },
              React.createElement('h5', { className: "font-bold text-primary text-sm mb-4" }, "The Purchase Cycle"),
              React.createElement('p', { className: "text-xs text-primary/60 leading-relaxed" }, "Logic: 3-Way Matching. Ensure the Purchase Order (what we asked for) matches the GRN (what we received) and the Invoice (what we are paying for).")
            )
          ),
          actionableNextStep: "Verify your bank reconciliation: is it performed by someone who doesn't have payment authorization?"
        }
      ],
      quiz: [
        {
          id: "ic-q4-1",
          question: "What is '3-Way Matching' in the purchase cycle designed to prevent?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Paying too much tax.", explanation: "Incorrect." },
            { id: "opt2", text: "Slow delivery of goods.", explanation: "Incorrect." },
            { id: "opt3", text: "Paying for goods that were never ordered or never received.", explanation: "Correct. It synchronizes the intent, the receipt, and the payment." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Auditor Focus Areas",
      badge: "L5: Scrutiny Logic",
      units: [
        {
          id: "ic-5-u1",
          title: "SOD and Authorization",
          durationMins: 20,
          whyThisMatters: "Auditors assume a system is weak if one person has too much power.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', { className: "text-sm font-medium text-primary/70 italic" }, "\"Segregation of Duties (SOD) is the logic of splitting a process so that no one person can commit a fraud AND hide it.\""),
            React.createElement('div', { className: "p-8 bg-red-50/50 border border-red-100 rounded-[40px] space-y-4" },
              React.createElement('h5', { className: "text-xs font-black text-red-600 uppercase tracking-widest" }, "Red Flags Auditors Notice"),
              React.createElement('ul', { className: "text-xs text-red-900/60 space-y-2" },
                React.createElement('li', null, "• Manual override of system prices without justification."),
                React.createElement('li', null, "• Blank signed cheques kept in a drawer."),
                React.createElement('li', null, "• Passwords shared among the accounts team."),
                React.createElement('li', null, "• Lack of supporting vouchers for high-value expenses.")
              )
            )
          ),
          actionableNextStep: "Audit your own desk: are there any 'convenience habits' that an auditor would flag as a control failure?"
        }
      ],
      quiz: [
        {
          id: "ic-q5-1",
          question: "Why is 'Segregation of Duties' critical in a finance department?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "It requires collaboration (collusion) for a fraud to succeed, making it harder.", explanation: "Correct. Splitting duties creates a natural check by the second person." },
            { id: "opt2", text: "It reduces the number of employees needed.", explanation: "Incorrect. It usually requires more distinct roles." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Consequences of Failure",
      badge: "L6: Risk Reality",
      units: [
        {
          id: "ic-6-u1",
          title: "Fraud and Misstatements",
          durationMins: 20,
          whyThisMatters: "A control failure isn't just a mistake; it is a legal and financial liability.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', null, "Internal control failures lead to three primary outcomes in India:"),
            React.createElement('div', { className: "grid gap-4" },
              React.createElement('div', { className: "p-4 bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm" },
                React.createElement('p', { className: "text-xs font-bold text-primary" }, "Statutory Penalties"),
                React.createElement('p', { className: "text-[10px] text-primary/50 italic" }, "Fines under the Companies Act for lack of Internal Financial Controls (IFC).")
              ),
              React.createElement('div', { className: "p-4 bg-white border-l-4 border-red-400 rounded-r-xl shadow-sm" },
                React.createElement('p', { className: "text-xs font-bold text-primary" }, "Auditor Qualification"),
                React.createElement('p', { className: "text-[10px] text-primary/50 italic" }, "A 'Modified' audit report that makes it difficult to get bank loans or investors.")
              )
            )
          ),
          actionableNextStep: "Review your last Audit Report: did the auditor mention any 'Significant Deficiencies'?"
        }
      ],
      quiz: [
        {
          id: "ic-q6-1",
          question: "Under the Companies Act 2013, are directors responsible for internal financial controls?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Yes, they must explicitly state that controls are adequate and operating effectively.", explanation: "Correct. The law places ultimate governance responsibility on the Board." },
            { id: "opt2", text: "No, that is the auditor's responsibility.", explanation: "Incorrect. Auditors only report on them; directors must build them." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "MSME Mini-Controls",
      badge: "L7: Practical Build",
      units: [
        {
          id: "ic-7-u1",
          title: "Controls without Complexity",
          durationMins: 20,
          whyThisMatters: "Small businesses don't need ERPs; they need owner-driven habits.",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', null, "If you have a small team, implement these 'Minimum Viable Controls':"),
            React.createElement('div', { className: "grid sm:grid-cols-2 gap-4" },
              React.createElement('div', { className: "p-5 bg-accent/5 rounded-2xl border border-accent/10" },
                React.createElement('p', { className: "text-xs font-bold text-primary mb-1" }, "Direct Bank View"),
                React.createElement('p', { className: "text-[10px] text-primary/50" }, "Owner alone should receive the daily balance SMS and OTPs for payments.")
              ),
              React.createElement('div', { className: "p-5 bg-primary/5 rounded-2xl border border-primary/5" },
                React.createElement('p', { className: "text-xs font-bold text-primary mb-1" }, "Surprise Counts"),
                React.createElement('p', { className: "text-[10px] text-primary/50" }, "Randomly count petty cash or inventory items once a month.")
              )
            )
          ),
          actionableNextStep: "Remove 'Payment Access' from everyone except the primary owner for 24 hours to see where the friction is."
        }
      ],
      quiz: [
        {
          id: "ic-q7-1",
          question: "What is the most effective control for a very small business with only 2 employees?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "Installing an expensive ERP software.", explanation: "Incorrect. Software is a tool, but behavior is the control." },
            { id: "opt2", text: "Hiring a full-time internal auditor.", explanation: "Incorrect. Not cost-effective at small scale." },
            { id: "opt3", text: "Direct management oversight and mandatory periodic reconciliation.", explanation: "Correct. Active owner involvement is the strongest small-scale control." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Controls vs Audit",
      badge: "L8: Maturity & Roles",
      units: [
        {
          id: "ic-8-u1",
          title: "Checking the System",
          durationMins: 15,
          whyThisMatters: "Completion means understanding that controls are 'the way we work,' not 'the event we prepare for.'",
          /* Fixed: Replaced JSX with React.createElement to fix "Cannot find name 'div'" and parsing errors in .ts file */
          content: React.createElement('div', { className: "space-y-6" },
            React.createElement('p', { className: "text-sm text-primary/70 leading-relaxed font-medium italic" }, "\"Internal Control is the immune system of a business. Internal Audit is the periodic health check-up that tells you if the immune system is working.\""),
            React.createElement('div', { className: "p-6 bg-[#0B1C2D] text-white rounded-[32px] border border-white/5 relative overflow-hidden" },
              React.createElement('p', { className: "text-xs leading-relaxed opacity-60 relative z-10" }, "While external auditors check the financial truth, internal control experts check the process logic. A company with perfect controls makes the auditor's job easy and the owner's sleep better."),
              React.createElement('div', { className: "absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" })
            )
          ),
          actionableNextStep: "Prepare a one-page 'Control Charter' for your office listing the 5 non-negotiable rules for money handling."
        }
      ],
      quiz: [
        {
          id: "ic-q8-1",
          question: "Is internal control a one-time project or a continuous process?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "A one-time project during the audit month.", explanation: "Incorrect." },
            { id: "opt2", text: "A continuous process integrated into daily operations.", explanation: "Correct. Logic says controls must function 365 days a year to be effective." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Companies Act 2013 Section 134(5)(e)", "SA 315 (Audit Standard)"],
    lastReviewedDate: "2025-02-10"
  },
  seo: {
    metaTitle: "Internal Control Basics India | Monitize Business",
    metaDescription: "Master the logic of Indian internal controls, IFC requirements, COSO framework, and segregation of duties for MSMEs."
  }
};
