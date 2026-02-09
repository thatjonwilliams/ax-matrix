export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Prompt Engineering',
    definition:
      'The practice of writing clear, effective instructions for AI models to get the results you want. Like learning to ask the right questions.',
  },
  {
    term: 'Context Engineering',
    definition:
      "Designing the full environment of information an AI sees — not just your prompt, but also reference documents, rules, constraints, examples, and tools. Like setting up a well-organized workspace before asking someone to do a job.",
  },
  {
    term: 'IDE (Integrated Development Environment)',
    definition:
      'A code editor with built-in tools for writing, testing, and debugging. Examples: VS Code, Cursor, Windsurf.',
  },
  {
    term: 'MCP (Model Context Protocol)',
    definition:
      'An open standard (by Anthropic) that lets AI tools connect to external data and services through a universal interface. Like USB-C for AI.',
  },
  {
    term: 'Evals (Evaluations)',
    definition:
      'Systematic tests that measure whether AI output meets your quality standards. Like QA testing, but for AI-generated work.',
  },
  {
    term: 'Skills',
    definition:
      'Reusable instruction files that give AI specific expertise for certain tasks. Like templates that encode best practices.',
  },
  {
    term: 'Harness',
    definition:
      'The system that runs your AI workflows and evaluations. The "test runner" for AI output.',
  },
  {
    term: 'Bounded Chunks',
    definition:
      'Self-contained pieces of work with clear scope — a screen, a component, a flow — that AI can generate from a clear description.',
  },
  {
    term: 'Subagents',
    definition:
      'Specialized AI agents that handle specific subtasks within a larger workflow, coordinated by a primary agent or human.',
  },
  {
    term: 'App Builders',
    definition:
      'Tools like Lovable, Bolt.new, and Replit that generate working applications from natural-language descriptions.',
  },
  {
    term: 'Approval Gates',
    definition:
      'Defined checkpoints in a workflow where human review is required before proceeding.',
  },
];
