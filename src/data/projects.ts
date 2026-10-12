export type ProjectId = 'numpygrad' | 'shades-of-sg' | 'rollover' | 'sgen';

export interface Project {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  teamContext?: string;
  stack: string[];
  caseStudy?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'numpygrad',
    number: '01',
    title: 'NumPyGrad',
    category: 'Machine learning systems',
    summary:
      'A deep learning engine built from first principles. Every tensor, gradient, and training step made explicit.',
    role: 'Creator & sole engineer',
    stack: ['Python', 'NumPy', 'Streamlit'],
    repoUrl: 'https://github.com/Htet-Aung/numpygrad',
  },
  {
    id: 'shades-of-sg',
    number: '02',
    title: 'Shades of SG',
    category: 'Generative media',
    summary:
      'A cultural media workflow that turns heritage music into editable, lyric-synchronized visual stories.',
    role: 'Generation pipeline & editing experience · Team project',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'rollover',
    number: '03',
    title: 'ROLLOVER',
    category: 'Full-stack product',
    summary:
      'An arcade-inspired way to discover surplus goods, with inventory-grounded matching and a mystery reveal.',
    role: 'Full-stack engineer · Three-person team',
    stack: ['React', 'Express', 'JavaScript'],
    repoUrl: 'https://github.com/Samuwuwuwu/SGD-Open-Hack-26-CMC',
  },
  {
    id: 'sgen',
    number: '04',
    title: 'SGEN',
    category: 'Accessible web experiences',
    summary:
      'An intergenerational social feed with multilingual speech tools, slang translation, and safer link handling.',
    role: 'Feed, accessibility & assistive systems · Team project',
    stack: ['React', 'Flask', 'SQLite'],
  },
];
