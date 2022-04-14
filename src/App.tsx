import React from 'react';
import './App.css';
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import MultiActionButton from "carbon-react/lib/components/multi-action-button";
import Button from "carbon-react/lib/components/button";
import GlobalStyle from "carbon-react/lib/style/global-style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CarbonProvider>
        Add the component you want to test here:
        <br />

        <MultiActionButton text="main">
          <Button>Child 1</Button>
        </MultiActionButton>
      </CarbonProvider>
      </div>
  );
}

export default App;
