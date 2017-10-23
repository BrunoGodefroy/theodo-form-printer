import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactGA from 'react-ga'

import store from '@redux/store'
import App from '@components/App'

ReactGA.initialize('UA-102505380-1')
ReactGA.pageview('/')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
