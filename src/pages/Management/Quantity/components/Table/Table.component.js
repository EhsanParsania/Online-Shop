import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { EditableText } from '../EditableText.component';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }, tableHead:{
    backgroundColor:'#bbb',
    fontWeight:'bold'
  },
  tableHeadText:{
    fontWeight:'bold'
  },
  tableCell:{
    // margin:'0px',
    // padding:'0px'
  }
});


  function SimpaleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead className={classes.tableHead}>
          <TableRow >
            <TableCell className={classes.tableHeadText} align="right">کالا</TableCell>
            <TableCell className={classes.tableHeadText} align='right' >قیمت</TableCell>
            <TableCell className={classes.tableHeadText} align="right">موجودی</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell className={classes.tableCell} align="right">{row.name}</TableCell>
              <TableCell className={classes.tableCell} align="right">{row.price}</TableCell>
              <TableCell className={classes.tableCell} align="right"><EditableText value={row.supply} /> </TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SimpaleTable
