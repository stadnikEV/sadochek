import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import Store from './Store'


ReactDOM.render((
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
), document.getElementById('root'))
