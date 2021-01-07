/**
 * This page is used to add recipes to display
 */

import { Input, InputLabel, Button, Container, TextField } from '@material-ui/core'

const ImageUpload = (props) => (
  <Container>
    <h1>Image upload Element</h1>
  </Container>
)

export default function AddRecipe() {
  return (
    <Container>
      <h1>You are on the Add page! Thank you for adding a new recipe!</h1>
      <form>
        <TextField required id="name" label="Recipe Name" />
        <InputLabel id="thumbnailLabel" htmlFor="thumbnailInput">Select Thumbnail: </InputLabel>
        <Input id="thumbnailInput" type="file" aria-describedby="thumbnailLabel" />
        <Button variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  )
}