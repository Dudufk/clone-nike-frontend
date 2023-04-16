import React from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

const ProductDetails = () => {
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

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* PRODUCT PRICE */}
            <div className="text-lg font-semibold">$ 150.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => {
                  if (size.disp) {
                    return (
                      <div
                        key={size}
                        className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"
                      >
                        {`US ${size.size}`}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={size}
                        className="border rounded-md text-center py-3 font-medium cursor-not-allowed
                        bg-black[0.1] opacity-50"
                      >
                        {`US ${size.size}`}
                      </div>
                    );
                  }
                })}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg
            font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WISHLIST BUTTON START */}
            <button
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform
              active:scale-95 mb-10 hover:opacity-75 gap-2 flex items-center justify-center"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">
                Product Details
              </div>
              <div className="text-mb mb-5">
                Feel unbeatable from the tee box to the final putt in a design ithat's pure early MJ: speed,
                class and laden with true early '90s touches like visible Air and a translucent rubber sole
                that continue to stand the test of time. This model fuses the strut of 1st MJ's championship
                with some of our best golf technology, helping you make a statement of confidence when it comes
                time to tame the course.
              </div>
              <div className="text-mb mb-5">
                Feel unbeatable from the tee box to the final putt in a design ithat's pure early MJ: speed,
                class and laden with true early '90s touches like visible Air and a translucent rubber sole
                that continue to stand the test of time. This model fuses the strut of 1st MJ's championship
                with some of our best golf technology, helping you make a statement of confidence when it comes
                time to tame the course.
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
