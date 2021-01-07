/*
 I think this page should be used to display an individual recipe
 Recipes should contain ingredients and steps to cook
 Optionally, they should include pictures of the final dish, optionally pictures of dishes at each step, and the author
 */

import { Container } from "@material-ui/core";
import { useParams } from 'react-router-dom'

const welcomeMessage = 'You are on the recipe page!'

export default function Recipes() {
  const { name } = useParams()
  const recipeViewMessage = name ? `You are viewing the recipe for ${name}` : `You haven't selected a recipe to view`

  return (
    <Container>
      <h1>{`${welcomeMessage} ${recipeViewMessage}`}</h1>
    </Container>
  )
}