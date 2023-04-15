import './App.css';
import {SquareInput} from "./components/SquareInput/SquareInput";

const App = () => {
    return (
        <div className="App">
            <SquareInput value={"1"} variant={"arg1"} />
            <SquareInput value={"0"} variant={"arg2"}/>
            <SquareInput value={"0"} variant={"result"}/>
            <SquareInput value={"+"} variant={"operator"}/>
        </div>
    );
}

export default App;
