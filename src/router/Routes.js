import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import createHistrory from "history/createBrowserHistory"
import { MainLayout, ManagementLayout } from '../layout/index.layout'
import { Quantity, Products, SignIn, Orders, MainCustomers, ProductDetails } from "../pages/index.pages";
import { ListMenu } from '../components/ListMenu/ListMenu.component'
import React from 'react'
import { ProductsList } from '../pages/index.pages'

import { Payment } from "../pages/index.pages";
import { ShoppingCart } from '../pages/index.pages'
import { Checkout } from "../pages/index.pages";
import { Error } from "../components/index.components";
import { PaymentResult } from "../pages/Customers/PaymentResult/PaymentResult.page";

function Routes() {
  const location = createHistrory()
  return (
    <Router
      history={location}
    >

      <Switch>
        {/* <Route path='/home' exact>
          <StoreRoutes />
        </Route>

        <Route path='/panel'  exact>
          <PanelRoutes />
        </Route>

        <Route path='/' exact >
          <Redirect to='/home' />
        </Route>

        <Route path='/home' exact  >
        <MainLayout>
          
        </MainLayout>
        </Route> */}



        <Route path='/home' exact >
          <MainLayout >
            <MainCustomers />
          </MainLayout>
        </Route>

        <Route path='/home/cart' exact >
          <MainLayout >
            <ShoppingCart />
          </MainLayout>
        </Route>

        <Route path='/home/products/:group/:subgroup/:id' exact>
          <ProductDetails />
        </Route>

        <Route path='/home/:group' exact >
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>

        <Route path='/home/:group/:subgroup' exact>
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>

        <Route path='/home/:group/:subgroup/:id' exact>
          <MainLayout >
            <ProductsList />
          </MainLayout>
        </Route>



        {/* <Route path='/payment' exact >
          <Payment />
        </Route> */}

        <Route path='/payment-result/:status/:number' exact>
          <MainLayout >
            <PaymentResult />
          </MainLayout>
        </Route>


        <Route path='/checkout' exact >
          <Checkout />
        </Route>









        <Route path='/panel/login' exact >
          <SignIn />
        </Route>

        <Route path='/panel/orders' exact >
          <ManagementLayout>
            <Orders />
          </ManagementLayout>
        </Route>

        <Route path='/panel/orders/:id' exact>
          <ManagementLayout>
            <Orders />
          </ManagementLayout>
        </Route>

        <Route path='/panel/products' exact>
          <ManagementLayout>
            <Products />
          </ManagementLayout>
        </Route>

        <Route path='/panel/products/:id' exact>
          <ManagementLayout>
            <Products />
          </ManagementLayout>
        </Route>

        <Route path='/panel/quantity' exact>
          <ManagementLayout>
            <Quantity />
          </ManagementLayout>
        </Route>

        <Route path='/panel/quantity/:id' exact>
          <ManagementLayout>
            <Quantity />
          </ManagementLayout>
        </Route>






        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/' >
          <Error>
            <h4>۴۰۴ <br></br>صفحه مورد نظر پیدا نشد</h4>
          </Error>
        </Route>



      </Switch>
    </Router>
  )
}

export { Routes }
