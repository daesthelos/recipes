import { Container, GridList, GridListTile } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

var useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '96px',
  },
}));

const images = [
  { src: 'https://i.redd.it/fnbv6mq03g861.jpg', title: 'Taco Bell Chalupa and Truffles', cols: 2 },
  { src: 'https://i.redd.it/fnbv6mq03g861.jpg', title: 'Taco Bell Chalupa and Truffles', cols: 1 }
];

export default function Home() {
  const classes = useStyles()

  return (
    <Container className={classes.main}>
      <GridList cellHeight={160} cols={3}>
        {images.map(image =>
          <GridListTile cols={image.cols}>
            <img src={image.src} alt={image.title} />
          </GridListTile>
        )}
      </GridList>
    </Container>
  )
}