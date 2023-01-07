import "./css_files/Home.css";
import Recipe from "./Recipe";
import { Props } from "../types";

const Home = ({
  onSubmitForm,
  handleChange,
  cocktailData,
  randomCocktail
}: Props) => {
  return (
    <>
      <form id="form" role="search" onSubmit={onSubmitForm}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="search"
          className="search-bar"
          placeholder="Search for any cocktail.."
          aria-label="Search through site content"
          required
        />
        <button>Search</button>
      </form>
      <button id="random" onClick={(e) => randomCocktail(e)}>
        Random Cocktail
      </button>
      <div className="display">
        {cocktailData ? (
          cocktailData.map((data: [], i: number) => (
            <div className="cocktail-card">
              <Recipe
                data={data}
                key={i}
                cocktailData={cocktailData}
                onSubmitForm={onSubmitForm}
                handleChange={handleChange}
                setCocktailData={undefined}
                userInput={undefined}
                isLoading={false}
                randomCocktail={randomCocktail}
                id={i}
              />
            </div>
          ))
        ) : (
          <p>No cocktails found</p>
        )}
      </div>
    </>
  );
};

export default Home;
