# Logo Setup Instructions

## Adding the Teecherz Logo

The logo component is ready to use! Follow these steps:

### Step 1: Add Logo File

1. **Save your logo file** to the `public` folder
2. **Name it** `logo.png` (or `logo.svg` if it's an SVG)
3. **Recommended formats:**
   - PNG with transparent background (preferred)
   - SVG (scalable, best quality)
   - JPG (if PNG/SVG not available)

### Step 2: File Location

```
teecherz-rebuild/
  └── public/
      └── logo.png  ← Place your logo here
```

### Step 3: Logo Specifications

**Recommended logo dimensions:**
- Width: 200-400px
- Height: Auto (maintain aspect ratio)
- Format: PNG with transparent background
- File size: < 100KB (optimized)

### Step 4: Verify

Once the logo is added:
1. The logo will automatically appear in the Header
2. It will also appear in the Footer (with text)
3. If the file doesn't exist, a red "T" placeholder will show

## Current Logo Implementation

The logo is used in:
- ✅ **Header** - Logo only (no text)
- ✅ **Footer** - Logo with "Teecherz Home & Office" text

## Logo Component Features

- **Automatic fallback**: Shows a red "T" if logo file is missing
- **Responsive**: Scales properly on all devices
- **Optimized**: Uses Next.js Image component for performance
- **Accessible**: Includes proper alt text

## Color Integration

The Teecherz red color (`#DC2626`) from your logo is now used throughout the site:
- Primary buttons
- Hover states
- Category dividers
- Links and accents
- Footer elements

---

**Note**: Once you add the logo file to `public/logo.png`, it will automatically appear on the site!
