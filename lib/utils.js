'use strict';

/**
 * Generate a replacing function given a table of patterns.
 * Inspired by: http://code.google.com/p/jslibs/wiki/JavascriptTips#String_converter
 * The order of elements is significant. Longer elements should be listed first.
 *
 * @param {Object.<string, string>} translationTable - The translation table of key-value pairs
 * @returns {function(string): string} A translating function
 * @throws {TypeError} If translationTable is not an object
 *
 * @example
 * const replacer = createReplacer({ 'k': 'không', 'hem': 'không' });
 * replacer('k biết') // Returns: 'không biết'
 */
const createReplacer = (translationTable) => {
	// Input validation
	if (typeof translationTable !== 'object' || translationTable === null) {
		throw new TypeError('Translation table must be an object');
	}

	// Build pattern array by escaping special regex characters
	const pattern = Object.keys(translationTable).map((key) => {
		// Escape regexp special chars and backspace
		const escaped = String(key).replace(/[-()[\]{}+?*.$^|,:#<!\\]/g, '\\$&');
		// eslint-disable-next-line no-control-regex
		return escaped.replace(/\x08/g, '\\x08');
	});

	// Create regex from pattern
	const regExp = new RegExp(pattern.join('|'), 'g');

	/**
	 * Replace function that uses the translation table
	 * @param {string} str - Input string to translate
	 * @returns {string} The translated string
	 */
	return (str) => {
		if (typeof str !== 'string') {
			throw new TypeError('Input must be a string');
		}
		return str.replace(regExp, (match) => translationTable[match]);
	};
};

module.exports = { createReplacer };
