# WebM Video Implementation Guide

## 📋 Overview

This document captures all learnings, problems, and solutions from implementing `.webm` video support in React components, specifically for the ICAP project.

## 🎯 Problem Statement

**Initial Issue**: `.webm` video files were not displaying in React components, showing broken image placeholders instead.

**Root Cause**: React components were using `<img>` tags to render assets, but `.webm` files are videos that require `<video>` tags.

## 🔍 Problems We Faced & Solutions

### 1. **Problem: Video Not Detected as Video**
**Issue**: Hygraph URLs don't always have `.webm` extensions, making detection difficult.

**Solution**: Multi-layered detection approach:
```typescript
const isWebm = useMemo(() => {
  if (!iconUrl) return false;
  
  // 1. Check mimeType first (most reliable)
  if (icon?.mimeType === 'video/webm' || iconEn?.mimeType === 'video/webm') {
    return true;
  }
  
  // 2. Check if URL contains webm (for Hygraph URLs without extension)
  if (iconUrl.toLowerCase().includes('webm')) {
    return true;
  }
  
  // 3. Check file extension
  if (iconUrl.toLowerCase().endsWith('.webm')) {
    return true;
  }
  
  return false;
}, [iconUrl, icon?.mimeType, iconEn?.mimeType]);
```

### 2. **Problem: Video Not Autoplaying**
**Issue**: Even with `autoPlay` attribute, videos remained paused due to browser autoplay policies.

**Solution**: Programmatic playback using `useRef` and `useEffect`:
```typescript
const videoRef = useRef<HTMLVideoElement | null>(null);

useEffect(() => {
  if (isWebm && videoRef.current) {
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('✅ Video started playing for:', title);
        })
        .catch((error) => {
          console.warn('⚠️ Video play prevented for:', title, error);
        });
    }
  }
}, [iconUrl, isWebm, title]);
```

### 3. **Problem: TypeScript Errors**
**Issue**: `mimeType` property didn't exist in `IconAsset` interface.

**Solution**: Updated type definitions:
```typescript
export interface IconAsset {
  url: string;
  mimeType?: string; // Added support for MIME type detection
}
```

### 4. **Problem: GraphQL Query Missing mimeType**
**Issue**: GraphQL queries weren't fetching `mimeType` from Hygraph.

**Solution**: Updated GraphQL queries:
```graphql
icon {
  url
  mimeType  // Added to fetch MIME type from Hygraph
}
iconEn: icon(locales: en) {
  url
  mimeType  // Added to fetch MIME type from Hygraph
}
```

## 🛠️ Complete Implementation

### Required Imports
```typescript
import { useMemo, useRef, useEffect } from 'react';
```

### Video Detection Logic
```typescript
const isWebm = useMemo(() => {
  if (!iconUrl) return false;
  
  // Check mimeType first (most reliable)
  if (icon?.mimeType === 'video/webm' || iconEn?.mimeType === 'video/webm') {
    return true;
  }
  
  // Check if URL contains webm (for Hygraph URLs that might not have extension)
  if (iconUrl.toLowerCase().includes('webm')) {
    return true;
  }
  
  // Check file extension
  if (iconUrl.toLowerCase().endsWith('.webm')) {
    return true;
  }
  
  return false;
}, [iconUrl, icon?.mimeType, iconEn?.mimeType]);
```

### Video Element Implementation
```typescript
const videoRef = useRef<HTMLVideoElement | null>(null);

// Programmatically start video playback
useEffect(() => {
  if (isWebm && videoRef.current) {
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('✅ Video started playing for:', title);
        })
        .catch((error) => {
          console.warn('⚠️ Video play prevented for:', title, error);
        });
    }
  }
}, [iconUrl, isWebm, title]);

// Conditional rendering
{iconUrl ? (
  isWebm ? (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      className="w-32 h-32 object-contain"
      onError={(e) => {
        console.error('Video failed to load:', iconUrl);
      }}
      onLoadStart={() => {
        console.log('Video loading started:', iconUrl);
      }}
      onCanPlay={() => {
        console.log('Video can play:', iconUrl);
      }}
    >
      <source src={iconUrl} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img 
      src={iconUrl} 
      alt={title} 
      className="w-32 h-32 object-contain"
      onError={(e) => {
        console.error('Image failed to load:', iconUrl);
      }}
      onLoad={() => {
        console.log('Image loaded successfully:', iconUrl);
      }}
    />
  )
) : (
  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
    <span className="text-gray-500 text-xs">No Icon</span>
  </div>
)}
```

