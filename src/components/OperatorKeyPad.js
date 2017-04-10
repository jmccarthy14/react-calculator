import React, {Component} from 'react';

class OperatorKeyPad extends Component {
    render() {
	const operators = [['+'],['-'],['CE']];
	const allKeys = operators.map((row) => {
	    let keys = row.map((key) => {
		const currentKey = key;
		return (
			<span className="Calc-key" onClick={() => this.props.operatorClickHandler(currentKey)}>{key}</span>
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

export default OperatorKeyPad;
