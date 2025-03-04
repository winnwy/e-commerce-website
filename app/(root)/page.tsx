import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  const formattedProducts = latestProducts.map(product => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString()
  }));
  

  return (
    <>
      <ProductList
        data={formattedProducts}
        title="Newest Arrivals"
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
};

export default Homepage;
