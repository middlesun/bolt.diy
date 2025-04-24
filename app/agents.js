export const agents = [
  {
    id: "landing",
    name: "Landing Page Agent",
    model: "openai/gpt-4",
    systemPrompt: `You're a pro landing page generator. Only respond in HTML+Tailwind.`,
  },
  {
    id: "banner",
    name: "Banner Designer",
    model: "openai/gpt-3.5-turbo",
    systemPrompt: `You generate creative HTML5 ad banners for tech startups.`,
  },
  {
    id: "default",
    name: "Default Assistant",
    model: "openai/gpt-4o",
    systemPrompt: `You are a helpful AI assistant.`,
  },
];
