import React from 'react'
import DadJoke from './components/DadJoke'
import TrafficLight from './components/TrafficLight'
import GlobalLayout from './layouts/GlobalLayout'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import './styles/app.css'

const App = () => {
  return (
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GlobalLayout>
    </Router>
  )
}

export default App
