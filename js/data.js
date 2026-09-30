/**
 * Prime Vibe Event & Shoot - Performance Marketing Agency Data Configuration
 * Centralized data object for easy content management and customization.
 */

const agencyData = {
  brand: {
    name: "PrimeVibe Event & Shoot",
    tagline: "Performance Marketing & Creative Media Scaling Partner",
    logoText: "PrimeVibe",
    logoAccent: "Event & Shoot",
    logoPath: "asset/Logo.png",
    phone: "+91 98765 43210",
    email: "growth@primevibe.com",
    address: "Financial District, Tech Tower 4th Floor, Hyderabad / Remote Global",
    consultationLink: "#contact"
  },

  heroMetrics: {
    adSpend: "₹2.4L",
    adSpendLabel: "Ad Spend Managed (30D)",
    leads: "+184%",
    leadsLabel: "Qualified Leads Surge",
    cpl: "₹312",
    cplLabel: "Avg Cost Per Lead",
    roas: "4.8X",
    roasLabel: "Blended Campaign ROAS"
  },

  trustLogos: [
    { name: "FinTech Scale", category: "SaaS", icon: "shield-check" },
    { name: "EcomPulse", category: "E-Commerce", icon: "shopping-bag" },
    { name: "LeadFlow Pro", category: "B2B SaaS", icon: "zap" },
    { name: "UrbanSpace", category: "Real Estate", icon: "home" },
    { name: "HealthCore", category: "Healthcare", icon: "activity" },
    { name: "EduVentures", category: "EdTech", icon: "book-open" },
    { name: "StyleLuxe", category: "D2C Fashion", icon: "sparkles" },
    { name: "AutoDrive", category: "Automotive", icon: "cpu" }
  ],

  services: [
    {
      id: "01",
      title: "Performance Marketing",
      subtitle: "Paid Acquisition & Scaling",
      description: "Data-backed Meta Ads, Google Search & Shopping, YouTube, and LinkedIn campaigns optimized aggressively for ROAS.",
      details: "Full funnel setup, audience segmentation, bid management, algorithmic scaling, and multi-channel attribution.",
      icon: "trending-up",
      badge: "Core Expertise"
    },
    {
      id: "02",
      title: "Lead Generation",
      subtitle: "High-Intent Qualified Prospects",
      description: "Custom lead capture engines and automated qualification funnels built to deliver ready-to-buy prospects straight to your CRM.",
      details: "Includes instant lead scoring, SMS/Email instant booking workflows, and spam lead filter protocols.",
      icon: "target",
      badge: "High ROI"
    },
    {
      id: "03",
      title: "Conversion Rate Optimization",
      subtitle: "Turn Existing Traffic Into Buyers",
      description: "Data-driven UI/UX revamps, A/B testing, friction removal, and landing page enhancements that maximize revenue per click.",
      details: "Heatmap analysis, user behavior session recordings, checkout optimization, and copy micro-testing.",
      icon: "zap",
      badge: "3.2x Conv. Boost"
    },
    {
      id: "04",
      title: "Creative & Ad Design",
      subtitle: "High-Converting Static & Video Ads",
      description: "Direct-response ad creative, high-impact video reels, UGC scripting, and dynamic motion graphics designed to stop the scroll.",
      details: "Hooks testing, creative fatigue replacement cycles, brand-aligned visual storytelling, and multi-ratio ad formats.",
      icon: "video",
      badge: "Scroll-Stopper"
    },
    {
      id: "05",
      title: "Social Media Marketing",
      subtitle: "Organic Authority & Community",
      description: "Strategic content positioning, viral video distribution, and social proof engines that turn casual viewers into brand advocates.",
      details: "Omnichannel content distribution, profile optimization, trend hijacking, and community nurture campaigns.",
      icon: "share-2",
      badge: "Brand Scaling"
    },
    {
      id: "06",
      title: "Analytics & Tracking",
      subtitle: "Server-Side Attribution & Reporting",
      description: "Flawless GA4, Meta CAPI, Google Tag Manager, and custom real-time ROI dashboards so every ad dollar is accounted for.",
      details: "Eliminate iOS privacy data dropoff with Server-Side Tracking, First-Party Data collection, and custom Looker dashboards.",
      icon: "bar-chart-3",
      badge: "100% Precision"
    },
    {
      id: "07",
      title: "Landing Pages",
      subtitle: "Sub-1 Second Speed Conversion Engines",
      description: "Bespoke high-converting landing pages built specifically for paid ad traffic with lightning load times and direct copywriting.",
      details: "Mobile-first conversion design, dynamic text replacement for ad keywords, integrated payment & calendar scheduling.",
      icon: "layout",
      badge: "High Converting"
    },
    {
      id: "08",
      title: "Retargeting & Nurture",
      subtitle: "Recover 40%+ Lost High-Intent Visitors",
      description: "Omnichannel retargeting arrays on Meta, Google Display, and WhatsApp sequence automation to convert warm audiences.",
      details: "Dynamic product ads, sequential storytelling ads, offer-based re-engagement, and abandoned checkout triggers.",
      icon: "refresh-cw",
      badge: "Revenue Recovery"
    }
  ],

  funnelSteps: [
    { step: "01", name: "Traffic", desc: "Targeted paid traffic via Meta, Google Search & YouTube", metric: "High Intent", accent: "Blue" },
    { step: "02", name: "Attention", desc: "Scroll-stopping direct response creative & copy hooks", metric: "3s Hook Rate > 45%", accent: "Blue" },
    { step: "03", name: "Lead", desc: "Frictionless, lightning-fast landing page & instant forms", metric: "Opt-in Rate > 28%", accent: "Red" },
    { step: "04", name: "Conversion", desc: "Automated qualification & instant CRM call booking", metric: "Closed Sales ↑ 84%", accent: "Red" },
    { step: "05", name: "Retention", desc: "LTV maximization via retargeting & email/SMS workflows", metric: "LTV Boost 2.4X", accent: "Blue" },
    { step: "06", name: "Scale", desc: "Reinvesting profits into algorithmic budget expansion", metric: "Budget Scaled 5X", accent: "Red" }
  ],

  packages: [
    {
      name: "STARTER",
      target: "For brands launching paid acquisition campaigns with dedicated focus.",
      price: "Custom Monthly",
      isPopular: false,
      features: [
        "Meta Ads (Facebook & Instagram)",
        "Campaign Strategy & Setup",
        "Weekly Budget & Bid Optimization",
        "Monthly Performance Analytics",
        "Standard Conversion Tracking",
        "A/B Testing (Up to 3 Ad Variations)"
      ],
      ctaText: "Start Growing",
      ctaBadge: "Launch Fast"
    },
    {
      name: "GROWTH",
      target: "For scaling businesses targeting high volume leads & predictable sales.",
      price: "Custom Growth Tier",
      isPopular: true,
      features: [
        "Meta Ads + Google Search & Shopping",
        "Full Lead Generation & CRM Pipeline",
        "Custom Creative Strategy & Hook Testing",
        "Landing Page CRO Audit & Improvements",
        "Omnichannel Retargeting Setup",
        "Bi-Weekly Strategy Calls + Live Dashboard",
        "Server-Side Meta CAPI Tracking"
      ],
      ctaText: "Get Growth Plan",
      ctaBadge: "Most Popular"
    },
    {
      name: "SCALE",
      target: "For aggressive brands ready to dominate market share and multi-channel revenue.",
      price: "Custom Scaling Retainer",
      isPopular: false,
      features: [
        "Multi-Platform (Meta, Google, YouTube, LinkedIn)",
        "Advanced Funnel & Landing Page Build",
        "Dedicated Motion Design & UGC Video Creatives",
        "Continuous CRO & Heatmap User Testing",
        "Custom Multi-Touch Attribution Setup",
        "Dedicated Performance Director & Strategy Team",
        "24/7 Slack Channel Support"
      ],
      ctaText: "Let's Scale Now",
      ctaBadge: "Aggressive Scale"
    },
    {
      name: "CUSTOM / ENTERPRISE",
      target: "Bespoke growth partnerships for enterprise brands and multi-location companies.",
      price: "Enterprise Quote",
      isPopular: false,
      features: [
        "Full Omnichannel Revenue Engine",
        "In-house Media Buyer & Creative Placement",
        "Custom Data Science & LTV Modeling",
        "Global Market Expansion Campaigns",
        "Executive Strategy Sessions & Quarterly Audits"
      ],
      ctaText: "Talk to Our Team",
      ctaBadge: "Bespoke"
    }
  ],

  reels: [
    {
      id: "r1",
      category: "Reels",
      title: "Direct Response UGC Hook Strategy",
      brand: "LuxeSkin D2C",
      metric: "+240% Conv Rate",
      views: "1.2M Views",
      roas: "5.4X ROAS",
      aspectRatio: "9:16",
      thumbnailBg: "linear-gradient(135deg, #013AE3 0%, #0F172A 100%)",
      videoTag: "UGC Video Ad"
    },
    {
      id: "r2",
      category: "Meta Ads",
      title: "Problem-Solution Motion Showcase",
      brand: "FinFlow App",
      metric: "₹180 CPL",
      views: "890K Views",
      roas: "4.8X ROAS",
      aspectRatio: "9:16",
      thumbnailBg: "linear-gradient(135deg, #0A0F1D 0%, #013AE3 100%)",
      videoTag: "Meta Video Ad"
    },
    {
      id: "r3",
      category: "Product Ads",
      title: "Interactive Unboxing & Social Proof",
      brand: "AudioCraft Headphones",
      metric: "+180% Sales",
      views: "2.4M Views",
      roas: "6.2X ROAS",
      aspectRatio: "9:16",
      thumbnailBg: "linear-gradient(135deg, #1E293B 0%, #E53935 100%)",
      videoTag: "Product Ad"
    },
    {
      id: "r4",
      category: "UGC",
      title: "Customer Testimonial Mashup",
      brand: "NutriFit Supplements",
      metric: "-42% CPA",
      views: "1.5M Views",
      roas: "4.2X ROAS",
      aspectRatio: "9:16",
      thumbnailBg: "linear-gradient(135deg, #013AE3 0%, #E53935 100%)",
      videoTag: "UGC Reel"
    },
    {
      id: "r5",
      category: "Campaign Creatives",
      title: "Seasonal Festive Promo Ad",
      brand: "UrbanHome Decor",
      metric: "₹4.2L Revenue/Day",
      views: "3.1M Views",
      roas: "7.1X ROAS",
      aspectRatio: "9:16",
      thumbnailBg: "linear-gradient(135deg, #0F172A 0%, #013AE3 100%)",
      videoTag: "Campaign Creative"
    }
  ],

  projects: [
    {
      id: "p1",
      client: "FinTech ScaleUp",
      industry: "B2B SaaS & Financial Services",
      objective: "Scale High-Ticket Demo Requests while reducing Cost Per Acquisition",
      results: [
        { label: "Leads Growth", value: "+184%", color: "blue" },
        { label: "CPL Reduction", value: "-34%", color: "red" },
        { label: "Pipeline Value", value: "₹2.8 Cr", color: "blue" },
        { label: "ROAS Multiplier", value: "4.8X", color: "red" }
      ],
      summary: "Restructured Google Search intent campaigns and launched interactive direct-response video ads on Meta with custom landing page booking flow.",
      imageBg: "linear-gradient(135deg, #0F172A, #013AE3)"
    },
    {
      id: "p2",
      client: "Aura Home D2C",
      industry: "E-Commerce / Home Decor",
      objective: "Achieve 5X ROAS during Q4 festive season while doubling daily ad spend",
      results: [
        { label: "Revenue Surge", value: "+215%", color: "blue" },
        { label: "Blended ROAS", value: "5.6X", color: "red" },
        { label: "AOV Boost", value: "+28%", color: "blue" },
        { label: "Repeat Buyers", value: "+42%", color: "red" }
      ],
      summary: "Executed dynamic retargeting arrays, high-converting motion reels, and sub-second speed checkout landing pages.",
      imageBg: "linear-gradient(135deg, #013AE3, #0F172A)"
    },
    {
      id: "p3",
      client: "MediCare Lead Engine",
      industry: "Healthcare & Diagnostics",
      objective: "Drive geo-targeted patient appointment bookings at sub-₹250 CPL",
      results: [
        { label: "Bookings", value: "+310%", color: "blue" },
        { label: "CPL Achievement", value: "₹210", color: "red" },
        { label: "Conversion Rate", value: "14.8%", color: "blue" },
        { label: "Ad Spend ROAS", value: "6.1X", color: "red" }
      ],
      summary: "Deployed hyper-local Google Ads with instant WhatsApp click-to-chat funnels and automated reminder sequences.",
      imageBg: "linear-gradient(135deg, #1E293B, #E53935)"
    }
  ],

  caseStudies: [
    {
      id: "cs1",
      client: "UrbanSpace Real Estate",
      challenge: "Generating invalid lead submissions with high CPL (>₹1,400) on Meta ads.",
      strategy: "Implemented 2-Step OTP Lead Qualification, dynamic location targeting, and video property walkthroughs.",
      execution: "Overhauled ad copy, added pre-qualifying questionnaire filters, and launched custom high-speed landing pages.",
      results: {
        leads: "+142% Qualified Leads",
        cpl: "-48% CPL Reduction (₹680)",
        roas: "8.4X Verified ROI",
        revenue: "₹14.2 Cr Sales Value"
      }
    },
    {
      id: "cs2",
      client: "EduPrime Certification",
      challenge: "High ad fatigue and dropping conversion rates on static banner ads.",
      strategy: "Creative overhaul with 12 unique UGC video reels testing 4 core emotional hooks.",
      execution: "Daily budget scaling on top-performing video hooks paired with retargeting webinars.",
      results: {
        leads: "+280% Student Enrolments",
        cpl: "-38% Cost Per Enrolment",
        roas: "5.2X ROAS",
        revenue: "₹88L Course Revenue"
      }
    }
  ],

  whyUsPillars: [
    {
      title: "Data Before Decisions",
      description: "Every campaign change, creative drop, and budget scale is governed by hard performance analytics, not subjective intuition.",
      icon: "database"
    },
    {
      title: "Creative + Performance",
      description: "We merge scroll-stopping visual design with direct-response psychological triggers built specifically to convert paid traffic.",
      icon: "layout"
    },
    {
      title: "Continuous Optimization",
      description: "Daily bid management, negative keyword pruning, creative iteration cycles, and audience segment refreshing.",
      icon: "refresh-cw"
    },
    {
      title: "Transparent Reporting",
      description: "No vague vanity metrics. You get clean real-time dashboards showing true Ad Spend, Qualified Leads, CPL, and Revenue ROAS.",
      icon: "pie-chart"
    },
    {
      title: "Conversion Focused",
      description: "Clicks and impressions don't pay bills. Our sole focus is generating high-intent leads, sales pipeline, and bottom-line revenue.",
      icon: "crosshair"
    },
    {
      title: "Growth Partnership",
      description: "We act as your dedicated growth arm, integrating directly with your team, CRM, and sales executives for maximum alignment.",
      icon: "users"
    }
  ],

  resultsCounters: [
    { number: "18 Cr+", prefix: "₹", suffix: "", label: "Ad Spend Managed", accent: "blue" },
    { number: "480K+", prefix: "", suffix: "", label: "Qualified Leads Generated", accent: "red" },
    { number: "4.8X", prefix: "", suffix: "", label: "Average Blended ROAS", accent: "blue" },
    { number: "36%", prefix: "-", suffix: "", label: "Average CPL Reduction", accent: "red" }
  ],

  testimonials: [
    {
      name: "Rohan Mehta",
      title: "Founder & CEO",
      company: "FinTech ScaleUp",
      avatar: "RM",
      rating: 5,
      quote: "Prime Vibe Event & Shoot transformed our paid acquisition funnel. We reduced our CPL by 38% within 45 days while increasing qualified demo volume by nearly 2x. They treat our ad spend like their own money.",
      metricBadge: "+184% Leads Surge"
    },
    {
      name: "Priya Sharma",
      title: "Head of Marketing",
      company: "Aura Home D2C",
      avatar: "PS",
      rating: 5,
      quote: "The team's focus on creative reels and CRO landing pages changed everything for our Q4 campaign. Our ROAS surged to 5.6X and we scaled ad spend without losing profitability.",
      metricBadge: "5.6X ROAS Scaled"
    },
    {
      name: "Vikram Sengupta",
      title: "Managing Director",
      company: "UrbanSpace Properties",
      avatar: "VS",
      rating: 5,
      quote: "Before working with Prime Vibe Event & Shoot, 60% of our real estate leads were uncontactable. Their pre-qualification lead funnel cut our CPL in half and delivered real buyers. Phenomenal growth partners.",
      metricBadge: "-48% CPL Reduction"
    }
  ],

  ceoProfile: {
    name: "Aditya Verma",
    title: "Founder & Chief Growth Officer",
    quote: "We built this agency around one core belief: marketing should create predictable, measurable business impact — not vanity impressions.",
    bio: "With over 8 years of direct experience scaling digital brands, managing ₹20 Cr+ in performance ad budgets across Meta & Google, Aditya leads a team of elite media buyers, creative strategists, and CRO engineers committed to ROI.",
    philosophy: ["Data-driven creative execution", "First-party conversion tracking", "Transparent revenue attribution"],
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },

  openPositions: [
    { role: "Senior Meta Ads Specialist", type: "Full-Time / Remote", department: "Performance" },
    { role: "Direct Response Video Editor / UGC Lead", type: "Full-Time / Remote", department: "Creative" },
    { role: "CRO & High-Converting Landing Page Designer", type: "Full-Time / Remote", department: "Design & UX" }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = agencyData;
}
