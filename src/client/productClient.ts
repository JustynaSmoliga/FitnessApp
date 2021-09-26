import axios from "axios";
import apiUrl from "../app/api";

export interface Product {
  id: string;
  name: string;
  kcal: number;
  weightInGrams: number;
}

export async function getProducts(productName: string): Promise<Product[]> {
  const response = await axios.get(`${apiUrl}/products`, {
    params: { productName: productName },
  });

  const products: Product[] = response.data;

  return products;
}
