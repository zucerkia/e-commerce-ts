import ProductCard from "../../components/molecules/ProductCard";
import Products from "../../components/organisms/Products";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const { products } = useProducts();

  return (
    <>
      <h1>Productos</h1>
      <Products>
        {products.map(({ description, title, thumbnail, price, id }) => (
          <ProductCard
            key={title}
            product={{
              description,
              title,
              thumbnail,
              price,
              id,
            }}
          />
        ))}
      </Products>
    </>
  );
};

export default Home;
