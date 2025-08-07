# 🎯 NavigationCard Implementation Guide

## 📋 **Overview**

The NavigationCard system consists of three main components that work together to create flexible, reusable card layouts for navigation purposes. This guide documents the architecture, implementation details, common issues, and solutions.

---

## 🏗️ **Component Architecture**

### **Component Hierarchy:**
```
NavigationCardSection (High-Level Container)
    ↓
NavigationCardGrid (Layout Manager)
    ↓
NavigationCard (Individual Card Component)
```

### **File Structure:**
```
src/components/ui/
├── NavigationCard.tsx          # Individual card component
├── NavigationCardGrid.tsx      # Layout management
└── NavigationCardSection.tsx   # Complete section wrapper
```

---

## 🎴 **1. NavigationCard Component**

### **Purpose:**
Individual card component with background, content, and navigation functionality.

### **Key Features:**
- **Background Support**: Image or gradient fallback
- **Typography**: Chap font for titles, Jokker Light for subtitles
- **Navigation**: Click to navigate to routes
- **Accessibility**: Keyboard navigation and ARIA labels
- **Animations**: Hover effects and Framer Motion
- **RTL Support**: Automatic Arabic font switching

### **Props Interface:**
```tsx
export interface NavigationCardProps {
  title: string;                    // Card title
  subtitle: string;                 // Card subtitle
  backgroundImage?: string;         // Optional background image
  route: string;                    // Navigation route
  variant?: 'default' | 'large' | 'medium' | 'small';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
```

### **Size Configurations:**
```tsx
const sizeConfig = {
  sm: { width: 'w-[280px]', height: 'h-[400px]', titleSize: 'text-2xl', subtitleSize: 'text-sm' },
  md: { width: 'w-[360px]', height: 'h-[550px]', titleSize: 'text-4xl', subtitleSize: 'text-lg' },
  lg: { width: 'w-[400px]', height: 'h-[600px]', titleSize: 'text-5xl', subtitleSize: 'text-xl' },
  xl: { width: 'w-[520px]', height: 'h-[585px]', titleSize: 'text-5xl', subtitleSize: 'text-xl' }
};
```

### **Background Logic:**
```tsx
style={{
  backgroundImage: backgroundImage 
    ? `url(${backgroundImage})` 
    : 'radial-gradient(105.43% 97.74% at 81.91% 50.09%, #7F501D 0%, #402106 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
```

### **Typography Classes:**
```css
.navigation-card-title {
  @apply text-[40px] font-light mb-6 leading-tight;
  font-family: "Chap", sans-serif;
}

.navigation-card-subtitle {
  @apply text-[18px] leading-relaxed flex-1 mb-8;
  font-family: "Jokker", sans-serif;
  font-weight: 300;
}
```

### **Line Break Support:**
```tsx
// Uses dangerouslySetInnerHTML for <br/> tags in translations
<h3 
  className="navigation-card-title text-white"
  dangerouslySetInnerHTML={{ __html: title }}
/>

<p 
  className="navigation-card-subtitle text-white"
  dangerouslySetInnerHTML={{ __html: subtitle }}
/>
```

---

## 🎯 **2. NavigationCardGrid Component**

### **Purpose:**
Manages layout and arrangement of multiple NavigationCard components.

### **Key Features:**
- **Layout Variants**: 2-cards, 3-cards, 4-grid, responsive
- **Gap Control**: Configurable spacing between cards
- **Alignment**: Center, start, end alignment options
- **Size Management**: Consistent sizing across all cards
- **Animation**: Framer Motion integration

### **Props Interface:**
```tsx
export interface NavigationCardGridProps {
  cards: Omit<NavigationCardProps, 'size'>[];
  layout?: 'two-cards' | 'three-cards' | 'four-grid' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  alignment?: 'center' | 'start' | 'end';
}
```

### **Layout Configurations:**
```tsx
const layoutConfig = {
  'two-cards': 'flex justify-center items-start',
  'three-cards': 'flex justify-center items-start',
  'four-grid': 'grid grid-cols-2 max-w-4xl mx-auto',
  'responsive': 'flex flex-col md:flex-row justify-center items-start'
};
```

### **Gap Configurations:**
```tsx
const gapConfig = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
};
```

