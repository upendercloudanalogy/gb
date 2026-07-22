# For Karina — a little goodbye 💛

A small, animated farewell tribute site, built in Next.js. Scroll-driven story
of photos + videos, a romantic dusk theme, floating hearts & petals, and a
closing letter that wishes her well on the road ahead.

## Run it

```bash
npm install      # already done once
npm run dev      # then open http://localhost:3000
```

For a production build:

```bash
npm run build
npm start
```

## Share it (put it online for free)

The easiest way to send her a real link:

- **Vercel** (made by the Next.js team): install the CLI with `npm i -g vercel`,
  then run `vercel` in this folder and follow the prompts. You get a public URL.
- Or push this folder to GitHub and import it at vercel.com — zero config.

Tip: the link `…/?open=1` skips the "tap to open" intro and jumps straight in.

## Where everything lives

- `lib/content.js` — **every word on the site**: her name, the captions, the
  quotes, the letter. Change anything here and it updates instantly.
- `public/media/` — the photos and videos (copied from your `photos/` folder
  and given clean names).
- `components/` — the animated sections (Hero, Journey, Videos, Finale, Letter).
- `app/` — layout, fonts, global styles.

### Want to change her name or a line?

Open `lib/content.js`. The name shows up as `hero.name` (currently
`"For Karina"`) and inside a couple of the captions — just edit the text.

## The photos, in order

1. Childhood — sunflower costume
2. Kashmir — mountain stream
3. Dal Lake — the shikara
4. Leh — the market street
5. Khardung La — highest road
6. A night out with a friend
7. Birthday — red dress & roses
8. **Finale:** Nubra Valley, where the clouds made a heart

Plus two birthday video clips.

Made by hand, with a good heart. 🌸
