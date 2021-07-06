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

    await this.handleGetData(subgroup, id)
  }


  async shouldComponentUpdate(nextProps, nextState) {
    const { id, subgroup } = this.props.match.params
    // if (this.state.pageNumber !== id || this.state.subgroup !== subgroup) {
    if (this.props.match.params.id !== nextProps.match.params.id || this.props.match.params.subgroup !== nextProps.match.params.subgroup) {


      console.log('heyyyyyyyyyyyyyyyyyyyyyyyyyyy')
      const subgroup = nextProps.match.params.subgroup
      const id = nextProps.match.params.id
      await this.handleGetData(subgroup, id)
      await this.setState({ pageNumber: id, subgroup: subgroup })
      return true
    }
    else return false
  }







  handleGetData = async (subgroup, id = 1) => {
    const { group } = this.props.match.params  // this dhould get from props later  
    const limit = 6

    try {
      const { data = [{}], headers } = await getFilteredProducts(group, subgroup, limit, id)
      const totalCount = headers ? headers['x-total-count'] : 1
      const numberOfPages = Math.ceil(totalCount / limit)
      console.log(numberOfPages)
      await this.setState({ data, numberOfPages, pageNumber: id, subgroup: subgroup })
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
