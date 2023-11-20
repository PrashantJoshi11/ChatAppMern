import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// contexts
import SettingsProvider from "./contexts/SettingsContext";
import {Provider} from 'react-redux';
import store from './Redux/Store'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor=persistStore(store);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
             </PersistGate>
              </Provider>
            
       
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
