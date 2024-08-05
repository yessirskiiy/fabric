import React from 'react';
import {observer} from "mobx-react-lite";
import wallet from "../../store/wallet";
import selector from "../../store/selector";
import './Selector.scss';

const Selector = observer(() => {
    const {
        coin,
        armAmount,
        processorAmount,
        soulAmount,
    } = wallet;

    const {
        selectArm,
        selectProcessor,
        selectSoul,
        activeArms,
        activeProcessors,
        activeSoul
    } = selector

    const requireArms = 4
    const requireProcessors = 4
    const requireSoul = 1
    const requirePrice = 10

    const missingArmParts = (requireArms - armAmount)
    const missingProcessorParts = (requireProcessors - processorAmount)
    const missingSoulParts = (requireSoul - soulAmount)
    const notEnoughCoins = coin < requirePrice

    const getMissingDetailsText = () => {
        const details = []
        if (missingArmParts > 0){
            details.push(`${missingArmParts} биорук${missingArmParts > 1 ? 'и' : 'и'}`)
        }
        if (missingProcessorParts > 0){
            details.push(`${missingProcessorParts} микрочип${missingProcessorParts > 1 ? 'а' : ''}`)
        }
        if (missingSoulParts > 0){
            details.push(`${missingSoulParts} душ${missingSoulParts === 1 ? 'и' : 'а'}`)
        }
        return details.join(', ').replace(/,([^,]*)$/, ' и$1')
    }

    const generateText = () => {
        if (missingArmParts > 0 || missingProcessorParts > 0 || missingSoulParts > 0) {
            if (notEnoughCoins) {
                return `Не хватает ${getMissingDetailsText()} и денег`
            } else {
                return `Не хватает ${getMissingDetailsText()}`
            }
        } else if (notEnoughCoins) {
            return 'Не хватает денег'
        } else {
            return 'Готово к производству'
        }
    }





    return (
        <div className='factory_selector'>
            <div className="factory_selector-arms">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`arm_parts-${index + 1} ${armAmount > index ? 'available' : ''} ${activeArms[index] ? 'active' : ''}`}
                        onClick={() => selectArm(index)}
                    ></div>
                ))}
            </div>
            <div className="factory_selector-proc">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`proc_parts-${index + 1} ${processorAmount > index ? 'available' : ''} ${activeProcessors[index] ? 'active' : ''}`}
                        onClick={() => selectProcessor(index)}
                    ></div>
                ))}
            </div>
            <div
                className={`soul_parts ${soulAmount >= 1 ? 'available' : ''} ${activeSoul ? 'active' : ''}`}
                onClick={() => selectSoul()}
            ></div>
            <p className='info'>
                {generateText()}
            </p>
        </div>
    );
});

export default Selector;
