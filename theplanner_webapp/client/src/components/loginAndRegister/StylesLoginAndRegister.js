import {  makeStyles } from "@material-ui/core";


const useStyles = makeStyles(({
  main: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#132C33'
  },
  card: {
    width: '25%',
    height: '49%'
  },
  icon: {
    marginTop: '5%',
    width: '15%',
    height: '15%'
  },
  input: {
    width: '100%',
    height: '8ch'
  },
  head: {
    marginBottom: '5%',
    marginTop: '5%',
    fontWeight:'bold'
  }
}))

export default useStyles;
