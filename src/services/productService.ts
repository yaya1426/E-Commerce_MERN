import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    { title: "Dell Laptop", image: "https://m.media-amazon.com/images/I/61+9ew81AfL._AC_UF1000,1000_QL80_.jpg", price: 15000, stock: 10 },
  ];


  const existingProducts = await getAllProducts();

  if(existingProducts.length === 0) {
    await productModel.insertMany(products)
  }
};
