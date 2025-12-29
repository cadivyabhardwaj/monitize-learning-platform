
import React from 'react';

export type View = 'home' | 'learn' | 'tools' | 'about' | 'services' | 'auth' | 'ai-lab' | 'market-basics' | 'tax-fundamentals' | 'pf-basics';

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

/* Fixed: Added UserCategory and ExperienceLevel types to match AuthPage and User profile usage */
export type UserCategory = 'individual' | 'professional' | 'businessowner' | 'student';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export type LearningMode = 'beginner' | 'standard' | 'deepdive';

export interface AuditEntry {
  id: string;
  moduleId?: string;
  levelId?: number;
  toolId?: LabTool;
  timestamp: number;
  actionType: 'viewed' | 'completed' | 'generated' | 'confirmed';
  contentSource: 'static' | 'AI-generated' | 'OCR';
}

export type ModuleStatus = 'not-started' | 'in-progress' | 'completed';

export interface KeyTerm {
  term: string;
  meaning: string;
}

/* Fixed: Added missing QuizOption interface used in QuizQuestion */
export interface QuizOption {
  id: string;
  text: string;
  explanation: string;
}

/* Fixed: Added missing QuizQuestion interface used in ModuleLevel and exported for page imports */
export interface QuizQuestion {
  id: string;
  question: string;
  correctOptionId: string;
  options: QuizOption[];
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

export interface User {
  id: string;
  fullName: string;
  email: string;
  /* Fixed: Changed category and experience to use strict types */
  profile?: {
    category: UserCategory;
    interests: string[];
    experience: ExperienceLevel;
  };
  progress: {
    completedModuleIds: string[];
    levelProgress: Record<string, number>; 
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

export interface ModuleUnit {
  id: string;
  title: string;
  /* Fixed: Added readingTime and made several fields optional to support standalone learning pages (Market, Tax, PF) */
  readingTime?: string;
  durationMins?: number;
  whyThisMatters?: string;
  content: React.ReactNode | string;
  actionableNextStep?: string;
  /* Fixed: Added metadata fields used in the various learning module registry files */
  structuralExplanation?: string[];
  legalContext?: string[];
  accountingContext?: string[];
  constraintsAndRisks?: string[];
  decisionTradeOffs?: string[];
  commonMisinterpretations?: string[];
  realWorldAnalogies?: string[];
  reflectionPrompt?: string;
}

export interface ModuleLevel {
  id: number;
  title: string;
  badge: string;
  units: ModuleUnit[];
  quiz: QuizQuestion[];
  /* Fixed: Added optional metadata fields for Levels, including reflectionPrompt used in registry files */
  mythVsFact?: { myth: string; fact: string }[];
  realWorldAnalogies?: string[];
  reflectionPrompt?: string;
}

/* Fixed: Export LearningLevel as an alias for ModuleLevel to support legacy page imports */
export type LearningLevel = ModuleLevel;

export type ModuleCategory = 'Personal' | 'Tax' | 'Business' | 'Markets' | 'Technical';

export interface LearningModule {
  id: string;
  title: string;
  category: ModuleCategory;
  shortDescription: string;
  detailedDescription: string;
  learningObjectives: string[];
  estimatedEffort: 'Light' | 'Fundamental' | 'Deep' | 'Professional';
  iconName: string;
  levels: ModuleLevel[];
  compliance: {
    needsLegalReview: boolean;
    regulatedTopic: boolean;
    regulatoryReferences: string[];
    lastReviewedDate: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}
