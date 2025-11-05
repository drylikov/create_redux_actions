
import actions, { types } from './creation';

function reducer(state, action) {
  switch (action.type) {
    // Example of type checking:
    case types.PAGE_REQUESTED:
      return { ...state, requested: action.payload };
  }
  return state;
}

// Example of action creation:
const action = actions.pageRequested('foo');

const state = reducer({}, action);

export { action, state };
