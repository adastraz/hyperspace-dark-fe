import React, { useEffect, useState } from 'react'
import './styles/dashboard.css'
import Header from './components/Header'
import { Switch, Route, useLocation } from 'react-router-dom'
import Welcome from './components/Welcome'
import Sidebar from './components/sidebar/Sidebar'
// import Valorant from './components/Valorant'
import RL from './components/RL'
import Player from './components/Player'
// import Store from './components/store/Store'
// import Item from './components/store/Item'
// import Checkoutshop from './components/store/Checkoutshop'
import EsportsGear from './components/store/EsportsGear'
import Footer from './components/Footer'
import { SpaceBetween } from './styles/App'
import { StoreDiv } from './styles/Store'

function App() {
  const [display, setdisplay] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/store'){
      setdisplay(true)
    } else if (location.pathname !== '/store' && display === true){
      setdisplay(false)
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <SpaceBetween>
          <Switch>
            <Route path='/player/:name' component={Player} />
            {/* <Route path='/valorant' component={Valorant} /> */}
            <Route path='/rl' component={RL} />
            {/* <Route path='/store/:id' component={Item} /> */}
            <Route path='/store' component={EsportsGear} />
            <Route exact path='/' component={Welcome} />
          </Switch>
          <Sidebar small={false}/>
      </SpaceBetween>
      <StoreDiv id='collection-component-1610576218932' className={display ? '' : 'hidden'}></StoreDiv>
      <Footer />
    </>
  )
}

export default App
