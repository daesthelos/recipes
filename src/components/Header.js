import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Home } from '@material-ui/icons'
import { NavLink, Link } from 'react-router-dom'

/**
 * The header should be used to link to home, a list of all recipes by alphabetical?, a search function, and a 'New recipe' page
 * I kind of think there should be a way to add recipes to a cart, modify orders of recipes, and output that into a list of ingredients
 */

const links = [
  { title: 'Recipes', to: '/recipes' },
  { title: 'New Recipe', to: '/new' },
  { title: 'Results', to: '/results' },
]

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 2,
  },
  navFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  navItem: {
    width: 'auto',
  },
}));

export default function Header() {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link style={{ color: 'white' }} to="/">
              <Home />
            </Link>
          </IconButton>
          <List className={classes.navFlex} component="nav" aria-labelledby="main navigation">
            {links.map(({ title, to }) => (
              <ListItem button key={title} className={classes.navItem} component={NavLink} to={to}>
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </header>
  )
}