### **Card Rendering Logic:**
```tsx
const renderCards = () => {
  switch (layout) {
    case 'two-cards':
      return cards.slice(0, 2).map((card, index) => (
        <NavigationCard key={index} {...card} size={size} />
      ));
    case 'three-cards':
      return cards.slice(0, 3).map((card, index) => (
        <NavigationCard key={index} {...card} size={size} />
      ));
    // ... other cases
  }
};
```

---

## 🎪 **3. NavigationCardSection Component**

### **Purpose:**
Complete section wrapper with header, controls, and grid management.

### **Key Features:**
- **Section Header**: Title and subtitle with translations
- **Interactive Controls**: Optional layout switching
- **Background Support**: Section-level background images
- **Translation Integration**: Built-in i18n support
- **Animation**: Motion animations for header elements

### **Props Interface:**
```tsx
export interface NavigationCardSectionProps {
  title: string;                    // Section title (translation key)
  subtitle?: string;                // Optional subtitle (translation key)
  cards: Omit<NavigationCardProps, 'size'>[];
  layout?: 'two-cards' | 'three-cards' | 'four-grid' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  backgroundImage?: string;         // Section background
  titleTransComponents?: React.ReactElement[];  // Accent color components
  showControls?: boolean;           // Show layout controls
  onLayoutChange?: (layout: string) => void;
  currentLayout?: string;
}
```

### **Accent Color Support:**
```tsx
// Default accent color component
titleTransComponents = [<span className="text-[#A44F17]" key="highlight" />]

// Usage in translation
"title": "Investment Opportunities Across <0>Markets</0>"
```

### **Interactive Controls:**
```tsx
{showControls && onLayoutChange && (
  <div className="mb-8 flex flex-wrap gap-4 justify-center">
    {layoutOptions.map(({ key, label }) => (
      <button
        key={key}
        onClick={() => onLayoutChange(key)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentLayout === key
            ? 'bg-[#A44F17] text-white'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
)}
```

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: Gradient Not Showing on Cards**

**Problem:** Cards show white background instead of gradient.

**Root Cause:** Cards have `backgroundImage` props that override the gradient.

**Solution:**
```tsx
// ❌ WRONG - Gradient won't show
const cards = [
  {
    title: "Card Title",
    subtitle: "Card subtitle",
    backgroundImage: "/images/card.jpg",  // ← Overrides gradient
    route: "/route"
  }
];

// ✅ CORRECT - Gradient will show
const cards = [
  {
    title: "Card Title",
    subtitle: "Card subtitle",
    // No backgroundImage = uses gradient
    route: "/route"
  }
];
```

### **Issue 2: Line Breaks Not Working in Text**

**Problem:** `<br/>` tags in translations not creating line breaks.

**Root Cause:** Width constraints on parent containers.

**Solution:**
```tsx
// ❌ WRONG - Constrained width
<motion.p className="section-subtitle text-black max-w-3xl mx-auto leading-relaxed">
  {t(subtitle)}
</motion.p>

// ✅ CORRECT - Free text expansion
<motion.p 
  className="section-subtitle text-black leading-relaxed"
  dangerouslySetInnerHTML={{ __html: t(subtitle) }}
/>
```

### **Issue 3: Typography Not Applying**

**Problem:** Titles not using Chap font, subtitles not using Jokker Light.

**Root Cause:** Missing font family definitions in CSS.

**Solution:**
```css
/* ✅ CORRECT - Explicit font families */
.section-title {
  @apply text-[52px] font-light mb-4;
  font-family: "Chap", sans-serif;
}

.section-subtitle {
  @apply text-[22px] opacity-80;
  font-family: "Jokker", sans-serif;
  font-weight: 300;  /* Light weight */
}
```

### **Issue 4: Interactive Controls Not Working**

**Problem:** Layout switching buttons don't change the layout.

**Root Cause:** State not properly connected to the grid layout.

**Solution:**
```tsx
// ✅ CORRECT - Dynamic layout
<NavigationCardSection
  cards={cards}
  layout={currentLayout as 'two-cards' | 'three-cards' | 'four-grid' | 'responsive'}
  showControls={true}
  onLayoutChange={setCurrentLayout}
  currentLayout={currentLayout}
/>
```

### **Issue 5: RTL/Arabic Text Issues**

**Problem:** Arabic text not aligning correctly or using wrong fonts.

