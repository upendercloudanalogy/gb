// ─────────────────────────────────────────────────────────────
//  All of the words + media for the site live here, in one place.
//  Want to change a line, a caption, or her name? Edit it right here.
// ─────────────────────────────────────────────────────────────

export const hero = {
  name: "For Karina",
  tagline: "Two days, and the whole sky remembered you.",
  subtitle:
    "A small thing built by hand, line by line — to say it was lovely to have crossed your path, and to wish you well as you walk into your new life.",
  scrollHint: "scroll, dheere se",
};

export const opening = {
  heading: "Ek anjaan mulaqaat — a chance meeting",
  paragraphs: [
    "A screen, a stranger, a stream of static — and then you. Out of a whole random world, one window lit up, and somehow it felt easy, like the conversation had started long before we ever met.",
    "Two days is nothing. But some people leave more light in two days than others do in years — and you were one of them: kind when you owed me nothing, laughing with your whole heart.",
    "You told me you’re getting married soon. So this isn’t a hello that hopes for more. It’s a thank you, and a goodbye. Bas itni si baat.",
  ],
};

// Photos, in the order they appear as you scroll.
// `side` just alternates the layout left/right.
export const photos = [
  {
    id: "childhood",
    src: "/media/childhood.jpeg",
    alt: "A little girl in a bright yellow sunflower costume on a stage",
    caption: "A sunflower, before she knew the sun.",
    note: "Tiny you in yellow petals, too shy for the stage lights — already turning toward the warmth. Some things a person simply is, right from the very start.",
    chapter: "where it began",
    // very tall full-body photo — anchor near the top so the face is never cropped
    objectPosition: "center 16%",
  },
  {
    id: "kashmir_stream",
    src: "/media/kashmir-stream.jpeg",
    alt: "Karina beside a rushing turquoise Himalayan mountain stream",
    caption: "The river was in a hurry; you were not.",
    note: "Snow behind you, turquoise water rushing past, and you standing calm in all that noise — like the mountains had told you a secret. You belong in places this alive.",
    chapter: "the wanderer",
  },
  {
    id: "dal_lake",
    src: "/media/dal-lake.jpeg",
    alt: "Karina laughing on a shikara on Dal Lake at dusk",
    caption: "Dusk on the water, and a laugh you tried to hide.",
    note: "The shikara drifting, the light going gold, one hand over a smile that got away anyway. That laugh is the truest thing on this whole page. Keep laughing exactly like that.",
    chapter: "the wanderer",
  },
  {
    id: "leh_market",
    src: "/media/leh-market.jpeg",
    alt: "Karina standing on a quiet Leh market street",
    caption: "An ordinary street, an unmissable calm.",
    note: "No mountain, no monument — just a quiet Leh lane and you, completely at ease in your own skin. That kind of peace is rarer than any view.",
    chapter: "the wanderer",
  },
  {
    id: "khardung_la",
    src: "/media/khardung-la.jpeg",
    alt: "Karina at the Khardung La sign, one of the world's highest roads",
    caption: "Highest road on earth; higher spirit.",
    note: "Seventeen thousand feet, prayer flags snapping in the thin cold air, and you standing there like it was a garden path. Tumhara hausla — that’s the real altitude.",
    chapter: "the wanderer",
  },
  {
    id: "friends_dinner",
    src: "/media/friends-dinner.jpeg",
    alt: "Karina held close by a friend in a warm candle-lit restaurant",
    caption: "Held close, exactly as you deserve.",
    note: "Warm lamps, a friend’s arm around you, that soft yellow dress in the candle-glow. You’re easy to love, and everyone around you already knows it. This is what your days should always look like.",
    chapter: "the people who love you",
  },
  {
    id: "birthday",
    src: "/media/birthday.jpeg",
    alt: "Karina on her birthday in a red dress holding pink roses",
    caption: "Roses, and a smile too big for the room.",
    note: "Deep red dress, pink roses, a teddy nearly your size, and that shy trembling grin — like the happiness was too much to hold. May every year hand you more flowers than your arms can carry.",
    chapter: "the people who love you",
  },
];

// The finale photo — its own moment, full-bleed.
export const finalePhoto = {
  id: "nubra_heart",
  src: "/media/nubra-heart.jpeg",
  alt: "Karina alone in the vast Nubra valley, with clouds forming a heart above her",
  caption: "The sky drew a heart, and pointed it at you.",
  note: "Alone in that endless Nubra valley, bare mountains standing guard on every side — and above your head, the clouds arranged themselves into a heart. I don’t think that was an accident. And I don’t think it was for me. It was for the whole road ahead of you. Jao, khush raho. May the one who marries you love you the way that sky so plainly does. Alvida, Karina — and only good things ahead.",
};

export const videosSection = {
  heading: "Make a wish — koi dua maango",
  intro:
    "Two cakes, one candle-lit table, and that shy breath right before the flame. Close your eyes.",
  videos: [
    {
      src: "/media/birthday-1.mp4",
      caption: "Eyes closed, a wish held tight — may it come true, and then some.",
    },
    {
      src: "/media/birthday-2.mp4",
      caption: "Cut the cake — meethi shuruaat. Here’s to every sweet beginning ahead.",
    },
  ],
};

export const finale = {
  heading: "Best of luck for your next journey",
  lines: [
    "May your marriage be a home, not just a house.",
    "May the one beside you see the light I saw in two days — every single day of his life.",
    "May your laugh never learn to hide again.",
    "Khush raho, hamesha — be happy, always.",
    "The path was short. I’m glad it crossed yours.",
  ],
};

export const letter = {
  heading: "A short letter, then I’ll let you go",
  paragraphs: [
    "Karina — I don’t know how you make someone feel like an old friend in two days, but you did. I’m not writing this to hold on. I’m writing it to say it mattered, and to wish it well.",
    "You’re about to start the biggest, most beautiful chapter of your life. Walk into it fully. I hope it’s soft with you, and I hope he never once takes your light for granted. Don’t carry a single what-if — there isn’t one worth carrying.",
    "This little page is all a developer really has to give: a few honest lines, and some code that says be happy. That’s the whole wish. Thank you for the two brightest days a stranger could ask for.",
  ],
  signoff: "With warmth, and no regrets, always —",
};

export const footer =
  "Made by hand, with a good heart. Alvida, Karina.";
