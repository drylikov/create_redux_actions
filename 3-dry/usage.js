
import actions from './creation';

function reducer(state, action) {
  switch (action.type) {
    // Example of type checking:
    case `${actions.pageRequested}`:
      return { ...state, requested: action.payload };
  }
  return state;
}

// Example of action creation:
const action = actions.pageRequested('foo');

const state = reducer({}, action);

export { action, state };
