export type DimensionId =
  | "strategy"
  | "data"
  | "people"
  | "process"
  | "governance";

export interface AnswerOption {
  label: string;
  value: number;
}

export interface Question {
  id: string;
  dimension: DimensionId;
  prompt: string;
  options: AnswerOption[];
}

export interface Dimension {
  id: DimensionId;
  name: string;
  description: string;
  lowRecommendations: string[];
  strongMessage: string;
}

export interface Tier {
  name: string;
  minScore: number;
  maxScore: number;
  headline: string;
  description: string;
}

export const dimensions: Dimension[] = [
  {
    id: "strategy",
    name: "Strategy & Leadership",
    description: "Whether AI is a deliberate priority or an afterthought.",
    lowRecommendations: [
      "Put one leader in charge of AI adoption — it doesn't need to be a full-time role, just a clear owner.",
      "Write down two or three business goals AI could realistically move (cost, speed, revenue), not a general 'do more AI' mandate.",
      "Set a simple way to check whether an AI effort worked — time saved, cost avoided, or a metric that moved.",
    ],
    strongMessage:
      "Leadership is engaged and AI efforts are tied to real business goals. Keep the accountability loop tight as you scale.",
  },
  {
    id: "data",
    name: "Data & Infrastructure",
    description: "The state of the information AI would actually run on.",
    lowRecommendations: [
      "Pick your three most important business records (customers, sales, operations) and get them into one place, even a shared spreadsheet.",
      "Assign someone to spot-check data quality on a schedule, not just when something breaks.",
      "Before buying any AI tool, confirm it can actually connect to the systems you already use.",
    ],
    strongMessage:
      "Your data is centralized and trustworthy enough to build on. That's the foundation most companies are still missing.",
  },
  {
    id: "people",
    name: "People & Skills",
    description: "How ready and willing your team is to actually use AI.",
    lowRecommendations: [
      "Run one short, hands-on session showing your team a real AI tool solving a real task you do every week.",
      "Name one or two 'curious early adopters' on the team and give them time to experiment and report back.",
      "Address fear directly — most resistance comes from unclear expectations about jobs, not the technology itself.",
    ],
    strongMessage:
      "Your team is comfortable with AI and willing to try new things. That willingness is worth more than any single tool.",
  },
  {
    id: "process",
    name: "Process & Workflow",
    description: "Whether your day-to-day operations are clear enough to improve.",
    lowRecommendations: [
      "Document one core process end-to-end — you can't improve what isn't written down anywhere.",
      "Pick a single, narrow, repetitive task and pilot one AI tool on just that task before going wider.",
      "Set a simple rollout habit: pilot, get feedback, adjust, then expand — rather than one big company-wide launch.",
    ],
    strongMessage:
      "Your processes are documented and you've got real pilots running. That makes AI adoption additive, not chaotic.",
  },
  {
    id: "governance",
    name: "Tools & Governance",
    description: "How you manage the risk side — privacy, security, and oversight.",
    lowRecommendations: [
      "Write a one-page AI use policy: what data can and can't be entered into AI tools, and who approves new ones.",
      "Before adopting a new AI tool, ask where your data goes and who can see it — get that in writing.",
      "Have someone periodically review AI outputs for errors or bias, especially anything customer-facing.",
    ],
    strongMessage:
      "You've got real guardrails in place. That risk management is what lets you move faster elsewhere with confidence.",
  },
];

