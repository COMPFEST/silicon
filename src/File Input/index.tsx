import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  FileInputContainer,
  DropzoneContainer,
  DropzoneTextContainer,
  PrimaryMessageContainer,
  SecondaryMessage,
  Input,
} from './FileInput.style'
import { FileInputProps } from './interface'

const FileInput: React.FC<FileInputProps> = ({
  title = 'Secondary message',
}) => {
  // const [selectedFile, setSelectedFile] = useState("")
  const [isSuccess] = useState(false)
  const { getRootProps, getInputProps } = useDropzone({})

  return (
    <>
      <FileInputContainer {...getRootProps()}>
        {isSuccess ? (
          <></>
        ) : (
          <>
            <Input {...getInputProps()}></Input>
            <DropzoneContainer>
              <DropzoneTextContainer>
                <PrimaryMessageContainer>
                  Upload di sini yayayayayya
                </PrimaryMessageContainer>
                <SecondaryMessage>{title}</SecondaryMessage>
              </DropzoneTextContainer>
            </DropzoneContainer>
          </>
        )}
      </FileInputContainer>
    </>
  )
}

export default FileInput
