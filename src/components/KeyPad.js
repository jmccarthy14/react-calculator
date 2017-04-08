import React, {Component} from 'react';

class KeyPad extends Component {
    render() {
	const digits = [[1,2,3],[4,5,6],[7,8,9], [0]];
	const allKeys = digits.map((row) => {
	    let keys = row.map((key) => {
		// TODO: make this a key component that takes an event listener.
		return (
			<span className="Calc-key">{key}</span>
		);
	    });
	    return(
		<div className='Calc-row'>
		    {keys}
		</div>
	    );
	});
	return (
		<div>{allKeys}</div>
	);
    }
}

export default KeyPad;
