import type { ProjectId } from './projects';
import { site } from './site';

export const profile =
  'Applied AI & Analytics student at Nanyang Polytechnic and President of NYP AI, building full-stack web apps, from-scratch ML and solver engines, and BI tools. Hands-on experience shipping TypeScript/React systems, pure-NumPy deep learning frameworks, AI media pipelines, and Power BI / KNIME analytics workflows.';

export const resumeContact = {
  phone: site.phone,
  email: site.email,
  linkedin: site.linkedin,
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
      'React, Node.js, Express, Flask, Streamlit, Zustand, Vite, REST APIs, Chrome MV3, Capacitor, Git, Vitest, Pytest',
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
    label: 'AI & Algorithms',
    items:
      'NumPy, Automatic Differentiation, Neural Networks, Constraint & Graph Search, Multimodal AI Pipelines, Generative AI Integration, Model Evaluation',
  },
];

export const projectStacks: Record<ProjectId, string> = {
  numpygrad: 'Python, NumPy, Pytest, Streamlit',
  oxydoku:
    'TypeScript, React, Zustand, Vite, Vitest, Chrome Extension (MV3), Capacitor',
  'shades-of-sg': 'React, Node.js, PostgreSQL, AI APIs, FFmpeg, WaveSurfer.js',
  rollover: 'React, Vite, Node.js, Express, AI APIs, SheetJS (xlsx)',
  sgen: 'React, JavaScript, Python, Flask, aiosqlite, SQLite, Web Speech API',
  'hospital-operations': 'Power BI, Power Query, DAX, Data modeling',
  'retail-data': 'KNIME, Excel, Data quality, Feature engineering',
  'workout-prediction': 'KNIME, SAS Viya, Feature engineering, Regression',
  'student-wellbeing': 'Excel, Statistics, Hypothesis testing',
};

export const projectBullets: Record<ProjectId, string[]> = {
  numpygrad: [
    'Built a reverse-mode autograd engine with dynamic computation graphs, shared-input gradient accumulation, broadcasting-aware gradients, and execution guards.',
    'Implemented vectorized convolutions with im2col/col2im, modular neural-network layers, numerically stable losses, AdamW, and model checkpoints.',
    'Built a Streamlit studio with validation-selected training, coordinate inference, parameter and gradient diagnostics, and model comparisons on shared data and mini-batches.',
    'Connected learned hazard scores to Dijkstra-based rover guidance and implemented multi-digit canvas preprocessing with saved-model inference; checked engine gradients with Pytest and finite differences.',
  ],
  oxydoku: [
    'Extended the open-source AImenes/sudokUI codebase into oxyDoku, engineering a multi-pattern scanner running 55 exhaustive and 21 bounded finders across 76 human solving techniques.',
    'Indexed overlapping pattern proofs by canonical logical conclusion and mapped all 76 techniques across six reasoning concepts, Discovery Mode, and interactive chain training.',
    'Built an interactive practice verifier grading board eliminations and participating cells against every valid step alongside a Manifest V3 Chrome Extension live-sync bridge and 1,250+ Vitest specs.',
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
    'Built a React checkout experience with CSS 3D card animations and an AI-generated inventory quiz backed by a deterministic offline fallback.',
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
    'Overcame graph and Python-loop bottlenecks by implementing DFS topological ordering with gradient accumulators, vectorizing 2D convolutions via im2col/col2im, and verifying accuracy across 152 Pytest unit and finite-difference checks.',
  ],
  oxydoku: [
    'Extended AImenes/sudokUI into oxyDoku in TypeScript and React, facing browser stalls and duplicate proofs when scanning 76 human solving techniques at once alongside pencil-mark loss when importing live puzzles.',
    'Overcame these limits by combining 55 exhaustive and 21 step-bounded chain/ALS finders with canonical outcome indexing, an interactive proof verifier, and an MV3 Chrome live-sync bridge verified by 1,250+ Vitest oracle checks.',
  ],
  'shades-of-sg': [
    'Led the media generation pipeline and browser timeline editor on a team project, challenged by high API costs from duplicate image requests and audio-video timing drift across asynchronous generation stages.',
    'Resolved both issues by building a deterministic chorus-hashing cache to reuse recurring frame assets (cutting image API costs 20–35%) and an AWAITING_REVIEW stage with draggable PostgreSQL JSONB lyric blocks.',
  ],
  rollover: [
    'Co-built a circular-retail discovery platform in a 24-hour hackathon, challenged by matching live surplus stock into mystery bundles under strict budget, size, and allergen rules without leaking bundle contents to the client.',
    'Solved this by building a deterministic Express bundle-matching engine paired with split preview/reveal APIs and SHA-256 offer verification, alongside a React 3D card-reveal flow with offline quiz fallbacks.',
  ],
  sgen: [
    'Developed the posts engine, infinite feed, and assistive accessibility tools on a team project, challenged by duplicate-fetch race conditions during rapid scrolling and keyboard barriers for senior users.',
    'Resolved feed race conditions with in-flight request guards and post-ID deduplication in React/Flask, and integrated Web Speech API dictation (EN, ZH, MS, TA), read-aloud synthesis, slang popovers, and outbound Link Guard prompts.',
  ],
  'hospital-operations': [
    'Solely designed the operational planning dashboard and data model, facing the challenge of integrating fragmented hospital admission, emergency wait-time, and scheduling tables with mismatched date granularities.',
    'Overcame data inconsistencies by establishing a unified Power BI star schema with dynamic DAX capacity measures and an interactive 12-month inflow simulator to stress-test clinical staffing needs by patient urgency.',
  ],
  'workout-prediction': [
    'Developed an end-to-end calorie expenditure regression workflow, challenged by 4,865 noisy, duplicated workout rows (~5x redundancy) and non-linear exertion dynamics that baseline linear models failed to capture.',
    'Addressed data noise and baseline error by building an automated KNIME deduplication and heart-rate reserve pipeline (973 clean sessions) and benchmarking SAS Viya ensemble models to reach a 35.00 kcal validation RMSE.',
  ],
};

export const technicalProjectIds = [
  'numpygrad',
  'oxydoku',
  'shades-of-sg',
  'rollover',
] as const satisfies readonly ProjectId[];

export const analyticsProjectIds = [
  'hospital-operations',
  'workout-prediction',
] as const satisfies readonly ProjectId[];

export const selectedProjectIds = [
  ...technicalProjectIds,
  ...analyticsProjectIds,
] as const satisfies readonly ProjectId[];

export const additionalProjects = [
  {
    id: 'retail-data',
    summary:
      'Built a KNIME pipeline to reconcile inconsistent regional customer schemas, automating validation, median imputation, and demographic feature engineering for Excel reporting.',
  },
  {
    id: 'sgen',
    summary:
      'Built async Flask/React feed workflows with in-flight request guards to prevent scroll race conditions, paired with multilingual speech input, read-aloud, and Link Guard safety prompts.',
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
  period?: string;
  previousRole?: string;
  events?: string[];
}

export const leadership: LeadershipItem[] = [
  {
    name: 'NYP AI',
    role: 'President',
    period: 'Year 2 Sem 2 – Present',
    previousRole: 'Executive Committee · Head of Publicity (Year 2 Sem 1)',
    events: [
      'Powering the Future (Networks & AI by Nokia): Co-organized 2-day systems engineering masterclass, led publicity to fill 50+ seats, and guided student lab checkpoints.',
      'Project Starbound: Co-organized orientation for 100+ incoming students, co-designing team activities, event logistics, and cohort outreach.',
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
    role: 'Class AA2502',
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
