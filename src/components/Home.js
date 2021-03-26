import React, { useState } from "react";

import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/input'
  

  
function Home(){
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "cb6f82d7";
  const APP_KEY = "4180124fa98374ad33f63020cbc2030b";

  const recipesinArray=[{name:"Biriyani"},{name:"Chowmin"}];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };
    return (
        <div>
          <form onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <Input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <Button  variant="outlined" color="secondary" type="submit" value="Search" >Search</Button>
          </form>
          <div className="recipes">
            {recipes !== [] &&
              recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            {recipesinArray.map(recipe=><ul key={uuidv4()} style={{color:'Red',weight:'200px'}}><li>{recipe.name}</li></ul>)}
          </div>
        </div>
    )
}

export default Home;
