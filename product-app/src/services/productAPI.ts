import axios from "axios";
type SetProductsFunction = (products: any[]) => void;
type SetProductFunction = (product: any) => void;

export const fetchProducts = async (setProducts: SetProductsFunction) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
export const fetchProductDetails = async (
  setProduct: SetProductFunction,
  productId: number
) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    setProduct(response.data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
