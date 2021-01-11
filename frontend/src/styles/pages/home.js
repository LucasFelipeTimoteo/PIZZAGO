import { makeStyles } from "@material-ui/core";
import 'fontsource-roboto';
import 'fontsource-ewert'

const useHomeStyles = makeStyles({
  homeWrapper: {
    display: 'grid',
    placeItems: 'center',
    background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat",
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    objectFit: 'contain',
    color: 'white',
  },

  logo: {
    fontFamily: 'Ewert, cursive',
    color: 'inherit',
    marginBottom: 5,
    textShadow: '2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black' 
  },

  subtitle: {
    marginBottom: 35,
  },

  linkToWizard: {
    textDecoration: 'none'
  },

  startMountingPizzaButton: {
    color: 'white',
    fontWeight: 500,
    borderRadius: 20
  }
})

export default useHomeStyles