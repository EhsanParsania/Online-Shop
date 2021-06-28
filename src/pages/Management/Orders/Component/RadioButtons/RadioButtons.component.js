import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState, useEffect } from 'react'

export function RadioButtons(props) {
  const [state, setState] = useState({ })
  useEffect(() => {
    props.details(state)
  }, [state])
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="top">

        <FormControlLabel
          value="true"
          control={<Radio color="primary" />}
          label="سفارش های تحویل شده"
          labelPlacement="start"
          onChange={() => setState({ isDelivered: 'true', isFilteredData: 'true' })}
        />
        <FormControlLabel
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
