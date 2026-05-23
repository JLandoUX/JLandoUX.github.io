// ============================================================
// SITE DATA — Edit this file to update your portfolio content
// ============================================================

export const person = {
  name: 'Joshua Landis',
  initials: 'JL',
  role: 'UX Product Design Manager',
  tagline: 'I lead design teams that craft purposeful digital products — bridging user research, systems thinking, and pixel-perfect execution to build experiences people actually love.',
  about: [
    'I manage and mentor design teams across the full product lifecycle — from early discovery and user research through to polished, shipped experiences.',
    'My work sits at the intersection of design craft, product strategy, and cross-functional collaboration. I believe great design is invisible, coherent, and always in service of the person using it.',
  ],
  availability: 'Available for new projects',
  email: 'hello@joshualandis.com',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/joshualandis' },
    { label: 'Dribbble', url: 'https://dribbble.com/joshualandis' },
    { label: 'Read.cv',  url: 'https://read.cv/joshualandis' },
  ],
};

export const stats = [
  { value: '8+',  label: 'Years in UX' },
  { value: '20+', label: 'Products shipped' },
  { value: '3',   label: 'Design systems built' },
  { value: '12',  label: 'Designers mentored' },
];

export const skills = [
  // ux — shown in purple
  { label: 'UX Strategy',              category: 'ux' },
  { label: 'Product Design',           category: 'ux' },
  { label: 'Design Systems',           category: 'ux' },
  { label: 'User Research',            category: 'ux' },
  { label: 'Team Leadership',          category: 'ux' },
  // tools — shown in teal
  { label: 'Figma',                    category: 'tools' },
  { label: 'Prototyping',              category: 'tools' },
  { label: 'Usability Testing',        category: 'tools' },
  { label: 'Information Architecture', category: 'tools' },
  // soft — shown in pink
  { label: 'Cross-functional Collaboration', category: 'soft' },
  { label: 'Roadmap Planning',               category: 'soft' },
  { label: 'Stakeholder Management',         category: 'soft' },
];

export const projects = [
  {
    type: 'Design System',
    title: 'Meridian Design System',
    description:
      'Built a company-wide design system from scratch — token architecture, component library, documentation, and adoption playbook — reducing design-dev handoff time by 40%.',
    tags: ['Figma', 'Tokens', 'Documentation', 'React'],
    url: '#',
  },
  {
    type: 'Mobile App',
    title: 'Onboarding Redesign',
    description:
      'Led a 0→1 rethink of a fintech onboarding flow. Research, journey mapping, 14 iterations, and a 28% improvement in completion rate at launch.',
    tags: ['User Research', 'Prototyping', 'iOS'],
    url: '#',
  },
  {
    type: 'Enterprise SaaS',
    title: 'Analytics Dashboard',
    description:
      'Managed a team of 4 designers to revamp a complex B2B analytics platform. Introduced progressive disclosure and role-based views to serve 3 distinct user types.',
    tags: ['B2B', 'Data Viz', 'Team Lead'],
    url: '#',
  },
];
