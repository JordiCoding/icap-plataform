# FeatureSection Component Documentation

## 🎯 Overview
The `FeatureSection` component is a reusable, flexible component designed to display feature items (icon + title + description) in different layouts. It's based on the `WhyAlistithmarSection` pattern and supports three variants for different use cases.

## 📋 Component Features

### ✅ **Core Features**
- **3 Variants**: `three-items`, `four-items`, `slider`
- **Bilingual Support**: Full RTL/LTR support with proper typography
- **Media Support**: Images and WebM videos with automatic detection
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Title Highlighting**: Customizable title highlighting (e.g., "Why" in "Why Alistithmar")
- **Background Images**: Customizable background images
- **Slider Navigation**: Dot navigation for slider variant

### ✅ **Typography Integration**
- Uses `useTypography` hook for consistent font families
- Arabic line height optimization (`leading-relaxed` vs `leading-tight`)
- Proper font switching between English and Arabic

### ✅ **Animation Support**
- Keen Slider for smooth sliding animations
- RTL-aware slider direction
- Responsive slides per view configuration

---

## 🎨 Variants

### **Variant 1: Three Items (`three-items`)**
- **Layout**: 3-column grid (1 column on mobile, 3 on desktop)
- **Use Case**: Perfect for main feature showcases (like WhyAlistithmar)
- **Items**: Shows exactly 3 items

```tsx
<FeatureSection
  variant="three-items"
  items={threeItems}
  title="section.title"
  subtitle="section.subtitle"
/>
```

### **Variant 2: Four Items (`four-items`)**
- **Layout**: 4-column grid (1 column on mobile, 2 on tablet, 4 on desktop)
- **Use Case**: Feature comparisons, service offerings
- **Items**: Shows exactly 4 items

```tsx
<FeatureSection
  variant="four-items"
  items={fourItems}
  title="section.title"
  subtitle="section.subtitle"
/>
```

### **Variant 3: Slider (`slider`)**
- **Layout**: Slider with navigation dots
- **Use Case**: Many features that need to be browsed
- **Items**: Shows 3 items at once, slides through all items
- **Navigation**: Dot navigation for easy browsing

```tsx
<FeatureSection
  variant="slider"
  items={manyItems}
  title="section.title"
  subtitle="section.subtitle"
  slidesPerView={{
    mobile: 1,
    tablet: 2,
    desktop: 3
  }}
/>
```

---

## 🔧 Props Interface

### **FeatureItem Interface**
```tsx
interface FeatureItem {
  id: string;           // Unique identifier
  icon: string;         // URL to image or video
  title: string;        // Translation key for title
  description: string;  // Translation key for description
  alt?: string;         // Alt text for icon (optional)
}
```

### **FeatureSectionProps Interface**
```tsx
interface FeatureSectionProps {
  // Content
  title: string;        // Translation key for main title
  subtitle?: string;    // Translation key for subtitle (optional)
  items: FeatureItem[]; // Array of feature items
  
  // Variant
  variant: 'three-items' | 'four-items' | 'slider';
  
  // Styling
  titleHighlight?: string;      // Text to highlight in title
  titleHighlightColor?: string; // Color for highlighted text
  backgroundImage?: string;     // Background image URL
  className?: string;           // Additional CSS classes
  
  // Slider options (for variant 3)
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}
```

---

## 📝 Usage Examples

### **Example 1: WhyAlistithmar Section (3 Items)**
```tsx
import { FeatureSection, FeatureItem } from '../ui/FeatureSection';

const WhyAlistithmarSection: React.FC = () => {
  const featureItems: FeatureItem[] = [
    {
      id: 'secure',
      icon: '/images/why-arrow.webm',
      title: 'whyAlistithmar.secureTitle',
      description: 'whyAlistithmar.secureDescription',
      alt: 'Secure & Trusted'
    },
    {
      id: 'sharia',
      icon: '/images/why-invest.webm',
      title: 'whyAlistithmar.shariaTitle',
      description: 'whyAlistithmar.shariaDescription',
      alt: 'Shariah-Compliant Options'
    },
    {
      id: 'global',
      icon: '/images/why-circle.webm',
      title: 'whyAlistithmar.globalTitle',
      description: 'whyAlistithmar.globalDescription',
      alt: 'Global Reach, Local Roots'
    }
  ];

  return (
    <FeatureSection
      title="whyAlistithmar.title"
      subtitle="whyAlistithmar.subtitle"
      items={featureItems}
      variant="three-items"
      titleHighlight="Why"
      titleHighlightColor="#F3B660"
      backgroundImage="/images/darkbackground.png"
    />
  );
};
```

