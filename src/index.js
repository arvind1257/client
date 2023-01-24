import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import HOME from './mainPage/main';
import App from "./auth/App";

import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import  Reducers from './reducers';

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route path="signup" element={<App/>}></Route>
          <Route path="home" element={<HOME/>}></Route>
          <Route path="setting" element={<HOME/>}></Route>
          <Route path="report" element={<HOME/>}></Route>
          <Route path="filter" element={<HOME/>}></Route>
          <Route path="contact" element={<HOME/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
