import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import PageNotFound from "./containers/PageNotFound";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route
                    path="/product/:productID"
                    element={<ProductDetails />}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default App;
