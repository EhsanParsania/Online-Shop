import React, { useEffect,useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EditProductsModal } from '../EditProductsModal/EditProductsModal.component';
import DeleteButton from '../DeleteButton/DeleteButton.component';
import { wordToPersian } from '../../../../../utils/convertNameToPersian';
import { BASE_URL } from '../../../../../api/Variables.api';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  paper: {
    minWidth: 400
  } ,
  table: {
    // minWidth: 700,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: '5px'
  },
  row: {
    padding: 7
  }
});

export function BasicTable(props) {
  const classes = useStyles();

  // const [state, setState] = useState()
  // useEffect(() => {
  //   setState('no')
    
  // }, [state])


  const handleRerender = async (isRerender) => {
    // await setState({ isRerender })
    await props.isRerender(isRerender)

  }


  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell align="right">عکس </StyledTableCell>
            <StyledTableCell align="right"> محصول</StyledTableCell>
            <StyledTableCell align="right">  دسته بندی</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.id}>

              <StyledTableCell className={classes.row} align="right"><img className={classes.image} src={`${BASE_URL}${row.image}`} alt='محصول' /></StyledTableCell>
              <StyledTableCell className={classes.row} align="right">{row.name}</StyledTableCell>
              <StyledTableCell className={classes.row} align="right">{wordToPersian(row.group)}</StyledTableCell>
              <StyledTableCell className={classes.row} align="right" >
                {/* <EditProductsModal name={row.name} imageName={row.image} group={'groceries'} productId={row.id} information={row.information} /> */}
                <EditProductsModal isRerender={handleRerender}  {...row} />
              </StyledTableCell>
              <StyledTableCell className={classes.row} align="right" >
                <DeleteButton productField={'groceries'} productId={row.id} isRerender={handleRerender} />
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