### **Example 2: Service Features (4 Items)**
```tsx
const ServiceFeaturesSection: React.FC = () => {
  const serviceItems: FeatureItem[] = [
    {
      id: 'trading',
      icon: '/images/trading-icon.png',
      title: 'services.trading.title',
      description: 'services.trading.description',
      alt: 'Trading Services'
    },
    {
      id: 'investment',
      icon: '/images/investment-icon.png',
      title: 'services.investment.title',
      description: 'services.investment.description',
      alt: 'Investment Services'
    },
    {
      id: 'advisory',
      icon: '/images/advisory-icon.png',
      title: 'services.advisory.title',
      description: 'services.advisory.description',
      alt: 'Advisory Services'
    },
    {
      id: 'research',
      icon: '/images/research-icon.png',
      title: 'services.research.title',
      description: 'services.research.description',
      alt: 'Research Services'
    }
  ];

  return (
    <FeatureSection
      title="services.title"
      subtitle="services.subtitle"
      items={serviceItems}
      variant="four-items"
      backgroundImage="/images/services-bg.png"
    />
  );
};
```

### **Example 3: Product Showcase (Slider)**
```tsx
const ProductShowcaseSection: React.FC = () => {
  const productItems: FeatureItem[] = [
    // ... 6+ product items
  ];

  return (
    <FeatureSection
      title="products.title"
      subtitle="products.subtitle"
      items={productItems}
      variant="slider"
      slidesPerView={{
        mobile: 1,
        tablet: 2,
        desktop: 3
      }}
    />
  );
};
```

---

## 🎨 Styling & Customization

### **Default Styling**
- **Background**: Dark background (`bg-[#221200]`) with customizable background image
- **Typography**: Uses `useTypography` hook for consistent fonts
- **Spacing**: Responsive padding and margins
- **Colors**: White text with gray subtitles

### **Customization Options**
```tsx
// Custom background
backgroundImage="/images/custom-bg.png"

// Custom title highlighting
titleHighlight="Why"
titleHighlightColor="#F3B660"

// Custom CSS classes
className="custom-section-class"

// Custom slider configuration
slidesPerView={{
  mobile: 1,
  tablet: 2,
  desktop: 3
}}
```

---

## 🌐 Bilingual Support

### **RTL Support**
- **Automatic RTL detection** based on current language
- **Slider direction** automatically adjusts for RTL
- **Typography** switches between English and Arabic fonts
- **Line heights** optimized for Arabic text

### **Translation Keys**
All text content uses translation keys:
- `title`: Main section title
- `subtitle`: Section subtitle (optional)
- `items[].title`: Feature item title
- `items[].description`: Feature item description

---

## 🔧 Technical Implementation

### **Media Handling**
- **Automatic detection** of WebM videos vs images
- **Video autoplay** with proper error handling
- **Image fallback** for video loading errors
- **Responsive sizing** with consistent aspect ratios

### **Slider Implementation**
- **Keen Slider** for smooth animations
- **Responsive breakpoints** for different screen sizes
- **Dot navigation** for easy browsing
- **RTL support** with automatic direction switching

### **Performance Optimizations**
- **Memoized video detection** to avoid unnecessary re-renders
- **Conditional rendering** for slider navigation
- **Efficient re-renders** with proper dependency arrays

---

## 📱 Responsive Behavior

### **Mobile (< 768px)**
- **Grid**: 1 column for all variants
- **Slider**: 1 item visible
- **Typography**: Smaller font sizes
- **Spacing**: Reduced padding and margins

### **Tablet (768px - 1024px)**
- **Grid**: 2-3 columns depending on variant
- **Slider**: 2 items visible
- **Typography**: Medium font sizes
- **Spacing**: Standard padding and margins

### **Desktop (> 1024px)**
- **Grid**: 3-4 columns depending on variant
- **Slider**: 3 items visible
- **Typography**: Full font sizes
- **Spacing**: Full padding and margins

---

