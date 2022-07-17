import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/porductAction";
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetechProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => console.log(err));
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetechProducts();
    }, []);
    console.log(products);
    return (
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;
