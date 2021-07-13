import React, { Component } from 'react'
import { getData } from '../../../../../api/API';
import { BasicTable } from '../Table/Table.component'
import { Paginate } from '../../../../../components/index.components'
import { TableContainer } from '../../../../../components/TableContainer.component'
import { AddProductsModal } from '../AddProductsModal/AddProductsModal.component'


class TableGrid extends Component {
  state = {
    data: [{}],
    initialId: 0,
    numberOfPages: 0,
    clickedPage: 1,
    isRerender: 'no'
  }


  getProductsData = async (clickedPage) => {

    const field = 'groceries'
    const rowNumber = 6
    try {
      const { data = [{}], headers } = await getData(field, clickedPage, rowNumber, `&_sort=id&_order=desc`)
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
    if (nextState.isRerender === 'yes') {
      console.log('rerender should be happen here ......')
      await this.getProductsData(this.state.clickedPage)
      await this.setState({ isRerender: 'no' })
      return true
    }
    else if (this.state.clickedPage !== nextState.clickedPage) {
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


  handleRerender = async (isRerender) => {
    await this.setState({ isRerender })
  }

  style = {
    tableHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'

    },
    saveButton: {
      alignSelf: 'center'
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

          <div style={this.style.container}  >

            <div>
              <div style={this.style.tableHeader}>
                <h2 >مدیریت کالاها</h2>
                <div style={this.style.saveButton}>
                  <AddProductsModal isRerender={this.handleRerender} />
                </div>
              </div>
              <BasicTable rows={this.state.data} style={{ alignSelf: 'flex-end' }} isRerender={this.handleRerender} />
            </div>

            <div>
              <Paginate numberOfPages={this.state.numberOfPages} clickedPage={this.handleClickedPage} field='panel' pathSection='products' />
            </div>

          </div>
        </TableContainer>

      </div>
    )
  }
}

export default TableGrid