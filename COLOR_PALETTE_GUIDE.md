# Teecherz Color Palette Extraction Guide

## How to Extract Colors from teecherz.com

### Method 1: Browser DevTools (Recommended)

1. **Open teecherz.com in Chrome/Firefox**
2. **Press F12** to open DevTools
3. **Click the "Elements" tab** (or "Inspector" in Firefox)
4. **Click the color picker icon** (eyedropper tool) in the toolbar
5. **Hover over elements** on the page to see their colors
6. **Click to select** and copy the HEX code

### Method 2: Browser Extension

**Chrome Extensions:**
- [ColorZilla](https://www.colorzilla.com/) - Color picker tool
- [Eye Dropper](https://eyedropper.org/) - Simple color picker

**How to use:**
1. Install the extension
2. Click the extension icon
3. Hover over any color on teecherz.com
4. Copy the HEX code

### Method 3: Online Tools

1. Take a screenshot of teecherz.com
2. Upload to [Coolors.co](https://coolors.co/image-picker) or [Palettz](https://www.palettz.co/)
3. Extract the color palette

## Colors to Extract

Please provide the HEX codes for:

### Primary Brand Colors
- [ ] **Primary Color** (main brand color - usually in logo, buttons, CTAs)
  - HEX: `#______`
  - Where found: ________________

- [ ] **Primary Dark** (hover states, darker variants)
  - HEX: `#______`

- [ ] **Primary Light** (light backgrounds, subtle accents)
  - HEX: `#______`

### Secondary Colors
- [ ] **Secondary Color** (accent color, complementary to primary)
  - HEX: `#______`
  - Where found: ________________

### Navigation & Header
- [ ] **Header Background**
  - HEX: `#______`

- [ ] **Navigation Text Color**
  - HEX: `#______`

- [ ] **Navigation Hover Color**
  - HEX: `#______`

### Category Cards
- [ ] **Category Card 1 Background** (Dining Room)
  - HEX: `#______`

- [ ] **Category Card 2 Background** (Living Room)
  - HEX: `#______`

- [ ] **Category Card 3 Background** (Bedroom)
  - HEX: `#______`

- [ ] **Category Card 4 Background** (Office)
  - HEX: `#______`

### Text Colors
- [ ] **Primary Text** (headings, main content)
  - HEX: `#______`

- [ ] **Secondary Text** (muted text, descriptions)
  - HEX: `#______`

### Backgrounds
- [ ] **Page Background**
  - HEX: `#______`

- [ ] **Section Background** (if different)
  - HEX: `#______`

- [ ] **Footer Background**
  - HEX: `#______`

- [ ] **Footer Text Color**
  - HEX: `#______`

### Buttons & CTAs
- [ ] **Primary Button Background**
  - HEX: `#______`

- [ ] **Primary Button Text**
  - HEX: `#______`

- [ ] **Primary Button Hover**
  - HEX: `#______`

- [ ] **Secondary Button Background** (if different)
  - HEX: `#______`

### Links
- [ ] **Link Color**
  - HEX: `#______`

- [ ] **Link Hover Color**
  - HEX: `#______`

## Quick Extraction Checklist

**Key Areas to Check:**
1. ✅ Logo colors
2. ✅ Navigation bar
3. ✅ Category showcase cards
4. ✅ Buttons and CTAs
5. ✅ Footer
6. ✅ Product cards
7. ✅ Text colors (headings vs body)
8. ✅ Background colors

## Once You Have the Colors

1. Update `config/colors.ts` with the actual HEX codes
2. Update `app/globals.css` with CSS variables
3. Colors will automatically be applied throughout the site

## Alternative: Provide Screenshot

If extracting colors is difficult, you can:
1. Take a screenshot of the teecherz.com homepage
2. Share it with me
3. I can analyze the colors from the image

---

**Note:** If you're not sure about some colors, that's okay! We can start with the most important ones (primary, secondary, text, backgrounds) and refine as we go.
