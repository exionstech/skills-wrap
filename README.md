# @exionstech/skills-wrap

<div align="center">
  <img src="https://img.shields.io/npm/v/@exionstech/skills-wrap?style=for-the-badge&logo=npm&color=red" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@exionstech/skills-wrap?style=for-the-badge&logo=npm&color=blue" alt="NPM Downloads" />
  <img src="https://img.shields.io/github/license/exionstech/skills-wrap?style=for-the-badge&color=green" alt="License" />
  <img src="https://img.shields.io/github/stars/exionstech/skills-wrap?style=for-the-badge&logo=github&color=yellow" alt="GitHub Stars" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
</div>

<div align="center">
  <h3>🎯 Comprehensive Tech Skills & Roles Database</h3>
  <p><strong>Perfect for IT Service Companies, Recruitment Platforms, and Career Applications</strong></p>
</div>

---

## 🚀 **Why @exionstech/skills-wrap?**

Building career forms, job listings, or recruitment platforms? Stop manually maintaining skill databases! This package provides a **comprehensive, up-to-date database** of tech roles and skills with beautiful logos, utility functions, and full TypeScript support.

```typescript
// Before: Manual skill management 😞
const skills = ["JavaScript", "React", "Node.js"]; // Where are the logos? Levels? Categories?

// After: Professional skill database 🚀
import { getAllSkillsOptions, formatSkillsForMultiSelect } from '@exionstech/skills-wrap';
const skills = formatSkillsForMultiSelect(getAllSkillsOptions()); // 150+ skills with logos!
```

---

## ✨ **Features**

