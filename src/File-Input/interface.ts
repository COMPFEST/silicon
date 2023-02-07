import { ComponentPropsWithoutRef } from 'react'

export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface HelperProps {
  isLink: boolean
  value: string
  onReset: () => void
  setIsLink: (value: React.SetStateAction<boolean>) => void
  setIsSuccess: (value: React.SetStateAction<boolean>) => void
}

export interface FileInputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onDrop'> {
  secondaryMessage?: string
  withLink?: boolean
  fileUrlLabel?: string
  value: string
  onDrop: (acceptedFiles: File[]) => void
  onReset: () => void
  fileId?: string
  fileUrlId?: string
}
