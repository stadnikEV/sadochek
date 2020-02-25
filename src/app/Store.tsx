import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'


const Store: React.FC = ({ children }) => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Store
