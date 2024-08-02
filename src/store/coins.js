import {makeAutoObservable} from "mobx";
import checkbox from "./checkbox";

class Coins {

    coin = 0

    arm_price = 7
    proc_price = 5
    soul_price = 25
    selectedItem = null

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

    buyComponent(item) {
        let price

    }
}


export default new Coins