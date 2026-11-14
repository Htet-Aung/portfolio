import scannerOverview from '../assets/work/oxydoku/scanner-overview.png';
import overlappingDeductions from '../assets/work/oxydoku/overlapping-deductions.png';
import chainTrainer from '../assets/work/oxydoku/chain-trainer.png';
import conceptTaxonomy from '../assets/work/oxydoku/concept-taxonomy.png';
import practiceVerifier from '../assets/work/oxydoku/practice-verifier.png';
import liveSyncChessTheme from '../assets/work/oxydoku/live-sync-chess-theme.png';

export const oxydokuCaptures = {
  scanner: {
    image: scannerOverview,
    title: 'Multi-pattern scanner and Discovery Mode',
    alt: 'oxyDoku Pattern Scanner displaying an ALS-XZ deduction highlighted on the Sudoku grid with its logical explanation and Reasoning Concept note',
    caption:
      'Exhaustive and bounded scanning across 76 human solving techniques surfaces all available deductions at once, pairing board cell highlights with Discovery Mode filtering.',
  },
  deductions: {
    image: overlappingDeductions,
    title: 'Comparing overlapping deductions by outcome',
    alt: 'oxyDoku By Outcome view grouping ALS-XZ, ALS-XY-Wing, and ALS-XY-Chain instances that all prove the same candidate elimination',
    caption:
      'Grouping findings By Outcome lines up different techniques—such as ALS-XZ, ALS-XY-Wing, and ALS-XY-Chain—whenever they prove the same candidate elimination.',
  },
  chains: {
    image: chainTrainer,
    title: 'Interactive alternating inference chain trainer',
    alt: 'oxyDoku Chain Trainer showing strong and weak alternating links drawn between candidates on the board for a Skyscraper pattern',
    caption:
      'Solvers click candidates directly on the SVG board to construct strong and weak links, test valid eliminations, and toggle step-by-step link visibility.',
  },
  taxonomy: {
    image: conceptTaxonomy,
    title: 'Six-concept taxonomy and My Techniques mastery',
    alt: 'oxyDoku My Techniques dialog organizing 76 supported techniques across Known, Learning, and Unfamiliar states by underlying reasoning concept',
    caption:
      'My Techniques organizes all 76 supported patterns into six core reasoning concepts and tracks Known, Learning, and Unfamiliar states.',
  },
  practice: {
    image: practiceVerifier,
    title: 'Practice verifier and progressive hints',
    alt: 'oxyDoku Practice Panel verifying a Skyscraper exercise with progressive board highlights and digit/cell answer controls',
    caption:
      'The interactive Practice mode grades eliminations, key digits, and participating cells against every valid deduction on the board while disclosing hints across four progressive stages.',
  },
  sync: {
    image: liveSyncChessTheme,
    title: 'Manifest V3 Live Sync and Chess board theme',
    alt: 'oxyDoku rendered in the Chess board theme with the Live Sync status popover connected and pattern highlights active',
    caption:
      'A Manifest V3 Chrome Extension mirrors live board state and pencil-mark bitmasks into oxyDoku, shown here in the custom Chess theme.',
  },
} as const;

export type OxyDokuCaptureId = keyof typeof oxydokuCaptures;
