import {NEW_DIGIT} from '../actions.js'
// REDUCER
export default (state = {total: 0, number: 0, displayValue: 0}, action) => {
    switch(action.type) {
    case NEW_DIGIT:
	console.log('new digit registered');
	let newNumber = addDigit(state.number, action.digit);
	console.log('new number: ' + newNumber);
	return Object.assign({}, state, {number: newNumber, displayValue: newNumber});

    case 'ADD':
	// TODO: make total and displayValue update
	return Object.assign({}, state, {total: (state.lastDigits + state.total)});
    case 'SUBTRACT':
	return Object.assign({}, state, {total: (state.total - state.lastDigits)});
    default:
	return state;
    };

}

function addDigit(currentValue, newDigit) {
    return currentValue * 10 + newDigit; 
}
