import React from 'react'
import './styles/dashboard.css'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Sidebar from './components/sidebar/Sidebar'
import Valorant from './components/Valorant'
import RL from './components/RL'
import Player from './components/Player'

function App() {
  return (
    <>
      <Header />
      <div className='sideflex'>
          <Switch>
            <Route path='/player/:name' component={Player} />
            <Route path='/valorant' component={Valorant} />
            <Route path='/rl' component={RL} />
            <Route exact path='/' component={Welcome} />
          </Switch>
          <Sidebar />
      </div>
    </>
  )
}

export default App
