import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice.js";
import { useAuth } from "../context/auth.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const CartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  const [auth] = useAuth();

  console.log(auth?.user?.status);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [CartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItem = () => {
    dispatch(setClearCartItems());
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]
      ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : " opacity-0 invisible translate-x-8"
      } 
       `}
      >
        <div
          className={`blur-effect-theme max-w-xl h-screen w-full absolute right-0 `}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItem={onClearCartItem}
          />
          {CartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {CartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className=" fixed bottom-0 grid items-center bg-white w-full px-5 py-2 ">
                <div className=" flex items-center  justify-between">
                  <p className="text-base font-semibold">
                    Shipping :{" "}
                    {auth?.user?.status === "prime" ? (
                      <span className=""> {"Free"} </span>
                    ) : (
                      "₹50"
                    )}{" "}
                  </p>
                  {/* <span className=""> {"100"} </span> */}
                  <p className="text-base font-semibold">
                    Discount :{" "}
                    {auth?.user?.status === "prime" ? (
                      <span className=""> {"₹100"} </span>
                    ) : (
                      "None"
                    )}
                  </p>
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5 ">
                    ₹
                    {auth?.user?.status === "prime"
                      ? ` ${
                          totalAmount > 700 ? totalAmount - 100 : totalAmount
                        } `
                      : totalAmount + 50}
                  </h1>
                </div>
                <div className="grid items-center gap-2 ">
                    <span className=" text-base text-center font-semibold underline">
                    {auth?.user?.status === "prime" ? "** You are prime user **" : "** You are not prime user **"}
                    </span>
                  <p className="text-sm font-medium text-center">
                    **Prime Member will get free shipping & also get ₹100 discount
                    when order amount greater than ₹700
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart  text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
