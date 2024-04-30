import React from "react";
import { useNewListContext } from "./Context";
const Wishlist = () => {
  const { likedItems, moveFromLikedToCart } = useNewListContext();
  return (
    <div>
      <div className="container text-center">
        <div className="row d-flex justify-content-center">
          {likedItems?.map((data) => {
            return (
              <div className="col-3 border m-2" key={data.id}>
                <img className="img-fluid mt-1 mb-2" src={data.imageURL} />
                <div className="row">
                  <div className="col">
                    <h5 className="text-start fw-bold fs-6">{data.brand}</h5>
                    <h6 className="text-start fs-6 fw-normal">{data.name}</h6>
                    <h6 className="text-start fs-6 fw-light">₹{data.price}</h6>
                  </div>
                  <div className="col text-end">
                    <button
                      type="button"
                      className="btn btn-dark btn-sm text-white rounded-1 position-relative py-2 px-4 "
                      onClick={() => moveFromLikedToCart(data)}
                    >
                      Add To Cart
                    </button>
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

export default Wishlist;
