import React from 'react';

import { Provider } from "react-redux";

import MainPage from "./components/MainPage/MainPage";

import './App.scss';
import { store } from "./store/store";


const App = () => (
    <Provider store={store}>
      <MainPage/>
    </Provider>
)

export default App;
