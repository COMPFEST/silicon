import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Line,
  Input,
  Message,
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
} from './FileInput.style'
import {
  FileIcon,
  SaveIcon,
  LinkIcon,
  UploadImg,
  SuccessImg,
  DeleteIcon,
} from './assets'
import { FileInputProps, HelperProps } from './interface'
import Button from '../Button'

const FileInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'> & FileInputProps
>(
  (
    {
      withLink = false,
      title,
      fileUrlLabel,
      onDrop,
      fileValue,
      onReset,
      ...props
    },
    ref
  ) => {
    const [isLink, setIsLink] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const { getRootProps, open, getInputProps } = useDropzone({
      onDrop: (acceptedFiles: any) => {
        onDrop(acceptedFiles)
        setIsSuccess(true)
      },
      noClick: true,
      multiple: false,
      noKeyboard: true,
    })

    return (
      <FileInputContainer isSuccess={isSuccess}>
        {isSuccess ? (
          <Success
            isLink={isLink}
            setIsLink={setIsLink}
            fileValue={fileValue}
            setIsSuccess={setIsSuccess}
            onReset={onReset}
          />
        ) : (
          <ContentContainer {...getRootProps()}>
            <input ref={ref} {...props} name="file" {...getInputProps()} />
            <UploadImg />
            <DropzoneTextContainer>
              <PrimaryMessageContainer>
                Drag atau
                <OpenButton onClick={open}>upload</OpenButton>
                file kamu di sini!
              </PrimaryMessageContainer>
              <SecondaryMessage>{title}</SecondaryMessage>
            </DropzoneTextContainer>

            {withLink ? (
              <URLContainer>
                <LineContainer>
                  <Line></Line>
                  atau
                  <Line></Line>
                </LineContainer>

                <Message>{fileUrlLabel}</Message>

                <URLInputContainer>
                  <Input ref={ref} {...props} />
                  <Button
                    disabled={!fileValue}
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
  fileValue,
  setIsSuccess,
  onReset,
}) => {
  return (
    <ContentContainer>
      <DeleteContainer>
        <DeleteButton
          onClick={() => {
            setIsSuccess(false)
            setIsLink(false)
            onReset
          }}
        >
          <DeleteIcon />
        </DeleteButton>
      </DeleteContainer>

      <SuccessImageContainer>
        <SuccessImg />
      </SuccessImageContainer>

      <SuccessMessageContainer>
        <SuccessMessage>File telah terupload!</SuccessMessage>

        <FileUploaded>
          {isLink ? <LinkIcon /> : <FileIcon />}
          <FileName>{fileValue}</FileName>
        </FileUploaded>
      </SuccessMessageContainer>
    </ContentContainer>
  )
}

FileInput.displayName = 'FileInput'

export default FileInput
