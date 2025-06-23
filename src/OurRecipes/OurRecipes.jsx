import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

export default function OurRecipes() {
  let [recipes, setRecipes] = useState(null);

  async function getBeef() {
    let { data } = await axios.get(
      "https://forkify-api.herokuapp.com/api/search?q=beef"
    );
    console.log(data.recipes);
    setRecipes(data.recipes);
  }
  useEffect(() => {
    getBeef();
  }, []);
  return (
    <>
      <section className="container min-h-[80vh] mb-8 mt-20">
        <p className="font-bold text-4xl text-center text-gray-800">
          OUR RECIPIES
        </p>
        <div className="d-flex align-items-center justify-content-center pb-10">
          <div className="bg-black me-3 w-16 h-1"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-black ms-3 w-16 h-1"></div>
        </div>

        {recipes?.length > 1 ? (
          <div className="container">
            <div className="row gy-2">
              {recipes?.map((recipe) => {
                return (
                  <div className="recipe col-md-3" key={recipe.recipe_id}>
                    <div className="recipe">
                      <img src={recipe.image_url} className="w-100" alt="" />
                      <h4>{recipe.title.split(" ").slice(0, 2).join(" ")}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
}
