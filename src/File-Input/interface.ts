export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface HelperProps {
  text?: string
  link?: boolean
  isLink?: boolean
  selectedFile?: string
  fileUrlLabel?: string
  setIsLink: (value: React.SetStateAction<boolean>) => void
  setIsSuccess: (value: React.SetStateAction<boolean>) => void
  setSelectedFile: (value: React.SetStateAction<string>) => void
}

export interface FileInputProps {
  title: string
  link?: boolean
  fileUrlLabel?: string
}
