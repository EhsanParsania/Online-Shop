import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { EditableText } from '../EditableText.component';

import { connect } from 'react-redux';
import { setNewQuantity } from '../../../../../redux/actions'


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
  paper:{
    minWidth:400
  },
  table: {
    // minWidth: 700,
  },
  image: {
    width: '30px',
    height: '30px',
    borderRadius: '5px'
  }
});




function TableData(props) {
  const classes = useStyles();


  String.prototype.toPersinaDigit = function () {
    var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return this.replace(/[0-9]/g, function (w) { return id[+w] });
  }

  const handleChangeEditedField = (changeDetail) => {
    const { newValue, productGroup, productId, changedItem } = changeDetail
    const value = newValue.toPersinaDigit()
    const payload = {
      productGroup,
      productId,
      changedItem,
      newValue: value,
    }

    payload  && props.setNewQuantity(payload)

    // then give them to API.editProducts which exists now in API 
  }


  return (
    <TableContainer component={Paper} className={classes.paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>

            <StyledTableCell align="right">کالا </StyledTableCell>
            <StyledTableCell align="right"> قیمت</StyledTableCell>
            <StyledTableCell align="right">موجودی </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.id}>

              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right"><EditableText productId={row.id} changedItem='price' productGroup={row.group} onSave={handleChangeEditedField} value={row.price} /></StyledTableCell>
              <StyledTableCell align="right"><EditableText productId={row.id} changedItem='supply' productGroup={row.group} onSave={handleChangeEditedField} value={row.supply} /></StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapDispathToProps = (dispatch) => {
  return {
    setNewQuantity: (payload) => dispatch(setNewQuantity(payload))
  }
}
const mapStateToProps = (state) => ({

})



const BasicTable = connect(mapStateToProps, mapDispathToProps)(TableData)
export { BasicTable }
