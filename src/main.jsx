import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipeContextProvider from "./context/RecipeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RecipeContextProvider>
      <App />
    </RecipeContextProvider>
  </BrowserRouter>
);
