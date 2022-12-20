'use client'
import {
  buttonSizes,
  ButtonSizes,
  buttonTheme
} from '@/modules/theme/button'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSizes
}

export default function Button(props: ButtonProps): JSX.Element {
  const { size = 'sm', className, ...rest } = props

  const buttonClass = `${buttonTheme} ${buttonSizes[size]}`

  // todo add usetransition

  return <button className={`${buttonClass} ${className}`} {...rest} />
}
