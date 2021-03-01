import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './components/Homepage';
import Education from './components/Education';
import Projects from './components/Projects';
import Knowledge from './components/Knowledge';
import Contact from './components/Contact';

function App() {
	const [isLoadAnimation, setIsLoadAnimation] = useState(true);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Homepage isLoadAnimation={isLoadAnimation} setIsLoadAnimation={setIsLoadAnimation} />} />
					<Route exact path="/education" component={Education} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/knowledge" component={Knowledge} />
					<Route exact path="/contact" component={Contact} />
					<Redirect from="/" to="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
