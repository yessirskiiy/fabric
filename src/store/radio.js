import {makeAutoObservable} from "mobx";

class Radio {
    selectedType = ''
    selectedSex = ''

    constructor() {
        makeAutoObservable(this)
    }

    setType = (type) => {
        this.selectedType = type
    }

    setSex = (sex) => {
        this.selectedSex = sex
    }
}


export default new Radio