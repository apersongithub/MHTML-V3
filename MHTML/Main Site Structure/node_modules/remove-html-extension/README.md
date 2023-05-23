# remove-html-extension [![Build Status](https://secure.travis-ci.org/johnotander/remove-html-extension.png?branch=master)](https://travis-ci.org/johnotander/remove-html-extension)

Remove an html extension from a string

## Installation

```bash
npm install --save remove-html-extension
```

## Usage

```javascript
var removeHtmlExtension = require('remove-html-extension')

removeHtmlExtension('pages/foobar.html')  // => 'pages/foobar'
removeHtmlExtension('pages/foobar.htm')   // => 'pages/foobar'
removeHtmlExtension('pages/foobar.HTML')  // => 'pages/foobar'
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
