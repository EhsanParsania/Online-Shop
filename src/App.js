import { Component } from 'react';
import { MainLayout } from './layout/index.layout'
import { ManagementLayout } from './layout/index.layout'
import { ListMenu } from './components/index.components'
import { Quantity, Products, SignIn } from './pages/index.pages'
import { Routes } from './router/Routes'



class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App;
