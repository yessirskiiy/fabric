import React from 'react';
import './MyModal.scss';

const MyModal = ({ visible, setVisible }) => {
    return (
        <div className={`modal ${visible ? 'modal_visible' : ''}`}>
            <div className="modal_content">
                <div className='modal_content-img'></div>
                <div className='modal_content-text'>
                    <h1 className='modal_content-title'>Количество монет ограничено</h1>
                    <h6 className='modal_content-description'>Вы не можете нацыганить более 100 монет biorobo</h6>
                </div>
            </div>
            <div className='modal_content-btn' onClick={() => setVisible(false)}></div>
        </div>
    );
};

export default MyModal;