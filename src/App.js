import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

// top-level React component
const App = () => {
	let [counter, setCounter ] = useState(0);
	return (
		<div className="app">
			<h1>Hello World!</h1>
			<h2>{`Counter: ${counter}`}</h2>
			<div className="btn-container">
				<button onClick={() => setCounter(counter+1) }>Add more!</button>
				<button onClick={() => setCounter(0) }>Reset</button>
			</div>
		</div>
	);

};
//const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);