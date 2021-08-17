export function verifiedInput(input) {
    const isComma = value => value === ',';
    const isNumber = value => {
        if (value.trim() === '') {
            return false;
        }

        return !isNaN(value);
    }

    const commaCount = Array.from(input).filter(isComma).length;
    const splitNumberCount = input.split(',').filter(isNumber).length;

    if (commaCount + 1 !== splitNumberCount) {
        return false;
    }

    return true;
}