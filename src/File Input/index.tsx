import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Line,
  Input,
  Message,
  FileName,
  Dropzone,
  OpenButton,
  SaveButton,
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

const FileInput: React.FC<FileInputProps> = ({
  content = '',
  link = false,
  title = 'Secondary message',
}) => {
  const [isLink, setIsLink] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState('')

  return (
    <FileInputContainer isSuccess={isSuccess}>
      {isSuccess ? (
        <Success
          isLink={isLink}
          setIsLink={setIsLink}
          selectedFile={selectedFile}
          setIsSuccess={setIsSuccess}
          setSelectedFile={setSelectedFile}
        />
      ) : (
        <UploadArea
          link={link}
          text={title}
          selectedFile={selectedFile}
          setIsLink={setIsLink}
          setIsSuccess={setIsSuccess}
          setSelectedFile={setSelectedFile}
        />
      )}
    </FileInputContainer>
  )
}

const Success: React.FC<HelperProps> = ({
  isLink,
  setIsSuccess,
  selectedFile,
  setSelectedFile,
}) => {
  return (
    <ContentContainer>
      <DeleteContainer>
        <DeleteButton
          onClick={() => {
            setIsSuccess(false)
            setSelectedFile('')
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
          <FileName>{selectedFile}</FileName>
        </FileUploaded>
      </SuccessMessageContainer>
    </ContentContainer>
  )
}

const UploadArea: React.FC<HelperProps> = ({
  link,
  text,
  selectedFile,
  setIsLink,
  setIsSuccess,
  setSelectedFile,
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)
    setSelectedFile(acceptedFiles[0].name)
    setIsSuccess(true)
  }, [])

  const handleChange = (event: { target: { value: any } }) => {
    setSelectedFile(event.target.value)
  }

  const { getRootProps, open, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    noKeyboard: true,
  })

  return (
    <ContentContainer {...getRootProps()}>
      <Dropzone {...getInputProps()}></Dropzone>
      <UploadImg />
      <DropzoneTextContainer>
        <PrimaryMessageContainer>
          Drag atau
          <OpenButton onClick={open}>upload</OpenButton>
          file kamu di sini
        </PrimaryMessageContainer>
        <SecondaryMessage>{text}</SecondaryMessage>
      </DropzoneTextContainer>

      {link && (
        <URLContainer>
          <LineContainer>
            <Line></Line>
            atau
            <Line></Line>
          </LineContainer>

          <Message>cantumkan link Google Drive</Message>

          <URLInputContainer>
            <Input
              type="url"
              placeholder="Link Google Drive"
              onChange={handleChange}
              value={selectedFile}
            />
            <SaveButton
              onClick={() => {
                setIsSuccess(true)
                setIsLink(true)
              }}
            >
              <SaveIcon />
            </SaveButton>
          </URLInputContainer>
        </URLContainer>
      )}
    </ContentContainer>
  )
}

export default FileInput
