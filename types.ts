
import React from 'react';

// Shared view type for navigation
export type View = 'home' | 'learn' | 'tools' | 'about' | 'services' | 'auth' | 'market-basics' | 'tax-fundamentals' | 'pf-basics' | 'business-basics' | 'ai-lab';

export type LabTool = 'hub' | 'image-processor' | 'jargon-simplifier' | 'document-explainer' | 'ocr-interpreter' | 'learning-assistant' | 'flashcard-generator';

export type LearningMode = 'beginner' | 'standard' | 'deepdive';

export interface KeyTerm {
  term: string;
  meaning: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  category: 'definition' | 'logic' | 'distinction' | 'clarification';
}

export interface OCRInterpretation {
  document_type_guess: string | null;
  confidence_note: string;
  extracted_text: string;
  simplified_explanation: string;
  key_terms: KeyTerm[];
  learning_notes: string;
  limitations: string;
}

export interface OfferingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Added User Profile Types
export type UserCategory = 'individual' | 'professional' | 'businessowner' | 'student' | '';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

// Added User interface for authentication and progress tracking
export interface User {
  id: string;
  fullName: string;
  email: string;
  profile?: {
    category: UserCategory;
    interests: string[];
    experience: ExperienceLevel;
  };
  progress: {
    marketBasics: {
      level: number;
      completedLevels: number[];
      lastUnitId: string;
    };
    taxBasics: {
      reviewed: boolean;
    };
  };
}

// Added AuthState interface
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

// Added ChatMessage interface for the chatbot
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Added Learning Path Types
export interface LearningUnit {
  id: string;
  title: string;
  readingTime: string;
  content: React.ReactNode;
}

export interface QuizOption {
  id: string;
  text: string;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  correctOptionId: string;
  options: QuizOption[];
}

export interface LearningLevel {
  id: number;
  title: string;
  badge: string;
  units: LearningUnit[];
  quiz?: QuizQuestion[];
}
