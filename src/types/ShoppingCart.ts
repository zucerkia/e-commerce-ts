import { Product } from "./Products"

type ShoppingCartItem = { [x: string]: {
    item: Product,
    quantity: number
} }

export interface ShoppingCart {
    products: ShoppingCartItem
    total: number
}