// src/reducers/rootReducer.ts
import { IState, IAction } from "./type"
import { combineReducers } from 'redux'
import { rapperReducers } from "rap/runtime/reduxLib"
function shared(state: IState = {}, action: IAction) {
	return state
}
const rootReducer = {
	...rapperReducers,
	shared,
}
export default combineReducers<IState, IAction>(rootReducer)
// src/reducers/types.ts
// export interface IState {
// }
// export interface IAction {
// 	type: string
// 	payload?: any
// }