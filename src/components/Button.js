
import { React } from 'react';
const Button = ({ data: { color, label }}) =>
	<button style={ {
		backgroundColor: color,
		padding: '10px',
	} }
	>
		{ label }
	</button>;

export default Button;
