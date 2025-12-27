
import { GoogleGenAI, Type } from "@google/genai";
import { LearningMode, OCRInterpretation, Flashcard } from "./types";

/**
 * GeminiService
 * 
 * Refined interface for the Monitize Learning Assistant and Laboratory Tools.
 * Focuses on symbol-free, professional, and interactive educational logic.
 */
export class GeminiService {
  private flashModel = 'gemini-3-flash-preview';
  private proModel = 'gemini-3-pro-preview';
  // Use gemini-2.5-flash-image for image generation and editing tasks
  private imageModel = 'gemini-2.5-flash-image';

  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async askFinancialQuestion(question: string): Promise<string> {
    if (!question || question.trim().length === 0) {
      return "Please enter a valid conceptual query.";
    }

    try {
      const ai = this.getClient();
      
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: question,
        config: {
          systemInstruction: `You are the Monitize Learning Assistant, an Institutional Mentor for Indian financial logic. 
          Your goal is to connect with the user by providing clear, jargon-free, and symbol-free educational responses.

          STRICT FORMATTING RULES:
          - DO NOT use markdown symbols: No asterisks (*), No hash symbols (#), No underscores (_), No bold tags.
          - Do not use dashes (-) for bullets; use the standard dot symbol (•) only.
          - Use clear paragraph breaks (double newlines) for readability.
          - Ensure the tone is professional, warm, and authoritative.
          - Do not provide financial advice; stay strictly within conceptual education.

          MANDATORY 5-PART STRUCTURE:
          1. Context: A natural opening sentence identifying the topic.
          2. Explanation: A cohesive paragraph explaining the logic.
          3. Key Features: Use plain text bullet points (•) for specific rules.
          4. Boundary Note: "This explanation is for educational purposes. Personal applicability depends on specific facts and current laws."
          5. Next Step: A neutral nudge to explore more.`,
          temperature: 0.2,
        }
      });
      
      let cleanText = (response.text || "")
        .replace(/[*#_~`]/g, '') 
        .replace(/^\s*[-+]\s+/gm, '• ') 
        .replace(/\n{3,}/g, '\n\n') 
        .trim();

      return cleanText || "I encountered a minor technical difficulty while retrieving this information.";
    } catch (error: any) {
      console.error("Gemini Error:", error);
      return "The learning system is currently undergoing maintenance. Please try your query in a few moments.";
    }
  }

