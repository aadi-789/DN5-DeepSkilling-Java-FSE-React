function Product(props) {
  return (
    <div className="product-card">
      <h2>{props.name}</h2>
      <p><strong>Price:</strong> ₹{props.price}</p>
      <p><strong>Brand:</strong> {props.brand}</p>
    </div>
  );
}

export default Product;