import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Button from '@material-ui/core/Button';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <Button onClick={() => setShow(!show)}>Ingredients</Button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
