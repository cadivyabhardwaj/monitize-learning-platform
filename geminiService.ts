
import { GoogleGenAI, Type } from "@google/genai";
import { LearningMode, OCRInterpretation, Flashcard, LabTool } from "./types";

/**
 * GeminiService
 * 
 * Refined interface for the Monitize Learning Assistant and Laboratory Tools.
 * Focuses on symbol-free, professional, and interactive educational logic.
 */
export class GeminiService {
  private flashModel = 'gemini-3-flash-preview';
  private proModel = 'gemini-3-pro-preview';
  private imageModel = 'gemini-2.5-flash-image';

  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async processCognitiveTask(toolId: LabTool, input: string, context?: any): Promise<string> {
    if (!input.trim()) return "Please provide an input for analysis.";

    let systemInstruction = "";
    switch (toolId) {
      case 'bias-spectrometer':
        systemInstruction = "You are a Cognitive Bias Analyzer. Scan the input text for psychological triggers (FOMO, Loss Aversion, Recency Bias, etc.). FORMAT: Identify 3 triggers. For each: Name, Intensity (1-10), and Neutral Interpretation. STRICT: Do not label news as true or false. Do not advise against investments. Use dot symbols for bullets.";
        break;
      case 'analogical-instructor':
        systemInstruction = `You are an Analogical Educator. Explain the input concept using a metaphor from ${context?.category || 'Nature'}. FORMAT: 1. Core Logic (Plain English). 2. The Metaphor (Narrative). 3. Limits of the Metaphor. STRICT: No financial advice. Professional tone.`;
        break;
      case 'assumption-auditor':
        systemInstruction = "You are an Assumption Auditor. Identify unstated premises in the provided text. FORMAT: List 3 unstated assumptions (e.g., 'Assumes 100% market liquidity'). STRICT: Do not judge the assumptions. Only identify them for educational awareness.";
        break;
      case 'concept-map':
        systemInstruction = "You are a Prerequisite Mapper. Identify the foundational concepts needed to understand the input term. FORMAT: A hierarchy using symbols (•). Example: Term -> Pre-req 1 -> Pre-req 2. STRICT: Max 5 items. No advice.";
        break;
      case 'linguistic-bridge':
        systemInstruction = `You are a Colloquial Translator for Indian finance. Translate the input into a ${context?.dialect || 'Hinglish'} conversational logic. STRICT: Use educational context. Do not provide certified legal translation.`;
        break;
      case 'mental-model-matcher':
        systemInstruction = "Identify which General Mental Model (First Principles, Pareto, Occam's Razor) best applies to the input logic. FORMAT: Model Name, Brief Application logic.";
        break;
      case 'readability-meter':
        systemInstruction = "Analyze the reading difficulty of the text. Provide a Grade level and highlight 2 'Dense Zones'.";
        break;
      case 'socratic-mentor':
        systemInstruction = "Do not give answers. Ask the user 3 challenging questions based on the input that force them to derive the logic themselves.";
        break;
      case 'statutory-timeline':
        systemInstruction = "Summarize the evolution of the mentioned law or regulation over the last 5 years. FORMAT: Year-by-year summary of logic changes. Do not predict future changes.";
        break;
      case 'clause-differencer':
        systemInstruction = "Compare two concepts or text snippets provided in the input. Focus on logical differences (e.g. scope, liability). FORMAT: Difference Point 1, 2, 3.";
        break;
      default:
        systemInstruction = "You are a neutral administrative assistant. Provide structured, educational insights based on input.";
    }

    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: input,
        config: {
          systemInstruction: systemInstruction + " ALWAYS include this footer: 'This is an experimental cognitive aid. Logic identified is for awareness and does not replace professional advice.'",
          temperature: 0.1,
        }
      });
      const rawText = response.text || "";
      // Avoid raw backtick in character class to prevent potential parser issues
      return rawText.replace(/[*#_~\x60]/g, '').trim();
    } catch (error) {
      return "The cognitive engine encountered an error. Please refine your input.";
    }
  }

  async decodeFinancialTerm(term: string): Promise<string> {
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: "DEFINE TERM: " + term,
        config: {
          systemInstruction: "You are the Monitize Dictionary. Provide a strictly neutral, institutional definition for the requested Indian financial term. FORMAT: 1. Definition (Max 25 words). 2. Regulatory Context (Max 20 words). NO symbols, NO advice, NO markdown.",
          temperature: 0.1,
        }
      });
      const rawText = response.text || "";
      return rawText.replace(/[*#_~\x60]/g, '').trim();
    } catch (error) {
      return "Definition unavailable. Please check official regulatory glossaries.";
    }
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
          systemInstruction: "You are the Monitize Learning Assistant, an Institutional Mentor for Indian financial logic. STRICT FORMATTING RULES: - DO NOT use markdown symbols: No asterisks (*), No hash symbols (#), No underscores (_), No bold tags. - Do not use dashes (-) for bullets; use the standard dot symbol (•) only. - Use clear paragraph breaks (double newlines) for readability. - Ensure the tone is professional, warm, and authoritative. - Do not provide financial advice; stay strictly within conceptual education. MANDATORY 5-PART STRUCTURE: 1. Context: A natural opening sentence identifying the topic. 2. Explanation: A cohesive paragraph explaining the logic. 3. Key Features: Use plain text bullet points (•) for specific rules. 4. Boundary Note: 'This explanation is for educational purposes. Personal applicability depends on specific facts and current laws.' 5. Next Step: A neutral nudge to explore more.",
          temperature: 0.2,
        }
      });
      
      const rawText = response.text || "";
      let cleanText = rawText
        .replace(/[*#_~\x60]/g, '') 
        .replace(/^\s*[-+]\s+/gm, '• ') 
        .replace(/\n{3,}/g, '\n\n') 
        .trim();

      return cleanText || "I encountered a minor technical difficulty while retrieving this information.";
    } catch (error: any) {
      return "The learning system is currently undergoing maintenance. Please try your query in a few moments.";
    }
  }

  async generateLearningNotes(content: string, mode: string): Promise<string> {
    if (!content.trim()) return "Please provide content to process.";

    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: "MODE: " + mode + "\n\nINPUT TEXT:\n" + content,
        config: {
          systemInstruction: "You are an Academic Learning Assistant for a financial education platform. STRICT RULES: • You are NOT a financial advisor. • You must ONLY work with the concepts explicitly present in the input text. • DO NOT use markdown symbols. • Use the dot symbol (•) for all lists. OUTPUT FORMAT: Title, Core Concept, Key Points, Important Terms, Common Misunderstandings, Memory Hook. MANDATORY FOOTER: 'These notes are for learning reinforcement only. They do not replace full modules or professional advice.'",
        }
      });

      const rawText = response.text || "";
      let text = rawText
        .replace(/[*#_~\x60]/g, '')
        .replace(/^\s*[-+]\s+/gm, '• ')
        .trim();

      return text || "The assistant was unable to synthesize these notes.";
    } catch (error) {
      return "The academic system encountered an error. Please try again.";
    }
  }

  async generateFlashcards(content: string): Promise<Flashcard[]> {
    if (!content.trim()) return [];

    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: "SOURCE CONTENT:\n" + content,
        config: {
          systemInstruction: "You are a Flashcard Generation Engine. Convert educational content into JSON flashcards. Return a JSON object with a 'flashcards' key containing an array of objects with id, front, back, difficulty, category.",
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
                    difficulty: { type: Type.STRING, enum: ["basic", "intermediate", "advanced"] },
                    category: { type: Type.STRING, enum: ["definition", "logic", "distinction", "clarification"] },
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
      return [];
    }
  }

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
            return "data:" + part.inlineData.mimeType + ";base64," + part.inlineData.data;
          }
        }
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async explainDocument(base64Data: string, mimeType: string): Promise<string | null> {
    if (!base64Data) return null;
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: "Identify the document type and explain its structure and key terms in simple neutral language. No advice." }
          ],
        },
      });
      return response.text || "No explanation generated.";
    } catch (error) {
      return "The explanation service encountered an error.";
    }
  }

  async interpretDocumentOCR(base64Data: string, mimeType: string, mode: LearningMode = 'standard'): Promise<OCRInterpretation | null> {
    if (!base64Data) return null;
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: this.flashModel,
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: "Extract text and provide educational interpretation. Mode: " + mode }
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
      return null;
    }
  }
}

export const gemini = new GeminiService();
