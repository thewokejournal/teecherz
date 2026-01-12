# Teecherz Marketing Website Rebuild - Detailed Step-by-Step Execution Plan

## Overview
Rebuild www.teecherz.com using Next.js + Tailwind CSS, inspired by the Lanima Webflow template's visual structure, spacing, and layout hierarchy. This plan provides actionable steps based on analysis of both the Lanima reference and current project state.

---

## Phase 1: Design System Analysis & Setup

### Step 1.1: Analyze Lanima Design Patterns

**From Lanima HTML Analysis:**

#### Typography Hierarchy:
- **Hero Heading (`hero-heading-v1`)**: Large, bold, high contrast
- **Section Headings (`h2`)**: Medium-large with uppercase subtitles
- **Sub-titles (`sub-title`)**: Small, uppercase, letter-spaced (e.g., "RECENTLY RELEASED")
- **Body Text**: Readable, appropriate line-height
- **Product Names**: Medium weight, clear hierarchy

#### Spacing System:
- **Container**: `container w-container` - max-width with padding
- **Section Padding**: Generous vertical spacing (py-16 to py-24 equivalent)
- **Grid Gaps**: Consistent spacing between grid items
- **Component Internal Spacing**: Balanced padding within cards/components

#### Color Patterns:
- **Category Cards**: Blue, Orange, Grey backgrounds with hover effects
- **Text Colors**: High contrast headings, muted body text
- **Buttons**: Primary (filled) and Secondary (outlined) variants
- **Dividers**: Subtle lines for visual separation

#### Component Patterns:
1. **Section Headers**: Subtitle (uppercase) + Title + Divider line
2. **Category Cards**: Colored background, image, title, subtitle, animated divider on hover
3. **Product Cards**: Image, name, price (with optional original price)
4. **Feature Blocks**: Icon + heading + description in 4-column grid
5. **CTA Section**: Image + content side-by-side layout
6. **Blog Cards**: Image, date, title, "Read More" with arrow icon

### Step 1.2: Update Design System in `globals.css`

**Tasks:**
- [ ] Define consistent typography scale matching Lanima
- [ ] Set up color variables (if needed beyond Tailwind defaults)
- [ ] Ensure container widths match Lanima patterns
- [ ] Define spacing scale (use Tailwind defaults: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128)

**Implementation:**
```css
/* Add to globals.css if needed */
/* Typography scale should use Tailwind classes */
/* Container already uses max-w-7xl which is good */
```

---

## Phase 2: Base UI Components Refinement

### Step 2.1: Review & Enhance `Container` Component
**Current State:** ✅ Good - uses `max-w-7xl` with responsive padding
**Action:** Verify it matches Lanima's container width (likely 1200-1280px max)

### Step 2.2: Review & Enhance `Button` Component
**Current State:** ✅ Has primary/secondary variants
**Action:** 
- [ ] Verify button styles match Lanima (rounded-full, appropriate padding)
- [ ] Ensure hover states are smooth
- [ ] Check text sizing matches Lanima

### Step 2.3: Create/Enhance `SectionHeader` Component
**Current State:** ✅ Exists
**Action:**
- [ ] Verify it matches Lanima pattern:
  - Uppercase subtitle (small, letter-spaced)
  - Large title (h2)
  - Divider line below title
- [ ] Ensure spacing matches Lanima

**Lanima Pattern:**
```html
<div class="section-heading-block">
  <p class="sub-title">RECENTLY RELEASED</p>
  <h2>Latest Collection</h2>
  <div class="divider-title"></div>
</div>
```

---

## Phase 3: Layout Components

### Step 3.1: Enhance `Header` Component
**Current State:** Basic header with navigation
**Actions:**
- [ ] Match Lanima's header style:
  - Sticky positioning
  - Clean navigation layout
  - Mobile menu (hamburger)
  - Search icon (optional, if needed)
- [ ] Ensure proper spacing and typography
- [ ] Add mobile menu functionality (if not present)

**Lanima Pattern:**
- Logo on left
- Navigation links in center/right
- Search and cart icons on right
- Hamburger menu for mobile

### Step 3.2: Enhance `Footer` Component
**Current State:** ✅ Good structure with newsletter, links, social
**Actions:**
- [ ] Verify layout matches Lanima's 4-column footer
- [ ] Ensure newsletter form styling matches
- [ ] Check social icons placement
- [ ] Verify footer bottom section (copyright, links)

**Lanima Pattern:**
- Top: Logo + Social Icons
- Center: 4 columns (Newsletter, Store, Company, Service)
- Bottom: Copyright + Links with dividers

