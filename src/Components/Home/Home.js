import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "../../Context/AuthProvider";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Career from "../Pages/Career/Career";
import ContactUs from "../Pages/Contactus/ContactUs";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import Product from "../Pages/Product/Product";
import ReadMore from "../Pages/ReadeMore/ReadMore";

const Home = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/product">
              <Product></Product>
            </PrivateRoute>
            <PrivateRoute path="/our_specialist/:details">
              <ReadMore></ReadMore>
            </PrivateRoute>
            <Route path="/contact_us">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default Home;
