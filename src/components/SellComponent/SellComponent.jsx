import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import wallet from "../../store/wallet";
import MyModal from "../MyModal/MyModal";


const SellComponent = observer(({label, price, item, amount}) => {

    const {
        coin,
        sellComponent
    } = wallet

    const [modal, setModal] = useState(false)

    const handleSell = () => {
        const newCoinAmount = coin + price;

        if (newCoinAmount > 100) {
            setModal(true);
            return;
        }

        sellComponent(item);
    };


    return (
        <div className={`storage_${item}`}>
            <div className={`storage_${item}-img`}></div>
            <h3>{label}</h3>
            <p>Стоимость {price} монет</p>
            <h3>{amount} шт</h3>
            <button className={`storage_${item}-btn ${amount <= 0 ? 'disabled': ''}`}
                    disabled={amount <= 0}
                    onClick={handleSell}>Продать
            </button>
            <MyModal visible={modal} setVisible={setModal}></MyModal>
        </div>
    );
});

export default SellComponent;