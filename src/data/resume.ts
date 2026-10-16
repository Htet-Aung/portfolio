import type { ProjectId } from './projects';
import { site } from './site';

export const profile =
  'Applied AI & Analytics diploma student building full-stack applications, data workflows, Power BI dashboards, and predictive models. Combines software development with statistical analysis and AI API integration.';

export const resumeContact = {
  phone: '+65 8115 3761',
  email: site.email,
  linkedin: 'https://www.linkedin.com/in/htet-ak/',
  portfolio: 'https://htet-ak.pages.dev',
};

export const education = {
  institution: 'Nanyang Polytechnic',
  program: 'Diploma in Applied AI & Analytics',
  location: 'Singapore',
};

export const skills = [
  {
    label: 'Languages',
    items: 'Python, C#, JavaScript, TypeScript, SQL',
  },
  {
    label: 'Software & web',
    items: 'React, Node.js, Express, Flask, HTML, CSS, Git, Pytest',
  },
  {
    label: 'Analytics & BI',
    items:
      'Power BI, Power Query, DAX, KNIME, Excel, SAS Viya, dimensional modeling, data cleaning, feature engineering',
  },
  {
    label: 'Databases & cloud',
    items:
      'PostgreSQL, SQLite, MySQL, MongoDB, Oracle SQL, Snowflake, Oracle Cloud, AWS',
  },
  {
    label: 'AI & machine learning',
    items:
      'NumPy, automatic differentiation, neural networks, AI model API integration and orchestration, speech-to-text and image-generation workflows, FFmpeg, Streamlit',
  },
  {
    label: 'Statistical methods',
    items:
      'Descriptive statistics, hypothesis testing, correlation analysis, regression, model evaluation, scenario analysis',
  },
];

export const projectStacks: Record<ProjectId, string> = {
  numpygrad: 'Python, NumPy, Pytest, Streamlit',
  'shades-of-sg': 'React, Node.js, PostgreSQL, AI APIs, FFmpeg, WaveSurfer.js',
  rollover:
    'React 19, Vite, Node.js, Express 5, AI API integration, SheetJS (xlsx)',
  sgen: 'React, JavaScript, Python (Flask async), aiosqlite, SQLite, Web Speech API',
  'hospital-operations': 'Power BI, Power Query, DAX',
  'retail-data': 'KNIME, Excel, Data preparation',
  'workout-prediction': 'KNIME, SAS Viya, Regression',
  'student-wellbeing': 'Excel, Statistics, Hypothesis testing',
};

