
import _ from 'lodash';
import { createAction } from 'redux-actions';

/**
 * Still dry, and with autocompletion, but without SCREAMING_SNAKE_CASE. :(
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
 * - Less conventional (action types aren't in SCREAMING_SNAKE_CASE).
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
  pageRequested: action((pathname) => pathname),
  pageLoadingEnd: action((internalRoute) => internalRoute),
  fetchPageInternalRoutePending: action((internalRoute) => internalRoute),
  fetchPageInternalRouteSuccess: action((quickAccess) => quickAccess),
  fetchPageInternalRouteError: action((err) => err),
  fetchQuickAccessPending: action((internalRoute) => internalRoute),
  fetchQuickAccessSuccess: action((quickAccess) => quickAccess),
  fetchQuickAccessError: action((err) => err),
  fetchGameListPending: action((internalRoute) => internalRoute),
  fetchGameListSuccess: action((gameList) => gameList),
  fetchGameListError: action((err) => err),
  fetchPublicationListPending: action((internalRoute) => internalRoute),
  fetchPublicationListSuccess: action((publicationList) => publicationList),
  fetchPublicationListError: action((err) => err),
};

// Finishes the process of creating action creators.
// Mutates the actions object to avoid losing IDE autocompletion.
_.forEach(actions, (finishCreator, type) => {
  actions[type] = finishCreator(type);
});

export default actions;
