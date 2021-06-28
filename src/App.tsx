import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import DadJoke from './components/DadJoke'
import GlobalLayout from './layouts/GlobalLayout'
import NavBar from './components/navigation/NavBar'
import TrafficLight from './components/TrafficLight'
import DarkModeLayout from './layouts/DarkModeLayout'
import './styles/app.css'

const App = () => {
  return (
    <RecoilRoot>
      <DarkModeLayout>
        <Router>
          <NavBar />
          <Switch>
            <GlobalLayout>
              <Route path="/dad-jokes">
                <DadJoke />
              </Route>
              <Route path="/traffic-lights">
                <TrafficLight />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </GlobalLayout>
          </Switch>
        </Router>
      </DarkModeLayout>
    </RecoilRoot>
  )
}

export default App
