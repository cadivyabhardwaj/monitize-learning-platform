
import { LearningModule } from '../types';

export const documentLiteracyModule: LearningModule = {
  id: "document-literacy",
  title: "Document Literacy",
  category: "Technical",
  shortDescription: "Learn how to read, interpret, and understand common Indian financial and legal documents without advice or filing guidance.",
  detailedDescription: "A structured journey through the anatomy of Indian documentation. This module builds the cognitive framework required to identify key identifiers, validity periods, and financial figures across standard administrative records. Educational awareness only. This module does not provide legal, financial, or compliance advice.",
  learningObjectives: [
    "Understand the logical difference between an informational record and a binding obligation",
    "Identify standard structural elements of Indian administrative documents",
    "Grasp the nuances of validity periods and statutory date formats",
    "Recognize the role of unique identifiers like PAN, GSTIN, and DIN",
    "Learn to interpret financial tables and aggregate figures in reports",
    "Identify the intent behind notes, clauses, and disclaimers",
    "Distinguish between statutory notices and general circulars",
    "Understand the characteristics of digital signatures and portal-generated records",
    "Build a mental checklist for questioning document source and authority"
  ],
  estimatedEffort: "Deep",
  iconName: "FileText",
  levels: [
    {
      id: 1,
      title: "Why Documents Matter",
      badge: "L1: Intent vs Obligation",
      units: [
        {
          id: "doc-1-u1",
          title: "The Purpose of the Paper Trail",
          durationMins: 20,
          whyThisMatters: "Mistaking an information slip for a bill creates unnecessary friction.",
          content: "In the Indian financial system, documents serve two primary logical roles: Records (what happened) and Obligations (what must happen). Understanding the 'Intent' of a document prevents panic. A bank statement is a record; a loan demand notice is an obligation. Identifying this intent is the first step of literacy.",
          actionableNextStep: "Examine a recent physical or digital document and label it as either 'Historical Record' or 'Future Obligation'."
        }
      ],
      quiz: [
        {
          id: "doc-1-q1",
          question: "Which of the following is logically a 'Historical Record' rather than a 'Future Obligation'?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "A Property Tax Demand Note.", explanation: "Incorrect. This demands future action (payment)." },
            { id: "opt2", text: "A Salary Slip for the previous month.", explanation: "Correct. This is a record of what has already occurred." },
            { id: "opt3", text: "A statutory notice to file a missing return.", explanation: "Incorrect. This is an obligation for future compliance." }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Structure & Anatomy",
      badge: "L2: Reading the Layout",
      units: [
        {
          id: "doc-2-u1",
          title: "Headers, Sections, and Footers",
          durationMins: 25,
          whyThisMatters: "Most critical information is stored in predictable zones.",
          content: "Indian documents follow a standard visual logic. 1. The Header identifies the Authority (Govt Dept, Bank, Company). 2. The Body contains the Data (Figures, Tables). 3. The Footer contains the Verification (Signatures, QR codes, Stamp duty references). If a document lacks a clear 'Authority Header', its validity should be conceptually questioned.",
          actionableNextStep: "Locate the 'Unique Document Identification Number' (UDIN) often found in the footer of CA-certified documents."
        }
      ],
      quiz: [
        {
          id: "doc-2-q1",
          question: "Where is the 'Authority' or 'Issuer' of an Indian document usually logically placed?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "In the top Header section.", explanation: "Correct. The issuing entity is almost always declared at the very top." },
            { id: "opt2", text: "Hidden inside the fine print at the bottom.", explanation: "Incorrect. The footer is for verification, not primary identification." },
            { id: "opt3", text: "On the back of the page only.", explanation: "Incorrect. Institutional documents prioritize identity on the front." }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Dates & Validity",
      badge: "L3: The Time Variable",
      units: [
        {
          id: "doc-3-u1",
          title: "FY, AY, and Expiry Logic",
          durationMins: 25,
          whyThisMatters: "Financial documents in India often use non-calendar years.",
          content: "A document dated March 2024 might refer to the Financial Year (FY) 2023-24. You must distinguish between: 1. Date of Issue (when it was printed). 2. Period of Coverage (the time it refers to). 3. Validity Period (how long it remains 'live'). For example, an Insurance Policy note has a clear coverage start and end date.",
          actionableNextStep: "Check your last Car Insurance or Health Insurance document for the 'Policy Period' vs 'Date of Issue'."
        }
      ],
      quiz: [
        {
          id: "doc-3-q1",
          question: "A document refers to 'AY 2024-25'. What is the logical 'Period of Coverage' for the income reported?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "April 2024 to March 2025.", explanation: "Incorrect. That would be FY 2024-25." },
            { id: "opt2", text: "April 2023 to March 2024.", explanation: "Correct. Assessment Year (AY) always refers to the income earned in the previous Financial Year (FY)." },
            { id: "opt3", text: "January 2024 to December 2024.", explanation: "Incorrect. The Indian fiscal year starts in April." }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Names & Identifiers",
      badge: "L4: Who and What",
      units: [
        {
          id: "doc-4-u1",
          title: "KYC and Entity Identifiers",
          durationMins: 30,
          whyThisMatters: "A single digit error in an identifier can nullify a document's utility.",
          content: "Identifiers are the 'keys' to the digital footprint. Common codes: 1. PAN (Income Tax). 2. GSTIN (Indirect Tax). 3. DIN (Directors of Companies). 4. UAN (Provident Fund). Literacy involves ensuring these match exactly across all your records. A mismatch between a bank record name and a PAN record name is a common cause of administrative delays.",
          actionableNextStep: "Compare the name on your PAN card with the name on your Aadhaar card for any spelling variances."
        }
      ],
      quiz: [
        {
          id: "doc-4-q1",
          question: "Why is a GSTIN (GST Identification Number) conceptually important for a business document?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "It proves the business is a large corporation.", explanation: "Incorrect. Small businesses also have GSTINs." },
            { id: "opt2", text: "It is a secret code for discounts.", explanation: "Incorrect. It is a public-facing regulatory identifier." },
            { id: "opt3", text: "It identifies the entity responsible for collecting and depositing consumption tax.", explanation: "Correct. It links the document to the specific tax-reporting entity." }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Financial Figures",
      badge: "L5: Decoding the Tables",
      units: [
        {
          id: "doc-5-u1",
          title: "Gross, Net, and Aggregates",
          durationMins: 30,
          whyThisMatters: "Focusing on the wrong column leads to incorrect financial snapshots.",
          content: "Financial tables use specific logic. 'Gross' usually means before any deductions; 'Net' means the final amount after all adjustments. In Indian tax or salary docs, the difference between these columns often represents TDS or statutory contributions. Always look for the 'Total' or 'Aggregate' row to understand the document's scale.",
          actionableNextStep: "Open a salary slip or a bank interest certificate and calculate the percentage difference between 'Gross' and 'Net'."
        }
      ],
      quiz: [
        {
          id: "doc-5-q1",
          question: "In a financial document, what does the term 'Aggregate' typically represent logically?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "The lowest possible value in a table.", explanation: "Incorrect. Usually refers to the sum." },
            { id: "opt2", text: "The total sum of various individual components.", explanation: "Correct. It provides the 'big picture' total." },
            { id: "opt3", text: "A specialized tax that is only paid in cash.", explanation: "Incorrect. It is a mathematical term, not a specific tax." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Fine Print & Clauses",
      badge: "L6: The 'Hidden' Logic",
      units: [
        {
          id: "doc-6-u1",
          title: "Notes and Disclaimers",
          durationMins: 25,
          whyThisMatters: "Most liabilities are defined in the sections people skip.",
          content: "Notes in Indian documents are not 'extra' information; they are usually 'limiting' information. They define the 'Except' and the 'Unless'. Phrases like 'Subject to realization' or 'Terms and Conditions Apply' shift the risk from the issuer to the receiver. A literate reader looks at the note numbers (e.g., [1], *) immediately after reading a headline figure.",
          actionableNextStep: "Locate a disclaimer on an investment advertisement or a bank notification and identify the 'Limit of Liability'."
        }
      ],
      quiz: [
        {
          id: "doc-6-q1",
          question: "When you see an asterisk (*) next to a figure in a document, what is the logical next step?",
          correctOptionId: "opt1",
          options: [
            { id: "opt1", text: "Look for the corresponding note at the bottom of the page.", explanation: "Correct. The asterisk signals that there is a conditional rule or limitation explained elsewhere." },
            { id: "opt2", text: "Assume it is a printing error and ignore it.", explanation: "Incorrect. It is a deliberate signal for further reading." },
            { id: "opt3", text: "Sign the document immediately.", explanation: "Incorrect. You should read the condition first." }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Notices vs Information",
      badge: "L7: Identifying Risk",
      units: [
        {
          id: "doc-7-u1",
          title: "Statutory Notices vs Circulars",
          durationMins: 20,
          whyThisMatters: "One requires immediate professional help; the other is for awareness.",
          content: "In India, a 'Circular' is for everyone (general update). A 'Notice' is for YOU (specific requirement). Notices from the Income Tax Dept or GST Dept usually contain a 'DIN' (Document Identification Number) and a 'Section' reference. Learning to spot the 'Response Deadline' on a notice is a critical defensive skill.",
          actionableNextStep: "If you receive a notice, identify the 'Deadline' and the 'Issuing Authority' before reading the specific details."
        }
      ],
      quiz: [
        {
          id: "doc-7-q1",
          question: "What is a major logical indicator that a document is a 'Statutory Notice' rather than an advertisement?",
          correctOptionId: "opt3",
          options: [
            { id: "opt1", text: "It uses a lot of colorful graphics.", explanation: "Incorrect. Notices are usually plain and formal." },
            { id: "opt2", text: "It promises a guaranteed return on investment.", explanation: "Incorrect. That sounds like a marketing circular." },
            { id: "opt3", text: "It references specific legal sections and provides a deadline for response.", explanation: "Correct. These are hallmarks of a formal legal mandate." }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Digital Verification",
      badge: "L8: The Paperless Reality",
      units: [
        {
          id: "doc-8-u1",
          title: "QR Codes and Digital Signatures",
          durationMins: 20,
          whyThisMatters: "Digital records can be easily faked; verification is mandatory.",
          content: "Most modern Indian docs (Aadhaar, GST certs, Income Tax orders) are digitally signed. This often appears as a green tick or a 'Digitally Signed by' text box. The logical core of a modern document is the QR Code. Scanning it with an official app (not a general scanner) is the only way to ensure the data on the paper matches the data in the government database.",
          actionableNextStep: "Download an official scanner (like DigiLocker) and scan the QR code on your Aadhaar to see the 'Verified' status."
        }
      ],
      quiz: [
        {
          id: "doc-8-q1",
          question: "How should you logically verify the authenticity of a modern portal-generated certificate in India?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "By checking if the paper is thick and heavy.", explanation: "Incorrect. Digital authenticity has nothing to do with paper quality." },
            { id: "opt2", text: "By scanning the embedded QR code with an official department app.", explanation: "Correct. This verifies the data against the primary source database." },
            { id: "opt3", text: "By calling the customer support of the website where you found it.", explanation: "Incorrect. Digital signatures and QR codes are self-verifying technical tools." }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "The Literate Questioner",
      badge: "L9: Professional Readiness",
      units: [
        {
          id: "doc-9-u1",
          title: "Asking the Right Questions",
          durationMins: 15,
          whyThisMatters: "Education ends here; professional engagement begins.",
          content: "Literacy is not about having all the answers; it is about knowing what to ask your professional (CA/Lawyer). 1. Who is the Issuer? 2. Is this Mandatory? 3. What is the Deadline? 4. Does this identifier (PAN/GST) belong to me? 5. Does the math in the tables add up? This framework ensures that when you seek professional advice, you are a participant, not just a bystander. Educational awareness only. This module does not provide legal, financial, or compliance advice.",
          actionableNextStep: "Prepare a list of 'Verification Questions' for the next financial document you need to sign."
        }
      ],
      quiz: [
        {
          id: "doc-9-q1",
          question: "What is the ultimate goal of achieving document literacy?",
          correctOptionId: "opt2",
          options: [
            { id: "opt1", text: "To replace the need for accountants and lawyers.", explanation: "Incorrect. Complexity usually requires experts; literacy helps you work with them." },
            { id: "opt2", text: "To be an informed participant who can identify key facts and risks.", explanation: "Correct. Literacy enables informed decision-making and better professional collaboration." },
            { id: "opt3", text: "To win arguments on social media.", explanation: "Incorrect. The goal is personal and professional preparedness." }
          ]
        }
      ]
    }
  ],
  compliance: {
    needsLegalReview: true,
    regulatedTopic: true,
    regulatoryReferences: ["Indian Evidence Act", "IT Act 2000", "Income Tax Act"],
    lastReviewedDate: "2024-12-05"
  },
  seo: {
    metaTitle: "Document Literacy India | Monitize Learning",
    metaDescription: "Master the logic of Indian financial and legal documents. Learn to read PAN, GST, ITR, and statutory notices with clarity."
  }
};
