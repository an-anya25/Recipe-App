import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeListTile = ({ singleRecipeItem }) => {
  const navigate = useNavigate();
  const handleOnClick = (currentRecipeItemId) => {
    navigate(`/recipe/${currentRecipeItemId}`);
  };

  return (
    <div className="border rounded-md border-gray-200 shadow-lg overflow-hidden hover:shadow-xl ">
      <div>
        <img
          src={singleRecipeItem.image}
          alt={singleRecipeItem.name}
          className="object-contain w-full h-full duration-300 hover:scale-110"
        />
      </div>
      <div className="m-4 mt-6">
        <div className="font-bold cursor-pointer">{singleRecipeItem.name}</div>
        <div className="text-gray-600 text-sm font-extralight italic">
          {singleRecipeItem.cuisine}
        </div>
        <div className="flex justify-between items-center">
          <div>{singleRecipeItem.prepTimeMinutes} mins</div>
          <button onClick={() => handleOnClick(singleRecipeItem.id)}>
            Read more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeListTile;
