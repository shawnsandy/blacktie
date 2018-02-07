import { h, app } from "hyperapp";
import { u } from "umbrellajs";
import { FileUploads } from "./elements/file-uploads";

export const state = {
  name: null
}

export const actions = {
  setName: () => state => ({ name: "John Hancock" })
}

export const view = (state, actions) => (
    <FileUploads required='required' />
)
