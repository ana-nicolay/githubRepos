import React from 'react';
import Repositories from './pages/Repositories';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {
	return(
		<BrowserRouter>
			<Switch>
				<Route path= '/' exact component={Home} />
				<Route path= '/repositories' component={Repositories} />
			}
			</Switch>
		</BrowserRouter>
	)
};