import { React } from 'react';
import Button from './components/button';

const App = () =>
	<div className="App">
		<a href="https://www.google.com">
			<Button { ...{ data: { color: 'blue', label: 'button1' }} }/>
		</a>
		<a href="https://www.instagram.com">
			<Button { ...{ data: { color: 'red', label: 'button1' }} }/>
		</a>

	</div>;

export default App;
