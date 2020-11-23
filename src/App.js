import React from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import "./App.css";


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <>
          <NavBar />
          <Form />
        </>
      </div>
      )
  }
}

export default App;
