import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
    selectedProducts,
    removeSelectedProducts,
} from "../redux/actions/porductAction";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productID } = useParams();
    const dispatch = useDispatch();
    const fetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productID}`)
            .catch((err) => console.log(err));

        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if (productID && productID !== "") {
            fetchProductDetails();
        }
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, [productID]);
    console.log(product);
    return (
        <div>
            <h1>ID: {productID}</h1>
        </div>
    );
};

export default ProductDetails;
