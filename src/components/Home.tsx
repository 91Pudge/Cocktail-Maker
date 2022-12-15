import { useEffect, useState } from "react";
import "./css_files/Home.css";
import Navbar from "./Navbar";

type cocktail = object;

const Home = () => {
  const [cocktail, setCocktail] = useState([]);

  const onSubmitForm = async () => {
    try {
      const choice = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      const parseRes = await choice.json();
      //   console.log(parseRes);
      setCocktail(parseRes);
    } catch (err) {
      console.log("error");
    }
  };
  console.log(cocktail);

  useEffect(() => {
    onSubmitForm();
  }, []);

  return (
    <>
      <Navbar />
      <div className="search-bar">
        <form id="form" role="search" onSubmit={onSubmitForm}>
          <input
            type="text"
            id="search"
            //   name="q"
            placeholder="Search..."
            aria-label="Search through site content"
          />
          <button>Search</button>
        </form>
        <div>
          {cocktail.map((drink) => (
            <p>{drink}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
