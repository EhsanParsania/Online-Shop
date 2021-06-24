import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getCustomersList } from '../../../../../api/API';
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
import { SimpleTable } from '../Table/Table.component'
import { Link } from 'react-router-dom'






const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  image: {
    height: '50px',
    width: '50px',
    borderRadius: '5px',
    margin: '5px',
    padding: '5px'
  },
  tableHead: {
    backgroundColor: '#bbb',
    fontWeight: 'bold'
  },
  tableHeadText: {
    fontWeight: 'bold'
  },
  tableCell: {
    // margin:'0px',
    // padding:'0px'
  }
});

function BasicTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow >
            <TableCell className={classes.tableHeadText} align="right">نام کاربر</TableCell>
            <TableCell className={classes.tableHeadText} align='right' >مجموع مبلغ</TableCell>
            <TableCell className={classes.tableHeadText} align="right">زمان ثبت سفارش </TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell className={classes.tableCell} align="right">{row.customerName}</TableCell>
              <TableCell className={classes.tableCell} align="right">  {row.totalAmount} </TableCell>
              <TableCell className={classes.tableCell} align="right">{row.orderTime}</TableCell>
              <TableCell className={classes.tableCell} align="right">
                <Link >ویرایش</Link>
                &nbsp;  <Link >حذف</Link>
              </TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { BasicTable }