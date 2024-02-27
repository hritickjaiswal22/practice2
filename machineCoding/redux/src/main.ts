import "./style.css";
import { createStore, ActionType } from "./customRedux";

const DEFAULT_ACTIONS = {
  ADD_NAME: "ADD_NAME",
};

function nameReducer(state: any, action: ActionType) {
  switch (action.type) {
    case DEFAULT_ACTIONS.ADD_NAME:
      const temp = [...state, { ...action.payload }];
      return temp;
      break;

    default:
      return;
  }
}

const store = createStore(nameReducer, [
  {
    fname: "Hritick",
    lname: "Jaiswal",
  },
]);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="root">
    <h1>Hello World</h1>
  </div>
`;

console.log(store.getState());
console.log(typeof store.subscribe(() => console.log("Listener called")));
store.dispatch({
  type: DEFAULT_ACTIONS.ADD_NAME,
  payload: {
    fname: "Jordan",
    lname: "",
  },
});
console.log(store.getState());