---

## Phase 4: Section Components (Build/Refine)

### Step 4.1: Hero Section
**Current State:** ✅ Exists with headline, subtext, buttons
**Actions:**
- [ ] Match Lanima's hero spacing and typography
- [ ] Verify button placement and styling
- [ ] Ensure responsive behavior matches
- [ ] Check text alignment (center vs left)

**Lanima Pattern:**
- Large headline
- Subtext paragraph
- Single CTA button (secondary style)
- Centered or left-aligned content

### Step 4.2: Category Showcase Section
**Current State:** ✅ Exists with 3 categories
**Actions:**
- [ ] Match Lanima's category card design:
  - Colored backgrounds (blue, orange, grey)
  - Image on right side
  - Subtitle (uppercase) + Title
  - Animated divider that expands on hover
- [ ] Ensure hover effects match Lanima
- [ ] Verify responsive grid (3 columns → 1 column on mobile)

**Lanima Pattern:**
```html
<div class="category-content blue">
  <div class="category-text">
    <div class="category-small-title">MODERN CHAIR</div>
    <p class="category-name">Zenith Chair</p>
    <div class="divider"></div> <!-- Expands on hover -->
  </div>
  <div class="category-image">
    <img src="..." />
  </div>
</div>
```

**Key Details:**
- Divider starts small (w-12) and expands to full width on hover
- Image positioned on right
- Colored background with hover state change

### Step 4.3: Product Grid Section
**Current State:** ✅ Exists with products grid
**Actions:**
- [ ] Match Lanima's product card design:
  - Image with hover scale effect
  - Product name
  - Price (with optional original price strikethrough)
- [ ] Verify grid layout (4 columns → 2 → 1)
- [ ] Ensure "View All" button matches Lanima style
- [ ] Check section header matches Lanima pattern

**Lanima Pattern:**
- Section header with subtitle + title + divider
- 4-column grid (responsive)
- Product cards with image, name, price
- "View All Products" button centered below

### Step 4.4: Features Section
**Current State:** ✅ Exists with 4 features
**Actions:**
- [ ] Match Lanima's feature block design:
  - Icon (SVG/image, not emoji)
  - Heading
  - Small description text
- [ ] Verify 4-column grid layout
- [ ] Ensure proper spacing and alignment

**Lanima Pattern:**
- Icon in circular/rounded container
- Heading below icon
- Small descriptive text
- Centered alignment

### Step 4.5: CTA Section
**Current State:** ✅ Exists
**Actions:**
- [ ] Match Lanima's CTA layout:
  - Image on left (or right)
  - Content on opposite side
  - Headline, paragraph, button
- [ ] Verify responsive stacking (image above content on mobile)
- [ ] Ensure proper spacing

**Lanima Pattern:**
- Image takes ~40-45% width
- Content takes ~55-60% width
- Stacked on mobile

### Step 4.6: Blog Section (New Component)
**Current State:** ❌ Not in current page
**Actions:**
- [ ] Create `BlogSection` component
- [ ] Match Lanima's blog card design:
  - Large image
  - Date (small, above title)
  - Title (heading)
  - "Read More" link with arrow icon
- [ ] 2-column grid (responsive to 1 column)
- [ ] "View All Blogs" button

**Lanima Pattern:**
```html
<div class="blog-block-v1">
  <div class="blog-image">
    <img src="..." />
  </div>
  <div class="blog-content">
    <p class="blog-date">May 5, 2023</p>
    <h5 class="blog-title">Title</h5>
    <div class="read-more-button">
      <div class="icon"><img src="arrow.svg" /></div>
      <div>Read More</div>
    </div>
  </div>
</div>
```

### Step 4.7: Brand Logos Section (Optional)
**Current State:** ❌ Not present
**Actions:**
- [ ] Create `BrandLogos` component (if Teecherz has partners/clients)
- [ ] Match Lanima's logo grid:
  - Horizontal row of logos
  - Grayscale or colored
  - Even spacing
- [ ] Add if applicable to Teecherz

---

## Phase 5: Content Integration

### Step 5.1: Content Mapping
**Tasks:**
- [ ] Replace placeholder content with Teecherz-specific copy
- [ ] Update all headlines to match Teecherz messaging
- [ ] Replace product/course names with actual offerings
- [ ] Update CTAs to match Teecherz goals
- [ ] Replace images with Teecherz assets (or appropriate placeholders)

### Step 5.2: Content Strategy by Section

**Hero:**
- Main value proposition
- Primary CTA (e.g., "Start Teaching" or "Explore Courses")

