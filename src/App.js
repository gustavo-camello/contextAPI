import React from "react";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import Form from "./Form";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider} from "./contexts/LanguageContext";

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
              <NavBar />
              <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
      )
  }
}

export default App;
