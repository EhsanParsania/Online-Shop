import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getData } from '../../../../../api/API';
import { useState, useEffect } from 'react';
import { Paginate } from '../Paginate/Paginate.component'
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabelPlacement from '../RadioButtons/RadioButtons.component'
import { BasicTable } from '../Table/Table.component'
import { Button } from '@material-ui/core'





function TableGrid() {
  const rowNumber = 6
  const [state, setState] = useState({
    data: [{}],
    initialId: 0,
    numberOfPages: 1
  })
  useEffect(() => {

    // declare an async fetch data to put in useEffect : 
    const fetchData = async () => {
      const dataName='products'

      try {
        const initResponse = await getData(dataName,1, rowNumber)
        const response = initResponse ? initResponse : [{}]
        console.log(initResponse)
        const numberOfRecievedData = initResponse ? response.headers['x-total-count'] : 1
        const numberOfPages = Math.ceil(numberOfRecievedData / rowNumber)
        await setState({
          ...state,
          data: response.data,
          numberOfPages: numberOfPages
        })
      }
      catch (error) {
        console.log(error.message)
      }
    }
    // call an async function to put in useEffect :
    fetchData()



  }, [])

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


  const handleChange = async (currentPageData) => {
    console.log(currentPageData)
    let parseData = JSON.stringify(currentPageData)
    await setState(() => {
      return {
        ...state,
        data: currentPageData
      }
    })
    console.log(state.data)
  }


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

            <BasicTable rows={state.data} />
            <Paginate numberOfPages={state.numberOfPages} handlePagination={handleChange} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default TableGrid
