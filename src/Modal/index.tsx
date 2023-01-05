import { ModalProps } from "./interface";
import React from "react";
import { ModalContainter, ModalContent } from "./Modal.style";

const Modal: React.FC<ModalProps> = ({
    title = '',
    content = '',
    imageUrl,
    acceptButton = null,
    cancelButton,
    isDisplayed = false,
    ...props
}) => {
    return (<ModalContainter>
        <ModalContent
        isDisplayed={isDisplayed}>
            <p>asdas</p>
            {acceptButton}
            {cancelButton}
        </ModalContent>
    </ModalContainter>)
}

export default Modal