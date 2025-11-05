
import _ from 'lodash';
import { createAction } from 'redux-actions';

/**
 * Same as screaming snake but with a slightly updated syntax.
 *
 * Pros:
 * - Dry.
 * - Little code.
 * - Flux Standard Action constraint.
 * - IDE autocompletion.
 * - Grepable.
 *
 * Cons:
 * - Little "magic" (createAction).
 * - Still indirection.
 * - In reducers, casting is needed for types.
 * - Less conventional (action creators aren't in camelCase).
 */

/**
 * Takes an ACTION_TYPE → payload creator map and replaces payload creators by
 * their corresponding action creator in the map.
 *
 * /!\ This function mutates the `actions` param instead of returning a new map
 * in order to preserve IDE autocomplete.
 *
 * @param {Object} actions List of action payload creators by action types.
 *                         Map values can either be:
 *                         - a payload creator: (...params) => payload
 *                         - a payload & meta creators pair: [(...params) => payload, (...params) => meta]
 */
function createActionCreators(actions) {
  _.forEach(actions, (options, type) => {
    const [createPayload, createMeta] = _.isArray(options) ? options : [options];
    actions[type] = createAction(type, createPayload, createMeta);
  });
}

const actions = {
  PAGE_REQUESTED: (pathname) => pathname,
  PAGE_LOADING_END: (internalRoute) => internalRoute,
  FETCH_PAGE_INTERNAL_ROUTE_PENDING: (internalRoute) => internalRoute,
  FETCH_PAGE_INTERNAL_ROUTE_SUCCESS: (quickAccess) => quickAccess,
  FETCH_PAGE_INTERNAL_ROUTE_ERROR: (err) => err,
  FETCH_QUICK_ACCESS_PENDING: (internalRoute) => internalRoute,
  FETCH_QUICK_ACCESS_SUCCESS: (quickAccess) => quickAccess,
  FETCH_QUICK_ACCESS_ERROR: (err) => err,
  FETCH_GAME_LIST_PENDING: (internalRoute) => internalRoute,
  FETCH_GAME_LIST_SUCCESS: (gameList) => gameList,
  FETCH_GAME_LIST_ERROR: (err) => err,
  FETCH_PUBLICATION_LIST_PENDING: (internalRoute) => internalRoute,
  FETCH_PUBLICATION_LIST_SUCCESS: (publicationList) => publicationList,
  FETCH_PUBLICATION_LIST_ERROR: (err) => err,
};

// Create action creators (mutates `actions`).
createActionCreators(actions);

export default actions;
