import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import { EditProductsModal } from '../EditProductsModal/EditProductsModal.component';
import DeleteButton from '../DeleteButton/DeleteButton.component';

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
  table: {
    minWidth: 700,
  },
  image: {
    width: '30px',
    height: '30px',
    borderRadius: '5px'
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export function BasicTable(props) {
  const classes = useStyles();



  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">عکس </StyledTableCell>
            <StyledTableCell align="right"> محصول</StyledTableCell>
            <StyledTableCell align="right">  دسته بندی</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="right"><img className={classes.image} src={`http://localhost:3001${row.image}`} alt='aks' /></StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.branch}</StyledTableCell>
              <StyledTableCell align="right" className={classes.buttonContainer}>
                <EditProductsModal name={row.name} imageName={row.image} />
                <DeleteButton productField={'products'} productId={row.id} />
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
