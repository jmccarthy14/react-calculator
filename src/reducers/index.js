
// REDUCER
export default (state = {total: 0}, action) => {
    switch(action.type) {
    case 'ADD':
	return {total: (state.lastDigits + state.total)};
    case 'SUBTRACT':
	return {total: (state.total - state.lastDigits)};
    default:
	return state;
    };

}
