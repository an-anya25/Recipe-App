import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeContextProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipeList = async () => {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const result = await apiResponse.json();

    if (result) {
      setRecipeList(result.recipes);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipeList();
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipeList,
        recipeDetails,
        setRecipeDetails,
        loading,
        setLoading,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
