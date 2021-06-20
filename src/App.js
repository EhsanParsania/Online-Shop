import { Component } from 'react';
import StoreHeader from './components/StoreHeader/StoreHeader.component'
import MainLayout from './layout/mainLayout';
import ListMenu from './components/ListMenu/ListMenu.component'
import PanelHeader from './components/PanelHeader/PanelHeader.component'
import ManagementLayout from './layout/ManagementLayout'

class App extends Component{
  render(){
    return(
      <>
      
    {/* <MainLayout>
      <ListMenu/>
    </MainLayout> */}
    {/* <PanelHeader>
    <ListMenu/>

    </PanelHeader> */}

    <ManagementLayout>
    <ListMenu/>

    </ManagementLayout>
      </>
    )
  }
}

export default App;
