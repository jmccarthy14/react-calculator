
export const NEW_DIGIT = 'NEW_DIGIT';
export function newDigit(digit) {
    return {
	type: NEW_DIGIT,
	digit: digit
    };
}


