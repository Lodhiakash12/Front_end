import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context/MyContext';

function Producttable() {
    const context = useContext(MyContext);
    
    
   
    if (!context) {
        return <div className="alert alert-danger">Context not available</div>;
    }

    const { allProducts = [], deleteProduct, editProducthandle } = context;

    // Handle case where products haven't loaded yet
    if (!Array.isArray(allProducts)) {
        return <div className="alert alert-info">Loading products...</div>;
    }

    return (
        <div className="container mt-4">
            {allProducts.length === 0 ? (
                <div className="alert alert-warning">No products found</div>
            ) : (
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product, index) => {
                            // Skip if product is null/undefined
                            if (!product) return null;
                            
                            return (
                                <tr key={product.id || index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {product.image && (
                                            <img 
                                                src={product.image} 
                                                alt={product.title} 
                                                style={{ 
                                                    width: '50px', 
                                                    height: '50px', 
                                                    objectFit: 'cover', 
                                                    marginRight: '10px' 
                                                }}
                                            />
                                        )}
                                        {product.title || 'Untitled'}
                                    </td>
                                    <td>${product.price || '0.00'}</td>
                                    <td>{product.category || 'Uncategorized'}</td>
                                    <td>
                                        {product.date ? new Date(product.date).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td>
                                        <Link 
                                            to="/updateproduct" 
                                            className="btn btn-primary btn-sm me-2"
                                            onClick={() => editProducthandle?.(product)}
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteProduct?.(product)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Producttable;