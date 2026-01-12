# General Sans Font Setup

## Overview
The website is configured to use **General Sans**, a premium sans-serif font designed by Frode Helland. This font provides a clean, modern, and premium aesthetic perfect for furniture and home decor websites.

## Font Files Status

✅ **Font files are already in place!**

The General Sans font files are located in `/public/fonts/general-sans/` directory.

### Current Font Files:
- `GeneralSans-Regular.otf` (weight: 400, normal)
- `GeneralSans-Italic.otf` (weight: 400, italic)
- `GeneralSans-Medium.otf` (weight: 500, normal)
- `GeneralSans-MediumItalic.otf` (weight: 500, italic)
- `GeneralSans-Semibold.otf` (weight: 600, normal)
- `GeneralSans-SemiboldItalic.otf` (weight: 600, italic)
- `GeneralSans-Bold.otf` (weight: 700, normal)
- `GeneralSans-BoldItalic.otf` (weight: 700, italic)

### Additional Variants Available:
- `GeneralSans-Extralight.otf` (weight: 200)
- `GeneralSans-ExtralightItalic.otf` (weight: 200, italic)
- `GeneralSans-Light.otf` (weight: 300)
- `GeneralSans-LightItalic.otf` (weight: 300, italic)

## Directory Structure

```
teecherz-rebuild/
  └── public/
      └── fonts/
          └── general-sans/
              ├── GeneralSans-Regular.otf
              ├── GeneralSans-Italic.otf
              ├── GeneralSans-Medium.otf
              ├── GeneralSans-MediumItalic.otf
              ├── GeneralSans-Semibold.otf
              ├── GeneralSans-SemiboldItalic.otf
              ├── GeneralSans-Bold.otf
              ├── GeneralSans-BoldItalic.otf
              └── ... (additional variants)
```

## Font Configuration

✅ **Fonts are configured and ready to use!**

The website is now using General Sans font with the following configuration:

- **Format**: OpenType (OTF)
- **Path**: `/fonts/general-sans/`
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Styles**: Normal and Italic variants for all weights
- **Fallback**: Inter font (via Next.js) if General Sans fails to load

### Performance Optimization

The fonts use `font-display: swap` which means:
- Text is immediately visible with fallback font
- General Sans loads in the background
- Smooth transition when General Sans is ready
- No layout shift or invisible text

## Font Weights Used

- **400 (Regular)**: Body text, paragraphs
- **500 (Medium)**: Product names, navigation links
- **600 (Semibold)**: Section subtitles, category subtitles, buttons
- **700 (Bold)**: Headings, section titles, category titles, hero text

## Fallback Fonts

If General Sans files are not found, the website will automatically fall back to:
1. Inter (via Next.js font optimization)
2. System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc.)

## Performance

- Font files use `font-display: swap` for optimal loading
- WOFF2 format is preferred (smaller file size)
- WOFF format is provided as fallback for older browsers
- Fonts are loaded only when needed

## License

**Important:** Ensure you have the proper license for General Sans:
- Personal use: Usually free
- Commercial use: May require a license
- Check the font license before using in production

---

**Note:** The website is already configured to use General Sans. Simply add the font files to `/public/fonts/` and the font will automatically be applied throughout the site.
