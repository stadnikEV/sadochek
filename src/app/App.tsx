import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import { Main } from 'features/Main'
import initGA from './utils/initGA'
import setVH from './utils/setVH'

import './css/fonts.css'
import './css/reset.css'
import './css/base.css'


const App: React.FC = () => {
  useEffect(() => {
    setVH()
    initGA()
  }, [])

  return (
    <Route exact path="/" component={Main} />
  )
}

export default App
