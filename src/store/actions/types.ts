import { Product } from "../../types/Products"

// export const ADD_ITEM = 'ADD_ITEM'
// export const REMOVE_ITEM = 'REMOVE_ITEM'

export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    SUMAR = 'SUMAR'
}

export interface AddItemAction {
    type: ActionTypes.ADD_ITEM,
    payload: Product
}

export interface RemoveItemAction {
    type: ActionTypes.REMOVE_ITEM,
    payload: number
}

export interface SumarAction {
    type: ActionTypes.SUMAR,
}

export type ShoppingCartActions = AddItemAction | RemoveItemAction | SumarAction