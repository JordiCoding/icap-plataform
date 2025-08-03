# Line Breaks and Arabic Typography Implementation Guide

## 🎯 Overview
This document explains how line breaks (`<br>`) are handled in translations and the Arabic typography solutions implemented in the ICAP website. This guide helps future AI assistants understand the current patterns and maintain consistency.

---

## 🚫 The Problem: Literal `<br>` Tags Don't Work

### **What Doesn't Work:**
```json
// ❌ Translation files with literal HTML
{
  "portfolio": {
    "description": "Invest, trade and grow your wealth<br/>seamlessly with the ICAP app."
  }
}
```

```tsx
// ❌ Component rendering as plain text
<p>{t('portfolio.description')}</p>
// Result: "Invest, trade and grow your wealth<br/>seamlessly with the ICAP app."
```

**Issue:** The `<br/>` appears as literal text instead of creating line breaks.

---

## ✅ The Solution: Trans Component with Numbered Components

### **Pattern Implementation:**

**1. Translation Files Structure:**
```json
{
  "portfolio": {
    "description": "Invest, trade and grow your wealth<0/>seamlessly with the ICAP app."
  },
  "marginLending": {
    "title": "Increase Your Buying<1/>Power with<1/><0>Margin Lending</0>"
  }
}
```

**2. Component Implementation:**
```tsx
import { Trans } from 'react-i18next';

// Simple line break
<Trans
  i18nKey="portfolio.description"
  components={[<br />]}  // <0/> maps to <br />
/>

// Multiple components (styling + line breaks)
<Trans
  i18nKey="marginLending.title"
  components={[
    <span className="text-[#A44F17]" />,  // <0>text</0> = colored
    <br />                                // <1/> = line break
  ]}
/>
```

### **How It Works:**
- `<0/>` in translation → maps to `components[0]` → `<br />`
- `<0>text</0>` in translation → wraps text with `components[0]` → `<span className="text-[#A44F17]">text</span>`
- `<1/>` in translation → maps to `components[1]` → `<br />`

---

## 🏗️ Cross-Document Dependencies

### **Files Involved:**

**1. Translation Files:**
- `src/locales/en.json` - English translations with `<0/>`, `<1/>` markers
- `src/locales/ar.json` - Arabic translations with same markers

**2. Component Files:**
- `src/components/home/PortfolioSection.tsx` - Uses simple `<br />` pattern
- `src/components/home/MarginLendingNewSection.tsx` - Uses styling + `<br />` pattern

**3. Required Imports:**
```tsx
import { useTranslation, Trans } from 'react-i18next';
```

### **Implementation Pattern:**
```tsx
const Component = () => {
  const { t } = useTranslation();  // For simple translations
  
  return (
    <Trans
      i18nKey="section.key"
      components={[/* Array of React elements */]}
    />
  );
};
```

---

## 📱 Arabic Typography Solution

### **The Problem:**
Arabic text has different character heights and often overlaps with default line heights, especially in larger font sizes.

### **The Solution:**
```tsx
const Component = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  return (
    <h2 className={`
      text-4xl lg:text-5xl 
      ${isArabic 
        ? 'leading-relaxed lg:leading-relaxed'  // More space for Arabic
        : 'leading-tight lg:leading-tight'      // Tight for English
      }
    `}>
      {/* Title content */}
    </h2>
  );
};
```

### **Line Height Values:**
- **Arabic:** `leading-relaxed` = 1.625 (62.5% more space)
- **English:** `leading-tight` = 1.25 (clean, tight appearance)

---

## 📋 Implementation Examples

### **Example 1: Simple Line Break (PortfolioSection)**
```tsx
// Component
<p className="text-lg text-gray-600">
  <Trans
    i18nKey="portfolio.description"
    components={[<br />]}
  />
</p>

// English translation
"description": "Invest, trade and grow your wealth<0/>seamlessly with the ICAP app."

// Arabic translation  
"description": "اشترك في صناديق الاستثمار المشتركة، وتداول<0/>الأسواق المحلية والدولية"
```

### **Example 2: Styled Text + Line Breaks (MarginLendingNewSection)**
```tsx
// Component
<h2 className={`
  text-4xl lg:text-5xl text-icap-primary
  ${isArabic ? 'leading-relaxed lg:leading-relaxed' : 'leading-tight lg:leading-tight'}
`}>
  <Trans
    i18nKey="marginLending.title"
    components={[
      <span className="text-[#A44F17]" />,  // Index 0: Colored text
      <br />                                // Index 1: Line break
    ]}
  />
</h2>

// English translation
"title": "Increase Your Buying<1/>Power with<1/><0>Margin Lending</0>"

// Arabic translation
"title": "قم بتوسيع إمكانيات استثمارك<1/><0>من خلال الاقتراض بالهامش</0>"
```

---

## 🔧 Best Practices

### **1. Consistent Component Mapping:**
- Always use `<0/>` for the first component
- Use `<0>text</0>` for wrapped/styled text
- Use `<1/>`, `<2/>` for additional components

### **2. Typography Classes:**
```tsx
// Always include language-aware line height
const isArabic = i18n.language === 'ar';
const lineHeight = isArabic ? 'leading-relaxed' : 'leading-tight';
```

### **3. Import Requirements:**
```tsx
import { useTranslation, Trans } from 'react-i18next';
// Trans is required for component mapping
// useTranslation provides i18n for language detection
```

---

## 🚀 Quick Reference

### **For Simple Line Breaks:**
1. Update translation: `"text before<0/>text after"`
2. Use Trans: `<Trans i18nKey="key" components={[<br />]} />`

### **For Styled Text + Line Breaks:**
1. Update translation: `"text<1/><0>styled text</0>"`
2. Use Trans with multiple components:
```tsx
<Trans 
  i18nKey="key" 
  components={[
    <span className="text-[#A44F17]" />,
    <br />
  ]} 
/>
```

### **For Arabic Typography:**
1. Detect language: `const isArabic = i18n.language === 'ar'`
2. Apply conditional line height: `${isArabic ? 'leading-relaxed' : 'leading-tight'}`

---

## 🎯 Files Updated in Implementation

- ✅ `src/components/home/PortfolioSection.tsx` - Added Trans component for line breaks
- ✅ `src/components/home/MarginLendingNewSection.tsx` - Added Arabic line height + color update
- ✅ `src/locales/en.json` - Updated portfolio description with `<0/>` pattern
- ✅ `src/locales/ar.json` - Updated portfolio + margin lending with `<0/>` pattern

---

**Remember:** This pattern ensures consistent, maintainable line breaks across both languages while solving Arabic typography issues. Always test both English and Arabic versions when implementing!