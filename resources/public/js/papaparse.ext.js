/**
 * @fileoverview Closure Compiler externs for Papa Parse v4.1.0.
 * @see http://papaparse.com/
 * @externs
 */

/**
 * @type {Object}
 * @const
 */
var Papa = {};

/**
 * @param {string} input
 * @param {Object=} config
 * @return {*}
 */
Papa.parse = function(input, config) {};

/**
 * @param {*} input
 * @param {Object=} config
 * @return {string} a properly-formatted CSV string
 */
Papa.unparse = function(input, config) {};

/** @type {string} */
Papa.RECORD_SEP;

/** @type {string} */
Papa.UNIT_SEP;

/** @type {string} */
Papa.BYTE_ORDER_MARK;

/** @type {Array.<string>} */
Papa.BAD_DELIMITERS;

/** @type boolean */
Papa.WORKERS_SUPPORTED;

/** @type {string|null} */
Papa.SCRIPT_PATH;

/** @type {number} */
Papa.LocalChunkSize;

/** @type {number} */
Papa.RemoteChunkSize;

/** @type {string} */
Papa.DefaultDelimiter;
