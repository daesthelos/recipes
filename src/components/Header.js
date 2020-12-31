import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Home } from '@material-ui/icons'

/**
 * The header should be used to link to home, a list of all recipes by alphabetical?, a search function, and a 'New recipe' page
 * I kind of think there should be a way to add recipes to a cart, modify orders of recipes, and output that into a list of ingredients
 */

export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  )
}