// MyState.jsx
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDb } from '../Firebase/firebase';

function MyState(props) {
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProduct = async () => {
    setLoading(true);
    setError(null);
    
    try {
      if (!products.title || !products.price || !products.imageUrl || !products.category) {
        throw new Error("All fields are required");
      }

      const ProductRef = collection(fireDb, "products");
      await addDoc(ProductRef, products);
      
      setProducts({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      });
      
      // Don't redirect immediately - let the real-time update handle it
    } catch (error) {
      setError(error.message);
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDb, 'products'),
        orderBy('time', 'desc')
      );

      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProducts(productArray);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      setError("Failed to fetch products");
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const editProducthandle = (item) => {
    setProducts(item);
  };

  const editProducts = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDb, 'products', products.id), products);
      setProducts({
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      });
    } catch (error) {
      setError("Failed to update product");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (item) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setLoading(true);
      try {
        await deleteDoc(doc(fireDb, "products", item.id));
      } catch (error) {
        setError("Failed to delete product");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <MyContext.Provider value={{ 
      products, 
      setProducts, 
      addProduct, 
      getProducts, 
      allProducts, 
      editProducthandle, 
      editProducts, 
      deleteProduct,
      loading,
      error
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;