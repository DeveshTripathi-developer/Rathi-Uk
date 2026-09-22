export interface Advisor {
  id: string;
  name: string;
  role: string;
  title: string;
  experience: string;
  bioSummary: string;
  fullBio: string[];
  focusAreas: string[];
  quote: string;
}

export interface PersonaContent {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  metricsHighlight: string;
  deliverables: string[];
}

export const ADVISORS: Advisor[] = [
  {
    id: 'anand-rathi',
    name: 'Anand Rathi',
    role: 'Founder & Chairman',
    title: 'Founder & Chairman, Anand Rathi Group',
    experience: '50+ Years in Global Finance & Strategic Stewardship',
    bioSummary: 'Pioneered institutional financial services, corporate governance, and fiduciary advisory across international jurisdictions.',
    fullBio: [
      'Mr. Anand Rathi is a veteran chartered accountant and one of the most respected names in the financial services landscape. Over five decades, he has guided corporate conglomerates, family offices, and sovereign scale institutions.',
      'Prior to founding the group, he served as Senior President of Birla Group (Grasim Industries) and President of the Bombay Stock Exchange (BSE), spearheading fundamental modernization and computerized settlement mechanisms.',
      'Under his chairmanship, Anand Rathi Wealth has expanded to oversee over $11 billion in assets, establishing an uncompromising standard of fiduciary transparency and client-first ethics across the UK and international markets.',
    ],
    focusAreas: [
      'Multi-Generational Wealth Preservation',
      'Macroeconomic Fiduciary Governance',
      'Institutional Risk Frameworks',
    ],
    quote: 'True wealth management is not about predicting short-term market noise; it is about creating an unshakeable framework that guarantees family security across generations.',
  },
  {
    id: 'pradeep-gupta',
    name: 'Pradeep Gupta',
    role: 'Co-Founder & Vice Chairman',
    title: 'Co-Founder & Vice Chairman',
    experience: '35+ Years in Capital Markets & Cross-Border Wealth',
    bioSummary: 'Instrumental in establishing client-aligned advisory architecture and multi-asset wealth management platforms.',
    fullBio: [
      'Mr. Pradeep Gupta co-founded the Anand Rathi Group and has been pivotal in steering the enterprise into one of the preeminent private wealth institutions.',
      'A distinguished leader in Indian and global financial markets, he has championed transparent, fee-aligned advisory models that eliminate conflicts of interest between product distributors and families.',
      'His strategic vision has shaped the group’s international expansion, bringing regulated cross-border wealth solutions to non-resident families and UK-based entrepreneurs navigating complex global tax treaties.',
    ],
    focusAreas: [
      'Cross-Border Asset Structuring',
      'Capital Allocation Strategy',
      'HNW Family Office Governance',
    ],
    quote: 'Our client relationships are measured in decades, not quarterly cycles. We align our destiny completely with the families who entrust us with their legacy.',
  },
  {
    id: 'rakesh-rawal',
    name: 'Rakesh Rawal',
    role: 'Chief Executive Officer',
    title: 'Chief Executive Officer',
    experience: '30+ Years in Private Banking & Wealth Operations',
    bioSummary: 'Architect of the firm’s systematic wealth management philosophy and institutional operating discipline.',
    fullBio: [
      'Mr. Rakesh Rawal holds a B.Tech in Mechanical Engineering from IIT Kanpur and brings more than three decades of executive leadership in private banking and institutional wealth management.',
      'He previously served as Head of Private Wealth Management at Deutsche Bank India, managing high-net-worth portfolios with rigorous risk-budgeted allocations.',
      'Since taking leadership at Anand Rathi Wealth, he transformed the business into a research-driven, predictable wealth engine, pioneering holistic financial planning where mathematically sound strategies replace subjective market timing.',
    ],
    focusAreas: [
      'Systematic Asset Allocation',
      'Quantitative Risk Budgeting',
      'Executive Leadership & Governance',
    ],
    quote: 'Wealth management is a science of probability and asset allocation. When you strip out emotional biases and adhere strictly to data, superior outcomes follow.',
  },
  {
    id: 'feroze-azeez',
    name: 'Feroze Azeez',
    role: 'Joint Chief Executive Officer',
    title: 'Joint Chief Executive Officer',
    experience: '20+ Years in Quantitative Research & Wealth Strategy',
    bioSummary: 'Nationally recognized authority in financial product structuring, tax-efficient portfolios, and mathematical risk mitigation.',
    fullBio: [
      'Mr. Feroze Azeez is widely regarded as one of the foremost financial strategists in private wealth management, frequently cited in global financial press for his quantitative portfolio models.',
      'With an engineering background and extensive tenure in multi-asset structuring, he oversees the investment strategy and quantitative research team responsible for managing proprietary risk engines.',
      'He has pioneered mathematical portfolio evaluation models that evaluate risk-adjusted return ratios, structured downside protection strategies, and rigorous product evaluation frameworks.',
    ],
    focusAreas: [
      'Structured Risk Mitigation',
      'Tax-Optimised Allocation',
      'Quantitative Portfolio Architecture',
    ],
    quote: 'Our duty is to engineer clarity out of complexity. Every portfolio decision we make is backed by exhaustive historical data and measurable risk criteria.',
  },
];

