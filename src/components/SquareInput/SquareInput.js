import './SquareInput.css'
import {SquareInputColorVariants} from "./SquareInput.consts";


export const SquareInput = (props) => {
    console.log(props.variant)
    return (
        <div className={"square_input"} style={{backgroundColor: SquareInputColorVariants[props.variant]}}>
            {props.value}
        </div>
    )
}