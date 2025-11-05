
import { createActions } from 'redux-actions';

/**
 * Dry but magic.
 *
 * Pros:
 * - Dry.
 * - Little code.
 * - Flux Standard Action constraint.
 *
 * Cons:
 * - More "magic" (createActions).
 * - More indirection.
 * - Not grepable.
 * - In reducers, casting is needed for types.
 * - No IDE autocompletion.
 */

const actions = createActions({
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
});

export default actions;
