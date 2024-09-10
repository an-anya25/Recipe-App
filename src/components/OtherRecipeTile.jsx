import React from "react";
import { useNavigate } from "react-router-dom";

const OtherRecipeTile = ({ singleRecipeItem }) => {
  const navigate = useNavigate();

  const handleOnClick = (currentRecipeItemId) => {
    navigate(`/recipe/${currentRecipeItemId}`);
  };

  return (
    <div
      className="border rounded-md border-gray-200 shadow-lg overflow-hidden hover:shadow-xl lg:mb-8 "
      onClick={() => handleOnClick(singleRecipeItem.id)}
    >
      <div>
        <img
          src={singleRecipeItem.image}
          alt={singleRecipeItem.name}
          className="object-contain w-full h-full duration-300 hover:scale-110"
        />
      </div>
      <div className="m-4 mt-6">
        <div className="mb-1 md:mb-0 text-sm md:text-base font-semibold md:font-bold cursor-pointer">
          {singleRecipeItem.name}
        </div>
        <div className="mb-1 md:mb-0 text-gray-600 lg:text-sm text-xs font-extralight italic">
          {singleRecipeItem.cuisine}
        </div>
        <div className="mb-1 md:mb-0 md:flex md:justify-between md:items-center lg:text-base sm:text-sm text-xs">
          <div>{singleRecipeItem.prepTimeMinutes} mins</div>
          <button onClick={() => handleOnClick(singleRecipeItem.id)}>
            Read more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherRecipeTile;
