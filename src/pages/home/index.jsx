import Header from '../../components/layout/header'
import { useStyles } from './styles'

function HomePage() {
  const classes = useStyles()
  return (
    <div>
      <Header/>
        <img className={classes.img} src="src/assets/images/swiper-img.jpg" alt="image" />
    </div>
  )
}

export default HomePage