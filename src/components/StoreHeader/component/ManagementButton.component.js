
import React, { Component } from 'react';
import { Button } from '@material-ui/core';



class ManagementButton extends Component {

  classes = {
    root: {
      display: 'flex',
      color: 'white',
      zIndex: 9
    }
  }
  render() {
    return (
      <Button className={this.classes.root} color='primary'>مدیریت</Button>
    )
  }
}
export default ManagementButton;
