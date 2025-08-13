# CapitalSolutionsSection & FeatureImageBlock Component Documentation

## Overview

The `CapitalSolutionsSection` and `FeatureImageBlock` components are designed to create visually rich, multilingual, and RTL-friendly slides for the "Capital Solutions" section of the Investment Banking page. They support explicit control over layout alternation (Text+Image vs Image+Text) and ensure consistent accent color usage.

---

## 1. `CapitalSolutionsSection`

### Purpose
- Renders the full Capital Solutions section, including the main title, subtitle, and a sequence of slides.
- Each slide is rendered using the `FeatureImageBlock` component.
- Supports both English (LTR) and Arabic (RTL) layouts.

### Key Features
- **Accent Color:** Main section accent and all slide titles use copper (`#A44F17`).
- **Layout Alternation:** Each slide can be either "Text + Image" or "Image + Text". This is controlled explicitly via a `variant` prop.
- **Multilingual:** All text is sourced from translation files (`en.json`, `ar.json`).
- **RTL Support:** Layouts flip correctly for Arabic, but the alternation (text/image order) is always explicit per slide.

### Usage Example
```tsx
import CapitalSolutionsSection from '../components/investment-banking/CapitalSolutionsSection';

function InvestmentBankingPage() {
  return (
    <>
      {/* ...other sections... */}
      <CapitalSolutionsSection />
      {/* ...other sections... */}
    </>
  );
}
```

---

## 2. `FeatureImageBlock`

### Purpose
- Renders a single slide with an image and a block of feature points.
- Supports two layout variants: `"text-image"` and `"image-text"`.
- Handles both LTR and RTL, always respecting the explicit variant.

### Props
| Prop     | Type     | Description                                                                 |
|----------|----------|-----------------------------------------------------------------------------|
| image    | string   | Path to the image to display.                                                |
| title    | string   | Main title for the slide (full copper color).                                |
| points   | array    | Array of `{ title: string, subtitle: string }` for feature points.           |
| variant  | string   | Either `'text-image'` or `'image-text'`. Controls the order of text & image. |

### Layout Logic
- **English (LTR):**
  - `text-image`: Text left, Image right
  - `image-text`: Image left, Text right
- **Arabic (RTL):**
  - `text-image`: Image right, Text left
  - `image-text`: Text right, Image left
- **Note:** The alternation is always explicit per slide, not based on index or language.

### Usage Example
```tsx
<FeatureImageBlock
  image="/images/capitalsolutions1.png"
  title={t('capitalSolutions.slide2.title')}
  points={[
    { title: t('capitalSolutions.slide2.feature1.title'), subtitle: t('capitalSolutions.slide2.feature1.subtitle') },
    // ...more points
  ]}
  variant="text-image" // or "image-text"
/>
```

---

## Best Practices
- **Always specify the `variant` prop** for each slide to ensure the correct alternation, regardless of language.
- **Use translation keys** for all text to support both English and Arabic.
- **Accent color** for all main titles is copper (`#A44F17`).
- **For new slides:**
  - Add the slide data to the `slides` array in `CapitalSolutionsSection.tsx`.
  - Provide translation keys in both `en.json` and `ar.json`.
- **For RTL:** The component will automatically flip the layout, but the alternation is always controlled by the `variant` prop.

---

## Extending
- You can reuse `FeatureImageBlock` for other sections requiring similar layout and alternation.
- To add more points, simply extend the `points` array.
- To change the accent color, update the color value in the component styles.

---

## Troubleshooting
- If the layout does not alternate as expected, check the `variant` prop for each slide.
- If the accent color is not copper, ensure the color code is `#A44F17` in both the section and slide titles.
- For translation issues, verify the keys exist in both `en.json` and `ar.json`.

---

## Contact
For further questions or improvements, contact the frontend lead or refer to the project documentation.


