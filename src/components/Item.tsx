import "./css_files/Item.css";
import { Props } from "../types";

const Item = ({ id, cocktailData }: Props) => {
  const profile = cocktailData.filter((profile: any) => profile.idDrink === id);
  const drinkName = profile[0].strDrink;

  return (
    <>
      <button
        type="button"
        id="modal-button"
        className="btn btn-dark btn-lg text-center mx-auto d-block "
        data-toggle="modal"
        data-target={`#${drinkName}`}
      >
        Click here to see recipe
      </button>

      <div id={`${drinkName}`} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{drinkName}</h4>
            </div>
            <div className="modal-body">
              {cocktailData ? (
                profile.map((data: any, i: number) => (
                  <div key={data.idDrink}>
                    <p>
                      {data.strInstructions.charAt(0).toUpperCase() +
                        data.strInstructions.slice(1)}
                    </p>
                    <img
                      className="modal-picture"
                      alt={data.strDrink}
                      src={data.strDrinkThumb}
                      width="100px"
                    />

                    <h2>
                      <u>Ingredients</u>
                    </h2>

                    <ul>
                      <li>
                        {!data.strMeasure1 ? "" : data.strMeasure1 + " "}
                        {data.strIngredient1}
                      </li>
                      <li>
                        {!data.strMeasure2 ? "" : data.strMeasure2 + " "}
                        {data.strIngredient2}
                      </li>
                      {data.strIngredient3 && (
                        <li>
                          {!data.strMeasure3 ? "" : data.strMeasure3 + " "}
                          {data.strIngredient3}
                        </li>
                      )}
                      {data.strIngredient4 && (
                        <li>
                          {!data.strMeasure4 ? "" : data.strMeasure4 + " "}
                          {data.strIngredient4}
                        </li>
                      )}
                      {data.strIngredient5 && (
                        <li>
                          {!data.strMeasure5 ? "" : data.strMeasure5 + " "}
                          {data.strIngredient5}
                        </li>
                      )}
                      {data.strIngredient6 && (
                        <li>
                          {!data.strMeasure6 ? "" : data.strMeasure6 + " "}

                          {data.strIngredient6}
                        </li>
                      )}
                      {data.strIngredient7 && (
                        <li>
                          {!data.strMeasure7 ? "" : data.strMeasure7 + " "}

                          {data.strIngredient7}
                        </li>
                      )}
                    </ul>
                    <h2>
                      <u>Glass Required-</u>
                    </h2>
                    <p>{data.strGlass}</p>
                  </div>
                ))
              ) : (
                <p>no cocktails found </p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
