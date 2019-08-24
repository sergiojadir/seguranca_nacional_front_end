import React from 'react'
import { HashRouter, Route, Redirect, NavLink } from 'react-router-dom'

import Passengers from './components/passengers/Passengers';
import Flights from './components/flights/Flights';
import Tickets from './components/tickets/Tickets';
import Suspicious from './components/suspicious/Suspicious';

export default props => (
	<HashRouter>
		<div>
			<NavLink to="/passengers">Passengers </NavLink>| 
			<NavLink to="/flights"> Flights </NavLink>| 
			<NavLink to="/tickets"> Tickets </NavLink>|
			<NavLink to="/suspicious"> Suspicious</NavLink>
			<div>
				<Route path="/passengers" component={Passengers}/>
				<Route path="/flights" component={Flights}/>
				<Route path="/tickets" component={Tickets}/>
				<Route path="/suspicious" component={Suspicious}/>
				<Redirect from='*' to='/passengers' />
			</div>
		</div>
	</HashRouter>
)