import React from 'react';
import './App.css';
import {Input} from "./Input/Input";
import {History} from "./History/History";
import {StateType} from "./State";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <Input input={props.state.input}/>
      <History history={props.state.history}/>
    </div>
  );
}

export default App;
