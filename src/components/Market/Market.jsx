import React from 'react';
import './Market.scss'
import {observer} from "mobx-react-lite";
import coins from "../../store/coins";

const Market = observer(() => {

    return (
        <div className='market'>
            <h2 className='market_title'>Рынок комплектующих</h2>
            <div className='market_container'>
                <div className='market_arms'>
                    <div className='market_arms-img'></div>
                    <h3>Биорука</h3>
                    <p>Стоимость {coins.arm_price} монет</p>
                    <button className={`market_arms-btn ${coins.coin < coins.arm_price ? 'disabled' : ''}`}
                            disabled={coins.coin < coins.arm_price}
                            onClick={coins.buyComponent}>Установить
                    </button>
                </div>
                <div className='market_processor'>
                    <div className='market_processor-img'></div>
                    <h3>Микрочип</h3>
                    <p>Стоимость {coins.proc_price} монет</p>
                    <button className={`market_processor-btn ${coins.coin < coins.proc_price ? 'disabled' : ''}`}
                            disabled={coins.coin < coins.proc_price}
                            onClick={coins.buyComponent}>Установить
                    </button>
                </div>
                <div className='market_soul'>
                    <div className='market_soul-img'></div>
                    <h3>Душа</h3>
                    <p>Стоимость {coins.soul_price} монет</p>
                    <button className={`market_soul-btn ${coins.coin < coins.soul_price ? 'disabled' : ''}`}
                            disabled={coins.coin < coins.soul_price}
                            onClick={coins.buyComponent}>Установить
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Market;