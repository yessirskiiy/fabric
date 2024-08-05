import React, {useState} from 'react';
import wallet from "../../store/wallet";
import radio from "../../store/radio";
import selector from "../../store/selector"
import {observer} from "mobx-react-lite";
import MyModal from "../MyModal/MyModal";


const ProduceBtn = observer(() => {

    const {
        selectedSex,
        selectedType
    } = radio

    const {
        coin,
    } = wallet

    const {
        activeArms,
        activeProcessors,
        activeSoul
    } = selector

    const detailsActive = activeArms.every(Boolean) && activeProcessors.every(Boolean) && activeSoul
    const typeActive = selectedType && selectedSex
    const enoughCoins = coin >= 10

    const isEnable = detailsActive && typeActive && enoughCoins


    const [modal, setModal] = useState(false)

    const handleClick = () => {
        if (isEnable) {
            setModal(true)
            wallet.produceRobot()

        }
    }

    return (
        <div>
            <button
                className={`produce_btn ${isEnable ? '' : 'disabled'}`}
                disabled={!isEnable}
                onClick={handleClick}
            >Произвести за 10 монет
            </button>
            <MyModal
                title='Биоробот произведён'
                text='Поздравляем! Вы произвели биоробота'
                setVisible={setModal}
                visible={modal}
                showImage={false}
            />
        </div>
    );
});

export default ProduceBtn;