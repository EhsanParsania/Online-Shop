import React, { Component } from 'react'
import { getData, getFilteredProducts } from '../../../api/API'
import { ListMenu, Paginate, CardGroup } from '../../../components/index.components'
import { useParams, withRouter } from 'react-router'


class ProductsListtt extends Component {
  state = {
    pageNumber: 1,
    numberOfPages: '',
    data: [{}],
    group: '',
    subgroup: ''
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






  render() {
    return (
      <div>
        <ListMenu>
          <CardGroup data={this.state.data}>
            <Paginate numberOfPages={this.state.numberOfPages} clickedPage={async (clickedPage) => await this.setState({ clickedPage })} field={`home/${this.props.match.params.group}`} pathSection={this.props.match.params.subgroup} currentPage={this.props.match.params.id} />
          </CardGroup>
        </ListMenu >
      </div>
    )
  }
}



const ProductsList = withRouter(ProductsListtt)
export { ProductsList }
