# Florida Post-Conviction Crash Course

A volunteer training web app for the Post Conviction Project, covering Florida Rules 3.850 and 3.800.

## Architecture

- **Frontend only** — pure React + Vite, no backend
- **Single page app** — all content and state in `src/App.jsx`
- **Port:** 5000

## Project Structure

```
src/
  App.jsx     — full app: styles, Quiz, Checklist, modules, App component
  main.jsx    — React entry point
index.html    — HTML shell
vite.config.js
package.json
```

## Modules

1. **Intro** — Welcome, volunteer scope, big picture timeline
2. **Rule 3.850** — Time bar, newly discovered evidence, Strickland/IAC, Brady/Giglio
3. **Rule 3.800** — Illegal sentences, harmless error, could-have vs. would-have
4. **The Clock** — Florida deadlines, AEDPA, tolling, exhaustion
5. **Case Checklist** — Full cold case review checklist with interactive checkboxes

## Features

- Interactive quiz questions with immediate feedback
- Progress bar tracking quiz completion
- Module navigation with completion indicators
- Interactive case review checklist
- Responsive dark-theme design

## Running

```
npm run dev
```
