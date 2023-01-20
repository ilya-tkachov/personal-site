'use client'
import {
  buttonSizes,
  ButtonSizes,
  buttonTheme,
  buttonVariants,
  ButtonVariants
} from '@/modules/theme/button'

interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], ''> {
  size?: ButtonSizes
  variant?: ButtonVariants
}

export default function Button(props: ButtonProps): JSX.Element {
  const { size = 'sm', variant = 'solid', className, children, ...rest } = props

  const buttonClass = `${buttonTheme} ${buttonSizes[size]} ${buttonVariants[variant]}`

  // todo add usetransition

  return (
    <button className={`${buttonClass} ${className}`} {...rest}>
      {children}
    </button>
  )
}
