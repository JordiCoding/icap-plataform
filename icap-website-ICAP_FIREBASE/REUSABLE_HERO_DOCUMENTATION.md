# ReusableHero Component Documentation

## 🎯 Overview

The `ReusableHero` component is a flexible, feature-rich hero section component designed for the ICAP website. It supports multiple background types, layouts, typography options, and full bilingual (English/Arabic) functionality with RTL support.

## 📁 File Location
```
src/components/common/ReusableHero.tsx
```

## 🚀 Key Features

### ✅ **Content Management**
- Dynamic title and subtitle with line break support
- Optional CTA button with link functionality
- Translation key integration with fallback support

### ✅ **Background Options**
- **Image backgrounds** with RTL flipping support
- **Video backgrounds** with fallback images
- **Customizable overlays** with opacity control

### ✅ **Layout Flexibility**
- **Centered layout**: Content centered on screen
- **Left-aligned layout**: Content aligned to left (RTL-aware)
- **Right-aligned layout**: Content aligned to right (RTL-aware)

### ✅ **Typography System**
- **Header Title**: Jokker Semibold 68px
- **Header Subtitle**: Jokker Light 22px (responsive: 18px→20px + inline 22px)
- **Language-aware line heights**: Relaxed for Arabic, tight for English

### ✅ **Animation Control**
- **Framer Motion integration** with staggered animations
- **Toggle animations** on/off for performance
- **Graceful fallbacks** to regular HTML elements

### ✅ **RTL Support**
- **Image flipping** for Arabic layouts
- **Content counter-flipping** to maintain readability
- **Language-aware positioning** and typography

## 📋 Interface

```typescript
interface HeroProps {
  // Content
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  
  // Background
  backgroundType: 'image' | 'video';
  backgroundSrc: string;
  backgroundFallback?: string;
  
  // Layout
  layout: 'centered' | 'left-aligned' | 'right-aligned';
  
  // Styling
  overlay?: boolean;
  overlayOpacity?: number;
  
  // Animation
  enableAnimations?: boolean;
  
  // RTL
  enableRTLFlip?: boolean;
  
  // Typography
  titleTypography?: 'hero-title' | 'header-title' | 'custom';
  subtitleTypography?: 'hero-subtitle' | 'header-subtitle' | 'custom';
  
  // Custom styling
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}
```

## 🎨 Typography Options

### **Title Typography:**
- `hero-title`: Large responsive (5xl→7xl) with tracking
- `header-title`: Fixed 68px Jokker Semibold
- `custom`: Base classes only

### **Subtitle Typography:**
- `hero-subtitle`: Responsive (lg→xl)
- `header-subtitle`: Fixed 22px Jokker Light (responsive 18px→20px + inline 22px)
- `custom`: Base classes only

## 📝 Usage Examples

### **1. Simple Hero with Image Background**
```tsx
<ReusableHero
  title="Welcome to ICAP"
  subtitle="Your trusted investment partner"
  ctaText="Get Started"
  backgroundType="image"
  backgroundSrc="/images/hero.jpg"
  layout="centered"
/>
```

### **2. Video Background Hero**
```tsx
<ReusableHero
  title="Dynamic Content"
  backgroundType="video"
  backgroundSrc="/videos/hero.mp4"
  backgroundFallback="/images/hero-fallback.jpg"
  layout="centered"
/>
```

### **3. RTL-Aware Hero with Line Breaks**
```tsx
<ReusableHero
  title="Brokerage Services<0/>Designed for Your<0/>Ambitions"
  subtitle="Trade with confidence. Our platform supports every investor with<0/>real-time data, smart tools, and expert guidance."
  backgroundType="image"
  backgroundSrc="/images/brokerage.jpg"
  layout="left-aligned"
  enableRTLFlip={true}
  titleTypography="header-title"
  subtitleTypography="header-subtitle"
/>
```

### **4. Complete Hero with Navbar**
```tsx
import Header from '../layout/Header';

const CompleteHero = () => (
  <div className="relative">
    <Header position="absolute" />
    <ReusableHero
      title="Your Title"
      subtitle="Your subtitle"
      backgroundType="image"
      backgroundSrc="/images/hero.jpg"
      layout="centered"
    />
  </div>
);
```

## 🌐 Line Break Support

### **Translation Key Method (Recommended):**
```json
// en.json
{
  "hero": {
    "title": "Brokerage Services<0/>Designed for Your<0/>Ambitions",
    "subtitle": "Trade with confidence.<0/>Our platform supports every investor."
  }
}
```

