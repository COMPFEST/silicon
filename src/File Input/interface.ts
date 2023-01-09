export interface StyledFileInputProps {
  isSuccess: boolean
}

export interface FileInputProps extends Partial<StyledFileInputProps> {
  title: string
  content: string
}
