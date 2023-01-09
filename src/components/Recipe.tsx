import "./css_files/Recipe.css";
import Item from "./Item";
import { IRecipe } from "../types";

const Recipe = ({ data, cocktailData }: IRecipe) => {
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
      <Item id={data.idDrink} cocktailData={cocktailData} />
    </div>
  );
};

export default Recipe;
