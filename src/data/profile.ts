// All portfolio content lives here. Edit this file to update the site —
// components only read from it.

export const profile = {
  name: 'Sai Kumar Anapuram',
  shortName: 'Sai',
  role: 'Senior Frontend Engineer',
  tagline: 'I build interfaces people enjoy using.',
  intro:
    'Senior Frontend Engineer with 6.5+ years in React, Angular and TypeScript. Most recently I built the frontend for SpotBuild at ThoughtSpot — an AI platform that turns a prompt into an embedded analytics app.',
  email: 'saikumaranapuram1431@gmail.com',
  github: 'https://github.com/saikumar0202',
  linkedin: 'https://linkedin.com/in/sai-kumar-anapuram-9a7643151',
  resume: 'Sai_Kumar_Anapuram_Resume.pdf',
  // Portrait lives at public/photo.jpg (4:5 crop). Set to '' to show initials instead.
  photo: 'photo.jpg' as string,
  facts: [
    { label: 'Status', value: 'Open to roles', live: true },
    { label: 'Notice', value: 'Immediate joiner' },
    { label: 'Location', value: 'Hyderabad, India · Open to remote roles' },
    { label: 'Last role', value: 'MTS4, ThoughtSpot' },
  ],
}

export const about = [
  'I’m a frontend engineer who cares about the details between the design file and the browser — reusable components, theming, performance and the cross-browser polish that makes a product feel finished.',
  'I’ve shipped AI product UI at ThoughtSpot, led an Angular frontend at ValueLabs, and started out full-stack with React and Spring Boot. Outside work I build my own products, including a music streaming web app.',
]

export type Job = {
  dates: string
  role: string
  company: string
  summary: string
  points: string[]
  tags: string[]
}

export const experience: Job[] = [
  {
    dates: 'Nov 2024 — Aug 2026',
    role: 'Full-Stack Developer (MTS4)',
    company: 'ThoughtSpot',
    summary: 'Built the frontend for SpotBuild, an AI platform that generates ThoughtSpot Embedded apps from natural-language prompts.',
    points: [
      'Built the SpotBuild frontend for prompt-based project generation, Git integration, publishing workflows, and theme and branding customization.',
      'Built reusable React and TypeScript components with a focus on performance and responsive UX.',
      'Built Salesforce Lightning Web Components that embed ThoughtSpot analytics in business workflows, plus add-ins for Excel, Google Sheets, PowerPoint, and Google Slides.',
    ],
    tags: ['React', 'TypeScript', 'Salesforce LWC', 'Office Add-ins', 'AI'],
  },
  {
    dates: 'Nov 2022 — Oct 2024',
    role: 'Frontend Developer',
    company: 'ValueLabs',
    summary: 'Led frontend development of Snapfish, a consumer photo printing & gifting platform.',
    points: [
      'Integrated Shutterfly APIs to drive dynamic content and DOM updates across Snapfish.',
      'Diagnosed and shipped performance and cross-browser fixes to improve the product experience.',
      'Mentored junior developers and drove code-quality improvements through reviews.',
    ],
    tags: ['Angular', 'TypeScript', 'REST APIs', 'Performance'],
  },
  {
    dates: 'May 2021 — Oct 2022',
    role: 'Frontend Developer',
    company: 'Capgemini',
    summary: 'Responsive web features for MySubaru, Subaru’s owner platform.',
    points: [
      'Turned UX designs into responsive production features for the MySubaru owner platform, including TomTom Maps, DataTables, and CropperJS.',
      'Integrated APIs for dynamic data, resolved cross-browser defects, and worked with backend teams on API contracts.',
    ],
    tags: ['JavaScript', 'Responsive', 'jQuery'],
  },
  {
    dates: 'Dec 2019 — Apr 2021',
    role: 'Full-Stack Developer',
    company: 'SD MacTec IT Solutions',
    summary: 'Full-stack products across tax, learning and consulting.',
    points: [
      'Built MacTax, a tax filing platform, with React, Spring Boot and MySQL.',
      'Developed eCrayon, a learning management system, in Angular and Spring MVC.',
      'Built Consult4at as a mobile-first React + Spring Boot app.',
    ],
    tags: ['React', 'Angular', 'Spring Boot', 'MySQL'],
  },
]

export type Project = {
  name: string
  kind: string
  description: string
  tags: string[]
  links?: { label: string; href: string; internal?: boolean }[]
  visual?: 'player' | 'sudoku' | 'jarvis'
}

export const featured: Project[] = [
  {
    name: 'J.A.R.V.I.S',
    kind: 'Personal project · Desktop assistant',
    description:
      'A voice-first desktop assistant for Windows and macOS, with a living command center and practical tools for everyday work.',
    tags: ['Python', 'Voice AI', 'Desktop', 'MIND HUD'],
    links: [
      { label: 'Explore Jarvis', href: '/jarvis', internal: true },
    ],
    visual: 'jarvis',
  },
  {
    name: 'EchoWave',
    kind: 'Side project · Live',
    description:
      'A music streaming web app to discover, search and stream music — mobile-first and installable as a PWA.',
    tags: ['React', 'PWA', 'Vercel'],
    links: [
      { label: 'Live app', href: 'https://echowave-theta.vercel.app/' },
      { label: 'GitHub profile', href: 'https://github.com/saikumar0202' },
    ],
    visual: 'player',
  },
]

export const work: Project[] = [
  {
    name: 'SpotBuild',
    kind: 'ThoughtSpot · AI',
    description: 'Prompt-to-app generation UI with Git integration, publishing and theming.',
    tags: [],
  },
  {
    name: 'Office & Workspace plugins',
    kind: 'ThoughtSpot · Add-ins',
    description: 'ThoughtSpot analytics in Excel, Google Sheets, PowerPoint and Slides.',
    tags: [],
  },
  {
    name: 'Lightning Web Components',
    kind: 'ThoughtSpot · Salesforce',
    description: 'Embedded analytics inside Salesforce business workflows.',
    tags: [],
  },
  {
    name: 'Snapfish',
    kind: 'ValueLabs · Angular',
    description: 'Led frontend for a photo printing & gifting platform.',
    tags: [],
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Angular', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SASS', 'Salesforce LWC', 'React Native'] },
  { group: 'UI & UX', items: ['Design-to-code', 'Responsive', 'Component libraries', 'Theming', 'Performance', 'Cross-browser'] },
  { group: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Express.js', 'MySQL', 'MongoDB'] },
  { group: 'Testing, tooling & AI', items: ['Jest', 'React Testing Library', 'Git', 'CI/CD', 'Docker', 'LLM features', 'Cursor', 'Claude', 'Copilot'] },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
