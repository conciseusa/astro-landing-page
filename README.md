# Astro Landing Page <picture><source media="(prefers-color-scheme: dark)" srcset="https://astro.build/assets/press/astro-icon-light.png"><source media="(prefers-color-scheme: light)" srcset="https://astro.build/assets/press/astro-icon-dark.png"><img align="right" valign="center" height="79" width="63" src="https://astro.build/assets/press/astro-icon-dark.png" alt="Astro logo" /></picture>

> An Astro + Tailwind CSS example/template for landing pages.

<div align="center">

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

</div>

## Merge upstream with Fork

Notes on keeping fork up to date with upstream<br>
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork<br>
git remote -v # check if upstream set<br>
git remote add upstream https://github.com/mhyfritz/astro-landing-page.git<br>
git remote -v # confirm upstream set<br>
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork<br>
git fetch upstream<br>
git checkout main<br>
git merge upstream/main # if there are conflicts, this is where the fun is<br>

Git error on commit after merge - fatal: cannot do a partial commit during a merge<br>
https://stackoverflow.com/questions/5827944/git-error-on-commit-after-merge-fatal-cannot-do-a-partial-commit-during-a-mer<br>
git commit -i myfile.php<br>

npm install<br>
npm run dev<br>

Needed more icons:
https://www.npmjs.com/package/astro-icon -> Iconify Icons
npm i -D @iconify-json/carbon


![Screenshots of Astro Landing Page](screenshots.jpg)

## Features

- 💨 Tailwind CSS for styling
- 🎨 Themeable
  - CSS variables are defined in `src/styles/theme.css` and mapped to Tailwind classes (`tailwind.config.cjs`)
- 🌙 Dark mode
- 📱 Responsive (layout, images, typography)
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- 🔗 Open Graph tags for social media sharing
- 💅 [Prettier](https://prettier.io/) setup for both [Astro](https://github.com/withastro/prettier-plugin-astro) and [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Credits

- astronaut image
  - source: https://github.com/withastro/astro-og-image; note: this repo is not available anymore
- moon image
  - source: https://unsplash.com/@nasa
- other than that, a lot of material (showcase data, copy) was taken from official Astro sources, in particular https://astro.build/blog/introducing-astro/ and https://github.com/withastro/astro.build
