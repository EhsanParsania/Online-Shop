import React, { Component } from 'react'
import {Error} from './Error.component'

export  class ErrorBoundry extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <Error >
           بارگذاری سایت با مشکل مواجه شد
        </Error>
      )
    }
    return this.props.children
  }
}
