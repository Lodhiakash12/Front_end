// src/context/MyState.jsx
import React, { useEffect, useState } from 'react'

// 1. Create and export the context
export const MyContext = React.createContext();

// 2. Create the provider component
function MyState(props) {
    const [products, setProducts] = useState({
        title: "",
        price: "",
        image: "",
        category: "",
        date: ""
    });


    // 3. Export the provider component as default
   

    // add Product Function

    const addProduct = async () => {
        // validtion
        if (products.title == "" || products.price == "" || products.image == "" || products.category == "") {
            return alert("all Fields are required")
        }

        // product refrence
        // collection add karva fireDb mathi and collection name
        const ProductRef = collection(fireDb, "products")

        try {
            // Add timestamp when creating product
            const productWithTime = {
                ...products,
                time: Timestamp.now(),
                date: new Date().toISOString()
            };

            // productred , usestate to products
            await addDoc(ProductRef, productWithTime);
            getProducts();
            alert("products added successfully");
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setProducts({
                title: "",
                price: "",
                image: "",
                category: "",
                date: ""
            });

        } catch (error) {
            console.log(error)
        }
    }

    // get products data

    const [allProducts, setAllProducts] = useState([]);

    const getProducts = async () => {
        try {
            const q = query(
                collection(fireDb, 'products'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    // data and id
                    productArray.push({ ...doc.data(), id: doc.id })
                })
                setAllProducts(productArray)
            })

            return () => data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    // update product
    // allproduct item aayega
    const editProducthandle = (item) => {
        setProducts(item)
    }

    // edit handle function

    const editProducts = async (item) => {
        try {
            // setdoc data aayega usko change karege 
            await setDoc(doc(fireDb, 'products', products.id), products)
            getProducts();
            alert("product update successFully");
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setProducts({
                title: "",
                price: "",
                image: "",
                category: "",
                date: ""
            })
        } catch (error) {
            console.log(error)
        }
    }


    // delete function
    const deleteProduct = async (item) => {
        try {
            // deletdoc method use doc (dirdb,collection,item.id)
            await deleteDoc(doc(fireDb, "products", item.id))
            getProducts();
            alert("Product deleted Successfully");

        } catch (error) {
            console.log(error)
        }
    }

    // Search funclity
    const [Search, setSearch] = useState("")

    return (
        <MyContext.Provider value={{
            products,
            setProducts,
            addProduct,
            allProducts,
            getProducts,
            editProducthandle,
            editProducts,
            deleteProduct,
            Search,
            setSearch
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

  export default MyState;
