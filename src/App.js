// import logo from "./logo.svg";
import "./App.css";
import { incNumber } from "./actions/index";
import { decNumber } from "./actions/index";

import { useSelector, useDispatch } from "react-redux";
function App() {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Abhishek Ranjan</h1>
      <div className="check">
        <button className="decrement" onClick={() => dispatch(decNumber())}>
          <span>-</span>
        </button>
        <input type="text" className="valuess" value={changeTheNumber} />
        <button className="decrement" onClick={() => dispatch(incNumber())}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default App;
