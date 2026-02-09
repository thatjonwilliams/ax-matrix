# E-P-I-A-S × SAE Self-Assessment: Annotated Checklist

## How to Use This Document

Each checklist item from John Maeda's E-P-I-A-S × SAE framework is listed below with two additions: a plain-language explanation to help you understand what the item actually means in practice, and a curated set of resources where you can learn more. The goal is to help you answer each item honestly — and build knowledge as you go.

---

## SAE L0: Manual 🚗💨

> *"I do my design work without AI; I'm open to using the latest tool, but in general I prefer doing things as manually as possible."*

### ☐ AI doesn't meaningfully impact my workflow.

**What this means:** You complete your design tasks — research, ideation, wireframing, prototyping, visual design, handoff — using traditional tools and methods. AI tools like ChatGPT or Midjourney aren't part of your regular process. You may have tried them casually, but they haven't changed how you actually get work done day-to-day.

**How to tell if this is you:** If someone took away all AI tools tomorrow, your workflow and output quality wouldn't change.

**Resources:**
- [Nielsen Norman Group: AI in UX — Current State](https://www.nngroup.com/articles/ai-ux/) — Overview of where AI fits (and doesn't yet fit) in design practice
- [Figma Blog: The State of Design](https://www.figma.com/blog/) — Figma's perspective on how design workflows are evolving

---

### ☐ I do problem framing, solution building, and QA checks manually.

**What this means:** The three core phases of design work — understanding the problem (research, defining user needs), creating solutions (wireframes, prototypes, visual design), and checking quality (usability testing, design reviews, accessibility audits) — are all done by you, without AI assistance. You rely on your own judgment, team feedback, and established design processes.

**How to tell if this is you:** Your design process from start to finish doesn't include any step where you ask an AI to generate, evaluate, or refine something for you.

**Resources:**
- [Interaction Design Foundation: Design Thinking Process](https://www.interaction-design.org/literature/topics/design-thinking) — Foundation for understanding the manual design workflow
- [IDEO Design Kit](https://www.designkit.org/) — Human-centered design methods and toolkit

---

## SAE L1: AI-Assisted 🚗➕

> *"I use tools to generate ideas, copy, or visuals, but I direct each step and manually verify and refine everything."*

### ☐ AI suggests; but I drive every step.

**What this means:** You use AI tools — like ChatGPT for writing UX copy, Midjourney or DALL-E for generating visual concepts, or Figma's AI features for layout suggestions — but you're always the one deciding what to ask for, evaluating the output, and choosing what to keep. The AI is a brainstorming partner, not a co-pilot. You wouldn't ship anything AI-generated without significant manual revision.

**How to tell if this is you:** You can point to specific moments where you use AI, but you're always prompting, reviewing, editing, and making the final call. The AI never runs on its own for more than a single step.

**Resources:**
- [Anthropic: Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Anthropic's official guide to getting better results from Claude
- [Prompt Engineering Guide (DAIR.AI)](https://www.promptingguide.ai/) — Comprehensive open-source guide covering prompt techniques from basic to advanced
- [IBM: The 2026 Guide to Prompt Engineering](https://www.ibm.com/think/prompt-engineering) — Structured learning path from foundational concepts to advanced strategies
- [Parallel HQ: Prompt Engineering for Designers](https://www.parallelhq.com/blog/prompt-engineering-designers) — Designer-specific guide covering frameworks like COSTAR and how prompting fits into design workflows

---

### ☐ I heavily edit and validate manually.

**What this means:** When AI generates something — copy, images, layout ideas, user flow suggestions — you treat it as a rough draft that needs significant human refinement. You check AI-generated copy for tone and accuracy. You redraw or heavily modify AI-generated visuals. You validate AI suggestions against your design system, brand guidelines, and user research. Nothing goes to stakeholders or production without your thorough review.

**How to tell if this is you:** You spend as much or more time refining AI output as you would have spent creating it from scratch. The value of AI is in sparking ideas or getting a starting point, not in producing finished work.

**Resources:**
- [Nielsen Norman Group: AI-Generated Content Quality](https://www.nngroup.com/articles/ai-generated-content/) — Research on when AI output needs human intervention
- [UX Raspberry: Prompt Engineering for Designers (Medium)](https://medium.com/@uxraspberry/prompt-engineering-for-designers-a-practical-guide-what-i-learned-so-far-140d70879c7e) — A practical reflection on what works (and what doesn't) when designers use AI tools, including tips on validating and refining output

---

## SAE L2: Partially Automated 🚗🧠

> *"I use app-builders to generate bounded chunks (screens, components, small flows) from clear instructions, then I manually integrate and QA the results."*

### ☐ AI completes bounded chunks from instructions.

**What this means:** You've moved beyond using AI for individual suggestions (like a line of copy or a single image) to generating larger, self-contained pieces of work — a complete screen, a UI component, a small user flow, or a landing page. You use **AI app builders** like Lovable, Bolt.new, Vercel v0, Replit, or Framer to turn natural-language descriptions into working code or designs. The key word is "bounded" — you give the AI a clear, contained task with defined scope, not an open-ended project.

**How to tell if this is you:** You can describe a screen or component in plain English and get a working (or near-working) result from an AI tool that you then integrate into a larger project.

**Tools to know about:**
- **Lovable** — Generates full-stack web apps from natural language prompts. Strong for rapid MVPs and prototypes with clean React/TypeScript output. Integrates with Supabase for backend functionality.
- **Bolt.new** — Browser-based development environment by StackBlitz. Generates full-stack apps with instant preview using WebContainer technology. No local setup required.
- **Vercel v0** — Generates production-quality React components styled with Tailwind CSS. Best for UI components and frontend work within the Next.js/Vercel ecosystem.
- **Replit** — Cloud-based IDE with AI agent capabilities. Supports 50+ languages with built-in hosting, deployment, and collaboration features.
- **Framer** — Design-to-code platform with AI features for building marketing sites and landing pages.

**Resources:**
- [Digital Applied: v0 vs Lovable vs Bolt — AI App Builder Comparison](https://www.digitalapplied.com/blog/v0-lovable-bolt-ai-app-builder-comparison) — Balanced comparison of the three most popular platforms with use-case guidance
- [Taskade Blog: 17 Best AI App Builders in 2026](https://www.taskade.com/blog/best-ai-app-builders) — Comprehensive overview of the AI app builder landscape
- [Lovable Documentation](https://docs.lovable.dev/) — Getting started with Lovable
- [Bolt.new](https://bolt.new/) — Try Bolt directly in your browser
- [Vercel v0](https://v0.dev/) — Try generating React components from prompts

---

### ☐ I reuse prompts/workflows and run standard checks.

**What this means:** You've graduated from one-off experiments to having **repeatable processes**. You save prompts that work well and reuse them. You have a consistent QA checklist for evaluating AI-generated output before integrating it — checking for responsiveness, accessibility, design system compliance, code quality, or content accuracy. This is the shift from "trying AI" to "using AI systematically."

**How to tell if this is you:** You have a collection of saved prompts, templates, or workflows that you return to regularly. You have a defined process for checking AI output rather than eyeballing it each time.

**Resources:**
- [OpenAI: Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — OpenAI's official guide, including sections on building reusable prompt templates and few-shot learning
- [CodeSignal: Prompt Engineering Best Practices 2025](https://codesignal.com/blog/prompt-engineering-best-practices-2025/) — Covers prompt libraries, testing platforms, and prompt chaining for building repeatable workflows

---

## SAE L3: Guided Automation 🚗😴

> *"In my IDE, I run orchestrated, multi-step workflows with basic context engineering, using subagents/skills/MCP tools to generate large pieces of work, with human-led QA and eval checkpoints."*

### ☐ I use an IDE as my AI workspace.

**What this means:** An **IDE (Integrated Development Environment)** is a code editor with built-in tools for writing, testing, and debugging software. At this level, you've moved beyond browser-based AI tools (like ChatGPT or Lovable) to working inside a code editor where AI is deeply integrated into the development workflow. Tools like **Cursor** (a fork of VS Code built around AI) or **VS Code with GitHub Copilot** let you write natural-language instructions alongside code, get context-aware suggestions based on your entire project, and make multi-file edits through conversation. For designers, this is the shift from "using AI tools" to "working in an AI-native environment."

**How to tell if this is you:** You spend meaningful time in Cursor, VS Code with Copilot, or a similar AI-enhanced code editor — not just for writing code, but as your primary workspace for building and iterating on design-related work (prototypes, design systems, component libraries).

**Tools to know about:**
- **Cursor** — AI-native code editor (fork of VS Code). Offers deep AI integration with project-wide context awareness, multi-file editing, and chat. Supports multiple AI models (Claude, GPT, Gemini, etc.).
- **VS Code with GitHub Copilot** — Microsoft's code editor with GitHub's AI assistant. Offers inline code suggestions, chat, agent mode for autonomous tasks, and custom instructions.
- **Windsurf** — AI code editor with automatic context awareness and beginner-friendly UI.

**Resources:**
- [Cursor](https://cursor.com/) — Download and explore the AI-native IDE
- [VS Code: Getting Started with GitHub Copilot](https://code.visualstudio.com/docs/copilot/getting-started) — Official hands-on tutorial for setting up and using Copilot
- [Builder.io: Cursor vs GitHub Copilot](https://www.builder.io/blog/cursor-vs-github-copilot) — Detailed feature comparison to help you choose
- [DigitalOcean: GitHub Copilot vs Cursor](https://www.digitalocean.com/resources/articles/github-copilot-vs-cursor) — Practical comparison with real-world workflow examples

---

### ☐ I do basic context engineering (rules/constraints).

**What this means:** **Context engineering** is the practice of designing what information an AI model sees when it processes your request — not just the prompt itself, but all the surrounding context that shapes the AI's understanding and output. At a basic level, this means providing the AI with rules, constraints, and reference material that help it produce better results. For example: giving it your design system tokens, brand voice guidelines, component naming conventions, or project requirements before asking it to generate something.

Think of it this way: prompt engineering is about *asking the right question*; context engineering is about *setting up the room so the AI understands the full situation before you even ask*.

**How to tell if this is you:** You write `.cursorrules` files, custom instructions, or system prompts that define how AI should behave in your project. You provide reference documents, style guides, or constraints alongside your requests rather than relying on the AI's general knowledge.

**Resources:**
- [Anthropic: Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Anthropic's authoritative guide on how to structure context for optimal AI performance
- [Phil Schmid: The New Skill in AI is Not Prompting, It's Context Engineering](https://www.philschmid.de/context-engineering) — Clear explanation of why context engineering matters more than prompt engineering for real results
- [FlowHunt: Context Engineering — The Definitive 2025 Guide](https://www.flowhunt.io/blog/context-engineering/) — Comprehensive guide covering core principles, strategies, and the difference between prompt and context engineering
- [MIT Technology Review: From Vibe Coding to Context Engineering](https://www.technologyreview.com/2025/11/05/1127477/from-vibe-coding-to-context-engineering-2025-in-software-development/) — How the industry shifted from casual AI use to systematic context management

---

### ☐ I orchestrate multi-step runs with checkpoints.

**What this means:** Instead of giving AI one task at a time, you break complex work into a **sequence of steps** that the AI executes in order, with you reviewing the output at defined checkpoints before proceeding. For example: Step 1 — AI generates a component architecture based on requirements. *You review.* Step 2 — AI builds the components. *You review.* Step 3 — AI writes tests. *You review.* This is "orchestration" — you're conducting the AI through a planned workflow rather than issuing ad-hoc requests.

**How to tell if this is you:** You plan multi-step AI workflows in advance and have explicit review points where you evaluate output before the AI continues to the next step.

**Resources:**
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) — Anthropic's guide to designing multi-step agent workflows with human oversight
- [LangChain Documentation](https://docs.langchain.com/) — Framework for building orchestrated AI workflows with chaining and checkpoints

---

### ☐ I run evals to catch failures early.

**What this means:** **Evals (evaluations)** are systematic tests that measure whether AI output meets your quality standards. Just like you'd test a website for bugs before launch, evals let you test AI-generated work against defined criteria *before* integrating it. This could be as simple as a checklist ("Does this component match our design system? Is the copy on-brand? Does it handle edge cases?") or as sophisticated as automated test suites that check AI output against expected results. The key shift is moving from "I'll review it and see if it looks right" (vibes) to "I have defined criteria and a repeatable process for measuring quality" (evals).

**How to tell if this is you:** You have written criteria for what "good" AI output looks like, and you systematically check output against those criteria rather than relying on gut feeling.

**Resources:**
- [Anthropic: Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — Anthropic's practical guide to building evaluations, from simple single-turn tests to complex multi-turn agent assessments
- [Lenny's Newsletter: Beyond Vibe Checks — A PM's Complete Guide to Evals](https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete) — Accessible introduction to evals for product people, with a driving test analogy
- [Peter Yang: Curious Beginner's Guide to AI Evaluations](https://creatoreconomy.so/p/curious-beginners-guide-to-ai-evaluations) — Step-by-step walkthrough of building evals with a real example (ON running shoes customer support)
- [Thoughtworks: AI Evals](https://www.thoughtworks.com/en-us/insights/decoder/a/ai-evals) — Business-oriented overview of what evals are, why they matter, and common challenges
- [Vercel: An Introduction to Evals](https://vercel.com/kb/guide/an-introduction-to-evals) — Developer-friendly guide covering datasets, runners, and scorers

---

### ☐ I use/write basic Skills or use MCP tools.

**What this means:** This checklist item covers two related concepts:

**Skills** are reusable, pre-packaged sets of instructions and capabilities that you give to an AI to perform specific types of work well. Think of them as "expertise modules" — instead of re-explaining your design system's rules every time, you create a Skill file that the AI reads before starting. Claude Code, for example, uses SKILL.md files that contain best practices for specific tasks (creating presentations, generating documents, etc.).

**MCP (Model Context Protocol)** is an open standard created by Anthropic that lets AI tools connect to external data sources and services — like databases, file systems, design tools, or APIs. Think of MCP as a universal adapter (like USB-C for AI): instead of each AI tool needing custom integrations with every service, MCP provides a standard way for AI to access tools and data. For designers, this could mean connecting an AI assistant to your Figma files, your design token repository, or your team's Notion workspace.

**How to tell if this is you:** You've created reusable instruction files that AI reads before performing tasks, or you've connected AI tools to external services through MCP servers (e.g., connecting Cursor to a Figma MCP server, or using an MCP tool to give AI access to your component library).

**Resources:**
- [Anthropic: Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) — Anthropic's original announcement explaining why MCP exists and how it works
- [Model Context Protocol: Getting Started](https://modelcontextprotocol.io/docs/getting-started/intro) — Official MCP documentation with the "USB-C for AI" analogy
- [Google Cloud: What is Model Context Protocol?](https://cloud.google.com/discover/what-is-model-context-protocol) — Clear explanation of MCP's architecture with practical examples
- [Phil Schmid: Model Context Protocol — An Overview](https://www.philschmid.de/mcp-introduction) — Developer-friendly overview covering the why, what, and how of MCP
- [Composio: What is MCP? Explained](https://composio.dev/blog/what-is-model-context-protocol-mcp-explained) — Detailed breakdown of MCP architecture, components, and practical use cases
- [Wikipedia: Model Context Protocol](https://en.wikipedia.org/wiki/Model_Context_Protocol) — Neutral overview with adoption history and industry context

---

## SAE L4: Mostly Automated 🚕🤖

> *"In my IDE/ADE/CLI, I operate advanced context, tuned harnesses, and eval suites, using subagents/skills/MCP tools to generate, refine, and QA features end-to-end, with humans handling exceptions rather than execution."*

### ☐ I do advanced context engineering (modular/retrieval).

**What this means:** At L3, you learned to provide AI with basic rules and constraints. At L4, your context engineering becomes **modular** (you have separate, composable context modules for different aspects of your project — design system rules, accessibility requirements, brand voice, component APIs, etc.) and uses **retrieval** (instead of cramming everything into one prompt, your system dynamically pulls in only the relevant context based on the current task). This is like the difference between giving someone a single instruction sheet versus building them a well-organized reference library with a smart search function.

**How to tell if this is you:** You maintain a library of context modules that can be mixed and matched. Your system automatically retrieves relevant documentation, examples, or constraints based on the task at hand, rather than you manually copying context into every prompt.

**Resources:**
- [Anthropic: Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — Covers advanced strategies including tool design, context compaction, and multi-agent context management
- [Google Developers Blog: Architecting Efficient Context-Aware Multi-Agent Framework](https://developers.googleblog.com/architecting-efficient-context-aware-multi-agent-framework-for-production/) — Deep dive into tiered context storage, compiled views, and pipeline processing for production-grade AI systems
- [Gartner: Context Engineering](https://www.gartner.com/en/articles/context-engineering) — Enterprise perspective on making context engineering a strategic capability

---

### ☐ I maintain tuned harnesses and eval suites.

**What this means:** A **harness** (sometimes called a "test harness" or "eval runner") is the system that runs your AI workflows and evaluations. "Tuned" means you've refined it over time based on results. An **eval suite** is a collection of evaluations that together cover the important quality dimensions of your work (accuracy, design consistency, accessibility, code quality, performance, etc.). At this level, you don't just run individual checks — you maintain a comprehensive, regularly-updated system for measuring AI output quality across multiple dimensions.

**How to tell if this is you:** You have a documented set of evaluations that run regularly (or automatically). You update them when you discover new failure modes. You can show quality metrics over time.

**Resources:**
- [Anthropic: Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — Includes guidance on eval infrastructure, CI/CD integration, and maintenance practices
- [Vercel: An Introduction to Evals](https://vercel.com/kb/guide/an-introduction-to-evals) — Covers the runner/harness concept, model-agnostic design, and scorer implementation
- [Aman Khan: Beginner's Guide to AI Evals (Walkthrough)](https://amankhan1.substack.com/p/beginners-guide-to-ai-evals-walkthrough) — Practical walkthrough showing how evals evolve in a real product, including calibration drift and continuous monitoring
- [OpenAI: Working with Evals](https://platform.openai.com/docs/guides/evals) — Technical guide for building eval pipelines with data sources, graders, and test configurations

---

### ☐ I run/extend MCP servers and harden toolchains.

**What this means:** At L3, you used existing MCP tools that others built. At L4, you **run your own MCP servers** (hosting services that expose your specific data and tools to AI) and **extend** them (adding new capabilities). "Hardening toolchains" means making your AI development pipeline robust and reliable — handling errors gracefully, adding logging and monitoring, securing connections, and ensuring consistent behavior under different conditions. This is the difference between being a user of AI tools and being someone who builds and maintains the infrastructure that AI tools run on.

**How to tell if this is you:** You've set up, configured, or written MCP servers. You've built error handling, logging, and monitoring into your AI workflows. When something breaks, you can diagnose and fix it at the infrastructure level.

**Resources:**
- [Model Context Protocol: Building MCP Servers](https://modelcontextprotocol.io/docs/getting-started/server-developers) — Official guide for building your own MCP servers
- [GitHub: MCP Servers Repository](https://github.com/modelcontextprotocol/servers) — Reference implementations of MCP servers for various services
- [Stytch: Model Context Protocol — A Comprehensive Introduction](https://stytch.com/blog/model-context-protocol-introduction/) — Covers server development, security considerations, and production deployment

---

### ☐ I operate a reusable Skill library.

**What this means:** You've moved beyond writing one-off instruction files to maintaining a **library of Skills** — well-documented, tested, and versioned sets of AI instructions that can be reused across projects and by other people. This is the AI equivalent of maintaining a design system: just as a design system codifies patterns and components for consistent reuse, a Skill library codifies AI workflows and instructions for consistent, high-quality output.

**How to tell if this is you:** You have a organized collection of Skill files (or equivalent instruction sets) that others can use without your help. They're documented, version-controlled, and tested.

**Resources:**
- [Anthropic: Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices) — Guidance on structuring reusable instructions and workflows for Claude Code
- [Cursor Documentation: Rules](https://docs.cursor.com/context/rules) — How to create and manage reusable rules and context in Cursor

---

### ☐ Others run my system without me.

**What this means:** The ultimate test of a well-built system: other people on your team can execute AI-powered workflows using the infrastructure, Skills, evals, and toolchains you've built — without needing you to be present. Your system is documented, reliable, and self-explanatory enough that it works as a platform others can operate independently.

**How to tell if this is you:** Team members regularly use AI workflows you've created without asking you for help. The system is documented well enough that someone new could get started on their own.

**Resources:**
- This is more about organizational design and documentation practices than any specific tool. Good references include:
- [Atlassian: How to Write Technical Documentation](https://www.atlassian.com/work-management/documentation/technical-documentation) — Principles for writing documentation that enables others to use your systems independently
- [GitLab: Documentation Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/) — Example of how to document tools and processes for team use

---

## SAE L5: Full Autonomy 🚗✨

> *"AI runs most of the workflow by default and self-corrects; I set the goals, constraints, quality bar, and approval gates, then review outcomes and exceptions."*

*Note: SAE L5 is aspirational — no production system fully operates at this level yet. These checklist items describe a future state.*

### ☐ AI runs most steps by default.

**What this means:** The AI executes the majority of the design/development workflow autonomously — from interpreting requirements to generating solutions to running quality checks — without you directing each step. Your role shifts from "doing the work with AI assistance" to "defining what needs to be done and reviewing results." This is analogous to a self-driving car: you set the destination, but the vehicle handles navigation, steering, and obstacle avoidance.

**How to tell if this is you:** You define the goal and constraints, then the AI produces completed work with minimal intermediate direction from you. Most of your time is spent reviewing output rather than guiding process.

---

### ☐ AI self-checks and self-corrects.

**What this means:** The AI doesn't just generate output — it also evaluates its own work against quality criteria and fixes issues it finds, without you prompting it to do so. This is the AI equivalent of a senior designer who not only does the work but also reviews their own output, catches their own mistakes, and revises before presenting to stakeholders. Current AI systems can do this in limited ways (e.g., running tests on generated code and fixing failures), but comprehensive self-evaluation across design quality, accessibility, brand consistency, and user experience is still an emerging capability.

**How to tell if this is you:** The AI catches and fixes its own errors before presenting output to you. You rarely find issues that the AI's self-check should have caught.

---

### ☐ I set goals, standards, and approval gates.

**What this means:** Your role is purely strategic and supervisory. You define the **goals** (what needs to be built and why), **standards** (quality criteria, design principles, brand guidelines, accessibility requirements), and **approval gates** (the specific checkpoints where human review is required before work can proceed or ship). This is a leadership and governance role — you're designing the system within which AI operates rather than operating the system yourself.

**How to tell if this is you:** You spend your time defining success criteria, reviewing completed work at approval gates, and improving the system's standards — not directing individual tasks.

**Resources:**
- [Gartner: Context Engineering](https://www.gartner.com/en/articles/context-engineering) — Covers enterprise AI governance, including the concept of appointing context engineering leads and building organizational accountability
- [Thoughtworks: AI Evals](https://www.thoughtworks.com/en-us/insights/decoder/a/ai-evals) — Discusses AI governance in the context of evaluations, including quality assurance for autonomous AI systems

---

## Quick Reference: Key Terms Glossary

| Term | Plain-Language Definition |
|------|--------------------------|
| **Prompt Engineering** | The practice of writing clear, effective instructions for AI models to get the results you want. Like learning to ask the right questions. |
| **Context Engineering** | Designing the full environment of information an AI sees — not just your prompt, but also reference documents, rules, constraints, examples, and tools. Like setting up a well-organized workspace before asking someone to do a job. |
| **IDE (Integrated Development Environment)** | A code editor with built-in tools for writing, testing, and debugging. Examples: VS Code, Cursor, Windsurf. |
| **MCP (Model Context Protocol)** | An open standard (by Anthropic) that lets AI tools connect to external data and services through a universal interface. Like USB-C for AI. |
| **Evals (Evaluations)** | Systematic tests that measure whether AI output meets your quality standards. Like QA testing, but for AI-generated work. |
| **Skills** | Reusable instruction files that give AI specific expertise for certain tasks. Like templates that encode best practices. |
| **Harness** | The system that runs your AI workflows and evaluations. The "test runner" for AI output. |
| **Bounded Chunks** | Self-contained pieces of work with clear scope — a screen, a component, a flow — that AI can generate from a clear description. |
| **Subagents** | Specialized AI agents that handle specific subtasks within a larger workflow, coordinated by a primary agent or human. |
| **App Builders** | Tools like Lovable, Bolt.new, and Replit that generate working applications from natural-language descriptions. |
| **Approval Gates** | Defined checkpoints in a workflow where human review is required before proceeding. |

---

*This annotated checklist is a companion to the [E-P-I-A-S × SAE Framework](https://schedule.sxsw.com/2026/events/PP1148536) by John Maeda, part of the Design in Tech Report 2026. Resource links verified as of February 2026.*
