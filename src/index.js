import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store , persistor} from "./store";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


// const rootElement = document.getElementById("root");
root.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <StrictMode>
      <App />
    </StrictMode>
    </PersistGate>
  </Provider>
);
