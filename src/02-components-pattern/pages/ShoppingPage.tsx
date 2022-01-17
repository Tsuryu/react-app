import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
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
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxReached, increaseBy, maxCount }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>RESET</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxReached && <button onClick={() => increaseBy(2)}>+2</button>}
            <span>
              {count}/{maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
