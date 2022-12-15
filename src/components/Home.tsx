import { useEffect, useState } from "react";
import "./css_files/Home.css";
import Navbar from "./Navbar";

interface Product {
  idDrink: number;
  strDrink: string;
}

const Home: React.FC = () => {
  const [cocktailData, setCocktailData] = useState<Product[]>([]);

  const onSubmitForm = async () => {
    try {
      const choice = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      const parseRes = await choice.json();
      console.log(parseRes.drinks);
      setCocktailData(parseRes.drinks);
    } catch (err) {
      console.log("error");
    }
  };
  console.log(cocktailData);

  useEffect(() => {
    onSubmitForm();
  }, []);

  return (
    <>
      <Navbar />
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
      <div className="display">
        {cocktailData.map((data) => {
          return (
            <div className="cocktails" key={data.idDrink}>
              {data.strDrink}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
