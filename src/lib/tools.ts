import {
  siClaude,
  siCursor,
  siFigma,
  siGhostty,
  siGithub,
  siGithubactions,
  siInkscape,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons"

export type Tool = {
  title: string
  label: string
  icon?: SimpleIcon
}

// ChatGPT, Grok, and Codex have no Simple Icons entry in v16. They render as text chips.
export const TOOLS: Tool[] = [
  { title: "ChatGPT", label: "ChatGPT" },
  { title: "Grok", label: "Grok" },
  { title: "Inkscape", label: "Inkscape", icon: siInkscape },
  { title: "Codex (OpenAI)", label: "Codex" },
  { title: "Ghostty", label: "Ghostty", icon: siGhostty },
  { title: "Figma", label: "Figma", icon: siFigma },
  { title: "Next.js", label: "Next.js", icon: siNextdotjs },
  { title: "Tailwind CSS", label: "Tailwind CSS", icon: siTailwindcss },
  { title: "GitHub", label: "GitHub", icon: siGithub },
  { title: "GitHub Actions", label: "GitHub Actions", icon: siGithubactions },
  { title: "TypeScript", label: "TypeScript", icon: siTypescript },
  { title: "Claude", label: "Claude", icon: siClaude },
  { title: "Cursor", label: "Cursor", icon: siCursor },
  { title: "Vercel", label: "Vercel", icon: siVercel },
]
