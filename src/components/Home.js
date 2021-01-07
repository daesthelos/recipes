import { Container, GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { recipes } from '../data/images'

/* 
  This page should be used to display a list of (recent?) recipes that may interest guests
*/

var useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '96px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));

export default function Home() {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <GridList cellHeight={160} cols={3}>
        {recipes.map(recipe =>
          <GridListTile cols={1}>
            <Link to={`/recipe/${recipe.name}`}>
              {/* Anchor seems to break the sizing, so the image needs to be reset to max height/width */}
              <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={recipe.thumbnail} alt={recipe.name} />
            </Link>
            <GridListTileBar
              title={recipe.name}
              subtitle={'Author: Subtext goes here'}
              actionIcon={
                <IconButton aria-label={'Favorite'} className={classes.icon}>
                  <Favorite />
                </IconButton>
              }
            />
          </GridListTile>
        )}
      </GridList>
    </Container>
  )
}