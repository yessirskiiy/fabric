import React from 'react';
import wallet from "../../store/wallet";
import {observer} from "mobx-react-lite";

const BuyComponent = observer(({item, price, label}) => {

    const {
        coin,
        maxAmount,
        armAmount,
        processorAmount,
        soulAmount,
        buyComponent,
    } = wallet

    const isDisabled = () => {
        if (coin < price){
            return true
        }

        switch (item) {
            case 'arm':
                return armAmount >= maxAmount.arm
            case 'processor':
                return processorAmount >= maxAmount.processor
            case 'soul':
                return soulAmount >= maxAmount.soul
            default:
                return true;
        }

    }



    return (
        <div className={`market_${item}`}>
            <div className={`market_${item}-img`}></div>
            <h3>{label}</h3>
            <p>Стоимость {price} монет</p>
            <button className={`market_${item}-btn ${isDisabled() ? 'disabled' : ''}`}
                    disabled={isDisabled()}
                    onClick={() => buyComponent(item)}>Установить
            </button>
        </div>
    );
});

export default BuyComponent;