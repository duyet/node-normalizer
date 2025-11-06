'use strict';

// Model list
const teencode = require('../model/teencode.json');

// Create conversion table - using Object.assign for shallow copy
const conversionTable = Object.assign({}, teencode);

/**
 * Normalize Vietnamese text by expanding slang/teencode to their full meanings.
 *
 * @param {string} text - The text to normalize
 * @returns {string} The normalized text
 * @throws {TypeError} If input is not a string
 *
 * @example
 * normalize('k biết') // Returns: 'không biết'
 * normalize('hem biết') // Returns: 'không biết'
 */
const normalize = (text) => {
	// Input validation
	if (typeof text !== 'string') {
		throw new TypeError('Input must be a string');
	}

	// Replace each word using the conversion table
	return text.replace(/[^\s]+/g, (word) => conversionTable[word] || word);
};

module.exports = normalize;
