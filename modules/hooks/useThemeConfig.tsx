import { Config } from "tailwindcss"
import resolveConfig from "tailwindcss/resolveConfig"
import { content, theme } from "../../tailwind.config.js"

export default function useThemeConfig(): Config {
  const fullConfig = resolveConfig({ content, theme })

  return fullConfig
}
