import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, price, image, category } = product;
        return (
            <div
                key={id}
                className="rounded bg-white  items-center shadow-lg hover:shadow-xl cursor-pointer p-5"
            >
                <div className="flex mb-5 justify-center">
                    <img className="h-60" src={image} alt="title" />
                </div>
                <div>
                    <h1 className="font-semibold mb-5">{title}</h1>
                    <div className="md:flex justify-between items-end">
                        <div>
                            <h1>$ {price}</h1>
                            <h1>{category}</h1>
                        </div>
                        <Link to={`/product/${id}`}>
                            <button className="px-5 py-1 rounded text-white font-semibold hover:bg-pink-500 cursor-pointer bg-pink-400  ">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className=" my-10 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10">
            {renderList}
        </div>
    );
};

export default ProductComponent;
