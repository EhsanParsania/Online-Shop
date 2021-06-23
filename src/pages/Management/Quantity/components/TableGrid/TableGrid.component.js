import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { getCustomersList } from '../../../../../api/API';
import { useState, useEffect } from 'react';
import { Paginate } from '../Paginate/Paginate.component'
import { Button } from '@material-ui/core'
import * as React from 'react';
import Table from '../Table/Table.component'
import SimpleTable from '../Table/Table.component'




function TableGrid() {
  const rowNumber = 6
  const [state, setState] = useState({
    data: [{}],
    initialId: 0,
    numberOfPages: 1
  })
  useEffect(() => {
// add an asunc function for put in useEffect : 

    const fetchData = async () => {
      const response = await getCustomersList(1, rowNumber)
      const numberOfRecievedData = response.headers['x-total-count']
      console.log(response.data)
      console.log(numberOfRecievedData)
      const numberOfPages = Math.ceil(numberOfRecievedData / rowNumber)
      console.log(numberOfPages)

      try {

        await setState({
          ...state,
          data: response.data,
          numberOfPages: numberOfPages

        })
        console.log('data')
      }
      catch (error) {
        console.log(error.message)
      }
    }
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
      // justifyContent: 'center'
      // minWidth:'640px'
      // overflow:'scroll'
      // width:'content'

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


  const handleSaveButton = () => {

  }





  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify='center' >

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>

            <div className={classes.buttonContainer} >
              <div>
                <h2>
                  مدیریت موجودی و قیمت ها
                </h2>
              </div>
              <div>
                <Button onClick={handleSaveButton} className={classes.saveButton} variant="contained" color="primary">
                  ذخیره
                </Button>
              </div>

            </div >

            <SimpleTable rows={state.data} />
            <Paginate numberOfPages={state.numberOfPages} handlePagination={handleChange} />
          </Paper>
        </Grid>
      </Grid>
    </div>




  )

}

export default TableGrid
