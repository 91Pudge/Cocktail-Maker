import "./css_files/Recipe.css";
import Item from "./Item";
import { Props, Drinks } from "../types";
import { FormEvent, ChangeEvent } from "react";

const Recipe = ({
  data,
  cocktailData,
  onSubmitForm,
  handleChange,
  randomCocktail,
  userInput,
  setCocktailData
}: Drinks) => {
  return (
    <div className="item">
      <div className="info">
        <h2 className="drink-name">{data.strDrink}</h2>
        <div className="type"></div>
      </div>
      <div>
        <img
          className="thumbnail"
          alt={data.strDrink}
          src={data.strDrinkThumb}
          width="400px"
        />
      </div>
      <Item
        id={data.idDrink}
        cocktailData={cocktailData}
        onSubmitForm={onSubmitForm}
        handleChange={handleChange}
        setCocktailData={setCocktailData}
        userInput={userInput}
        // isLoading={false}
        randomCocktail={randomCocktail}
        data={data}
        strDrink={""}
      />
    </div>
  );
};

export default Recipe;
