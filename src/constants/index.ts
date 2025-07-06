// constants/index.ts - Export all constants

export const SKILL_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
} as const;

export const CATEGORIES = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  FULLSTACK: 'fullstack',
  MOBILE: 'mobile',
  DEVOPS: 'devops',
  DATA: 'data',
  AI_ML: 'ai_ml',
  SECURITY: 'security',
  BLOCKCHAIN: 'blockchain',
  GAMING: 'gaming',
  MANAGEMENT: 'management',
  ANALYSIS: 'analysis',
  QA: 'qa'
} as const;

export const LOGO_SOURCES = {
  API_URL: 'https://api.svgl.app',
  BASE_URL: 'https://svgl.app/library/',
  DOCUMENTATION: 'https://svgl.app/api'
} as const;

// Export types for the constants
export type SkillLevelType = typeof SKILL_LEVELS[keyof typeof SKILL_LEVELS];
export type CategoryType = typeof CATEGORIES[keyof typeof CATEGORIES];