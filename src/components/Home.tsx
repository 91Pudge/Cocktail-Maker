import { HomeProps } from "../types";
import "./css_files/Home.css";
import Recipe from "./Recipe";
import { Dna } from "react-loader-spinner";

const Home = ({
  onSubmitForm,
  handleChange,
  cocktailData,
  randomCocktail,
  isLoading
}: HomeProps) => {
  return (
    <>
      <div className="wrapper">
        <form id="form" role="search" onSubmit={onSubmitForm}>
          <input
            onChange={(e) => handleChange(e)}
            type="search"
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
      </div>
      <div className="display">
        {isLoading ? (
          <Dna
            visible={true}
            height="300"
            width="300"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : cocktailData ? (
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
