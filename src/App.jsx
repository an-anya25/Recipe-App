import { Route, Routes } from "react-router-dom";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";
import RecipeListPage from "./pages/RecipeListPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
