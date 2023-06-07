import './SquareInput.scss'
import {SquareInputColorVariants} from "./SquareInput.consts";
import {useState} from "react";
import {getDefaultValueByVariant, getNextValue} from "./SquareInput.helpers";


export const SquareInput = ({lineValues, setLineValues, order, variant, defaultValue}) => {
    const [value, setValue] = useState( getDefaultValueByVariant(variant));

    const handleOnInputClick = () => {
        const newValue = getNextValue(value, variant)
        setValue(newValue)
        if (variant !== 'operator') {
            const newLineValues = [...lineValues]
            newLineValues[order] = newValue
            setLineValues(newLineValues)
        } else {
            setLineValues(newValue)
        }
    }

    return (
        <div onClick={handleOnInputClick} className={"square_input"}
             style={{backgroundColor: SquareInputColorVariants[variant]}}>
            {defaultValue || value}
        </div>
    )
}