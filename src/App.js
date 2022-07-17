import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ProductListing} />
            </Routes>
        </>
    );
};

export default App;
