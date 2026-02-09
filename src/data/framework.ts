import { Question, SAELevel } from '../types';

export const QUESTIONS: Question[] = [
  // L0 - Manual (2 questions)
  {
    id: 1,
    text: 'Does AI meaningfully impact your design workflow?',
    checklistText: 'AI doesn\'t meaningfully impact my workflow.',
    saeLevel: 0,
    inverted: true, // "No" = L0
    explanation:
      'You complete your design tasks — research, ideation, wireframing, prototyping, visual design, handoff — using traditional tools and methods. AI tools like ChatGPT or Midjourney aren\'t part of your regular process. You may have tried them casually, but they haven\'t changed how you actually get work done day-to-day. If someone took away all AI tools tomorrow, your workflow and output quality wouldn\'t change.',
    resources: [
      {
        title: 'Nielsen Norman Group: AI in UX — Current State',
        url: 'https://www.nngroup.com/articles/ai-ux/',
      },
      {
        title: 'Figma Blog: The State of Design',
        url: 'https://www.figma.com/blog/',
      },
    ],
  },
  {
    id: 2,
    text: 'Do you handle problem framing, solution building, and QA checks entirely manually?',
    checklistText: 'I do problem framing, solution building, and QA checks manually.',
    saeLevel: 0,
    explanation:
      'The three core phases of design work — understanding the problem (research, defining user needs), creating solutions (wireframes, prototypes, visual design), and checking quality (usability testing, design reviews, accessibility audits) — are all done by you, without AI assistance. You rely on your own judgment, team feedback, and established design processes. Your design process from start to finish doesn\'t include any step where you ask an AI to generate, evaluate, or refine something for you.',
    resources: [
      {
        title: 'Interaction Design Foundation: Design Thinking Process',
        url: 'https://www.interaction-design.org/literature/topics/design-thinking',
      },
      {
        title: 'IDEO Design Kit',
        url: 'https://www.designkit.org/',
      },
    ],
  },

  // L1 - AI-Assisted (2 questions)
  {
    id: 3,
    text: 'When using AI, do you drive every step while AI only suggests?',
    checklistText: 'AI suggests; but I drive every step.',
    saeLevel: 1,
    explanation:
      'You use AI tools — like ChatGPT for writing UX copy, Midjourney or DALL-E for generating visual concepts, or Figma\'s AI features for layout suggestions — but you\'re always the one deciding what to ask for, evaluating the output, and choosing what to keep. The AI is a brainstorming partner, not a co-pilot. You wouldn\'t ship anything AI-generated without significant manual revision. You can point to specific moments where you use AI, but you\'re always prompting, reviewing, editing, and making the final call. The AI never runs on its own for more than a single step.',
    resources: [
      {
        title: 'Anthropic: Prompt Engineering Guide',
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
      },
      {
        title: 'Prompt Engineering Guide (DAIR.AI)',
        url: 'https://www.promptingguide.ai/',
      },
      {
        title: 'IBM: The 2026 Guide to Prompt Engineering',
        url: 'https://www.ibm.com/think/prompt-engineering',
      },
      {
        title: 'Parallel HQ: Prompt Engineering for Designers',
        url: 'https://www.parallelhq.com/blog/prompt-engineering-designers',
      },
    ],
  },
  {
    id: 4,
    text: 'Do you heavily edit and manually validate all AI outputs?',
    checklistText: 'I heavily edit and validate manually.',
    saeLevel: 1,
    explanation:
      'When AI generates something — copy, images, layout ideas, user flow suggestions — you treat it as a rough draft that needs significant human refinement. You check AI-generated copy for tone and accuracy. You redraw or heavily modify AI-generated visuals. You validate AI suggestions against your design system, brand guidelines, and user research. Nothing goes to stakeholders or production without your thorough review. You spend as much or more time refining AI output as you would have spent creating it from scratch. The value of AI is in sparking ideas or getting a starting point, not in producing finished work.',
    resources: [
      {
        title: 'Nielsen Norman Group: AI-Generated Content Quality',
        url: 'https://www.nngroup.com/articles/ai-generated-content/',
      },
      {
        title: 'UX Raspberry: Prompt Engineering for Designers',
        url: 'https://medium.com/@uxraspberry/prompt-engineering-for-designers-a-practical-guide-what-i-learned-so-far-140d70879c7e',
      },
    ],
  },

  // L2 - Partially Automated (2 questions)
  {
    id: 5,
    text: 'Does AI complete bounded chunks of work from your instructions?',
    checklistText: 'AI completes bounded chunks from instructions.',
    saeLevel: 2,
    explanation:
      'You\'ve moved beyond using AI for individual suggestions (like a line of copy or a single image) to generating larger, self-contained pieces of work — a complete screen, a UI component, a small user flow, or a landing page. You use AI app builders like Lovable, Bolt.new, Vercel v0, Replit, or Framer to turn natural-language descriptions into working code or designs. The key word is "bounded" — you give the AI a clear, contained task with defined scope, not an open-ended project. You can describe a screen or component in plain English and get a working (or near-working) result that you then integrate into a larger project.',
    resources: [
      {
        title: 'Digital Applied: v0 vs Lovable vs Bolt — AI App Builder Comparison',
        url: 'https://www.digitalapplied.com/blog/v0-lovable-bolt-ai-app-builder-comparison',
      },
      {
        title: 'Taskade Blog: Best AI App Builders',
        url: 'https://www.taskade.com/blog/best-ai-app-builders',
      },
      {
        title: 'Lovable Documentation',
        url: 'https://docs.lovable.dev/',
      },
      {
        title: 'Vercel v0',
        url: 'https://v0.dev/',
      },
    ],
  },
  {
    id: 6,
    text: 'Do you reuse prompts/workflows and run standard quality checks?',
    checklistText: 'I reuse prompts/workflows and run standard checks.',
    saeLevel: 2,
    explanation:
      'You\'ve graduated from one-off experiments to having repeatable processes. You save prompts that work well and reuse them. You have a consistent QA checklist for evaluating AI-generated output before integrating it — checking for responsiveness, accessibility, design system compliance, code quality, or content accuracy. This is the shift from "trying AI" to "using AI systematically." You have a collection of saved prompts, templates, or workflows that you return to regularly. You have a defined process for checking AI output rather than eyeballing it each time.',
    resources: [
      {
        title: 'OpenAI: Prompt Engineering Guide',
        url: 'https://platform.openai.com/docs/guides/prompt-engineering',
      },
      {
        title: 'CodeSignal: Prompt Engineering Best Practices',
        url: 'https://codesignal.com/blog/prompt-engineering-best-practices-2025/',
      },
    ],
  },

  // L3 - Guided Automation (5 questions)
  {
    id: 7,
    text: 'Do you use an IDE (VS Code, Cursor, etc.) as your primary AI workspace?',
    checklistText: 'I use an IDE as my AI workspace.',
    saeLevel: 3,
    explanation:
      'An IDE (Integrated Development Environment) is a code editor with built-in tools for writing, testing, and debugging software. At this level, you\'ve moved beyond browser-based AI tools (like ChatGPT or Lovable) to working inside a code editor where AI is deeply integrated into the development workflow. Tools like Cursor (a fork of VS Code built around AI) or VS Code with GitHub Copilot let you write natural-language instructions alongside code, get context-aware suggestions based on your entire project, and make multi-file edits through conversation. You spend meaningful time in Cursor, VS Code with Copilot, or a similar AI-enhanced code editor — not just for writing code, but as your primary workspace for building and iterating on design-related work.',
    resources: [
      {
        title: 'Cursor',
        url: 'https://cursor.com/',
      },
      {
        title: 'VS Code: Getting Started with GitHub Copilot',
        url: 'https://code.visualstudio.com/docs/copilot/getting-started',
      },
      {
        title: 'Builder.io: Cursor vs GitHub Copilot',
        url: 'https://www.builder.io/blog/cursor-vs-github-copilot',
      },
      {
        title: 'DigitalOcean: GitHub Copilot vs Cursor',
        url: 'https://www.digitalocean.com/resources/articles/github-copilot-vs-cursor',
      },
    ],
  },
  {
    id: 8,
    text: 'Do you practice basic context engineering with rules and constraints?',
    checklistText: 'I do basic context engineering (rules/constraints).',
    saeLevel: 3,
    explanation:
      'Context engineering is the practice of designing what information an AI model sees when it processes your request — not just the prompt itself, but all the surrounding context that shapes the AI\'s understanding and output. At a basic level, this means providing the AI with rules, constraints, and reference material that help it produce better results. For example: giving it your design system tokens, brand voice guidelines, component naming conventions, or project requirements before asking it to generate something. Think of it this way: prompt engineering is about asking the right question; context engineering is about setting up the room so the AI understands the full situation before you even ask. You write .cursorrules files, custom instructions, or system prompts that define how AI should behave in your project.',
    resources: [
      {
        title: 'Anthropic: Effective Context Engineering for AI Agents',
        url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
      },
      {
        title: 'Phil Schmid: The New Skill in AI is Context Engineering',
        url: 'https://www.philschmid.de/context-engineering',
      },
      {
        title: 'FlowHunt: Context Engineering — The Definitive Guide',
        url: 'https://www.flowhunt.io/blog/context-engineering/',
      },
      {
        title: 'MIT Technology Review: From Vibe Coding to Context Engineering',
        url: 'https://www.technologyreview.com/2025/11/05/1127477/from-vibe-coding-to-context-engineering-2025-in-software-development/',
      },
    ],
  },
  {
    id: 9,
    text: 'Do you orchestrate multi-step AI workflows with checkpoints?',
    checklistText: 'I orchestrate multi-step runs with checkpoints.',
    saeLevel: 3,
    explanation:
      'Instead of giving AI one task at a time, you break complex work into a sequence of steps that the AI executes in order, with you reviewing the output at defined checkpoints before proceeding. For example: Step 1 — AI generates a component architecture based on requirements. You review. Step 2 — AI builds the components. You review. Step 3 — AI writes tests. You review. This is "orchestration" — you\'re conducting the AI through a planned workflow rather than issuing ad-hoc requests. You plan multi-step AI workflows in advance and have explicit review points where you evaluate output before the AI continues to the next step.',
    resources: [
      {
        title: 'Anthropic: Building Effective Agents',
        url: 'https://www.anthropic.com/research/building-effective-agents',
      },
      {
        title: 'LangChain Documentation',
        url: 'https://docs.langchain.com/',
      },
    ],
  },
  {
    id: 10,
    text: 'Do you run evaluations to catch AI failures early?',
    checklistText: 'I run evals to catch failures early.',
    saeLevel: 3,
    explanation:
      'Evals (evaluations) are systematic tests that measure whether AI output meets your quality standards. Just like you\'d test a website for bugs before launch, evals let you test AI-generated work against defined criteria before integrating it. This could be as simple as a checklist ("Does this component match our design system? Is the copy on-brand? Does it handle edge cases?") or as sophisticated as automated test suites that check AI output against expected results. The key shift is moving from "I\'ll review it and see if it looks right" (vibes) to "I have defined criteria and a repeatable process for measuring quality" (evals). You have written criteria for what "good" AI output looks like, and you systematically check output against those criteria rather than relying on gut feeling.',
    resources: [
      {
        title: 'Anthropic: Demystifying Evals for AI Agents',
        url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',
      },
      {
        title: 'Lenny\'s Newsletter: Beyond Vibe Checks — A PM\'s Complete Guide to Evals',
        url: 'https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete',
      },
      {
        title: 'Peter Yang: Curious Beginner\'s Guide to AI Evaluations',
        url: 'https://creatoreconomy.so/p/curious-beginners-guide-to-ai-evaluations',
      },
      {
        title: 'Vercel: An Introduction to Evals',
        url: 'https://vercel.com/kb/guide/an-introduction-to-evals',
      },
    ],
  },
  {
    id: 11,
    text: 'Do you use or write Skills, or use MCP tools?',
    checklistText: 'I use/write basic Skills or use MCP tools.',
    saeLevel: 3,
    explanation:
      'Skills are reusable, pre-packaged sets of instructions and capabilities that you give to an AI to perform specific types of work well. Think of them as "expertise modules" — instead of re-explaining your design system\'s rules every time, you create a Skill file that the AI reads before starting. MCP (Model Context Protocol) is an open standard created by Anthropic that lets AI tools connect to external data sources and services — like databases, file systems, design tools, or APIs. Think of MCP as a universal adapter (like USB-C for AI): instead of each AI tool needing custom integrations with every service, MCP provides a standard way for AI to access tools and data. You\'ve created reusable instruction files that AI reads before performing tasks, or you\'ve connected AI tools to external services through MCP servers.',
    resources: [
      {
        title: 'Anthropic: Introducing the Model Context Protocol',
        url: 'https://www.anthropic.com/news/model-context-protocol',
      },
      {
        title: 'Model Context Protocol: Getting Started',
        url: 'https://modelcontextprotocol.io/docs/getting-started/intro',
      },
      {
        title: 'Google Cloud: What is Model Context Protocol?',
        url: 'https://cloud.google.com/discover/what-is-model-context-protocol',
      },
      {
        title: 'Phil Schmid: Model Context Protocol — An Overview',
        url: 'https://www.philschmid.de/mcp-introduction',
      },
    ],
  },

  // L4 - Mostly Automated (5 questions)
  {
    id: 12,
    text: 'Do you practice advanced context engineering (modular, retrieval-based)?',
    checklistText: 'I do advanced context engineering (modular/retrieval).',
    saeLevel: 4,
    explanation:
      'At L3, you learned to provide AI with basic rules and constraints. At L4, your context engineering becomes modular (you have separate, composable context modules for different aspects of your project — design system rules, accessibility requirements, brand voice, component APIs, etc.) and uses retrieval (instead of cramming everything into one prompt, your system dynamically pulls in only the relevant context based on the current task). This is like the difference between giving someone a single instruction sheet versus building them a well-organized reference library with a smart search function. You maintain a library of context modules that can be mixed and matched. Your system automatically retrieves relevant documentation, examples, or constraints based on the task at hand, rather than you manually copying context into every prompt.',
    resources: [
      {
        title: 'Anthropic: Effective Context Engineering for AI Agents',
        url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
      },
      {
        title: 'Google Developers Blog: Architecting Efficient Context-Aware Multi-Agent Framework',
        url: 'https://developers.googleblog.com/architecting-efficient-context-aware-multi-agent-framework-for-production/',
      },
      {
        title: 'Gartner: Context Engineering',
        url: 'https://www.gartner.com/en/articles/context-engineering',
      },
    ],
  },
  {
    id: 13,
    text: 'Do you maintain tuned harnesses and evaluation suites?',
    checklistText: 'I maintain tuned harnesses and eval suites.',
    saeLevel: 4,
    explanation:
      'A harness (sometimes called a "test harness" or "eval runner") is the system that runs your AI workflows and evaluations. "Tuned" means you\'ve refined it over time based on results. An eval suite is a collection of evaluations that together cover the important quality dimensions of your work (accuracy, design consistency, accessibility, code quality, performance, etc.). At this level, you don\'t just run individual checks — you maintain a comprehensive, regularly-updated system for measuring AI output quality across multiple dimensions. You have a documented set of evaluations that run regularly (or automatically). You update them when you discover new failure modes. You can show quality metrics over time.',
    resources: [
      {
        title: 'Anthropic: Demystifying Evals for AI Agents',
        url: 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',
      },
      {
        title: 'Vercel: An Introduction to Evals',
        url: 'https://vercel.com/kb/guide/an-introduction-to-evals',
      },
      {
        title: 'Aman Khan: Beginner\'s Guide to AI Evals (Walkthrough)',
        url: 'https://amankhan1.substack.com/p/beginners-guide-to-ai-evals-walkthrough',
      },
      {
        title: 'OpenAI: Working with Evals',
        url: 'https://platform.openai.com/docs/guides/evals',
      },
    ],
  },
  {
    id: 14,
    text: 'Do you run or extend MCP servers and harden toolchains?',
    checklistText: 'I run/extend MCP servers and harden toolchains.',
    saeLevel: 4,
    explanation:
      'At L3, you used existing MCP tools that others built. At L4, you run your own MCP servers (hosting services that expose your specific data and tools to AI) and extend them (adding new capabilities). "Hardening toolchains" means making your AI development pipeline robust and reliable — handling errors gracefully, adding logging and monitoring, securing connections, and ensuring consistent behavior under different conditions. This is the difference between being a user of AI tools and being someone who builds and maintains the infrastructure that AI tools run on. You\'ve set up, configured, or written MCP servers. You\'ve built error handling, logging, and monitoring into your AI workflows. When something breaks, you can diagnose and fix it at the infrastructure level.',
    resources: [
      {
        title: 'Model Context Protocol: Building MCP Servers',
        url: 'https://modelcontextprotocol.io/docs/getting-started/server-developers',
      },
      {
        title: 'GitHub: MCP Servers Repository',
        url: 'https://github.com/modelcontextprotocol/servers',
      },
      {
        title: 'Stytch: Model Context Protocol — A Comprehensive Introduction',
        url: 'https://stytch.com/blog/model-context-protocol-introduction/',
      },
    ],
  },
  {
    id: 15,
    text: 'Do you operate a reusable Skill library?',
    checklistText: 'I operate a reusable Skill library.',
    saeLevel: 4,
    explanation:
      'You\'ve moved beyond writing one-off instruction files to maintaining a library of Skills — well-documented, tested, and versioned sets of AI instructions that can be reused across projects and by other people. This is the AI equivalent of maintaining a design system: just as a design system codifies patterns and components for consistent reuse, a Skill library codifies AI workflows and instructions for consistent, high-quality output. You have an organized collection of Skill files (or equivalent instruction sets) that others can use without your help. They\'re documented, version-controlled, and tested.',
    resources: [
      {
        title: 'Anthropic: Claude Code Best Practices',
        url: 'https://docs.anthropic.com/en/docs/claude-code/best-practices',
      },
      {
        title: 'Cursor Documentation: Rules',
        url: 'https://docs.cursor.com/context/rules',
      },
    ],
  },
  {
    id: 16,
    text: 'Can others run your AI systems without your involvement?',
    checklistText: 'Others run my system without me.',
    saeLevel: 4,
    explanation:
      'The ultimate test of a well-built system: other people on your team can execute AI-powered workflows using the infrastructure, Skills, evals, and toolchains you\'ve built — without needing you to be present. Your system is documented, reliable, and self-explanatory enough that it works as a platform others can operate independently. Team members regularly use AI workflows you\'ve created without asking you for help. The system is documented well enough that someone new could get started on their own.',
    resources: [
      {
        title: 'Atlassian: How to Write Technical Documentation',
        url: 'https://www.atlassian.com/work-management/documentation/technical-documentation',
      },
      {
        title: 'GitLab: Documentation Style Guide',
        url: 'https://docs.gitlab.com/ee/development/documentation/styleguide/',
      },
    ],
  },

  // L5 - Full Autonomy (3 questions)
  {
    id: 17,
    text: 'Does AI run most steps in your workflow by default?',
    checklistText: 'AI runs most steps by default.',
    saeLevel: 5,
    explanation:
      'The AI executes the majority of the design/development workflow autonomously — from interpreting requirements to generating solutions to running quality checks — without you directing each step. Your role shifts from "doing the work with AI assistance" to "defining what needs to be done and reviewing results." This is analogous to a self-driving car: you set the destination, but the vehicle handles navigation, steering, and obstacle avoidance. You define the goal and constraints, then the AI produces completed work with minimal intermediate direction from you. Most of your time is spent reviewing output rather than guiding process.',
  },
  {
    id: 18,
    text: 'Does AI self-check and self-correct in your workflow?',
    checklistText: 'AI self-checks and self-corrects.',
    saeLevel: 5,
    explanation:
      'The AI doesn\'t just generate output — it also evaluates its own work against quality criteria and fixes issues it finds, without you prompting it to do so. This is the AI equivalent of a senior designer who not only does the work but also reviews their own output, catches their own mistakes, and revises before presenting to stakeholders. Current AI systems can do this in limited ways (e.g., running tests on generated code and fixing failures), but comprehensive self-evaluation across design quality, accessibility, brand consistency, and user experience is still an emerging capability. The AI catches and fixes its own errors before presenting output to you. You rarely find issues that the AI\'s self-check should have caught.',
  },
  {
    id: 19,
    text: 'Do you primarily set goals, standards, and approval gates rather than execute?',
    checklistText: 'I set goals, standards, and approval gates.',
    saeLevel: 5,
    explanation:
      'Your role is purely strategic and supervisory. You define the goals (what needs to be built and why), standards (quality criteria, design principles, brand guidelines, accessibility requirements), and approval gates (the specific checkpoints where human review is required before work can proceed or ship). This is a leadership and governance role — you\'re designing the system within which AI operates rather than operating the system yourself. You spend your time defining success criteria, reviewing completed work at approval gates, and improving the system\'s standards — not directing individual tasks.',
    resources: [
      {
        title: 'Gartner: Context Engineering',
        url: 'https://www.gartner.com/en/articles/context-engineering',
      },
      {
        title: 'Thoughtworks: AI Evals',
        url: 'https://www.thoughtworks.com/en-us/insights/decoder/a/ai-evals',
      },
    ],
  },
];

// Get questions grouped by SAE level
export function getQuestionsByLevel(): Map<SAELevel, Question[]> {
  const grouped = new Map<SAELevel, Question[]>();

  for (const question of QUESTIONS) {
    const existing = grouped.get(question.saeLevel) || [];
    existing.push(question);
    grouped.set(question.saeLevel, existing);
  }

  return grouped;
}

// Get total questions per level
export const QUESTIONS_PER_LEVEL: Record<SAELevel, number> = {
  0: 2,
  1: 2,
  2: 2,
  3: 5,
  4: 5,
  5: 3,
};