## 🚀 Migration Guide

### **From WhyAlistithmarSection to FeatureSection**

**Before:**
```tsx
// 163 lines of custom component code
const WhyAlistithmarSection: React.FC = () => {
  // ... lots of custom implementation
};
```

**After:**
```tsx
// 35 lines of clean, reusable component
const WhyAlistithmarSection: React.FC = () => {
  const featureItems: FeatureItem[] = [
    // ... define items
  ];

  return (
    <FeatureSection
      title="whyAlistithmar.title"
      subtitle="whyAlistithmar.subtitle"
      items={featureItems}
      variant="three-items"
      titleHighlight="Why"
      titleHighlightColor="#F3B660"
    />
  );
};
```

### **Benefits of Migration**
- ✅ **85% code reduction** (163 → 35 lines)
- ✅ **Reusable across multiple sections**
- ✅ **Consistent styling and behavior**
- ✅ **Easy maintenance and updates**
- ✅ **Built-in responsive design**
- ✅ **Automatic bilingual support**

---

## 🧪 Testing

### **Demo Component**
Use `FeatureSectionDemo` component for testing:
```tsx
import FeatureSectionDemo from '../components/testing/FeatureSectionDemo';

// Access via /testing route, select "Feature Section"
```

### **Test Cases**
- ✅ **Variant switching** (3 items, 4 items, slider)
- ✅ **Responsive behavior** (mobile, tablet, desktop)
- ✅ **Bilingual support** (English/Arabic)
- ✅ **Media loading** (images and videos)
- ✅ **Slider navigation** (dots, swipe)
- ✅ **Title highlighting** (custom colors)

---

## 📋 Best Practices

### **Content Guidelines**
- **Keep titles short** (2-4 words)
- **Descriptions concise** (1-2 sentences)
- **Use consistent icon sizes** (40x40 recommended)
- **Provide alt text** for accessibility

### **Performance Tips**
- **Optimize images** before adding to items
- **Use WebM videos** for animations when possible
- **Limit slider items** to 6-8 for best performance
- **Test on mobile devices** for responsive behavior

### **Accessibility**
- **Always provide alt text** for icons
- **Use semantic HTML** (proper heading hierarchy)
- **Ensure keyboard navigation** works for slider
- **Test with screen readers**

---

## 🎓 Lessons Learned Today (Development Session)

### **🔧 Critical Technical Fixes**

#### **1. Import/Export Conflicts**
**Problem**: White page error with `FeatureItem` export conflict
```tsx
// ❌ WRONG: Component and interface with same name
export interface FeatureItem { ... }
const FeatureItem: React.FC = ... // This caused conflict
```
**Solution**: Renamed component to `FeatureItemComponent`
```tsx
// ✅ CORRECT: Separate names for interface and component
export interface FeatureItem { ... }
const FeatureItemComponent: React.FC = ...
```

#### **2. Line Break Rendering Issues**
**Problem**: `<0/>` appearing literally in rendered text
**Root Cause**: Not using `Trans` component for line breaks
**Solution**: Implemented proper `Trans` component usage
```tsx
// ❌ WRONG: Direct translation without Trans
<h2>{t('title')}</h2>

// ✅ CORRECT: Using Trans for line breaks
<h2>
  <Trans
    i18nKey={title}
    components={[
      <span style={{ color: titleHighlightColor }} />,
      <br />
    ]}
  />
</h2>
```

#### **3. Slider Navigation Implementation**
**Problem**: Missing arrows and incorrect pagination location
**Solution**: Studied `MutualFundSlider.tsx` and implemented proper navigation
```tsx
// ✅ CORRECT: Full slider navigation with arrows and dots
const [sliderRef, instanceRef] = useKeenSlider({
  mode: "snap",
  rtl: i18n.language === 'ar',
  slides: { perView: slidesPerView.mobile || 1, spacing: 24 },
  breakpoints: {
    '(min-width: 768px)': { slides: { perView: slidesPerView.tablet || 2, spacing: 24 } },
    '(min-width: 1024px)': { slides: { perView: slidesPerView.desktop || 3, spacing: 24 } }
  },
  slideChanged(slider) { setCurrentSlide(slider.track.details.rel); },
  created() { setLoaded(true); },
});
```

### **📁 File Organization Insights**

