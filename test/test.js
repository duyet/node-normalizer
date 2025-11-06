'use strict';

const assert = require('assert');
const normalize = require('../index.js');

describe('Normalizer', () => {
	describe('Basic functionality', () => {
		it('should replace Vietnamese teencode', () => {
			assert.strictEqual(normalize('hem biết'), 'không biết');
		});

		it('should replace single character teencode', () => {
			assert.strictEqual(normalize('k biết'), 'không biết');
		});

		it('should handle multiple teencode words', () => {
			assert.strictEqual(normalize('k hem'), 'không không');
		});

		it('should leave unknown words unchanged', () => {
			assert.strictEqual(normalize('hello world'), 'hello world');
		});

		it('should handle mixed teencode and normal text', () => {
			assert.strictEqual(normalize('tôi hem biết'), 'tôi không biết');
		});
	});

	describe('English contractions', () => {
		it('should expand English contractions', () => {
			assert.strictEqual(normalize("can't"), 'can not');
			assert.strictEqual(normalize("won't"), 'will not');
			assert.strictEqual(normalize("i'm"), 'I am');
		});

		it('should expand complex contractions', () => {
			assert.strictEqual(normalize("couldn't've"), 'could not have');
		});

		it('should handle how questions', () => {
			assert.strictEqual(normalize("how'd you do that"), 'how did you do that');
		});
	});

	describe('Edge cases', () => {
		it('should handle empty string', () => {
			assert.strictEqual(normalize(''), '');
		});

		it('should handle string with only spaces', () => {
			assert.strictEqual(normalize('   '), '   ');
		});

		it('should preserve spacing', () => {
			assert.strictEqual(normalize('k  hem'), 'không  không');
		});

		it('should handle newlines', () => {
			assert.strictEqual(normalize('k\nhem'), 'không\nkhông');
		});
	});

	describe('Input validation', () => {
		it('should throw TypeError for non-string input', () => {
			assert.throws(() => normalize(123), TypeError);
			assert.throws(() => normalize(null), TypeError);
			assert.throws(() => normalize(undefined), TypeError);
			assert.throws(() => normalize({}), TypeError);
			assert.throws(() => normalize([]), TypeError);
		});
	});
});
