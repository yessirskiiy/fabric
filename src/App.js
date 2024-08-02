import React from "react";
import './styles/styles.scss'
import Wallet from "./components/Wallet/Wallet";
import Market from "./components/Market/Market";

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
            <Wallet/>
            <Market/>
            <div className='storage'>
                <h2 className='storage_title'>Склад</h2>
                <div className='storage_container'>
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
            <div className='factory'>
                <h2 className='factory_title'>Производство</h2>
                <div className='factory_container'>
                    <div className='factory_actions'>
                        <p className='action_title'>Тип биоробота:</p>
                        <div className='factory_actions-1'>
                            <div className='radio_type-1'></div>
                            <p>FrontEnd</p>
                            <div className='radio_type-2'></div>
                            <p>Design</p>
                        </div>
                        <p className='action_title' style={{marginTop: '21px'}}>Стабилизатор:</p>
                        <div className="factory_actions-2">
                            <div className='radio_sex-1'></div>
                            <p>Male</p>
                            <div className='radio_sex-2'></div>
                            <p>Female</p>
                        </div>
                        <button className='produce_btn'>Произвести за 10 монет</button>
                    </div>
                    <div className='factory_selector'>
                        <div className="factory_selector-arms">
                            <div className='arm_parts-1'></div>
                            <div className='arm_parts-2'></div>
                            <div className='arm_parts-3'></div>
                            <div className='arm_parts-4'></div>
                        </div>
                        <div className="factory_selector-proc">
                            <div className='proc_parts-1'></div>
                            <div className='proc_parts-2'></div>
                            <div className='proc_parts-3'></div>
                            <div className='proc_parts-4'></div>
                        </div>
                        <div className='soul_parts'></div>
                        <p className='info'>Для производства биоробота не хватает 2 биоруки,
                            3 микрочипа и 1 души</p>
                    </div>
                    <div className='factory_result'>
                        <div className='factory_result-img'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
