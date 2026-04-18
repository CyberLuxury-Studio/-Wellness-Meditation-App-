# Next.js Cyberpunk Landing Page Prototype Generation Prompt

*Copy and paste the entire prompt below into your preferred AI code generator (e.g., Claude, v0, ChatGPT) to generate the prototype front page.*

---

**Prompt Start:**

You are an expert Next.js developer, UI/UX designer, and Tailwind CSS master. Your task is to generate a complete, production-ready prototype for a single-page waitlist/stealth landing page.

The aesthetic is **High-End Cyberpunk/Stealth Beta**. It must look professional, sleek, dark, and highly polished, suitable for a premium UI8 template.

### Technical Stack Requirements:
- **Framework:** Next.js (App Router convention)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (for scroll reveals, hover states, and staggered entrances)
- **Icons:** `lucide-react`
- **Language:** TypeScript (`.tsx`)
- **Note on Spline:** For this prototype, do NOT attempt to import `@splinetool/react-spline`. Instead, create a visually striking placeholder `div` with a complex CSS animated gradient or pulsing glowing orb to represent where the 3D Spline scene will go in the Hero section.

### Design System & Theme:
Please implement these specific Tailwind color variables in your code (or use explicit hex codes in arbitrary values if you cannot configure `tailwind.config.ts`):
- **Backgrounds:** `#0a0a0c` (Obsidian Main), `#050505` (Void alternate section bg), `#111116` (Surface/Cards).
- **Accents/Neons:** `#00f3ff` (Cyan), `#ff003c` (Pink), `#bd00ff` (Purple).
- **Text:** White for headings, `#8a8a93` for muted body text.
- **Typography:** Assume `Space Grotesk` (or a geometric sans) for headings and `Inter` for body.
- **Effects:** Heavy use of `backdrop-blur-md`, glowing borders (`border-white/5` resting, bright neon on hover), and inner glow shadows.

### Page Structure & Requirements (Generate all sections in one scrolling page):

**1. Sticky Navbar:**
- Glassmorphism effect (`backdrop-blur`, `bg-black/50`).
- Left: A minimal text logo (e.g., "NEXUS//CORE").
- Center: Navigation links (Features, Pricing, FAQ) with subtle cyan hover text-shadow.
- Right: A glowing "Join Waitlist" button.

**2. Hero Section (Waitlist Focus):**
- Full viewport height (`min-h-screen`).
- Layout: 2-column on desktop. Left side is text/form; right side is the "Spline Placeholder" (a glowing, animated abstract CSS orb/shape).
- Content:
  - Small neon pink pre-heading label: `[ STEALTH_BETA_V1.0 ]`
  - Massive H1 Heading: "ENTER THE NEXT ERA."
  - Subtitle: "Upload your consciousness. Limited access strictly enforced."
  - Waitlist Form: A dark input field (`bg-surface`) with a glowing bottom border on focus. Placeholder should look like a terminal: `> enter_your_email_`.
  - Submit Button: Next to the input, a button with a cyan glowing border.

**3. Features Grid Section:**
- Background: `#050505`.
- Layout: 3-column CSS grid.
- Content: Create 3 feature cards (e.g., "Neural Sync", "Quantum Encryption", "Zero Latency").
- Card Design: Dark surface (`#111116`), 1px subtle border. On hover, the card should translate slightly up (`-translate-y-2`) and cast a glowing cyan drop shadow. Use `lucide-react` icons for each feature.

**4. Pricing/Tiers Section:**
- Background: `#0a0a0c`.
- Layout: 3 columns centered.
- Content: 3 tiers ("Hacker", "Cyber", "God-Mode").
- Design: The middle tier ("Cyber") must be highlighted. Give it a slightly larger scale and a continuous gradient border (Purple to Cyan). Include dummy feature lists and a CTA button for each.

**5. Bottom CTA & Footer:**
- Background: Dark with a very subtle grid pattern overlay (achievable via CSS background-image).
- CTA Content: "Ready to upload?" centered with a final waitlist input form.
- Footer: Simple, clean, muted text at the very bottom with copyright and dummy social links.

### Animation Requirements (Framer Motion):
- Wrap sections in `<motion.div>` using `initial="hidden"` and `whileInView="visible"`.
- Use a `viewport={{ once: true }}` to trigger animations only on first scroll.
- Create a `staggerChildren` variant for the features and pricing grids so cards fade-up sequentially.
- Button hovers should scale up `1.05`.

### Deliverable:
Please output the complete, functional React/Next.js code for this page. You can put all the components and the main page logic into a single cohesive output block for the prototype. Ensure it is responsive (mobile-friendly stacking).

**Prompt End.**