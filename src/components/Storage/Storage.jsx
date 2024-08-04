import React from 'react';
import './Storage.scss'
import {observer} from "mobx-react-lite";
import wallet from '../../store/wallet'
import SellComponent from "../SellComponent/SellComponent";

const Storage = observer(() => {

    return (
        <div className='storage'>
            <h2 className='storage_title'>Склад</h2>
            <div className='storage_container'>
                <SellComponent label='Биорука' price={wallet.armPrice} amount={wallet.armAmount} item='arm'/>
                <SellComponent label='Микрочип' price={wallet.processorPrice} amount={wallet.processorAmount} item='processor'/>
                <SellComponent label='Душа' price={wallet.soulPrice} amount={wallet.soulAmount} item='soul'/>
            </div>
        </div>
    );
});

export default Storage;