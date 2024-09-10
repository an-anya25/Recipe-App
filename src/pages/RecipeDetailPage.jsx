import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContextProvider";
import OtherRecipeTile from "../components/OtherRecipeTile";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { recipeList, recipeDetails, setRecipeDetails, loading, setLoading } =
    useContext(RecipeContext);
  const navigate = useNavigate();

  let otherRecipeId = [3, 7, 12];
  let idx = parseInt(id) - 1;
  if (otherRecipeId.includes(idx)) {
    otherRecipeId = [4, 8, 13];
  }

  const fetchCurrentRecipeDetails = async () => {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const result = await apiResponse.json();
    console.log(result);

    if (result) {
      setRecipeDetails(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCurrentRecipeDetails();
  }, [id]);

  const handleOnClickNavigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  if (loading)
    return (
      <div className="font-serif text-red-600">
        <h1 className="text-gray-600 italic text-4xl sm:text-5xl text-center py-5 border-b-[1px] fixed top-0 left-0 right-0 z-50 bg-white opacity-90  border-gray-200 shadow-md">
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
      <h1 className="text-gray-600 italic text-4xl sm:text-5xl text-center py-5 gap-4 border-b-[1px] fixed top-0 left-0 right-0 z-50 bg-white opacity-90  border-gray-200 shadow-md">
        Ramsey's Recipes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-32 m-10 rounded-md ">
        <div className="col-span-1 lg:col-span-3 shadow-lg overflow-hidden border border-gray-50 p-8">
          <h3 className="text-2xl sm:text-3xl mb-4 border-b-[1px] border-gray-200 pb-4">
            {recipeDetails?.name}
          </h3>
          <div>
            <img
              src={recipeDetails?.image}
              alt={recipeDetails?.name}
              className="object-cover w-full  h-200 sm:h-[450px] rounded-md s py-4"
            />
          </div>
          <div className="pb-4 text-sm sm:text-base">
            <div className="text-gray-600 italic sm:flex sm:justify-between sm:items-center">
              <div className="">{recipeDetails?.cuisine} </div>
              <div className=""> servings: {recipeDetails?.servings}</div>
            </div>
            <div className="sm:flex sm:justify-between sm:items-center">
              <div>Preptime: {recipeDetails?.prepTimeMinutes} minutes</div>
              <div>
                Rating: {recipeDetails?.rating} ({recipeDetails?.reviewCount}{" "}
                reviews)
              </div>
            </div>
          </div>
          <div className="pb-4">
            <h6 className="text-xl font-semibold pb-1">Ingredients</h6>
            <ul>
              {recipeDetails?.ingredients.map((item) => (
                <li className="text-gray-950 font-light list-disc ml-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-xl font-semibold pb-1">Instructions</h6>
            <ol>
              {recipeDetails?.instructions.map((step) => (
                <li className="text-gray-950 font-light list-decimal ml-4">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className=" lg:col-span-1">
          <div className="text-start lg:text-center m-4 text-xl">
            Popular recipes
          </div>
          <div className="flex lg:block">
            {otherRecipeId.map((itemId) => (
              <div className="m-2">
                <OtherRecipeTile singleRecipeItem={recipeList[itemId]} />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleOnClickNavigateToHome()}
              className=" shadow-lg bg-red-100 border border-gray-50 p-2 rounded-lg "
            >
              Browse more recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
