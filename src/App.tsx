import React from "react";
import { Provider } from "react-redux";
import { Child } from "./Child";
import { Counter } from "./Counter";
import { Parent } from "./Parent";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Appito</div>
      <Counter />
      <Parent>
        <Child />
      </Parent>
    </Provider>
  );
}

export default App;
