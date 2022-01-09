import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { IProductCardProps } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

const product: IProductCardProps = {
  id: "1",
  title: "Coffee - Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard id={product.id} title={product.title}>
          <ProductCard.Image />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard
          id={product.id}
          title={product.title + " 2"}
          img={product.img}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          id={product.id}
          title={product.title + " 3"}
          img={product.img}
          style={{ backgroundColor: "rgb(156, 156, 156)" }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