| Feature | Description | Benefit |
|---------|-------------|---------|
| 🎯 **20+ Tech Roles** | Frontend, Backend, DevOps, AI/ML, Mobile, etc. | Complete role coverage |
| 🛠️ **150+ Skills** | JavaScript, Python, React, AWS, Docker, etc. | Comprehensive skill database |
| 🎨 **Beautiful Logos** | High-quality SVG logos from [SVGL API](https://svgl.app) | Professional UI components |
| 📊 **Skill Levels** | Beginner, Intermediate, Advanced, Expert | Precise skill assessment |
| 🏷️ **Categories** | Organized by tech domains and specializations | Easy navigation & filtering |
| 🔧 **TypeScript** | Full type safety with IntelliSense support | Better developer experience |
| ⚡ **Tree Shakeable** | Import only what you need | Optimized bundle size |
| 📱 **React Ready** | Perfect for React components and forms | Seamless integration |

---

## 📦 **Installation**

```bash
# NPM
npm install @exionstech/skills-wrap

# Yarn
yarn add @exionstech/skills-wrap

# PNPM
pnpm add @exionstech/skills-wrap
```

---

## 🔥 **Quick Start**

### **Basic Usage**
```typescript
import { 
  techRolesData, 
  getAllSkillsOptions, 
  formatSkillsForMultiSelect,
  getSkillsByRole 
} from '@exionstech/skills-wrap';

// Get all skills (150+ skills with logos)
const allSkills = getAllSkillsOptions();
console.log(`💼 Total skills available: ${allSkills.length}`);

// Get skills for specific role
const frontendSkills = getSkillsByRole('frontend_developer');
console.log(`⚛️ Frontend skills: ${frontendSkills.length}`);

// Format for UI components
const formattedSkills = formatSkillsForMultiSelect(allSkills);

// Access raw data
const roles = techRolesData.tech_roles;
console.log(`👥 Available roles: ${Object.keys(roles).length}`);
```

### **React Integration**
```tsx
import React from 'react';
import { MultiSelect } from '@/components/ui/multi-select';
import { formatSkillsForMultiSelect, getAllSkillsOptions } from '@exionstech/skills-wrap';

const SkillSelector = () => {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const skillsOptions = formatSkillsForMultiSelect(getAllSkillsOptions());
  
  return (
    <MultiSelect
      options={skillsOptions}
      value={selectedSkills}
      onValueChange={setSelectedSkills}
      placeholder="Select required skills"
      maxCount={15}
    />
  );
};
```

---

## 🎯 **Real-World Use Cases**

<details>
<summary><strong>🔸 Career Application Forms</strong></summary>

Perfect for building job application forms with professional skill selection:

```tsx
import { formatSkillsForMultiSelect, getAllSkillsOptions, validateSkillSelection } from '@exionstech/skills-wrap';

const CareerForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const skillsOptions = formatSkillsForMultiSelect(getAllSkillsOptions());
  
  const handleSubmit = () => {
    const validation = validateSkillSelection(skills);
    if (!validation.isValid) {
      console.error('Validation errors:', validation.errors);
      return;
    }
    // Submit form...
  };

  return (
    <form onSubmit={handleSubmit}>
      <MultiSelect
        options={skillsOptions}
        value={skills}
        onValueChange={setSkills}
        placeholder="Select your skills"
        maxCount={20}
      />
      <button type="submit">Apply Now</button>
    </form>
  );
};
```
</details>

<details>
<summary><strong>🔸 Job Listings & Requirements</strong></summary>

Display role requirements with beautiful skill badges:

```tsx
import { getSkillsByRole, techRolesData } from '@exionstech/skills-wrap';

const JobListing = ({ roleId }: { roleId: string }) => {
  const role = techRolesData.tech_roles[roleId];
  const requiredSkills = getSkillsByRole(roleId);
  
  return (
    <div className="job-listing">
      <h2>{role.label}</h2>
      <p>{role.description}</p>
      
      <div className="skills-section">
        <h3>Required Skills:</h3>
        <div className="skills-grid">
          {requiredSkills.map(skill => (
            <div key={skill.value} className="skill-badge">
              {skill.logo && <img src={skill.logo} alt={skill.label} />}
              <span>{skill.label}</span>
              <span className={`level ${skill.level}`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```
</details>

<details>
<summary><strong>🔸 Skills Analytics & Insights</strong></summary>

Analyze skill trends and popularity:

```tsx
import { getMostPopularSkills, getSkillStatistics, getSkillsByCategory } from '@exionstech/skills-wrap';

const SkillsAnalytics = () => {
  const popularSkills = getMostPopularSkills(10);
  const stats = getSkillStatistics();
  const categorizedSkills = getSkillsByCategory();
  
  return (
    <div className="analytics-dashboard">
      <div className="stats-overview">
        <div className="stat-card">
          <h3>{stats.totalSkills}</h3>
          <p>Total Skills</p>
        </div>
        <div className="stat-card">
          <h3>{stats.totalCategories}</h3>
          <p>Categories</p>
        </div>
        <div className="stat-card">
          <h3>{stats.skillsWithLogos}</h3>
          <p>With Logos</p>
        </div>
      </div>
      
      <div className="popular-skills">
        <h3>🔥 Most Popular Skills</h3>
        {popularSkills.map(skill => (
          <div key={skill.value} className="popular-skill">
            {skill.logo && <img src={skill.logo} alt={skill.label} />}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
```
</details>

<details>
<summary><strong>🔸 Recruitment Platforms</strong></summary>

Build sophisticated recruitment tools:

```tsx
import { searchSkills, getRelatedSkills, getSkillsByLevels } from '@exionstech/skills-wrap';

const RecruitmentTool = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string[]>(['advanced', 'expert']);
  
  const searchResults = searchSkills(searchQuery);
  const advancedSkills = getSkillsByLevels(selectedLevel);
  
  const handleSkillSelect = (skillValue: string) => {
    const relatedSkills = getRelatedSkills(skillValue, 5);
    console.log('Related skills:', relatedSkills);
  };

  return (
    <div className="recruitment-tool">
      <input
        type="text"
        placeholder="Search skills..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <div className="level-filter">
        {['beginner', 'intermediate', 'advanced', 'expert'].map(level => (
          <label key={level}>
            <input
              type="checkbox"
              checked={selectedLevel.includes(level)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedLevel([...selectedLevel, level]);
                } else {
                  setSelectedLevel(selectedLevel.filter(l => l !== level));
                }
              }}
            />
            {level}
          </label>
        ))}
      </div>
      
      <div className="results">
        {(searchQuery ? searchResults : advancedSkills).map(skill => (
          <button
            key={skill.value}
            onClick={() => handleSkillSelect(skill.value)}
            className="skill-result"
          >
            {skill.logo && <img src={skill.logo} alt={skill.label} />}
            <span>{skill.label}</span>
            <span className="category">{skill.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
```
</details>

---

## 📖 **Complete API Reference**

### **🔧 Core Functions**

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getAllSkillsOptions()` | `none` | `SkillOption[]` | Get all 150+ unique skills with logos |
| `getSkillsByRole(roleId)` | `roleId: string` | `SkillOption[]` | Get skills required for specific role |
| `getSkillsByCategory()` | `none` | `Record<string, SkillOption[]>` | Get skills grouped by categories |
| `getSkillsByLevel(level)` | `level: string` | `SkillOption[]` | Get skills filtered by proficiency level |
| `getSkillsByLevels(levels)` | `levels: string[]` | `SkillOption[]` | Get skills filtered by multiple levels |
| `searchSkills(query)` | `query: string` | `SkillOption[]` | Search skills by name or category |
| `getRelatedSkills(skillValue, limit?)` | `skillValue: string, limit?: number` | `SkillOption[]` | Find skills that appear with given skill |
| `getMostPopularSkills(limit?)` | `limit?: number` | `SkillOption[]` | Get most frequently required skills |

### **🎨 UI Helper Functions**

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `formatSkillsForMultiSelect(skills)` | `skills: SkillOption[]` | `MultiSelectOption[]` | Format skills for MultiSelect components |
| `createSkillIcon(logoUrl, skillName)` | `logoUrl: string, skillName: string` | `React.Component` | Create React icon component |

### **📊 Analytics Functions**

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getSkillStatistics()` | `none` | `SkillStatistics` | Get comprehensive database statistics |
| `getSkillsCountByCategory()` | `none` | `Record<string, number>` | Count skills per category |
| `validateSkillSelection(skills)` | `skills: string[]` | `ValidationResult` | Validate skill selection with suggestions |

### **🗃️ Data Access**

| Property | Type | Description |
|----------|------|-------------|
| `techRolesData.tech_roles` | `Record<string, TechRole>` | Complete roles database |
| `techRolesData.skill_levels` | `Record<string, SkillLevel>` | Skill level definitions |
| `techRolesData.categories` | `Record<string, Category>` | Role categories and groupings |
| `techRolesData.metadata` | `Metadata` | Database version and statistics |

### **🏷️ Available Roles**

| Category | Roles |
|----------|-------|
| **Frontend** | Frontend Developer, UI/UX Designer |
| **Backend** | Backend Developer, Database Administrator |
| **Full Stack** | Full Stack Developer, Solutions Architect |
| **Mobile** | Mobile App Developer |
| **DevOps** | DevOps Engineer, Cloud Architect, SRE |
| **Data & AI** | Data Scientist, Data Engineer, AI/ML Engineer |
| **Specialized** | Blockchain Developer, Game Developer, QA Engineer |
| **Management** | Tech Lead, Product Manager, Scrum Master |
| **Security** | Cybersecurity Engineer |
| **Analysis** | Business Analyst |

---

## 🔗 **TypeScript Definitions**

<details>
<summary><strong>Core Interfaces</strong></summary>

```typescript
interface SkillOption {
  label: string;        // Display name (e.g., "JavaScript")
  value: string;        // Unique identifier (e.g., "javascript")
  logo: string;         // SVG logo URL from SVGL API
  category: string;     // Role category (e.g., "Frontend Developer")
  level: string;        // Proficiency level (beginner|intermediate|advanced|expert)
}

interface TechRole {
  label: string;        // Role display name
  value: string;        // Role identifier
  description: string;  // Role description
  required_skills: RequiredSkill[];
}

interface RequiredSkill {
  skill: string;        // Skill name
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  logo: string;         // Logo URL
}

interface MultiSelectOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  otherCollege?: boolean;
}

interface SkillStatistics {
  totalSkills: number;
  totalCategories: number;
  skillsWithLogos: number;
  levelDistribution: Record<string, number>;
  categoryCounts: Record<string, number>;
  mostPopularSkills: SkillOption[];
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  suggestions: string[];
}
```
</details>

---

## 🎨 **Styling Examples**

<details>
<summary><strong>CSS for Skill Badges</strong></summary>

```css
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.skill-badge:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.skill-badge img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.skill-badge .level {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.level.beginner { background: #fef3c7; color: #92400e; }
.level.intermediate { background: #dbeafe; color: #1e40af; }
.level.advanced { background: #d1fae5; color: #065f46; }
.level.expert { background: #fce7f3; color: #be185d; }
```
</details>

<details>
<summary><strong>Tailwind CSS Classes</strong></summary>

```tsx
const SkillBadge = ({ skill }: { skill: SkillOption }) => (
  <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
    {skill.logo && (
      <img 
        src={skill.logo} 
        alt={skill.label} 
        className="w-5 h-5 object-contain"
      />
    )}
    <span>{skill.label}</span>
    <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
      skill.level === 'expert' ? 'bg-purple-100 text-purple-800' :
      skill.level === 'advanced' ? 'bg-green-100 text-green-800' :
      skill.level === 'intermediate' ? 'bg-blue-100 text-blue-800' :
      'bg-yellow-100 text-yellow-800'
    }`}>
      {skill.level}
    </span>
  </div>
);
```
</details>

---

## 🛠️ **Development & Contributing**

### **Setup Development Environment**
```bash
# Clone the repository
git clone https://github.com/exionstech/skills-wrap.git
cd skills-wrap

# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Start development mode
npm run dev
```

### **Project Structure**
```
src/
├── data/
│   └── tech-roles.ts     # Complete skills database
├── types/
│   └── index.ts          # TypeScript definitions
├── utils/
│   └── skills-data.ts    # Utility functions
├── constants/
│   └── index.ts          # Constants and enums
└── index.ts              # Main entry point
```

### **Contributing Guidelines**
We welcome contributions! Here's how you can help:

1. **🐛 Bug Reports**: Found a bug? [Open an issue](https://github.com/exionstech/skills-wrap/issues)
2. **💡 Feature Requests**: Have an idea? [Start a discussion](https://github.com/exionstech/skills-wrap/discussions)
3. **📝 Documentation**: Improve our docs with examples and guides
4. **🔧 Code Contributions**: Fix bugs or add features

**Pull Request Process:**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📈 **Roadmap**

### **v1.1.0 - Q2 2025**
- [ ] 🌐 Multi-language support
- [ ] 📊 Advanced analytics functions
- [ ] 🎯 Skill recommendation engine
- [ ] 📱 Mobile-specific skills

### **v1.2.0 - Q3 2025**
- [ ] 🤖 AI-powered skill matching
- [ ] 📈 Skill trend analysis
- [ ] 🔄 Dynamic skill updates
- [ ] 🎨 Custom logo support

### **v2.0.0 - Q4 2025**
- [ ] 🌍 Global skill standards
- [ ] 📋 Certification mappings
- [ ] 🏢 Company-specific extensions
- [ ] 📊 Real-time market data

---

## 🆘 **Support & Community**

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/exionstech/skills-wrap?style=flat-square)](https://github.com/exionstech/skills-wrap/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/exionstech/skills-wrap?style=flat-square)](https://github.com/exionstech/skills-wrap/discussions)
[![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?style=flat-square&logo=discord)](https://discord.gg/YOUR_DISCORD_INVITE)

</div>

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/exionstech/skills-wrap/issues)
- 💬 **General Questions**: [GitHub Discussions](https://github.com/exionstech/skills-wrap/discussions)
- 📧 **Email Support**: contact@exionstech.com
- 🐦 **Twitter**: [@ExionsTech](https://twitter.com/ExionsTech)

---

## 📜 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 ExionsTech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 **Acknowledgments**

- 🎨 **[SVGL](https://svgl.app/)** - Beautiful SVG logos for tech brands
- 👥 **Open Source Community** - For inspiration and feedback
- 🏢 **IT Industry** - For providing real-world requirements
- ⭐ **Contributors** - Making this package better every day

---

## 📊 **Package Stats**

<div align="center">
  <img src="https://img.shields.io/npm/dt/@exionstech/skills-wrap?style=flat-square&logo=npm" alt="Total Downloads" />
  <img src="https://img.shields.io/bundlephobia/min/@exionstech/skills-wrap?style=flat-square" alt="Bundle Size" />
  <img src="https://img.shields.io/bundlephobia/minzip/@exionstech/skills-wrap?style=flat-square" alt="Gzipped Size" />
  <img src="https://img.shields.io/github/commit-activity/m/exionstech/skills-wrap?style=flat-square" alt="Commit Activity" />
</div>

---

<div align="center">
  <br>
  <strong>🚀 Built with ❤️ by <a href="https://exionstech.com">ExionsTech</a></strong>
  <br><br>
  <strong>⭐ Star this repo if it helped you!</strong>
  <br><br>
  <a href="https://github.com/exionstech/skills-wrap/stargazers">
    <img src="https://img.shields.io/github/stars/exionstech/skills-wrap?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20tech%20skills%20database%20package!&url=https://github.com/exionstech/skills-wrap">
    <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fexionstech%2Fskills-wrap" alt="Tweet" />
  </a>
</div>