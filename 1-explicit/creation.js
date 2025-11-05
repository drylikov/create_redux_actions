
/**
 * Vanilla Redux actions.
 *
 * Pros:
 * - Explicit.
 * - No indirection.
 * - Easy to use (no casting needed in reducers).
 * - IDE autocompletion.
 * - Grepable.
 * - No external lib.
 *
 * Cons:
 * - Extremely verbose, typos are possible.
 * - Not dry.
 * - No constraint on actions (actions may not be FSA).
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
  pageRequested: (pathname) => ({ type: types.PAGE_REQUESTED, payload: pathname }),
  pageLoadingEnd: (internalRoute) => ({ type: types.PAGE_LOADING_END, payload: internalRoute }),
  fetchPageInternalRoutePending: (internalRoute) => ({
    type: types.FETCH_PAGE_INTERNAL_ROUTE_PENDING,
    payload: internalRoute,
  }),
  fetchPageInternalRouteSuccess: (quickAccess) => ({
    type: types.FETCH_PAGE_INTERNAL_ROUTE_SUCCESS,
    payload: quickAccess,
  }),
  fetchPageInternalRouteError: (err) => ({ type: types.FETCH_PAGE_INTERNAL_ROUTE_ERROR, error: true, meta: err }),
  fetchQuickAccessPending: (internalRoute) => ({ type: types.FETCH_QUICK_ACCESS_PENDING, payload: internalRoute }),
  fetchQuickAccessSuccess: (quickAccess) => ({ type: types.FETCH_QUICK_ACCESS_SUCCESS, payload: quickAccess }),
  fetchQuickAccessError: (err) => ({ type: types.FETCH_QUICK_ACCESS_ERROR, error: true, meta: err }),
  fetchGameListPending: (internalRoute) => ({ type: types.FETCH_GAME_LIST_PENDING, payload: internalRoute }),
  fetchGameListSuccess: (gameList) => ({ type: types.FETCH_GAME_LIST_SUCCESS, payload: gameList }),
  fetchGameListError: (err) => ({ type: types.FETCH_GAME_LIST_ERROR, error: true, meta: err }),
  fetchPublicationListPending: (internalRoute) => ({
    type: types.FETCH_PUBLICATION_LIST_PENDING,
    payload: internalRoute,
  }),
  fetchPublicationListSuccess: (publicationList) => ({
    type: types.FETCH_PUBLICATION_LIST_SUCCESS,
    payload: publicationList,
  }),
  fetchPublicationListError: (err) => ({ type: types.FETCH_PUBLICATION_LIST_ERROR, error: true, meta: err }),
};

export default actions;
export { types };
