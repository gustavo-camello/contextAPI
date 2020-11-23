import React from "react";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import Form from "./Form";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";


class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </ThemeProvider>
      )
  }
}

export default App;
