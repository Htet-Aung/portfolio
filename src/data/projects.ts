export const projectIds = [
  'numpygrad',
  'oxydoku',
  'shades-of-sg',
  'rollover',
  'sgen',
  'hospital-operations',
  'retail-data',
  'workout-prediction',
  'student-wellbeing',
] as const;
export type ProjectId = (typeof projectIds)[number];

export interface Project {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  group: 'software' | 'analytics';
  descriptor: string;
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
    group: 'software',
    descriptor: 'A deep learning engine with an inspectable studio',
    summary:
      'A Python/NumPy learning engine with a studio for training boundaries, tracing predictions, comparing models, navigating a rover, and recognizing drawn digits.',
    role: 'Creator & sole engineer',
    teamContext: 'Solo project',
    stack: ['Python', 'NumPy', 'Streamlit', 'Pytest'],
    repoUrl: 'https://github.com/Htet-Aung/numpygrad',
  },
  {
    id: 'oxydoku',
    number: '02',
    title: 'oxyDoku',
    category: 'Systems & reasoning engines',
    group: 'software',
    descriptor: 'A Sudoku pattern scanner and active-learning studio',
    summary:
      'Built to actually learn advanced Sudoku instead of just getting next-move hints—scanning 76 techniques at once, comparing overlapping proofs, and syncing live boards.',
    role: 'Creator & systems developer',
    teamContext: 'Solo engineering extension built on AImenes/sudokUI',
    stack: [
      'TypeScript',
      'React 18',
      'Zustand',
      'Vitest',
      'Chrome Extension (MV3)',
      'Capacitor',
    ],
    repoUrl: 'https://github.com/Htet-Aung/oxyDoku',
  },
  {
    id: 'shades-of-sg',
    number: '03',
    title: 'Shades of SG',
    category: 'Generative media',
    group: 'software',
    descriptor: 'An AI music video studio with a creative copilot',
    summary:
      'Turns songs into editable music videos, with scene review, a browser-based timeline editor, and Shades Assistant for creative feedback and edits.',
    role: 'Media pipeline, video editor & AI assistant',
    teamContext: 'Team project',
    stack: [
      'React',
      'Node.js',
      'PostgreSQL',
      'AI APIs',
      'FFmpeg',
      'WaveSurfer.js',
    ],
    repoUrl: 'https://github.com/Shades-of-SG/Shades-of-SG',
  },
  {
    id: 'rollover',
    number: '04',
    title: 'ROLLOVER',
    category: 'Full-stack product',
    group: 'software',
    descriptor: 'A circular-retail discovery game',
    summary:
      'An arcade-inspired way to discover surplus goods, with inventory-grounded matching and a mystery reveal.',
    role: 'Full-stack engineer',
    teamContext: 'Equal three-person engineering team · 24-hour hackathon',
    stack: ['React', 'Express', 'JavaScript', 'SheetJS (xlsx)'],
    repoUrl: 'https://github.com/Samuwuwuwu/SGD-Open-Hack-26-CMC',
  },
  {
    id: 'sgen',
    number: '05',
    title: 'SGEN',
    category: 'Accessible web experiences',
    group: 'software',
    descriptor: 'An accessible, intergenerational social feed',
    summary:
      'An intergenerational social feed with multilingual speech tools, slang translation, and safer link handling.',
    role: 'Feed & assistive systems developer',
    teamContext: 'Team project',
    stack: ['React', 'Flask', 'SQLite', 'Web Speech API'],
    repoUrl: 'https://github.com/Generic-Inc/SGEN',
  },
  {
    id: 'hospital-operations',
    number: '06',
    title: 'Hospital Operations',
    category: 'Business intelligence',
    group: 'analytics',
    descriptor: 'Patient-demand forecasting and capacity planning',
    summary:
      'Turns patient-inflow forecasts into a planning tool: test demand growth, estimate staffing needs, and compare waiting-time pressure across urgency groups.',
    role: 'BI development, forecasting & scenario modeling',
    teamContext: 'Academic group project (individual dashboard owner)',
    stack: ['Power BI', 'Power Query', 'DAX', 'Data modeling'],
  },
  {
    id: 'retail-data',
    number: '07',
    title: 'Retail Customer Analytics',
    category: 'Data preparation & segmentation',
    group: 'analytics',
    descriptor: 'A complete customer data preparation pipeline',
    summary:
      'Brings four regional spreadsheets through profiling, cleaning, identifier masking, and feature engineering into a structured Excel master table and customer analysis.',
    role: 'Data preparation, workflow design & analysis',
    teamContext: 'Individual academic project',
    stack: ['KNIME', 'Excel', 'Data quality', 'Feature engineering'],
  },
  {
    id: 'workout-prediction',
    number: '08',
    title: 'Workout Energy Prediction',
    category: 'Predictive analytics',
    group: 'analytics',
    descriptor: 'From audited workout data to evaluated calorie estimates',
    summary:
      'Audits repeated workout records, engineers relative heart-rate intensity, and diagnoses four regression models to explain the quality and limits of calorie predictions.',
    role: 'Data preparation, feature engineering & regression evaluation',
    teamContext: 'Individual academic project',
    stack: ['KNIME', 'SAS Viya', 'Feature engineering', 'Regression'],
  },
  {
    id: 'student-wellbeing',
    number: '09',
    title: 'Student Wellbeing Study',
    category: 'Statistical research',
    group: 'analytics',
    descriptor: 'Survey research into student belonging and FoMO',
    summary:
      'A 16-item, 67-response study comparing general FoMO and in-person versus online exclusion, where I led the Excel calculations, statistical working, and findings synthesis.',
    role: 'Quantitative analysis, statistical interpretation & findings synthesis',
    teamContext: 'Five-person academic research team',
    stack: [
      'Excel',
      'Survey research',
      'Descriptive statistics',
      'Hypothesis testing',
    ],
  },
];
