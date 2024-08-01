import React from "react";
import './styles/styles.scss'

function App() {
    return (
        <div className="App">
            <div className='logo_bar'>
                <div className='logo_bar-img'></div>
                <button className='logo_bar-button'>Произвести биоробота</button>
            </div>
            <div className='intro'>
                <h1 className='intro_title'>Фабрика по производству биороботов
                    <p className='intro_paragraph'>класса «монитор-кресло»</p>
                </h1>
                <div className='intro_img'>
                    <div className='intro_img-ellipse'></div>
                    <div className='intro_img-blue'></div>
                    <div className='intro_img-red'></div>
                </div>
            </div>
            <div className='wallet'>
                <h2 className='wallet_title'>Кошелёк криптовалют</h2>
                <div className='wallet_container'>
                    <div className='wallet_container-coin'></div>
                    <div className='wallet_container-coin'></div>
                    <div className='wallet_container-coin'></div>
                    <div className='wallet_container-coin'></div>
                </div>
                <span className='wallet_counter'>45 biorobo монет</span>
                <div className='wallet_cheat'>
                    <div className='wallet_cheat-action'></div>
                    <div className='wallet_checkbox'></div>
                    <p style={{
                        color: '#FFFFFF',
                        fontWeight: '500',
                        fontSize: '16px',
                        lineHeight: '24px',
                        marginRight: '8px',
                        marginBottom: '8px'
                    }}>Цыганить по 5 монет</p>
                </div>
            </div>
            <h2 className='market_title'>Рынок комплектующих</h2>
            <div className='market'>
                <div className='market_arms'>
                    <div className='market_arms-img'></div>
                    <h3>Биорука</h3>
                    <p>Стоимость 7 монет</p>
                    <button className='market_arms-btn'>Установить</button>
                </div>
                <div className='market_processor'>
                    <div className='market_processor-img'></div>
                    <h3>Микрочип</h3>
                    <p>Стоимость 5 монет</p>
                    <button className='market_processor-btn'>Установить</button>
                </div>
                <div className='market_soul'>
                    <div className='market_soul-img'></div>
                    <h3>Душа</h3>
                    <p>Стоимость 25 монет</p>
                    <button className='market_soul-btn'>Установить</button>
                </div>
            </div>
            <h2 className='storage_title'>Склад</h2>
            <div className='storage'>
                <div className='storage_arms'>
                    <div className='storage_arms-img'></div>
                    <h3>Биорука</h3>
                    <p>Стоимость 7 монет</p>
                    <h3>3 шт</h3>
                    <button className='storage_arms-btn'>Установить</button>
                </div>
                <div className='storage_processor'>
                    <div className='storage_processor-img'></div>
                    <h3>Микрочип</h3>
                    <p>Стоимость 5 монет</p>
                    <h3>3 шт</h3>
                    <button className='storage_processor-btn'>Установить</button>
                </div>
                <div className='storage_soul'>
                    <div className='storage_soul-img'></div>
                    <h3>Душа</h3>
                    <p>Стоимость 25 монет</p>
                    <h3>3 шт</h3>
                    <button className='storage_soul-btn' disabled={true}>Установить</button>
                </div>
            </div>
        </div>
    );
}

export default App;
