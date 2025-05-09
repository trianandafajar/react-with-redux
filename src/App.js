import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state";
import "./App.css";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => dispatch(actionCreators.depositMoney(1000))}>
        Deposit
      </button>
      <button onClick={() => dispatch(actionCreators.withdrawMoney(1000))}>
        Withdraw
      </button>
    </div>
  );
}

export default App;
          