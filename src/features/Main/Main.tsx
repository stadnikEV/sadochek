import React from 'react'

import TopPage from './components/TopPage'
import BottomPage from './components/BottomPage'

import './style/main.scss'

const Main: React.FC = () => (
  <div className="main">
    <TopPage />
    <BottomPage />
  </div>
)

export default Main
