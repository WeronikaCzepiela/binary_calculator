import './App.css';
import {SquareInput} from "./components/SquareInput/SquareInput";
import GitHub from './images/GitHub.png';
import LinkdedIn from './images/LinkedIn.png';

const App = () => {
    return (
        <div className="App">
            <div className={"top"}>
                <h1>BINARY CALCULATOR</h1>
            </div>

            <div className={"calculator"}>
                <div className={"left_section"}>
                    <div className="arg1">
                        <SquareInput variant={"arg1"}/>
                        <SquareInput variant={"arg1"}/>
                        <SquareInput variant={"arg1"}/>
                        <SquareInput variant={"arg1"}/>
                    </div>

                    <div className="arg2">
                        <SquareInput variant={"arg2"}/>
                        <SquareInput variant={"arg2"}/>
                        <SquareInput variant={"arg2"}/>
                        <SquareInput variant={"arg2"}/>
                    </div>
                    <div className={"left_bottom_section"}>
                        <div className={"horizontal-left"}/>
                        <div className="result">
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                            <SquareInput variant={"result"}/>
                        </div>
                    </div>

                </div>
                <div className={"right_section"}>
                    <div className={"vertical"}/>
                    <div className={"operator_line"}>
                        <div className="operator">
                            <SquareInput variant={"operator"}/>
                        </div>
                        <div className={"horizontal-right"}/>
                    </div>
                </div>
            </div>
            <div className={"bottom"}>
                <p>Check my accounts</p>
                <a target={"_blank"} href={"https://github.com/WeronikaCzepiela"}> <img src={GitHub}/> </a>
                <a target={"_blank"} href={"https://www.linkedin.com/in/--weronika-czepiela/"}> <img src={LinkdedIn}/> </a>
            </div>
        </div>
    );
}

export default App;
