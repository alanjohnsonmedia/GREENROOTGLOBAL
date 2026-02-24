

# Content Update and CTA Enhancement Plan

## Overview

Update all site content to rebrand from "Cow Dung Exporter" to **GreenRoot Global Ventures**, update product descriptions, add new CTA buttons, integrate WhatsApp with the correct India number, add UAE contact number, and embed the uploaded product images. No design, layout, color, or structural changes.

---

## 1. Company Name Change (All Occurrences)

| File | Current | New |
|---|---|---|
| `index.html` | "Cow Dung Exporter" in title, meta tags, og tags | "GreenRoot Global Ventures" |
| `src/components/Navbar.tsx` | "COW DUNG EXPORTER" (line 38) | "GREENROOT GLOBAL" |
| `src/components/FooterCTA.tsx` | "Cow Dung Exporter" in copyright (line 45) | "GreenRoot Global Ventures" |
| `src/pages/TestimonialsPage.tsx` | "Cow Dung Exporter" reference in testimonial text (line 58) | "GreenRoot Global Ventures" |

---

## 2. WhatsApp Number Update

Update the WhatsApp number from `919876543210` to `919894851206` in:

| File | Lines |
|---|---|
| `src/components/WhatsAppCTA.tsx` | href URL (line 7) |
| `src/components/FooterCTA.tsx` | WhatsApp link (line 34) |
| `src/pages/ContactPage.tsx` | Contact info WhatsApp entry (line 16) |

WhatsApp button label stays "WhatsApp Us" on desktop, add "Chat with us on WhatsApp" as the aria-label.

---

## 3. UAE Number Addition

Add UAE contact number `+971 56 767 8499` to:

- **ContactPage.tsx**: Add a new entry in the `contactInfo` array with Phone icon, label "UAE Contact"
- **FooterCTA.tsx**: Add UAE number alongside the existing India number in the footer contact row

---

## 4. Product Content Updates

**File**: `src/components/ProductShowcase.tsx`

Replace the three product entries with updated content:

| Product | New Description |
|---|---|
| **Cow Dung Manure** | "Rich in NPK and beneficial microbes. Improves soil texture and water retention. Balances soil pH. 100% natural and chemical-free. Suitable for farms, gardens and plantations." |
| **Earthworm Organic (Vermicompost)** | "Improves aeration and soil structure. Boosts root growth and nutrient absorption. Enhances plant immunity. Increases yield naturally. Ideal for organic farming." |
| **Bone Meal Organic** | "High in phosphorus and calcium. Strong root development. Better flowering and fruiting. Strengthens plant structure. Slow-release for long-term fertility." |

Replace the third product from "Raw Organic Manure" to "Bone Meal Organic".

**Product Images**: Copy the user-uploaded images to `src/assets/`:
- `image-2.png` -> `src/assets/product-vermicompost-new.png` (for Vermicompost - shows earthworms in hand)
- `image-5.png` -> `src/assets/product-cowdung-new.png` (for Cow Dung - shows organic compost in bare hand)
- Keep existing `product-dung-cake.png` for Bone Meal (or use one of the other uploaded images)

Update product card buttons from "Get Quote for this Item" to **"Enquire on WhatsApp"** linking to the WhatsApp number.

---

## 5. New CTA Buttons

Add additional CTA buttons where relevant:

- **ProductShowcase.tsx**: Change card button to "Enquire on WhatsApp" (links to `wa.me/919894851206`)
- **ProductShowcase.tsx**: Add a second button per card: "Request Bulk Order" (links to `/contact`)
- **FooterCTA.tsx**: Add a secondary "Become a Distributor" button below the main CTA, styled as outline
- **HeroSection.tsx**: Add a secondary outline button "Enquire on WhatsApp" next to the main CTA

All "Enquire on WhatsApp" buttons open WhatsApp with pre-filled message. "Request Bulk Order" and "Become a Distributor" navigate to `/contact`.

---

## 6. About Us / Hero Content Update

**File**: `src/components/HeroSection.tsx`

Update the subheadline to reflect the new mission:
- Headline: "Certified Organic Fertilizer Export from India."
- Subhead: "Natural and eco-friendly fertilizers that restore soil fertility, improve crop yield, and support long-term environmental sustainability."

**About Section**: Create a new `src/components/AboutSection.tsx` component to be placed on the homepage (between Hero and Products) containing the full About Us content provided by the user. This section will use the Sage Green background with the existing typography styles.

---

## 7. Files Summary

### Files to Create
- `src/components/AboutSection.tsx` -- About Us content section for homepage

### Files to Modify
- `index.html` -- Update title and meta tags
- `src/components/Navbar.tsx` -- Company name
- `src/components/HeroSection.tsx` -- Updated headline, subhead, secondary CTA
- `src/components/ProductShowcase.tsx` -- New product content, images, CTA buttons
- `src/components/FooterCTA.tsx` -- Company name, WhatsApp number, UAE number, "Become a Distributor" button
- `src/components/WhatsAppCTA.tsx` -- Updated phone number
- `src/pages/ContactPage.tsx` -- WhatsApp number, UAE contact entry
- `src/pages/TestimonialsPage.tsx` -- Company name reference
- `src/pages/Index.tsx` -- Add AboutSection component

### Assets to Copy
- `user-uploads://image-2.png` -> `src/assets/product-vermicompost-new.png`
- `user-uploads://image-3.png` -> `src/assets/product-bonemeal.png`
- `user-uploads://image-5.png` -> `src/assets/product-cowdung-new.png`

### No Changes To
- Design, layout, colors, section order
- Certificates section structure
- Logistics timeline
- Testimonials page layout
- Animation patterns
- Any UI component files

