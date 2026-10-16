import start from '../assets/work/rollover/starting-page.png';
import setup from '../assets/work/rollover/setup-constraints.png';
import quiz from '../assets/work/rollover/quiz-question.png';
import boxes from '../assets/work/rollover/sealed-boxes.png';
import opening from '../assets/work/rollover/box-opening.png';
import cards from '../assets/work/rollover/card-reveal.png';
import summary from '../assets/work/rollover/haul-summary.png';

export const rolloverCaptures = {
  start: {
    image: start,
    title: 'Good stuff. New game.',
    alt: 'ROLLOVER starting page with an illustrated capsule machine, the message Good stuff. New game., a Start my drop button, and a seven-stage navigation rail.',
    caption:
      'The project cover is the app’s starting screen. Its surplus arcade theme introduces the idea of giving goods a second chance, while the navigation rail makes the route from setup to haul summary visible.',
  },
  setup: {
    image: setup,
    title: 'Define what belongs in the mix',
    alt: 'ROLLOVER Shape the mix screen with category checkboxes, new or preloved condition choices, and size and food preference controls.',
    caption:
      'A still from the full demo fills in the setup between the landing page and quiz. Category, condition, size, and food preferences become inputs to the inventory rules; recipient and budget are set in the preceding screens.',
  },
  quiz: {
    image: quiz,
    title: 'Turn a playful choice into a matching signal',
    alt: 'ROLLOVER Movies and TV quiz, step four of four, asking which role the user would take in an Interstellar docking scenario, with four labeled choices.',
    caption:
      'This Movies & TV scenario gathers preferences through a familiar topic. The four choices map to inventory tags that influence matching; the screen is a personality prompt rather than a scored trivia test.',
  },
  boxes: {
    image: boxes,
    title: 'Compare offers before opening one',
    alt: 'ROLLOVER sealed offer comparison under a 1000 dollar limit, showing The remix at 65.10 dollars, Little lift at 226 dollars, and Wild card at 420 dollars, with counts, categories, colors and clues.',
    caption:
      'The captured run has a $1,000 ceiling. The remix costs $65.10 for four finds; other boxes offer different mixes and prices. Totals and clues make the choice informed while product names and images wait for the reveal.',
  },
  opening: {
    image: opening,
    title: 'Open the chosen box',
    alt: 'ROLLOVER box-opening screen with a lime lid lifting above the selected box, a progress bar, and Back to boxes and Skip opening controls.',
    caption:
      'The layered box animation stages the transition from a sealed offer to its contents. Back and skip controls give the user a direct route, and the app waits for the server’s selected products before advancing.',
  },
  cards: {
    image: cards,
    title: 'Discover the contents at your own pace',
    alt: 'ROLLOVER individual item reveal with four sealed cards, zero of four finds revealed, and controls to go back to boxes or reveal all.',
    caption:
      'Each card reveals an item from the same selected offer. A per-box progress counter supports individual reveals, while Reveal all provides a faster path to the complete haul.',
  },
  summary: {
    image: summary,
    title: 'Make the haul inspectable',
    alt: 'ROLLOVER haul summary showing four finds for 65.10 dollars against a 1000 dollar budget, expanded Casio F-91W details, a collapsed candle entry, and Compare boxes, Replay opening and Save this drop controls.',
    caption:
      'The four-find, $65.10 offer carries through to the summary. Expanded details explain product condition, materials, and the surplus reason; users can compare boxes, replay the opening, or save their pick for the current session.',
  },
};

export type RolloverCaptureId = keyof typeof rolloverCaptures;
