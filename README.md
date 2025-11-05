# node-normalizer

[![npm version](https://img.shields.io/npm/v/node-normalizer.svg)](https://www.npmjs.com/package/node-normalizer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Node.js library for normalizing Vietnamese text by expanding slang, teencode, and English contractions to their full meanings.

## Features

- ✨ Expand Vietnamese teencode and slang (e.g., "k" → "không", "hem" → "không")
- 📝 Expand English contractions (e.g., "can't" → "can not")
- 🚀 Zero dependencies (removed lodash dependency)
- 🎯 Simple and intuitive API
- ✅ Comprehensive test coverage
- 💪 Input validation and error handling

## Installation

```bash
npm install node-normalizer
```

## Usage

```javascript
const normalize = require('node-normalizer');

// Vietnamese teencode
console.log(normalize('k biết')); // Output: 'không biết'
console.log(normalize('hem biết')); // Output: 'không biết'

// English contractions
console.log(normalize("can't do it")); // Output: 'can not do it'
console.log(normalize("i'm ready")); // Output: 'I am ready'

// Mixed text
console.log(normalize('tôi k biết')); // Output: 'tôi không biết'
```

## API

### normalize(text)

Normalizes the input text by expanding slang, teencode, and contractions.

#### Parameters

- `text` (string): The text to normalize

#### Returns

- (string): The normalized text

#### Throws

- `TypeError`: If input is not a string

#### Example

```javascript
const normalize = require('node-normalizer');

try {
	const result = normalize('k biết');
	console.log(result); // 'không biết'
} catch (error) {
	console.error(error.message);
}
```

## Supported Conversions

The library currently supports the following conversions:

### Vietnamese Teencode

- `k` → `không`
- `hem` → `không`

### English Contractions

- `can't` → `can not`
- `won't` → `will not`
- `couldn't've` → `could not have`
- `i'm` → `I am`
- `how'd` → `how did`

You can extend the conversion table by modifying `model/teencode.json`.

## Extending the Dictionary

To add more conversions, edit the `model/teencode.json` file:

```json
{
	"k": "không",
	"hem": "không",
	"your-slang": "your full text"
}
```

## Development

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

### Lint code

```bash
npm run lint
```

### Format code

```bash
npm run format
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Van-Duyet Le](https://github.com/duyetdev)

## Keywords

Vietnamese, text normalization, NLP, teencode, slang expansion, text processing

## Author

**Van-Duyet Le**

- Website: https://duyet.net
- GitHub: [@duyetdev](https://github.com/duyetdev)

## Changelog

### 1.0.0

- 🎉 Major refactor and modernization
- ✨ Added input validation and error handling
- 🔥 Removed lodash dependency (zero dependencies now)
- 📚 Improved documentation with comprehensive examples
- ✅ Added extensive test coverage
- 🛠️ Added ESLint and Prettier for code quality
- 🚀 Modernized codebase with ES6+ features

### 0.0.1

- Initial release
