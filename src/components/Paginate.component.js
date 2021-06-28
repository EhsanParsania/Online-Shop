import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {Link} from 'react-router-dom'
import { PaginationItem } from '@material-ui/lab';

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

  // onChange gives you event and number which clicked on it :
  const handlePageChange = async (event, pageNumber) => {
    props.clickedPage(pageNumber)
  }

  return (
    <div dir='ltr' className={classes.root}>
      <Pagination
        count={props.numberOfPages}
        defaultPage={1}
        onChange={handlePageChange}
        color='primary'
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/panel/orders/${item.page}`}
            {...item}
          />
      )}
      />

    </div>
  );
}

