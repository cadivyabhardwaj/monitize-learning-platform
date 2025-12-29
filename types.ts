
import React from 'react';

// Shared view type for navigation
export type View = 'home' | 'learn' | 'tools' | 'about' | 'services' | 'auth' | 'market-basics' | 'tax-fundamentals' | 'pf-basics' | 'business-basics' | 'ai-lab';

export type LabTool = 
  | 'hub' 
  | 'image-processor' 
  | 'jargon-simplifier' 
  | 'document-explainer' 
  | 'ocr-interpreter' 
  | 'learning-assistant' 
  | 'flashcard-generator'
  | 'concept-map'
  | 'assumption-auditor'
  | 'bias-spectrometer'
  | 'statutory-timeline'
  | 'analogical-instructor'
  | 'socratic-mentor'
  | 'clause-differencer'
  | 'readability-meter'
  | 'linguistic-bridge'
  | 'mental-model-matcher';

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

// User Profile Types
export type UserCategory = 'individual' | 'professional' | 'businessowner' | 'student' | '';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

// Added LearningUnit and LearningLevel interfaces to fix module page errors
export interface LearningUnit {
  id: string;
  title: string;
  readingTime: string;
  content: React.ReactNode;
}

export interface LearningLevel {
  id: number;
  title: string;
  badge: string;
  units: LearningUnit[];
  quiz?: QuizQuestion[];
}

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
    // Added specific module tracking expected by the dashboard and login logic
    marketBasics: {
      level: number;
      completedLevels: number[];
      lastUnitId: string;
    };
    taxBasics: {
      reviewed: boolean;
    };
    completedModuleIds: string[];
    activeModuleId?: string;
    levelProgress: Record<string, number>; // moduleId -> levelId
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// COMPREHENSIVE LEARNING MODULE SCHEMA
export interface ModuleUnit {
  id: string;
  title: string;
  durationMins: number;
  whyThisMatters: string;
  content: React.ReactNode | string;
  actionableNextStep: string;
  interactiveComponent?: 'SIP_CALC' | 'EMI_CALC' | 'TAX_SLAB_VIEW';
  // Extended Pedagogy
  structuralExplanation?: string[];
  accountingContext?: string[];
  legalContext?: string[];
  decisionTradeOffs?: string[];
  constraintsAndRisks?: string[];
  commonMisinterpretations?: string[];
}

export interface MythVsFact {
  myth: string;
  fact: string;
}

export interface ModuleLevel {
  id: number;
  title: string;
  badge: string;
  units: ModuleUnit[];
  quiz: QuizQuestion[];
  mythVsFact?: MythVsFact[];
  realWorldAnalogies?: string[];
  reflectionPrompt?: string;
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

export interface ModuleCompliance {
  needsLegalReview: boolean;
  regulatedTopic: boolean;
  regulatoryReferences: string[];
  lastReviewedDate: string;
}

export type ModuleCategory = 'Personal' | 'Tax' | 'Business' | 'Markets' | 'Technical';

export interface LearningModule {
  id: string;
  title: string;
  category: ModuleCategory;
  shortDescription: string;
  detailedDescription: string;
  learningObjectives: string[];
  estimatedEffort: 'Light' | 'Fundamental' | 'Deep' | 'Professional';
  iconName: string; // Used to map Lucide icons
  levels: ModuleLevel[];
  compliance: ModuleCompliance;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
