import { useEffect, useState } from "react";

// Api
import { get } from "../api";

// Types
import { ProductsResponse } from "../api/ResponseTypes/ProductsResponse";
import { Products } from "../types/Products";

export const useProducts = () => {
  const [products, setProducts] = useState<Products>([]);

  //   const getProducts = async () => {
  //     const response = await fetch("https://dummyjson.com/products");

  //     if (response.ok) {
  //       const data = await response.json();
  //       setProducts(data.products);
  //     }
  //   };

  const getProducts = async () => {
    const response = await get<ProductsResponse>(
      "https://dummyjson.com/products"
    );
    setProducts(response.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};
