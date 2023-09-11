import { Product } from "../../types/Products";
import { 
    // ADD_ITEM, 
    // REMOVE_ITEM, 
    ActionTypes, AddItemAction, RemoveItemAction, SumarAction } from "./types";


export const addItem = (product: Product): AddItemAction => {
    return ({
        type: ActionTypes.ADD_ITEM,
        payload: product
    })
}

export const removeItem = (id: number): RemoveItemAction => {
    return ({
        type: ActionTypes.REMOVE_ITEM,
        payload: id
    })
}

export const sumar = (): SumarAction => {
    return {
        type: ActionTypes.SUMAR
    }
}