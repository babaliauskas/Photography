import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import about from './Components/Navigation/About/About'
import contact from './Components/Navigation/Contact/Contact'
import pricing from './Components/Navigation/Pricing/Pricing'

export default (
    <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} /> 
        <Route path='/pricing' component={pricing} />
    </Switch>
)