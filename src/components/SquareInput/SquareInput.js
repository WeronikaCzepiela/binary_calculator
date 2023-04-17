import './SquareInput.scss'
import {SquareInputColorVariants} from "./SquareInput.consts";
import {useState} from "react";


export const SquareInput = (props) => {
    console.log(props.variant)
    const [count, setCount] = useState(5);

    return (
        <div onClick={() => setCount(count + 1)} className={"square_input"}
             style={{backgroundColor: SquareInputColorVariants[props.variant]}}>
            {count}
        </div>
    )
}