export interface Product {
    id?: number,
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

  
export type Products = Product[]