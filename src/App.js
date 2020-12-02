import React from 'react'
import './styles/dashboard.css'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
      </Switch>
    </>
  )
}

export default App
