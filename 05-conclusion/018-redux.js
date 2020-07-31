/*------count 的发布订阅者实践------*/
let state = {
  count: 1
};
let listeners = [];

/*订阅*/
function subscribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  /*当 count 改变的时候，我们要去通知所有的订阅者*/
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}



const createStore = function (initState) {
  let state = initState;
  let listeners = [];

  /*订阅*/
  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(newState) {
    state = newState;
    /*通知*/
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}
