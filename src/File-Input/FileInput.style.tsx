import styled from 'styled-components'
import { StyledFileInputProps } from './interface'

export const FileInputContainer = styled.div<StyledFileInputProps>`
  width: 558px;
  padding: 12px;
  height: 260x;
  outline-style: dashed;
  outline-width: 4px;
  outline-color: ${(props) =>
    props.isSuccess ? '#3EEBBE' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 24px;
  align-items: start;
  justify-content: center;
  font-size: 16px;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 308px;
    font-size: 12px;
  }
`
export const ContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
export const DropzoneTextContainer = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Dropzone = styled.input``

export const PrimaryMessageContainer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SecondaryMessage = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`
export const SuccessMessageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
`
export const SuccessMessage = styled.div`
  color: #3eebbe;
  font-weight: 700;
`
export const FileUploaded = styled.div`
  gap: 4px;
  display: flex;
  color: #ffffff;
  font-weight: 600;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
export const FileName = styled.div`
  max-width: 500px;
  overflow: hidden;
  word-break: break-word;
  @media only screen and (max-width: 768px) {
    max-width: 250px;
  }
`
export const DeleteContainer = styled.div`
  top: 0px;
  padding: 20px 20px 0px 0px;
  width: 558px;
  display: flex;
  align-items: left;
  justify-content: end;
  position: absolute;
  @media only screen and (max-width: 768px) {
    width: 308px;
  }
`
export const DeleteButton = styled.button`
  border-style: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all;
  transition-duration: 0.5s;
  border-radius: 100%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: all;
    transition-duration: 0.5s;
  }
`
export const SuccessImageContainer = styled.div`
  padding-top: 32px;
`
export const OpenButton = styled.span`
  color: #0aa4e7;
  font-size: 16px;
  cursor: pointer;
  margin: 0px 4px;
  font-weight: 600;
  border-style: none;
  background-color: transparent;
  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const URLContainer = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-bottom: 32px;
`
export const LineContainer = styled.div`
  gap: 10px;
  display: flex;
  color: #ffffff;
  width: inherit;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`
export const Line = styled.div`
  width: 168px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  @media only screen and (max-width: 768px) {
    width: 110px;
  }
`
export const URLInputContainer = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`
export const Input = styled.input`
  color: #ffffff;
  font-size: 16px;
  max-width: 240px;
  border: 2px solid #60648b;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 12px;
  padding: 12px 32px;
  font-weight: 600;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    max-width: 120px;
    font-size: 12px;
  }

  &:placeholder {
    text-align: center;
    color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    border-style: none;
  }
`
export const Message = styled.div`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
`