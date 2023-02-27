import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const SingleRecipe = () => {
  const [singleRecipe, setSingleRecipe] = useState([]);
  let params = useParams();

  const getSingleRecipe = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`
    );
    const data = await api.json();
    setSingleRecipe(data.results);
  };

  useEffect(() => {
    getSingleRecipe(params.search);
  }, [params.search]);

  return (
    <Grid>
      {singleRecipe.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={`/recipeDetails/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default SingleRecipe;