  /**
   * generateLearningNotes
   * 
   * Transforms educational content into structured, retention-focused academic notes.
   */
  async generateLearningNotes(content: string, mode: string): Promise<string> {
    if (!content.trim()) return "Please provide content to process.";

    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: `MODE: ${mode}\n\nINPUT TEXT:\n${content}`,
        config: {
          systemInstruction: `You are an Academic Learning Assistant for a financial education platform.
          Your role is to transform the provided educational text into structured, retention-focused learning notes.

          STRICT RULES:
          • You are NOT a financial advisor, tax advisor, or examiner.
          • You must NOT add new facts, rules, rates, or assumptions.
          • You must NOT suggest actions, decisions, or compliance steps.
          • You must ONLY work with the concepts explicitly present in the input text.
          • Use neutral, academic, exam-safe language.
          • Avoid words like: should, must, recommended, advisable.
          • DO NOT use markdown symbols (asterisks, hashes, bold tags).
          • Use the dot symbol (•) for all lists.

          OUTPUT FORMAT:
          Title: (Short descriptive title)
          Core Concept: (2–3 lines)
          Key Points: • (Bullet points)
          Important Terms: • (Term): (Meaning)
          Common Misunderstandings: • (Bullet points, if applicable)
          Memory Hook: (1 short sentence)

          MANDATORY FOOTER:
          “These notes are for learning reinforcement only. They do not replace full modules or professional advice.”`,
        }
      });

      let text = (response.text || "")
        .replace(/[*#_~`]/g, '')
        .replace(/^\s*[-+]\s+/gm, '• ')
        .trim();

      return text || "The assistant was unable to synthesize these notes.";
    } catch (error) {
      console.error("Gemini Learning Assistant Error:", error);
      return "The academic system encountered an error. Please try again.";
    }
  }

  /**
   * generateFlashcards
   * 
   * Transforms educational text into structured recall cards based on strict design and quality control rules.
   */
  async generateFlashcards(content: string): Promise<Flashcard[]> {
    if (!content.trim()) return [];

    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: `SOURCE CONTENT:\n${content}`,
        config: {
          systemInstruction: `You are a Flashcard Generation Engine for a financial education platform. 
          Your task is to convert educational content into high-retention flashcards designed for recall, revision, and spaced learning.

          STRICT BOUNDARIES:
          - You are NOT an advisor, tutor, or examiner.
          - You must NOT add new facts, rules, examples, rates, or interpretations.
          - You must ONLY use information explicitly present in the input.
          - Use neutral, academic, India-relevant language.
          - Avoid advisory words: should, must, recommended, advisable.

          FLASHCARD DESIGN RULES:
          - Each flashcard must test ONE idea only.
          - Front = concise question or prompt.
          - Back = concise, factual answer (1–3 lines).
          - No explanations longer than necessary.
          - Avoid compound or multi-part questions.
          - Do NOT invent examples, case studies, or numerical assumptions.

          QUALITY CONTROL RULES:
          - Prefer recall-based questions over recognition-based questions.
          - If a sentence contains two ideas, split into two separate flashcards.
          - Avoid vague phrasing like "Explain" or "Describe".
          - Use precise prompts: "What is", "Why is", "How does", "What distinguishes X from Y", "What is the primary role of".

          TAGGING RULES:
          - difficulty: basic | intermediate | advanced.
          - category: definition | logic | distinction | clarification.

          OUTPUT SCHEMA:
          Return a JSON object with a "flashcards" key containing an array of objects.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              flashcards: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    front: { type: Type.STRING },
                    back: { type: Type.STRING },
                    difficulty: { 
                      type: Type.STRING, 
                      enum: ["basic", "intermediate", "advanced"] 
                    },
                    category: { 
                      type: Type.STRING, 
                      enum: ["definition", "logic", "distinction", "clarification"] 
                    },
                  },
                  required: ["id", "front", "back", "difficulty", "category"],
                },
              }
            },
            required: ["flashcards"]
          },
        }
      });

      const data = JSON.parse(response.text || '{"flashcards": []}');
      return (data.flashcards || []) as Flashcard[];
    } catch (error) {
      console.error("Gemini Flashcard Generator Error:", error);
      return [];
    }
  }

  /**
   * editImage
   */
  async editImage(base64Data: string, prompt: string, mimeType: string): Promise<string | null> {
    if (!base64Data || !prompt) return null;
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.imageModel,
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: prompt }
          ],
        },
      });
      const candidate = response.candidates?.[0];
      if (candidate?.content?.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData) {
            return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          }
        }
      }
      return null;
    } catch (error) {
      console.error("Gemini Image Editing Error:", error);
      return null;
    }
  }

  /**
   * explainDocument
   */
  async explainDocument(base64Data: string, mimeType: string): Promise<string | null> {
    if (!base64Data) return null;
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.imageModel,
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: "Identify the document type and explain its structure and key terms in simple neutral language. No advice." }
          ],
        },
      });
      return response.text || "No explanation generated.";
    } catch (error) {
      console.error("Gemini Document Explanation Error:", error);
      return "The explanation service encountered an error.";
    }
  }

  /**
   * interpretDocumentOCR
   */
  async interpretDocumentOCR(base64Data: string, mimeType: string, mode: LearningMode = 'standard'): Promise<OCRInterpretation | null> {
    if (!base64Data) return null;
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.imageModel,
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: `Extract text and provide educational interpretation. Mode: ${mode}` }
          ],
        },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              document_type_guess: { type: Type.STRING },
              confidence_note: { type: Type.STRING },
              extracted_text: { type: Type.STRING },
              simplified_explanation: { type: Type.STRING },
              key_terms: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    term: { type: Type.STRING },
                    meaning: { type: Type.STRING }
                  }
                }
              },
              learning_notes: { type: Type.STRING },
              limitations: { type: Type.STRING }
            }
          }
        }
      });
      return JSON.parse(response.text || '{}') as OCRInterpretation;
    } catch (error) {
      console.error("Gemini OCR Interpretation Error:", error);
      return null;
    }
  }
}

export const gemini = new GeminiService();
