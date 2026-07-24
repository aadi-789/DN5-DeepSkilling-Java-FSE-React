import Product from "./Product";

function Products() {

  const productList = [
    {
      id: 1,
      name: "Laptop",
      price: 65000,
      brand: "Dell"
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
      brand: "Samsung"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3500,
      brand: "Sony"
    }
  ];

  return (
    <div>

      {
        productList.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            brand={product.brand}
          />
        ))
      }

    </div>
  );
}

export default Products;