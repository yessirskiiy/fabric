import React from 'react';
import {observer} from "mobx-react-lite";
import radio from '../../store/radio'
import './Radio.scss'

const Radio = observer(() => {

    const {
        setType,
        setSex,
        selectedType,
        selectedSex
    } = radio


    return (
        <div>
            <p className='action_title'>Тип биоробота:</p>
            <div className='factory_actions-1'>
                <div className={`radio_type ${selectedType === 'FrontEnd' ? 'checked' : ''}`}
                     onClick={() => setType('FrontEnd')}></div>
                <p>FrontEnd</p>
                <div className={`radio_type ${selectedType === 'Design' ? 'checked' : ''}`}
                     onClick={() => setType('Design')}></div>
                <p>Design</p>
            </div>
            <p className='action_title' style={{marginTop: '21px'}}>Стабилизатор:</p>
            <div className="factory_actions-2">
                <div className={`radio_sex ${selectedSex === 'Male' ? 'checked' : ''}`}
                     onClick={() => setSex('Male')}></div>
                <p>Male</p>
                <div className={`radio_sex ${selectedSex === 'Female' ? 'checked' : ''}`}
                     onClick={() => setSex('Female')}
                     style={{marginLeft: '4vh'}}>
                </div>
                <p>Female</p>
            </div>
        </div>
    );
});

export default Radio;