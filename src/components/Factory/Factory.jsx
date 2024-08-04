import React from 'react';
import './Factory.scss'
import Radio from "../Radio/Radio";
import wallet from "../../store/wallet";
import Selector from "../Selector/Selector";


const Factory = () => {
    return (
        <div className='factory'>
            <h2 className='factory_title'>Производство</h2>
            <div className='factory_container'>
                <div className='factory_actions'>
                    <Radio/>
                    <button
                        className={`produce_btn ${wallet.coin >= 10 ? '' : 'disabled'}`}
                        >Произвести за 10 монет
                    </button>
                </div>
                <Selector/>
                <div className='factory_result'>
                    <div className='factory_result-img'></div>
                </div>
            </div>
        </div>
    );
};

export default Factory;