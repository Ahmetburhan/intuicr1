import React from "react";
import "./styles.css";
import data from "./components/data/data";
import TransactionLanding from "./components/pages/TransactionLanding/TransactionLanding";

export default function App() {
  console.log("data", data);
  return (
    <div className="App">
      <h1>Transaction</h1>
      <TransactionLanding />
    </div>
  );
}
