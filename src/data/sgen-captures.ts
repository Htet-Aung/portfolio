import feed from '../assets/work/sgen/assistive-feed.png';
import community from '../assets/work/sgen/community-feed.png';
import voice from '../assets/work/sgen/voice-composition.png';
import safety from '../assets/work/sgen/slang-and-link-guard.png';

export const sgenCaptures = {
  feed: {
    image: feed,
    title: 'Assistive home feed and expanded comments',
    alt: 'SGEN home feed for a senior user showing a Tech Lounge post with highlighted slang terms, read-aloud speaker buttons, quick-reply chips, comment threads, and a voice dictation microphone control.',
    caption:
      'For users over 60, the same post and comment records turn on slang highlighting, read-aloud controls, one-tap quick replies, and voice-enabled comment input without splitting the underlying feed data model.',
  },
  community: {
    image: community,
    title: 'Community view, presence summary, and author post controls',
    alt: 'SGEN Tech Lounge community page displaying community sidebar navigation, member online and offline counts, and the Edit and Delete menu opened on the signed-in author post.',
    caption:
      'Community routes swap the sidebar into community navigation, render membership stats alongside the feed, and gate inline edit or delete controls on author ownership and role.',
  },
  voice: {
    image: voice,
    title: 'Multilingual speech-to-text post composer',
    alt: 'SGEN Create Post modal targeting Tech Lounge with active voice dictation, red listening border, dictated draft text, active stop button, and language selector.',
    caption:
      'The shared voice hook attaches browser SpeechRecognition transcripts directly into the composer input and surfaces a four-language selector while recording is active.',
  },
  safety: {
    image: safety,
    title: 'Dictionary slang explanation and outbound link guard',
    alt: 'SGEN feed showing a clicked slang phrase tooltip displaying its definition alongside the Leaving S-Gen outbound-link confirmation dialog previewing digitalforlife.gov.sg/tips.',
    caption:
      'Clicking an unfamiliar term opens its plain-English gloss in place, while external URLs outside the trusted list pause behind a confirmation modal showing the destination address.',
  },
} as const;

export type SgenCaptureId = keyof typeof sgenCaptures;
