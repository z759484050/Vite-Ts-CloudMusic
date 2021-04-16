import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { IconStyle } from './assets/iconfont/iconfont'
import routes from './routes'
function App() {
 return(
  <HashRouter>
    <IconStyle></IconStyle>
  { renderRoutes (routes) }
  </HashRouter>
 ) 
}

export default App
