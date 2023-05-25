import './App.css';
import {SquareInput} from "./components/SquareInput/SquareInput";

const App = () => {
    return (
        <div className="App">
            <SquareInput variant={"arg1"} />
            <SquareInput variant={"arg2"}/>
            <SquareInput variant={"result"}/>
            <SquareInput variant={"operator"}/>
        </div>
    );
}

export default App;
