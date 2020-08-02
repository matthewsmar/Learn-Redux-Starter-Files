// A Reducer takes in 2 things

// 1. The action
// 2. A copy of the current state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;