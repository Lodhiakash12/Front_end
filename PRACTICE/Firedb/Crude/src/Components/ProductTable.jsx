// ProductTable.jsx
import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';
import { Timestamp } from 'firebase/firestore';

const ProductTable = () => {
  const context = useContext(MyContext);
  const { allProducts, deleteProduct, editProducthandle, setProducts, editProducts, products } = context;
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editProducts();
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={isEditing ? handleEditSubmit : context.addProduct} className="form-container">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={products.title}
            onChange={(e) => setProducts({...products, title: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={products.price}
            onChange={(e) => setProducts({...products, price: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={products.imageUrl}
            onChange={(e) => setProducts({...products, imageUrl: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={products.category}
            onChange={(e) => setProducts({...products, category: e.target.value})}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
        {isEditing && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setIsEditing(false);
              setProducts({
                title: "",
                price: "",
                imageUrl: "",
                category: "",
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Product List</h2>
      {allProducts.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.date}</td>
                <td>
                  <button
                    onClick={() => {
                      editProducthandle(product);
                      setIsEditing(true);
                    }}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product)}
                    className="btn btn-danger"
                    style={{ marginLeft: '8px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-products">
          <p>No products found. Please add some products.</p>
        </div>
      )}
    </div>
  );
};

export default ProductTable;