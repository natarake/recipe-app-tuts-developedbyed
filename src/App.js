import "./app.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisines from "./pages/Cuisines";
import Category from "./components/Category";
import Search from "./components/Search";
import SingleRecipe from "./pages/SingleRecipe";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Search />
      <Category />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cuisine/:type" element={<Cuisines />}></Route>
          <Route path="/recipe/:search" element={<SingleRecipe />}></Route>
          <Route
            path="/recipeDetails/:name"
            element={<RecipeDetails />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
