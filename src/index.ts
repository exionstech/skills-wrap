// src/index.ts - Main entry point for @exionstech/skills-wrap

// Export all data
export { techRolesData } from './data/tech-roles';

// Export all types
export type {
  SkillOption,
  RoleOption,
  MultiSelectOption,
  TechRole,
  RequiredSkill,
  SkillLevel,
  Category,
  TechRolesData,
  SkillStatistics,
  ValidationResult
} from './types';

// Export all utility functions
export {
  getAllSkillsOptions,
  getSkillsByCategory,
  getSkillsByRole,
  getAllRolesOptions,
  getSkillsByLevel,
  getSkillByValue,
  formatSkillsForMultiSelect,
  getSkillsCountByCategory,
  getMostPopularSkills,
  getSkillsByLevels,
  searchSkills,
  getRelatedSkills,
  validateSkillSelection,
  getSkillStatistics,
  createSkillIcon
} from './utils/skills-data';

// Export constants
export {
  SKILL_LEVELS,
  CATEGORIES,
  LOGO_SOURCES
} from './constants';

// Export version
export const version = '1.0.0';