#### **4. Image Path Management**
**Problem**: Images not found in expected locations
**Discovery**: Images are stored in `/images/icons/` directory
**Solution**: Updated all component paths to use correct directory
```tsx
// ✅ CORRECT: Use /images/icons/ prefix
icon: '/images/icons/local1.png'
icon: '/images/icons/international1.png'
icon: '/images/icons/margin1.png'
icon: '/images/icons/managment1.png'
```

#### **5. Translation Key Structure**
**Problem**: Inconsistent translation key organization
**Solution**: Established clear naming convention
```tsx
// ✅ CORRECT: Hierarchical translation keys
'localMarket.tradingTools.title'
'internationalMarkets.globalSecurities.feature1.title'
'marginLending.marginLendingFeatures.feature2.description'
'assetManagement.investmentPhilosophy.feature3.title'
```

### **🎨 Design Pattern Learnings**

#### **6. Custom Layout Requirements**
**Problem**: Asset Management needed custom layout (icons + titles only, separate description)
**Solution**: Created dedicated `InvestmentPhilosophy` component
```tsx
// ✅ CORRECT: Custom component for specific layout needs
interface PhilosophyFeature {
  id: string;
  icon: string;
  title: string;  // No description field
  alt: string;
}

// Layout: Title + Subtitle + 3 Icons with Titles + Full-width Description
```

#### **7. Title Highlighting Patterns**
**Problem**: Inconsistent title highlighting across sections
**Solution**: Standardized highlighting approach
```tsx
// ✅ CORRECT: Consistent highlighting pattern
// English: "<0>Powerful Tools</0> for Smart Trading"
// Arabic: "<0>أدوات قوية</0> للتداول الذكي"
```

### **🚀 Development Workflow Improvements**

#### **8. Step-by-Step Approach**
**Lesson**: User prefers incremental development with verification
**Practice**: 
- Complete one milestone before moving to next
- Test each variant individually
- Verify functionality before adding complexity

#### **9. Component Testing Strategy**
**Lesson**: Dedicated demo components are valuable
**Practice**: 
- Create `FeatureSectionDemo` for interactive testing
- Include all variants with switching capability
- Test responsive behavior across devices

#### **10. Page Integration Patterns**
**Lesson**: Consistent page structure improves maintainability
**Practice**:
```tsx
// ✅ CORRECT: Standard page structure
const PageName: React.FC = () => {
  return (
    <div className="relative">
      <ReusableHero />
      <Section1 />
      <Section2 />
      <CtaSection />
    </div>
  );
};
```

### **🔍 Debugging Techniques**

#### **11. Layout Debugging**
**Lesson**: User colors divs to see boundaries and constraints
**Practice**: Use temporary background colors for layout debugging
```css
/* Temporary debugging styles */
.debug { background-color: red; }
.debug-2 { background-color: blue; }
.debug-3 { background-color: green; }
```

#### **12. Console Error Analysis**
**Lesson**: White pages often indicate import/export issues
**Practice**: 
- Check browser console for module errors
- Verify import/export naming conflicts
- Test component isolation before integration

### **📚 Documentation Best Practices**

#### **13. Comprehensive Documentation**
**Lesson**: Good documentation saves time and prevents errors
**Practice**:
- Document all props and interfaces
- Include usage examples for each variant
- Provide migration guides
- List common pitfalls and solutions

#### **14. Translation Management**
**Lesson**: Bilingual support requires careful planning
**Practice**:
- Use consistent key naming conventions
- Test both languages thoroughly
- Handle RTL layout considerations
- Plan for line break and highlighting patterns

### **🎯 Key Takeaways**

1. **Component Reusability**: The FeatureSection reduced code by 85% while improving consistency
2. **Trans Component**: Essential for proper line break and highlighting rendering
3. **File Organization**: Clear image paths and translation key structures prevent errors
4. **Custom Components**: Sometimes specific layouts need dedicated components
5. **Testing Strategy**: Interactive demos help catch issues early
6. **Step-by-Step Development**: Incremental approach with verification prevents major issues
7. **Documentation**: Comprehensive docs prevent future confusion and errors

---

**🎉 Result:** The FeatureSection component provides a powerful, flexible, and reusable solution for displaying feature items across your ICAP website with consistent styling, responsive design, and full bilingual support!
