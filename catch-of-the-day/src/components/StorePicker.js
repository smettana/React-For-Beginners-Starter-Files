import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
	render(){
		return ( //Возвращать только 1 узел и все внутри него
			<form className="store-selector">
				{/* комменты так */}
				<h2>Please enater a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store -></button>
			</form>
		);
	}
}

export default StorePicker;