## 🔧 Key Attributes Explained

### Video Attributes
- **`autoPlay`**: Attempts to start playback automatically
- **`loop`**: Video will restart when it reaches the end
- **`muted`**: Required for autoplay in most browsers
- **`playsInline`**: Prevents fullscreen on mobile devices
- **`controls={false}`**: Hides browser video controls
- **`ref={videoRef}`**: Reference for programmatic control

### Error Handling
- **`onError`**: Logs when video fails to load
- **`onLoadStart`**: Logs when video starts loading
- **`onCanPlay`**: Logs when video is ready to play

## 🧪 Debugging Tips

### Console Logs to Look For
```javascript
// Successful video detection
FundCard Debug: {
  title: "ICAP Conservative Fund",
  iconUrl: "https://ap-south-1.graphassets.com/...",
  isWebm: true,
  iconMimeType: "video/webm",
  iconEnMimeType: undefined
}

// Successful video playback
✅ Video started playing for: ICAP Conservative Fund
Video loading started: [URL]
Video can play: [URL]
```

### Common Error Messages
```javascript
// Video play prevented (browser autoplay policy)
⚠️ Video play prevented for: [Title] NotAllowedError: The play() request was interrupted

// Video failed to load
Video failed to load: [URL]
```

## 🚀 Best Practices

### 1. **Always Use Multiple Detection Methods**
- MIME type (most reliable)
- URL pattern matching
- File extension checking

### 2. **Implement Programmatic Playback**
- Browser autoplay policies are strict
- Use `useRef` and `useEffect` for reliable playback
- Handle play promises properly

### 3. **Add Comprehensive Error Handling**
- Log all video events for debugging
- Provide fallbacks for failed loads
- Handle browser compatibility issues

### 4. **Use Proper Video Attributes**
- `muted + playsInline + autoPlay` combination is required
- `controls={false}` for clean UI
- `loop` for continuous animation

### 5. **Test Across Browsers**
- Different browsers have different autoplay policies
- Mobile browsers are more restrictive
- Test with various video formats

## 📁 File Structure

```
src/
├── components/
│   └── mutual-funds/
│       └── MutualFundSlider/
│           ├── FundCard.tsx          # Main video implementation
│           └── types.ts              # Updated with mimeType
├── utils/
│   └── queries.ts                   # Updated GraphQL queries
└── hooks/
    └── useFundSlider.ts             # Fetches video data
```

## 🔗 Related Files

- **`FundCard.tsx`**: Main video implementation
- **`types.ts`**: TypeScript interfaces with mimeType support
- **`queries.ts`**: GraphQL queries with mimeType fetching
- **`Hero.tsx`**: Background video implementation

## 🎯 Quick Checklist for Future Implementation

- [ ] Add `mimeType?: string` to asset interfaces
- [ ] Update GraphQL queries to fetch `mimeType`
- [ ] Implement multi-layered video detection
- [ ] Use `useRef` and `useEffect` for programmatic playback
- [ ] Add comprehensive error handling and logging
- [ ] Test autoplay across different browsers
- [ ] Ensure proper video attributes (`muted`, `playsInline`, `autoPlay`)

## 📚 Resources

- [MDN Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Browser Autoplay Policies](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide)
- [WebM Format](https://en.wikipedia.org/wiki/WebM)

---

**Last Updated**: July 30, 2025  
**Project**: ICAP Platform  
**Status**: ✅ Successfully implemented and tested 