export const projectBullets: Record<ProjectId, string[]> = {
  numpygrad: [
    'Built a reverse-mode autograd engine with dynamic computation graphs, shared-input gradient accumulation, broadcasting-aware gradients, and execution guards.',
    'Implemented vectorized convolutions with im2col/col2im, modular neural-network layers, numerically stable losses, AdamW, and model checkpoints.',
    'Built a Streamlit studio with validation-selected training, coordinate inference, parameter and gradient diagnostics, and model comparisons on shared data and mini-batches.',
    'Connected learned hazard scores to Dijkstra-based rover guidance and implemented multi-digit canvas preprocessing with saved-model inference; checked engine gradients with Pytest and finite differences.',
  ],
  'shades-of-sg': [
    'Built an asynchronous media pipeline that coordinates audio intake, lyric transcription, AI scene planning, image generation, and FFmpeg video assembly.',
    'Developed deterministic chorus hashing to reuse Cloudinary image assets for repeated lyrics, avoiding duplicate image-generation work.',
    'Built a review step with draggable, timestamped lyric blocks stored in PostgreSQL JSONB, keeping scene edits aligned with the audio.',
    'Created a browser-based timeline editor and Shades Assistant, translating natural-language requests into reviewable scene edits with synchronized playback, frame regeneration, and caption-controlled video export.',
  ],
  rollover: [
    'Co-built a circular-retail discovery platform during SDG Open Hack 2026 with a three-person team, matching surplus inventory with shoppers through constraint-driven mystery bundles.',
    'Implemented inventory-aware matching with spreadsheet catalog parsing and budget, size, and allergen filters, plus separate preview and reveal API contracts with SHA-256 offer IDs.',
    'Built a React 19 checkout experience with CSS 3D card animations and an AI-generated inventory quiz backed by a deterministic offline fallback.',
  ],
  sgen: [
    'Built asynchronous Flask REST endpoints and React workflows for post and comment operations, including optimistic like updates.',
    'Developed page-based feed loading with in-flight request guards and duplicate-post filtering to fetch entries on demand.',
    'Integrated browser speech input for English, Chinese, Malay, and Tamil, plus read-aloud, slang definition tooltips, quick-reply comment chips, and Link Guard confirmation for outbound URLs.',
  ],
  'hospital-operations': [
    'Built a Power BI planning dashboard linking 12-month patient-inflow forecasts to staffing needs and waiting-time risk through interactive demand-growth scenarios.',
    'Designed DAX measures that separate historical performance from what-if estimates, enabling comparison of capacity pressure across patient urgency groups.',
    'Unified three hospital datasets through a star schema and shared date dimension, supporting consistent analysis of demand, waiting times, and patient satisfaction.',
  ],
  'retail-data': [
    'Designed a KNIME pipeline combining four regional spreadsheets into a structured customer master table, preserving source context and reconciling inconsistent schemas.',
    'Implemented data profiling, field-specific validation rules, and median imputation to handle financial inconsistencies and invalid ages while retaining customer records.',
    'Developed identifier masking, demographic groups, and guarded order-value calculations, then organized an Excel export for regional review and customer analysis.',
    'Compared regional spending and customer segments, using scatter plots and Pearson correlation to examine the relationship between age and spending.',
  ],
  'workout-prediction': [
    'Built a KNIME preparation workflow reducing 4,865 rows to 973 unique workouts before partitioning, preventing duplicate leakage in model evaluation.',
    'Audited BMI and plausible outliers, engineered relative heart-rate intensity, and exported a 16-column dataset for regression modeling.',
    'Diagnosed four SAS Viya regression models using residuals, tree structure, error curves, and feature importance; gradient boosting yielded 35 kcal validation RMSE on 292 observations.',
    'Compared the selected ensemble with a 36.91 kcal linear baseline and explained prediction error and evaluation limits for a proposed calorie-estimation use case.',
  ],
  'student-wellbeing': [
    'Performed Excel calculations and assisted manual statistical working in a five-person, 67-response study using 16 survey items to measure general FoMO and context-specific exclusion anxiety.',
    'Interpreted descriptive statistics and one-sample test calculations, relating the observed FoMO gap to sample variability and standard error.',
    'Contributed paired-test interpretation using within-person in-person and online score differences, connecting the reported result with distributional evidence.',
    'Synthesized statistical findings into recommendations on digital boundaries and in-person campus connection, with conclusions scoped to the surveyed group.',
  ],
};

export const resumeHighlights: Record<ProjectId, string[]> = {
  ...projectBullets,
  numpygrad: [
    'Built a NumPy deep learning framework with reverse-mode autograd, vectorized convolutions, AdamW, and checkpoints.',
    'Created Streamlit demos and verified gradients with Pytest and finite-difference checks.',
  ],
  'shades-of-sg': [
    'Built an asynchronous pipeline for lyric transcription, AI scene planning, image generation, and FFmpeg assembly.',
    'Created a browser timeline editor and AI assistant with reviewable scene edits, frame regeneration, and caption controls.',
  ],
  rollover: [
    'Co-built a circular-retail platform in a three-person, 24-hour hackathon team, matching surplus inventory through budget, size, and allergen constraints.',
    'Implemented spreadsheet catalog parsing, preview/reveal APIs with SHA-256 offer IDs, and an animated React checkout experience.',
  ],
  sgen: [
    'Built asynchronous Flask post/comment endpoints and React feed workflows with optimistic likes, paginated loading, and duplicate-post filtering.',
    'Integrated multilingual speech input, read-aloud, slang tooltips, quick replies, and confirmation for outbound links.',
  ],
  'hospital-operations': [
    'Built a Power BI planning dashboard linking 12-month patient-inflow forecasts to staffing needs and wait-time risk through DAX what-if scenarios.',
    'Unified three hospital datasets in a star schema, enabling consistent time filters and urgency-based analysis of waits and satisfaction.',
  ],
  'workout-prediction': [
    'Audited 4,865 rows in KNIME, deduplicating before splitting and engineering heart-rate features for 973 workouts.',
    'Diagnosed four SAS Viya regression models; gradient boosting yielded 35 kcal validation RMSE on 292 observations.',
  ],
};

