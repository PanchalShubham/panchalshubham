import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/projects" component={Projects} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
