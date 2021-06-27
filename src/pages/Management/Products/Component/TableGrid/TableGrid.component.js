
import { getData } from '../../../../../api/API';

import { BasicTable } from '../Table/Table.component'
import { Paginate } from '../../../../../components/index.components'
import { TableContainer } from '../../../../../components/TableContainer.component'
import React, { Component } from 'react'

class TableGrid extends Component {
  state = {
    data: [{}],
    initialId: 0,
    numberOfPages: 0,
    clickedPage: 1
  }

  
  getProductsData = async (clickedPage) => {

    const field = 'products'
    const rowNumber = 6
    try {
      const { data = [{}], headers } = await getData(field, clickedPage, rowNumber)
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
    const clickedPage = this.state.clickedPage
    if (this.state.clickedPage !== nextState.clickedPage) {
      await this.getProductsData(nextState.clickedPage)
      return true
    }
    else return false


  }

  handleClickedPage = async (clickedPage) => {
    console.log(clickedPage)
    await this.setState({
      clickedPage
    })
  }


  render() {
    return (
      <div>
        <TableContainer>
          <BasicTable rows={this.state.data} />
          <Paginate numberOfPages={this.state.numberOfPages} clickedPage={this.handleClickedPage} />
        </TableContainer>

      </div>
    )
  }
}

export default TableGrid