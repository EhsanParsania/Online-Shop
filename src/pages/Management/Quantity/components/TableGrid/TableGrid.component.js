
import { editProducts, getData } from '../../../../../api/API';
import { BasicTable } from '../Table/Table.component'
import { Paginate } from '../../../../../components/index.components'
import { TableContainer } from '../../../../../components/TableContainer.component'
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { deleteQuantityChangeLog } from '../../../../../redux/actions';
import { toast } from 'react-toastify';

class TableGrid extends Component {
  state = {
    data: [{}],
    initialId: 0,
    numberOfPages: 0,
    clickedPage: 1
  }


  getProductsData = async (clickedPage) => {
    const field = 'groceries'
    const rowNumber = 6
    try {
      const { data = [{}], headers } = await getData(field, clickedPage, rowNumber,`&_sort=id&_order=desc`)
      const totalCount = headers ? headers['x-total-count'] : 1
      const numberOfPages = Math.ceil(totalCount / rowNumber)
      await this.setState({ data, numberOfPages })
    }
    catch (error) {
      console.log('get data failed with error ==> ', error.message)
    }
  }


  async componentDidMount() {
    const defaultPage = 1
    await this.getProductsData(defaultPage)
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (this.state.clickedPage !== nextState.clickedPage) {
      await this.getProductsData(nextState.clickedPage)
      return true
    }
    else return false
  }


  handleClickedPage = async (clickedPage) => {
    await this.setState({
      clickedPage
    })
  }


  handleAllPatchData = async () => {
    // get quantity change from redux : 
    const quantityChangeArray = this.props.quantityChange

    try {
      quantityChangeArray.map(async (item) => {
        if (item) {
          const { productGroup, productId, changedItem, newValue } = item

          let data = new FormData()
          data.append(changedItem, newValue)

          await editProducts(data, productGroup, productId)
        }
      })

      // delete all quantity change on redux : 
      this.props.deleteAllQuantity()

      toast.success(<p dir='rtl'> &emsp;<strong> ✔ </strong> &ensp;ویرایش با موفقیت انجام شد    </p>, {
        position: "bottom-left",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    catch (error) {
      toast.error(<p>{error.message}</p>, {
        position: "bottom-left",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }



  style = {
    tableHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'

    },
    saveButtonContainer: {
      alignSelf: 'center',

    },
    saveButton: {
      width: 100
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between'

    }
  }


  render() {
    return (
      <div>

        <TableContainer>

          <div style={this.style.container} >

            <div >
              <div style={this.style.tableHeader}>
                <h2 > مدیریت موجودی و قیمت ها</h2>
                <div style={this.style.saveButtonContainer}>
                  <Button style={this.style.saveButton} variant="contained" color="primary" onClick={this.handleAllPatchData} >
                    ذخیره
                  </Button>
                </div>
              </div>
              <BasicTable rows={this.state.data} />
            </div>

            <div>
              <Paginate numberOfPages={this.state.numberOfPages} clickedPage={this.handleClickedPage} field='panel' pathSection='quantity' />
            </div>

          </div>
        </TableContainer>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  quantityChange: state.quantityChange
})


const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllQuantity: () => dispatch(deleteQuantityChangeLog())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TableGrid)