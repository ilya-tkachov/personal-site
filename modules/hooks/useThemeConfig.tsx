import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { Config } from 'tailwindcss'

export default function useThemeConfig(): Config {
  const fullConfig = resolveConfig(tailwindConfig)

  return fullConfig
}
