/**
 * This page is used to add recipes to display
 */

import { Input, InputLabel, Button, Container, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddCircle } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  thumbnailSelector: {
    border: '1px solid grey',
    borderRadius: '15px',
  },
}))

const ImageUpload = ({ onImageSelected }) => {
  const classes = useStyles()

  return (
    <Container className={classes.thumbnailSelector}>
      <h1>Image upload Element. You can't actually upload images since they're too powerful :( </h1>
      <InputLabel htmlFor="thumbnailInput">
        <AddCircle color="primary" />
      </InputLabel>
      <Input style={{ visibility: 'hidden' }} id="thumbnailInput" type="file" onChange={(event) => onImageSelected(event)} />
    </Container>
  )
}

export default function AddRecipe() {
  return (
    <Container>
      <h1>You are on the Add page! Thank you for adding a new recipe!</h1>
      <form>
        <ImageUpload onImageSelected={(event) => { console.log("You selected a file!") }} />
        <TextField required id="name" label="Recipe Name" />
        <Button variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  )
}