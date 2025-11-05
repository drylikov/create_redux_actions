
import _ from 'lodash';
import { createAction } from 'redux-actions';

/**
 * Same as middleground but with SCREAMING_SNAKE_CASE (the one I prefer :)).
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

// `createAction` wrapper.
// Takes the same arguments than `createAction`, except the `type`.
// It returns a partially executed `createAction` that can be called with the
// action `type` to finish its creation.
function action(...args) {
  return (type) => createAction(type, ...args);
}

// Starts the process of creating action creators.
// This is done in two steps for these reasons:
// - It helps being DRY: `createAction` doesn't need the type right away,
//   so it can be defined once as the property name.
// - It allows most IDE to autocomplete imported actions.
// The first requirement could be solved by using redux-actions `createActions`
// but it would prevent the second one from being met.
const actions = {
  PAGE_REQUESTED: action((pathname) => pathname),
  PAGE_LOADING_END: action((internalRoute) => internalRoute),
  FETCH_PAGE_INTERNAL_ROUTE_PENDING: action((internalRoute) => internalRoute),
  FETCH_PAGE_INTERNAL_ROUTE_SUCCESS: action((quickAccess) => quickAccess),
  FETCH_PAGE_INTERNAL_ROUTE_ERROR: action((err) => err),
  FETCH_QUICK_ACCESS_PENDING: action((internalRoute) => internalRoute),
  FETCH_QUICK_ACCESS_SUCCESS: action((quickAccess) => quickAccess),
  FETCH_QUICK_ACCESS_ERROR: action((err) => err),
  FETCH_GAME_LIST_PENDING: action((internalRoute) => internalRoute),
  FETCH_GAME_LIST_SUCCESS: action((gameList) => gameList),
  FETCH_GAME_LIST_ERROR: action((err) => err),
  FETCH_PUBLICATION_LIST_PENDING: action((internalRoute) => internalRoute),
  FETCH_PUBLICATION_LIST_SUCCESS: action((publicationList) => publicationList),
  FETCH_PUBLICATION_LIST_ERROR: action((err) => err),
};

// Finishes the process of creating action creators.
// Mutates the actions object to avoid losing IDE autocompletion.
_.forEach(actions, (finishCreator, type) => {
  actions[type] = finishCreator(type);
});

export default actions;
