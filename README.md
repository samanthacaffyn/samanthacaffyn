# samanthacaffyn.com

Sam's personal + professional brand site. Plain HTML/CSS/JS — no build step.

## Files
- `index.html` — all the content (edit text here)
- `styles.css` — colours, fonts, layout
- `script.js` — headshot fallback + scroll animations
- `images/headshot.jpg` — drop your headshot here (portrait orientation, roughly 4:5). Until it exists, the site shows an "SC" monogram instead.

## Preview locally
```
cd ~/Code/samanthacaffyn
python3 -m http.server 4321
```
Then open http://localhost:4321

## Deploy (Vercel, free)
```
cd ~/Code/samanthacaffyn
vercel --prod
```
Then buy `samanthacaffyn.com` (any registrar, ~AU$20/yr) and add it under
Vercel → Project → Settings → Domains.

## Things to update over time
- Contact email in `index.html` (currently the InvestorHub one — consider a personal
  address so the site outlives any one job).
- Role dates/promotions in the "The work" section.
