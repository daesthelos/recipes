import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Home } from '@material-ui/icons'

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