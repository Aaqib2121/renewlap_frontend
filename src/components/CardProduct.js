import { React, useState, useEffect } from "react";
// Import 'HiOutlineShoppingCart' from 'react-icons/hi' namespace
import { HiOutlineShoppingCart } from 'react-icons/hi';

// Import 'HiShoppingCart' from 'react-icons/hi' namespace
import { HiShoppingCart } from 'react-icons/hi';

// ... rest of your code

import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { addToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa";
const CardProduct = ({ product }) => {
  const [showbtn, setShowbtn] = useState(false);
  const [Incart, setIncart] = useState(false);
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const { cartItems } = Cart;
  useEffect(() => {
    const isincart = cartItems.find((x) => x.product === product._id);
    if (isincart) {
      setIncart(true);
    }
    return () => {};
  });
  const addcart = () => {
    setIncart(true);
    dispatch(addToCart(product._id, 1));
  };

  return (
    <>
      <div
        className="cardProduct"
        onMouseOver={() => {
          setShowbtn(true);
        }}
        onMouseLeave={() => {
          setShowbtn(false);
        }}
      >
        <div className="imgDiv">
          <Image
            className="imgProduct tst"
            src={product.images[0]}
          />
        </div>
        <div className="bottomcard">
          <Link to={`/product/${product._id}`} exact>
            <span className="prd_name">{product.name}</span>
          </Link>
          {/* {Incart ? (
            <HiShoppingCart className="iconFav" size="26" />
          ) : (
            <HiOutlineShoppingCart
              className="iconFav"
              color="#999"
              size="26"
              onClick={addcart}
            />
          )} */}

          {Incart ? (
            <HiShoppingCart className="iconFav" size="26" />
          ) : (
            <a
            href={`https://wa.me/${product.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              className="iconFav"
              color="green"
              size="26"
            />
          </a>
          )}


          <div className="productpricecard"> {`${product.price} ₹`}</div>
          <div className="Rating">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </div>

        <Link to={`/product/${product._id}`} exact>
          <button
            className={showbtn ? "QuickView QuickViewActive" : "QuickView"}
          >
            {" "}
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default CardProduct;
