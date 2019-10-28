import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import tea from "./tea.png";
import { Switch, FormControlLabel, CircularProgress } from "@material-ui/core";
import { appReducer, initialState } from "./components/appReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { checked, isLoading } = state;
  console.log("checked", checked);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormControlLabel
          label="Loading"
          control={
            <Switch
              onChange={() => {
                dispatch("LOADING");
              }}
              checked={checked}
            />
          }
        />
        {isLoading ? <CircularProgress /> : <img src={tea} />}
      </header>
    </div>
  );
}

export default App;
