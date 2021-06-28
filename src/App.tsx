import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import DadJoke from './pages/dad-jokes'
import GlobalLayout from './layouts/GlobalLayout'
import NavBar from './components/navigation/NavBar'
import TrafficLight from './pages/traffic-lights'
import DarkModeLayout from './layouts/DarkModeLayout'
import ReactTransitionGroup from './pages/react-transition-group'
import './styles/app.css'

const App = () => {
  return (
    <RecoilRoot>
      <DarkModeLayout>
        <Router>
          <NavBar />
          <GlobalLayout>
            <Switch>
              <Route path="/dad-jokes">
                <DadJoke />
              </Route>
              <Route path="/traffic-lights">
                <TrafficLight />
              </Route>
              <Route path="/transitions">
                <ReactTransitionGroup />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </GlobalLayout>
        </Router>
      </DarkModeLayout>
    </RecoilRoot>
  )
}

export default App
