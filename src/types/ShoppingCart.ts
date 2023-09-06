import { Product } from "./Products"

type ShoppingCartItem = { [x: string]: {
    product: Product,
    quantity: number
} }

export interface ShoppingCart {
    items: ShoppingCartItem
    total: number
}