import React, { Component } from 'react'

import { getData } from '../../../../../api/API';
import {RadioButtons} from '../RadioButtons/RadioButtons.component'
import { BasicTable } from '../Table/Table.component'
import { Paginate } from '../../../../../components/index.components'
import { TableContainer } from '../../../../../components/TableContainer.component'

class TableGrid extends Component {
  state = {
    data: [{}],
    initialId: 0,
    numberOfPages: 0,
    clickedPage: 1
  }
  getOrdersData = async (clickedPage) => {

    const field = 'orders'
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
    await this.getOrdersData(defaultPage)
  }

  async shouldComponentUpdate(nextProps, nextState) {
    const clickedPage = this.state.clickedPage
    if (this.state.clickedPage !== nextState.clickedPage) {
      await this.getOrdersData(nextState.clickedPage)
      return true
    }
    else return false


  }

  handleClickedPage = async (clickedPage) => {
    console.log(clickedPage)
    await this.setState({
      clickedPage
    })
    return clickedPage
  }


  render() {
    return (
      <div>
        <TableContainer>
          <RadioButtons/>
          <BasicTable rows={this.state.data} />
          <Paginate numberOfPages={this.state.numberOfPages} clickedPage={this.handleClickedPage} />
        </TableContainer>

      </div>
    )
  }
}

export default  TableGrid 