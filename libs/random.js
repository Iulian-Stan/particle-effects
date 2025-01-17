/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function randomFloat(min, max) {
    if (max === undefined) {
        if (min === undefined) {
            max = 1;
            min = 0;
        } else {
            max = min;
            min = 0;
        }
    } else {
        if (min > max) return undefined;
    }
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function randomInt(min, max) {
    if (max === undefined) {
        if (min === undefined) {
            max = 1;
            min = 0;
        } else {
            max = min;
            min = 0;
        }
    } else {
        if (min > max) return undefined;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}