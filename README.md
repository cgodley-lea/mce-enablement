# MCE Enablement

A self-paced Marketing Cloud Engagement course for ListEngage Academy. It rebuilds the LEOptical scenario in MCE and maps every lesson to Marketing Cloud Next (MCN) and Marketing Cloud Account Engagement (MCAE). Built with Docusaurus and styled with the ListEngage design system.

Live site (once Pages is enabled): https://cgodley-lea.github.io/mce-enablement/

## Working on the course

- `npm install`, then `npm start` to preview locally.
- `npm run build` to check that the site builds.
- The course outline lives in `src/data/course.ts`. The homepage and progress tracking read from it.
- `npm run scaffold` creates part folders and a stub page for any lesson in the outline that has no file yet. It never overwrites a lesson.

## Writing a lesson

Replace the stub in `docs/<part>/<lesson>.md`. Every lesson ends with the comparison callout, which works in any lesson without an import:

```mdx
<Compare mcn="What this is in MCN." mcae="What this is in MCAE." />
```

Lesson order: overview, lesson body, Lab, Success Criteria, Knowledge Check, then the comparison.

## Styling

Colours, type and spacing come from the ListEngage design system tokens in `src/css/tokens.css`. `src/css/custom.css` maps them onto Docusaurus and uses no raw colour values. The Academy logo is not included yet. Add it to `static/img/` and set `navbar.logo` in `docusaurus.config.ts`.

## Deploying

Pushes to `main` build and deploy through `.github/workflows/deploy.yml`. One-time setup: in the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