export const questions: Question[] = [
  // Strategy & Leadership
  {
    id: "strategy-1",
    dimension: "strategy",
    prompt: "How clear is your organization's AI strategy?",
    options: [
      { label: "We haven't discussed AI as a company", value: 1 },
      { label: "Leadership talks about it informally, with no real plan", value: 2 },
      { label: "We have a written AI strategy or priority list", value: 3 },
      { label: "Our AI strategy is tied to specific goals and reviewed regularly", value: 4 },
    ],
  },
  {
    id: "strategy-2",
    dimension: "strategy",
    prompt: "Who owns AI initiatives at your company?",
    options: [
      { label: "No one — it's nobody's job", value: 1 },
      { label: "A few individuals experiment on their own", value: 2 },
      { label: "One leader or team is accountable for AI adoption", value: 3 },
      { label: "Ownership is embedded across leadership with clear accountability", value: 4 },
    ],
  },
  {
    id: "strategy-3",
    dimension: "strategy",
    prompt: "How do you measure the impact of your AI efforts?",
    options: [
      { label: "We don't track this at all", value: 1 },
      { label: "We have anecdotes but no real measurement", value: 2 },
      { label: "We track basic metrics like time saved or adoption", value: 3 },
      { label: "We tie AI initiatives directly to revenue, cost, or customer outcomes", value: 4 },
    ],
  },
  // Data & Infrastructure
  {
    id: "data-1",
    dimension: "data",
    prompt: "How organized is your business data?",
    options: [
      { label: "Scattered across spreadsheets, inboxes, and people's heads", value: 1 },
      { label: "Mostly organized but siloed across departments", value: 2 },
      { label: "Centralized in a few core systems", value: 3 },
      { label: "Clean, centralized, and easy to pull for analysis", value: 4 },
    ],
  },
  {
    id: "data-2",
    dimension: "data",
    prompt: "How confident are you in your data's accuracy?",
    options: [
      { label: "Not confident — we don't really check", value: 1 },
      { label: "Somewhat — we catch errors after the fact", value: 2 },
      { label: "Fairly confident, spot-checked regularly", value: 3 },
      { label: "High confidence — data quality is actively managed", value: 4 },
    ],
  },
  {
    id: "data-3",
    dimension: "data",
    prompt: "What AI or automation tools does your team use today?",
    options: [
      { label: "None", value: 1 },
      { label: "A few people use consumer AI tools informally", value: 2 },
      { label: "We've adopted one or two tools company-wide", value: 3 },
      { label: "We use a defined stack of tools integrated into our workflows", value: 4 },
    ],
  },
  // People & Skills
  {
    id: "people-1",
    dimension: "people",
    prompt: "How comfortable is your team with AI tools?",
    options: [
      { label: "Most people have never used one", value: 1 },
      { label: "A few curious early adopters", value: 2 },
      { label: "Most of the team uses AI tools regularly", value: 3 },
      { label: "AI fluency is expected and actively developed", value: 4 },
    ],
  },
  {
    id: "people-2",
    dimension: "people",
    prompt: "Have you provided any AI training to your team?",
    options: [
      { label: "No", value: 1 },
      { label: "Informal, ad hoc", value: 2 },
      { label: "Some structured training for select teams", value: 3 },
      { label: "Ongoing training available company-wide", value: 4 },
    ],
  },
  {
    id: "people-3",
    dimension: "people",
    prompt: "How does your team generally feel about AI?",
    options: [
      { label: "Mostly fear or resistance", value: 1 },
      { label: "Mixed — curious but cautious", value: 2 },
      { label: "Generally positive and willing to try", value: 3 },
      { label: "Engaged and actively looking for ways to use it", value: 4 },
    ],
  },
  // Process & Workflow
  {
    id: "process-1",
    dimension: "process",
    prompt: "How well-documented are your core business processes?",
    options: [
      { label: "Not documented — mostly tribal knowledge", value: 1 },
      { label: "Partially documented", value: 2 },
      { label: "Well documented for most processes", value: 3 },
      { label: "Documented and regularly reviewed", value: 4 },
    ],
  },
  {
    id: "process-2",
    dimension: "process",
    prompt: "Have you identified where AI could realistically help?",
    options: [
      { label: "No idea where to start", value: 1 },
      { label: "A few vague ideas", value: 2 },
      { label: "We've identified specific use cases", value: 3 },
      { label: "We're actively piloting AI in real workflows", value: 4 },
    ],
  },
  {
    id: "process-3",
    dimension: "process",
    prompt: "How do new tools or processes typically get adopted at your company?",
    options: [
      { label: "Slowly, with a lot of resistance", value: 1 },
      { label: "Depends heavily on who's pushing it", value: 2 },
      { label: "We have a reasonable process for rolling out change", value: 3 },
      { label: "We have a proven, repeatable process for adopting new tools", value: 4 },
    ],
  },
  // Tools & Governance
  {
    id: "governance-1",
    dimension: "governance",
    prompt: "Do you have any policy on AI use — data privacy, acceptable use?",
    options: [
      { label: "No policy at all", value: 1 },
      { label: "Informal, unwritten expectations", value: 2 },
      { label: "A basic written policy exists", value: 3 },
      { label: "A clear policy that's communicated and enforced", value: 4 },
    ],
  },
  {
    id: "governance-2",
    dimension: "governance",
    prompt: "How do you evaluate new AI tools before adopting them?",
    options: [
      { label: "We don't — people just start using things", value: 1 },
      { label: "Word of mouth or gut feel", value: 2 },
      { label: "Some evaluation of cost and fit before rollout", value: 3 },
      { label: "A formal evaluation process covering security, cost, and fit", value: 4 },
    ],
  },
  {
    id: "governance-3",
    dimension: "governance",
    prompt: "How prepared are you for the risks of AI — errors, bias, security?",
    options: [
      { label: "Haven't thought about it", value: 1 },
      { label: "Aware, but no real plan", value: 2 },
      { label: "Basic safeguards in place", value: 3 },
      { label: "A clear risk management approach, reviewed regularly", value: 4 },
    ],
  },
];

export const tiers: Tier[] = [
  {
    name: "Exploring",
    minScore: 15,
    maxScore: 26,
    headline: "You're at the starting line — and that's a fine place to be.",
    description:
      "AI isn't yet a deliberate part of how your business runs. That's normal, and it's also an opportunity: the businesses that win with AI aren't the ones who moved first, they're the ones who built a real foundation before they scaled. Start small and specific rather than trying to do everything at once.",
  },
  {
    name: "Emerging",
    minScore: 27,
    maxScore: 38,
    headline: "You've started, but it's scattered rather than deliberate.",
    description:
      "Pieces are in place — some tools, some enthusiasm, maybe a pilot or two — but there's no clear thread connecting them to your business goals. This is the stage where a little structure goes a long way.",
  },
  {
    name: "Advancing",
    minScore: 39,
    maxScore: 50,
    headline: "You're ahead of most businesses your size.",
    description:
      "You've got real infrastructure, real usage, and real accountability in most areas. The next gains come from tightening the weakest of your five areas rather than adding more tools.",
  },
  {
    name: "Leading",
    minScore: 51,
    maxScore: 60,
    headline: "AI is a genuine operating advantage for you.",
    description:
      "Strategy, data, people, process, and governance are all pulling in the same direction. The work now is maintaining that discipline as you scale, and staying honest about where the next weak point will show up.",
  },
];

export function getTierForScore(score: number): Tier {
  return (
    tiers.find((tier) => score >= tier.minScore && score <= tier.maxScore) ??
    tiers[0]
  );
}
