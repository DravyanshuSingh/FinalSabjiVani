import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./components/Products";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

//import Success from "./pages/Success";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/ProductList" element={<ProductList />} /> */}
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// const App = () => {
//   const user = useSelector((state) => state.user.currentUser);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/products/:category">
//           <ProductList />
//         </Route>
//         <Route path="/product/:id">
//           <Product />
//         </Route>
//         <Route path="/cart">
//           <Cart />
//         </Route>
//         <Route path="/success">
//           <Success />
//         </Route>
//         <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
//         <Route path="/register">
//           {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

export default App;
