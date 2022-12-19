import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import "./css_files/Home.css";
import Navbar from "./Navbar";

interface Product {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  onClick: () => void;
}

const Home: React.FC = () => {
  const [cocktailData, setCocktailData] = useState<Product[]>([]);
  const [userInput, setUserInput] = useState("");

  console.log(cocktailData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newData = e.target.value;
    // console.log(newData);
    setUserInput(newData);
  };
  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const choice = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
      );
      const parseRes = await choice.json();
      setCocktailData(parseRes.drinks);
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
      <Navbar />
      {/* {!cocktailData && <h1></h1>} */}
      <form id="form" role="search" onSubmit={onSubmitForm}>
        <input
          onChange={(e) => handleChange(e)}
          value={userInput}
          type="text"
          id="search"
          //   name="q"
          placeholder="Search..."
          aria-label="Search through site content"
        />
        <button>Search</button>
      </form>
      <div className="display">
        {cocktailData === null ? (
          <h2>No Cocktails found</h2>
        ) : (
          cocktailData.map((data, i) => {
            return (
              <div className="cocktails" key={i}>
                <h2>{data.strDrink}</h2>
                <img src={data.strDrinkThumb} height="140" width="180" />
                <div className="more-button">
                  <button>More</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
