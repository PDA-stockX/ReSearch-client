import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NeedLogin() {
    const [showModal, setShowModal] = useState(false); // 모달 상태

    const handleClose = () => setShowModal(false); // 모달 닫기
    const handleShow = () => setShowModal(true); // 모달 띄우기

    return (
        <>
            <Modal show={showModal} onHide={handleClose} className='modal'>
                <Modal.Body className='modalBody'>
                    <p>로그인이 필요합니다.</p>
                </Modal.Body>

                <Modal.Footer className='modalFooter'>
                    <Button variant="primary" onClick={handleClose} className='modalButton'>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}