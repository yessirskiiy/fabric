import {makeAutoObservable} from "mobx";
import checkbox from "./checkbox";
import selector from "./selector"
import radio from "./radio";

class Wallet {

    coin = 0

    armPrice = 7
    processorPrice = 5
    soulPrice = 25
    selectedItem = null

    armAmount = 0
    processorAmount = 0
    soulAmount = 0

    maxAmount = {
        arm: 4,
        processor: 4,
        soul: 1,
    }


    constructor() {
        makeAutoObservable(this)
    }

    addCoin = () => {
        const increment = checkbox.isChecked ? 5 : 1
        if (this.coin + increment <= 100) {
            this.coin = this.coin + increment
        } else {
            this.coin = 100
        }
    };


    buyComponent = (item) => {
        this.selectedItem = item
        let price;
        switch (item) {
            case 'arm':
                price = this.armPrice;
                if (this.armAmount >= this.maxAmount.arm) return
                this.armAmount++
                this.coin -= price
                break
            case 'processor':
                price = this.processorPrice;
                if (this.processorAmount >= this.maxAmount.processor) return
                this.processorAmount++
                this.coin -= price
                break
            case 'soul':
                price = this.soulPrice;
                if (this.soulAmount >= this.maxAmount.soul) return
                this.soulAmount++
                this.coin -= price
                break
            default:
                return
        }

    }


    sellComponent = (item) => {
        this.selectedItem = item
        let price
        switch (item) {
            case 'arm':
                price = this.armPrice
                this.armAmount--
                this.coin += price
                break
            case 'processor':
                price = this.processorPrice
                this.processorAmount--
                this.coin += price
                break
            case 'soul':
                price = this.soulPrice
                this.soulAmount--
                this.coin += price
                break
            default:
                return
        }

        this.selectedItem = null
    }

    produceRobot = () => {
        this.coin -= 10
        this.soulAmount = 0
        this.processorAmount = 0
        this.armAmount = 0

        selector.activeArms.fill(false)
        selector.activeProcessors.fill(false)
        selector.activeSoul = false

        radio.selectedSex = ''
        radio.selectedType = ''


    }


}


export default new Wallet