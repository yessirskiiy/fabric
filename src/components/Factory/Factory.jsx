import React from 'react';
import './Factory.scss'
import Radio from "../Radio/Radio";
import Selector from "../Selector/Selector";
import RobotResult from "../RobotResult/RobotResult";
import ProduceBtn from "../ProduceBtn/ProduceBtn";

const Factory = () => {


    return (
        <div className='factory'>
            <h2 className='factory_title'>Производство</h2>
            <div className='factory_container'>
                <div className='factory_actions'>
                    <Radio/>
                    <ProduceBtn/>
                </div>
                <Selector/>
                <RobotResult/>
            </div>
        </div>
    );
};

export default Factory;