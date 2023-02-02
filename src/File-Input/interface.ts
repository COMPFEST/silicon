export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface HelperProps {
  isLink: boolean
  fileValue: string
  onReset: () => void
  setIsLink: (value: React.SetStateAction<boolean>) => void
  setIsSuccess: (value: React.SetStateAction<boolean>) => void
}

export interface FileInputProps {
  title: string
  withLink?: boolean
  fileUrlLabel: string
  fileValue: string
  onDrop: (acceptedFiles: any) => void
  onReset: () => void
}
