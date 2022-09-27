import React from "react";
import "./Modal.scss"
import { MdClose } from 'react-icons/md';
import styled from "styled-components";
import { useRef, useEffect, useCallback } from "react";

const CloseButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

const Modal = ({ showModal, setShowModal, listItem}) => {
    const modalRef = useRef()

    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false)
        }
    };

    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false)
            console.log('I pressed')
          }
        },
        [setShowModal, showModal]
      );

    useEffect(
    () => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
    );

    return (
        <>
        { showModal ? (
        <div onClick={closeModal} ref={modalRef} className="modal" >
            <div showModal={showModal} className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{listItem.title}</h4>
                </div>

                <CloseButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                />

                <div className="modal-top-body">
                    {listItem.languages}
                </div>

                <div className="modal-body">
                    {listItem.description}
                </div>
                

                {
                listItem.hasUrl ? (
                <div className="modal-bottom-body">
                    <a className="modal-bottom-body" href={listItem.url}>V I E W &nbsp; P R O J E C T</a>
                </div>
                ): null
                }
                <br/>
            </div>

        </div>
        ) : null }
        </>
    )
}

export default Modal