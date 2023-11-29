import React from "react";
import { Toggle } from "./components/Toggle";

function App() {
  return (
    <div className="app">
      <h1>Reducer Pattern</h1>
      <p>
        See the{" "}
        <a href="https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks">
          blog post
        </a>{" "}
        for more information.
      </p>
      <Toggle />
    </div>
  );
}

export default App;
