import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useState, useEffect } from 'react'

export function RadioButtons(props) {
  const [state, setState] = useState({ })
  useEffect(() => {
    props.details(state)
  }, [state])

  const style={
    formControl:{
      flexDirection:'row'
    },
    radio:{
      margin:'0 5px'
    }
  }

  return (
    <FormControl component="fieldset" style={style.formControl}>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">

        <FormControlLabel style={style.radio}
          value="true"
          control={<Radio color="primary" />}
          label="سفارش های تحویل شده"
          labelPlacement="start"
          onChange={() => setState({ isDelivered: 'true', isFilteredData: 'true' })}
        />
        <FormControlLabel style={style.radio}
          value="false"
          control={<Radio color="primary" />}
          label="سفارش های در انتظار ارسال"
          labelPlacement="start"
          onChange={() => setState({ isDelivered: 'false', isFilteredData: 'true' })}

        />
      </RadioGroup>
    </FormControl>
  );
}
