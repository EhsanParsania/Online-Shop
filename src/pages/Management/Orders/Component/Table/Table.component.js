import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { OrdersModal } from '../OrdersModal/OrdersModal.component'
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
  },
  table: {
    // minWidth: 700,
  },
});

export function BasicTable(props) {
  const classes = useStyles();


  const timeToPersian = (epoch) => {
    const date = new Date(+epoch)
    const persianDate = date.toLocaleString('fa-IR')
    return persianDate
  }

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell align="right">نام کاربر</StyledTableCell>
            <StyledTableCell align="right">مجموع مبلغ</StyledTableCell>
            <StyledTableCell align="right">زمان ثبت سفارش</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell align="right">{row.customerName}</StyledTableCell>
              <StyledTableCell align="right">{row.sumPrice}</StyledTableCell>
              <StyledTableCell align="right">{timeToPersian(row.createdAt)}</StyledTableCell>
              <OrdersModal data={row} isRerender={(isRerender) => props.isRerender(isRerender)} />

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
