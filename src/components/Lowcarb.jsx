import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Lowcarb = () => {
  const [lowCarb, setLowCarb] = useState([]);

  useEffect(() => {
    getLowCarb();
  }, []);

  const getLowCarb = async () => {
    const check = localStorage.getItem("lowcarb");

    if (check) {
      setLowCarb(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=ketogenic`
      );
      const data = await api.json();
      console.log(data);
      setLowCarb(data.recipes);
      localStorage.setItem("lowcarb", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3>Low Carb Picks</h3>
      <Splide
        options={{
          perPage: 4,
          drag: "free",
          gap: "2rem",
          arrows: false,
          pagination: false,
        }}
      >
        {lowCarb.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipeDetails/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 2rem;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 999;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-Gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Lowcarb;
