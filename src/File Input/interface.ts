export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface HelperProps {
  text?: string
  link?: boolean
  isLink?: boolean
  selectedFile?: string
  setIsLink: (value: React.SetStateAction<boolean>) => void
  setIsSuccess: (value: React.SetStateAction<boolean>) => void
  setSelectedFile: (value: React.SetStateAction<string>) => void
}

export interface FileInputProps extends Partial<StyledFileInputProps> {
  link?: boolean
  title: string
  content: string
}
