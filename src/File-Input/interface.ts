import { ComponentPropsWithoutRef, ReactNode } from 'react'

export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface HelperProps extends DarkThemeProps {
  isLink: boolean
  value: string
  onReset: () => void
  setIsLink: (value: React.SetStateAction<boolean>) => void
  setIsSuccess: (value: React.SetStateAction<boolean>) => void
  textClassName?: string
}

export interface FileInputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onDrop'>,
    DarkThemeProps {
  secondaryMessage?: string
  alternateInput?: ReactNode
  fileUrlLabel?: string
  value: string
  onDrop: (acceptedFiles: File[]) => void
  onReset: () => void
  fileId?: string
  success?: boolean
  textClassName?: string
}

export interface DarkThemeProps {
  isDarkTheme?: boolean
}
