# Card Component System Guide

## 🎨 Overview
This guide documents the comprehensive card component system for the ICAP website, including glassmorphism styling, reusable components, and the GridCard system.

---

## 📋 Available Card Systems

### **1. CSS Classes (Legacy)**
Reusable glassmorphism card CSS classes for consistent styling.

### **2. GridCard Component (Current)**
Modern, flexible card component with props-based content injection.

### **3. FeatureCard Component (Legacy)**
Reusable component for feature cards with glassmorphism styling.

---

## 🎯 GridCard Component (Recommended)

### **Props Interface:**
```tsx
interface GridCardProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  align?: 'top' | 'center' | 'bottom';
  height?: string;
  className?: string;
  variant?: 'glassmorphism' | 'flat';
  backgroundImage?: string;
}
```

### **Usage Examples:**

**Glassmorphism Card with Background Image:**
```tsx
<GridCard
  title="gridCard.mobileApp.title"
  subtitle="gridCard.mobileApp.subtitle"
  buttonText="gridCard.mobileApp.button"
  variant="glassmorphism"
  backgroundImage="/images/mobileapplication.png"
  align="bottom"
  height="h-[500px]"
  className="rounded-lg p-6"
/>
```

**Flat Card:**
```tsx
<GridCard
  title="gridCard.webPlatform.title"
  subtitle="gridCard.webPlatform.subtitle"
  buttonText="gridCard.webPlatform.button"
  variant="flat"
  align="center"
  height="h-[240px]"
  className="rounded-lg"
/>
```

### **Key Features:**
- **i18n Support:** Uses `Trans` component for line breaks
- **Alignment Control:** `top`, `center`, `bottom` alignment
- **Variant System:** `glassmorphism` and `flat` styles
- **Background Images:** Layered behind content with proper z-index
- **Responsive:** Height and width control via props
- **Button Integration:** Uses reusable `Button` component

---

## 🎨 CSS Classes (Legacy System)

### **`.glassmorphism-card`**
Standard glassmorphism card without background images.

**CSS Properties:**
```css
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.30);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 24px;
}

.glassmorphism-card .card-title {
  color: white;
}

.glassmorphism-card .card-subtitle {
  color: rgba(255, 255, 255, 0.8);
}
```

### **`.flat-card`**
Flat card with light background and dark text.

**CSS Properties:**
```css
.flat-card {
  background: #FBF7F1;
  border-radius: 32px;
  padding: 24px;
}

.flat-card .card-title {
  color: #A44F17 !important;
}

.flat-card .card-subtitle {
  color: #333333;
}

.flat-card .card-button {
  color: #A44F17;
}
```

---

## 🎯 Typography System

### **Card Title:**
```css
.card-title {
  font-family: "Chap", sans-serif;
  font-size: 28px;
  font-weight: 300; /* Light */
}
```

### **Card Subtitle:**
```css
.card-subtitle {
  font-family: "Jokker", sans-serif;
  font-size: 16px;
  font-weight: 400; /* Regular */
}
```

### **Button Spacing:**
- **Current:** `mt-2` (8px gap between text and button)
- **Previous:** `mt-4` (16px gap)

---

## 🚀 Implementation Examples

### **SlidePlatformAccess.tsx (Current Implementation):**
```tsx
const platformCards = [
  <GridCard
    key="mobile-app"
    title="gridCard.mobileApp.title"
    subtitle="gridCard.mobileApp.subtitle"
    buttonText="gridCard.mobileApp.button"
    variant="glassmorphism"
    backgroundImage="/images/mobileapplication.png"
    align="bottom"
    height="h-[500px]"
    className="rounded-lg p-6"
  />,
  <GridCard
    key="web-platform"
    title="gridCard.webPlatform.title"
    subtitle="gridCard.webPlatform.subtitle"
    buttonText="gridCard.webPlatform.button"
    variant="glassmorphism"
    align="center"
    height="h-[240px]"
    className="rounded-lg"
  />,
  // ... more cards
];
```

### **GridLayout Integration:**
```tsx
<GridLayout
  type="platform-access"
  variant="production"
  cards={platformCards}
  showControls={false}
  gap={24}
/>
```

---

## 🔧 Benefits

### **1. Component-Based Architecture**
- Props-based content injection
- Type-safe with TypeScript
- Easy to maintain and extend

### **2. i18n Integration**
- Native support for translations
- Line break handling with `Trans` component
- RTL support built-in

### **3. Flexible Styling**
- Multiple variants (glassmorphism, flat)
- Background image support
- Alignment control
- Responsive design

### **4. Reusability**
- Can be used across different layouts
- Consistent styling and behavior
- Easy to test and validate

---

## 📁 Files Structure

### **Components:**
- ✅ `src/components/ui/GridCard.tsx` - Main card component
- ✅ `src/components/ui/GridLayout.tsx` - Layout system
- ✅ `src/components/ui/Button.tsx` - Button component
- ✅ `src/components/brokerage/SlidePlatformAccess.tsx` - Implementation

### **Styling:**
- ✅ `src/index.css` - Card styles and typography
- ✅ `src/assets/fonts/fonts.css` - Font definitions

### **Translations:**
- ✅ `src/locales/en.json` - English translations
- ✅ `src/locales/ar.json` - Arabic translations

---

## 🚀 Future Usage

### **For New Cards:**
```tsx
// Simple card
<GridCard
  title="myCard.title"
  subtitle="myCard.subtitle"
  buttonText="myCard.button"
  variant="glassmorphism"
  align="center"
/>

// Card with background
<GridCard
  title="myCard.title"
  subtitle="myCard.subtitle"
  buttonText="myCard.button"
  variant="glassmorphism"
  backgroundImage="/images/my-image.png"
  align="bottom"
  height="h-[400px]"
/>
```

### **Customization:**
To modify card styling, update the CSS classes in `src/index.css`:

```css
.glassmorphism-card {
  background: rgba(255, 255, 255, 0.15); /* More opacity */
  backdrop-filter: blur(15px); /* More blur */
}

.flat-card {
  background: #F0F0F0; /* Different background */
}
```

---

**Remember:** Use the GridCard component for new implementations, as it provides the most flexibility and maintainability! 🎨 