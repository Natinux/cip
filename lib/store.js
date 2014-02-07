/**
 * @fileOverview The Inher store object.
 */

var helpers = require('./helpers');

var noop = function(){};

/**
 * A plain ol' Object map serves as inher private data store.
 * 
 * @param {string=} optId Desfine an id.
 * @constructor
 */
var Store = module.exports = function(optId) {
  /** @type {Array} Store for Mixin constructors, FIFO. */
  this.mixins = [];
  /** @type {?Inher} Container for singleton instance.. */
  this.singleton = null;
  /** @type {Array} Contains the stubbed arguments */
  this.stubbedArgs = [];
  /** @type {string} A unique identifier */
  this.id = optId || helpers.generateRandomString();
  /** @type {?Function} The user defined ctor */
  this.UserCtor = noop;
};