import { Component } from 'react';
import { ErrorBoundry } from './components/index.components'
import { Routes } from './router/Routes'



class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
          <Routes />
        </ErrorBoundry>
      </div>
    )
  }
}

export default App;
