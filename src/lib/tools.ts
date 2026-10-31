import {
  siClaude,
  siCursor,
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

type SimpleTool = {
  title: string
  icon: SimpleIcon
}

type FileTool = {
  title: string
  src: string
}

export type Tool = SimpleTool | FileTool

export function isFileTool(tool: Tool): tool is FileTool {
  return "src" in tool
}

// ChatGPT, Grok, and Codex are not in Simple Icons. Their marks are the official
// OpenAI blossom, the Grok symbol from xAI's logo, and the Codex gradient mark.
// Figma, Brave, and Safari use full-color assets so they are not flat brand-hex silhouettes.
export const TOOLS: Tool[] = [
  { title: "ChatGPT", src: "/logos/chatgpt.svg" },
  { title: "Grok", src: "/logos/grok.svg" },
  { title: "Inkscape", icon: siInkscape },
  { title: "Codex", src: "/logos/codex.svg" },
  { title: "Brave", src: "/logos/brave.svg" },
  { title: "Safari", src: "/logos/safari.png" },
  { title: "Ghostty", icon: siGhostty },
  { title: "Figma", src: "/logos/figma.svg" },
  { title: "Next.js", icon: siNextdotjs },
  { title: "Tailwind CSS", icon: siTailwindcss },
  { title: "GitHub", icon: siGithub },
  { title: "GitHub Actions", icon: siGithubactions },
  { title: "TypeScript", icon: siTypescript },
  { title: "Claude", icon: siClaude },
  { title: "Cursor", icon: siCursor },
  { title: "Vercel", icon: siVercel },
]
