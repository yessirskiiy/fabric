import {makeAutoObservable} from "mobx";
import wallet from "./wallet";

class Selector {

    activeArms = Array(4).fill(false)
    activeProcessors = Array(4).fill(false)
    activeSoul = false

    constructor() {
        makeAutoObservable(this)
    }

    selectArm = (index) => {
        if (wallet.armAmount > index) {
            this.activeArms[index] = !this.activeArms[index]
        }
    }


    selectProcessor = (index) => {
        if (wallet.processorAmount > index) {
            this.activeProcessors[index] = !this.activeProcessors[index]
        }
    }


    selectSoul = () => {
        if (wallet.soulAmount >= 1) {
            this.activeSoul = !this.activeSoul
        }
    }
}


export default new Selector