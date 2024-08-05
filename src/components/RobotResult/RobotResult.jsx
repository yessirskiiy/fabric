import React from 'react';
import {observer} from "mobx-react-lite";
import radio from "../../store/radio";
import wallet from "../../store/wallet";
import './RobotResult.scss'
import selector from "../../store/selector";


const RobotResult = observer(({isEnable}) => {

    const {
        selectedSex,
        selectedType,
    } = radio

    const {
        activeArms,
        activeProcessors,
        activeSoul
    } = selector

    const {
        coin,
        armAmount,
        processorAmount,
        soulAmount
    } = wallet


    const getRobotClass = () => {
        let robotClass = 'factory_result-img'
        if (selectedType === 'FrontEnd') {
            robotClass += '-frontend'
        } else if (selectedType === 'Design') {
            robotClass += '-design'
        }

        if (selectedSex === 'Male') {
            robotClass += '-male'
        } else if (selectedSex === 'Female') {
            robotClass += '-female'
        }

        if (activeArms.every(Boolean) && activeProcessors.every(Boolean) && activeSoul) {
            robotClass += '-done'
        } else if (armAmount >= 4 && processorAmount >= 4 && soulAmount >= 1 && coin >= 10) {
            robotClass += '-available'
        } else {
            robotClass += '-disable'
        }

        return robotClass;
    };


    return (
        <div className='factory_result'>
            <div className={getRobotClass()}></div>
        </div>
    );
});
export default RobotResult;