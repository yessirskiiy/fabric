import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import wallet from "../../store/wallet";
import MyModal from "../MyModal/MyModal";
import selector from "../../store/selector";


const SellComponent = observer(({label, price, item, amount}) => {

    const {
        coin,
        sellComponent
    } = wallet

    const {
        activeArms,
        activeProcessors,
        activeSoul
    } = selector

    const [modal, setModal] = useState(false)


    const isEnable =
        (item === 'arm' && !activeArms.some(Boolean) && amount > 0) ||
        (item === 'processor' && !activeProcessors.some(Boolean) && amount > 0) ||
        (item === 'soul' && !activeSoul && amount > 0)

    const handleSell = () => {
        if (isEnable) {
            const newCoinAmount = coin + price

            if (newCoinAmount > 100) {
                setModal(true)
                return
            }

            sellComponent(item)
        }
    }


    return (
        <div className={`storage_${item}`}>
            <div className={`storage_${item}-img`}></div>
            <h3>{label}</h3>
            <p>Стоимость {price} монет</p>
            <h3>{amount} шт</h3>
            <button className={`storage_${item}-btn ${!isEnable ? 'disabled' : ''}`}
                    disabled={!isEnable}
                    onClick={handleSell}>Продать
            </button>
            <MyModal visible={modal}
                     setVisible={setModal}
                     showImage={true}
                     text='Вы не можете нацыганить более 100 монет biorobo'
                     title='Количество монет ограничено'>
            </MyModal>
        </div>
    );
});

export default SellComponent;