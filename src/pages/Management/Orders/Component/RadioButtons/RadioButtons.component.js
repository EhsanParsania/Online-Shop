import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export function RadioButtons() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
     
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="سفارش های تحویل شده"
          labelPlacement="start"
          onChange={()=>console.log('سفارش های تحویل شده')}
        />
      
        <FormControlLabel 
        value="end  " 
        control={<Radio color="primary" />} 
        label="سفارش های در انتظار ارسال"   
        labelPlacement="start" 
        onChange={()=>console.log('سفارش های در انتظار ارسال')}

         />
      </RadioGroup>
    </FormControl>
  );
}