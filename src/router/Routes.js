import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import createHistrory from "history/createBrowserHistory"
import { MainLayout, ManagementLayout } from '../layout/index.layout'
import { Quantity, Products, SignIn,Orders } from "../pages/index.pages";
import {ListMenu} from '../components/ListMenu/ListMenu.component'
import React from 'react'

function Routes() {
  const location = createHistrory()
  return (
    <BrowserRouter
      history={location}
    >

      <Switch>
        <Route path='/' exact>
          <MainLayout >
            <ListMenu/>
          </MainLayout>
        </Route>
        <Route path='/panel/login' exact>
          <ManagementLayout>
            <SignIn />
          </ManagementLayout>
        </Route>
        <Route path='/panel/orders' exact>
          <ManagementLayout>
            <Orders />
          </ManagementLayout>
        </Route>
        <Route path='/panel/products' exact>
          <ManagementLayout>
            <Products />
          </ManagementLayout>
        </Route>
        <Route path='/panel/quantity' exact>
          <ManagementLayout>
            <Quantity />
          </ManagementLayout>
        </Route>
        <Route path='/panel' >
          <ManagementLayout>
            <SignIn />
          </ManagementLayout>
        </Route>


      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
