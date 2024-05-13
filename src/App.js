// App.js
import React from "react";

import Body from "./Componts/Body.js";
import { Provider } from "react-redux";

import appstore from "./utils/appstore.js";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
