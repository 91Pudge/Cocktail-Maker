import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [cocktailData, setCocktailData] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const choice = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
      );
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      const parseRes = await choice.json();
      setCocktailData(parseRes.drinks);
    } catch (err) {
      console.log("error");
    }
  };

  const randomCocktail = async () => {
    try {
      const random = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);

      const parseRes = await random.json();
      setCocktailData(parseRes.drinks);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSubmitForm={onSubmitForm}
              handleChange={handleChange}
              cocktailData={cocktailData}
              userInput={setUserInput}
              setCocktailData={setCocktailData}
              randomCocktail={randomCocktail}
              id={0}
              data={[]}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
