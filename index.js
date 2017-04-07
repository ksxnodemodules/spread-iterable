
((module) => {
  'use strict'

  var createClassFromSuper = require('simple-class-utils').createClass.super
  var {XIterable, Root} = require('x-iterable-base')

  var {iterator} = Symbol

  class SpreadIterable extends XIterable(Root) {
    constructor (iterable) {
      super()
      this.iterable = iterable
    }

    * [iterator] () {
      for (let element of this.iterable) {
        yield * element
      }
    }

    static many (...args) {
      return new SpreadIterable(args.map((iterable) => new SpreadIterable(iterable)))
    }

    static times (...args) {
      return SpreadIterable.deep(...args)
    }

    static deep (iterable, level) {
      if (!isFinite(level) || level < 0) {
        throw new TypeError(`${level} must be an unsigned number`)
      }
      for (iterable = new XIterable.Yield(iterable), level = parseInt(level); level; --level) {
        iterable = new SpreadIterable(iterable)
      }
      return iterable
    }
	}

  module.exports = SpreadIterable
})(module)
