# LiquidSky Network Security Landing Page

Static landing page for LiquidSky Network Security: Offensive Security. Practical Protection. The planned legal name is LiquidSky Network Security, LLC. It uses plain HTML, CSS, and JavaScript, so it can be hosted on GitHub Pages, Netlify, Vercel, or any static host.

## Files

- `index.html` - page content, SEO tags, Open Graph tags, intake form, and editable business details
- `style.css` - responsive dark theme, glass panels, layout, and animations
- `script.js` - mobile navigation, scroll reveals, animated hero canvas, and mailto intake handling

## Customize

Search for `EDIT` comments in `index.html` and `script.js`.

Update these first:

- Brand name: `LiquidSky Network Security`
- Legal name: `LiquidSky Network Security, LLC`
- Email: replace `security@liquidskysecurity.com` in `index.html` and `script.js` if needed
- Phone: replace `(972) 503-9743` and `+19725039743` if needed
- LinkedIn: replace `https://www.linkedin.com/in/j-mcpeters/` if needed
- GitHub: replace `https://github.com/fuzzlove` if needed
- OSCP credential: replace `https://www.credly.com/badges/351bd31d-dcf7-4f51-bd25-4d3cb767d333` if needed
- OSWE credential: replace `https://www.credly.com/badges/7a1c5ac8-2d45-4397-b684-31dca72e700f/public_url?trk=public_profile_see-credential` if needed
- OSWA credential: replace `https://www.credential.net/200af876-2044-40ad-bce8-f0d18e1c720a#acc.0XmgqQue` if needed
- Service area: replace `Remote across the U.S. | Local onsite by request`
- Domain: replace `https://liquidskysecurity.com/` in canonical and Open Graph tags if needed
- Open Graph image: replace `https://liquidskysecurity.com/og-image.jpg` if needed
- Pricing: replace `Starting at request quote` or `Request quote` once pricing is ready
- Testimonials: replace placeholder quotes once you have permission to publish real ones
- Portfolio proof: update the GitHub portfolio section as your public projects change

## Intake Form

The form currently opens the visitor's email app with a pre-filled message.

To keep using mailto:

1. Update `BUSINESS_EMAIL` in `script.js`.
2. Update the form `action` and visible email links in `index.html`.

To use a backend later:

1. Replace the form `action` with your endpoint.
2. Change `method` to the backend's required method, usually `post`.
3. Remove or replace the JavaScript `submit` handler in `script.js`.

Common static-friendly form options include Netlify Forms, Formspree, Basin, Getform, or a small serverless function.

## Deploy on GitHub Pages

1. Push these files to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to your branch and root folder.
4. Save and wait for GitHub to publish the site.

## Deploy on Netlify

1. Create a new Netlify site from your GitHub repository.
2. Leave the build command empty.
3. Set the publish directory to `/` if the files are at the repository root.
4. Deploy.

## Deploy on Vercel

1. Import the repository into Vercel.
2. Use the default static project settings.
3. Leave build command empty if prompted.
4. Deploy.

## Local Preview

Open `index.html` directly in a browser, or run a small static server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
