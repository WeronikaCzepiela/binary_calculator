import './SquareInput.scss'
import {SquareInputColorVariants} from "./SquareInput.consts";
import {useState} from "react";
import {getDefaultValueByVariant} from "./SquareInput.helpers";


export const SquareInput = ({variant}) => {
    const [value, setValue] = useState(getDefaultValueByVariant(variant));

    const handleOnInputClick = () => {
        switch (value) {
            case '+':
                setValue('-')
                break;
            case '-':
                setValue('*')
                break;
            case '*':
                setValue('/')
                break;
            case '/':
                setValue('+')
                break;
            case '0':
                setValue('1')
                break;
            case '1':
                setValue('0')
                break;
        }
    }

    return (
        <div onClick={handleOnInputClick} className={"square_input"}
             style={{backgroundColor: SquareInputColorVariants[variant]}}>
            {value}
        </div>
    )
}