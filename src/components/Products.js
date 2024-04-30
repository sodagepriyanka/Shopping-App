import React from "react";
import ShoesData from "./ShoesData.json";
import { CiHeart } from "react-icons/ci";

import { useNewListContext } from "./Context";
const Products = () => {
  const { addToLiked } = useNewListContext();

  return (
    <div>
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          {ShoesData.map((data) => {
            return (
              <div className="col-3 border m-2" key={data.id}>
                <img className="img-fluid mt-1 mb-2" src={data.imageURL} />

                <div className="row">
                  <div className="col">
                    <h5 className="text-start fw-bold fs-6">{data.brand}</h5>
                    <h6 className="text-start fs-6 fw-normal">{data.name}</h6>
                    <h6 className="text-start fs-6 fw-light">₹{data.price}</h6>
                  </div>
                  <div className="col text-end ">
                    <CiHeart
                      className="like-icon fs-4 text-dark "
                      onClick={() => addToLiked(data)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
