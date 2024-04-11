import { React } from 'react';
import './App.scss';

const App = () =>
	<div className="App">
		<a href="https://www.google.com">
			<button style={ {
				backgroundColor: 'red', color: 'black',
				padding: '10px',
			} }
			>
				button1
			</button>

		</a>
		<a href="https://www.instagram.com">
			<button style={ {
				backgroundColor: 'blue', color: 'black',
				padding: '10px',
			} }
			>
				button2</button>

		</a>
	</div>;

export default App;
