import {makeAutoObservable} from "mobx";


class Checkbox {

    isChecked = false
    constructor() {
        makeAutoObservable(this)
    }

    handleCheckboxChange = () => {
        this.isChecked = !this.isChecked
    }

}

export default new Checkbox