**Category Showcase:**
- Map to Teecherz's main service/product categories
- Use appropriate colors and imagery

**Product Grid:**
- Use actual courses/services
- Include pricing if applicable
- Link to actual product pages

**Features:**
- Highlight Teecherz benefits
- Use appropriate icons (not emojis in production)

**CTA:**
- Secondary conversion point
- Relevant to Teecherz's goals

**Blog:**
- Use actual blog posts if available
- Or create placeholder structure

---

## Phase 6: Responsive Design Refinement

### Step 6.1: Breakpoint Strategy
**Based on Lanima:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns, adjusted spacing)
- Desktop: > 1024px (full grid, generous spacing)

### Step 6.2: Mobile-First Testing
**Tasks:**
- [ ] Test all sections on mobile viewport
- [ ] Verify navigation menu works on mobile
- [ ] Check image sizing and aspect ratios
- [ ] Ensure touch targets are adequate (min 44x44px)
- [ ] Test form inputs on mobile

### Step 6.3: Tablet & Desktop Refinement
**Tasks:**
- [ ] Verify grid layouts at tablet breakpoint
- [ ] Check spacing at desktop sizes
- [ ] Ensure hover states work (desktop only)
- [ ] Verify text readability at all sizes

---

## Phase 7: Visual Polish & Animations

### Step 7.1: Hover Effects
**Tasks:**
- [ ] Category cards: Divider expansion animation
- [ ] Product cards: Image scale on hover
- [ ] Buttons: Smooth color transitions
- [ ] Links: Subtle underline or color change

### Step 7.2: Transitions
**Tasks:**
- [ ] Add smooth transitions to interactive elements
- [ ] Ensure transitions are performant (use transform, opacity)
- [ ] Match Lanima's animation timing (likely 300ms)

### Step 7.3: Visual Refinement
**Tasks:**
- [ ] Verify spacing matches Lanima exactly
- [ ] Check typography hierarchy is clear
- [ ] Ensure color contrast meets accessibility standards
- [ ] Verify divider lines match Lanima style

---

## Phase 8: Component-Specific Implementation Details

### Step 8.1: CategoryShowcase Component Refinement

**Current Issues to Address:**
- [ ] Add image support (currently missing)
- [ ] Implement animated divider (expands on hover)
- [ ] Match exact color scheme (blue, orange, grey)
- [ ] Ensure image positioning matches Lanima (right side)
- [ ] Add proper hover state transitions

**Implementation Notes:**
```tsx
// Divider should:
// - Start at w-12 (or similar small width)
// - Expand to w-full on hover
// - Use transition-all duration-300
// - Be positioned below category name
```

### Step 8.2: ProductGrid Component Refinement

**Current Issues to Address:**
- [ ] Verify image aspect ratios match Lanima
- [ ] Ensure hover scale effect is smooth
- [ ] Check price display formatting
- [ ] Verify grid gap spacing

### Step 8.3: Features Component Refinement

**Current Issues to Address:**
- [ ] Replace emoji icons with SVG icons (or proper icon component)
- [ ] Match Lanima's icon container styling
- [ ] Verify text alignment and spacing

### Step 8.4: CTA Component Refinement

**Current Issues to Address:**
- [ ] Verify side-by-side layout matches Lanima
- [ ] Check image sizing and aspect ratio
- [ ] Ensure responsive stacking works correctly
- [ ] Match button styling

---

## Phase 9: Testing & Quality Assurance

### Step 9.1: Cross-Browser Testing
**Tasks:**
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Verify all styles render correctly
- [ ] Check JavaScript functionality (if any)

### Step 9.2: Responsive Testing
**Tasks:**
- [ ] Test at multiple viewport sizes
- [ ] Verify mobile menu functionality
- [ ] Check form inputs on mobile
- [ ] Test touch interactions

### Step 9.3: Accessibility Testing
**Tasks:**
- [ ] Verify semantic HTML structure
- [ ] Check ARIA labels where needed
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Test with screen reader (if possible)

### Step 9.4: Performance Testing
**Tasks:**
- [ ] Optimize images (use Next.js Image component)
- [ ] Check bundle size
- [ ] Verify lazy loading works
- [ ] Test page load speed

---

## Phase 10: Final Assembly & Review

### Step 10.1: Page Assembly
**Tasks:**
- [ ] Verify all sections are in correct order in `app/page.tsx`
- [ ] Ensure proper spacing between sections
- [ ] Check that no sections overlap or have spacing issues
- [ ] Verify footer is at bottom

### Step 10.2: Content Review
**Tasks:**
- [ ] Proofread all copy
- [ ] Verify all links work
- [ ] Check CTAs point to correct destinations
- [ ] Ensure images load correctly

