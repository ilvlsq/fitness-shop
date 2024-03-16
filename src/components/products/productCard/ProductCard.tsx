import "./product_card.scss";

function ProductCard() {
  return (
    <div className="container-card">
      <div className="container-img">
        <img className="heart" src="heart-circle.png" alt="heart icon" />
        <img className="card-img" src="card-img.png" alt="product photo" />
      </div>
      <h1>Термобілизна для бодібілдерів</h1>
      <p>Для чоловіків</p>
      <p>2 кольори</p>
      <p className="price">4000 грн.</p>
    </div>
  );
}

export default ProductCard;
