import React from 'react';
import './Market.scss'
import {observer} from "mobx-react-lite";
import wallet from '../../store/wallet'
import BuyComponent from "../BuyComponent/BuyComponent";

const Market = observer(() => {

    return (
        <div className='market'>
            <h2 className='market_title'>Рынок комплектующих</h2>
            <div className='market_container'>
                <BuyComponent label='Биорука' item='arm' price={wallet.armPrice}/>
                <BuyComponent label='Микрочип' item='processor' price={wallet.processorPrice}/>
                <BuyComponent label='Душа' item='soul' price={wallet.soulPrice}/>
            </div>
        </div>
    );
});

export default Market;