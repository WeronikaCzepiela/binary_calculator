import './App.css';
import {SquareInput} from "./components/SquareInput/SquareInput";
import GitHub from './images/GitHub.png';
import LinkdedIn from './images/LinkedIn.png';
import {useState} from "react";

const App = () => {
    const [arg1, setArg1] = useState(Array.from({length: 4}).map(() => '0'))
    const [arg2, setArg2] = useState(Array.from({length: 4}).map(() => '0'))
    const [result, setResult] = useState(Array.from({length: 8}).map(() => '0'))
    const [operator, setOperator] = useState('+')

    return (
        <div className="App">
            <div className={"top"}>
                <h1>BINARY CALCULATOR</h1>
            </div>

            <div className={"calculator"}>
                <div className={"left_section"}>
                    <div className="arg1">
                        {
                            Array.from({length: 4}).map((item, idx) => <SquareInput lineValues={arg1} setLineValues={setArg1} order={idx} variant={"arg1"}/>)
                        }
                    </div>

                    <div className="arg2">
                        {
                            Array.from({length: 4}).map((item, idx) => <SquareInput lineValues={arg2} setLineValues={setArg2} order={idx} variant={"arg2"}/>)
                        }

                    </div>
                    <div className={"left_bottom_section"}>
                        <div className={"horizontal-left"}/>
                        <div className="result">
                            {
                                Array.from({length: 8}).map((item, idx) => <SquareInput order={idx} lineValues={result} setLineValues={setResult} variant={"result"}/>)
                            }
                        </div>
                    </div>

                </div>
                <div className={"right_section"}>
                    <div className={"vertical"}/>
                    <div className={"operator_line"}>
                        <div className="operator">
                            <SquareInput lineValues={operator} setLineValues={setOperator} variant={"operator"}/>
                        </div>
                        <div className={"horizontal-right"}/>
                    </div>
                </div>
            </div>
            <div className={"bottom"}>
                <p>Check my accounts</p>
                <a target={"_blank"} href={"https://github.com/WeronikaCzepiela"}> <img src={GitHub}/> </a>
                <a target={"_blank"} href={"https://www.linkedin.com/in/--weronika-czepiela/"}> <img src={LinkdedIn}/>
                </a>
            </div>
        </div>
    );
}

export default App;