**Root Cause:** Missing RTL font definitions.

**Solution:**
```css
/* ✅ CORRECT - RTL font support */
html[dir="rtl"] .navigation-card-title {
  font-family: "Almarai", sans-serif;
}

html[dir="rtl"] .navigation-card-subtitle {
  font-family: "Riada", sans-serif;
}
```

---

## 🎯 **Usage Examples**

### **Basic Usage:**
```tsx
import NavigationCardSection from '../ui/NavigationCardSection';

const MyComponent = () => {
  const cards = [
    {
      title: "Card 1",
      subtitle: "Description 1",
      route: "/route1"
    },
    {
      title: "Card 2", 
      subtitle: "Description 2",
      route: "/route2"
    }
  ];

  return (
    <NavigationCardSection
      title="mySection.title"
      subtitle="mySection.subtitle"
      cards={cards}
      layout="two-cards"
      size="xl"
    />
  );
};
```

### **With Interactive Controls:**
```tsx
const [currentLayout, setCurrentLayout] = useState('three-cards');

return (
  <NavigationCardSection
    title="Demo Section"
    subtitle="Interactive layout demonstration"
    cards={cards}
    layout={currentLayout}
    size="md"
    showControls={true}
    onLayoutChange={setCurrentLayout}
    currentLayout={currentLayout}
  />
);
```

### **With Background Image:**
```tsx
return (
  <NavigationCardSection
    title="Section with Background"
    cards={cards}
    layout="three-cards"
    backgroundImage="/images/section-bg.jpg"
  />
);
```

---

## 📝 **Translation Structure**

### **English (en.json):**
```json
{
  "mySection": {
    "title": "Section Title with <0>Accent</0>",
    "subtitle": "Description with<br/>line breaks",
    "card1": {
      "title": "Card Title<br/>with breaks",
      "subtitle": "Card description<br/>with line breaks"
    }
  }
}
```

### **Arabic (ar.json):**
```json
{
  "mySection": {
    "title": "عنوان القسم مع <0>تمييز</0>",
    "subtitle": "وصف مع<br/>فواصل أسطر",
    "card1": {
      "title": "عنوان البطاقة<br/>مع فواصل",
      "subtitle": "وصف البطاقة<br/>مع فواصل أسطر"
    }
  }
}
```

---

## 🔧 **Development Workflow**

### **1. Create Cards Data:**
```tsx
const cards = [
  {
    title: t('section.card1.title'),
    subtitle: t('section.card1.subtitle'),
    route: '/route1'
  }
];
```

### **2. Choose Layout:**
- **2-cards**: Asset Management style
- **3-cards**: Standard navigation
- **4-grid**: Service showcase
- **responsive**: Mobile-first design

### **3. Set Size:**
- **sm**: 280x400px
- **md**: 360x550px (default)
- **lg**: 400x600px
- **xl**: 520x585px

### **4. Add Translations:**
- Use `<br/>` for line breaks
- Use `<0>text</0>` for accent colors
- Support both English and Arabic

---

## ✅ **Best Practices**

### **Do:**
- ✅ Use translation keys for all text
- ✅ Remove backgroundImage to show gradient
- ✅ Use dangerouslySetInnerHTML for line breaks
- ✅ Test RTL layout thoroughly
- ✅ Keep card data simple and clean

### **Don't:**
- ❌ Hardcode text in components
- ❌ Mix backgroundImage with gradient expectations
- ❌ Use regular text rendering for HTML content
- ❌ Forget to test Arabic layout
- ❌ Overcomplicate card data structure

---

## 🎯 **Summary**

The NavigationCard system provides a flexible, reusable solution for creating navigation card layouts. The three-component architecture allows for:

- **Flexibility**: Multiple layout options and sizes
- **Reusability**: Consistent styling and behavior
- **Accessibility**: Proper keyboard navigation and ARIA labels
- **Internationalization**: Full RTL support and translation integration
- **Maintainability**: Clear separation of concerns

**Key Success Factors:**
1. Remove width constraints for proper text expansion
2. Use dangerouslySetInnerHTML for line breaks
3. Make backgroundImage optional for gradient fallback
4. Apply proper typography classes
5. Test both LTR and RTL layouts

**Remember:** The gradient only shows when `backgroundImage` is not provided. For gradient cards, omit the `backgroundImage` property entirely. 