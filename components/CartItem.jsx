import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

import productPic from "../public/product-1.webp";

const CartItem = () => {
  const sizes = [
    {
      size: "6.5",
      disp: true,
    },
    {
      size: "7",
      disp: true,
    },
    {
      size: "7.5",
      disp: true,
    },
    {
      size: "8",
      disp: true,
    },
    {
      size: "8.5",
      disp: false,
    },
    {
      size: "9",
      disp: false,
    },
    {
      size: "9.5",
      disp: true,
    },
    {
      size: "10",
      disp: true,
    },
    {
      size: "10.5",
      disp: true,
    },
    {
      size: "11",
      disp: true,
    },
    {
      size: "11.5",
      disp: true,
    },
    {
      size: "12",
      disp: false,
    },
  ];
  const quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src={productPic} alt="productPic" />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            $220.00
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Golf Shoes
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                {sizes.map((size) => {
                  return (
                    <option key={size} value={size}>{`US ${size.size}`}</option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                {quantity.map((num) => {
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
