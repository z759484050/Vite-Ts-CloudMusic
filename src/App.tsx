import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from "react-redux";
import store from "./store";
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { IconStyle } from './assets/iconfont/iconfont'
import routes from './routes'
function App() {
 return(
   <Provider store={store}>
       <HashRouter>
    <IconStyle></IconStyle>
  { renderRoutes (routes) }
  </HashRouter>
   </Provider>

 ) 
}

export default App
