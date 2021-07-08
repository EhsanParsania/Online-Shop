import React, { Component } from 'react'

import { ListMenu } from '../../../components/ListMenu/ListMenu.component'
import { CardGroupContainer } from './component/CardGroupContainer.component';

class MainCustomers extends Component {
  state = {
    data:[{}]
  }

  // async componentDidMount() {
  //   const {data} =await getData('groceries', 1, 6)
  //   console.log(data)
  //   this.setState({ data })
  // }


  render() {
    return (
      <ListMenu>
      <section>

      <CardGroupContainer field='groceries'/>
      <CardGroupContainer field='groceries'/>
      <CardGroupContainer field='groceries'/>
      <CardGroupContainer field='groceries'/>
      <CardGroupContainer field='groceries'/>
      <CardGroupContainer field='groceries'/>

   

      </section>
      </ListMenu>

    )
  }
}


export { MainCustomers }