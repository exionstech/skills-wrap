// utils/skills-data.ts - Complete utility functions
import React from 'react';
import { techRolesData } from '../data/tech-roles';

// Types
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

// Utility function to create class names (simple implementation)
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Get all unique skills from all roles
export const getAllSkillsOptions = (): SkillOption[] => {
  const skillsMap = new Map<string, SkillOption>();
  
  // Extract all unique skills from all roles
  Object.entries(techRolesData.tech_roles).forEach(([roleKey, roleData]) => {
    roleData.required_skills.forEach(skill => {
      const skillKey = skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '_');
      if (!skillsMap.has(skillKey)) {
        skillsMap.set(skillKey, {
          label: skill.skill,
          value: skillKey,
          logo: skill.logo || '',
          category: roleData.label,
          level: skill.level
        });
      }
    });
  });
  
  // Convert to array and sort alphabetically
  return Array.from(skillsMap.values()).sort((a, b) => a.label.localeCompare(b.label));
};

// Get skills grouped by categories
export const getSkillsByCategory = (): Record<string, SkillOption[]> => {
  const allSkills = getAllSkillsOptions();
  const categories: Record<string, SkillOption[]> = {};
  
  allSkills.forEach(skill => {
    const category = skill.category || 'Other';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(skill);
  });
  
  return categories;
};

// Get skills by specific role
export const getSkillsByRole = (roleValue: string): SkillOption[] => {
  const role = techRolesData.tech_roles[roleValue as keyof typeof techRolesData.tech_roles];
  if (!role) return [];
  
  return role.required_skills.map(skill => ({
    label: skill.skill,
    value: skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '_'),
    logo: skill.logo || '',
    category: role.label,
    level: skill.level
  }));
};

// Get all roles options
export const getAllRolesOptions = (): RoleOption[] => {
  return Object.values(techRolesData.tech_roles).map(role => ({
    label: role.label,
    value: role.value,
    description: role.description
  }));
};

// Get skills by level
export const getSkillsByLevel = (level: string): SkillOption[] => {
  const allSkills = getAllSkillsOptions();
  return allSkills.filter(skill => skill.level === level);
};

// Get skill by value
export const getSkillByValue = (value: string): SkillOption | undefined => {
  const allSkills = getAllSkillsOptions();
  return allSkills.find(skill => skill.value === value);
};

// Create icon component for skills
export const createSkillIcon = (logoUrl: string, skillName: string) => {
  // This function returns a React component, so it must be used in a .tsx file.
  return function SkillIcon({ className }: { className?: string }) {
    return React.createElement('img', {
      src: logoUrl,
      alt: skillName,
      className: cn("w-4 h-4", className),
      onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }
    });
  };
};

// Format skills for MultiSelect component
export const formatSkillsForMultiSelect = (skills: SkillOption[]): MultiSelectOption[] => {
  return skills.map(skill => ({
    label: skill.label,
    value: skill.value,
    icon: skill.logo ? createSkillIcon(skill.logo, skill.label) : undefined,
    otherCollege: false // Add this property as required by MultiSelect
  }));
};

// Get skills count by category
export const getSkillsCountByCategory = (): Record<string, number> => {
  const categories = getSkillsByCategory();
  const counts: Record<string, number> = {};
  
  Object.entries(categories).forEach(([category, skills]) => {
    counts[category] = skills.length;
  });
  
  return counts;
};

// Get most popular skills (skills that appear in most roles)
export const getMostPopularSkills = (limit: number = 10): SkillOption[] => {
  const skillFrequency = new Map<string, { skill: SkillOption; count: number }>();
  
  // Count skill occurrences across all roles
  Object.values(techRolesData.tech_roles).forEach(role => {
    role.required_skills.forEach(skill => {
      const skillKey = skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const skillOption: SkillOption = {
        label: skill.skill,
        value: skillKey,
        logo: skill.logo || '',
        category: role.label,
        level: skill.level
      };
      
      if (skillFrequency.has(skillKey)) {
        skillFrequency.get(skillKey)!.count++;
      } else {
        skillFrequency.set(skillKey, { skill: skillOption, count: 1 });
      }
    });
  });
  
  // Sort by frequency and return top skills
  return Array.from(skillFrequency.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map(item => item.skill);
};

// Get skills by multiple levels
export const getSkillsByLevels = (levels: string[]): SkillOption[] => {
  const allSkills = getAllSkillsOptions();
  return allSkills.filter(skill => levels.includes(skill.level));
};

// Search skills by name
export const searchSkills = (query: string): SkillOption[] => {
  if (!query.trim()) return [];
  
  const allSkills = getAllSkillsOptions();
  const lowercaseQuery = query.toLowerCase();
  
  return allSkills.filter(skill => 
    skill.label.toLowerCase().includes(lowercaseQuery) ||
    skill.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Get related skills (skills that appear in the same roles)
export const getRelatedSkills = (skillValue: string, limit: number = 5): SkillOption[] => {
  const relatedSkillsMap = new Map<string, SkillOption>();
  
  // Find roles that contain the given skill
  const rolesWithSkill = Object.values(techRolesData.tech_roles).filter(role =>
    role.required_skills.some(skill => 
      skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '_') === skillValue
    )
  );
  
  // Collect all skills from those roles
  rolesWithSkill.forEach(role => {
    role.required_skills.forEach(skill => {
      const skillKey = skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '_');
      if (skillKey !== skillValue && !relatedSkillsMap.has(skillKey)) {
        relatedSkillsMap.set(skillKey, {
          label: skill.skill,
          value: skillKey,
          logo: skill.logo || '',
          category: role.label,
          level: skill.level
        });
      }
    });
  });
  
  return Array.from(relatedSkillsMap.values()).slice(0, limit);
};

// Validate skill selection
export const validateSkillSelection = (selectedSkills: string[]): ValidationResult => {
  const errors: string[] = [];
  const suggestions: string[] = [];
  const allSkills = getAllSkillsOptions();
  const validSkillValues = allSkills.map(skill => skill.value);
  
  // Check if all selected skills are valid
  const invalidSkills = selectedSkills.filter(skill => !validSkillValues.includes(skill));
  if (invalidSkills.length > 0) {
    errors.push(`Invalid skills: ${invalidSkills.join(', ')}`);
  }
  
  // Check for reasonable skill count
  if (selectedSkills.length > 20) {
    errors.push('Too many skills selected. Consider limiting to 20 or fewer.');
    suggestions.push('Focus on the most important skills for the role.');
  }
  
  if (selectedSkills.length < 3) {
    suggestions.push('Consider adding more skills to better define the role requirements.');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    suggestions
  };
};

// Export utility for getting skill statistics
export const getSkillStatistics = (): SkillStatistics => {
  const allSkills = getAllSkillsOptions();
  const categories = getSkillsByCategory();
  const levelCounts = allSkills.reduce((acc, skill) => {
    acc[skill.level] = (acc[skill.level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalSkills: allSkills.length,
    totalCategories: Object.keys(categories).length,
    skillsWithLogos: allSkills.filter(skill => skill.logo).length,
    levelDistribution: levelCounts,
    categoryCounts: getSkillsCountByCategory(),
    mostPopularSkills: getMostPopularSkills(5)
  };
};