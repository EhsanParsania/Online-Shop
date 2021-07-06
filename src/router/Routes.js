import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import createHistrory from "history/createBrowserHistory"
import { MainLayout, ManagementLayout } from '../layout/index.layout'
import { Quantity, Products, SignIn, Orders, MainCustomers, ProductDetails } from "../pages/index.pages";
import React from 'react'
import { ProductsList } from '../pages/index.pages'
import { Payment } from "../pages/index.pages";

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

        <Route path='/home/products/:subgroup/:name' exact>
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



        <Route path='/payment' exact >
          <Payment />
        </Route>








        <Route path='/panel/login' exact >
          <ManagementLayout>
            <SignIn />
          </ManagementLayout>
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
          <h1 style={{ textAlign: 'center', marginTop: '15%' }}>
            ۴۰۴ <br></br>
            صفحه مورد نظر پیدا نشد !
          </h1>
        </Route>



      </Switch>
    </Router>
  )
}

export { Routes }
