import { makeStyles } from "@material-ui/core";
import 'fontsource-roboto';
import 'fontsource-ewert'

const useHomeStyles = makeStyles({
  homeWrapper: theme => ({
    display: 'grid',
    placeItems: 'center',
    background: "url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat",
    backgroundPosition: 'cover',
    width: '100vw',
    height: '100vh',
    objectFit: 'contain',
    color: 'white',

    // [theme.breakpoints.down('sm')]: {
    //   background: 'url(https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
    // }
  }),

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