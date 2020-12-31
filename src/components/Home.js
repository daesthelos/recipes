import { Container, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { recipes } from '../data/images'

/* 
  This page should be used to display a list of (recent?) recipes that may interest guests
*/

var useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '96px',
  },
}));

export default function Home() {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <GridList cellHeight={160} cols={3}>
        {recipes.map(recipe =>
          <GridListTile cols={1}>
            <img src={recipe.thumbnail} alt={recipe.name} />
          </GridListTile>
        )}
      </GridList>
    </Container>
  )
}