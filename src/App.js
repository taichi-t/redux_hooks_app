import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/reducer";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <Navbar />
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
