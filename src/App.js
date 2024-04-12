import { React } from 'react';
import './App.scss';
import Button from './components/button';

const App = () =>
	<div className="App">
		<a href="https://www.google.com">
			<Button{ ...{ data: { color: 'blue', label: 'button1' }} }/>
		</a>
		<a href="https://www.instagram.com">
			<Button{ ...{ data: { color: 'red', label: 'button2' }} }/>
		</a>
		<input type="text"/>
	</div>;

export default App;
