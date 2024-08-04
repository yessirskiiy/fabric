import React, {useRef} from "react";
import './styles/styles.scss'
import Wallet from "./components/Wallet/Wallet";
import Market from "./components/Market/Market";
import Storage from "./components/Storage/Storage";
import Factory from "./components/Factory/Factory";

function App() {

    const scrollToRef = useRef(null)

    const scrollToComponent = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({behavior:'smooth'})
        }
    }

    return (
        <div className="App">
            <div className='logo_bar'>
                <div className='logo_bar-img'></div>
                <button className='logo_bar-button' onClick={scrollToComponent}>Произвести биоробота</button>
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
            <Storage/>
            <div ref={scrollToRef}>
                <Factory/>
            </div>
        </div>
    );
}

export default App;
