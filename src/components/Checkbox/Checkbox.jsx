import React from 'react';
import {observer} from "mobx-react-lite";
import checkbox from "../../store/checkbox";


const Checkbox = observer(({onChange}) => {
    return (
        <div
            className={`wallet_checkbox ${checkbox.isChecked ? 'checked' : ''}`}
            onClick={onChange}
        >
        </div>
    );
});

export default Checkbox;