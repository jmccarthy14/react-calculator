import React, {Component} from 'react';

class DigitKeyPad extends Component {
    render() {
	const digits = [[1,2,3],[4,5,6],[7,8,9], [0]];
	const allKeys = digits.map((row) => {
	    let keys = row.map((key) => {
		const currentKey = key;
		return (
			<span className="Calc-key" onClick={() => this.props.digitClickHandler(currentKey)}>{key}</span>
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

export default DigitKeyPad;
