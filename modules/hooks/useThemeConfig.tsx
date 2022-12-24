import resolveConfig from "tailwindcss/resolveConfig"
import { content, theme } from "../../tailwind.config.js"

// TODO set Config from 'tailwindcss' as type when issue with colors not recognized as types is fixed

export default function useThemeConfig(): any {
  const fullConfig = resolveConfig({ content, theme })

  return fullConfig
}
