import React from 'react';
import './MyModal.scss';

const MyModal = ({ visible, setVisible, title, text, showImage }) => {
    return (
        <div className={`modal ${visible ? 'modal_visible' : ''}`}>
            <div className="modal_content">
                {showImage && <div className='modal_content-img'></div>}
                <div className='modal_content-text'>
                    <h1 className='modal_content-title'>{title}</h1>
                    <h6 className='modal_content-description'>{text}</h6>
                </div>
            </div>
            <div className='modal_content-btn' onClick={() => setVisible(false)}></div>
        </div>
    );
};

export default MyModal;