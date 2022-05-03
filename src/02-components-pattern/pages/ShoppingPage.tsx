import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        img={product.img}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxReached, increaseBy, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
