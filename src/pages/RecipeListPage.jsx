import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContextProvider";
import RecipeListTile from "../components/RecipeListTile";
import { useNavigate } from "react-router-dom";

const RecipeListPage = () => {
  const { recipeList, loading } = useContext(RecipeContext);
  console.log(recipeList);

  const navigate = useNavigate();

  const handleOnClick = (currentRecipeItemId) => {
    navigate(`/recipe/${currentRecipeItemId}`);
  };

  if (loading)
    return (
      <div className="font-serif text-red-600">
        <h1 className="text-gray-600 italic text-4xl sm:text-5xl text-center py-5 border-b-[1px] fixed top-0 left-0 right-0 z-50 bg-white opacity-90  border-gray-200 shadow-md">
          {" "}
          Ramsey's Recipes
        </h1>
        <div className="flex justify-center items-center mt-40">
          <div className="text-gray-600 text-xl text-center">
            Please wait loading...
          </div>
        </div>
      </div>
    );

  return (
    <div className="font-serif text-red-600">
      <h1 className="text-gray-600 italic text-4xl sm:text-5xl text-center py-5 border-b-[1px] fixed top-0 left-0 right-0 z-50 bg-white opacity-90  border-gray-200 shadow-md">
        {" "}
        Ramsey's Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 m-10">
        {recipeList
          ? recipeList?.map((singleRecipeItem) => (
              <div key={singleRecipeItem.id}>
                <div
                  className="col-span-1"
                  onClick={() => handleOnClick(singleRecipeItem.id)}
                >
                  <RecipeListTile singleRecipeItem={singleRecipeItem} />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecipeListPage;
