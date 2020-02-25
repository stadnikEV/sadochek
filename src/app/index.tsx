import React from 'react'
import { render } from 'react-snapshot'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import Store from './Store'


render((
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
), document.getElementById('root'))
