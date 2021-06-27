import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import * as React from 'react';

import { Button } from '@material-ui/core'





function TableContainer(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
      // width:'content'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    saveButton: {
      width: '100px',
      // fontSize:'20px',
      fontWeight: 'bold'
    }
  }));

  const classes = useStyles({});
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify='center' >
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <div className={classes.buttonContainer} >
              <div>
                <h2>
                  مدیریت کــــالاهــا
                </h2>
              </div>
              <div>
                <Button className={classes.saveButton} variant="contained" color="primary">
                  ذخیره
                </Button>
              </div>
            </div >

            {props.children}

          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export {TableContainer}
