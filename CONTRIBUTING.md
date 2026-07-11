# Contributing

This is a personal portfolio project, but contributions such as bug fixes,
accessibility improvements, and performance suggestions are welcome.

## Getting set up

1. Fork the repo and clone your fork.
2. Install dependencies: `npm install`
3. Create a branch: `git checkout -b fix/short-description`
4. Start the dev server: `npm run dev`

## Before opening a PR

- Run `npm run format` and fix any issues.
- Make sure `npm run build` completes without errors.
- Keep PRs focused — one change per PR is easier to review.
- Use clear commit messages (e.g. `fix: correct mobile nav overlap`).

## Reporting bugs

Open an issue using the bug report template and include:

- Steps to reproduce
- Expected vs. actual behavior
- Browser/OS, and a screenshot if it's visual

## Code style

The project uses ESLint and Prettier. Please run `npm run format` before
committing — CI will fail on unformatted code.
