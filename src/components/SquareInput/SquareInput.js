import './SquareInput.scss'
import {SquareInputColorVariants} from "./SquareInput.consts";
import {useState} from "react";
import {getDefaultValueByVariant, getNextValue} from "./SquareInput.helpers";


export const SquareInput = ({lineValues, setLineValues, order, variant}) => {
    const [value, setValue] = useState(getDefaultValueByVariant(variant));

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


    const binaryValueArg1 = lineValues.toString(variant === "arg1");
    // console.log(binaryValueArg1)
// const decimalValue




    return (
        <div onClick={handleOnInputClick} className={"square_input"}
             style={{backgroundColor: SquareInputColorVariants[variant]}}>
            {value}
        </div>
    )
}