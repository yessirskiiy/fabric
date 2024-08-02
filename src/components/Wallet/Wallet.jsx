import React from 'react';
import './Wallets.scss'
import Checkbox from "../Checkbox/Checkbox";
import coins from '../../store/coins'
import {observer} from "mobx-react-lite"
import checkbox from "../../store/checkbox";



const Wallet = observer(() => {

    const coinText = function (count) {
        if (count % 10 === 1 && count % 100 !== 11) {
            return 'монета'
        } else if (
            (count % 10 >= 2 && count % 10 <= 4) &&
            !(count % 100 >= 12 && count % 100 <= 14)
        ) {
            return 'монеты'
        } else {
            return 'монет'
        }
    }


    return (
        <div className='wallet'>
            <h2 className='wallet_title'>Кошелёк криптовалют</h2>
            <div className='wallet_container'>
                {Array.from({ length: coins.coin }).map(() => (
                    <div className='wallet_container-coin'></div>
                ))}
            </div>
            <span className='wallet_counter'>{coins.coin} biorobo {coinText(coins.coin)}</span>
            <div className='wallet_cheat'>
                <div className={`wallet_cheat-action ${coins.coin < 100 ? '' : 'disabled'}`}
                     onClick={(coins.addCoin)}
                ></div>
                <Checkbox
                    checked={checkbox.isChecked}
                    onChange={checkbox.handleCheckboxChange}
                />
                <p>Цыганить по 5 монет</p>
            </div>
        </div>
    );
});

export default Wallet;