import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const { productID } = useParams();
    return (
        <div>
            <h1>ID: {productID}</h1>
        </div>
    );
};

export default ProductDetails;
