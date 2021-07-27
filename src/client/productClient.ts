import axios from "axios";
import { Product } from "../slice/mealsSlice";

interface ProductDto {
  id:number;
  name: string;
  kcal: number;
  weightInGrams: number;
}

export async function getProducts(productName: string):Promise<Product[]> {
  const response = await axios.get("http://localhost:8080/products", {
    params: { productName: productName },
  });

  const productDtos: ProductDto[] = response.data;

  const products: Product[] = productDtos.map((productDto) => {
    const product: Product = {
      id:productDto.id,
      caloriesInGrams: productDto.weightInGrams,
      name: productDto.name,
      totalCalories: productDto.kcal,
      quantity: 1,
    };
    return product;
  });
  return products;
}