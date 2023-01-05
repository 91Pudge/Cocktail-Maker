import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cocktailData, setCocktailData] = useState([]);
  const [userInput, setUserInput] = useState<String>("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const onSubmitForm = async (e: React.FormEvent<HTMLInputElement>) => {
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

  const randomCocktail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
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
              isLoading={isLoading}
              randomCocktail={randomCocktail}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
