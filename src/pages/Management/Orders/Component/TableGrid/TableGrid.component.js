import React, { Component } from 'react'

import { getData } from '../../../../../api/API';
import { RadioButtons } from '../RadioButtons/RadioButtons.component'
import { BasicTable } from '../Table/Table.component'
import { Paginate } from '../../../../../components/index.components'
import { TableContainer } from '../../../../../components/TableContainer.component'

class TableGrid extends Component {
  state = {
    data: [{}],
    initialId: 0,
    numberOfPages: 0,
    clickedPage: 1,
    isFilteredData: '',
    isDelivered: '',
    isRerender: false
  }

  //get first orders page on did mount
  async componentDidMount() {
    const defaultPage = 1
    await this.getOrdersData(defaultPage)
  }


  async shouldComponentUpdate(nextProps, nextState) {
    const clickedPage = nextState.clickedPage

    // get orders with filtering :  
    if (nextState.isFilteredData == 'true') {
      if (this.state.data === nextState.data) {
        const path = `&delivered=${nextState.isDelivered}`
        await this.getOrdersData(clickedPage, path)
        return true
      }
    }
    // get all orders
    else if (this.state.data === nextState.data) {
      this.getOrdersData(nextState.clickedPage)
      return true
    }
    else if (nextProps.isRerender == true) {
      this.getOrdersData(nextState.clickedPage)
      this.setState({ isRerender: false })
      return true
    }
    else return false
  }


  // get orders function with or without filtering path :
  getOrdersData = async (clickedPage = 1, path) => {
    const field = 'orders'
    const rowNumber = 6
    try {
      const { data = [{}], headers } = await getData(field, clickedPage, rowNumber, path)
      const totalCount = headers ? headers['x-total-count'] : 1
      const numberOfPages = Math.ceil(totalCount / rowNumber)
      await this.setState({ data, numberOfPages })
    }
    catch (error) {
      console.log('get data failed with error ==> ', error.message)
    }
  }


  // set page number that clicked in paginate :
  handleClickedPage = async (clickedPage) => {
    console.log(clickedPage)
    await this.setState({
      clickedPage
    })
  }

  // get button details that clicked : 
  handleRadioButtonClick = async (details) => {
    if (details.isFilteredData == 'true') {
      const { isDelivered, isFilteredData } = details
      await this.setState({
        isDelivered,
        isFilteredData
      })
    }
  }

  style = {
    tableHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
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
          <div style={this.style.container}>

            <div>
              <div style={this.style.tableHeader}>
                <h2 > مدیریت سفارش ها</h2>
                <RadioButtons details={this.handleRadioButtonClick} />
              </div>
              <BasicTable rows={this.state.data} isRerender={(isRerender) => this.setState({ isRerender })} />
            </div>


            <div>
              <Paginate numberOfPages={this.state.numberOfPages} clickedPage={this.handleClickedPage} field='panel' pathSection='orders' />
            </div>

          </div>
        </TableContainer>

      </div>
    )
  }
}

export default TableGrid