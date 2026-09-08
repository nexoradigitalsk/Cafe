# VELORA CAFÉ — Premium Modern Cafe Website Demo

> **Tagline:** Coffee. Food. Moments.  
> **Brand Concept:** Fictional Melbourne-inspired specialty cafe created for digital agency portfolio demonstration.

---

## 🌟 Overview
VELORA CAFÉ is a modern, high-end frontend-only website demo built with a warm Melbourne cafe aesthetic. Tailored specifically for hospitality client presentations, it features editorial typography, smooth animations, interactive takeaway ordering, and dynamic opening hours.

---

## ☕ Key Highlights
- **Design Aesthetic**: Warm cream/beige backgrounds, deep espresso brown, charcoal contrast, and soft caramel gold accents.
- **Editorial Typography**: Pairing of `Playfair Display` serif headlines with `Plus Jakarta Sans` body typography.
- **Interactive Takeaway Demo**: An interactive ordering modal allowing potential clients to experience item selection, pickup time slots, and simulated checkout confirmation.
- **Dynamic Hours**: Automatic `Open Now` / `Closed` badge status calculated dynamically against Melbourne local business hours.
- **Curated Menu**: 6 customer favourites and 5 full categories (*Breakfast*, *Lunch*, *Coffee*, *Cold Drinks*, *Desserts*) with dietary tags.
- **Masonry Gallery & Lightbox**: Interactive gallery with category filtering and keyboard-navigable image preview modal.
- **Enquiry & Table Booking**: Polished form with client-side validation and friendly confirmation screen.
- **Centralized Site Config**: All business details, hours, address, and social links are managed in `src/config/siteConfig.js`.

---

## 🛠️ Tech Stack
- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure
```
src/
├── config/
│   └── siteConfig.js          # Centralized brand info, contact details, hours, and socials
├── data/
│   ├── menuData.js            # Customer favourites & full categorized menu
│   ├── galleryData.js         # Curated cafe gallery items
│   └── reviewsData.js         # Sample guest testimonials
├── components/
│   ├── Navbar.jsx             # Sticky glassmorphism header & mobile drawer
│   ├── Hero.jsx               # Editorial headline, live hours badge & CTAs
│   ├── FeaturedMenu.jsx       # 6 customer favourite cards with quick-order triggers
│   ├── About.jsx              # Brand narrative & 4 core value pillars
│   ├── Menu.jsx               # Interactive tabbed menu with dietary indicators
│   ├── Gallery.jsx            # Masonry grid gallery with category filtering
│   ├── LightboxModal.jsx      # Full-screen image preview with arrow navigation
│   ├── OrderCTA.jsx           # Dark espresso high-converting banner
│   ├── OrderModal.jsx         # Interactive takeaway ordering modal
│   ├── Reviews.jsx            # Sample guest impressions & star ratings
│   ├── Hours.jsx              # Schedule card with dynamic open/closed status
│   ├── Visit.jsx              # Melbourne CBD location details & stylized map visual
│   ├── Contact.jsx            # Enquiry form with validation & success state
│   └── Footer.jsx             # Luxury footer with links, socials, & portfolio disclaimer
├── pages/
│   └── Home.jsx               # Master page orchestrating all sections
├── index.css                  # Custom font imports & Tailwind styles
├── App.jsx                    # Root layout wrapper
└── main.jsx                   # Application entry
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/nexoradigitalsk/Cafe.git

# Navigate into the project folder
cd Cafe

# Install dependencies
npm install

# Start the local development server
npm run dev
```

The application will run locally at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📝 Concept Notice
*This is a fictional concept website created exclusively for portfolio and client demonstration purposes.*