# Local Markets Section Documentation

## Overview
The **Local Markets** section is a modular, reusable React component designed to display real-time (or delayed) market data for Saudi markets (TASI, NOMU, SUKUK, MT30) in a visually engaging card layout. It is located in the Local Market page and can be found in:

- `src/components/local-market/LocalMarketsSection.tsx`

## Component Structure

### 1. LocalMarketsSection.tsx
- **Role:** Main section container. Handles layout, title/subtitle, and grid of cards.
- **Key Features:**
  - Uses Framer Motion for entrance animation.
  - Title: "Explore Local Markets" ("Explore" in copper, rest in black, 52px max).
  - Subtitle: "Get direct access to Saudi’s most dynamic trading venues." (black).
  - Renders a grid of `LocalMarketCard` components, one for each market.
  - Market data is currently static, but the structure supports dynamic data.

### 2. LocalMarketCard.tsx
- **Role:** Displays a single market's data in a styled card.
- **Props:**
  - `symbol` (e.g., TASI)
  - `value` (e.g., 10,592.21)
  - `change` (e.g., -121.61)
  - `changePercent` (e.g., -1.14)
  - `chartType` ('positive' | 'negative' | 'neutral')
  - `lastUpdate` (not used, see below)
- **Key Features:**
  - **Title:** Uses Chap font, 28px, #635E5E, centered.
  - **Value:** Large, bold, black, below the chart.
  - **Change Amount:** Jokker Light, colored (green/red/gray), centered, with up/down icon (24x24px) immediately after the text.
  - **Last Update:** Shows `Last Update - HH:mm` (current time minus 5 minutes, 24h format).
  - **Card Styling:** 268x360px, 32px border-radius, white background, subtle box-shadow.

### 3. MiniGraph.tsx
- **Role:** Renders a mini SVG line/area chart for each card.
- **Props:**
  - `trend` ('positive' | 'negative' | 'neutral')
- **Key Features:**
  - Uses hand-tuned data arrays for each trend to match design (peaks/valleys for positive/negative, flat for neutral).
  - Uses Catmull-Rom spline for ultra-smooth, natural curves.
  - Area fill is a vertical gradient (color fades to white).
  - **Animation:**
    - Line draws from left to right on mount (stroke-dasharray/offset).
    - Area fades in after line is drawn.

## Typography System
- **Card Title:** Chap Light, 28px, #635E5E, centered (`getTypographyClasses('title')`)
- **Change Amount:** Jokker Light, 18px, colored, centered (`font-body-en font-light`)
- **Value:** Large, bold, black, below the chart (`getTypographyClasses('title')` + size override)
- **Subtitle:** Jokker Light, 22px, black

## Styling Decisions
- **Card:** 268x360px, border-radius 32px, white, box-shadow.
- **Icon:** Up/down, 24x24px, immediately after change amount.
- **Grid:** Responsive, 1-4 columns.
- **Background:** Uses `content01-background.png`.

## Data Flow
- Market data is currently static in `LocalMarketsSection.tsx` but can be replaced with API data.
- The time for "Last Update" is always calculated as current time minus 5 minutes, formatted as `HH:mm`.

## Animation
- Framer Motion for section/card entrance.
- SVG path animation for chart line and area.

## How to Update or Extend
- **To add a new market:** Add an entry to the `saudiMarkets` array in `LocalMarketsSection.tsx`.
- **To change chart shapes:** Edit the data arrays in `MiniGraph.tsx`.
- **To change typography:** Update the typography system in `useTypography.ts` and/or `fonts.css`.
- **To change icons:** Replace the SVG or PNG in `/public/images/icons/`.
- **To change time logic:** Edit the time calculation in `LocalMarketCard.tsx`.

## Related Files
- `src/components/local-market/LocalMarketsSection.tsx`
- `src/components/local-market/LocalMarketCard.tsx`
- `src/components/local-market/MiniGraph.tsx`
- `src/assets/fonts/fonts.css`
- `src/hooks/useTypography.ts`

---

**Last updated:** 2025-07-31
