import { ProductResponse } from "../api/ResponseTypes/ProductsResponse"

export type Product = Pick<ProductResponse, 'description' | 'price' | 'title' | 'thumbnail' | 'id'>
export type Products = Product[]