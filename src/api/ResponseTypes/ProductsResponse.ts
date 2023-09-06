
export interface ProductResponse {
    id: number,
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    discountPercentage?: number;
    rating?: number
    stock?: number
    brand?: string
    category?: string
    images?: string[]
  }


export interface ProductsResponse {
    products: ProductResponse[]
    total: number
    skip: number
    limit: number
}