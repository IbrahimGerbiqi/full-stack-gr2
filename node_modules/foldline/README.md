# foldline
[![npm](https://img.shields.io/npm/v/foldline.svg?style=flat-square)](https://npmjs.com/foldline)
[![npm license](https://img.shields.io/npm/l/foldline.svg?style=flat-square)](https://npmjs.com/foldline)
[![npm downloads](https://img.shields.io/npm/dm/foldline.svg?style=flat-square)](https://npmjs.com/foldline)
[![build status](https://img.shields.io/travis/jhermsmeier/node-foldline.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-foldline)

Folds a long line according to the [RFC 5322](http://tools.ietf.org/html/rfc5322#section-2.1.1)

Note: There are other documents, specifically the MIME documents
([RFC 2045], [RFC 2046], [RFC 2049], [RFC 4288], [RFC 4289]),
that extend (and limit) this specification to allow for different sorts of message bodies.

[RFC 2045]: http://tools.ietf.org/html/rfc2045
[RFC 2046]: http://tools.ietf.org/html/rfc2046
[RFC 2049]: http://tools.ietf.org/html/rfc2049
[RFC 4288]: http://tools.ietf.org/html/rfc4288
[RFC 4289]: http://tools.ietf.org/html/rfc4289

## Install via [npm](https://npmjs.com/package/foldline)

```sh
$ npm install --save foldline
```

## Usage

```js
var foldLine = require( 'foldline' )
```

```js
foldLine(
  {String} input,
  {Number} maxLength (optional),
  {Boolean} hardWrap (optional)
)
```

## Example

```js
foldLine( 'Subject: from x.y.test by example.net via TCP with ESMTP id ABC12345 for <mary@example.net>', 30 )
```

```
Subject: from x.y.test by<CR><LF>
  example.net via TCP with<CR><LF>
  ESMTP id ABC12345 for<CR><LF>
  <mary@example.net>
```

## Tests

```sh
$ npm test
```

## Benchmarks

```sh
$ npm run benchmark
```
