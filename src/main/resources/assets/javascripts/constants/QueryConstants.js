/*
 * QueryConstants
 */

var keyMirror = require('keymirror');

module.exports = keyMirror({
  CREATE_QUERY: null,
  DESTROY_QUERY: null,
  SELECT_QUERY: null,

  RECEIVED_SINGLE_QUERY: null,
  RECEIVED_MULTIPLE_QUERIES: null,
  RECEIVED_DESTROYED_QUERY: null,

  FETCH_USER_QUERIES: null
});