```tsx
// Component automatically handles <0/> markers
<ReusableHero
  title={t('hero.title')}
  subtitle={t('hero.subtitle')}
/>
```

### **Manual Line Break Method:**
```tsx
<ReusableHero
  title="Line 1\nLine 2\nLine 3"
  subtitle="Subtitle line 1\nSubtitle line 2"
/>
```

## 🎨 CSS Classes

### **Custom Font Classes:**
```css
.font-jokker-light {
  font-family: 'Jokker', sans-serif;
  font-weight: 300;
}

.font-jokker-regular {
  font-family: 'Jokker', sans-serif;
  font-weight: 400;
}

.font-jokker-semibold {
  font-family: 'Jokker', sans-serif;
  font-weight: 600;
}
```

### **Typography Combinations:**
- **Header Title**: `text-[68px] font-jokker-semibold`
- **Header Subtitle**: `text-lg md:text-xl font-jokker-light` + `fontSize: '22px'`

## 🔧 Implementation Details

### **RTL Handling:**
```tsx
// Background flipping for Arabic
const getBackgroundStyle = () => {
  const baseStyle = { backgroundImage: `url(${backgroundSrc})` };
  if (enableRTLFlip && isArabic) {
    return { ...baseStyle, transform: 'scaleX(-1)' };
  }
  return baseStyle;
};

// Content counter-flipping
const getContentStyle = () => {
  if (enableRTLFlip && isArabic) {
    return { transform: 'scaleX(-1)' };
  }
  return {};
};
```

### **Animation Control:**
```tsx
const MotionWrapper = enableAnimations ? motion.div : 'div';
const MotionTitle = enableAnimations ? motion.h1 : 'h1';
const MotionSubtitle = enableAnimations ? motion.p : 'p';
```

### **Line Height Management:**
```tsx
const getLineHeightClasses = () => {
  return isArabic ? 'leading-relaxed lg:leading-relaxed' : 'leading-tight lg:leading-tight';
};
```

## 📊 Component Architecture

### **File Structure:**
```
src/
├── components/
│   ├── common/
│   │   └── ReusableHero.tsx          # Main component
│   └── brokerage/
│       └── BrokerageHero.tsx         # Implementation example
├── hooks/
│   └── useTypography.ts              # Typography system
└── index.css                         # Custom font classes
```

### **Dependencies:**
- `framer-motion`: Animation support
- `react-i18next`: Translation and RTL support
- `../ui/Button`: CTA button component

## 🚀 Best Practices

### **1. Content Organization:**
- Use translation keys for line breaks (`<0/>`)
- Keep content in locale files
- Use semantic typography options

### **2. Performance:**
- Toggle animations based on needs
- Use appropriate image formats
- Optimize video backgrounds

### **3. Accessibility:**
- Provide alt text for backgrounds
- Ensure proper contrast ratios
- Support keyboard navigation

### **4. Responsive Design:**
- Test all layout options
- Verify RTL behavior
- Check mobile performance

## 🔄 Migration Guide

### **From Old Hero Components:**
1. **Extract content** to translation files
2. **Choose appropriate** typography options
3. **Configure layout** and background settings
4. **Test RTL** behavior if applicable

### **Example Migration:**
```tsx
// Old component
<motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
  {title}
</motion.h1>

// New component
<ReusableHero
  title={title}
  titleTypography="header-title"
  layout="left-aligned"
/>
```

## 🐛 Troubleshooting

### **Common Issues:**

**1. Line breaks not working:**
- Ensure translation uses `<0/>` markers
- Check Trans component import
- Verify translation key exists

**2. RTL flipping issues:**
- Enable `enableRTLFlip={true}`
- Check Arabic language detection
- Verify image positioning

**3. Typography not applying:**
- Check font files are loaded
- Verify CSS classes exist
- Test typography options

**4. Animation problems:**
- Toggle `enableAnimations={false}`
- Check Framer Motion import
- Verify component variants

## 📈 Future Enhancements

### **Planned Features:**
- Multiple CTA buttons
- Advanced animation presets
- Background parallax effects
- Custom overlay patterns
- Advanced RTL configurations

### **Performance Optimizations:**
- Lazy loading for backgrounds
- Animation performance tuning
- Bundle size optimization

---

**Last Updated**: July 31, 2025  
**Version**: 1.0  
**Status**: Production Ready  
**Maintainer**: AI Assistant 