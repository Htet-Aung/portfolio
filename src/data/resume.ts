import type { ProjectId } from './projects';
import { site } from './site';

export const profile =
  'Applied AI & Analytics student at Nanyang Polytechnic specializing in full-stack engineering, applied machine learning, and data analytics. Experienced in building from-scratch deep learning engines, AI-assisted media pipelines, and operational BI dashboards using Python, TypeScript, React, SQL, and Power BI.';

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
    items: 'Python, TypeScript, JavaScript, SQL, C#',
  },
  {
    label: 'Software & Web',
    items:
      'React, Node.js, Express, Flask, Streamlit, REST APIs, HTML, CSS, Git, Pytest',
  },
  {
    label: 'Analytics & BI',
    items:
      'Pandas, Power BI, Power Query, DAX, KNIME, Excel, SAS Viya, Dimensional Modeling, Data Cleaning, Feature Engineering',
  },
  {
    label: 'Databases & Cloud',
    items:
      'PostgreSQL, SQLite, MySQL, MongoDB, Oracle Database, Snowflake, Oracle Cloud, AWS',
  },
  {
    label: 'AI & Machine Learning',
    items:
      'NumPy, Automatic Differentiation, Neural Networks, Multimodal AI Pipelines, AI Orchestration, Generative AI Integration, Model Evaluation',
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
    'Built a Power BI planning dashboard linking 12-month patient inflow forecasts to staffing needs and wait-time risks through interactive scenario modeling.',
    'Designed dynamic DAX measures to evaluate capacity pressure and service bottlenecks across patient urgency groups.',
    'Integrated multiple hospital operational datasets into a unified data model, enabling cross-departmental analysis of patient demand, wait times, and satisfaction trends.',
    'Developed a staffing simulator and wait-time breakdown to explore how additional clinical capacity affects patient experience under scenario assumptions.',
  ],
  'retail-data': [
    'Designed a KNIME pipeline integrating multiple regional customer datasets into a structured master table, reconciling inconsistent schemas and preserving data lineage.',
    'Implemented automated data profiling, validation rules, and median imputation to resolve demographic anomalies while preserving customer records.',
    'Engineered customer demographic groups, order-value metrics, and identifier masking, generating structured Excel reports for regional review.',
    'Analyzed customer segments and regional spending behaviors using Pearson correlation and scatter plots to identify demographic trends.',
  ],
  'workout-prediction': [
    'Built an automated KNIME data pipeline to clean, deduplicate, and prepare ~5,000 workout records across ~1,000 unique exercise sessions.',
    'Audited physiological metrics and outliers, engineering relative heart-rate exertion features to improve predictive signal.',
    'Trained and evaluated multiple regression models in SAS Viya (Linear Regression, Decision Tree, Random Forest, Gradient Boosting) using residual diagnostics and error curves.',
    'Benchmarked ensemble models against baseline linear regressions, identifying Gradient Boosting as the highest-performing model for calorie expenditure estimation.',
  ],
  'student-wellbeing': [
    'Conducted survey data analysis and statistical modeling in Excel to evaluate student wellbeing, anxiety indicators, and social connectivity factors.',
    'Applied descriptive statistics and one-sample hypothesis testing to measure significant variances across student cohorts.',
    'Conducted paired-difference analysis comparing student behavioral trends across in-person and digital campus environments.',
    'Synthesized statistical findings into recommendations on digital boundaries and in-person campus connection, with conclusions scoped to the surveyed group.',
  ],
};

export const resumeHighlights: Record<ProjectId, string[]> = {
  ...projectBullets,
  numpygrad: [
    'Engineered a from-scratch autograd deep learning engine in pure NumPy, facing the challenge of computing reverse-mode gradients across dynamic computation graphs with multi-branch shared inputs and broadcasted tensors.',
    'Overcame graph and performance bottlenecks by developing DFS topological ordering with gradient accumulators, vectorized spatial convolutions (im2col/col2im) to eliminate Python loop latency, and verifying correctness via 152 Pytest unit tests.',
  ],
  'shades-of-sg': [
    'Led the media generation pipeline and browser timeline editor on a team project, challenged by high API costs from duplicate image requests and audio-video timing drift across asynchronous generation stages.',
    'Overcame these issues by architecting a deterministic chorus-hashing engine to reuse recurring frame assets (cutting API costs by 20–35%) and implementing an AWAITING_REVIEW workflow with draggable JSONB lyric blocks to preserve audio sync.',
  ],
  rollover: [
    'Co-built a circular-retail discovery platform during a 24-hour hackathon, facing the challenge of partitioning live surplus inventory into mystery bundles while enforcing strict budget, size, and allergen exclusions.',
    'Prevented client-side inventory scraping and tampering by developing a zero-spoiler preview/reveal API architecture with SHA-256 offer verification and a responsive React 19 interface with offline fallbacks.',
  ],
  sgen: [
    'Developed asynchronous backend REST endpoints and React feed workflows, challenged by race conditions from duplicate in-flight requests during rapid scrolling and accessibility barriers for senior users.',
    'Overcame these hurdles by engineering in-flight request guards with post deduplication, alongside integrating multilingual browser-native Web Speech API (STT/TTS) and client-side slang definition popovers.',
  ],
  'hospital-operations': [
    'Solely designed the operational planning dashboard and data model, facing the challenge of integrating fragmented departmental tables with mismatched date granularities and conflicting admission records.',
    'Overcame data inconsistencies by establishing a unified star schema with dynamic DAX capacity measures, building an interactive what-if simulator to forecast 12-month patient surges and test clinical staffing requirements.',
  ],
  'workout-prediction': [
    'Developed an end-to-end predictive regression workflow, challenged by noisy physiological telemetry across ~5,000 records and non-linear exertion dynamics that baseline linear models failed to capture.',
    'Overcame baseline inaccuracy by building an automated KNIME data cleaning and feature engineering pipeline for relative heart-rate exertion, benchmarking models in SAS Viya to deploy Gradient Boosting for reliable calorie estimation.',
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
      'Built a KNIME pipeline integrating multiple regional customer datasets with automated validation, demographic feature engineering, and reporting exports.',
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
  'KNIME L1: Basic Proficiency in KNIME Analytics Platform',
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
    role: 'Executive Committee',
    detail: 'Head of Publicity',
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
