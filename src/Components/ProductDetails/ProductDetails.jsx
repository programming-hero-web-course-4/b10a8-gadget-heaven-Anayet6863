import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
  const params = useParams();
 // console.log(params);
  const { product_id } = params;
  const allData = useLoaderData();
//   console.log(product_id);
//   console.log(allData);
  // const product = allData.find((item)=>item.product_id === product_id)
  const product = allData.find(
    (item) => item.product_id === Number(product_id)
  );
  //console.log(product);

  return (
    <div>
      <div className="flex flex-col max-w-full h-[300px] bg-[#9538E2] text-center text-white">
        <h1 className="text-5xl">Product Details</h1>
        <p className="mt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>
      <div>
        <div className="hero bg-base-200 w-[1000px] h-[500px] p-5 relative -top-[130px] left-[400px] rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product.product_image}
              className="max-w-sm rounded-lg shadow-xl"
            />
            <div>
              <h1>{product.product_title}</h1>
              <p>Price:$ {product.price}</p>
              <button className="btn border border-yellow-300 text-black">
                {product.availability ? "In Stock" : "Out of stock"}
              </button>
              <p>{product.description}</p>
              <p>Specification:</p>
              {product.specification.map((item, idx) => (
                <p key={idx}>
                  {idx + 1 + ". "}
                  {item}
                </p>
              ))}
              <div className="flex gap-5">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div>
                    {product.rating}
                </div>
              </div>
              <button className="btn btn-primary">Add to cart.</button>
              <button className="btn button rounded-full "><img className="w-[30px] h-[30px] mt-1" src={"https://i.ibb.co.com/Db6k2Bk/icons8-heart-50.png"}></img></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;