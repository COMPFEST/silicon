import React, { forwardRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Line,
  FileName,
  OpenButton,
  URLContainer,
  FileUploaded,
  DeleteButton,
  LineContainer,
  SuccessMessage,
  DeleteContainer,
  ContentContainer,
  SecondaryMessage,
  URLInputContainer,
  FileInputContainer,
  DropzoneTextContainer,
  SuccessImageContainer,
  PrimaryMessageContainer,
  SuccessMessageContainer,
  Dropzone,
} from './FileInput.style'
import {
  FileIcon,
  SaveIcon,
  LinkIcon,
  UploadImg,
  SuccessImg,
  DeleteIcon,
  UploadImgLight,
  SuccessImgLight,
} from './assets'
import { FileInputProps, HelperProps } from './interface'
import Button from '../Button'

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      alternateInput = null,
      secondaryMessage,
      fileUrlLabel,
      onDrop,
      value,
      onReset,
      fileId,
      success = false,
      textClassName,
      isDarkTheme = true,
      ...props
    },
    ref
  ) => {
    const [isLink, setIsLink] = useState(false)
    const [isSuccess, setIsSuccess] = useState(success)

    const { getRootProps, open, getInputProps } = useDropzone({
      onDrop: (acceptedFiles: File[]) => {
        onDrop(acceptedFiles)
        setIsSuccess(true)
      },
      noClick: true,
      multiple: false,
      noKeyboard: true,
    })

    return (
      <FileInputContainer
        isSuccess={isSuccess}
        theme={isDarkTheme ? 'dark' : 'light'}
      >
        {isSuccess ? (
          <Success
            isLink={isLink}
            setIsLink={setIsLink}
            value={value}
            setIsSuccess={setIsSuccess}
            onReset={onReset}
            textClassName={textClassName}
            isDarkTheme={isDarkTheme}
          />
        ) : (
          <ContentContainer {...getRootProps()}>
            <Dropzone
              id={fileId}
              ref={ref}
              {...props}
              name="file"
              style={{
                display: 'none',
              }}
              {...getInputProps()}
            />
            {isDarkTheme ? <UploadImg /> : <UploadImgLight />}
            <DropzoneTextContainer>
              <PrimaryMessageContainer className={textClassName}>
                Drag atau
                <OpenButton onClick={open}>upload</OpenButton>
                file kamu di sini!
              </PrimaryMessageContainer>
              <SecondaryMessage>{secondaryMessage}</SecondaryMessage>
            </DropzoneTextContainer>
            {alternateInput ? (
              <URLContainer>
                <LineContainer>
                  <Line></Line>
                  atau
                  <Line></Line>
                </LineContainer>
                <URLInputContainer>
                  {alternateInput}
                  <Button
                    disabled={!value}
                    onClick={() => {
                      setIsSuccess(true)
                      setIsLink(true)
                    }}
                  >
                    <SaveIcon />
                  </Button>
                </URLInputContainer>
              </URLContainer>
            ) : (
              ''
            )}
          </ContentContainer>
        )}
      </FileInputContainer>
    )
  }
)

const Success: React.FC<HelperProps> = ({
  isLink,
  setIsLink,
  value,
  setIsSuccess,
  onReset,
  textClassName,
  isDarkTheme = true,
}) => {
  return (
    <ContentContainer>
      <DeleteContainer>
        <DeleteButton
          onClick={() => {
            setIsSuccess(false)
            setIsLink(false)
            onReset()
          }}
          theme={isDarkTheme ? 'dark' : 'light'}
        >
          <DeleteIcon fill={isDarkTheme ? 'white' : '#7D8DC1'} />
        </DeleteButton>
      </DeleteContainer>

      <SuccessImageContainer>
        {isDarkTheme ? <SuccessImg /> : <SuccessImgLight />}
      </SuccessImageContainer>

      <SuccessMessageContainer>
        <SuccessMessage>File telah terupload!</SuccessMessage>

        <FileUploaded>
          {isLink ? (
            <LinkIcon />
          ) : (
            <FileIcon fill={isDarkTheme ? 'white' : '#DDE7FF'} />
          )}
          <FileName className={textClassName}>{value}</FileName>
        </FileUploaded>
      </SuccessMessageContainer>
    </ContentContainer>
  )
}

FileInput.displayName = 'FileInput'

export default FileInput
