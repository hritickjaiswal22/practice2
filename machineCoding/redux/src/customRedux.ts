interface ActionType {
  type: string;
  payload?: any;
}

interface CreateStorePropTypes {
  reducer: (state: any, action: ActionType) => any;
  initialState: any;
}

class Redux {
  state;
  reducer;
  listeners: Array<Function>;
  isDispatching = false;

  constructor({ initialState, reducer }: CreateStorePropTypes) {
    this.state = initialState;
    this.reducer = reducer;
    this.listeners = [];
  }

  getState() {
    if (this.isDispatching)
      throw new Error("Cannot use store.getState while dispatching");

    return this.state;
  }

  subscribe(fn: Function) {
    if (typeof fn !== "function")
      throw new Error("subscribe argument should be of type function");

    if (this.isDispatching)
      throw new Error("Cannot use store.subscribe while dispatching");

    this.listeners.push(fn);

    return () => {
      if (this.isDispatching)
        throw new Error("Cannot use store.unsubscribe while dispatching");

      this.listeners = this.listeners.filter((cb) => cb !== fn);
    };
  }

  dispatch(action: ActionType) {
    if (this.isDispatching)
      throw new Error("Cannot use store.dispatch while dispatching");

    this.isDispatching = true;

    try {
      this.state = this.reducer(this.state, action);
    } catch (error) {
      this.isDispatching = false;
    }
    this.listeners.forEach((listener) => listener());

    return action;
  }
}

let store: Redux | null = null;

function createStore(
  reducer: (state: any, action: ActionType) => any,
  initialState: any
): Redux {
  if (store) return store;

  store = new Redux({ initialState, reducer });

  return store;
}

export { createStore };
export type { ActionType };