### Step 10.3: Build & Deploy Preparation
**Tasks:**
- [ ] Run `npm run build` and fix any errors
- [ ] Test production build locally
- [ ] Verify static generation works
- [ ] Check for console errors
- [ ] Update metadata (SEO) in `layout.tsx`

---

## Implementation Priority Order

### High Priority (Core Sections):
1. ✅ Hero Section (refine spacing/typography)
2. ✅ Category Showcase (add images, animated divider)
3. ✅ Product Grid (verify styling)
4. ✅ Features (replace emojis with icons)
5. ✅ CTA (verify layout)
6. ✅ Header (enhance mobile menu)
7. ✅ Footer (verify layout matches Lanima)

### Medium Priority (Enhancements):
8. Blog Section (create if needed)
9. Brand Logos (if applicable)
10. Animations & hover effects
11. Responsive refinements

### Low Priority (Polish):
12. Final visual tweaks
13. Performance optimization
14. Accessibility enhancements
15. Cross-browser fixes

---

## Key Design Patterns to Match from Lanima

### 1. Section Header Pattern
```
UPPERCASE SUBTITLE (small, letter-spaced)
Large Title
Divider Line
```

### 2. Category Card Pattern
```
Colored Background (blue/orange/grey)
├── Text Section (left)
│   ├── Uppercase Subtitle
│   ├── Category Name
│   └── Divider (expands on hover)
└── Image (right)
```

### 3. Product Card Pattern
```
Image (with hover scale)
Product Name
Price (with optional original price)
```

### 4. Feature Block Pattern
```
Icon (in container)
Heading
Description (small text)
```

### 5. CTA Section Pattern
```
Image (40-45% width) | Content (55-60% width)
├── Headline
├── Paragraph
└── Button
```

---

## Spacing Reference (Tailwind Classes)

Based on Lanima's generous spacing:
- **Section Padding**: `py-16 sm:py-24 lg:py-32` (or similar)
- **Container Padding**: `px-4 sm:px-6 lg:px-8` (already in Container)
- **Grid Gaps**: `gap-6 sm:gap-8` (or similar)
- **Component Internal**: `p-6 sm:p-8` (or similar)

---

## Color Scheme Reference

**Category Colors (from Lanima):**
- Blue: `bg-blue-50 hover:bg-blue-100` (or similar)
- Orange: `bg-orange-50 hover:bg-orange-100` (or similar)
- Grey: `bg-gray-50 hover:bg-gray-100` (or similar)

**Text Colors:**
- Headings: `text-foreground` (high contrast)
- Body: `text-foreground/70` (muted)
- Subtitles: `text-foreground/60` (more muted)

---

## Next Steps

1. **Start with High Priority items** - Refine existing components to match Lanima
2. **Work section-by-section** - Complete one section fully before moving to next
3. **Test as you go** - Verify responsive behavior at each step
4. **Iterate based on feedback** - Adjust spacing, typography, colors as needed

---

## Notes

- **Don't copy Webflow code** - Use as visual reference only
- **Use Tailwind utilities** - Avoid arbitrary values unless necessary
- **Maintain consistency** - Use same spacing scale throughout
- **Mobile-first** - Build for mobile, enhance for desktop
- **Semantic HTML** - Use proper heading hierarchy, landmarks
- **Accessibility** - Ensure keyboard navigation, screen reader support

---

## Questions to Resolve

1. **Content**: Do we have Teecherz-specific content/copy to use?
2. **Images**: Do we have Teecherz images, or use placeholders?
3. **Icons**: Should we use an icon library (e.g., Heroicons, Lucide) or custom SVGs?
4. **Blog**: Does Teecherz have a blog? If so, what content?
5. **Brand Colors**: Should we match Lanima's palette or use Teecherz brand colors?
6. **Additional Sections**: Are there Teecherz-specific sections not in Lanima?

---

## Estimated Timeline

- **Phase 1-2**: 1-2 hours (Design System + Base Components)
- **Phase 3**: 1-2 hours (Layout Components)
- **Phase 4**: 4-6 hours (Section Components)
- **Phase 5**: 1-2 hours (Content Integration)
- **Phase 6-7**: 2-3 hours (Responsive + Polish)
- **Phase 8-10**: 2-3 hours (Testing + Final Assembly)

**Total**: ~12-18 hours of focused development

---

This plan provides a clear roadmap for rebuilding the Teecherz website inspired by Lanima's design patterns while maintaining clean, maintainable Next.js + Tailwind code.