export const PERSONAS: PersonaContent[] = [
  {
    id: 'hnw-families',
    title: 'High-Net-Worth Families',
    tagline: 'Multi-Generational Preservation & Stewardship',
    overview:
      'For established families seeking long-term preservation, inter-generational wealth transfer, and cohesive governance across liquid and illiquid estates.',
    challenges: [
      'Protecting capital against inflation and succession tax leakage',
      'Balancing income requirements with long-term real capital growth',
      'Harmonizing complex family interests across multiple generations',
    ],
    solutions: [
      'Discretionary risk-budgeted portfolio mandates',
      'Comprehensive UK estate planning and Inheritance Tax (IHT) mitigation strategy',
      'Customized family constitution and wealth governance frameworks',
    ],
    metricsHighlight: 'Average client family tenure: 14+ years',
    deliverables: [
      'Consolidated Balance Sheet Reporting',
      'Annual Succession & IHT Health Checks',
      'Discretionary Multi-Asset Mandates',
    ],
  },
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs & Business Owners',
    tagline: 'Pre & Post-Liquidity Planning for Business Founders',
    overview:
      'Designed for founders who have concentrated equity risk or are preparing for business sales, management buyouts, or significant liquidity events.',
    challenges: [
      'High asset concentration in single business operating entities',
      'Sudden liquidity transformation from enterprise equity to cash',
      'Navigating Business Asset Disposal Relief (BADR) and reinvestment',
    ],
    solutions: [
      'Pre-sale structuring and business asset disposal advisory alignment',
      'Systematic phased capital deployment avoiding market-entry timing risks',
      'Diversified institutional portfolios decoupled from the founder’s core industry',
    ],
    metricsHighlight: '£500k – £15M+ business sale transitions guided',
    deliverables: [
      'Liquidity Event Phasing Blueprint',
      'Diversified Liquid Endowment Structure',
      'Corporate Cash & Treasury Management',
    ],
  },
  {
    id: 'senior-partners',
    title: 'Senior Partners & Executives',
    tagline: 'Time-Poor Professionals in Law, Finance & Consulting',
    overview:
      'Engineered for City of London law partners, private equity partners, and corporate executives needing disciplined, conflict-free wealth orchestration.',
    challenges: [
      'Stringent personal trading compliance and regulatory restriction lists',
      'Lumpy compensation structures (deferred bonuses, carried interest, equity vestings)',
      'Severe time constraints to monitor personal balance sheets',
    ],
    solutions: [
      'Compliance-cleared discretionary portfolios adhering to firm-specific restriction lists',
      'Cash flow matching aligned to partner tax reserve dates and capital calls',
      'Proactive pension allowance tapering and lifetime allowance restructuring',
    ],
    metricsHighlight: 'Trusted by partners across Magic Circle & Big Four firms',
    deliverables: [
      'Annual Allowance & Tapering Audit',
      'Partner Capital Call Liquidity Buffer',
      'Automated Compliance & Reporting Feeds',
    ],
  },
  {
    id: 'cross-border-nri',
    title: 'Cross-Border & NRI Wealth',
    tagline: 'Seamless Global Wealth Across the UK, India & Global Hubs',
    overview:
      'Specialized advisory for Non-Resident Indians (NRIs) and global citizens managing dual-jurisdiction tax, remittance, and cross-border assets.',
    challenges: [
      'Navigating complex UK-India Double Taxation Avoidance Agreements (DTAA)',
      'Currency volatility between GBP, USD, and INR',
      'Fragmented overseas properties, NRE/NRO accounts, and repatriation rules',
    ],
    solutions: [
      'Unified cross-border balance sheet reporting across UK and Indian assets',
      'FCA-regulated UK stewardship coupled with deep ground expertise in India',
      'Tax-efficient repatriation and inheritance structuring under UK non-dom reforms',
    ],
    metricsHighlight: '30+ years institutional bridge between London & international hubs',
    deliverables: [
      'Dual-Jurisdiction Asset Mapping',
      'DTAA-Compliant Structuring Support',
      'Multi-Currency Risk Hedging Strategy',
    ],
  },
];
