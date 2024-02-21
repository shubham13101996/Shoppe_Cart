import React from "react";
import emptybag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
const CartEmpty = ({onCartToggle}) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt="img/empty-bag"
          className=" w-40 lg:w-36 h-auto sm:w-28 object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          onClick={onCartToggle}
          className="button-theme flex items-center justify-center text-slate-900 py-2 text-sm px-5 font-semibold active:scale-110 gap-3 shadow-lg bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-500 "
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
