import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products); 
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <table>
     <thead>
        <tr>
            <th>S.No.</th>
            <th>Product Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>

        { products.map(product => (
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
            </tr>
            
        ))}
        </tbody>
      </table>
    </div>
  );
}
