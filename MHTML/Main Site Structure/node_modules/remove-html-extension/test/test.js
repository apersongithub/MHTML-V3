'use strict'

var assert = require('assert')
var removeHtmlExtension = require('..')

describe('remove-html-extension', function () {

  it('removes html extensions', function () {
    ['pages/foobar.html', 'pages/foobar.htm', 'pages/foobar.HTML'].forEach(function (filePath) {
      assert.equal(removeHtmlExtension(filePath), 'pages/foobar')
    })
  })

  it('does nothing when no html extension exists', function () {
    assert.equal(removeHtmlExtension('pages/foo.html.bar.xml'), 'pages/foo.html.bar.xml')
  })
})
