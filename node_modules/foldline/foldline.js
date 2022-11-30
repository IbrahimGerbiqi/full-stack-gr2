
const CRLF = '\r\n'

const SP = ' '


/**
 * Maximum line length (excluding <CR><LF>)
 * There are two limits that RFC 5322 places on the number of
 * characters in a line. Each line of characters MUST be
 * no more than 998 characters, and SHOULD be no more
 * than 78 characters, excluding the <CR><LF>.
 * @type {Number}
 * @constant
 */
const MAX_LINE_LENGTH = 998

/**
 * Default maximum line length (excluding <CR><LF>)
 * @type {Number}
 * @constant
 */
const DEFAULT_LINE_LENGTH = 78

/**
 * Minimum `maxLength` that can be used
 * @type {Number}
 * @constant
 */
const MIN_LINE_LENGTH = 2

/**
 * Folds a long line according to RFC 5322
 * @see http://tools.ietf.org/html/rfc5322#section-2.1.1
 *
 * @param {String} input - input string
 * @param {Number} maxLength - maximum line length (excluding CRLF)
 * @param {Boolean} hardWrap - whether to insert a hard break at `maxLength`
 * @returns {String}
 */
function foldLine( input, maxLength, hardWrap ) {

  if( maxLength != null && maxLength < MIN_LINE_LENGTH ) {
    throw new Error( 'Maximum length must not be less than ' + MIN_LINE_LENGTH )
  }

  if( maxLength != null && maxLength > MAX_LINE_LENGTH ) {
    throw new Error( 'Maximum length must not exceed ' + MAX_LINE_LENGTH )
  }

  // RFC compliant default line length
  maxLength = maxLength || DEFAULT_LINE_LENGTH

  input = input.replace( /[\r\n]+/g, '' )

  // We really don't need to fold this
  if( input.length <= maxLength ) {
    return input
  }

  var output = ''
  var index = 0
  var nextIndex = 0
  var length = input.length
  var line = 0
  var trim = 0

  while( index < length ) {
    if( !hardWrap && ~( nextIndex = input.lastIndexOf( SP, index + maxLength ) ) ) {
      if( nextIndex > index ) {
        output += input.slice( index, nextIndex ) + CRLF + SP
        index = nextIndex
      } else {
        output += input.slice( index, index + maxLength - trim ) + CRLF + SP
        index = index + maxLength - trim
        hardWrap = true
      }
    } else {
      output += input.slice( index, index + maxLength - trim ) + CRLF + SP
      index = index + maxLength - trim
    }
    if( ( length - index ) < maxLength ) {
      output += input.slice( index )
      break
    }
    if( line === 0 ) {
      trim = 1
    }
    line++
  }

  return output

}

foldLine.unfold = function unfold( input ) {
  return input.replace( /\r\n\s/gm, '' )
}

module.exports = foldLine
