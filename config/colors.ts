/**
 * Teecherz Brand Color Palette
 * 
 * To extract colors from teecherz.com:
 * 1. Use browser DevTools (F12) → Elements → Inspect
 * 2. Use a color picker extension (ColorZilla, Eye Dropper)
 * 3. Or provide the colors you see on the website
 * 
 * Common areas to check:
 * - Logo colors
 * - Navigation bar background/text
 * - Primary buttons/CTAs
 * - Category card backgrounds
 * - Footer background
 * - Links and hover states
 */

export const teecherzColors = {
  // Primary Brand Colors - Teecherz Red from Logo
  primary: {
    main: "#DC2626", // Vibrant red from Teecherz logo
    dark: "#B91C1C", // Darker red for hover states
    light: "#EF4444", // Lighter red for backgrounds
    glow: "#FCA5A5", // Subtle red glow effect
  },
  
  // Secondary Colors
  secondary: {
    main: "#dfc394", // Placeholder - update with actual secondary color
    dark: "#b89a6f", // Placeholder
    light: "#f5e4c4", // Placeholder
  },
  
  // Neutral Colors
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  
  // Text Colors
  text: {
    primary: "#1f2937", // Dark text
    secondary: "#6b7280", // Muted text
    light: "#9ca3af", // Light text
    inverse: "#ffffff", // White text for dark backgrounds
  },
  
  // Background Colors
  background: {
    default: "#ffffff",
    paper: "#f9fafb",
    dark: "#1f2937",
  },
  
  // Accent Colors (for category cards, highlights, etc.)
  accent: {
    blue: "#3b82f6", // For category cards
    orange: "#f97316", // For category cards
    gray: "#6b7280", // For category cards
    green: "#10b981", // Success states
    red: "#ef4444", // Error states
  },
  
  // Border Colors
  border: {
    default: "#e5e7eb",
    light: "#f3f4f6",
    dark: "#d1d5db",
  },
};

/**
 * Tailwind Color Configuration
 * These will be used in Tailwind classes
 */
export const tailwindColors = {
  // Map to Tailwind color system
  primary: teecherzColors.primary.main,
  secondary: teecherzColors.secondary.main,
  accent: teecherzColors.accent,
  neutral: teecherzColors.neutral,
};
