export const buttonTheme =
  'transition-shadow duration-150 inline-flex items-center justify-center select-none text-center'

export const buttonSizes = {
  xl: 'h-16 px-8 text-2xl',
  lg: 'h-12 px-6 text-lg',
  md: 'h-10 px-5 text-md',
  sm: 'h-8 px-4 text-sm'
}

export const buttonVariants = {
  solid: 'focus:ring-4 focus:ring-white/25 font-bold',
  link: 'p-0 px-0 py-0 h-auto text-normal font-normal focus:font-bold transition-[font-weight,text-decoration-thickness]'
}

export type ButtonSizes = keyof typeof buttonSizes

export type ButtonVariants = keyof typeof buttonVariants
