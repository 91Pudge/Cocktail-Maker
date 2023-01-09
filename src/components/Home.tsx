import { HomeProps } from "../types";
import "./css_files/Home.css";
import Recipe from "./Recipe";

const Home = ({
  onSubmitForm,
  handleChange,
  cocktailData,
  randomCocktail
}: HomeProps) => {
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
          cocktailData.map((data: any[], i: number) => (
            <div className="cocktail-card" key={i}>
              <Recipe data={data} cocktailData={cocktailData} id={i} />
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