export const selectedProjectIds = [
  'numpygrad',
  'shades-of-sg',
  'hospital-operations',
  'workout-prediction',
] as const satisfies readonly ProjectId[];

export const additionalProjects = [
  {
    id: 'retail-data',
    summary:
      'Built a KNIME pipeline combining four regional sources with validation, identifier masking, customer features, and an Excel export for analysis.',
  },
  {
    id: 'rollover',
    summary:
      'Co-built a constraint-based surplus-retail platform with a three-person team during a 24-hour hackathon.',
  },
  {
    id: 'sgen',
    summary:
      'Built Flask/React feed workflows with multilingual speech input, read-aloud, and safer link handling.',
  },
  {
    id: 'student-wellbeing',
    summary:
      'Contributed Excel calculations and one-sample/paired test interpretation to a five-person study of 67 students.',
  },
] satisfies Array<{ id: ProjectId; summary: string }>;

export const educationHistory = [
  {
    institution: 'Nanyang Polytechnic',
    dates: '2025–2028',
    qualification: 'Diploma in Applied AI & Analytics',
    details: 'Cumulative GPA: 3.63 / 4.00',
  },
  {
    institution: 'ConceptX International School',
    dates: '2022–2024',
    qualification: 'Pearson Edexcel International GCSE',
    details: 'Results: 3 Grade 9, 3 Grade 8, and 1 Grade 7',
  },
];

export const certificates = [
  'Snowflake SnowPro Associate: Platform',
  'AWS Training & Certification: Fundamentals of Machine Learning and Artificial Intelligence',
  'Anthropic AI Fluency: Framework & Foundations',
  'IBM SkillsBuild: User Experience Design Fundamentals',
];

export interface LeadershipItem {
  name: string;
  role?: string;
  detail?: string;
  period?: string;
  events?: string[];
}

export const leadership: LeadershipItem[] = [
  {
    name: 'NYP AI',
    role: 'Head of Publicity',
    detail: 'Executive Committee',
    period: 'Year 2 Sem 1 – Present',
    events: [
      'Powering the Future (Networks & AI by Nokia): Co-organized 2-day systems engineering masterclass, led publicity to fill 50+ seats, and assisted student lab checkpoints.',
      'Project Starbound: Co-developed space-themed orientation challenges and debates on AI ethics for 100+ incoming students.',
    ],
  },
  {
    name: 'NYP Google Developer Group (GDGoC)',
    role: 'Subcommittee',
    period: 'Year 1 Sem 1 – Sem 2',
    events: [
      'Cloud & AI Workshops @ NUS: Co-presented Google Cloud Run and containerization to university students in hands-on deployment walkthroughs.',
      'NYP Course Advising: Introduced computational thinking and programming logic to visiting secondary school students through interactive problem-solving.',
    ],
  },
  {
    name: 'Class Representative',
    detail: 'Class AA2502',
    period: 'Year 1 Sem 1 – Sem 2',
    events: [
      'Coordinated class feedback with academic mentors and organized class bonding events across both Year 1 semesters.',
    ],
  },
  {
    name: 'SDG Open Hack 2026',
    role: 'NYP Semi-finalist',
    events: [
      'Co-built and pitched ROLLOVER with a three-person team in a 24-hour circular-retail hackathon.',
    ],
  },
];
