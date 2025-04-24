export const agents = [
  {
    id: "landingPage",
    name: "Landing Page Builder",
    model: "openai/gpt-4o",
    systemPrompt: `You're a professional landing page copywriter and designer. Respond with HTML/CSS templates for startup websites.`,
  },
  {
    id: "banner",
    name: "Banner Designer",
    model: "openai/gpt-4-turbo",
    systemPrompt: `You generate HTML5 ad banner ideas. Use bold colors and minimal copy. Output CSS if required.`,
  },
];
