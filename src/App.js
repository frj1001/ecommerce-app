import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Product from './pages/Product/Product';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import { GlobalContext } from './MyContexts';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [login, setLogin] = useState(localStorage.getItem('login') || "logged-out") //getting login from localstorage
  const [searchText, setSearchText] = useState("")
  const [categories, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])
  

  useEffect(() => {
    // Api fetching to get categories of products
    searchResults.length = 0
    axios.get('https://dummyjson.com/products/categories')
    .then(response => setCategories(response.data))
    .catch((error) => console.log(error))
    
    // Api fetching based on search input
    if (searchText) {
      setCurrentPage(1)
      axios.get(`https://dummyjson.com/products/search?q=${searchText}`)
        .then(response => {
          if(response.data.products.length!==0){
            setSearchResults(response.data.products)
          }else{
            setSearchResults([{title: "No Such Products Found"}])
          }
        })
        .catch((error) => console.log(error))
    }

    // Api fetching on keyword 'new' for newarrival products
    axios.get('https://dummyjson.com/products/search?q=new')
    .then(response=> setItems(response.data.products))
    .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText])

  console.log(searchResults)

  // Add to Cart button Functionality
  const addToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);

    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
        // If the product is already in the cart, update its count
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === product.id ? { ...item, count: item.count + 1 } : item
            )
        );
    } else {
        // If the product is not in the cart, add it with count 1
        setCartItems((prevItems) => [...prevItems, { ...product, count: 1 }]);
    }
};

  return (
    <div>
      {/* Wrapping all context in global context provider to manage props drilling and state lifting */}
      <GlobalContext.Provider value={{ 
        login, setLogin,
        cartCount, 
        setCartCount,
        cartItems, 
        setCartItems,
        addToCart,
        currentPage, setCurrentPage,
        
         }}>
          <Header setSearchText={setSearchText} searchResults={searchResults} />
        <Routes>
          <Route path='/' element={<Home categories={categories} items={items}/>} />
          <Route path='/about' element={<About />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/products' element={<Product searchResults={searchResults} categories={categories}/>} />
            <Route path='/newarrivals' element={<NewArrivals items={items} />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
