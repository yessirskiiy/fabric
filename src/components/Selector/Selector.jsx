import React from 'react';
import './Selector.scss'
import {observer} from "mobx-react-lite";
import wallet from "../../store/wallet";




const Selector = observer(() => {

    const {
        armAmount,
        processorAmount,
        soulAmount
    } = wallet



    return (
        <div className='factory_selector'>
            <div className="factory_selector-arms">
                <div className={`arm_parts-1 ${armAmount >= 1 ? 'available' : ''}`}></div>
                <div className={`arm_parts-2 ${armAmount >= 2 ? 'available' : ''}`}></div>
                <div className={`arm_parts-3 ${armAmount >= 3 ? 'available' : ''}`}></div>
                <div className={`arm_parts-4 ${armAmount >= 4 ? 'available' : ''}`}></div>
            </div>
            <div className="factory_selector-proc">
                <div className={`proc_parts-1 ${processorAmount >= 1 ? 'available' : ''}`}></div>
                <div className={`proc_parts-2 ${processorAmount >= 2 ? 'available' : ''}`}></div>
                <div className={`proc_parts-3 ${processorAmount >= 3 ? 'available' : ''}`}></div>
                <div className={`proc_parts-4 ${processorAmount >= 4 ? 'available' : ''}`}></div>
            </div>
            <div className={`soul_parts ${soulAmount === 1 ? 'available' : ''}`}></div>
            <p className='info'>Для производства биоробота не
                хватает {4 - armAmount} биоруки, {4 - processorAmount} микрочипа и {1 - soulAmount} души</p>
        </div>
    );
});

export default Selector;