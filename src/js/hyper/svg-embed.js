import { h, app } from "hyperapp";
import { u } from "umbrellajs";

export const state = {
  name: null,
};

export const actions = {
  setName: () => state => ({ name: John Hancock }),
};

export const view = (state, actions) => (
  <div
	class=""
	oncreate={ e => {
	  console.log("component created")
	}}
  >
<p>Hello, {state.name}</p>
  </div>
);
