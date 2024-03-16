import ProductCard from "./productCard/ProductCard";
import "./products.scss";

function Products() {
  return (
    <div className="container-products">
      <div className="title">
        <h1>Найгарячіші товари</h1>

        <div className="pagination">
          <p>01 / 03</p>
          <div>
            <span className="disabled">⟵</span> <span>⟶</span>
          </div>
        </div>
      </div>
      <div className="cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
