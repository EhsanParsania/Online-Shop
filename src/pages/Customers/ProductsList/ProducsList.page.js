import React, { Component } from 'react'
import { getFilteredProducts } from '../../../api/API'
import { ListMenu, Paginate, CardGroup, Spinner } from '../../../components/index.components'
import { withRouter } from 'react-router'


class ProductsListtt extends Component {
  state = {
    pageNumber: 1,
    numberOfPages: '',
    data: [{}],
    group: '',
    subgroup: '',
    isLoading: true
  }

  async componentDidMount() {
    const { group, subgroup, id } = this.props.match.params
    console.log(group, subgroup)
    await this.setState({
      pageNumber: id,
      group,
      subgroup
    })

    await this.handleGetData(group, subgroup, id)
    this.setState({ isLoading: false })
  }


  async shouldComponentUpdate(nextProps, nextState) {
    const { id, subgroup } = this.props.match.params
    // if (this.state.pageNumber !== id || this.state.subgroup !== subgroup) {
    if (this.props.match.params.id !== nextProps.match.params.id || this.props.match.params.subgroup !== nextProps.match.params.subgroup || this.props.match.params.group !== nextProps.match.params.group) {


      const subgroup = nextProps.match.params.subgroup
      const id = nextProps.match.params.id
      const group = nextProps.match.params.group
      await this.handleGetData(group, subgroup, id)
      await this.setState({ group: group, pageNumber: id, subgroup: subgroup })
      this.setState({ isLoading: false })
      return true
    }
    else return false
  }







  handleGetData = async (group, subgroup, id = 1) => {
    const limit = 6

    try {
      const { data = [{}], headers } = await getFilteredProducts(group, subgroup, limit, id)
      const totalCount = headers ? headers['x-total-count'] : 1
      const numberOfPages = Math.ceil(totalCount / limit)
      console.log(numberOfPages)
      await this.setState({ data, numberOfPages, pageNumber: id, subgroup: subgroup, group: group })
    }
    catch (error) {
      console.log('get data failed with error ==> ', error.message)
    }
  }


  style = {
    spinner: {
      // display: 'flex',
      // justifyContent: 'center',
      // flex: 1,
      // alignItems: 'center'
      // display: 'block'
    }
  }



  render() {
    return (
      <div>
        <ListMenu>
          {
            !this.state.isLoading ?
              <CardGroup data={this.state.data}>
                <Paginate numberOfPages={this.state.numberOfPages} clickedPage={async (clickedPage) => await this.setState({ clickedPage })} field={`home/${this.props.match.params.group}`} pathSection={this.props.match.params.subgroup} currentPage={this.props.match.params.id} />
              </CardGroup>
              :
              <section style={this.style.spinner}>
                <CardGroup >
                </CardGroup>
                  <Spinner />
              </section>
          }
        </ListMenu >
      </div>
    )
  }
}



const ProductsList = withRouter(ProductsListtt)
export { ProductsList }
