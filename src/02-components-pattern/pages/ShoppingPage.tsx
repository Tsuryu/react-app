import { useEffect, useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          {Object.values(shoppingCart).map(({ id, title, img, count }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              img={img}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              value={count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
