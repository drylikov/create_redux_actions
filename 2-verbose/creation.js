
import { createAction } from 'redux-actions';

/**
 * With Flux Standard Action constraint.
 *
 * Pros:
 * - Easy to use (no casting needed in reducers).
 * - IDE autocompletion.
 * - Grepable.
 * - Flux Standard Action constraint.
 *
 * Cons:
 * - Little indirection.
 * - Verbose, typos are possible.
 * - Not dry.
 * - Action types and creators are separated.
 */

const types = {
  PAGE_REQUESTED: 'PAGE_REQUESTED',
  PAGE_LOADING_END: 'PAGE_LOADING_END',
  FETCH_PAGE_INTERNAL_ROUTE_PENDING: 'FETCH_PAGE_INTERNAL_ROUTE_PENDING',
  FETCH_PAGE_INTERNAL_ROUTE_SUCCESS: 'FETCH_PAGE_INTERNAL_ROUTE_SUCCESS',
  FETCH_PAGE_INTERNAL_ROUTE_ERROR: 'FETCH_PAGE_INTERNAL_ROUTE_ERROR',
  FETCH_QUICK_ACCESS_PENDING: 'FETCH_QUICK_ACCESS_PENDING',
  FETCH_QUICK_ACCESS_SUCCESS: 'FETCH_QUICK_ACCESS_SUCCESS',
  FETCH_QUICK_ACCESS_ERROR: 'FETCH_QUICK_ACCESS_ERROR',
  FETCH_GAME_LIST_PENDING: 'FETCH_GAME_LIST_PENDING',
  FETCH_GAME_LIST_SUCCESS: 'FETCH_GAME_LIST_SUCCESS',
  FETCH_GAME_LIST_ERROR: 'FETCH_GAME_LIST_ERROR',
  FETCH_PUBLICATION_LIST_PENDING: 'FETCH_PUBLICATION_LIST_PENDING',
  FETCH_PUBLICATION_LIST_SUCCESS: 'FETCH_PUBLICATION_LIST_SUCCESS',
  FETCH_PUBLICATION_LIST_ERROR: 'FETCH_PUBLICATION_LIST_ERROR',
};

const actions = {
  pageRequested: createAction(types.PAGE_REQUESTED, (pathname) => pathname),
  pageLoadingEnd: createAction(types.PAGE_LOADING_END, (internalRoute) => internalRoute),
  fetchPageInternalRoutePending: createAction(types.FETCH_PAGE_INTERNAL_ROUTE_PENDING, (internalRoute) => internalRoute),
  fetchPageInternalRouteSuccess: createAction(types.FETCH_PAGE_INTERNAL_ROUTE_SUCCESS, (quickAccess) => quickAccess),
  fetchPageInternalRouteError: createAction(types.FETCH_PAGE_INTERNAL_ROUTE_ERROR, (err) => err),
  fetchQuickAccessPending: createAction(types.FETCH_QUICK_ACCESS_PENDING, (internalRoute) => internalRoute),
  fetchQuickAccessSuccess: createAction(types.FETCH_QUICK_ACCESS_SUCCESS, (quickAccess) => quickAccess),
  fetchQuickAccessError: createAction(types.FETCH_QUICK_ACCESS_ERROR, (err) => err),
  fetchGameListPending: createAction(types.FETCH_GAME_LIST_PENDING, (internalRoute) => internalRoute),
  fetchGameListSuccess: createAction(types.FETCH_GAME_LIST_SUCCESS, (gameList) => gameList),
  fetchGameListError: createAction(types.FETCH_GAME_LIST_ERROR, (err) => err),
  fetchPublicationListPending: createAction(types.FETCH_PUBLICATION_LIST_PENDING, (internalRoute) => internalRoute),
  fetchPublicationListSuccess: createAction(types.FETCH_PUBLICATION_LIST_SUCCESS, (publicationList) => publicationList),
  fetchPublicationListError: createAction(types.FETCH_PUBLICATION_LIST_ERROR, (err) => err),
};

export default actions;
export { types };
