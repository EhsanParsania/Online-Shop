import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { getCustomersList } from '../../../../../api/API';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center'
    },
  },
}));

export function Paginate(props) {
  const classes = useStyles();

  const handlePageChange = async (event, pageNumber) => {
    let rowNumber = 6
    console.log(pageNumber, rowNumber)
    const response = await getCustomersList(pageNumber , rowNumber=6,)
    console.log(response.data)
    const currentPageData=response.data
    // const numberOfRecievedData=response.headers['x-total-count']
    // console.log(numberOfRecievedData)
    // const numberOfPages=Math.ceil(numberOfRecievedData/rowNumber)
    // console.log(numberOfPages)
    // return numberOfPages

    //send data for parent to use in its useState
    props.handlePagination(currentPageData)
    // 1- create address with page number   dido
    // 2 - put address in axios request    dido
    // 3 put result in useState 
    // 4 error handling 
  }

  return (

    <div dir='ltr' className={classes.root}>
      <Pagination count={props.numberOfPages} defaultPage={1} onChange={handlePageChange} />
    </div>
  );
}