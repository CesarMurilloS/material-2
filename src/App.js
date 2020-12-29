import React from 'react';
import {Button} from '@material-ui/core';
import { AccessAlarm, ThreeDRotation, Delete } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

import theme from './ThemeConfig';

import Navbar from './components/Navbar';
import Oculto from './components/Oculto';
import Lists from './components/Lists';

const useStyles = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Button className={classes.botonPersonalizado}>
        Mi boton personalizado
      </Button>
      <Button variant="text" color="default">
        Boton
      </Button>
      <Lists></Lists>
      <Oculto></Oculto>
      
    </ThemeProvider>
  );
}

export default App;
