import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
