// src/types/index.ts - TypeScript type definitions

import React from 'react';

export interface RequiredSkill {
  skill: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  logo: string;
}

export interface TechRole {
  label: string;
  value: string;
  description: string;
  required_skills: RequiredSkill[];
}

export interface SkillLevel {
  label: string;
  value: string;
  description: string;
}

export interface Category {
  label: string;
  roles: string[];
}

export interface TechRolesData {
  tech_roles: Record<string, TechRole>;
  skill_levels: Record<string, SkillLevel>;
  categories: Record<string, Category>;
  logo_sources: {
    api_url: string;
    base_url: string;
    documentation: string;
  };
  metadata: {
    version: string;
    created_date: string;
    description: string;
    total_roles: number;
    total_unique_skills: number;
    last_updated: string;
  };
}

export interface SkillOption {
  label: string;
  value: string;
  logo: string;
  category: string;
  level: string;
}

export interface RoleOption {
  label: string;
  value: string;
  description: string;
}

export interface MultiSelectOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  otherCollege?: boolean;
}

export interface SkillStatistics {
  totalSkills: number;
  totalCategories: number;
  skillsWithLogos: number;
  levelDistribution: Record<string, number>;
  categoryCounts: Record<string, number>;
  mostPopularSkills: SkillOption[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  suggestions: string[];
}

// Utility types for better type inference
export type SkillLevelType = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type RoleKey = keyof TechRolesData['tech_roles'];
export type CategoryKey = keyof TechRolesData['categories'];