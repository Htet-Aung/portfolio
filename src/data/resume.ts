import type { ProjectId } from './projects';

export const profile =
  'Singapore-based developer working across full-stack products and applied AI. My projects span an accessible social platform, a cultural media workflow, a circular-retail prototype, and a deep learning framework built in Python and NumPy.';

export const education = {
  institution: 'Nanyang Polytechnic',
  program: 'Diploma in Applied AI & Analytics',
  location: 'Singapore',
};

export const skills = [
  {
    label: 'Languages',
    items: 'Python, JavaScript, TypeScript, SQL, HTML, CSS',
  },
  {
    label: 'Web & data',
    items: 'React, Node.js, Express, Flask, PostgreSQL, SQLite',
  },
  {
    label: 'Applied AI',
    items: 'NumPy, autograd, neural networks, Pytest, Streamlit',
  },
  {
    label: 'Media & interfaces',
    items: 'FFmpeg, WaveSurfer.js, Web Audio, Web Speech API',
  },
];

export const projectBullets: Record<ProjectId, string[]> = {
  numpygrad: [
    'Built a reverse-mode autograd engine with dynamic computation graphs, shared-input gradient accumulation, and broadcasting-aware backward rules.',
    'Implemented vectorized convolutions, modular layers, stable losses, AdamW, model checkpoints, and finite-difference gradient checks.',
    'Created a Streamlit studio for decision boundaries, handwritten-digit inference, and simulated neural pathfinding.',
  ],
  'shades-of-sg': [
    'Built the generation pipeline and creator review step, preserving timestamped lyric blocks and reusing visuals for repeated choruses.',
    'Developed waveform-based editing, structured assistant patches, synchronized public playback, and interactive cultural content within a team platform.',
  ],
  rollover: [
    'Co-built a circular-retail hackathon prototype in a three-person team, with inventory-grounded matching and separate preview/reveal API contracts.',
    'Contributed to the React/Express integration, tactile CSS interface, and inventory-based quiz with a deterministic fallback.',
  ],
  sgen: [
    'Built post and comment workflows with asynchronous Flask handlers and page-based React feed loading, request guards, and duplicate-post filtering.',
    'Implemented browser speech tools, dictionary-based slang explanations, and outbound-link confirmation for an intergenerational social platform.',
  ],
};
