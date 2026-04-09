# AlphaVision

AlphaVision is a lightweight Polymarket smart money tracking dashboard.

It turns raw activity into more readable signals by combining:
- tracked trader profiles
- recent activity feed
- signal status labels such as EARLY / MID / LATE

## Current MVP

This version focuses on a simple front-end dashboard with mock data.

### Features
- Track selected trader profiles
- Display recent smart money activity
- Add signal status labels to activity items
- Show basic dashboard stats
- Clean dark dashboard UI

## Why this project

The goal is not copy trading.

The goal is to build a tool that helps interpret on-chain behavior and develop better intuition around:
- timing
- market context
- signal quality
- smart money behavior patterns

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

## Project Status

MVP in progress.

Current version uses local mock data.
Next steps may include:
- real Polymarket data integration
- trader behavior classification
- signal quality heuristics
- more detailed trader views

## Local Development

```bash
npm install
npm run dev