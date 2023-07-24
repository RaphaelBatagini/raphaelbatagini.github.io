import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/tailwind.config.js';

export const getBreakpoints = (): { sm: string; md: string; lg: string; xl: string; '2xl': string; } => {
  return resolveConfig(tailwindConfig)?.theme?.screens as { sm: string; md: string; lg: string; xl: string; '2xl': string; };
}